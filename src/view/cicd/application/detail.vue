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
    <el-table v-if="deployData.length > 0" :data="podList" class="deploy-table"  style="width: 100%;" border>
      <el-table-column prop="instanceID" label="实例 ID" />
      <el-table-column prop="hostIP" label="宿主机 IP" />
      <el-table-column prop="containerIP" label="容器 IP" />
      <el-table-column prop="rebootCount" label="重启次数" />
      <el-table-column prop="createdAt" label="创建时间"  />
      <el-table-column prop="version" label="版本" />
      <el-table-column prop="status" label="状态" />
<!--      <el-table-column prop="resources" label="CPU 用量/内存用量" />-->
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
    <el-table v-if="pipelineData.length > 0" :data="pipelineData" class="pipeline-table" style="width: 100%;" border>
      <el-table-column prop="status" label="运行状态" >
        <template #default="scope">
          <el-tag
              :type="handlePipelinesStatus(scope.row) === 'Succeeded' ? 'success' : 'danger'"
          >{{ handlePipelinesStatus(scope.row) }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="user" label="运行人" />
      <el-table-column prop="branch" label="分支" />
      <el-table-column prop="last_run_time" label="最近运行时间" />

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
import { describeApplications,getAppPodList } from '@/api/cicd/applications'
import {getPipelinesList, getPipelinesStatus} from "@/api/cicd/pipelines";

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
const handlePipelinesStatus = (row) => {
  return row.status;
};
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
    }, 0.001); // 模拟 1 秒延迟
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

const configureScaling = () => {
  console.log(`配置当前环境的伸缩策略: ${currentEnv.value}`)
}

const fetchAppDetails = async () => {
  try {
    const res = await describeApplications(id);
    if (res.code === 0) {
      const data = res.data;

      // 确保 `envs` 和其他字段初始化
      appDetails.value = {
        name: data.name || '-',
        gitRepo: data.gitRepo || '-',
        branch: data.branch || 'main',
        appName: data.appName || '-',
        appCode: data.appCode || '-',
        appDesc: data.appDesc || '-',
        language: data.language || '未知',
        appType: data.appType || '无状态应用',
        deploymentType: data.deploymentType || '容器部署',
        createdAt: data.CreatedAt || '-',
        monitorEnabled: data.monitorEnabled || false,
        owners: data.owner || [],
        developers: data.develop || [],
        envs: data.envs || [], // 确保 envs 不为空

      };
      // 初始化环境列表
      availableEnvs.value = (data.envs || []).map(env => ({
        envCode: env.envCode,
        envName: env.envName,
      }));

      // 设置默认环境
      if (availableEnvs.value.length > 0) {
        currentEnv.value = availableEnvs.value[0]?.envCode || '';
        envData.value = data.envs || [];
      } else {
        console.warn('未找到可用环境数据');
        currentEnv.value = '';
        envData.value = [];
      }
    } else {
      console.error('获取应用详情失败:', res.msg);
      appDetails.value = {};
      availableEnvs.value = [];
      currentEnv.value = '';
      envData.value = [];
    }
  } catch (error) {
    console.error('加载应用详情失败:', error);
    appDetails.value = {};
    availableEnvs.value = [];
    currentEnv.value = '';
    envData.value = [];
  }
};

// 模拟获取流水线数据的接口
const fetchPipelines = async () => {
  try {
    const res = await getPipelinesStatus({appCode: appDetails.value.appCode,envCode:selectedEnvCode.value,cluster_id:cluster_id.value,namespace:selectNamespace.value});  // 调用接口获取流水线数据
    if (res.code === 0 && res.data && Object.keys(res.data).length !== 0) {
      // 从返回的数据中提取流水线列表
      // 去掉时间中的 +0800 CST 部分
      const formattedData = {
        ...res.data,
        last_run_time: res.data.last_run_time.replace(/([+\-]\d{4} )?[A-Za-z]{3}$/, '') // 去掉时区部分
      };

      pipelineData.value = [formattedData];

    } else {
      console.error('获取流水线数据失败:', res.msg);
      pipelineData.value = []
    }
  } catch (error) {
    console.error('获取流水线数据时发生错误:', error);
  }
};

const cluster_id = ref()
// 操作流水线的事件
const fetchPodList = async (clusterId) => {
  console.log('Fetching Pod list for clusterId:', clusterId);

  if (!clusterId) {
    console.error('clusterId 未提供');
    return;
  }
  cluster_id.value = clusterId
  const requestData = {
    cluster_id: clusterId, // 动态传入 clusterId
    app_code: `app=${appDetails.value.appCode}-${selectedEnvCode.value}`, // 从应用详情获取 appCode
  };
  const formatDateToLocal = (utcString) => {
    if (!utcString) return 'Invalid Date'; // 检查是否为空
    const date = new Date(utcString); // 转换为 Date 对象
    if (isNaN(date.getTime())) return 'Invalid Date'; // 检查日期是否有效
    // 转换为本地时间字符串
    return date.toLocaleString('zh-CN', { timeZone: 'Asia/Shanghai' });
  };
  try {
    const res = await getAppPodList(requestData);
    if (res.code === 0 && res.data && res.data.items) {
      podList.value = res.data.items.map(item => ({
        instanceID: item.metadata.name,
        hostIP: item.status.hostIP,
        containerIP: item.status.podIP,
        rebootCount: item.status.containerStatuses[0]?.restartCount || 0,
        createdAt: item.metadata.creationTimestamp
            ? formatDateToLocal(item.metadata.creationTimestamp)
            : 'Invalid Date', // 转换为本地时间
        version: item.status.containerStatuses[0]?.image.split(':')[1] || 'Unknown',
        status: item.status.phase,
        resources: `${item.spec.containers[0]?.resources.requests?.cpu ?? '-'} CPU / ${item.spec.containers[0]?.resources.requests?.memory ?? '-'} RAM`,
      }));
      console.log('Pod list fetched:', podList.value);
    } else {
      console.error('Failed to fetch Pod list:', res.msg);
    }
  } catch (error) {
    console.error('Error fetching Pod list:', error);
  }
};


const selectedEnvCode = ref("");
const handleEnvChange = async (envCode) => {
  console.log('Environment changed to:', envCode);
  selectedEnvCode.value = envCode;
  // selectNamespace.value =
  // 检查 appDetails.value.envs 是否存在并包含数据
  if (!appDetails.value.envs || appDetails.value.envs.length === 0) {
    console.error('appDetails.envs 数据为空或未初始化');
    return;
  }

  // 根据当前环境查找对应的 clusterId
  const currentEnv = appDetails.value.envs.find((env) => env.envCode === envCode);
  if (!currentEnv) {
    console.error('未找到对应环境的配置');
    return;
  }
 selectNamespace.value = currentEnv.namespace
  console.log(appDetails.value.envs)
  console.log(currentEnv)

  console.log("当前环境的集群id为：",currentEnv.clusterId)
  // 使用找到的 clusterId 调用 fetchPodList
  await fetchPodList(currentEnv.clusterId);
  await fetchPipelines()
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
      envCode:selectedEnvCode.value,
      projectType: appDetails.value.language
    },
  });
}
const podList = ref([]); // 存储获取到的 Pod 列表

// 获取 Pod 列表
const handlePipelineAction = (pipeline) => {
  console.log(`操作流水线: ${pipeline.branch}`)
}
const selectNamespace = ref("")
onMounted(async () => {
  try {
    // 加载应用详情
    await fetchAppDetails();
    console.log(appDetails.value)
    // 确保 envs 数据已正确加载
    if (appDetails.value.envs?.length > 0) {
      const defaultEnvCode = availableEnvs.value[0]?.envCode; // 默认第一个环境
      selectedEnvCode.value = defaultEnvCode;

      const currentEnv = appDetails.value.envs.find(env => env.envCode === defaultEnvCode);
      console.log(currentEnv)
      selectNamespace.value = currentEnv.namespace
      console.log("================================")
      if (currentEnv?.clusterId) {
        // 使用 clusterId 加载 Pod 列表
        await fetchPodList(currentEnv.clusterId);
      } else {
        console.warn('未找到默认环境的 clusterId');
      }
    } else {
      console.warn('没有可用的环境数据，跳过 Pod 列表加载');
    }

    // 加载流水线数据
    // await fetchPipelines();

    // 加载部署数据
    const deployDataRes = await fetchDeployData();
    deployData.value = deployDataRes;

    await fetchPipelines();
    // pipelineData.value = pipelineDataRes;
  } catch (error) {
    console.error('初始化失败:', error);
  }
});
</script>

<style scoped>
.app-detail {
  padding: 20px;
  color: #333;
}
/* 流水线表格样式 */
.pipeline-table .el-table__header {
  background-color: #f0f5f9; /* 设置背景色 */
  color: #333; /* 设置文字颜色 */
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
