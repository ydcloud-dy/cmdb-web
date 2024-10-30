<template>
  <div>
    <el-tabs style="width:100%;">
      <el-tab-pane label="连接信息">
        <!--子组件-->
        <KubeConfig :form="formData" />
      </el-tab-pane>
      <el-tab-pane label="用户">
        <!--子组件-->
        <Users :form="formData" />
      </el-tab-pane>
      <el-tab-pane label="角色">
        <!--子组件-->
        <Roles :form="formData" />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: 'Rbac',
}
</script>
<script setup>
import { ref } from 'vue'
import Users from './users.vue'
import Roles from './roles.vue'
import KubeConfig from './kubeconfig.vue'
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
