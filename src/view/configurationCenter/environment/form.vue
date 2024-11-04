<template>
  <div style="overflow: hidden; width: 100%; max-width: 600px; margin-left: 20px;">
    <el-form ref="FormBlock" :model="formData" :rules="rules" label-width="100px">
      <el-form-item label="名称" prop="name">
        <el-input v-model="formData.name" autocomplete="off" />
      </el-form-item>
      <el-form-item label="标识" prop="key">
        <el-input v-model="formData.key" autocomplete="off" />
      </el-form-item>
      <el-form-item label="备注" prop="desc">
        <el-input v-model="formData.desc" type="textarea" autocomplete="off" />
      </el-form-item>
    </el-form>
    <div class="dialog-footer" align="right">
      <el-button size="small" @click="closeDialog">取 消</el-button>
      <el-button size="small" type="primary" @click="enterDialog">确 定</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FormBlock',
  emits: {
    close: () => {
      return true
    },
    enter: (value) => {
      if (value.length === 1) {
        return true
      } else {
        return false
      }
    },
  }
}
</script>

<script setup>
import { ref } from 'vue'
const emit = defineEmits(['close', 'enter'])
const props = defineProps({
  form: {
    default: function() {
      return {}
    },
    type: Object
  },
})
watchEffect(() => {
  formData.value = { ...props.form };
});

const rules = ref({
  name: [{ required: true, message: '请输入环境名称，以中文命名', trigger: 'blur' }],
  key: [{ required: true, message: '请输入环境标识，只能以字母命名', trigger: 'blur' }],
  desc: [{ required: false, message: '请输入备注信息', trigger: 'blur' }],
})

// 表单数据初始化
const formData = ref({})
const GetFormData = () => {
  formData.value = props.form
}

GetFormData()

// 关闭
const closeDialog = () => {
  FormBlock.value.resetFields()
  emit('close')
}

// 校验并提交
const FormBlock = ref(null)
const enterDialog = async() => {
  FormBlock.value.validate(async valid => {
    if (valid) {
      emit('enter', formData.value)
    }
  })
}
</script>

<style scoped>
.dialog-footer {
  margin-top: 20px;
}
</style>
