<template>
  <div>
    <div class="dycloud-search-box">
      <el-form ref="searchForm" :inline="true" :model="searchInfo">
        <el-form-item label="名称">
          <el-input v-model="searchInfo.name" placeholder="名称" />
        </el-form-item>
        <el-form-item>
          <el-button size="small" type="primary" icon="search" @click="onSubmit">查询</el-button>
          <el-button size="small" icon="refresh" @click="onReset">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="dycloud-table-box">
      <div class="dycloud-btn-list">
        <el-button size="small" type="primary" icon="plus" @click="openDialog('addApi')">新增</el-button>
<!--        <el-popover v-model="deleteVisible" placement="top" width="160">-->
<!--          <p>确定要删除吗？</p>-->
<!--          <div style="text-align: right; margin-top: 8px;">-->
<!--            <el-button size="small" type="primary" link @click="deleteVisible = false">取消</el-button>-->
<!--            <el-button size="small" type="primary" @click="onDelete">确定</el-button>-->
<!--          </div>-->
<!--          <template #reference>-->
<!--            <el-button icon="delete" size="small" :disabled="!clusters.length" style="margin-left: 10px;" @click="deleteVisible = true">删除</el-button>-->
<!--          </template>-->
<!--        </el-popover>-->
      </div>
      <div v-if="tableData">
        <TableBlock :table-data="tableData" @run="handleRun" @search="handlesortChange" @test="handleTest"  @select="handleSelectionChange" @delete="handleDelete" @region="handleUpdateRegion" />
      </div>
    </div>
    <div class="dycloud-pagination">
      <el-pagination
        :current-page="page"
        :page-size="pageSize"
        :page-sizes="[10, 30, 50, 100]"
        :total="total"
        layout="total, sizes, prev, pager, next, jumper"
        @current-change="handleCurrentChange"
        @size-change="handleSizeChange"
      />
    </div>
    <div v-if="dialogFormVisible">
      <el-dialog
        v-model="dialogFormVisible"
        width="40%"
        :title="title"
        :show-close="false"
        :close-on-press-escape="false"
        :close-on-click-modal="false"
      >
        <FormBlock :form="form" :regions="regions" @close="closeDialog" :type="type" @enter="enterDialog" />
      </el-dialog>
    </div>
    <!-- 弹出框 -->
    <el-dialog
        v-model="dialogVisible"
        width="50%"
        title="运行流水线"
    >
      <div>
        <!-- 仓库地址 -->
        <el-form :model="form">
          <el-form-item label="仓库地址：" label-width="100px">
            <el-input v-model="form.repoUrl" readonly disabled></el-input>
          </el-form-item>

          <!-- 分支/Tag选择 -->
          <el-form-item label="分支：" label-width="100px">
            <el-select v-model="form.branchOrTag" placeholder="请选择">
              <el-option
                  v-for="branch in branches"
                  :key="branch"
                  :label="branch"
                  :value="branch"
              ></el-option>
            </el-select>
            <el-button type="text" @click="refreshBranches">刷新</el-button>
          </el-form-item>
        </el-form>
      </div>

      <template #footer>
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="runPipeline">运行</el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script>

export default {
  name: 'Index',
}
</script>

<script setup>

import { createApplications,deleteApplications,updateApplications,describeApplications,deleteApplicationsByIds} from "@/api/cicd/applications";
import FormBlock from './form.vue'
import TableBlock from './table.vue'
import { ref } from 'vue'
import { ElMessage } from 'element-plus'
import { syncRegion } from '@/api/cloudCmdb/cloud_region'
import {getPipelinesList} from "@/api/cicd/pipelines";

const page = ref(1)
const total = ref(0)
const pageSize = ref(10)
const tableData = ref([])
const title = ref('')
const searchInfo = ref({})
const deleteVisible = ref(false)
const clusters = ref([])
const regions = ref([])
const dialogVisible = ref(false);

// 表单数据
const form = ref({
  repoUrl: "https://github.com/ydcloud-dy/spring-boot-helloWorld.git", // 示例仓库地址
  branchOrTag: "main", // 默认分支
});
// 分支数据
const branches = ref(["develop", "main", "test", "test_1", "test_2", "test_3"]);
// 刷新分支列表
const refreshBranches = () => {
  console.log("刷新分支/Tag列表...");
  // 模拟分支刷新数据
  branches.value = ["develop", "main", "feature/new-feature", "release/v1.0.0"];
};

// 运行流水线
const runPipeline = () => {
  console.log("运行流水线，选择的表单数据为：", form.value);
  dialogVisible.value = false; // 关闭弹窗
};

// 搜索
const onReset = () => {
  searchInfo.value = {}
}

// 排序
const handlesortChange = (value) => {
  searchInfo.value = value
  getTableData()
}

// 提交搜索
const onSubmit = () => {
  page.value = 1
  pageSize.value = 10
  getTableData()
}

// 分页
const handleSizeChange = (val) => {
  pageSize.value = val
  getTableData()
}

const handleCurrentChange = (val) => {
  page.value = val
  getTableData()
}

// 查询
const getTableData = async() => {
  const table = await getPipelinesList({ page: page.value, pageSize: pageSize.value, keyword: searchInfo.value.name })
  if (table.code === 0) {
    console.log('Pipeline List:', table.data.list);  // 检查这里
    tableData.value = table.data.list
    total.value = table.data.total
    page.value = table.data.page
    pageSize.value = table.data.pageSize
  }
}

getTableData()

// 更新数据模态框
const dialogFormVisible = ref(false)
const type = ref('')



const handleRun = async(row) => {
  dialogVisible.value = true; // 打开弹窗
  console.log("run")
  console.log(row)
  form.value.repoUrl = row.git_url
}


// 同步Region
const handleUpdateRegion = async(row) => {
  const res = await syncRegion({ id: row.id })
  if (res.code === 0) {
    ElMessage({
      type: 'success',
      message: '操作成功'
    })
    getTableData()
  }
}

// 关闭模态框
const closeDialog = () => {
  dialogFormVisible.value = false
  form.value = {}
}

// 删除数据
const handleDelete = async(row) => {
  row.visible = false
  const res = await deleteApplications(  row.ID )
  if (res.code === 0) {
    ElMessage({
      type: 'success',
      message: '删除成功'
    })
    if (tableData.value.length === 1 && page.value > 1) {
      page.value--
    }
    getTableData()
  }
}

// 批量操作
const handleSelectionChange = (val) => {
  clusters.value = val
}

// 批量删除
const onDelete = async() => {
  const ids = clusters.value.map(item => item.ID)
  const res = await deleteApplicationsByIds({ ids:ids })
  if (res.code === 0) {
    ElMessage({
      type: 'success',
      message: res.msg
    })
    if (tableData.value.length === ids.length && page.value > 1) {
      page.value--
    }
    deleteVisible.value = false
    getTableData()
  }
}

// 提交数据提示信息
const handleOptions = async(res) => {
  if (res.code === 0) {
    ElMessage({
      type: 'success',
      message: res.msg
    })
    if (tableData.value.length === 1 && page.value > 1) {
      page.value--
    }
    getTableData()
  }
}

// 提交数据
// 提交数据
const enterDialog = async (value) => {
  console.log(value);
  console.log("--------------------------------");

  // 调用 API，根据 type 选择操作
  let res;
  if (type.value === 'create') {
    res = await createApplications(value);
  } else if (type.value === 'update') {
    res = await updateApplications(value);
  }

  // 处理 API 响应
  if (res && res.code === 0) {
    closeDialog();
    handleOptions(res);
  } else {
    ElMessage({
      type: 'error',
      message: res ? res.msg : '操作失败'
    });
  }
};
// 处理 test 事件的函数
const handleTest = async (value) => {
  console.log('测试:', value)
  const res = await TestService(value)
  if (res.code === 0) {
    ElMessage({
      type: 'success',
      message: res.data
    })
  }
  console.log(res)
  // 在这里添加测试逻辑
}

// 创建
const openDialog = () => {
  type.value = 'create'
  title.value = '创建'
  dialogFormVisible.value = true
}

</script>
<style></style>
