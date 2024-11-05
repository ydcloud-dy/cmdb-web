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
          <el-option label="GitLab" :value="3" />
          <el-option label="GitHub" :value="4" />
          <el-option label="Gitee" :value="5" />
          <el-option label="Gitea" :value="6" />
          <el-option label="Gogs" :value="7" />
        </el-select>
      </el-form-item>

      <!-- 仓库类型 -->
      <el-form-item label="仓库类型" prop="repositoryType">
        <el-radio-group v-model="formData.repositoryType">
          <el-radio label="private">私有</el-radio>
          <el-radio label="public">开源</el-radio>
        </el-radio-group>
      </el-form-item>

      <!-- URL (根据条件禁用) -->
      <el-form-item label="地址" prop="url">
        <el-input
            v-model="formData.url"
            :placeholder="urlPlaceholder"
            :disabled="isUrlDisabled"
            autocomplete="off"
        />
      </el-form-item>

      <!-- 用户名 (仅 GitLab 私有仓库显示) -->
      <el-form-item v-if="formData.type === 3 && formData.repositoryType === 'private'" label="用户名" prop="username">
        <el-input v-model="formData.username" placeholder="请输入GitLab用户名" autocomplete="off" />
      </el-form-item>

      <!-- Token (仅私有仓库显示) -->
      <el-form-item v-if="formData.repositoryType === 'private'" label="Token" prop="token">
        <el-input v-model="formData.token" placeholder="请输入代码源Token" autocomplete="off" />
      </el-form-item>

      <!-- 描述 -->
      <el-form-item label="描述" prop="desc">
        <el-input v-model="formData.desc" placeholder="请输入描述" type="textarea" autocomplete="off" />
      </el-form-item>
    </el-form>
    <div class="dialog-footer" align="right">
      <el-button size="small" @click="closeDialog">取消</el-button>
      <el-button size="small" type="primary" @click="enterDialog">确定</el-button>
    </div>
  </div>
</template>

<script setup>
import { ref, watchEffect, watch } from 'vue';
const emit = defineEmits(['close', 'enter']);
const props = defineProps({
  form: {
    default: () => ({}),
    type: Object
  }
});

const formData = ref({
  name: '',
  type: 3,
  repositoryType: 'private', // 默认设置为私有
  url: '',
  username: '',
  token: '',
  desc: ''
});

const urlPlaceholder = ref('请输入地址');
const isUrlDisabled = ref(false);

// 监听 props.form 的变化并同步到 formData
watchEffect(() => {
  formData.value = { ...props.form };
});

// 根据配置类型动态设置默认 URL 和禁用状态
watch(() => formData.value.type, (newType) => {
  if (newType === 4) { // GitHub
    formData.value.url = 'https://github.com';
    isUrlDisabled.value = true;
  } else if (newType === 5) { // Gitee
    formData.value.url = 'https://gitee.com';
    isUrlDisabled.value = true;
  } else {
    formData.value.url = '';
    isUrlDisabled.value = false;
  }
});

// 表单验证规则
const rules = ref({
  name: [{ required: true, message: '请输入名称', trigger: 'blur' }],
  type: [{ required: true, message: '请选择配置类型', trigger: 'change' }],
  url: [{ required: true, message: '请输入URL信息', trigger: 'blur' }],
  username: [{ required: (form) => form.type === 3 && form.repositoryType === 'private', message: '请输入GitLab用户名', trigger: 'blur' }],
  token: [{ required: (form) => form.repositoryType === 'private', message: '请输入Token信息', trigger: 'blur' }]
});

const FormBlock = ref(null);

// 关闭弹窗
const closeDialog = () => {
  FormBlock.value.resetFields();
  emit('close');
};

// 提交数据
const enterDialog = () => {
  FormBlock.value.validate((valid) => {
    if (valid) {
      const payload = {
        id: formData.value.ID,
        name: formData.value.name,
        desc: formData.value.desc,
        config: {
          type: formData.value.repositoryType === 'private' ? 0 : 1,
          url: formData.value.url,
          username: formData.value.username,
          token: formData.value.token
        },
        type: formData.value.type
      };
      emit('enter', payload);
    }
  });
};

</script>

<style scoped>
.dialog-footer {
  margin-top: 20px;
}
</style>
