<template>
  <div>
    <el-table :data="JobsData">
      <el-table-column label="状态" min-width="45">
        <template #default="scope">
          <el-tag v-if="scope.row.status.succeeded" type="success">
            Succeeded
          </el-tag>
          <el-tag v-if="scope.row.status.failed" type="warning">
            Failed
          </el-tag>
          <el-tag v-if="scope.row.status.active" type="success">
            Active
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column label="名称" prop="name" min-width="80" show-overflow-tooltip>
        <template #default="scope">
          <span class="span-link">{{ scope.row.metadata.name }}</span>
        </template>
      </el-table-column>
      <el-table-column label="完成状态" min-width="60">
        <template #default="scope">
          <el-tag v-if="scope.row.status.active" style="margin-left: 5px" type="info">active: *{{ scope.row.status.active }}</el-tag>
          <el-tag v-if="scope.row.status.succeeded" style="margin-left: 5px" type="success">succeeded: {{ scope.row.status.succeeded }}</el-tag>
          <el-tag v-if="scope.row.status.failed" style="margin-left: 5px" type="danger">failed: {{ scope.row.status.failed }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="耗时" min-width="30">
        <template #default="scope">
          {{ getDuration(scope.row) }}
        </template>
      </el-table-column>
      <el-table-column label="存活时间" min-width="40" prop="metadata.creationTimestamp" show-overflow-tooltip fix>
        <template #default="scope">
          {{ AgeFormat(scope.row.metadata.creationTimestamp) }}
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'DetailJobs',
}
</script>
<script setup>
import { ref } from 'vue'
import {
  JobsList,
} from '@/api/kubernetes/jobs'
import { AgeFormat } from '@/utils/age'
const props = defineProps({
  form: {
    default: function() {
      return {}
    },
    type: Object
  },
})

// Jobs列表获取
const JobsData = ref([])
const GetJobsLists = async() => {
  const res = await JobsList({cluster_id:Detaildata.value.cluster_id, namespace: Detaildata.value.metadata.namespace})
  if (res.code === 0) {
    for (const job of res.data.items) {
      for (const ownerReferences of job.metadata.ownerReferences) {
        if (ownerReferences.name === Detaildata.value.metadata.name) {
          JobsData.value.push(job)
        }
      }
    }
  }
}

// 耗时
const getDuration = (row) => {
  const startTime = new Date(row.status.startTime)
  if (!row.status.completionTime) {
    return '/'
  } else {
    const endTime = new Date(row.status.completionTime)
    const t = Math.floor((endTime - startTime) / 1000)
    if (t % 60 !== 0) {
      return (t % 60) + ' mins'
    }
    if (t % 3600 !== 0) {
      return (t % 60) + ' hours ago'
    }
    return Math.floor((endTime - startTime) / 1000) + 'S'
  }
}

// Jobs列表
const Detaildata = ref({})
const DetailPodsDataInit = async() => {
  Detaildata.value = props.form
  await GetJobsLists(Detaildata.value)
}
DetailPodsDataInit()
</script>
<style scoped>

</style>
