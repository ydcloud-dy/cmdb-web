<template>
  <div class="app-detail">
    <!-- 面包屑导航 -->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item @click="goToApplications" style="cursor: pointer; color: #409EFF;">我的应用</el-breadcrumb-item>
      <el-breadcrumb-item>应用详情</el-breadcrumb-item>
    </el-breadcrumb>

    <!-- 应用标题 -->
    <h2 class="app-title">{{ appDetails.name }}</h2>

    <!-- 应用概要 -->
    <h3 class="section-title">应用概要</h3>
    <el-descriptions :column="4" border>
      <el-descriptions-item label="代码仓库">
        <el-link :href="appDetails.gitRepo" target="_blank">{{ appDetails.gitRepo }}</el-link>
      </el-descriptions-item>
      <el-descriptions-item label="主干分支">{{ appDetails.branch }}</el-descriptions-item>
      <el-descriptions-item label="应用 Owner">
        <el-tag v-for="owner in appDetails.owners" :key="owner.ID" size="small" type="info">{{ owner.label }}</el-tag>
      </el-descriptions-item>
      <el-descriptions-item label="应用开发">
        <el-tag v-for="dev in appDetails.developers" :key="dev.ID" size="small" type="success">{{ dev.label }}</el-tag>
      </el-descriptions-item>
      <el-descriptions-item label="应用名称">{{ appDetails.appName }}</el-descriptions-item>
      <el-descriptions-item label="应用标识">{{ appDetails.appCode }}</el-descriptions-item>
      <el-descriptions-item label="应用描述">{{ appDetails.appDesc || '-' }}</el-descriptions-item>
      <el-descriptions-item label="程序开发语言">{{ appDetails.language }}</el-descriptions-item>
      <el-descriptions-item label="应用类型">{{ appDetails.appType || '-' }}</el-descriptions-item>
      <el-descriptions-item label="部署类型">{{ appDetails.deploymentType }}</el-descriptions-item>
      <el-descriptions-item label="创建时间">{{ formatDate(appDetails.createdAt) }}</el-descriptions-item>
      <el-descriptions-item label="应用监控">{{ appDetails.monitorEnabled ? '已接入' : '未接入' }}</el-descriptions-item>
    </el-descriptions>

    <!-- 部署环境 -->
    <div class="env-header">
      <el-select
          v-model="currentEnv"
          @change="handleEnvChange"
          placeholder="请选择环境"
          size="small"
          style="width: 200px;"
      >
        <el-option
            v-for="env in availableEnvs"
            :key="env.envCode"
            :label="env.envName"
            :value="env.envCode"
        />
      </el-select>

      <div class="env-buttons">
        <el-button type="primary" size="small" @click="fetchEnvData">刷新</el-button>
        <el-button type="danger" size="small" plain @click="configureScaling">伸缩策略配置</el-button>
      </div>
    </div>

    <h3 class="section-title">部署信息</h3>
    <el-table v-if="deployData.length > 0" :data="deployData" style="width: 100%;" border>
      <el-table-column prop="instanceID" label="实例 ID" />
      <el-table-column prop="hostIP" label="宿主机 IP" />
      <el-table-column prop="containerIP" label="容器 IP" />
      <el-table-column prop="rebootCount" label="重启次数" />
      <el-table-column prop="createdAt" label="创建时间" :formatter="formatDate" />
      <el-table-column prop="version" label="版本" />
      <el-table-column prop="status" label="状态" />
      <el-table-column prop="resources" label="CPU 用量/内存用量" />
      <el-table-column label="操作">
        <template #default="scope">
          <el-button type="text" size="small" @click="handleDeployAction(scope.row)">操作</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-empty v-else description="暂无环境数据" />

    <!-- 流水线 -->
    <div class="pipeline-header">
      <h3 class="section-title">流水线</h3>
      <el-button
          size="small"
          type="primary"
          class="create-pipeline-button"
          icon="el-icon-s-operation"
          @click="createPipeline"
      >
        创建流水线
      </el-button>
    </div>
    <el-table v-if="pipelineData.length > 0" :data="pipelineData" style="width: 100%;" border>
      <el-table-column prop="status" label="运行状态" />
      <el-table-column prop="user" label="运行人" />
      <el-table-column prop="branch" label="分支" />
      <el-table-column prop="lastRunTime" label="最近运行时间" />
      <el-table-column prop="duration" label="耗时" />
      <el-table-column label="操作">
        <template #default="scope">
          <el-button type="text" size="small" @click="handlePipelineAction(scope.row)">操作</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-empty v-else description="暂无流水线数据" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import dayjs from 'dayjs'
import { useRouter, useRoute } from 'vue-router'
import { describeApplications } from '@/api/cicd/applications'

const router = useRouter()
const route = useRoute()
const id = route.query.id

const appDetails = ref({})
const envData = ref([])
const pipelineData = ref([])

const availableEnvs = ref([]) // 可选环境列表
const currentEnv = ref('') // 当前选中的环境

const goToApplications = () => {
  router.push({ name: 'applications' })
}

const formatDate = (date) => {
  return date ? dayjs(date).format('YYYY-MM-DD HH:mm:ss') : '-'
}
const deployData = ref([]); // 模拟数据存储
// 模拟获取部署信息的接口
const fetchDeployData = async () => {
  // 模拟延迟和返回数据
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = [
        {
          instanceID: "inst-001",
          hostIP: "192.168.1.100",
          containerIP: "10.0.0.1",
          rebootCount: 2,
          createdAt: "2024-11-19T12:34:56",
          version: "v1.0.0",
          status: "Running",
          resources: "2 CPUs / 4 GB RAM",
        },
        {
          instanceID: "inst-002",
          hostIP: "192.168.1.101",
          containerIP: "10.0.0.2",
          rebootCount: 1,
          createdAt: "2024-11-18T11:30:00",
          version: "v1.1.0",
          status: "Stopped",
          resources: "4 CPUs / 8 GB RAM",
        },
      ]; // 模拟返回的数据
      resolve(data);
    }, 1000); // 模拟 1 秒延迟
  });
};
const fetchEnvData = async (envCode) => {
  console.log(`刷新当前环境数据: ${currentEnv.value}`)
  selectedEnvCode.value = envCode;

  // 根据当前选中的环境拉取数据
}
// 操作部署信息的事件
const handleDeployAction = (row) => {
  console.log("操作部署实例:", row);
};
// 页面加载时获取部署信息
onMounted(async () => {
  try {
    const data = await fetchDeployData();
    deployData.value = data; // 将返回数据赋值
  } catch (error) {
    console.error("获取部署信息失败:", error);
  }
  try {
    const deploydata = await fetchPipelineData();
    pipelineData.value = deploydata; // 将返回数据赋值
  } catch (error) {
    console.error("获取流水线数据失败:", error);
  }
});
const configureScaling = () => {
  console.log(`配置当前环境的伸缩策略: ${currentEnv.value}`)
}

const fetchAppDetails = async () => {
  const res = await describeApplications(id)
  if (res.code === 0) {
    const data = res.data
    appDetails.value = {
      name: data.name,
      gitRepo: data.gitRepo,
      branch: data.branch,
      appName: data.appName,
      appCode: data.appCode,
      appDesc: data.appDesc,
      language: data.language,
      appType: data.appType || '无状态应用',
      deploymentType: data.deploymentType || '容器部署',
      createdAt: data.CreatedAt,
      monitorEnabled: data.monitorEnabled,
      owners: data.owner || [],
      developers: data.develop || [],
    }
    availableEnvs.value = data.envs.map(env => ({
      envCode: env.envCode,
      envName: env.envName,
    }))
    currentEnv.value = availableEnvs.value[0]?.envCode || ''
    envData.value = data.envs || []
  } else {
    console.error('获取应用详情失败:', res.msg)
  }
}
// 模拟获取流水线数据的接口
const fetchPipelineData = async () => {
  // 模拟延迟和返回数据
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = [
        {
          status: "成功",
          user: "admin",
          branch: "main",
          lastRunTime: "2024-11-19T10:45:00",
          duration: "10m 23s",
        },
        {
          status: "失败",
          user: "developer",
          branch: "feature/update",
          lastRunTime: "2024-11-18T15:20:00",
          duration: "5m 12s",
        },
        {
          status: "运行中",
          user: "tester",
          branch: "release/v1.0.0",
          lastRunTime: "2024-11-19T12:30:00",
          duration: "2m 45s",
        },
      ]; // 模拟返回的数据
      resolve(data);
    }, 1000); // 模拟 1 秒延迟
  });
};
const fetchPipelines = async () => {
  const res = await getPipelineList(id)
  if (res.code === 0) {
    pipelineData.value = res.data.list || []
  } else {
    console.error('获取流水线数据失败:', res.msg)
  }
}
// 操作流水线的事件


const selectedEnvCode = ref("");
const handleEnvChange = (envCode) => {
  console.log(envCode)
  selectedEnvCode.value = envCode;
};
const createPipeline = () => {
  console.log('创建流水线')
  console.log(appDetails.value)
  // 确保有值传递
  // const appCode = ; // 从应用详情中获取应用标识
  // const envCode = ; // 假设有一个选中的环境标识
  router.push({
    name: "createPipeline", // 跳转的路由名称
    query: {
      appId: id, // 当前应用 ID
      envCode:selectedEnvCode.value
    },
  });
}

const handlePipelineAction = (pipeline) => {
  console.log(`操作流水线: ${pipeline.branch}`)
}

onMounted(() => {
  fetchAppDetails()
  fetchPipelines()
})
</script>

<style scoped>
.app-detail {
  padding: 20px;
  color: #333;
}

.section-title {
  font-size: 18px;
  color: #409EFF;
  margin-top: 20px;
}
.pipeline-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}
.env-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.env-buttons {
  display: flex;
  gap: 10px;
}

.app-title {
  font-size: 24px;
  margin-bottom: 20px;
}
</style>
