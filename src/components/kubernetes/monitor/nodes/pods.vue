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
const podsCapacityValue = ref([])
const podsUsageValue = ref([])
const MetricDataFormat = () => {
  if (MetricData.value.podCapacity) {
    if (MetricData.value.podCapacity.length > 0) {
      MetricData.value.podCapacity.forEach(function(item) {
        MetricTime.value.push(formatTimeLabels(item[0]))
        podsCapacityValue.value.push(Math.round(parseFloat(item[1]) * 100) / 100)
      })
    }
  }

  if (MetricData.value.podUsage) {
    if (MetricData.value.podUsage.length > 0) {
      MetricData.value.podUsage.forEach(function(item) {
        MetricTime.value.push(formatTimeLabels(item[0]))
        podsUsageValue.value.push(Math.round(parseFloat(item[1]) * 100) / 100)
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
          result += item.marker + item.seriesName + '：' + item.data + ' 个' + '<br/>'
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
      data: ['Capacity', 'Usage']
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
        axisLabel: { formatter: '{value} 个' }
      }
    ],
    series: [
      {
        name: 'Capacity',
        type: 'line',
        areaStyle: {},
        data: podsCapacityValue.value
      },
      {
        name: 'Usage',
        type: 'line',
        areaStyle: {},
        data: podsUsageValue.value
      }
    ]
  }
  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option)
}
</script>

<style scoped>
</style>
