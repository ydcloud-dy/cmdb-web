<template>
  <div>
    <el-table ref="multipleTable" :data="tableData" style="width: 100%" tooltip-effect="dark" row-key="ID" @sort-change="sortChange" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55" />
      <el-table-column align="left" label="ID" prop="ID" sortable="custom" />
      <el-table-column align="left" label="名称" prop="name" sortable="custom" />

      <!-- 用户名列 -->
      <el-table-column align="left" label="用户名" prop="config.username" />

      <!-- 仓库类型列，基于type字段的值显示不同仓库名称 -->
      <el-table-column align="left" label="仓库类型">
        <template #default="scope">
          <el-tag
              v-if="scope.row.type === 3"
              type="success"
              effect="plain"
              style="color: red; background-color: #ffe8e8; border-color: #f5b2b2"
          >
            GitLab
          </el-tag>
          <el-tag
              v-else-if="scope.row.type === 4"
              type="info"
              effect="plain"
              style="color: blue; background-color: #e8f3ff; border-color: #c2e1ff"
          >
            GitHub
          </el-tag>
          <el-tag
              v-else-if="scope.row.type === 5"
              type="warning"
              effect="plain"
              style="color: green; background-color: #eaffea; border-color: #b2f5b2"
          >
            Gitee
          </el-tag>
          <el-tag
              v-else-if="scope.row.type === 6"
              type="primary"
              effect="plain"
              style="color: purple; background-color: #f0e8ff; border-color: #d6c2f5"
          >
            Gitea
          </el-tag>
          <el-tag
              v-else-if="scope.row.type === 7"
              type="danger"
              effect="plain"
              style="color: orange; background-color: #ffeacc; border-color: #f5d0a2"
          >
            Gogs
          </el-tag>
          <el-tag v-else effect="plain">未知类型</el-tag>
        </template>
      </el-table-column>

      <!-- 是否开源列，基于config.type字段的值显示“私有”或“开源” -->
      <el-table-column align="left" label="是否开源">
        <template #default="scope">
          <el-tag
              v-if="scope.row.config && scope.row.config.type === 0"
              type="danger"
              effect="plain"
              style="color: red; background-color: #ffe8e8; border-color: #f5b2b2"
          >
            私有
          </el-tag>
          <el-tag
              v-else-if="scope.row.config && scope.row.config.type === 1"
              type="success"
              effect="plain"
              style="color: green; background-color: #eaffea; border-color: #b2f5b2"
          >
            开源
          </el-tag>
          <el-tag v-else effect="plain">未知</el-tag>
        </template>
      </el-table-column>

      <!-- 地址列 -->
      <el-table-column align="left" label="地址" prop="config.url" />

      <!-- 创建时间列，格式化显示 -->
      <el-table-column align="left" label="创建时间" prop="CreatedAt" :formatter="formatDate" />

      <!-- 操作列 -->
      <el-table-column align="left" label="操作">
        <template #default="scope">
          <el-button size="small" type="primary" link icon="edit" @click="handleUpdate(scope.row)">编辑</el-button>
          <el-button size="small" type="primary" link icon="promotion" @click="handleTest(scope.row)">测试</el-button>
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

const emit = defineEmits(['update', 'delete', 'search', 'region', 'test'])
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

// 测试
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
