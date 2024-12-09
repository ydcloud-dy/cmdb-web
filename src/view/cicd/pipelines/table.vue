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
      <el-table-column align="left" label="流水线名称" prop="name" sortable="custom">
        <template #default="scope">
          <el-link @click.prevent="goToDetail(scope.row.ID)" style="cursor: pointer;">{{ scope.row.name }}</el-link>
        </template>
      </el-table-column>
      <el-table-column align="left" label="应用名称" prop="app_name" />
      <el-table-column align="left"  label="环境" prop="env_name" />
      <el-table-column align="left" label="创建人" prop="CreatedName" />

      <el-table-column align="left" label="创建时间" prop="CreatedAt" :formatter="formatDate" />
      <el-table-column align="left" label="修改时间" prop="UpdatedAt" :formatter="formatDate" />

      <el-table-column align="left" label="操作">
        <template #default="scope">
          <el-button size="small" type="primary" link icon="edit" @click="handleRun(scope.row)">运行</el-button>
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

const emit = defineEmits(['run', 'delete', 'search', 'region', 'test'])
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
const handleRun = (value) => {
  emit('run', value)
}

// 同步Region
const handleUpdateRegion = (value) => {
  emit('region', value)
}
const handleTest = (value) => {
  emit('test', value)
}
// 行点击事件处理

// 跳转到详情页
const goToDetail = (id) => {
  console.log(id)
  router.push({ name: 'pipelineDetail', query: { id: id } })
  // router.push({ path: '/layout/cicd/pipelineDetail' });

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
