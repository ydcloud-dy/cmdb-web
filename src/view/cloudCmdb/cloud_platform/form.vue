<template>
  <div style="overflow: hidden;width: 100%;">
    <el-form ref="FormBlock" :model="formData" :rules="rules" label-width="150px">
      <el-form-item label="名称" prop="name">
        <el-input v-model="formData.name" autocomplete="off" />
      </el-form-item>
      <el-form-item label="厂商" prop="platform">
        <el-radio-group v-model="formData.platform">
          <el-radio label="aliyun">阿里云</el-radio>
          <el-radio label="tencent">腾讯云</el-radio>
          <el-radio label="huawei">华为云</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="AccessKey ID" prop="access_key_id">
        <el-input v-model="formData.access_key_id" type="password" show-password autocomplete="off" />
      </el-form-item>
      <el-form-item label="AccessKey Secret" prop="access_key_secret">
        <el-input v-model="formData.access_key_secret" type="password" show-password  autocomplete="off" />
      </el-form-item>
      <el-form-item v-show="typeData !== 'create'" label="可用区">
        <span v-for="(region,index) in regionsData" :key="index">
              <span class="margin-right label-custom" type="info">  {{ region.name }}</span>
        </span>
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
  regions: {
    default: function() {
      return []
    },
    type: Array
  },
  type: {
    default: function() {
      return []
    },
    type: String
  }
})

const rules = ref({
  name: [{ required: true, message: '请输入名称', trigger: 'blur' }],
  platform: [{ required: true, message: '请选择厂商', trigger: 'blur' }],
  access_key_id: [{ required: true, message: '请输入AccessKey ID', trigger: 'blur' }],
  access_key_secret: [{ required: true, message: '请输入AccessKey Secret', trigger: 'blur' }],
})

// 表单数据初始化
const formData = ref({})
const regionsData = ref([])
const typeData = ref('')
const prometheusTypeStatus = ref(false)
const GetFormData = () => {
  formData.value = props.form
  regionsData.value = props.regions
  typeData.value = props.type
  if (formData.value.prometheus_auth_type === 2) {
    prometheusTypeStatus.value = true
  }
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
.label-custom {
  margin-right: 8px;
  margin-bottom: 8px;
  display: inline-block;
  padding: 0 8px;
  cursor: pointer;
  height: 24px;
  line-height: 24px;
  border-radius: 12px;
  -webkit-border-radius: 12px;
  -moz-border-radius: 12px;
  -ms-border-radius: 12px;
  -o-border-radius: 12px;
  border: 1px solid #bcbdbf;
  color: var(--el-color-primary);
}
</style>
