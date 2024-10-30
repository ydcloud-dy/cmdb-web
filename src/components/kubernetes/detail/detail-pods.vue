<template>
  <div>
    <el-table :key="PodsData" :data="PodsData">
      <el-table-column label="名称" prop="name" min-width="80" show-overflow-tooltip>
        <template #default="scope">
          <span class="span-link">{{ scope.row.metadata.name }}</span>
        </template>
      </el-table-column>
      <el-table-column label="镜像" min-width="120" show-overflow-tooltip>
        <template #default="scope">
          <div v-for="(item,index) in scope.row.spec.containers" :key="index">
            <el-tag type="info" size="small" style="display:flex">
              {{ item.image }}
            </el-tag>
          </div>
        </template>
      </el-table-column>
      <el-table-column
        prop="status"
        label="CPU/内存/TCP"
        type="scope"
        width="200"
      >
        <template #default="scope">
          <div v-if="scope.row">
            <BarMonitorIndex :data="scope.row" :cluster_id="cluster_id" />
          </div>
        </template>
      </el-table-column>
      <el-table-column label="状态" prop="status" type="scope" width="90">
        <template #default="scope">
          <el-tag v-if="scope.row.status.phase ==='Succeeded'" type="info">Completed</el-tag>
          <el-tag v-else-if="scope.row.metadata.deletionTimestamp" type="danger">Deleting</el-tag>
          <el-tag v-else-if="scope.row.status.phase ==='Running'" type="success">Running</el-tag>
          <el-tag v-else type="danger">{{ scope.row.status.phase }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column
        label="重启次数"
        prop="restarts"
        type="scope"
        width="90"
      >
        <template #default="scope">
          <span>{{ RestartCounts(scope.row.status.containerStatuses) }}</span>
        </template>
      </el-table-column>
      <el-table-column label="节点" min-width="40" prop="spec.nodeName" show-overflow-tooltip />
      <el-table-column :label="'Cpu'" min-width="45">
        <template #default="scope">
          {{ getPodUsage(scope.row.metadata.name, "cpu") }}
        </template>
      </el-table-column>
      <el-table-column :label="'Memory'" min-width="45">
        <template #default="scope">
          {{ getPodUsage(scope.row.metadata.name, "memory") }}
        </template>
      </el-table-column>
      <el-table-column label="存活时间" min-width="40" prop="metadata.creationTimestamp" show-overflow-tooltip fix>
        <template #default="scope">
          {{ AgeFormat(scope.row.metadata.creationTimestamp) }}
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template #default="scope">
          <el-dropdown>
            <el-button type="primary" link size="small" @click="handleMonitor(scope.row)">监控</el-button>
          </el-dropdown>
          <el-dropdown>
            <el-button type="primary" link size="small">更多</el-button>
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
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </template>
      </el-table-column>
    </el-table>
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
            <MonitorBlock :data="PodDetail" />
          </div>
        </template>
      </el-dialog>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailPods',
}
</script>
<script setup>
import { ref } from 'vue'
import {
  PodsMetricsList,
} from '@/api/kubernetes/metrics'
import {
  GetPodsList,
} from '@/api/kubernetes/pods'
import { AgeFormat } from '@/utils/age'
import { RestartCounts } from '@/utils/restart'
import PodsTerminalBlock from '@/components/kubernetes/pods/terminal.vue'
import PodsTerminalLogBlock from '@/components/kubernetes/pods/terminal-log.vue'
import MonitorBlock from '@/view/cluster/workloads/pods/monitor.vue'
import BarMonitorIndex from '@/components/kubernetes/monitor/pods/index.vue'
const props = defineProps({
  data: {
    default: function() {
      return {}
    },
    type: Object
  },
  selectors: {
    default: function() {
      return ''
    },
    type: String
  }
})

const Detaildata = ref({})
const DetailSelectors = ref('')
const dialogFull = ref(false)
const title = ref('')
const dialogMonitorVisible = ref(false)
const cluster_id = ref(0)
const DetailDataInit = async() => {
  Detaildata.value = props.data
  DetailSelectors.value = props.selectors
  cluster_id.value = Detaildata.value.cluster_id
}
DetailDataInit()

// Pod列表获取
const PodsData = ref([])
const PodLists = async() => {
  const res = await GetPodsList({cluster_id:Detaildata.value.cluster_id,
    namespace:Detaildata.value.metadata.namespace,labelSelector: DetailSelectors.value})
  if (res.code === 0 && res.data.items) {
    PodsData.value = res.data.items
  }
}

PodLists()

// Pod 监控
const PodsMetricsData = ref([])
const PodsMetrics = async() => {
  const res = await PodsMetricsList({cluster_id:Detaildata.value.cluster_id,
    namespace: Detaildata.value.metadata.namespace, labelSelector:DetailSelectors.value})
  if (res.code === 0) {
    PodsMetricsData.value = res.data.items
  }
}

PodsMetrics()

// Pod 监控格式化
const getPodUsage = (name, type) => {
  let result = '0 m'
  if (PodsMetricsData.value.length > 0) {
    for (const item of PodsMetricsData.value) {
      if (item.metadata.name === name) {
        let usage = 0
        for (const container of item.containers) {
          if (type === 'cpu') {
            if (container.usage.cpu.indexOf('n') > -1) {
              usage = usage + parseInt(container.usage.cpu)
            }
            if (container.usage.cpu.indexOf('m') > -1) {
              usage = usage + parseInt(container.usage.cpu) * 1000 * 1000
            }
          }
          if (type === 'memory') {
            if (container.usage.memory.indexOf('Ki') > -1) {
              usage = usage + parseInt(container.usage.memory)
            }
            if (container.usage.memory.indexOf('Mi') > -1) {
              usage = usage + parseInt(container.usage.memory) * 1000
            }
          }
        }
        const unit = type === 'cpu' ? 'm' : 'Mi'
        if (type === 'cpu') {
          result = (usage / 1000000).toFixed(2)
        } else {
          result = (usage / 1000).toFixed(2)
        }
        result = result + unit
      }
    }
  }
  return result
}

// 终端
const dialogTerminalVisible = ref(false)
const TerminalData = ref({})
const ContainerName = ref('')
const handleTerminal = (row, name) => {
  TerminalData.value = row
  title.value = '容器组名：' + row.metadata.name + ' 容器名：' + name + ' 终端'
  TerminalData.value['cluster_id'] = Detaildata.value.cluster_id
  ContainerName.value = name
  dialogTerminalVisible.value = true
}

// 终端日志
const dialogTerminalLogsVisible = ref(false)
const handleTerminalLogs = (row, name) => {
  TerminalData.value = row
  title.value = '容器组名：' + row.metadata.name + ' 容器名：' + name + ' 终端日志'
  TerminalData.value['cluster_id'] = Detaildata.value.cluster_id
  ContainerName.value = name
  dialogTerminalLogsVisible.value = true
}

// 关闭模态框
const closeDialog = () => {
  dialogTerminalLogsVisible.value = false
  dialogTerminalVisible.value = false
  dialogFull.value = false
}
// 全屏
const handledialogFull = () => {
  if (dialogFull.value) {
    dialogFull.value = false
  } else {
    dialogFull.value = true
  }
}

// 监控展示
const PodDetail = ref({})
const handleMonitor = (row) => {
  PodDetail.value = row
  PodDetail.value.cluster_id = Detaildata.value.cluster_id
  dialogMonitorVisible.value = true
}

</script>
<style scoped>

</style>
