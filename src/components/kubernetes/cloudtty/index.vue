<template>
  <div>
    <warning-bar title="注：请在Kubernetes集群内安装CloudTTY以便于使用该功能。（地址: https://github.com/cloudtty/cloudtty)" />
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
import { getCloudtty } from '@/api/kubernetes/cloudtty'
import {GetPodsList} from '@/api/kubernetes/pods'
import PodsTerminalBlock from '@/components/kubernetes/pods/terminal.vue'
import FilesBlock from '@/components/kubernetes/pods/files.vue'

// 判断pod状态
const namespace = ref('')
const labelSelector = ref('')
const podName = ref('')
const ContainerName = ref('')
const TerminalData = ref('')
const dialogFilesVisible = ref(false)

const DeterminPodStatus = async() => {
  let attempts = 0 // 请求次数计数器
  while (attempts < 100) {
    attempts += 1 // 增加请求次数
    try {
      await PodLists(namespace.value, labelSelector.value)
      if (PodsData.value.length > 1) {
        // 等待 3 秒钟再重新获取数据
        await new Promise(resolve => setTimeout(resolve, 3000))
      }

      const pod = PodsData.value[0]
      if (pod.status.phase) {
        const phase = pod.status.phase
        if (phase === 'Running') {
          podName.value = pod.metadata.name
          TerminalData.value = pod
          TerminalData.value['cluster_id'] = cluster_id.value
          break
        } else {
          console.log('Pod is not running yet, waiting...')
        }
      }
    } catch (error) {
      console.log(`Attempt ${attempts}: Error fetching pod status -`, error)
    }

    // 等待 3 秒钟再重新获取数据
    await new Promise(resolve => setTimeout(resolve, 3000))
  }

  if (attempts >= 100) {
    console.log('Exceeded maximum attempts. Exiting...')
  }
}

// 获取Pod信息
const PodsData = ref([])
const PodLists = async(namespace, selector) => {
  const res = await GetPodsList({cluster_id:cluster_id.value,  namespace:namespace,  selector})
  if (res.code === 0 && res.data.items) {
    PodsData.value = res.data.items
  }
}

const cluster_id = ref(0)
const InitCloudTTY = async() => {
  cluster_id.value = parseInt(localStorage.getItem('cluster_id'))
  labelSelector.value = 'cloudshell.cloudtty.io/owner-name='
  const ret = await getCloudtty({ 'cluster_id': cluster_id.value })
  if (ret.code === 0) {
    if (ret.data) {
      if (ret.data.name) {
        labelSelector.value += ret.data.name
        namespace.value = ret.data.namespace
        ContainerName.value = ret.data.container
        await DeterminPodStatus()
      }
    }
  }
}

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
