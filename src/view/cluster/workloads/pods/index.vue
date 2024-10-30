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
        <TableBlock :table-data="tableData" :cluster_id="searchInfo.cluster_id" @terminal="handleTerminal" @terminallog="handleTerminalLogs" @update="handleUpdate" @detail="handleDetail" @delete="handleDelete" @monitor="handleMonitor" @files="handleFiles" />
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
    <div v-if="dialogDetailVisible">
      <el-dialog v-model="dialogDetailVisible" width="60%" :title="title">
        <template #default>
          <div class="dialog-footer">
            <PodsDetailBlock :data="form" @close="closeDialog" @enter="enterDialog" />
          </div>
        </template>
      </el-dialog>
    </div>
    <div v-if="dialogTerminalVisible">
      <el-dialog
        v-model="dialogTerminalVisible"
        width="60%"
        :title="title"
        :show-close="false"
        :close-on-press-escape="false"
        :close-on-click-modal="false"
        :fullscreen="dialogFull"
        :center="true"
      >
        <template #default>
          <div style="text-align:right;">
            <el-button type="primary" link icon="FullScreen" @click="handledialogFull" />
            <el-button type="primary" link icon="Close" @click="closeDialog" />
          </div>
          <div class="dialog-footer">
            <PodsTerminalBlock :data="TerminalData" :name="ContainerName" @close="closeDialog" />
          </div>
        </template>
      </el-dialog>
    </div>
    <div v-if="dialogTerminalLogsVisible">
      <el-dialog
        v-model="dialogTerminalLogsVisible"
        width="60%"
        :title="title"
        :show-close="false"
        :close-on-press-escape="false"
        :close-on-click-modal="false"
        :fullscreen="dialogFull"
        :center="true"
      >
        <template #default>
          <div class="dialog-footer">
            <div style="text-align:right;">
              <el-button type="primary" link icon="FullScreen" @click="handledialogFull" />
              <el-button type="primary" link icon="Close" @click="closeDialog" />
            </div>
            <PodsTerminalLogBlock :data="TerminalData" :name="ContainerName" @close="closeDialog" />
          </div>
        </template>
      </el-dialog>
    </div>
    <div v-if="dialogMonitorVisible">
      <el-dialog ref="monitor" v-model="dialogMonitorVisible" width="60%" :title="title">
        <template #default>
          <div class="dialog-footer">
            <MonitorBlock :data="form" @close="closeDialog" />
          </div>
        </template>
      </el-dialog>
    </div>
    <div v-if="dialogFilesVisible">
      <el-dialog ref="files" v-model="dialogFilesVisible" width="70%" :title="title">
        <template #default>
          <div class="dialog-footer">
            <FilesBlock :form="form" @close="closeDialog" />
          </div>
        </template>
      </el-dialog>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Pods',
}
</script>

<script setup>
import {
  // PodsGet,
  PodsUpdate,
  PodsCreate,
  PodsDelete, GetPodsList, DescribePodInfo,
} from '@/api/kubernetes/pods'
import {
  EventsList
} from '@/api/kubernetes/events'
import { getK8sObject } from '@/utils/k8s'
import YamlBlock from '@/components/kubernetes/yaml/index.vue'
import FilesBlock from '@/components/kubernetes/pods/files.vue'
import TableBlock from './table.vue'
import MonitorBlock from './monitor.vue'
import PodsDetailBlock from '@/components/kubernetes/pods/detail.vue'
import PodsTerminalBlock from '@/components/kubernetes/pods/terminal.vue'
import PodsTerminalLogBlock from '@/components/kubernetes/pods/terminal-log.vue'
import { ref } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
const form = ref({})
const page = ref(1)
const total = ref(0)
const pageSize = ref(10)
const tableData = ref([])
const title = ref('')
const searchInfo = ref({ 'keywords': '', 'namespace': '' })
const dialogFull = ref(false)
const dialogFilesVisible = ref(false)

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
  console.log(page.value)
  console.log(pageSize.value);
  getTableData()
}

// 查询
const getTableData = async() => {
  const table = await GetPodsList({cluster_id:searchInfo.value.cluster_id, page:page.value,pageSize: pageSize.value,
    namespace:searchInfo.value.namespace, keyword:searchInfo.value.keywords})
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
  const res = await DescribePodInfo({cluster_id: searchInfo.value.cluster_id, namespace: row.metadata.namespace,podName: row.metadata.name})
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

// 关闭模态框
const closeDialog = () => {
  dialogYamlVisible.value = false
  dialogTerminalLogsVisible.value = false
  dialogTerminalVisible.value = false
  form.value = {}
  dialogFull.value = false
}

// 删除数据
const handleDelete = async(row) => {
  row.visible = false
  ElMessageBox.confirm('您确定要删除  ' + row.metadata.name + ' Pod？, 是否继续?', '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning'
  })
    .then(async() => {
      const res = await PodsDelete({cluster_id: searchInfo.value.cluster_id,namespace: row.metadata.namespace,podName: row.metadata.name})
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
    })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: '已取消删除!'
      })
    })
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
      res = await PodsCreate({cluster_id: searchInfo.value.cluster_id, namespace: row.metadata.namespace,content: row})
      break
    case 'update':
      res = await PodsUpdate({cluster_id: searchInfo.value.cluster_id, namespace: row.metadata.namespace,
        podName: row.metadata.name, content: row})
      break
    default:
      res = await PodsCreate({cluster_id: searchInfo.value.cluster_id,content: row})
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
  form.value = getK8sObject('pods', searchInfo.value.namespace, '')
  dialogYamlVisible.value = true
}

// 详情
const dialogDetailVisible = ref(false)
const handleDetail = async(row) => {
  form.value = row
  form.value['cluster_id'] = searchInfo.value.cluster_id
  const res = await EventsList({
    cluster_id: searchInfo.value.cluster_id,
    fieldSelector: "involvedObject.name="+row.metadata.name,
    namespace: row.metadata.namespace})
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
    form.value['events'] = res.data.items
  }
  title.value = '详情'
  dialogDetailVisible.value = true
}

// 终端
const dialogTerminalVisible = ref(false)
const TerminalData = ref({})
const ContainerName = ref('')
// eslint-disable-next-line no-unused-vars
const handleTerminal = (row, name) => {
  TerminalData.value = row
  title.value = '容器组名：' + row.metadata.name + ' 容器名：' + name + ' 终端'
  TerminalData.value['cluster_id'] = searchInfo.value.cluster_id
  ContainerName.value = name
  dialogTerminalVisible.value = true
}

// 终端日志
const dialogTerminalLogsVisible = ref(false)
const handleTerminalLogs = (row, name) => {
  TerminalData.value = row
  title.value = '容器组名：' + row.metadata.name + ' 容器名：' + name + ' 终端日志'
  TerminalData.value['cluster_id'] = searchInfo.value.cluster_id
  ContainerName.value = name
  dialogTerminalLogsVisible.value = true
}

// 全屏
const handledialogFull = () => {
  if (dialogFull.value) {
    dialogFull.value = false
  } else {
    dialogFull.value = true
  }
}

// 文件浏览
const handleFiles = (row, name) => {
  title.value = 'Pod: ' + row.metadata.name + ' Container: ' + name +'  文件浏览'
  form.value = row
  form.value['cluster_id'] = searchInfo.value.cluster_id
  form.value['container_name'] = name
  dialogFilesVisible.value = true
}

// 监控
const dialogMonitorVisible = ref(false)
const handleMonitor = (row) => {
  title.value = 'Pod 名称: ' + row.metadata.name
  form.value = row
  form.value['cluster_id'] = searchInfo.value.cluster_id
  dialogMonitorVisible.value = true
}

window.addEventListener('setItemCluster', (e) => {
  searchInfo.value.cluster_id = parseInt(localStorage.getItem('cluster_id'))
})

window.addEventListener('setItemNamespace', (e) => {
  searchInfo.value.namespace = localStorage.getItem('namespace')
  getTableData()
})
</script>
<style>
</style>
