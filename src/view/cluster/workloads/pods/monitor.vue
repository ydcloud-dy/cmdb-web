<template>
  <div class="container">
    <div>
      <el-form-item label="时间">
        <el-date-picker
          v-model="timeArr"
          style="width:100%"
          size="small"
          type="datetimerange"
          :disabled-date="disabledDateFun"
          range-separator="~"
          start-placeholder="开始时间"
          end-placeholder="结束时间"
          value-format="YYYY-MM-DD H:m:s"
          :clearable='false'
          @change="DataTimeChange"
        />
      </el-form-item>
    </div>
    <el-tabs style="width:100%;">
      <el-tab-pane label="CPU">
        <!--子组件-->
        <MonitorCPU v-if="MetricStatus" :data="MetricData" />
      </el-tab-pane>
      <el-tab-pane label="Memory">
        <!--子组件-->
        <MonitorMemory v-if="MetricStatus" :data="MetricData" />
      </el-tab-pane>
      <el-tab-pane label="Network">
        <!--子组件-->
        <MonitorNetwork v-if="MetricStatus" :data="MetricData" />
      </el-tab-pane>
      <el-tab-pane label="Filesystem">
        <!--子组件-->
        <MonitorFilesystem v-if="MetricStatus" :data="MetricData" />
      </el-tab-pane>
      <el-tab-pane label="TCP">
        <!--子组件-->
        <TCpConnections v-if="MetricStatus" :data="MetricData" />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: 'Monitor',
}
</script>

<script setup>
import { ref } from 'vue'
import MonitorCPU from '@/components/kubernetes/monitor/pods/cpu.vue'
import MonitorMemory from '@/components/kubernetes/monitor/pods/memory.vue'
import MonitorNetwork from '@/components/kubernetes/monitor/pods/network.vue'
import MonitorFilesystem from '@/components/kubernetes/monitor/pods/filesystem.vue'
import TCpConnections from '@/components/kubernetes/monitor/pods/podtcp.vue'
import { GetMetrics } from '@/api/kubernetes/metrics'
import { mapValues } from 'lodash'
import { normalizeMetrics } from '@/utils/metrics'
const props = defineProps({
  data: {
    default: function() {
      return {}
    },
    type: Object
  },
})

// 数据初始化
const poddetail = ref({})
const timeArr = ref(null)
const MetricStatus = ref(false)
const GetDialogData = () => {
  poddetail.value = props.data
  getMetrics()
}

const MetricData = ref({})
const selectTimeStart = ref(0)
const selectTimeEnd = ref(0)
const getMetrics = async() => {
  const opts = { category: 'pods',
    pods: poddetail.value.metadata.name,
    namespace: poddetail.value.metadata.namespace,
    cluster_id: poddetail.value.cluster_id,
    start: selectTimeStart.value,
    end: selectTimeEnd.value,
  }
  const resp = await GetMetrics({
    CpuUsage: opts,
    CpuRequests: opts,
    CpuLimits: opts,
    memoryUsage: opts,
    MemoryRequests: opts,
    MemoryLimits: opts,
    FsUsage: opts,
    FsWrite: opts,
    FsRead: opts,
    NetworkReceive: opts,
    NetworkTransmit: opts,
    PodTcpEstablishedConn: opts,
    PodTcpTimewaitConn: opts
  })
  if (resp.code === 0) {
    MetricData.value = mapValues(
      resp.data.metrics,
      (metric) => normalizeMetrics(metric).data.result[0].values
    )
  }
  MetricStatus.value = true
}
GetDialogData()

// 选择时间查看数据
const DataTimeChange = (data) => {
  var start = new Date(data[0])
  selectTimeStart.value = start.getTime()

  var end = new Date(data[1])
  selectTimeEnd.value = end.getTime()
  MetricStatus.value = false
  getMetrics()
}

const disabledDateFun = (time) => {
  return time.getTime() < Date.now() - 7 * 24 * 3600 * 1000 + 20 * 60 * 1000 || time.getTime() > Date.now()
}
</script>
<style scoped>

</style>
