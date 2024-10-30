<template>
  <div>
    <h3>服务</h3>
    <el-alert v-if="ServicesData.length === 0" type="info">
      <div slot="title">
        <i class="el-icon-info" />
        <span>此处显示与 {0} 同名的 Service: {1}，但是您并未定义此 Service。</span>
      </div>
    </el-alert>
    <el-table v-if="ServicesData.length !== 0" :data="ServicesData">
      <el-table-column label="名称" prop="name" />
      <el-table-column label="协议" prop="protocol" />
      <el-table-column label="端口" prop="port" />
      <el-table-column label="NodePort" prop="nodePort" />
      <el-table-column label="容器端口" prop="targetPort" />
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'DetailServices',
}
</script>
<script setup>
import { ref } from 'vue'
import {
  ServicesList,
} from '@/api/kubernetes/services'
const props = defineProps({
  data: {
    default: function() {
      return {}
    },
    type: Object
  },
  selectors: {
    default: function() {
      return ''
    },
    type: String
  }
})

// 数据初始化
const Detaildata = ref({})
const DetailSelectors = ref('')
const DetailDataInit = async() => {
  Detaildata.value = props.data
  DetailSelectors.value = props.selectors
}
DetailDataInit()

// Service列表
const ServicesData = ref([])
const ServiceDataGet = async() => {
  console.log(Detaildata.value)
  console.log("看这里！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！")
  // const res = await ServicesList({cluster_id:Detaildata.value.cluster_id, namespaces: Detaildata.value.metadata.namespaces,
  //     Detaildata.value.metadata.name, DetailSelectors.value})
  const res = await ServicesList({cluster_id:Detaildata.value.cluster_id, namespace: Detaildata.value.metadata.namespace,
    labelSelector: DetailSelectors.value})
  if (res.code === 0 && res.data.items) {
    for (const svc of res.data.items) {
      if (svc.metadata.name === Detaildata.value.metadata.name) {
        if (svc.spec.ports) {
          for (const p of svc.spec.ports) {
            ServicesData.value.push(p)
          }
        }
      }
    }
  }
}

ServiceDataGet()
</script>
<style scoped>

</style>
