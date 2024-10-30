<template>
  <div>
    <h3>路由</h3>
    <el-alert v-if="ingressData.length === 0" type="info">
      <div slot="title">
        <i class="el-icon-info" />
        <span> 此处显示与 {0} 同名的 Ingress: {1}，但是您并未定义此 Ingress。</span>
      </div>
    </el-alert>
    <div v-for="(item, index) in ingressData" :key="index">
      <span>域名: {{ item.host }}</span>
      <el-table  :data="item.details">
        <el-table-column
          label="名称"
          type="scope">
          <template #default="scope">
            <span v-if="scope.row.backend.serviceName">{{ scope.row.backend.serviceName }}</span>
            <span v-if="scope.row.backend.service">{{ scope.row.backend.service.name }}</span>
          </template>
        </el-table-column>
        <el-table-column label="路径" prop="path" />
        <el-table-column
          label="端口"
          prop="port"
          type="scope"
        >
          <template #default="scope">
            <span v-if="scope.row.backend.servicePort">{{ scope.row.backend.servicePort }}</span>
            <span v-if="scope.row.backend.service">{{ scope.row.backend.service.port.number }}</span>
          </template>
        </el-table-column>
        <el-table-column label="类型" prop="pathType" />
      </el-table>
      <br><br>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailIngress',
}
</script>
<script setup>
import { ref } from 'vue'
import {
  IngressesList,
} from '@/api/kubernetes/ingress'
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

// 获取ingress数据
const ingressData = ref([])
const IngressDataFormat = async() => {
  const res = await IngressesList({cluster_id:Detaildata.value.cluster_id,namespace:  Detaildata.value.metadata.namespace,
    labelSelector:DetailSelectors.value})
  if (res.code === 0 && res.data.items) {
    for (const ing of res.data.items) {
      if ((ing.metadata.name === Detaildata.value.metadata.name)) {
        if (ing.spec.rules) {
          for (const i of ing.spec.rules) {
            var item = {
              host: i.host,
            }
            if (i.http) {
              item.details = i.http.paths
            }
            ingressData.value.push(item)
          }
        }
      }
    }
  }
}

IngressDataFormat()
</script>
<style scoped>

</style>
