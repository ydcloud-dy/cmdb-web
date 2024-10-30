<template>
  <div ref="chart"  style="overflow:visible; height:50px;width:200px;" />
</template>

<script setup>
import { ref, onMounted } from 'vue'
import * as echarts from 'echarts'

const props = defineProps({
  colordata: {
    default: function() {
      return ''
    },
    type: String
  },
  data: {
    default: function() {
      return {}
    },
    type: Object
  },
  title: {
    default: function() {
      return ''
    },
    type: String
  }
})

// 数据初始化
const colorbar = ref('')
const Datebar = ref([])
const bartitle = ref('')
const GetInitData = () => {
  colorbar.value = props.colordata
  Datebar.value = props.data
  bartitle.value = props.title
}

GetInitData()

onMounted(
  () => {
    init()
  }
)

// chart 图表初始化
const chart = ref(null)
function init() {
  // 初始化ECharts实例
  const myChart = echarts.init(chart.value)

  // ECharts配置选项
  const option = {
    color: colorbar.value,
    tooltip: {
      trigger: 'axis',
      formatter: function(params) {
        // 自定义tooltip内容，包括颜色方块、名称和数值
        let tooltipText = ''
        params.forEach(param => {
          const color = param.color
          const name = param.seriesName
          const value = param.value
          const colorBox = `<span style="display:inline-block; width:10px; height:10px; background-color:${color}; margin-right:5px;"></span>`
          tooltipText += colorBox + name + ': ' + value + '<br>'
        })
        return tooltipText
      },
      position: function(point, params, dom, rect, size) {
        // 鼠标坐标和提示框位置的参考坐标系是：以外层div的左上角那一点为原点，x轴向右，y轴向下
        // 提示框位置
        var x = 0 // x坐标位置
        var y = 0 // y坐标位置

        // 当前鼠标位置
        var pointX = point[0]
        var pointY = point[1]
        // 提示框大小
        var boxWidth = size.contentSize[0]
        var boxHeight = size.contentSize[1]

        // boxWidth > pointX 说明鼠标左边放不下提示框
        if (boxWidth > pointX) {
          x = 20
        } else { // 左边放的下
          x = pointX - boxWidth
        }

        // boxHeight > pointY 说明鼠标上边放不下提示框
        if (boxHeight > pointY) {
          y = 15
        } else { // 上边放得下
          y = pointY - boxHeight
        }
        return [x, y]
      },
    },
    grid: {
      left: '10%', // 左边距
      right: '10%', // 右边距
      top: '10%', // 上边距
      bottom: '10%' // 下边距
    },
    xAxis: {
      type: 'category',
      show: false
    },
    yAxis: {
      type: 'value',
      show: false
    },
    series: [
      {
        name: bartitle.value,
        type: 'line',
        stack: 'stack',
        areaStyle: {},
        data: Datebar.value.data.map(item => item.value)
      }
    ]
  }

  // 使用配置项设置图表
  myChart.setOption(option)
  myChart.resize({
    width: 'auto',
    height: 50,
  })
}
</script>
<style scoped>
</style>
