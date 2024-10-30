<template>
  <div ref="main" style="width: 1000px; height: 400px " />
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { formatTimeLabels } from '@/utils/date'
//  按需引入 echarts
import * as echarts from 'echarts'
const main = ref() // 使用ref创建虚拟DOM引用，使用时用main.value

const props = defineProps({
  data: {
    default: function() {
      return {}
    },
    type: Object
  },
})

const MetricTime = ref([])
const cpuCapacityValue = ref([])
const cpuRequestsValue = ref([])
const cpuUsageValue = ref([])
const MetricDataFormat = () => {
  if (MetricData.value.cpuLimits) {
    if (MetricData.value.cpuLimits.length > 0) {
      MetricData.value.cpuLimits.forEach(function(item) {
        MetricTime.value.push(formatTimeLabels(item[0]))
        cpuCapacityValue.value.push(Math.round(parseFloat(item[1]) * 100) / 100)
      })
    }
  }

  if (MetricData.value.cpuRequests) {
    if (MetricData.value.cpuRequests && MetricData.value.cpuRequests.length > 0) {
      MetricData.value.cpuRequests.forEach(function(item) {
        MetricTime.value.push(formatTimeLabels(item[0]))
        cpuRequestsValue.value.push(Math.round(parseFloat(item[1]) * 100) / 100)
      })
    }
  }

  if (MetricData.value.cpuUsage) {
    if (MetricData.value.cpuUsage.length > 0) {
      MetricData.value.cpuUsage.forEach(function(item) {
        MetricTime.value.push(formatTimeLabels(item[0]))
        cpuUsageValue.value.push(Math.round(parseFloat(item[1]) * 100) / 100)
      })
    }
  }

  MetricTime.value = [...new Set(MetricTime.value)]
}

// 数据初始化
const MetricData = ref({})
const GetMetricData = () => {
  MetricData.value = props.data
  MetricDataFormat()
}

GetMetricData()

onMounted(
  () => {
    init()
  }
)
function init() {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(main.value)
  // 指定图表的配置项和数据
  var option = {
    tooltip: {
      trigger: 'axis',
      formatter: function(params) {
        var result = params[0].axisValue + '<br/>'
        params.forEach(function(item) {
          result += item.marker + item.seriesName + '：' + item.data + ' 核' + '<br/>'
        })
        return result
      },
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#6a7985'
        }
      }
    },
    legend: {
      data: ['Capacity', 'Requests', 'Usage']
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    grid: {
      left: '4%',
      right: '3%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        data: MetricTime.value
      }
    ],
    yAxis: [
      {
        type: 'value',
        axisLabel: { formatter: '{value} 核' }
      }
    ],
    series: [
      {
        name: 'Capacity',
        type: 'line',
        areaStyle: {},
        data: cpuCapacityValue.value
      },
      {
        name: 'Requests',
        type: 'line',
        areaStyle: {},
        data: cpuRequestsValue.value
      },
      {
        name: 'Usage',
        type: 'line',
        areaStyle: {},
        data: cpuUsageValue.value
      }
    ]
  }
  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option)
}
</script>

<style scoped>
</style>
