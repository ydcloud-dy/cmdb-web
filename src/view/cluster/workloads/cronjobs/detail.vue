<template>
  <div>
    <el-row :gutter="20" class="row-box">
      <el-col :span="24">
        <el-card class="el-card">
          <detail-basic :form="detailData" />
        </el-card>
      </el-col>
      <el-col :span="24">
        <el-tabs v-model="activeName" type="border-card">
          <el-tab-pane name="jobs" label="Jobs">
            <detail-jobs :form="detailData" />
          </el-tab-pane>
        </el-tabs>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'DetailBlock',
}
</script>

<script setup>
import DetailBasic from '@/components/kubernetes/detail/detail-basic.vue'
import DetailJobs from '@/components/kubernetes/detail/detail-jobs.vue'
import { ref } from 'vue'
const props = defineProps({
  data: {
    default: function() {
      return {}
    },
    type: Object
  },
})

// 数据初始化
const activeName = ref('')
const detailData = ref({})
const detailInitData = () => {
  activeName.value = 'jobs'
  detailData.value = props.data
}

detailInitData()
</script>
<style scoped>

</style>
