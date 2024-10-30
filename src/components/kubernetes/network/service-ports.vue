<template>
  <div style="margin-top: 20px">
    <el-card class="box-card" shadow="hover">
      <template #header>
        <div class="card-header">
          <span>端口</span>
        </div>
      </template>
      <el-row>
        <el-col :span="24">
          <table style="width: 100%;padding: 0" class="tab-table">
            <tr>
              <th scope="col" width="20%" align="left">
                <label>端口名称</label>
              </th>
              <th scope="col" width="20%" align="left">
                <label>监听端口</label>
              </th>
              <th scope="col" width="10%" align="left">
                <label>协议</label>
              </th>
              <th scope="col" width="20%" align="left">
                <label>目标端口</label>
              </th>
              <th v-if="type==='NodePort'" scope="col" width="20%" align="left">
                <label />
              </th>
              <th />
            </tr>
            <tr v-for="(row,index) in servicePorts" :key="index">
              <td>
                <el-input v-model="row.name" />
              </td>
              <td>
                <el-input v-model.number="row.port" placeholder="80" />
              </td>
              <td>
                <el-select v-model="row.protocol" style="width: 100%">
                  <el-option label="TCP" value="TCP" />
                  <el-option label="UDP" value="UDP" />
                </el-select>
              </td>
              <td>
                <el-input v-model.number="row.targetPort" placeholder="80" />
              </td>
              <th v-if="type==='NodePort'">
                <el-input v-model.number="row.nodePort" placeholder="30001" />
              </th>
              <td>
                <el-button type="danger" link icon="delete" size="small" @click="handleDelete(index)">删除
                </el-button>
              </td>
            </tr>
            <tr>
              <td align="left">
                <el-button size="small" type="primary" link icon="plus" @click="handleAdd">添加</el-button>
              </td>
            </tr>
          </table>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'ServicePorts',
}
</script>
<script setup>
import { ref } from 'vue'
const props = defineProps({
  form: {
    default: function() {
      return {}
    },
    type: Object
  },
  type: {
    default: function() {
      return {}
    },
    type: String
  }
})

// 数据初始化
const formData = ref('')
const type = ref('')
const servicePorts = ref([])
const FormInitData = () => {
  formData.value = props.form
  type.value = props.value
  if (formData.value.ports) {
    servicePorts.value = formData.value.ports
  }
}

FormInitData()

// 添加
const handleAdd = () => {
  const item = {
    name: '',
    port: '',
    protocol: 'TCP',
    targetPort: ''
  }
  servicePorts.value.push(item)
}

// 删除
const handleDelete = (index) => {
  servicePorts.value.splice(index, 1)
}

const transformation = (parentFrom) => {
  if (parentFrom.spec) {
    parentFrom.spec.ports = servicePorts.value
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
