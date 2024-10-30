<template>
  <div>
    <el-form ref="form" label-position="top" :model="formData">
      <el-row :gutter="24">
        <el-col :span="8">
          <el-form-item label="容器名称" prop="name">
            <form-item-block v-model="formData.name" style="width: 100%" item-type="input" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="容器镜像" prop="image">
            <form-item-block v-model="formData.image" style="width: 100%" placeholder="e.g. nginx:latest" item-type="input" />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="24">
        <el-col :span="8">
          <el-form-item label="拉取策略" prop="imagePullPolicy">
            <form-item-block v-model="formData.imagePullPolicy" style="width: 100%" item-type="select" :no-clear="true" :selections="image_pull_policy_list" />
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'ContainerBaseData',
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
const image_pull_policy_list = ref([
  { label: 'Always', value: 'Always' },
  { label: 'IfNotPresent', value: 'IfNotPresent' },
])

// 数据初始化
const formData = ref({})
const FormInitData = () => {
  formData.value = props.form
}

FormInitData()
</script>
<style scoped>

</style>
