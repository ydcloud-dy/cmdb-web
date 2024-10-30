<template>
  <div ref="main" style="width: 1000px; height: 400px " />
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { formatTimeLabels } from '@/utils/date'
import { MemorybytesToUnits } from '@/utils/convertMemory'
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
const fsUsageValue = ref([])
const fsReadValue = ref([])
const fsWriteValue = ref([])
const MetricDataFormat = () => {
  if (MetricData.value.fsUsage) {
    if (MetricData.value.fsUsage.length > 0) {
      MetricData.value.fsUsage.forEach(function(item) {
        if (parseInt(item[1]) !== 0) {
          MetricTime.value.push(formatTimeLabels(item[0]))
          fsUsageValue.value.push(MemorybytesToUnits(parseInt(item[1])))
        }
      })
    }
  }

  if (MetricData.value.fsRead) {
    if (MetricData.value.fsRead.length > 0) {
      MetricData.value.fsRead.forEach(function(item) {
        if (parseInt(item[1]) !== 0) {
          MetricTime.value.push(formatTimeLabels(item[0]))
          fsReadValue.value.push(MemorybytesToUnits(parseInt(item[1])))
        }
      })
    }
  }

  if (MetricData.value.fsWrite) {
    if (MetricData.value.fsWrite.length > 0) {
      MetricData.value.fsWrite.forEach(function(item) {
        if (parseInt(item[1]) !== 0) {
          MetricTime.value.push(formatTimeLabels(item[0]))
          fsWriteValue.value.push(MemorybytesToUnits(parseInt(item[1])))
        }
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
          result += item.marker + item.seriesName + '：' + item.data + ' MiB' + '<br/>'
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
      data: ['Usage', 'Write', 'Read'],
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
        axisLabel: { formatter: '{value} MiB' }
      }
    ],
    series: [
      {
        name: 'Usage',
        type: 'line',
        areaStyle: {},
        data: fsUsageValue.value
      },
      {
        name: 'Write',
        type: 'line',
        areaStyle: {},
        data: fsWriteValue.value
      },
      {
        name: 'Read',
        type: 'line',
        areaStyle: {},
        data: fsReadValue.value
      },
    ]
  }
  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option)
}
</script>

<style scoped>
</style>
