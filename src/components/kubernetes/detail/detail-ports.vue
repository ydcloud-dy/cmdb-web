<template>
  <div>
    <el-table :data="Detaildata">
      <el-table-column label="名称" prop="name" min-width="80" show-overflow-tooltip>
        <template #default="scope">
          <span>{{ scope.row.name }}</span>
        </template>
      </el-table-column>
      <el-table-column label="端口" prop="port" min-width="80" show-overflow-tooltip>
        <template #default="scope">
          <span>{{ scope.row.port }}</span>
        </template>
      </el-table-column>
      <el-table-column label="协议" prop="protocol" min-width="80" show-overflow-tooltip>
        <template #default="scope">
          <span>{{ scope.row.protocol }}</span>
        </template>
      </el-table-column>
      <el-table-column label="targetPort" prop="targetPort" min-width="80" show-overflow-tooltip>
        <template #default="scope">
          <span>{{ scope.row.targetPort }}</span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'DetailPorts',
}
</script>
<script setup>
import { ref } from 'vue'
const props = defineProps({
  data: {
    default: function() {
      return {}
    },
    type: Object
  },
})
const Detaildata = ref({})
const DetailDataInit = async() => {
  Detaildata.value = props.data
}
DetailDataInit()
</script>
<style scoped>

</style>
