<template>
  <div style="overflow: hidden; width: 100%; max-width: 600px; margin-left: 20px;">
    <el-form ref="FormBlock" :model="formData" :rules="rules" label-width="120px">
      <!-- 名称 -->
      <el-form-item label="名称" prop="name">
        <el-input v-model="formData.name" placeholder="请输入名称" autocomplete="off" />
      </el-form-item>

      <!-- 配置类型 -->
      <el-form-item label="配置类型" prop="type">
        <el-select v-model="formData.type" placeholder="请选择配置类型">
          <el-option label="kubernetes" :value="0" />
          <el-option label="registry" :value="1" />
        </el-select>
      </el-form-item>

      <!-- Kubernetes 配置 -->
      <template v-if="formData.type === 0">
        <el-form-item label="认证类型" prop="authType">
          <el-radio-group v-model="formData.authType">
            <el-radio label="config">Kubernetes Config</el-radio>
            <el-radio label="token">Service Account Token</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item v-if="formData.authType === 'config'" label="Kubernetes Config" prop="conf">
          <el-input type="textarea" v-model="formData.conf" placeholder="请输入Kubernetes Config" autocomplete="off" />
        </el-form-item>

        <el-form-item v-if="formData.authType === 'token'" label="Kubernetes URL" prop="url">
          <el-input v-model="formData.url" placeholder="请输入Kubernetes地址" autocomplete="off" />
        </el-form-item>

        <el-form-item v-if="formData.authType === 'token'" label="Kubernetes Token" prop="kubeToken">
          <el-input type="textarea" v-model="formData.kubeToken" placeholder="请输入Kubernetes Token" autocomplete="off" />
        </el-form-item>
      </template>

      <!-- Registry 配置 -->
      <template v-if="formData.type === 1">
        <el-form-item label="Registry URL" prop="registryUrl">
          <el-input v-model="formData.registryUrl" placeholder="请输入Registry地址" autocomplete="off" />
        </el-form-item>
        <el-form-item label="用户名" prop="username">
          <el-input v-model="formData.username" placeholder="请输入Registry用户名" autocomplete="off" />
        </el-form-item>
        <el-form-item label="用户密码" prop="password">
          <el-input v-model="formData.password" placeholder="请输入Registry密码" type="password" autocomplete="off" />
        </el-form-item>
        <el-form-item label="是否HTTPS" prop="isHttps">
          <el-switch v-model="formData.isHttps" />
        </el-form-item>
      </template>

      <!-- 描述 -->
      <el-form-item label="描述" prop="desc">
        <el-input v-model="formData.desc" placeholder="请输入描述" type="textarea" autocomplete="off" />
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
    close: () => true,
    enter: (value) => !!value.name
  }
}
</script>

<script setup>
import { ref,watchEffect,watch } from 'vue'
const emit = defineEmits(['close', 'enter'])
const props = defineProps({
  form: {
    default: () => ({}),
    type: Object
  },
})

const formData = ref({
  name: '',
  type: null,
  authType: 'config',
  conf: '',
  url: '',
  kubeToken: '',
  registryUrl: '',
  username: '',
  password: '',
  isHttps: false,
  desc: ''
})
// 使用 watchEffect 监听 props.form 的变化并同步到 formData
watchEffect(() => {
  formData.value = { ...props.form };
});
// 当选择的 type 为 0（Kubernetes）时，默认将 authType 设置为 "config"
watch(() => formData.value.type, (newType) => {
  if (newType === 0) {
    formData.value.authType = 'config'
  }
})
const rules = ref({
  name: [{ required: true, message: '请输入名称', trigger: 'blur' }],
  type: [{ required: true, message: '请选择配置类型', trigger: 'change' }],
  conf: [{ required: (form) => form.authType === 'config' && form.type === 0, message: '请输入Kubernetes Config', trigger: 'blur' }],
  url: [{ required: (form) => form.authType === 'token' && form.type === 0, message: '请输入Kubernetes URL', trigger: 'blur' }],
  kubeToken: [{ required: (form) => form.authType === 'token' && form.type === 0, message: '请输入Kubernetes Token', trigger: 'blur' }],
  registryUrl: [{ required: (form) => form.type === 1, message: '请输入Registry URL', trigger: 'blur' }],
  username: [{ required: (form) => form.type === 1, message: '请输入用户名', trigger: 'blur' }],
  password: [{ required: (form) => form.type === 1, message: '请输入密码', trigger: 'blur' }],
  desc: [{ required: false, message: '请输入描述信息', trigger: 'blur' }],
})

// 关闭
const closeDialog = () => {
  FormBlock.value.resetFields()
  emit('close')
}

// 校验并提交
const FormBlock = ref(null)
const enterDialog = async () => {
  FormBlock.value.validate(async valid => {
    if (valid) {
      // 构造符合后端要求的数据格式
      const payload = {
        id: formData.value.ID,
        name: formData.value.name,
        desc: formData.value.desc,
        type: formData.value.type,
        config: {}
      };

      if (formData.value.type === 0) { // Kubernetes 配置
        payload.config.type = formData.value.authType === 'config' ? 0 : 1;
        if (formData.value.authType === 'config') {
          payload.config.conf = formData.value.conf;
        } else if (formData.value.authType === 'token') {
          payload.config.url = formData.value.url;
          payload.config.conf = formData.value.kubeToken;
        }
      } else if (formData.value.type === 1) { // Registry 配置
        payload.config.url = formData.value.registryUrl;
        payload.config.username = formData.value.username;
        payload.config.password = formData.value.password;
        payload.config.isHttps = formData.value.isHttps;
      } else if (formData.value.type === 2) { // Jenkins 配置
        payload.config.url = formData.value.jenkinsUrl;
        payload.config.username = formData.value.jenkinsUsername;
        payload.config.token = formData.value.jenkinsToken;
        payload.config.workspace = formData.value.workspace;
        payload.config.namespace = formData.value.namespace;
      }

      // 触发提交操作
      emit('enter', payload);
    }
  });
}

</script>

<style scoped>
.dialog-footer {
  margin-top: 20px;
}
</style>
