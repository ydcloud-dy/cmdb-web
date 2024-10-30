<template>
  <div>
    <el-form ref="form" label-position="top" :model="formData">
      <el-row :gutter="20">
        <el-col :span="12">
          <el-form-item v-if="formData.requests" label="CPU预留" prop="resources.requests.cpu">
            <form-item-block v-model="formData.requests.cpu" placeholder="e.g. 250m" item-type="input" devider-name="mCPUs" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item v-if="formData.requests" label="内存预留" prop="resources.requests.memory">
            <form-item-block v-model="formData.requests.memory" placeholder="e.g. 256 Mi" item-type="input" devider-name="Mi" />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="12">
          <el-form-item v-if="formData.limits" label="CPU限制" prop="resources.limits.cpu">
            <form-item-block v-model="formData.limits.cpu" placeholder="e.g. 1000m" item-type="input" devider-name="mCPUs" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item v-if="formData.limits" label="内存限制" prop="resources.limits.memory">
            <form-item-block v-model="formData.limits.memory" placeholder="e.g. 512Mi" item-type="input" devider-name="Mi" />
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'Resources',
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
const formData = ref({})
const FormInitData = () => {
  formData.value = props.form.resources
  if (!formData.value || JSON.stringify(formData.value) === '{}') {
    formData.value = {
      limits: {
        cpu: '',
        memory: ''
      },
      requests: {
        cpu: '',
        memory: ''
      }
    }
  }
}

FormInitData()

const transformation = (parentFrom) => {
  parentFrom.resources = { requests: {}, limits: {}}
  if (formData.value.requests.memory) {
    parentFrom.resources.requests.memory = formData.value.requests.memory ? formData.value.requests.memory : undefined
  }

  if (formData.value.requests.cpu) {
    parentFrom.resources.requests.cpu = formData.value.requests.cpu ? formData.value.requests.cpu : undefined
  }

  if (formData.value.limits.memory) {
    parentFrom.resources.limits.memory = formData.value.limits.memory ? formData.value.limits.memory : undefined
  }

  if (formData.value.limits.cpu) {
    parentFrom.resources.limits.cpu = formData.value.limits.cpu ? formData.value.limits.cpu : undefined
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
