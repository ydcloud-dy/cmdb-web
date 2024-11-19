<template>
  <div style="margin: 20px">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item href="/">首页</el-breadcrumb-item>
      <el-breadcrumb-item>应用发布</el-breadcrumb-item>
      <el-breadcrumb-item>创建应用</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
  <div class="create-application-container">
    <!-- 页面主体 -->
    <div class="form-container">
      <!-- 页面标题 -->
      <h2 style="color: white">创建应用</h2>

      <!-- 步骤条 -->
      <el-steps :active="activeStep" align-center>
        <el-step title="填写应用信息"></el-step>
        <el-step title="关联环境"></el-step>
        <el-step title="完成"></el-step>
      </el-steps>

      <!-- 表单内容 -->
      <div v-if="activeStep === 1">
        <el-card shadow="always" class="form-card">
          <h3>基本信息</h3>
          <el-form
              ref="basicInfoFormRef"
              :model="basicInfoForm"
              :rules="basicInfoRules"
              label-width="120px"
          >
            <el-form-item label="代码仓库" prop="repo">
              <el-input v-model="basicInfoForm.repo" placeholder="请输入代码仓库地址"></el-input>
            </el-form-item>
            <el-form-item label="主干分支" prop="branch">
              <el-input v-model="basicInfoForm.branch" placeholder="请输入主干分支"></el-input>
            </el-form-item>
            <el-form-item label="应用名称" prop="name">
              <el-input v-model="basicInfoForm.name" placeholder="请输入应用名称"></el-input>
            </el-form-item>
            <el-form-item label="应用标识" prop="identifier">
              <el-input v-model="basicInfoForm.identifier" placeholder="请输入应用标识"></el-input>
            </el-form-item>
            <el-form-item label="应用描述">
              <el-input
                  v-model="basicInfoForm.description"
                  type="textarea"
                  :maxlength="100"
                  show-word-limit
                  placeholder="请输入应用描述"
              ></el-input>
            </el-form-item>
          </el-form>

          <h3>研发信息</h3>
          <el-form
              ref="developmentFormRef"
              :model="developmentForm"
              :rules="developmentRules"
              label-width="120px"
          >
            <el-form-item label="负责人" prop="owner">
              <el-select
                  v-model="developmentForm.owner"
                  placeholder="请选择负责人"
                  clearable
                  multiple
              >
                <el-option
                    v-for="user in tableData"
                    :key="user.ID"
                    :label="`${user.userName} / ${user.nickName}`"
                    :value="user.ID"
                />
              </el-select>
            </el-form-item>
            <el-form-item label="开发" prop="developers">
              <el-select
                  v-model="developmentForm.developers"
                  multiple
                  placeholder="请选择开发人员"
                  clearable
              >
                <el-option
                    v-for="user in tableData"
                    :key="user.ID"
                    :label="`${user.userName} / ${user.nickName}`"
                    :value="user.ID"
                />
              </el-select>
            </el-form-item>
            <el-form-item label="程序设计语言" prop="language">
              <el-select v-model="developmentForm.language" placeholder="请选择程序设计语言">
                <el-option label="Java" value="java"></el-option>
                <el-option label="Golang" value="golang"></el-option>
                <el-option label="Python" value="python"></el-option>
              </el-select>
            </el-form-item>
<!--            <el-form-item label="是否核心应用">-->
<!--              <el-radio-group v-model="developmentForm.isCore">-->
<!--                <el-radio :label="true">是</el-radio>-->
<!--                <el-radio :label="false">否</el-radio>-->
<!--              </el-radio-group>-->
<!--            </el-form-item>-->
          </el-form>
        </el-card>

        <!-- 操作按钮 -->
        <div class="button-group">
          <el-button type="default" @click="handleBack">返回</el-button>
          <el-button type="primary" @click="handleNext">下一步</el-button>
        </div>
      </div>

      <!-- 关联环境 -->
      <div v-if="activeStep === 2">
        <el-card shadow="always" class="form-card">
          <!-- 动态环境列表 -->
          <div class="environment-list">
            <div
                v-for="(env, index) in environmentsData"
                :key="index"
                class="environment-item"
                style="margin-top: 10px; display: flex; gap: 10px;"
            >
              <el-select v-model="env.environment" placeholder="请选择环境" style="flex: 1;" clearable>
                <el-option
                    v-for="environment in environments"
                    :key="environment.value"
                    :label="environment.label"
                    :value="environment.value"
                />
              </el-select>
              <el-select v-model="env.cluster" placeholder="请选择容器集群" style="flex: 1;" clearable>
                <el-option
                    v-for="cluster in clusters"
                    :key="cluster.value"
                    :label="cluster.label"
                    :value="cluster.value"
                />
              </el-select>
              <el-input v-model="env.namespace" placeholder="请输入命名空间" style="flex: 1;" />
              <el-button type="danger" icon="delete" @click="removeEnvironment(index)">删除</el-button>
            </div>
          </div>

          <el-button type="primary" icon="plus" @click="addEnvironment">添加环境</el-button>
          <div class="environment-info">
            <p>保证至少有一个可用的环境关联到应用。</p>
            <p>使用 Kubernetes 部署能力将应用部署到容器集群，需要提前注册待部署的容器集群。</p>
            <p>前置工作：</p>
            <ul>
              <li>注册 Kubernetes 集群，具体操作可参考 注册集群</li>
              <li>新建环境信息</li>
            </ul>
          </div>
        </el-card>

        <!-- 操作按钮 -->
        <div class="button-group">
          <el-button type="default" @click="handlePrevious">上一步</el-button>
          <el-button type="primary" @click="handleSubmit">提交</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { getUserList } from "@/api/user"; // 替换为实际的 API 路径
import { useRouter } from 'vue-router';
import {getEnvList} from "@/api/configurationCenter/environment";
import {getClustersList} from "@/api/kubernetes/cluster/k8sCluster";
import { createApplications} from "@/api/cicd/applications"
import {ElMessage} from "element-plus";
// 当前步骤
const activeStep = ref(1);

// 表单引用
const basicInfoFormRef = ref(null); // 修复: 正确声明 ref
const developmentFormRef = ref(null); // 修复: 正确声明 ref
const environments = ref([]);
const clusters = ref([]);

// 表单模型
const basicInfoForm = ref({
  repo: "",
  branch: "",
  name: "",
  identifier: "",
  description: "",
});

const developmentForm = ref({
  owner: [],
  developers: [],
  language: "",
  isCore: false,
});

// 表单校验规则
const basicInfoRules = {
  repo: [{ required: true, message: "代码仓库不能为空", trigger: "blur" }],
  branch: [{ required: true, message: "主干分支不能为空", trigger: "blur" }],
  name: [{ required: true, message: "应用名称不能为空", trigger: "blur" }],
  identifier: [{ required: true, message: "应用标识不能为空", trigger: "blur" }],
};

const developmentRules = {
  owner: [{ required: true, message: "负责人不能为空", trigger: "blur" }],
  developers: [{ required: true, message: "开发者不能为空", trigger: "change" }],
  language: [{ required: true, message: "请选择程序设计语言", trigger: "change" }],
};

// 用户数据
const tableData = ref([]);

// 获取用户数据
const fetchUserList = async () => {
  const response = await getUserList({ page: 1, pageSize: 100 });
  if (response.code === 0) {
    tableData.value = response.data.list;
  }
};
const router = useRouter();

// 返回上一页
const handleBack = () => {
  router.back();
};
onMounted(() => {
  fetchUserList();
  fetchEnvList();
  fetchClusterList();
});
const fetchEnvList = async() => {
  const response = await getEnvList({ page: 1, pageSize: 1000})
  if (response.code === 0) {
    environments.value = response.data.list.map(env => ({
      value: env.key, // 使用 key 作为实际值
      label: env.name, // 使用 name 作为显示值
    }));
  }
}
const fetchClusterList = async() => {
  const response = await getClustersList({ page: 1, pageSize: 1000 });
  if (response.code === 0) {
    clusters.value = response.data.list.map(cluster => ({
      value: cluster.id, // 使用 uuid 作为实际值
      label: cluster.name, // 使用 name 作为显示值
    }));
  }
}
// 下一步操作
const handleNext = () => {
  basicInfoFormRef.value.validate((basicValid) => {
    if (!basicValid) return;
    developmentFormRef.value.validate((devValid) => {
      if (!devValid) return;
      activeStep.value = 2;
    });
  });
};

// 上一步操作
const handlePrevious = () => {
  activeStep.value = 1;
};
// 删除环境逻辑
const removeEnvironment = (index) => {
  environmentsData.value.splice(index, 1);
};


// 提交表单
const handleSubmit = async () => {
  let valid = true;

  // 校验每一行的环境、集群和命名空间
  environmentsData.value.forEach((env, index) => {
    if (!env.environment || !env.cluster || !env.namespace) {
      valid = false;
      ElMessage.error(`第 ${index + 1} 行存在未填写完整的环境、集群或命名空间`);
    }
  });

  if (!valid) return;

  // 整理环境信息
  const envs = environmentsData.value.map((env) => {
    const selectedEnv = environments.value.find((item) => item.value === env.environment);
    const selectedCluster = clusters.value.find((item) => item.value === env.cluster);
    return {
      clusterName: selectedCluster ? selectedCluster.label : "",
      clusterId: selectedCluster ? selectedCluster.value : "", // 这里的 clusterId 取的是 ID 字段
      envCode: env.environment,
      envName: selectedEnv ? selectedEnv.label : "",
      namespace: env.namespace,
    };
  });

  // 整理应用信息
  const app = {
    gitRepo: basicInfoForm.value.repo,
    branch: basicInfoForm.value.branch,
    appName: basicInfoForm.value.name,
    appCode: basicInfoForm.value.identifier,
    appDesc: basicInfoForm.value.description,
    develop: developmentForm.value.developers.map((dev) => {
      const user = tableData.value.find((user) => user.ID === dev);
      return {
        label: user ? user.nickName : dev,
        value: user ? user.userName : dev,
        key: user ? user.nickName : dev,
        option: user ? { avatar: "", nickname: user.nickName, username: user.userName } : {},
        originLabel: user ? user.nickName : dev,
      };
    }),
    owner: developmentForm.value.owner.map((owner) => {
      const user = tableData.value.find((user) => user.ID === owner);
      return {
        label: user ? user.nickName : owner,
        value: user ? user.userName : owner,
        key: user ? user.nickName : owner,
        option: user ? { avatar: "", nickname: user.nickName, username: user.userName } : {},
        originLabel: user ? user.nickName : owner,
      };
    }),
    language: developmentForm.value.language,
  };

  // 最终数据
  const finalData = {
    envs,
    app,
  };

  console.log("提交的数据：", finalData);
  try {
    const response = await createApplications(finalData); // 调用 API
    if (response.code === 0) {
      ElMessage.success("应用创建成功！");
      router.back();
    } else {
      ElMessage.error(response.msg || "应用创建失败！");
    }
  } catch (error) {
    console.error("创建应用失败：", error);
    ElMessage.error("应用创建请求失败，请稍后重试！");
  }
  // 提交 API 调用
  // apiSubmit(finalData).then(response => console.log(response));
};

const environmentsData = ref([]);

// 添加环境逻辑
const addEnvironment = () => {
  console.log("添加环境逻辑");
  environmentsData.value.push({
    environment: "",
    cluster: "",
    namespace: "",
  });
};
</script>

<style scoped>
.create-application-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
}

.form-container {
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
}

.form-card {
  margin-top: 20px;
  padding: 20px;
}

.button-group {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.environment-info {
  margin-top: 20px;
}
</style>
