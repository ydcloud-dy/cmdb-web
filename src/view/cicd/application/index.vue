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
        <el-button size="small" type="primary" icon="plus" @click="goToCreateApplication">新增</el-button>
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
        <TableBlock :table-data="tableData" @update="handleUpdate" @search="handlesortChange" @test="handleTest"  @select="handleSelectionChange" @delete="handleDelete" @region="handleUpdateRegion" />
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
  </div>
</template>

<script>

export default {
  name: 'Index',
}
</script>

<script setup>

import { createApplications,deleteApplications,updateApplications,getApplicationsList,describeApplications,deleteApplicationsByIds} from "@/api/cicd/applications";
import FormBlock from './form.vue'
import TableBlock from './table.vue'
import { ref } from 'vue'
import { ElMessage } from 'element-plus'
import { syncRegion } from '@/api/cloudCmdb/cloud_region'
import { useRouter } from 'vue-router';

const form = ref({})
const page = ref(1)
const total = ref(0)
const pageSize = ref(10)
const tableData = ref([])
const title = ref('')
const searchInfo = ref({})
const deleteVisible = ref(false)
const clusters = ref([])
const regions = ref([])
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
  const table = await getApplicationsList({ page: page.value, pageSize: pageSize.value, keyword: searchInfo.value.name })
  if (table.code === 0) {
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
const handleUpdate = async(row) => {
  console.log("修改表格数据啦啊啊啊")
  // const res = await describeApplications(row.ID)
  type.value = 'update'
  title.value = '更新'
  getTableData()
  // if (res.code === 0) {
  //   const data = res.data

    // console.log(data,"-----")
    // // 将查询结果中的数据赋值到表单
    // form.value = {
    //   ID: data.ID,
    //   name: data.name,
    //   full_name: data.full_name,
    //   language: data.language,
    //   build_path: data.build_path,
    //   dockerfile: data.dockerfile,
    //   repo_id: data.repo_id,
    //   path: data.path,
    //   compile_env_id: data.compile_env_id
    // };

    // dialogFormVisible.value = true
  // }
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


    // res = await updateApplications(value);
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

const router = useRouter()

const goToCreateApplication = () => {
  router.push({ path: '/layout/cicd/createApplication' });

};
// 创建
const openDialog = () => {
  type.value = 'create'
  title.value = '创建'
  dialogFormVisible.value = true
}

</script>
<style></style>
