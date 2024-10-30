<template>
  <div>
    <el-tabs :tab-position="tabPosition" style="height: 100%">
      <el-tab-pane label="集群">
        <ClusterRole :form="formData" />
      </el-tab-pane>
      <el-tab-pane label="命名空间">
        <NamespaceRole :form="formData" />
      </el-tab-pane>
    </el-tabs>
  </div>

</template>

<script>
export default {
  name: 'RulesBlock',
}
</script>
<script setup>
import { ref } from 'vue'
import ClusterRole from './cluster_roles.vue'
import NamespaceRole from './namespace_roles.vue'
const tabPosition = ref('left')
const props = defineProps({
  form: {
    default: function() {
      return {}
    },
    type: Object
  },
})

// 表单数据初始化
const formData = ref({})
const GetFormData = () => {
  formData.value = props.form
}

GetFormData()
</script>
<style scoped>

</style>
