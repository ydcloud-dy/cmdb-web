<template>
  <div>
    <el-table :data="listData" :key="listData" stripe style="width: 100%">
      <el-table-column label="名称" prop="name" type="scope" width="300">
        <template #default="scope">
          <img style="width:14px;margin-right:2px" src="//g.alicdn.com/aliyun/cos/1.38.27/images/icon_docker.png">
          <span class="operate-span-primary" @click="handleDetail(scope.row)">{{ scope.row.metadata.name }} </span>
          <el-tooltip placement="top">
            <template #content>
              <div v-for="(v,k, i) in scope.row.metadata.labels" slot="content" :key="i">
                <span> {{ k }}: {{ v }}</span>
              </div>
            </template>
            <el-button size="small" type="primary" link icon="PriceTag" />
          </el-tooltip>
        </template>
      </el-table-column>
      <el-table-column label="容器" prop="container" type="scope">
        <template #default="scope">
          <div v-for="(p, index) in scope.row.status.containerStatuses" :key="index" class="gridChart">
            <div v-if="p.ready">
              <el-tooltip placement="top">
                <template #content>
                  <div slot="content">
                    {{ p.name }}（running, ready）
                  </div>
                </template>
                <el-tag class="ml-2" type="success" effect="dark" />
              </el-tooltip>
            </div>
            <div v-else-if="!p.ready && p.state.waiting">
              <el-tooltip placement="top">
                <template #content>
                  <div slot="content">
                    {{ p.name }} 报错信息: {{ p.state.waiting.reason }}
                  </div>
                </template>
                <el-tag class="ml-2" type="danger" effect="dark" />
              </el-tooltip>
            </div>
            <div v-else-if="!p.ready && p.state.terminated">
              <el-tooltip placement="top">
                <template #content>
                  <div slot="content">
                    {{ p.name }} {{ p.state.terminated.reason }}
                  </div>
                </template>
                <el-tag class="ml-2" type="info" effect="dark" />
              </el-tooltip>
            </div>
            <div v-else>
              <el-tooltip placement="top">
                <template #content>
                  <div slot="content">
                    {{ p.name }}
                  </div>
                </template>
                <el-tag class="ml-2" type="info" effect="dark" />
              </el-tooltip>
            </div>
          </div>
        </template>
      </el-table-column>
      <el-table-column
          prop="status"
          label="CPU/内存/TCP"
          type="scope"
          width="400"
      >
        <template #default="scope">
          <div v-if="scope.row">
            <BarMonitorIndex :data="scope.row" :cluster_id="cluster_id" />
          </div>
        </template>
      </el-table-column>
      <el-table-column label="状态" prop="status" type="scope" width="90"
      >
        <template #default="scope">
          <el-tag v-if="scope.row.status.phase ==='Running'" type="success">Running</el-tag>
          <el-tag v-else-if="scope.row.status.phase ==='Succeeded'" type="info">Completed</el-tag>
          <el-tag v-else type="danger">{{ scope.row.status.phase }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="重启次数" prop="restarts" type="scope">
        <template #default="scope">
          <span>{{ RestartCounts(scope.row.status.containerStatuses) }}</span>
        </template>
      </el-table-column>
      <el-table-column label="命名空间" prop="namespace" type="scope">
        <template #default="scope">
          <span>{{ scope.row.metadata.namespace }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Pod IP" prop="Pod_IP" type="scope">
        <template #default="scope">
          <span>{{ scope.row.status.podIP }}</span>
        </template>
      </el-table-column>
      <el-table-column label="调度节点" prop="hostIP" type="scope">
        <template #default="scope">
          <span class="operate-span">{{ scope.row.status.hostIP }}</span>
        </template>
      </el-table-column>
      <el-table-column label="存活时间" prop="creationTimestamp" type="scope">
        <template #default="scope">
          <span>{{ AgeFormat(scope.row.metadata.creationTimestamp) }}</span>
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="200" type="scope">
        <template #default="scope">
          <el-button size="small" type="primary" link icon="edit" @click="handleEdit(scope.row)">编辑</el-button>
          <div>
            <el-dropdown>
              <el-button type="primary" link icon="MoreFilled" size="small">更多</el-button>
              <template #dropdown>
                <el-dropdown-menu>
                  <div v-for="(item,index) in scope.row.spec.containers" :key="index">
                    <el-dropdown-item @click.native="handleTerminal(scope.row, item.name)">
                      {{ item.name }} 终端
                    </el-dropdown-item>
                  </div>
                  <div v-for="(item,index) in scope.row.spec.containers" :key="index">
                    <el-dropdown-item @click.native="handleTerminalLogs(scope.row, item.name)">
                      {{ item.name }} 终端日志
                    </el-dropdown-item>
                  </div>
                  <el-dropdown-item icon="delete" @click="handleDelete(scope.row)">删除</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </div>

        </template>
      </el-table-column>
    </el-table>
    <div class="dycloud-pagination">
      <el-pagination
          :current-page="page"
          :page-size="pageSize"
          :page-sizes="[10, 30, 50, 100]"
          :style="{ float: 'right', padding: '20px' }"
          :total="total"
          layout="total, sizes, prev, pager, next, jumper"
          @current-change="handleCurrentChange"
          @size-change="handleSizeChange"
      />
    </div>
    <div v-if="dialogdetailVisible">
      <el-dialog v-model="dialogdetailVisible" width="60%" :title="title">
        <template #default>
          <div class="dialog-footer">
            <PodsDetailBlock :data="podDetail" />
          </div>
        </template>
      </el-dialog>
    </div>
    <div v-if="dialogYamlVisible">
      <el-dialog v-model="dialogYamlVisible" width="60%" :title="title">
        <template #default>
          <div class="dialog-footer">
            <YamlBlock :data="podDetail" @close="closeDialog" @enter="enterDialog" />
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
  </div>
</template>
<script>
export default {
  name: 'PodsTableBlock',
}
</script>
<script setup>
import {

  PodsUpdate,
  PodsDelete, GetPodsList, DescribePodInfo
} from '@/api/kubernetes/pods'
import {
  EventsList
} from '@/api/kubernetes/events'
import { AgeFormat } from '@/utils/age'
import { RestartCounts } from '@/utils/restart'
import PodsDetailBlock from './detail.vue'
import YamlBlock from '@/components/kubernetes/yaml/index.vue'
import PodsTerminalBlock from '@/components/kubernetes/pods/terminal.vue'
import PodsTerminalLogBlock from '@/components/kubernetes/pods/terminal-log.vue'
import BarMonitorIndex from '@/components/kubernetes/monitor/pods/index.vue'
import { ref } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
const props = defineProps({
  data: {
    default: function() {
      return {}
    },
    type: Object
  },
})

// pods list
const page = ref(1)
const pageSize = ref(10)
const total = ref(0)
const listData = ref([])
const dialogFull = ref(false)
const PodsListData = async() => {
  console.log(pageSize.value)
  const table = await GetPodsList({cluster_id:cluster_id.value, page:page.value, pageSize:pageSize.value,  fieldSelector:`spec.nodeName=${keywords.value}`})
  if (table.code === 0) {
    listData.value = table.data.items
    page.value = table.data.page
    pageSize.value = table.data.pageSize
    total.value = table.data.total
  }
}
// 数据初始化
const cluster_id = ref(0)
const keywords = ref('')
const GetTableData = () => {
  cluster_id.value = props.data.cluster_id
  keywords.value = props.data.metadata.name
  PodsListData()
}

GetTableData()

// 删除
const handleDelete = async(row) => {
  ElMessageBox.confirm('此操作将删除Pod: ' + row.metadata.name + ' 是否继续?',
      'Warning',
      {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        center: true,
      }
  ).then(async() => {
    const res = await PodsDelete({cluster_id: cluster_id.value, namespace: row.metadata.namespace, podName: row.metadata.name})
    if (res.code === 0) {
      ElMessage({
        type: 'success',
        message: '删除成功',
      })
      await PodsListData()
    }
  }).catch(() => {
    ElMessage({
      type: 'info',
      message: '已取消删除',
    })
  })
}

// 页码调整
const handleCurrentChange = (row) => {
  page.value = row
  PodsListData()
}

// 页面数量调整
const handleSizeChange = (row) => {
  pageSize.value = row
  PodsListData()
}

// Pod详情
const dialogdetailVisible = ref(false)
const title = ref('')
const podDetail = ref({})
const handleDetail = async(row) => {
  title.value = '详情'
  podDetail.value = row
  //         url: `${BaseUrl(cluster_id, namespaces)}?search=true&fieldSelector=involvedObject.name=${fieldSelector}`,
  // fieldSelector = "involvedObject.name="
  const res = await EventsList({
    cluster_id: cluster_id.value,
    fieldSelector: "involvedObject.name="+ row.metadata.name,
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
    podDetail.value['events'] = res.data.items
  }
  dialogdetailVisible.value = true
}

// Pod编辑
const dialogYamlVisible = ref(false)
const handleEdit = async(row) => {
  title.value = '编辑'
  const res = await DescribePodInfo({cluster_id:cluster_id.value, namespace:row.metadata.namespace, podName:row.metadata.name})
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
    podDetail.value = res.data.items
    dialogYamlVisible.value = true
  }
}

// 关闭模态框
const closeDialog = () => {
  dialogYamlVisible.value = false
  dialogTerminalLogsVisible.value = false
  dialogTerminalVisible.value = false
  dialogFull.value = false
}

// 提交数据
const enterDialog = async(row) => {
  const res = await PodsUpdate({cluster_id: cluster_id.value,namespace: row.metadata.namespace,podName: row.metadata.name,content: row})
  if (res.code === 0) {
    ElMessage({
      type: 'success',
      message: '更新成功!'
    })
    dialogYamlVisible.value = false
    GetTableData()
  }
}

// 终端
const dialogTerminalVisible = ref(false)
const TerminalData = ref({})
const ContainerName = ref('')
const handleTerminal = (row, name) => {
  TerminalData.value = row
  title.value = '容器组名：' + row.metadata.name + ' 容器名：' + name + ' 终端'
  TerminalData.value['cluster_id'] = cluster_id.value
  ContainerName.value = name
  dialogTerminalVisible.value = true
}

// 终端日志
const dialogTerminalLogsVisible = ref(false)
const handleTerminalLogs = (row, name) => {
  TerminalData.value = row
  title.value = '容器组名：' + row.metadata.name + ' 容器名：' + name + ' 终端日志'
  TerminalData.value['cluster_id'] = cluster_id.value
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
</script>
<style scoped>
.operate-span-primary {
  color: var(--el-color-primary);
  cursor: pointer;
  font-weight:bold;
}
</style>
