<template>
  <div style="overflow: hidden; width: 100%; max-width: 600px; margin-left: 20px;">
    <el-form ref="FormBlock" :model="formData" :rules="rules" label-width="120px">
      <!-- 代码源 -->
      <el-form-item label="代码源" prop="codeSource">
        <el-select v-model="formData.codeSource" placeholder="请选择代码源" @change="fetchRepositoryPaths">
          <el-option
              v-for="source in codeSources"
              :key="source.id"
              :label="source.name"
              :value="source.id"
          />
        </el-select>
      </el-form-item>

      <!-- 仓库路径 (选择代码源后显示) -->
      <el-form-item v-if="formData.codeSource" label="仓库路径" prop="repositoryPath">
        <el-select v-model="formData.repositoryPath" placeholder="请选择/输入仓库路径" @change="autoFillAppName">
          <el-option
              v-for="path in repositoryPaths"
              :key="path"
              :label="path"
              :value="path"
          />
        </el-select>
      </el-form-item>

      <!-- 应用名 -->
      <el-form-item label="应用名" prop="appName">
        <el-input v-model="formData.appName" placeholder="请输入应用名" autocomplete="off" />
      </el-form-item>

      <!-- 语言类型 -->
      <el-form-item label="语言类型" prop="languageType">
        <el-select v-model="formData.languageType" placeholder="请选择语言类型">
          <el-option label="Java" value="Java" />
          <el-option label="Python" value="Python" />
          <el-option label="Node.js" value="Node.js" />
          <!-- 添加其他语言选项 -->
        </el-select>
      </el-form-item>

      <!-- 构建目录 -->
      <el-form-item label="构建目录" prop="buildDir">
        <el-input v-model="formData.buildDir" placeholder="/" autocomplete="off" />
      </el-form-item>

      <!-- Dockerfile -->
      <el-form-item label="Dockerfile" prop="dockerfile">
        <el-input v-model="formData.dockerfile" placeholder="Dockerfile" autocomplete="off" />
      </el-form-item>

      <!-- 编译环境 -->
      <el-form-item label="编译环境" prop="compileEnv">
        <el-select v-model="formData.compileEnv" placeholder="请选择编译环境">
          <el-option label="开发环境" value="dev" />
          <el-option label="生产环境" value="prod" />
          <!-- 添加其他环境选项 -->
        </el-select>
      </el-form-item>
    </el-form>
    <div class="dialog-footer" align="right">
      <el-button size="small" @click="closeDialog">取消</el-button>
      <el-button size="small" type="primary" @click="enterDialog">确定</el-button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
// import { fetchCodeSources, fetchPathsForSource } from '@/api'; // 假设这是用于获取数据的接口
import { getSourceCodeList} from "@/api/configurationCenter/codeSource";

const emit = defineEmits(['close', 'enter']);
const formData = ref({
  codeSource: '',
  repositoryPath: '',
  appName: '',
  languageType: 'Java', // 默认语言类型
  buildDir: '/',
  dockerfile: 'Dockerfile',
  compileEnv: ''
});
const codeSources = ref([]); // 存储代码源选项
const repositoryPaths = ref([]); // 存储仓库路径选项

// 加载时获取代码源
getSourceCodeList().then(data => {
  codeSources.value = data;
});

// 根据所选代码源获取仓库路径
const fetchRepositoryPaths = async () => {
  if (formData.value.codeSource) {
    // repositoryPaths.value = await fetchPathsForSource(formData.value.codeSource);
    formData.value.repositoryPath = ''; // 重置仓库路径
    formData.value.appName = ''; // 重置应用名
  }
};

// 自动填充应用名
const autoFillAppName = () => {
  const selectedPath = formData.value.repositoryPath;
  if (selectedPath) {
    formData.value.appName = selectedPath.split('/').pop(); // 设置路径的最后一部分为应用名
  }
};

// 表单验证规则
const rules = ref({
  codeSource: [{ required: true, message: '请选择代码源', trigger: 'change' }],
  repositoryPath: [{ required: true, message: '请选择/输入仓库路径', trigger: 'change' }],
  appName: [{ required: true, message: '请输入应用名', trigger: 'blur' }],
  languageType: [{ required: true, message: '请选择语言类型', trigger: 'change' }],
  buildDir: [{ required: false }],
  dockerfile: [{ required: false }],
  compileEnv: [{ required: false }]
});

// 关闭弹窗
const closeDialog = () => {
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

const FormBlock = ref(null);

</script>

<style scoped>
.dialog-footer {
  margin-top: 20px;
}
</style>
