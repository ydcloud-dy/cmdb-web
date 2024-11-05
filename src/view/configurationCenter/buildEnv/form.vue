<template>
  <div style="overflow: hidden; width: 100%; max-width: 600px; margin-left: 20px;">
    <el-form ref="FormBlock" :model="formData" :rules="rules" label-width="120px">
      <!-- 名称 -->
      <el-form-item label="名称" prop="name">
        <el-input
            v-model="formData.name"
            placeholder="请输入名称"
            autocomplete="off"
            :disabled="type === 'update'"
        />
      </el-form-item>

      <!-- 镜像地址 -->
      <el-form-item label="镜像地址" prop="image">
        <el-input v-model="formData.image" placeholder="请输入镜像地址" autocomplete="off" />
      </el-form-item>

      <!-- 启动命令 -->
      <el-form-item label="启动命令" prop="command">
        <el-input v-model="formData.command" placeholder="请输入启动命令" autocomplete="off" />
      </el-form-item>

      <!-- 启动参数 -->
      <el-form-item label="启动参数" prop="args">
        <el-input v-model="formData.args" placeholder="请输入启动参数" autocomplete="off" />
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
import { ref, watchEffect } from 'vue';

const emit = defineEmits(['close', 'enter']);
const props = defineProps({
  form: {
    type: Object,
    default: () => ({})
  },
  type: { // 新增 prop 用于判断是创建还是更新模式
    type: String,
    default: 'create'
  }
});

const formData = ref({
  name: '',
  image: '',
  command: '',
  args: '',
  desc: ''
});

// 监听父组件传入的 `form` 数据并同步到 `formData`
watchEffect(() => {
  formData.value = { ...props.form };
});

// 表单验证规则
const rules = ref({
  name: [{ required: true, message: '请输入名称', trigger: 'blur' }],
  image: [{ required: true, message: '请输入镜像地址', trigger: 'blur' }]
});

const FormBlock = ref(null);

// 关闭弹窗
const closeDialog = () => {
  FormBlock.value.resetFields();
  emit('close');
};

// 校验并提交表单数据
const enterDialog = () => {
  FormBlock.value.validate(valid => {
    if (valid) {
      emit('enter', formData.value);
    }
  });
};
</script>

<style scoped>
.dialog-footer {
  margin-top: 20px;
}
</style>
