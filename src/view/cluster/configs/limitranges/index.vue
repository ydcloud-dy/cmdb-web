<template>
  <div>
    <div class="dycloud-table-box">
      <div class="dycloud-btn-list">
        <el-form ref="searchForm" :inline="true" :model="searchInfo">
          <el-form-item label="名称">
            <el-input v-model="searchInfo.keywords" placeholder="名称" />
          </el-form-item>
          <el-form-item>
            <el-button size="small" type="primary" icon="search" @click="onSubmit">查询</el-button>
            <el-button size="small" icon="refresh" @click="onReset">重置</el-button>
          </el-form-item>
          <el-form-item>
            <el-button size="small" type="primary" icon="plus" @click="openDialog('addApi')">新增</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div v-if="tableData">
        <TableBlock :table-data="tableData" @update="handleUpdate" @detail="handleDetail" @delete="handleDelete" />
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
    <div v-if="dialogYamlVisible">
      <el-dialog v-model="dialogYamlVisible" width="60%" :title="title">
        <template #default>
          <div class="dialog-footer">
            <YamlBlock :data="form" :read-only="readOnly" @close="closeDialog" @enter="enterDialog" />
          </div>
        </template>
      </el-dialog>
    </div>
  </div>
</template>

<script>

export default {
  name: 'LimitRanges',
}
</script>

<script setup>
import {
  LimitRangesCreate,
  LimitRangesDelete,
  LimitRangesGet,
  LimitRangesList, LimitRangesUpdate,
} from '@/api/kubernetes/limitranges'
import { getK8sObject } from '@/utils/k8s'
import YamlBlock from '@/components/kubernetes/yaml/index.vue'
import TableBlock from './table.vue'
import { ref } from 'vue'
import { ElMessage } from 'element-plus'
const form = ref({})
const page = ref(1)
const total = ref(0)
const pageSize = ref(10)
const tableData = ref([])
const title = ref('')
const searchInfo = ref({ 'keywords': '', 'namespace': '' })
const readOnly = ref(false)
// 搜索重置
const onReset = () => {
  searchInfo.value.keywords = ''
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
  const table = await LimitRangesList({
    cluster_id: searchInfo.value.cluster_id,
    page: page.value,
    pageSize: pageSize.value,
    namespace: searchInfo.value.namespace,
    keyword: searchInfo.value.keywords,})
  if (table.code === 0) {
    tableData.value = table.data.items
    total.value = table.data.total
    page.value = table.data.page
    pageSize.value = table.data.pageSize
  }
}

// 更新数据模态框
const dialogYamlVisible = ref(false)
const type = ref('')
const handleUpdate = async(row) => {
  type.value = 'update'
  title.value = '编辑'
  const res = await LimitRangesGet({cluster_id: searchInfo.value.cluster_id, namespace: row.metadata.namespace,limitRangeName: row.metadata.name})
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
    form.value = res.data.items
    readOnly.value = false
    dialogYamlVisible.value = true
  }
}

// 关闭模态框
const closeDialog = () => {
  dialogYamlVisible.value = false
  form.value = {}
}

// 删除数据
const handleDelete = async(row) => {
  row.visible = false
  const res = await LimitRangesDelete({cluster_id: searchInfo.value.cluster_id, namespace:row.metadata.namespace,limitRangeName: row.metadata.name})
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
    getTableData()
  }
}

// 提交数据提示信息
const handleOptions = async(res) => {
  if (res.code === 0) {
    ElMessage({
      type: 'success',
      message: res.msg
    })
    getTableData()
  }
}

// 提交数据
const enterDialog = async(row) => {
  let res
  switch (type.value) {
    case 'create':
      res = await LimitRangesCreate({cluster_id: searchInfo.value.cluster_id,namespace: row.metadata.namespace, content:row})
      break
    case 'update':
      res = await LimitRangesUpdate({cluster_id: searchInfo.value.cluster_id, namespace:row.metadata.namespace, limitRangeName:row.metadata.name, content:row})
      break
    default:
      res = await LimitRangesCreate({cluster_id: searchInfo.value.cluster_id, content:row})
      break
  }

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
    closeDialog()
    handleOptions(res)
  }
}

// 创建
const openDialog = () => {
  type.value = 'create'
  title.value = '创建'
  form.value = getK8sObject('limitranges', searchInfo.value.namespace, '')
  readOnly.value = false
  dialogYamlVisible.value = true
}

// 详情
const handleDetail = async(row) => {
  const res = await LimitRangesGet({cluster_id: searchInfo.value.cluster_id, namespace: row.metadata.namespace,limitRangeName: row.metadata.name})
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
    title.value = '详情'
    form.value = res.data.items
    form.value['cluster_id'] = searchInfo.value.cluster_id
    readOnly.value = true
    dialogYamlVisible.value = true
  }
}

window.addEventListener('setItemCluster', (e) => {
  searchInfo.value.cluster_id = parseInt(localStorage.getItem('cluster_id'))
})

window.addEventListener('setItemNamespace', (e) => {
  searchInfo.value.namespace = localStorage.getItem('namespace')
  getTableData()
})
</script>
<style></style>
