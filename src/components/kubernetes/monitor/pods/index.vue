<template>
  <div className="container">
    <BarMonitor v-if="MetricStatus" :colordata="`#4D70FF`" :data="CpuUsageValue" :title="`CPU(核)`" />
    <BarMonitor v-if="MetricStatus" :colordata="`#67C23A`" :data="memUsageValue" :title="`Mem(M)`" />
    <BarMonitor v-if="MetricStatus" :colordata="`#E6A23C`" :data="PodTcpEstablishedConnValue" :title="`TCP(个)`" />
  </div>
</template>

<script>
export default {
  name: 'Monitor',
}
</script>

<script setup>
import { ref } from 'vue'
import BarMonitor from './BarMonitor.vue'
import { GetMetrics } from '@/api/kubernetes/metrics'
import { mapValues } from 'lodash'
import { normalizeMetrics } from '@/utils/metrics'
import { MemorybytesToUnits } from '@/utils/convertMemory'

const props = defineProps({
  data: {
    default: function() {
      return {}
    },
    type: Object
  },
  cluster_id: {
    default: function() {
      return 0
    },
    type: Number
  }
})

// 数据初始化
const poddetail = ref({})
const MetricStatus = ref(false)
const clusterId = ref(0)
const GetDialogData = () => {
  poddetail.value = props.data
  clusterId.value = props.cluster_id
  getMetrics()
}

// 监控数据格式化
const MetricData = ref({})
const CpuUsageValue = ref({ 'data': [] })
const memUsageValue = ref({ 'data': [] })
const PodTcpEstablishedConnValue = ref({ 'data': [] })
const MetricDataFormat = () => {
  PodTcpEstablishedConnValue.value.data = []
  memUsageValue.value.data = []
  CpuUsageValue.value.data = []

  if (MetricData.value.cpuUsage) {
    if (MetricData.value.cpuUsage.length > 0) {
      MetricData.value.cpuUsage.forEach(function(item) {
        CpuUsageValue.value.data.push({
          'date': item[0],
          'value': (Math.round(parseFloat(item[1]) * 100) / 100)
        })
      })
    }
  }

  if (MetricData.value.memoryUsage) {
    if (MetricData.value.memoryUsage.length > 0) {
      MetricData.value.memoryUsage.forEach(function(item) {
        memUsageValue.value.data.push({
          'date': item[0],
          'value': (MemorybytesToUnits(parseInt(item[1])))
        })
      })
    }
  }

  if (MetricData.value.podTcpEstablishedConn) {
    if (MetricData.value.podTcpEstablishedConn.length > 0) {
      MetricData.value.podTcpEstablishedConn.forEach(function(item) {
        PodTcpEstablishedConnValue.value.data.push({
          'date': item[0],
          'value': (parseInt(item[1])) })
      })
    }
  }
}

const selectTimeStart = ref(0)
const selectTimeEnd = ref(0)
const getMetrics = async() => {
  const opts = {
    category: 'pods',
    pods: poddetail.value.metadata.name,
    namespace: poddetail.value.metadata.namespace,
    cluster_id: clusterId.value,
    start: selectTimeStart.value,
    end: selectTimeEnd.value,
  }
  // const resp = await GetMetrics({
  //   CpuUsage: opts,
  //   memoryUsage: opts,
  //   PodTcpEstablishedConn: opts,
  // })
  // if (resp.code === 0) {
  //   MetricData.value = mapValues(
  //       resp.data.metrics,
  //       (metric) => normalizeMetrics(metric).data.result[0].values
  //   )
  //
  //   MetricDataFormat()
  //   MetricStatus.value = true
  // }
}
GetDialogData()

</script>
<style scoped>

</style>
