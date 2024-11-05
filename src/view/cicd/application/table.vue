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
        highlight-current-row

    >
      <el-table-column type="selection" width="55" />
      <el-table-column align="left" label="ID" prop="ID" width="80" sortable="custom" />
      <!-- 应用名列，添加 el-link 以实现跳转 -->
      <el-table-column align="left" label="应用名" prop="name" sortable="custom">
        <template #default="scope">
          <el-link @click.prevent="goToDetail(scope.row.ID)" style="cursor: pointer;">{{ scope.row.name }}</el-link>
        </template>
      </el-table-column>
      <el-table-column align="left" label="全名称" prop="full_name" />
      <el-table-column align="left"  label="语言" prop="language" />
      <el-table-column align="left" label="构建目录" prop="build_path" />

      <!-- 可点击的仓库地址列 -->
      <el-table-column align="left" label="仓库地址" prop="path" show-overflow-tooltip>
        <template #default="scope">
          <el-link :href="scope.row.path" target="_blank">{{ scope.row.path }}</el-link>
        </template>
      </el-table-column>


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
import { useRouter } from 'vue-router' // 使用 Vue Router 进行页面跳转
const router = useRouter() // 初始化 router

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

// 同步Region
const handleUpdateRegion = (value) => {
  emit('region', value)
}
const handleTest = (value) => {
  emit('test', value)
}
// 行点击事件处理
const handleRowClick = (row) => {
  // 使用 Vue Router 跳转到详情页，并将行的 ID 作为参数传递
  router.push({ name: 'applicationDetail', params: { id: row.ID } })
}
// 跳转到详情页
const goToDetail = (id) => {
  router.push({ name: 'applicationDetail', query: { id: id } })
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
