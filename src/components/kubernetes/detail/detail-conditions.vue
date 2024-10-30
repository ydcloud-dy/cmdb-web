<template>
  <div>
    <h3>运行时信息</h3>
    <el-table :data="Conditions">
      <el-table-column label="类别" prop="type" min-width="50" show-overflow-tooltip />
      <el-table-column label="状态" prop="status" min-width="30" />
      <el-table-column label="消息" min-width="100" show-overflow-tooltip>
        <template #default="scope">
          <span v-if="scope.row.message">[{{ scope.row.reason }} ]: {{ scope.row.message }}</span>
          <span v-if="!scope.row.message">---</span>
        </template>
      </el-table-column>
      <el-table-column label="最后更新时间" min-width="50" prop="lastUpdateTime">
        <template #default="scope">
          {{ formatTimeToStr(scope.row.lastUpdateTime) }}
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'DetailIngress',
}
</script>
<script setup>
import { formatTimeToStr } from '@/utils/date'
import { ref } from 'vue'
const props = defineProps({
  conditions: {
    default: function() {
      return []
    },
    type: Array
  }
})

// 数据初始化
const Conditions = ref([])
const DetailDataInit = async() => {
  Conditions.value = props.conditions
}

DetailDataInit()
</script>
<style scoped>

</style>
