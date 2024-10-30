<template>
  <div style="margin-top: 20px">
    <el-card class="box-card" shadow="hover">
      <template #header>
        <div class="card-header">
          <span>IP 地址</span>
        </div>
      </template>
      <div v-if="type === 'ClusterIP' || type === 'LoadBalancer' || type === 'NodePort'">
        <el-row>
          <el-col :span="12">
            <el-input v-model="formData.clusterIP" placeholder="e.g. 1.1.1.1" />
          </el-col>
        </el-row>
        <h2>外部IP</h2>
      </div>
      <div>
        <div v-for="(row, index) in formData.externalIPs" :key="index" style="margin-top: 5px">
          <span v-if="false">{{ row }}</span>
          <el-row :gutter="20">
            <el-col :span="12">
              <el-input
                v-model="formData.externalIPs[index]"
                placeholder="e.g. 1.1.1.1"
                @input="$forceUpdate()"
              />
            </el-col>
            <el-col :span="2">
              <el-button type="danger" link icon="delete" size="small" @click="handleDelete(index)">删除</el-button>
            </el-col>
          </el-row>
        </div>

      </div>
      <div style="margin-top: 5px">
        <el-button size="small" type="primary" link icon="Plus" @click="handleAdd">添加</el-button>
      </div>
    </el-card>
  </div>
</template>
<script>
export default {
  name: 'ServiceIpAddresses',
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
      return ''
    },
    type: String
  }
})

// 数据初始化
const formData = ref({})
const FormInitData = () => {
  formData.value = props.form
  if (formData.value) {
    if (!formData.value.externalIPs) {
      formData.value.externalIPs = []
    }
    if (!formData.value.clusterIP) {
      formData.value.clusterIP = ''
    }
  }
}

FormInitData()

// 删除
const handleDelete = (index) => {
  formData.value.externalIPs.splice(index, 1)
}

// 添加
const handleAdd = () => {
  formData.value.externalIPs.push('')
}
</script>
<style scoped>

</style>
