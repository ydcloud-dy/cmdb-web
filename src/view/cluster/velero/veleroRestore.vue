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
<!--            <el-button size="small" type="primary" icon="plus" @click="openDialog('addApi')">YAML</el-button>-->
<!--            <el-button size="small" type="primary" icon="plus" @click="openAddDialog('addApi')">新增</el-button>-->
          </el-form-item>
        </el-form>

      </div>
      <div v-if="tableData">
        <TableBlock :table-data="tableData" @yaml_update="handleUpdateYAML" @reduction="handleReduction" @update="handleUpdate"
                    @veleroRestoreDetail="handleDetail" @delete="handleDelete" />
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
            <YamlBlock :data="form" @close="closeDialog" @enter="enterDialog" />
          </div>
        </template>
      </el-dialog>
    </div>
    <div v-if="dialogAddVisible">
      <el-dialog
          v-model="dialogAddVisible"
          title="dialogTitle"
          width="70%"
      >
        <template #default>
          <div class="dialog-footer">
            <CreateVeleroRestore :cluster="searchInfo.cluster_id" :form="form" :readonly="readOnly" @close="closeDialog" @enter="enterDialog" />
          </div>
        </template>
      </el-dialog>
    </div>
    <div v-if="dialogDetailVisible">
      <el-dialog v-model="dialogDetailVisible" width="70%" :title="title">
        <template #default>
          <div class="dialog-footer">
            <DetailBlock :data="form" :read-only="readOnly" @close="closeDialog" @enter="enterDialog" />
          </div>
        </template>
      </el-dialog>
    </div>
  </div>
</template>

<script>

export default {
  name: 'veleroTasks',
}
</script>

<script setup>

import { getK8sObject } from '@/utils/k8s'
import YamlBlock from './restoreYaml.vue'
import TableBlock from './restoreTable.vue'
import DetailBlock from './detail.vue'
import CreateVeleroRestore from './createRestore.vue'
import { ref,computed } from 'vue'
import { ElMessage } from 'element-plus'
import {
  DescribeVeleroRestore, VeleroRecordCreate,
  VeleroRecordUpdate, VeleroRestoreDelete, VeleroRestoreList,


} from "@/api/kubernetes/velero";
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
  const table = await VeleroRestoreList({
    cluster_id: searchInfo.value.cluster_id,
    page: page.value,
    pageSize: pageSize.value,
    namespace: searchInfo.value.namespace,
    keyword: searchInfo.value.keywords})

  console.log(table)
  console.log("表格啊啊啊啊")
  if (table.code === 0) {
    // 遍历 items 列表，转换时间戳为本地时间
    table.data.items.forEach(item => {
      if (item.status.expiration) {
        item.status.expiration = new Date(item.status.expiration).toLocaleString();
        console.log("Local Creation Timestamp: ", item.status.expiration);
      }
      if (item.metadata.creationTimestamp) {
        item.metadata.creationTimestamp = new Date(item.metadata.creationTimestamp).toLocaleString();
        console.log("Local Start Timestamp: ", item.metadata.creationTimestamp);
      }
      if (item.status.startTimestamp) {
        item.status.startTimestamp = new Date(item.status.startTimestamp).toLocaleString();
        console.log("Local Start Timestamp: ", item.status.startTimestamp);
      }
      if (item.status.completionTimestamp) {
        item.status.completionTimestamp = new Date(item.status.completionTimestamp).toLocaleString();
        console.log("Local Completion Timestamp: ", item.status.completionTimestamp);
      }
    });

    tableData.value = table.data.items
    total.value = table.data.total
    page.value = table.data.page
    pageSize.value = table.data.pageSize
    console.log(tableData.value)
  }
}

// 更新数据模态框
const dialogYamlVisible = ref(false)
const type = ref('')
const dialogTitle = computed(() => {
  return type.value === 'create' ? '新增' : '更新';
});
const handleUpdateYAML = async(row) => {
  type.value = 'update'
  title.value = '编辑'
  const res = await DescribeVeleroRestore({
    cluster_id: searchInfo.value.cluster_id,
    namespace: row.metadata.namespace,
    VeleroRestoreName:row.metadata.name
  })
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
    dialogYamlVisible.value = true
  }
}
const handleReduction = async(row) => {
  console.log("还原啊啊啊")
  dialogAddVisible.value = true
}
// 更新数据模态框
const handleUpdate = async(row) => {
  type.value = 'update'
  title.value = '编辑'

  const res = await DescribeVeleroRestore({
    cluster_id: searchInfo.value.cluster_id,
    namespace: row.metadata.namespace,
    VeleroRestoreName:row.metadata.name
  })
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
    readOnly.value = true
    dialogAddVisible.value = true
  }
}

// 关闭模态框
const closeDialog = () => {
  dialogYamlVisible.value = false
  dialogAddVisible.value = false
  dialogDetailVisible.value = false
  form.value = {}
}

// 删除数据
const handleDelete = async(row) => {
  row.visible = false
  const res = await VeleroRestoreDelete({cluster_id: searchInfo.value.cluster_id,
    namespace: row.metadata.namespace,VeleroRestoreName: row.metadata.name})
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
// 处理从子组件传递回来的表单数据

// 提交数据
const enterDialog = async(row) => {
  let res
  console.log(row)
  console.log(type.value)
  console.log("================================")
  switch (type.value) {
    case 'create':
      res = await VeleroRecordCreate({cluster_id: searchInfo.value.cluster_id,  content:row})
      break
    case 'update':
      res = await VeleroRecordUpdate({cluster_id: searchInfo.value.cluster_id, namespace: row.metadata.namespace,
        VeleroRecordName:row.metadata.name, content: row})
      break
    default:
      res = await VeleroRecordCreate({cluster_id: searchInfo.value.cluster_id, content:row})
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
  form.value = getK8sObject('restore', searchInfo.value.namespace, '')
  dialogYamlVisible.value = true
}

// 创建
const dialogAddVisible = ref(false)
const openAddDialog = () => {
  type.value = 'create'
  title.value = '创建'
  readOnly.value = false
  form.value = getK8sObject('restore', searchInfo.value.namespace, '')
  console.log(form.value)
  dialogAddVisible.value = true
}

// 详情
const dialogDetailVisible = ref(false)
const handleDetail = async(row) => {
  const res = await DescribeVeleroRestore({
    cluster_id: searchInfo.value.cluster_id,
    namespace: row.metadata.namespace,
    VeleroRestoreName:row.metadata.name})
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
    form.value['type'] = 'veleroRestore'
  }
  dialogYamlVisible.value = true
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
