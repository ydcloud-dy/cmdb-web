<template>
  <div style="margin-top: 20px">
    <el-card class="box-card" shadow="hover">
      <el-form ref="form" label-position="top" :model="formData">
        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item label="Cert" prop="crt">
              <form-item-block v-model="formData.crt" style="width: 100%" item-type="textarea" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="Key" prop="key">
              <form-item-block v-model="formData.key" style="width: 100%" item-type="textarea" />
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'SecretCertificate',
}
</script>
<script setup>
import { ref } from 'vue'
import FormItemBlock from '@/components/kubernetes/form-item/index.vue'
import { Base64 } from 'js-base64'
const props = defineProps({
  form: {
    default: function() {
      return {}
    },
    type: Object
  }
})

// 数据初始化
const formData = ref({
  crt: '',
  key: '',
})
const FormInitData = () => {
  if (Object.keys(props.form).length !== 0) {
    formData.value = {
      crt: Base64.decode(props.form['tls.crt']),
      key: Base64.decode(props.form['tls.key'])
    }
  }
}

FormInitData()

const transformation = (parentFrom) => {
  if (formData.value) {
    parentFrom.data = {
      'tls.crt': Base64.encode(formData.value.crt),
      'tls.key': Base64.encode(formData.value.key)
    }
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
