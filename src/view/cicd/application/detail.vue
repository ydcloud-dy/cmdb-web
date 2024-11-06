<template>
  <div style="padding: 20px; height: 100vh; overflow-y: auto;">
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

    <!-- 设置表格高度 -->
    <el-table :data="branchData" style="width: 100%; margin-top: 10px;" height="400">
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

    <!-- 分页 -->
    <el-pagination
        style="margin-top: 10px;"
        :current-page="page"
        :page-size="pageSize"
        :page-sizes="[10, 20, 50, 100]"
        :total="totalBranches"
        layout="total, sizes, prev, pager, next, jumper"
        @current-change="handlePageChange"
        @size-change="handlePageSizeChange"
    />
  </div>
</template>



<script setup>
import { ref, onMounted } from 'vue'
import dayjs from 'dayjs'
import { useRouter, useRoute } from 'vue-router'
import { describeApplications,syncApplicationBranchs,getAppBranchList } from '@/api/cicd/applications'
import {describeBuildEnv} from "@/api/configurationCenter/buildEnv"; // 确保该路径正确
// 假设您有一个方法用于获取分支信息
// import { getBranchList } from '@/api/cicd/branches'

const router = useRouter()
const route = useRoute()
const id = route.query.id // 从查询参数中获取应用 ID

const appDetails = ref({})
const branchData = ref([])

const page = ref(1)
const pageSize = ref(10)
const totalBranches = ref(0)

const goToApplications = () => {
  router.push({ name: 'applications' }) // 使用路由名称进行导航
}

const formatDate = (date) => {
  return date ? dayjs(date).format('YYYY-MM-DD HH:mm:ss') : ''
}

// 获取应用详情
const fetchAppDetails = async () => {
  // const id = route.params.id // 从路由参数中获取应用 ID
  console.log(id)
  const res = await describeApplications(id)
  if (res.code === 0) {
    const data = await describeBuildEnv(res.data.compile_env_id);
    console.log(data)
    appDetails.value = {
      name: res.data.name,
      language: res.data.language,
      compile_env: data.data.name, // 根据实际数据格式修改
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
// 获取分支列表
const fetchBranches = async () => {
  const res = await getAppBranchList(id,page.value,pageSize.value)
  if (res.code === 0) {
    branchData.value = res.data.list || []
    totalBranches.value = res.data.total || branchData.value.length
  } else {
    console.error("获取分支列表失败:", res.msg)
  }
}

// 同步远程分支操作
const syncBranches = async () => {
  const res = await syncApplicationBranchs(id)
  if (res.code === 0) {
    console.log("同步分支成功")
    await fetchBranches() // 同步成功后重新获取分支列表
  } else {
    console.error("同步远程分支失败:", res.msg)
  }
}


// 分支的具体操作

onMounted(() => {
  fetchAppDetails() // 加载时获取应用详情
  fetchBranches()    // 加载时获取分支列表
})

// 分页变化处理
const handlePageChange = (val) => {
  page.value = val
  fetchBranches() // 分页变化时重新获取分支列表
}

const handlePageSizeChange = (val) => {
  pageSize.value = val
  fetchBranches() // 每页大小变化时重新获取分支列表
}

// 分支的具体操作
const handleBranchAction = (branch) => {
  console.log(`操作分支: ${branch.branch_name}`)
}

onMounted(() => {
  fetchAppDetails() // 加载时获取应用详情
  fetchBranches()    // 加载时获取分支列表
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
