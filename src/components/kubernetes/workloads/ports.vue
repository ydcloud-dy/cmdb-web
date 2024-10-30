<template>
  <div>
    <el-form>
      <table style="width: 98%" class="tab-table">
        <tr>
          <th scope="col" width="45%" align="left"><label>名称</label></th>
          <th scope="col" width="15%" align="left"><label>容器端口</label></th>
          <th scope="col" width="15%" align="left"><label>协议</label></th>
          <th scope="col" width="15%" align="left"><label>主机端口</label></th>
          <th align="left" />
        </tr>
        <tr v-for="(row, index) in ports" :key="index">
          <td>
            <form-item-block v-model="row.name" item-type="input" />
          </td>
          <td>
            <form-item-block v-model.number="row.containerPort" placeholder="e.g. 8080" item-type="number" />
          </td>
          <td>
            <form-item-block v-model="row.protocol" item-type="select" :selections="protocol_list" />
          </td>
          <td>
            <form-item-block v-model.number="row.hostPort" placeholder="e.g. 80" item-type="number" />
          </td>
          <td>
            <el-button type="danger" link icon="delete" size="small" @click="handleDelete(index)">
              删除
            </el-button>
          </td>
        </tr>
        <tr>
          <td align="left">
            <el-button size="small" type="primary" link icon="plus" @click="handleAdd">添加</el-button>
          </td>
        </tr>
      </table>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'Ports',
}
</script>
<script setup>
import { ref } from 'vue'
import FormItemBlock from '@/components/kubernetes/form-item/index.vue'
const props = defineProps({
  form: {
    default: function() {
      return {}
    },
    type: Object
  }
})

// 数据初始化
const protocol_list = ref([
  { label: 'TCP', value: 'TCP' },
  { label: 'UDP', value: 'UDP' }
])

// 数据初始化
const ports = ref([])
const formData = ref({})
const FormInitData = () => {
  formData.value = props.form
  if (formData.value) {
    if (formData.value.ports) {
      for (const po of formData.value.ports) {
        const itemPo = {
          name: po.name,
          protocol: po.protocol,
          containerPort: po.containerPort,
          hostPort: po.hostPort
        }
        ports.value.push(itemPo)
      }
    }
  }
}

FormInitData()

const handleAdd = () => {
  ports.value.push({ name: '',
    protocol: 'TCP',
    containerPort: null,
    hostPort: '' })
}

const handleDelete = (index) => {
  ports.value.splice(index, 1)
}

const transformation = (parentFrom) => {
  parentFrom.ports = []
  if (ports.value.length !== 0) {
    for (const po of ports.value) {
      var itemPo = {}
      itemPo.name = po.name || undefined
      itemPo.protocol = po.protocol || undefined
      itemPo.containerPort = po.containerPort || undefined
      itemPo.hostPort = po.hostPort || undefined
      parentFrom.ports.push(itemPo)
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
