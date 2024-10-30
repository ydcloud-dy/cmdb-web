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
const PodTcpEstablishedConnValue = ref([])
const PodTcpTimewaitConnValue = ref([])
const MetricDataFormat = () => {
  if (MetricData.value.podTcpEstablishedConn) {
    if (MetricData.value.podTcpEstablishedConn.length > 0) {
      MetricData.value.podTcpEstablishedConn.forEach(function(item) {
        if (parseInt(item[1]) !== 0) {
          MetricTime.value.push(formatTimeLabels(item[0]))
          PodTcpEstablishedConnValue.value.push(parseInt(item[1]))
        }
      })
    }
  }

  if (MetricData.value.podTcpTimewaitConn) {
    if (MetricData.value.podTcpTimewaitConn.length > 0) {
      MetricData.value.podTcpTimewaitConn.forEach(function(item) {
        if (parseInt(item[1]) !== 0) {
          MetricTime.value.push(formatTimeLabels(item[0]))
          PodTcpTimewaitConnValue.value.push(parseInt(item[1]))
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
    color: ['#67c23a', '#37A2FF'],
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
      data: ['TCP Timewait Conn', 'TCP Established Conn']
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    grid: {
      left: '10%', // 左边距
      right: '10%', // 右边距
      top: '10%', // 上边距
      bottom: '10%' // 下边距
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
        name: 'TCP Established Conn',
        type: 'line',
        areaStyle: {},
        data: PodTcpEstablishedConnValue.value
      },
      {
        name: 'TCP Timewait Conn',
        type: 'line',
        areaStyle: {},
        data: PodTcpTimewaitConnValue.value
      },
    ]
  }
  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option)
}
</script>

<style scoped>
</style>
