<template>
  <div ref="main" style="width: 1000px; height: 400px " />
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { formatTimeLabels } from '@/utils/date'
import { bytesToUnits } from '@/utils/convertMemory'
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
const MemoryCapacityValue = ref([])
const MemoryRequestsValue = ref([])
const MemoryUsageValue = ref([])
const MetricDataFormat = () => {
  if (MetricData.value.memoryCapacity) {
    if (MetricData.value.memoryCapacity.length > 0) {
      MetricData.value.memoryCapacity.forEach(function(item) {
        MetricTime.value.push(formatTimeLabels(item[0]))
        MemoryCapacityValue.value.push(bytesToUnits(parseInt(item[1])))
      })
    }
  }

  if (MetricData.value.memoryRequests) {
    if (MetricData.value.memoryRequests.length > 0) {
      MetricData.value.memoryRequests.forEach(function(item) {
        MetricTime.value.push(formatTimeLabels(item[0]))
        MemoryRequestsValue.value.push(bytesToUnits(parseInt(item[1])))
      })
    }
  }

  if (MetricData.value.memoryUsage) {
    if (MetricData.value.memoryUsage.length > 0) {
      MetricData.value.memoryUsage.forEach(function(item) {
        MetricTime.value.push(formatTimeLabels(item[0]))
        MemoryUsageValue.value.push(bytesToUnits(parseInt(item[1])))
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
          result += item.marker + item.seriesName + '：' + item.data + ' GiB' + '<br/>'
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
      data: ['Capacity', 'Requests', 'Usage'],
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
        data: MetricTime.value,
        axisTick: {
          alignWithLabel: true
        }
      }
    ],
    yAxis: [
      {
        type: 'value',
        axisLabel: { formatter: '{value} GiB' }
      }
    ],
    series: [
      {
        name: 'Capacity',
        type: 'line',
        areaStyle: {},
        data: MemoryCapacityValue.value
      },
      {
        name: 'Requests',
        type: 'line',
        areaStyle: {},
        data: MemoryRequestsValue.value
      },
      {
        name: 'Usage',
        type: 'line',
        areaStyle: {},
        data: MemoryUsageValue.value
      }
    ]
  }
  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option)
}
</script>

<style scoped>
</style>
