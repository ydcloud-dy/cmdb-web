<template>
  <div>
    <h3>基本信息</h3>
    <table style="width: 100%" class="myTable">
      <tr>
        <td>名称</td>
        <td colspan="4">{{ basicData.metadata.name }}</td>
      </tr>
      <tr v-if="basicData.metadata.namespace">
        <td>命名空间</td>
        <td colspan="4">{{ basicData.metadata.namespace }}</td>
      </tr>
      <tr v-if="basicData.metadata.finalizers">
        <td>Finalizers</td>
        <td colspan="4">
          <div v-for="value in basicData.metadata.finalizers" :key="value" class="myTag">
            <el-tag type="info" size="small">
              {{ value.length > 100 ? value.substring(0, 100) + "..." : value }}
            </el-tag>
          </div>
        </td>
      </tr>
      <tr>
        <td>镜像名称</td>
        <td colspan="4">
          <div v-for="(item,index) in containers" :key="index" class="myTag">
            <el-tag type="info" size="small">
              {{ item.image }}
            </el-tag>
          </div>
        </td>
      </tr>
      <tr>
        <td>存活时间</td>
        <td colspan="4">{{ AgeFormat(basicData.metadata.creationTimestamp) }}</td>
      </tr>
      <tr>
        <td>标签</td>
        <td colspan="4">
          <detail-key-value v-if="basicData.metadata.labels" :form="basicData.metadata.labels" />
        </td>
      </tr>
      <tr>
        <td>注解</td>
        <td colspan="4">
          <detail-key-value v-if="basicData.metadata.annotations" :form="basicData.metadata.annotations" />
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'DetailBasic',
}
</script>
<script setup>
import { ref } from 'vue'
import { AgeFormat } from '@/utils/age'
import DetailKeyValue from './detail-key-value.vue'
const props = defineProps({
  form: {
    default: function() {
      return {}
    },
    type: Object
  },
})

const containers = ref([])
const basicData = ref({})
const basicInitData = () => {
  basicData.value = props.form
  if (basicData.value.spec?.template?.spec?.containers) {
    containers.value = basicData.value.spec.template.spec.containers
    return true
  } else if (basicData.value.spec?.jobTemplate?.spec?.template?.spec?.containers) {
    containers.value = basicData.value.spec.jobTemplate.spec.template.spec.containers
    return true
  } else {
    return false
  }
}
basicInitData()
</script>
<style scoped>

</style>
