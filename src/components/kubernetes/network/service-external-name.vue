<template>
  <div style="margin-top: 20px">
    <el-card class="box-card" shadow="hover">
      <template #header>
        <div class="card-header">
          <span>External Name</span>
        </div>
      </template>
      <el-row>
        <el-col :span="12">
          <el-input v-model="formData.externalName" placeholder="e.g. www.example.com" />
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'ServiceExternalName',
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
  }
})

// 数据初始化
const formData = ref('')
const FormInitData = () => {
  formData.value = props.form
  if (!formData.value.externalName) {
    formData.value.externalName = ''
  }
}

FormInitData()
</script>
<style scoped>

</style>
