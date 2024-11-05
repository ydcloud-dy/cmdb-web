<template>
  <div style="overflow: hidden; width: 100%; max-width: 600px; margin-left: 20px;">
    <el-form ref="FormBlock" :model="props.form" :rules="rules" label-width="120px">
      <!-- 代码源 -->
      <el-form-item label="代码源" prop="repo_id">
        <el-select v-model="formData.repo_id" placeholder="请选择代码源" @change="fetchRepositoryPaths">
          <el-option
              v-for="source in codeSources"
              :key="source.ID"
              :label="source.name"
              :value="source.ID"
          />
        </el-select>
      </el-form-item>

      <!-- 仓库路径 (选择代码源后显示) -->
      <el-form-item v-if="formData.repo_id" label="仓库路径" prop="full_name">
        <el-select v-model="formData.full_name" placeholder="请选择/输入仓库路径" @change="autoFillAppName">
          <el-option
              v-for="path in repositoryPaths"
              :key="path.full_name"
          :label="path.full_name"
          :value="path.full_name"
          />
        </el-select>
      </el-form-item>


      <!-- 应用名 -->
      <el-form-item label="应用名" prop="name">
        <el-input v-model="formData.name" placeholder="请输入应用名" autocomplete="off" />
      </el-form-item>

      <!-- 语言类型 -->
      <el-form-item label="语言类型" prop="language">
        <el-select v-model="formData.language" placeholder="请选择语言类型">
          <el-option label="Java" value="Java" />
          <el-option label="Python" value="Python" />
          <el-option label="Go" value="Go" />
          <el-option label="Node.js" value="Node" />
          <!-- 添加其他语言选项 -->
        </el-select>
      </el-form-item>

      <!-- 构建目录 -->
      <el-form-item label="构建目录" prop="build_path">
        <el-input v-model="formData.build_path" placeholder="/" autocomplete="off" />
      </el-form-item>

      <!-- Dockerfile -->
      <el-form-item label="Dockerfile" prop="dockerfile">
        <el-input v-model="formData.dockerfile" placeholder="Dockerfile" autocomplete="off" />
      </el-form-item>

      <!-- 编译环境 -->
      <el-form-item label="编译环境" prop="compile_env_id">
        <el-select v-model="formData.compile_env_id" placeholder="请选择编译环境">
          <el-option
              v-for="env in compileEnvs"
              :key="env.ID"
              :label="env.name"
              :value="env.ID"
          />
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
import { ref, onMounted } from 'vue';
import { getSourceCodeList } from "@/api/configurationCenter/codeSource";
import { GetGitProjectsByRepoId } from "@/api/cicd/applications";
import { getBuildEnvList } from "@/api/configurationCenter/buildEnv";
const props = defineProps({
  form: {
    type: Object,
    default: () => ({})
  }
});
const emit = defineEmits(['close', 'enter']);
// const formData = ref({
//   repo_id: '',
//   full_name: '',
//   name: '',
//   language: 'Java', // 默认语言类型
//   build_path: '/',
//   dockerfile: 'Dockerfile',
//   compile_env_id: ''
// });
const formData = ref(props.form);


const codeSources = ref([]); // 存储代码源选项
const repositoryPaths = ref([]); // 存储仓库路径选项
const compileEnvs = ref([]); // 存储编译环境选项

onMounted(async () => {
  if (!props.form.build_path) {
    props.form.build_path = '/';  // 默认构建目录
  }
  if (!props.form.dockerfile) {
    props.form.dockerfile = 'Dockerfile';  // 默认 Dockerfile 名称
  }
  const response = await getSourceCodeList({ page: 1, pageSize: 1000 });
  if (response.code === 0) {
    codeSources.value = response.data.list;
  } else {
    console.error("获取代码源失败", response.msg);
  }

  // 获取编译环境选项
  const compileEnvResponse = await getBuildEnvList({ page: 1, pageSize: 1000 });
  if (compileEnvResponse.code === 0) {
    compileEnvs.value = compileEnvResponse.data.list;
  } else {
    console.error("获取编译环境失败", compileEnvResponse.msg);
  }
});

// 根据所选代码源获取仓库路径
const fetchRepositoryPaths = async () => {
  if (formData.value.repo_id) {
    try {
      const response = await GetGitProjectsByRepoId({ id: formData.value.repo_id }); // 获取仓库路径
      if (response.code === 0) {
        repositoryPaths.value = response.data.map(repo => ({
          full_name: repo.full_name,
          path: repo.path // 确保包含 path 字段
        }));
        console.log("Repository Paths:", repositoryPaths.value); // 检查 repositoryPaths 是否正确

      } else {
        console.error("获取仓库路径失败", response.msg);
      }
      formData.value.full_name = ''; // 重置仓库路径
      formData.value.name = ''; // 重置应用名
    } catch (error) {
      console.error("获取仓库路径失败", error);
    }
  }
};

// 自动填充应用名
const autoFillAppName = () => {
  const selectedPath = formData.value.full_name;
  if (selectedPath) {
    formData.value.name = selectedPath.split('/').pop(); // 设置路径的最后一部分为应用名
  }
};

// 表单验证规则
const rules = ref({
  repo_id: [{ required: true, message: '请选择代码源', trigger: 'change' }],
  full_name: [{ required: true, message: '请选择/输入仓库路径', trigger: 'change' }],
  name: [{ required: true, message: '请输入应用名', trigger: 'blur' }],
  language: [{ required: true, message: '请选择语言类型', trigger: 'change' }],
  build_path: [{ required: false }],
  dockerfile: [{ required: false }],
  compile_env_id: [{ required: false }]
});

// 关闭弹窗
const closeDialog = () => {
  emit('close');
};

// 校验并提交表单数据
const enterDialog = () => {
  FormBlock.value.validate(valid => {
    if (valid) {
      // 从 repositoryPaths 中找到与 full_name 匹配的对象
      const selectedRepository = repositoryPaths.value.find(
          repo => repo.full_name === formData.value.full_name
      );

      // 从 compileEnvs 中找到与 compile_env_id 匹配的对象
      const selectedCompileEnv = compileEnvs.value.find(
          env => env.ID === formData.value.compile_env_id
      );
      const payload = {
        ID: formData.value.ID,
        name: formData.value.name,
        full_name: formData.value.full_name,
        language: formData.value.language,
        build_path: formData.value.build_path,
        dockerfile: formData.value.dockerfile,
        repo_id: formData.value.repo_id,
        path: selectedRepository ? selectedRepository.path : '', // 确保获取到 path
        compile_env_id: selectedCompileEnv ? selectedCompileEnv.ID : null // 确保获取到 ID
      };
      console.log("Selected Repository:", selectedRepository); // 检查匹配的仓库对象
      console.log("Selected Compile Env:", selectedCompileEnv); // 检查匹配的编译环境
      console.log("Payload:", payload); // 查看 payload 内容
      emit('enter', payload);
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
