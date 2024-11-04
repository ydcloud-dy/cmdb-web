<template>
  <div>
    <el-table
        ref="multipleTable"
        :data="tableData"
        style="width: 100%"
        tooltip-effect="dark"
        row-key="ID"
        @sort-change="sortChange"
        @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="55" />
      <el-table-column align="left" label="ID" prop="ID" sortable="custom" />
      <el-table-column align="left" label="名称" prop="name" sortable="custom" />

      <!-- 环境标识列 -->
      <el-table-column align="left" label="环境标识" prop="key">
        <template #default="scope">
          <el-tag
              :style="getEnvTagStyle(scope.row.key)"
              effect="plain"
          >
            {{ scope.row.key }}
          </el-tag>
        </template>
      </el-table-column>

      <el-table-column align="left" label="描述信息" prop="desc" />
      <el-table-column align="left" label="创建时间" prop="CreatedAt" :formatter="formatDate" />

      <el-table-column align="left" label="操作">
        <template #default="scope">
          <el-button size="small" type="primary" link icon="edit" @click="handleUpdate(scope.row)">操作</el-button>
          <el-popover v-model="scope.row.visible" placement="top">
            <p>确定要删除吗？</p>
            <div style="text-align: right; margin-top: 8px;">
              <el-button size="small" type="primary" link @click="scope.row.visible = false">取消</el-button>
              <el-button type="primary" size="small" @click="handleDelete(scope.row)">确定</el-button>
            </div>
            <template #reference>
              <el-button type="primary" link icon="delete" size="small" @click="scope.row.visible = true">删除</el-button>
            </template>
          </el-popover>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import dayjs from 'dayjs'
import { toSQLLine } from '@/utils/stringFun'

const emit = defineEmits(['update', 'delete', 'search', 'region'])
defineProps({
  tableData: {
    default: function() {
      return []
    },
    type: Array
  },
})

// 日期格式化函数
const formatDate = (row, column, cellValue) => {
  return cellValue ? dayjs(cellValue).format('YYYY-MM-DD HH:mm:ss') : ''
}

// 固定颜色数组
const tagColors = [
  { backgroundColor: '#fde2e2', color: '#f56c6c', borderColor: '#f56c6c' },
  { backgroundColor: '#e7f3fe', color: '#409eff', borderColor: '#409eff' },
  { backgroundColor: '#e1f7e7', color: '#67c23a', borderColor: '#67c23a' },
  { backgroundColor: '#fff2cc', color: '#e6a23c', borderColor: '#e6a23c' }
]

// 获取环境标签的自定义样式
const getEnvTagStyle = (key) => {
  const index = Math.abs(key.length % tagColors.length)  // 通过长度或哈希来分配颜色
  return tagColors[index]
}

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
const handleUpdate = (value) => {
  emit('update', value)
}

// 同步Region
const handleUpdateRegion = (value) => {
  emit('region', value)
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
