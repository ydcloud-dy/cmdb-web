<template>
  <div>
    <el-form ref="form" label-position="top">
      <el-row>
        <el-col :span="24">
          <el-form-item label="调度类型">
            <form-item-block v-model="scheduling_type" style="width: 100%" item-type="radio" :radios="scheduling_type_list" />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row v-if="scheduling_type === 'specificNode'">
        <el-col :span="24">
          <el-form-item label="节点名称">
            <form-item-block v-model="nodeName" style="width: 100%" item-type="select2" :selections="node_name_list" />
          </el-form-item>
        </el-col>
      </el-row>

      <div v-if="scheduling_type === 'nodeSelector'">
        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item label="节点名称">
              <form-item-block v-model="matchNode" style="width: 100%" item-type="input" disabled />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="值">
              <form-item-block v-model="nodeSelector" style="width: 100%" item-type="select2" :selections="labels" @change="getMatchNode" />
            </el-form-item>
          </el-col>
        </el-row>
      </div>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'NodeselectorBlock',
}
</script>
<script setup>
import FormItemBlock from '@/components/kubernetes/form-item/index.vue'
import { ref } from 'vue'
import {GetNodesList} from '@/api/kubernetes/nodes/nodes'
const props = defineProps({
  form: {
    default: function() {
      return {}
    },
    type: Object
  },
  cluster: {
    default: function() {
      return 0
    },
    type: Number
  }
})

// 节点标签匹配
const getMatchNode = () => {
  matchNode.value = ''
  if (nodeSelector.value === '') {
    matchNode.value = node_name_list.value.join(',')
    return
  }
  const itemList = []
  for (const node of node_list.value) {
    let isMatch = false
    for (const key in node.metadata.labels) {
      if (Object.prototype.hasOwnProperty.call(node.metadata.labels, key)) {
        if (nodeSelector.value === key + ' : ' + (node.metadata.labels[key] || '')) {
          isMatch = true
          break
        }
      }
    }
    if (isMatch) {
      itemList.push(node.metadata.name)
    }
  }
  matchNode.value = itemList.join(',')
}

// 获取节点信息
const node_name_list = ref([])
const labels = ref([])
const getNodeName = async() => {
  const res = await GetNodesList({cluster_id:cluster_id.value})
  if (res.code === 0) {
    node_list.value = res.data.items
    if (res.data.items) {
      for (const node of res.data.items) {
        node_name_list.value.push(node.metadata.name)
        for (const key in node.metadata.labels) {
          if (Object.prototype.hasOwnProperty.call(node.metadata.labels, key)) {
            labels.value.push(key + ':' + (node.metadata.labels[key] || ''))
          }
        }
      }
    }
  }
  labels.value = labels.value.filter((item, index) => {
    return labels.value.indexOf(item) === index
  })
  getMatchNode()
}

const scheduling_type_list = ref([
  { label: '任意可用节点', value: 'anyNode' },
  { label: '指定节点', value: 'specificNode' },
  { label: '调度规则匹配', value: 'nodeSelector' },
])
const scheduling_type = ref('anyNode')
const nodeName = ref('')
const matchNode = ref('')
const nodeSelector = ref('')
const node_list = ref([])
const cluster_id = ref()
// 数据初始化
const formData = ref([])
const FormInitData = () => {
  formData.value = props.form
  cluster_id.value = props.cluster
  if (formData.value.nodeSelector) {
    for (const key in formData.value.nodeSelector) {
      if (Object.prototype.hasOwnProperty.call(formData.value.nodeSelector, key)) {
        nodeSelector.value = key + ':' + formData.value.nodeSelector[key]
      }
    }
    scheduling_type.value = 'nodeSelector'
  } else if (formData.value.nodeName) {
    scheduling_type.value = 'specificNode'
    nodeName.value = formData.value.nodeName
  } else {
    scheduling_type.value = 'anyNode'
  }
  getNodeName()
}

FormInitData()

// 格式化数据
const transformation = (parentFrom) => {
  if (scheduling_type.value === 'specificNode') {
    parentFrom.nodeName = nodeName.value || undefined
  }
  if (scheduling_type.value === 'nodeSelector') {
    parentFrom.nodeSelector = {}
    if (nodeSelector.value.indexOf(' : ') !== -1) {
      parentFrom.nodeSelector[nodeSelector.value.split(' : ')[0]] = nodeSelector.value.split(' : ')[1]
    }
  }
}

// 格式化为对象返回父页面
const transformationformat = async(parentFrom) => {
  transformation(parentFrom)
}

defineExpose({
  transformationformat
})

</script>
<style scoped>

</style>
