<template>
  <div style="overflow: hidden;width: 100%;">
    <el-form
        ref="FormBlock"
        :model="formData"
        :rules="rules"
        label-width="100px"
    >
      <el-form-item
          label="名称"
          prop="name"
      >
        <el-input
            v-model="formData.name"
            autocomplete="off"
        />
      </el-form-item>
      <el-form-item
          label="凭据类型"
          prop="kube_type"
      >
        <el-radio-group v-model="formData.kube_type">
          <el-radio :label="1">KubeConfig</el-radio>
          <el-radio :label="2">Token</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item
          label="集群凭证"
          prop="kubeconfig"
      >
        <el-input
            v-model="formData.kube_config"
            autocomplete="off"
            type="textarea"
        />
      </el-form-item>
      <el-form-item
          label="接口地址"
          prop="api_address"
      >
        <el-input
            v-model="formData.api_address"
            autocomplete="off"
            placeholder="请输入Master APi 地址, 例如: https://127.0.0.1:6443"
        />
      </el-form-item>
      <el-divider>
        <span>Prometheus监控</span>
      </el-divider>
      <el-form-item
          label="监控地址"
          prop="prometheus_url"
      >
        <el-input
            v-model="formData.prometheus_url"
            autocomplete="off"
            placeholder="请输入普罗米修斯监控地址, 例如: http://127.0.0.1:9090"
        />
      </el-form-item>
      <el-form-item
          label="认证类型"
          prop="prometheus_auth_type"
      >
        <el-radio-group
            v-model="formData.prometheus_auth_type"
            @change="TypeChange"
        >
          <el-radio :label="1">无</el-radio>
          <el-radio :label="2">BaseAuth</el-radio>
        </el-radio-group>
      </el-form-item>
      <div v-if="prometheusTypeStatus">
        <el-form-item
            v-if="formData.prometheus_auth_type === 2"
            label="用户名"
            prop="prometheus_user"
        >
          <el-input
              v-model="formData.prometheus_user"
              autocomplete="off"
              placeholder="请输入普罗米修斯认证用户"
          />
        </el-form-item>
        <el-form-item
            v-if="formData.prometheus_auth_type === 2"
            label="密码"
            prop="prometheus_pwd"
        >
          <el-input
              v-model="formData.prometheus_pwd"
              :type="prometheuslock === 'lock' ? 'password' : 'text'"
              placeholder="请输入普罗米修斯认证密码"
          >
            <template #suffix>
              <span class="input-icon">
                <el-icon>
                  <component
                      :is="prometheuslock"
                      @click="prometheuschangeLock"
                  />
                </el-icon>
              </span>
            </template>
          </el-input>
        </el-form-item>
      </div>
    </el-form>
    <div
        class="dialog-footer"
        align="right"
    >
      <el-button
          size="small"
          @click="closeDialog"
      >取 消</el-button>
      <el-button
          size="small"
          type="primary"
          @click="enterDialogs"
      >确 定</el-button>
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

const rules = ref({
  name: [{ required: true, message: '请输入名称', trigger: 'blur' }],
  kube_type: [{ required: true, message: '请输选择凭据类型', trigger: 'blur' }],
  kube_config: [{ required: true, message: '请输入集群凭据', trigger: 'blur' }],
  api_address: [{ required: true, message: '请输入Master接口地址', trigger: 'blur' }],
  prometheus_auth_type: [{ required: true, message: '请选择认证类型', trigger: 'blur' }],
  prometheus_user: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
  prometheus_pwd: [{ required: true, message: '请输入密码', trigger: 'blur' }],
})

// 表单数据初始化
const formData = ref({})
const prometheusTypeStatus = ref(false)
const GetFormData = () => {
  console.log("0000000000000000000000")
  formData.value = props.form

  console.log(formData.value,"--------------------------------")
  console.log(props.form)
  console.log(formData.value)
  console.log("================================")

  console.log(formData.value,"????????????")

  if (formData.value.prometheus_auth_type === 2) {
    prometheusTypeStatus.value = true
  }

  if (!formData.value.prometheus_auth_type) {
    formData.value.prometheus_auth_type = 1
  }

  if (!formData.value.kube_type) {
    formData.value.kube_type = 1
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


const enterDialogs = async() => {
  console.log("wwwwww")
  console.log(formData.value)
  FormBlock.value.validate(async valid => {
    if (valid) {
      console.log("wocaonima")
      emit('enter', formData.value)
    }
  })
}

// 普罗米修斯认证类型改变
const TypeChange = (type) => {
  if (type === 2) {
    prometheusTypeStatus.value = true
  }
}

// 查看密码
const prometheuslock = ref('lock')
const prometheuschangeLock = () => {
  prometheuslock.value = prometheuslock.value === 'lock' ? 'unlock' : 'lock'
}

// 查看密码
const velauxlock = ref('lock')
const velauxchangeLock = () => {
  velauxlock.value = velauxlock.value === 'lock' ? 'unlock' : 'lock'
}
</script>
<style scoped>

</style>
