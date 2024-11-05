<template>
  <div>
    <el-table ref="multipleTable" :data="tableData" style="width: 100%" tooltip-effect="dark" row-key="ID" @sort-change="sortChange" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55" />
      <el-table-column align="left" label="ID" prop="ID" sortable="custom" />
      <!-- 自定义的名称列 -->
      <el-table-column align="left" label="名称" prop="name" sortable="custom">
        <template #default="scope">
          <el-tag type="success">{{ scope.row.name }}</el-tag>
<!--          <span class="status-label" :class="{ 'status-ready': scope.row.name === 'Ready' }">-->
<!--            {{ scope.row.name }}-->
<!--          </span>-->
        </template>
      </el-table-column>

      <!-- 类型列，使用插槽实现样式化标签显示 -->
      <el-table-column align="left" label="镜像地址" prop="image">
        <template #default="scope">
          <el-tooltip class="item" effect="dark" :content="scope.row.image" placement="top">
            <span>{{ scope.row.image }}</span>
          </el-tooltip>
        </template>
      </el-table-column>

      <el-table-column align="left" label="启动命令" prop="command" />
      <el-table-column align="left" label="启动参数" prop="args" />
      <el-table-column align="left" label="描述" prop="desc" />
      <el-table-column align="left" label="创建者" prop="CreatedName" />
      <el-table-column align="left" label="创建时间" prop="CreatedAt" :formatter="formatDate" />

      <el-table-column align="left" label="操作">
        <template #default="scope">
          <el-button size="small" type="primary" link icon="edit" @click="handleUpdate(scope.row)">编辑</el-button>
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

const emit = defineEmits(['update', 'delete', 'search', 'region','test'])
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
const handleTest = (value) => {
  emit('test', value)
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
