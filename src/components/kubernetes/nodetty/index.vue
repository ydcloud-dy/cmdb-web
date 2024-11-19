<template>
  <div>
    <warning-bar title="注：NodeShell Pod 需要创建特权权限，请确保有足够的权限。" />
    <div class="dycloud-btn-list">
      <el-form
          ref="searchForm"
          :inline="true"
      >
        <el-form-item>
          <el-button
              v-if="TerminalData"
              icon="Files"
              type="primary"
              @click="handleFiles()"
          >文件浏览</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div
        v-if="TerminalData"
        class="dialog-footer"
    >
      <div>
        <PodsTerminalBlock
            :data="TerminalData"
            :name="ContainerName"
        />
      </div>
    </div>

    <div v-if="dialogFilesVisible">
      <el-dialog
          ref="files"
          v-model="dialogFilesVisible"
          width="70%"
          :title="title"
      >
        <template #default>
          <div class="dialog-footer">
            <FilesBlock
                :form="TerminalData"
                @close="closeDialog"
            />
          </div>
        </template>
      </el-dialog>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CloudTTY',
}
</script>
<script setup>
import WarningBar from '@/components/warningBar/warningBar.vue'
import { ref } from 'vue'
import { getNodetty } from '@/api/kubernetes/nodes/nodetty'
import {GetPodsList} from '@/api/kubernetes/pods'
import PodsTerminalBlock from '@/components/kubernetes/pods/terminal.vue'
import FilesBlock from '@/components/kubernetes/pods/files.vue'

const props = defineProps({
  node_name: {
    default: function() {
      return ''
    },
    type: String
  }
})

// 判断pod状态
const namespace = ref('')
const labelSelector = ref('')
const podName = ref('')
const ContainerName = ref('')
const TerminalData = ref('')
const dialogFilesVisible = ref(false)

const DeterminPodStatus = async () => {
  let attempts = 0; // 请求次数计数器

  while (attempts < 100) {
    attempts += 1; // 增加请求次数
    console.log(`Attempt ${attempts}: Fetching pod status...`);

    try {
      console.log("label === ", labelSelector.value)
      // 调用 PodLists 获取数据
      await PodLists(namespace.value, labelSelector.value);

      // 确保 PodsData.value 有数据
      if (!PodsData.value || PodsData.value.length === 0) {
        console.log('No pods found, retrying...');
        await new Promise((resolve) => setTimeout(resolve, 3000)); // 等待 3 秒钟
        continue;
      }

      // 提取第一个 Pod 数据
      const pod = PodsData.value.find((pod) => pod.status && pod.status.phase);

      if (!pod) {
        console.log('No valid pod found, retrying...');
        await new Promise((resolve) => setTimeout(resolve, 3000)); // 等待 3 秒钟
        continue;
      }

      // 检查 Pod 的运行状态
      const phase = pod.status.phase;
      console.log(`Pod phase: ${phase}`);
      if (phase === 'Running') {
        podName.value = pod.metadata.name;
        TerminalData.value = pod;
        TerminalData.value['cluster_id'] = cluster_id.value;
        console.log('Pod is running. Initialization complete.');
        break; // 退出循环
      } else {
        console.log(`Pod is in ${phase} state, waiting...`);
      }
    } catch (error) {
      console.log(`Attempt ${attempts}: Error fetching pod status -`, error);
    }

    // 等待 3 秒钟再重新获取数据
    await new Promise((resolve) => setTimeout(resolve, 3000));
  }

  if (attempts >= 100) {
    console.log('Exceeded maximum attempts. Exiting...');
  }
};

// 获取Pod信息
const PodsData = ref([])
const PodLists = async(namespace, selector) => {
  const res = await GetPodsList({cluster_id:cluster_id.value,  namespace:namespace,  labelSelector:selector})
  if (res.code === 0 && res.data.items) {
    console.log(res,"podlist================================================================")
    console.log(res.data)
    PodsData.value = res.data.items
  }
}

const cluster_id = ref(0)
const node_name_data = ref('')
const InitCloudTTY = async () => {
  try {
    cluster_id.value = parseInt(localStorage.getItem('cluster_id'));
    node_name_data.value = props.node_name;
    labelSelector.value = 'devops/podName=';

    const ret = await getNodetty({ cluster_id: cluster_id.value, node_name: node_name_data.value });
    if (ret.code === 0 && ret.data) {
      if (ret.data.name) {
        labelSelector.value += ret.data.name;
        namespace.value = ret.data.namespace;
        ContainerName.value = ret.data.container;
        console.log("--------------------------------")
        // 调用 DeterminPodStatus
        await DeterminPodStatus();
      } else {
        console.warn('Ret data does not contain "name" property:', ret.data);
      }
    } else {
      console.warn('getNodetty response invalid or code !== 0:', ret);
    }
  } catch (error) {
    console.error('Error initializing CloudTTY:', error);
  }
};


InitCloudTTY()

// 文件浏览
const title = ref('')
const handleFiles = () => {
  title.value = 'Pod: ' + TerminalData.value.metadata.name + ' Container: ' + ContainerName.value + '  文件浏览'
  TerminalData.value['container_name'] = ContainerName
  dialogFilesVisible.value = true
}

// 关闭模态框
const closeDialog = () => {
  dialogFilesVisible.value = false
}
</script>
<style scoped>
</style>
