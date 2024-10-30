<template>
  <div>
    <div class="dycloud-search-box">
      <el-form
          ref="searchForm"
          :inline="true"
          :model="searchInfo"
      >
        <el-form-item label="集群">
          <el-select
              v-model="searchInfo.cluster_id"
              placeholder="请选择集群"
              style="width: 200px"
              @change="ClusterChange"
          >
            <el-option
                v-for="item in cluster_list"
                :key="item.id"
                :label="item.name"
                :value="item.id"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="名称">
          <el-input
              v-model="searchInfo.keywords"
              placeholder="名称"
          />
        </el-form-item>
        <el-form-item>
          <el-button
              size="small"
              type="primary"
              icon="search"
              @click="onSubmit"
          >查询</el-button>
          <el-button
              size="small"
              icon="refresh"
              @click="onReset"
          >重置</el-button>
<!--          <el-button-->
<!--              size="small"-->
<!--              type="primary"-->
<!--              icon="star"-->
<!--              @click="ToNodeLabelsTaint"-->
<!--          >标签与污点</el-button>-->
        </el-form-item>
        <el-form-item>
          <el-button
              size="small"
              type="primary"
              icon="Cloudy"
              @click="handleCloudTty"
          >CloudShell</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="dycloud-table-box">
      <div v-if="tableData">
        <TableBlock
            :table-data="tableData"
            @update="handleUpdate"
            @delete="handleDelete"
            @schedule="handleSchedule"
            @drain="handleDrain"
            @detail="handleDetail"
            @yaml="handleYAML"
            @monitor="handleMonitor"
            @shell="handleShell"
        />
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
          width="40%"
          :title="title"
          :show-close="false"
          :close-on-press-escape="false"
          :close-on-click-modal="false"
      >
        <template #footer>
          <div class="dialog-footer">
            <FormBlock
                :form="form"
                :optype="type"
                @close="closeDialog"
                @enter="enterDialog"
            />
          </div>
        </template>
      </el-dialog>
    </div>
    <div v-if="dialogDetailVisible">
      <el-dialog
          v-model="dialogDetailVisible"
          width="70%"
          :title="title"
      >
        <DetailBlock :form="form" />
      </el-dialog>
    </div>
    <div v-if="dialogYamlVisible">
      <el-dialog
          v-model="dialogYamlVisible"
          width="60%"
          :title="title"
      >
        <template #default>
          <div class="dialog-footer">
            <YamlBlock
                :data="form"
                @close="closeDialog"
                @enter="enterYamlDialog"
            />
          </div>
        </template>
      </el-dialog>
    </div>
    <div v-if="dialogMonitorVisible">
      <el-dialog
          ref="monitor"
          v-model="dialogMonitorVisible"
          width="60%"
          :title="title"
      >
        <template #default>
          <div class="dialog-footer">
            <MonitorBlock
                :data="form"
                @close="closeDialog"
            />
          </div>
        </template>
      </el-dialog>
    </div>

    <div v-if="dialogCloudTtyVisible">
      <el-dialog
          v-model="dialogCloudTtyVisible"
          width="70%"
          :title="title"
          :center="true"
      >
        <template #default>
          <div class="dialog-footer">
            <CloudTTYBlock
                @close="closeDialog"
            />
          </div>
        </template>
      </el-dialog>
    </div>

    <div v-if="dialogNodeTtyVisible">
      <el-dialog
          v-model="dialogNodeTtyVisible"
          width="70%"
          :title="title"
          :center="true"
          @close="closeNodeTTyDialog"
      >
        <template #default>
          <div class="dialog-footer">
            <NodeTTYBlock
                :node_name="node_name"
            />
          </div>
        </template>
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
import {
  getClustersList,
} from '@/api/kubernetes/cluster/k8sCluster'
import {
  NodesUpdate,
  NodesDelete, GetNodesList, DescribeNodeInfo
} from '@/api/kubernetes/nodes/nodes'
import {
  NodeMetricsList,
} from '@/api/kubernetes/metrics'
import {

   PodsDelete, GetPodsList, PodsEviction,
} from '@/api/kubernetes/pods'
import { cpuUnitConvert, memoryUnitConvert } from '@/utils/unitConvert'
import FormBlock from './form.vue'
import TableBlock from './table.vue'
import DetailBlock from './detail.vue'
import MonitorBlock from './monitor.vue'
import YamlBlock from '@/components/kubernetes/yaml/index.vue'
import CloudTTYBlock from '@/components/kubernetes/cloudtty/index.vue'
import NodeTTYBlock from '@/components/kubernetes/nodetty/index.vue'
import { ref } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import { useRouter } from 'vue-router'
import { dispatchClusterIDEventStrage } from '@/utils/watchLocalStorage'
import { useUserStore } from '@/pinia/modules/user'

const form = ref({
  apiVersion: 'v1',
  kind: 'Node',
  metadata: {
    name: '',
    annotations: {},
    labels: {},
  },
})
const page = ref(1)
const total = ref(0)
const pageSize = ref(10)
const tableData = ref([])
const title = ref('')
const searchInfo = ref({ 'keywords': '' })
const cluster_list = ref([])
const router = useRouter()
// 搜索
const onReset = () => {
  searchInfo.value = {}
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
const getClusterData = async() => {
  const table = await getClustersList({ page: 1, pageSize: 10000 })
  if (table.code === 0) {
    cluster_list.value = table.data.list
    searchInfo.value.cluster_id = cluster_list.value[0].id
    if (parseInt(localStorage.getItem('cluster_id')) > 0) {
      searchInfo.value.cluster_id = parseInt(localStorage.getItem('cluster_id'))
      dispatchClusterIDEventStrage(searchInfo.value.cluster_id)
    } else {
      dispatchClusterIDEventStrage(cluster_list.value[0].id)
    }
  }
}

// 查询
const getTableData = async(status) => {
  if (status) {
    await getClusterData()
  }
  console.log("0--------------------------------")
  console.log(searchInfo.value.cluster_id)
  console.log( page.value)
  console.log( pageSize.value)
  console.log( searchInfo.value.keywords)

  const table = await GetNodesList({
    cluster_id:searchInfo.value.cluster_id,
    page:page.value,
    pageSize:pageSize.value,
    keyword:searchInfo.value.keywords
  })
  if (table.code === 0) {
    const metrics = await NodeMetricsList({cluster_id:searchInfo.value.cluster_id})
    if (metrics.code === 0) {
        tableData.value = table.data.items
        total.value = table.data.total

      for (const node of table.data.items) {
        for (const item of metrics.data.items) {
          if (node.metadata.name === item.metadata.name) {
            if (item.usage?.cpu) {
              console.log('CPU Usage:', item.usage.cpu);
              console.log('Node Allocatable CPU:', node.status.allocatable.cpu);
              node.cpuUsage = cpuUnitConvert(item.usage.cpu) + 'm'
              node.cpuUsagePersent = Math.round((cpuUnitConvert(item.usage.cpu) / cpuUnitConvert(node.status.allocatable.cpu)).toFixed(2) * 100)
            }
            if (item.usage?.memory) {
              node.memoryUsage = memoryUnitConvert(item.usage.memory).toFixed(2) + 'Mi'
              node.memoryUsagePersent = Math.round((memoryUnitConvert(item.usage.memory) / memoryUnitConvert(node.status.allocatable.memory)).toFixed(2) * 100)
            }
          }
        }
      }
    }
  }

  // if (table.code === 0) {
  //
  //   tableData.value = table.data.items
  //   total.value = table.data.total
  //   page.value = table.data.page
  //   pageSize.value = table.data.pageSize
  // }
}

getTableData(true)

// 更新数据模态框
const dialogFormVisible = ref(false)
const type = ref('')
const handleUpdate = async(row) => {
  console.log("????????????????")
  const res = await DescribeNodeInfo({cluster_id:searchInfo.value.cluster_id, nodeName:row.metadata.name})
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
    type.value = 'update'
    title.value = '编辑'
    form.value = res.data.items
    dialogFormVisible.value = true
  }
}

// 关闭模态框
const closeDialog = () => {
  dialogFormVisible.value = false
  dialogYamlVisible.value = false
  dialogMonitorVisible.value = false
  dialogCloudTtyVisible.value = false
  dialogNodeTtyVisible.value = false
  form.value = {}
}

// 删除数据
const handleDelete = async(row) => {
  ElMessageBox.confirm('您确定要删除  ' + row.metadata.name + ' 节点？, 是否继续?', '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning'
  })
      .then(async() => {
        row.visible = false
        const res = await NodesDelete(searchInfo.value.cluster_id, row.metadata.name)
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

// 提交数据提示信息
const handleOptions = async(res) => {
  if (res.code === 0) {
    ElMessage({
      type: 'success',
      message: res.msg
    })
    if (tableData.value.length === 1 && page.value > 1) {
      page.value--
    }
    getTableData()
  }
}

// 提交数据
const enterDialog = async(row) => {
  let res
  switch (type.value) {
    case 'update':
      res = await NodesUpdate({cluster_id:searchInfo.value.cluster_id,nodeName: row.metadata.name,content: row})
      break
    default:
      res = await NodesUpdate({cluster_id:searchInfo.value.cluster_id,nodeName: row.metadata.name,content: row})
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

// 集群选择
const ClusterChange = async() => {
  dispatchClusterIDEventStrage(searchInfo.value.cluster_id)
  getTableData()
}

// 节点Pod数据
const podlist = ref([])
// const PodsListData = async(row) => {
//   const res = await GetPodsList({cluster_id:searchInfo.value.cluster_id,  fieldSelector:`spec.nodeName=${row.metadata.name}`})
//   if (res.data.items) {
//     if (res.data.items.code) {
//       ElMessage({
//         type: 'error',
//         message: res.data.items.message,
//       })
//       return
//     }
//   }
//
//   if (res.code === 0) {
//     podlist.value = res.data.items
//   }
// }

const handleDrain = async(row) => {
  ElMessageBox.confirm('此操作将节点: ' + row.metadata.name + ' Pod全部排空，是否继续?',
      'Warning',
      {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        center: true,
      }
  ).then(async() => {
    // await PodsListData(row)
    // for (const item of podlist.value) {
      // const EvictionPodData = {
      //   apiVersion: 'policy/v1beta1',
      //   kind: 'Eviction',
      //   metadata: {
      //     name: item.metadata.name,
      //     namespaces: item.metadata.namespaces,
      //     creationTimestamp: null,
      //   },
      //   deleteOptions: {},
      // }
    console.log(row.metadata.name)
    console.log(searchInfo.value.cluster_id)
    console.log("===========================")
    await PodsEviction({cluster_id:searchInfo.value.cluster_id, nodeName:row.metadata.name,fieldSelector:`spec.nodeName=${row.metadata.name}`})
    // }
    ElMessage({
      type: 'success',
      message: '节点Pod排空成功！',
    })
  }).catch(() => {
    ElMessage({
      type: 'info',
      message: '已取消排空',
    })
    getTableData()
  })
}
// 调度设置
const handleSetSchedule = async(row, msg) => {
  ElMessageBox.confirm('此操作将节点: ' + row.metadata.name + msg + ' 是否继续?',
      'Warning',
      {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        center: true,
      }
  ).then(async() => {
    const res = await NodesUpdate({cluster_id:searchInfo.value.cluster_id,nodeName: row.metadata.name,content: row})
    if (res.data.items) {
      if (res.data.items.code) {
        ElMessage({
          type: 'error',
          message: res.data.items.message,
        })
        getTableData()
        return
      }
    }

    if (res.code === 0) {
      ElMessage({
        type: 'success',
        message: '设置成功',
      })
      getTableData()
    }
  }).catch(() => {
    ElMessage({
      type: 'info',
      message: '已取消设置',
    })
    getTableData()
  })
}

// 调度设置判断
const handleSchedule = async(row) => {
  if (row.spec.unschedulable) {
    row.spec.unschedulable = false
    handleSetSchedule(row, '设置可调度')
  } else {
    row.spec.unschedulable = true
    handleSetSchedule(row, '设置不可调度')
  }
}

// 详情
const dialogDetailVisible = ref(false)
const handleDetail = async(row) => {
  form.value = row
  form.value['cluster_id'] = searchInfo.value.cluster_id
  title.value = '详情'
  dialogDetailVisible.value = true
}

// YAML 编辑
const dialogYamlVisible = ref(false)
const handleYAML = async(row) => {
  title.value = '编辑'
  console.log("？？？？？？？")
  console.log(searchInfo.value.cluster_id)
  console.log(row.metadata.name)
  const res = await DescribeNodeInfo({cluster_id:searchInfo.value.cluster_id, nodeName:row.metadata.name})
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

// YAML编辑提交
const enterYamlDialog = async(row) => {
  const res = await NodesUpdate({cluster_id:searchInfo.value.cluster_id,nodeName: row.metadata.name,content: row})
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
      message: '更新成功'
    })
    closeDialog()
    getTableData()
  }
}

// 标签与污点
const ToNodeLabelsTaint = () => {
  router.push({ name: 'nodelabelstaints' })
}

// 监控
const dialogMonitorVisible = ref(false)
const handleMonitor = (row) => {
  title.value = '节点 名称: ' + row.metadata.name
  form.value = row
  form.value['cluster_id'] = searchInfo.value.cluster_id
  dialogMonitorVisible.value = true
}

// CloudTTY
const dialogCloudTtyVisible = ref(false)
const handleCloudTty = () => {
  title.value = 'CloudShell'
  dialogCloudTtyVisible.value = true
}

// Shell
const dialogNodeTtyVisible = ref(false)
const node_name = ref('')
const handleShell = (row) => {
  title.value = 'NodeShell 节点名称：' + row.metadata.name
  node_name.value = row.metadata.name
  dialogNodeTtyVisible.value = true
}

// 删除nodeshell pod
const DeleteNodeShell = async(data) => {
  for (const pod of data) {
    await PodsDelete({cluster_id: searchInfo.value.cluster_id,namespace: pod.metadata.namespace,podName: pod.metadata.name})
  }
}

// 获取pod 信息
const PodsData = ref([])
const PodLists = async(namespace, selector) => {
  const res = await GetPodsList({cluster_id:searchInfo.value.cluster_id, namespace: namespace,  selector})
  if (res.code === 0 && res.data.items) {
    PodsData.value = res.data.items
    if (PodsData.value.length > 0) {
      await DeleteNodeShell(PodsData.value)
    }
  }
}

// 关闭模态框
const userStore = useUserStore()
const labelSelector = ref('')
const closeNodeTTyDialog = async() => {
  dialogNodeTtyVisible.value = false
  labelSelector.value = 'devops/username=' + userStore.userInfo.userName
  await PodLists('default', labelSelector.value)
}
</script>
<style>
</style>
