<template>
  <el-scrollbar style="height: 100vh; margin: 20px;">
    <!-- 面包屑导航 -->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item @click="goToApplications" style="cursor: pointer; color: #409EFF;">我的应用</el-breadcrumb-item>
      <el-breadcrumb-item>应用详情</el-breadcrumb-item>
    </el-breadcrumb>

    <!-- 应用信息展示 -->
    <h2 style="color: white;">{{ appDetails.name }}</h2>
    <el-descriptions :column="2" border>
      <el-descriptions-item label="开发语言">{{ appDetails.language }}</el-descriptions-item>
      <el-descriptions-item label="编译环境">{{ appDetails.compile_env }}</el-descriptions-item>
      <el-descriptions-item label="构建目录">{{ appDetails.build_path }}</el-descriptions-item>
      <el-descriptions-item label="Dockerfile">{{ appDetails.dockerfile }}</el-descriptions-item>
      <el-descriptions-item label="创建人">{{ appDetails.creator }}</el-descriptions-item>
      <el-descriptions-item label="创建时间">{{ formatDate(appDetails.created_at) }}</el-descriptions-item>
    </el-descriptions>

    <!-- 分支信息展示 -->
    <h3 style="margin-top: 20px;">分支信息</h3>
    <el-button size="small" type="primary" icon="el-icon-refresh" @click="syncBranches">同步远程分支</el-button>

    <!-- 表格显示 -->
    <el-table v-if="branchData.length > 0" :data="branchData" style="width: 100%; margin-top: 10px;" border>
      <el-table-column prop="branch_name" label="分支名称" />
      <el-table-column prop="path" label="路径" width="400">
        <template #default="scope">
          <el-link :href="scope.row.path" target="_blank">{{ scope.row.path }}</el-link>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="100">
        <template #default="scope">
          <el-button type="text" size="small" @click="handleBranchAction(scope.row)">操作</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-empty v-else description="暂无分支数据" />

    <!-- 流水线信息展示 -->
    <h3 style="margin-top: 20px;">流水线</h3>
    <el-button size="small" type="primary" icon="el-icon-plus" @click="createPipeline">创建流水线</el-button>

    <!-- 流水线表格 -->
    <el-table v-if="pipelineData.length > 0" :data="pipelineData" style="width: 100%; margin-top: 10px;" border>
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
  </el-scrollbar>
</template>


<script setup>
import { ref, onMounted } from 'vue'
import dayjs from 'dayjs'
import { useRouter, useRoute } from 'vue-router'
import { describeApplications, syncApplicationBranchs, getAppBranchList } from '@/api/cicd/applications'
import { describeBuildEnv } from "@/api/configurationCenter/buildEnv"

const router = useRouter()
const route = useRoute()
const id = route.query.id

const appDetails = ref({})
const branchData = ref([])
const pipelineData = ref([]) // 流水线数据

const goToApplications = () => {
  router.push({ name: 'applications' })
}

const formatDate = (date) => {
  return date ? dayjs(date).format('YYYY-MM-DD HH:mm:ss') : ''
}

// 获取应用详情
const fetchAppDetails = async () => {
  const res = await describeApplications(id)
  if (res.code === 0) {
    const data = await describeBuildEnv(res.data.compile_env_id);
    console.log(res.data)
    appDetails.value = {
      name: res.data.name,
      path: res.data.path,
      language: res.data.language,
      compile_env: data.data.name,
      build_path: res.data.build_path,
      dockerfile: res.data.dockerfile,
      creator: res.data.CreatedName,
      created_at: res.data.CreatedAt,
    }
  } else {
    console.error("获取应用详情失败:", res.msg)
  }
}

// 获取分支列表
const fetchBranches = async () => {
  const res = await getAppBranchList(id, 1, 10000)
  if (res.code === 0) {
    branchData.value = res.data.list || []
  } else {
    console.error("获取分支列表失败:", res.msg)
  }
}

// 获取流水线数据
const fetchPipelines = async () => {
  // 这里应该是从接口获取流水线数据
  // 假设接口返回的格式为：[{ status: '', user: '', branch: '', lastRunTime: '', duration: '' }]
  const res = await getPipelineList(id)
  if (res.code === 0) {
    pipelineData.value = res.data.list || []
  } else {
    console.error("获取流水线数据失败:", res.msg)
  }
}

// 同步远程分支操作
const syncBranches = async () => {
  const res = await syncApplicationBranchs(id)
  if (res.code === 0) {
    await fetchBranches()
  } else {
    console.error("同步远程分支失败:", res.msg)
  }
}

// 创建流水线操作
const createPipeline = () => {
  console.log("创建流水线");
  const url = router.resolve({
    path: '/layout/cicd/createPipeline', // 路由路径
    query: { id: id,name:appDetails.value.name,gitUrl: appDetails.value.path  }                    // 查询参数
  }).href;
  window.open(url, '_blank');  // 新开标签页，并带上查询参数
};

// 流水线的操作
const handlePipelineAction = (pipeline) => {
  console.log(`操作流水线: ${pipeline.branch}`)
}

// 分支的具体操作
const handleBranchAction = (branch) => {
  console.log(`操作分支: ${branch.branch_name}`)
}

onMounted(() => {
  fetchAppDetails()
  fetchBranches()
  fetchPipelines() // 获取流水线数据
})
</script>

<style scoped>
h2 {
  font-size: 24px;
  margin-bottom: 10px;
}

h3 {
  color: #409EFF;
  font-size: 18px;
}
</style>
