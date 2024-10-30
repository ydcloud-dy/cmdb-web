<template>
  <div>
    <el-table :data="Deploymentreplicas">
      <el-table-column label="版本" prop="name" min-width="80" show-overflow-tooltip>
        <template #default="scope">
          <span>{{ scope.row.metadata.annotations["deployment.kubernetes.io/revision"] }}</span>
        </template>
      </el-table-column>
      <el-table-column label="镜像" prop="image" min-width="80" show-overflow-tooltip>
        <template #default="scope">
          <span v-for="(k, index) in scope.row.spec.template.spec.containers" :key="index">
            <span class="label-custom wd" type="info">{{ k.image }}</span>
          </span>
        </template>
      </el-table-column>
      <el-table-column label="时间" prop="time" min-width="80" show-overflow-tooltip>
        <template #default="scope">
          <span>{{ formatTimeToStr(scope.row.metadata.creationTimestamp) }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template #default="scope">
          <el-button size="small" type="primary" link @click="historyDetail(scope.row)">详情</el-button>
          <el-button size="small" type="primary" link @click="handleRollback(scope.row)">回滚</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div v-if="dialogYamlVisible">
      <el-dialog v-model="dialogYamlVisible" width="60%" :title="title">
        <template #default>
          <div class="dialog-footer">
            <YamlBlock :data="YamlData" :read-only="readOnly" />
          </div>
        </template>
      </el-dialog>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailReplicas',
}
</script>
<script setup>
import { ref } from 'vue'
import {
  ReplicaSetsList,
} from '@/api/kubernetes/replicasets'
import { formatTimeToStr } from '@/utils/date'
import YamlBlock from '@/components/kubernetes/yaml/index.vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import { DeploymentsPatch } from '@/api/kubernetes/deployments'
// const emit = defineEmits(['update'])
const props = defineProps({
  data: {
    default: function() {
      return {}
    },
    type: Object
  },
  selectors: {
    default: function() {
      return ''
    },
    type: String
  }
})

// 数据初始化
const Detaildata = ref({})
const Selectors = ref('')
const readOnly = ref(false)
const DetailDataInit = async() => {
  Detaildata.value = props.data
  Selectors.value = props.selectors
}

DetailDataInit()

const Deploymentreplicas = ref([])
const DeploymentreplicasInit = async() => {
  const res = await ReplicaSetsList({cluster_id:Detaildata.value.cluster_id, namespace:Detaildata.value.metadata.namespace,labelSelector:Selectors.value})
  if (res.code === 0 && res.data.items) {
    res.data.items.sort((a, b) => b.metadata.annotations['deployment.kubernetes.io/revision'] - a.metadata.annotations['deployment.kubernetes.io/revision'])
    for (var i = 0; i < res.data.items.length; i++) {
      Deploymentreplicas.value.push(res.data.items[i])
    }
  }
}

DeploymentreplicasInit()

// 历史详情
const YamlData = ref({})
const dialogYamlVisible = ref(false)
const title = ref('')
const historyDetail = (row) => {
  YamlData.value = row
  title.value = '详情'
  readOnly.value = true
  dialogYamlVisible.value = true
}

// 版本回退
const handleRollback = (row) => {
  ElMessageBox.confirm('此操作将回滚当前 deployment 到改版本，是否继续?',
    'Warning',
    {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning',
      center: true,
    }
  ).then(async() => {
    console.log("================================")
    console.log(Detaildata.value)
    console.log(row.metadata.namespace)
    console.log(Detaildata.value.metadata.name)
    console.log({ spec: { template: row.spec.template }})
    const res = await DeploymentsPatch({cluster_id:Detaildata.value.cluster_id,
        namespace:row.metadata.namespace, deploymentName:Detaildata.value.metadata.name,
        content:{ spec: { template: row.spec.template }}})
    if (res.code === 0) {
      ElMessage({
        type: 'success',
        message: '回滚成功',
      })
    }
  }).catch(() => {
    ElMessage({
      type: 'info',
      message: '已取消',
    })
  })
}
</script>
<style scoped>

</style>
