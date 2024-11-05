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
    close: () => true,
    enter: (value) => value && typeof value === 'object' && Object.keys(value).length > 0,
  }
}
</script>

<script setup>
import { ref, watchEffect } from 'vue';

const emit = defineEmits(['close', 'enter']);
const props = defineProps({
  form: {
    type: Object,
    default: () => ({}),
  },
});

// 表单数据初始化
const formData = ref({ ...props.form });

watchEffect(() => {
  formData.value = { ...props.form };
});

const rules = ref({
  name: [{ required: true, message: '请输入环境名称，以中文命名', trigger: 'blur' }],
  key: [{ required: true, message: '请输入环境标识，只能以字母命名', trigger: 'blur' }],
  desc: [{ required: false, message: '请输入备注信息', trigger: 'blur' }],
});

// 关闭
const closeDialog = () => {
  FormBlock.value.resetFields();
  emit('close');
};

// 表单验证并提交
const FormBlock = ref(null);

const enterDialog = () => {
  FormBlock.value.validate((valid) => {
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
