<template>
  <div>
    <div class="dycloud-search-box">
      <el-form ref="searchForm" :inline="true" :model="searchInfo">
        <el-form-item label="Pod名称">
          <el-input v-model="searchInfo.pod_name" placeholder="Pod名称" />
        </el-form-item>
        <el-form-item>
          <el-button size="small" type="primary" icon="search" @click="onSubmit">查询</el-button>
          <el-button size="small" icon="refresh" @click="onReset">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="dycloud-table-box">
      <div class="dycloud-btn-list">
        <el-button icon="delete" size="small" style="margin-left: 10px;" @click="onDelete">删除</el-button>
      </div>
      <div v-if="tableData">
        <TableBlock :table-data="tableData" @search="handlesortChange" @select="handleSelectionChange" @delete="handleDelete" @play="handlePlay" />
      </div>
    </div>
    <div class="dycloud-pagination">
      <el-pagination
        :current-page="page"
        :page-size="pageSize"
        :page-sizes="[10, 30, 50, 100]"
        :total="total"
        layout="total, sizes, prev, pager, next, jumper"
        @current-change="handleCurrentChange"
        @size-change="handleSizeChange"
      />
    </div>
    <div v-if="dialogFormVisible">
      <el-dialog
        v-model="dialogFormVisible"
        width="100%"
        :title="title"
      >
        <warning-bar title="注：Asciinema-player 支持 space 空格，播放或暂停，f 全屏播放。" />
        <FormBlock :data="recordData" @close="closeDialog" />
      </el-dialog>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Index',
}
</script>

<script setup>
import FormBlock from './form.vue'
import TableBlock from './table.vue'
import WarningBar from '@/components/warningBar/warningBar.vue'
import { ref } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import { getlistRecord, getRecordById, recordDelete, recordDeleteByIds } from '@/api/kubernetes/records'

const form = ref({})
const page = ref(1)
const total = ref(0)
const pageSize = ref(10)
const tableData = ref([])
const title = ref('')
const searchInfo = ref({})
const deleteVisible = ref(false)
const clusters = ref([])

// 搜索
const onReset = () => {
  searchInfo.value = {}
}

// 排序
const handlesortChange = (value) => {
  searchInfo.value = value
  getTableData()
}

// 提交搜索
const onSubmit = () => {
  page.value = 1
  pageSize.value = 10
  getTableData()
}

// 分页
const handleSizeChange = (val) => {
  pageSize.value = val
  getTableData()
}

const handleCurrentChange = (val) => {
  page.value = val
  getTableData()
}

// 查询
const getTableData = async() => {
  const table = await getlistRecord({ page: page.value, pageSize: pageSize.value, ...searchInfo.value })
  if (table.code === 0) {
    tableData.value = table.data.list
    total.value = table.data.total
    page.value = table.data.page
    pageSize.value = table.data.pageSize
  }
}

getTableData()

// 更新数据模态框
const dialogFormVisible = ref(false)

// 关闭模态框
const closeDialog = () => {
  dialogFormVisible.value = false
  form.value = {}
}

// 删除数据
const handleDelete = async(row) => {
  ElMessageBox.confirm('您确定要删除该条记录？, 该操作不可逆是否继续?', '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning'
  })
    .then(async() => {
      row.visible = false
      const res = await recordDelete({ id: row.id })
      if (res.data.items) {
        if (res.data.items.code) {
          ElMessage({
            type: 'error',
            message: res.data.items.message,
          })
          return
        }
      }

      if (res.code === 0) {
        ElMessage({
          type: 'success',
          message: '删除成功'
        })
        if (tableData.value.length === 1 && page.value > 1) {
          page.value--
        }
        getTableData()
      }
    })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: '已取消删除!'
      })
    })
}

// 批量操作
const handleSelectionChange = (val) => {
  clusters.value = val
}

// 批量删除
const onDelete = async() => {
  ElMessageBox.confirm('您确定要删除这些记录？, 该操作不可逆是否继续?', '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning'
  })
    .then(async() => {
      const ids = clusters.value.map(item => item.id)
      const res = await recordDeleteByIds({ ids })
      if (res.code === 0) {
        ElMessage({
          type: 'success',
          message: res.msg
        })
        if (tableData.value.length === ids.length && page.value > 1) {
          page.value--
        }
        deleteVisible.value = false
        getTableData()
      }
    })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: '已取消删除!'
      })
    })
}

// 播放记录
const recordData = ref(null)
const handlePlay = async(row) => {
  const res = await getRecordById({ id: row.id })
  title.value = '终端录制播放'
  if (res.code === 0) {
    recordData.value = res.data.record
    dialogFormVisible.value = true
  }
}
</script>
<style></style>
