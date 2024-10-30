<template>
  <div>
    <el-table ref="multipleTable" :data="tableData" style="width: 100%" tooltip-effect="dark" row-key="ID" @sort-change="sortChange" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55" />
      <el-table-column align="left" label="ID" prop="id" sortable="custom" width="55" />
      <el-table-column align="left" label="集群" prop="cluster" sortable="custom" />
      <el-table-column align="left" label="命名空间" prop="namespace" sortable="custom" />
      <el-table-column align="left" label="Pod" prop="pod_name" sortable="custom" />
      <el-table-column align="left" label="Container" prop="container_name" sortable="custom" />
      <el-table-column align="left" label="用户" prop="nickName" sortable="custom" width="100"/>
      <el-table-column align="left" label="创建时间" prop="created_at" width="180">
        <template #default="scope">
          {{ formatTimeToStr(scope.row.created_at) }}
        </template>
      </el-table-column>
      <el-table-column align="left" label="操作">
        <template #default="scope">
          <el-button size="small" type="primary" link icon="CaretRight" @click="handlePlay(scope.row)">播放</el-button>
          <el-button type="primary" link icon="delete" size="small" @click="handleDelete(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'TableBlock',
  emits: {
    update: () => {
      return true
    },
    search: () => {
      return true
    },
    delete: (value) => {
      if (value.length === 1) {
        return true
      } else {
        return false
      }
    },
  }
}
</script>
<script setup>
import { ref } from 'vue'
import { toSQLLine } from '@/utils/stringFun'
import { formatTimeToStr } from '@/utils/date'
const emit = defineEmits(['play', 'delete', 'search', 'select'])
defineProps({
  tableData: {
    default: function() {
      return []
    },
    type: Array
  },
})

// 搜索排序
const searchInfo = ref({})
const sortChange = ({ prop, order }) => {
  if (prop) {
    if (prop === 'ID') {
      prop = 'id'
    }
    searchInfo.value.orderKey = toSQLLine(prop)
    searchInfo.value.desc = order === 'descending'
  }
  emit('search', searchInfo.value)
}

// 更新
const handlePlay = (value) => {
  emit('play', value)
}

// 删除
const handleDelete = (value) => {
  emit('delete', value)
}

// 批量操作
const handleSelectionChange = (value) => {
  emit('select', value)
}
</script>
<style scoped>

</style>
