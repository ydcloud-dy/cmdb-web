<template>
  <div>
    <div class="dycloud-search-box">
      <el-form ref="elSearchFormRef" :inline="true" :model="searchInfo" class="demo-form-inline" :rules="searchRule" @keyup.enter="onSubmit">
        <el-form-item label="创建日期" prop="createdAt">
          <template #label>
        <span>
          创建日期
          <el-tooltip content="搜索范围是开始日期（包含）至结束日期（不包含）">
            <el-icon><QuestionFilled /></el-icon>
          </el-tooltip>
        </span>
          </template>
          <el-date-picker v-model="searchInfo.startCreatedAt" type="datetime" placeholder="开始日期" :disabled-date="time=> searchInfo.endCreatedAt ? time.getTime() > searchInfo.endCreatedAt.getTime() : false"></el-date-picker>
          —
          <el-date-picker v-model="searchInfo.endCreatedAt" type="datetime" placeholder="结束日期" :disabled-date="time=> searchInfo.startCreatedAt ? time.getTime() < searchInfo.startCreatedAt.getTime() : false"></el-date-picker>
        </el-form-item>

        <el-form-item label="集群名称" prop="name">
          <el-input v-model="searchInfo.name" placeholder="搜索条件" />

        </el-form-item>

        <template v-if="showAllQuery">
          <!-- 将需要控制显示状态的查询条件添加到此范围内 -->
        </template>

        <el-form-item>
          <el-button type="primary" icon="search" @click="onSubmit">查询</el-button>
          <el-button icon="refresh" @click="onReset">重置</el-button>
          <el-button link type="primary" icon="arrow-down" @click="showAllQuery=true" v-if="!showAllQuery">展开</el-button>
          <el-button link type="primary" icon="arrow-up" @click="showAllQuery=false" v-else>收起</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="dycloud-table-box">
      <div class="dycloud-btn-list">
        <el-button
            size="small"
            type="primary"
            icon="plus"
            @click="openDialog('addApi')"
        >新增</el-button>
        <el-button icon="delete" style="margin-left: 10px;" :disabled="!multipleSelection.length" @click="onDelete">删除</el-button>
      </div>
      <el-table
          ref="multipleTable"
          style="width: 100%"
          tooltip-effect="dark"
          :data="tableData"
          :header-cell-style="{ textAlign: 'center' }"
          :cell-style="{ textAlign: 'center' }"
          row-key="ID"
          @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="55" />

        <el-table-column align="left" label="集群ID" prop="id" width="200" />
        <el-table-column align="left" label="集群名称" prop="name" width="300" />
        <el-table-column align="left" label="日期" prop="createdAt" width="400">
          <template #default="scope">{{ formatDate(scope.row.CreatedAt) }}</template>
        </el-table-column>
        <el-table-column align="left" label="操作" fixed="right" min-width="400">
          <template #default="scope">
            <el-button type="primary" link icon="edit" class="table-button" @click="handleRbacManage(scope.row)">授权</el-button>
            <el-button type="primary" link icon="edit" class="table-button" @click="updateK8sClusterFunc(scope.row)">变更</el-button>
            <el-button type="primary" link icon="delete" @click="deleteRow(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="dycloud-pagination">
        <el-pagination
            layout="total, sizes, prev, pager, next, jumper"
            :current-page="page"
            :page-size="pageSize"
            :page-sizes="[10, 30, 50, 100]"
            :total="total"
            @current-change="handleCurrentChange"
            @size-change="handleSizeChange"
        />
      </div>
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
        <FormBlock
            :form="formData"
            @close="closeDialog"
            @enter="enterDialog"
        />

      </el-dialog>
    </div>
    <div v-if="dialogRbacFormVisible">
      <el-dialog
          v-model="dialogRbacFormVisible"
          width="70%"
          :title="title"
          :close-on-press-escape="false"
          :close-on-click-modal="false"
      >
        <RbacFormBlock
            :form="form"
            @close="closeDialog"
            @enter="enterDialog"
        />
      </el-dialog>
    </div>

    <!--    <div-->
    <!--        class="dialog-footer"-->
    <!--        align="right"-->
    <!--    >-->
    <!--      <el-button-->
    <!--          size="small"-->
    <!--          @click="closeDialog"-->
    <!--      >取 消</el-button>-->
    <!--      <el-button-->
    <!--          size="small"-->
    <!--          type="primary"-->
    <!--          @click="enterDialog"-->
    <!--      >确 定</el-button>-->
    <!--    </div>-->
  </div>
</template>

<script setup>
import {
  CreateCluster,
  DeleteCluster,
  DeleteClusterByIds,
  UpdateCluster,
  getClustersById,
  getClustersList
} from '@/api/kubernetes/cluster/k8sCluster'
// 富文本组件
import FormBlock from './createClusterForm.vue'
import RbacFormBlock from '@/components/kubernetes/clusters/rbac.vue'

// 全量引入格式化工具 请按需保留
import {  formatDate,} from '@/utils/format'
import { ElMessage, ElMessageBox } from 'element-plus'
import { ref, reactive } from 'vue'

defineOptions({
  name: 'K8sCluster'
})

// 控制更多查询条件显示/隐藏状态
const showAllQuery = ref(false)

// 自动化生成的字典（可能为空）以及字段
const formData = ref({
  // createBy: '',
  // kubeconfig: '',
  // prometheus_url: '',
  // prometheus_auth_type: '',
  // prometheus_user:'',
  // prometheus_pwd:'',
  // kube_type: '',
  // name: '',
  // updateBy: '',
  // version: '',
})




const searchRule = reactive({
  createdAt: [
    { validator: (rule, value, callback) => {
        if (searchInfo.value.startCreatedAt && !searchInfo.value.endCreatedAt) {
          callback(new Error('请填写结束日期'))
        } else if (!searchInfo.value.startCreatedAt && searchInfo.value.endCreatedAt) {
          callback(new Error('请填写开始日期'))
        } else if (searchInfo.value.startCreatedAt && searchInfo.value.endCreatedAt && (searchInfo.value.startCreatedAt.getTime() === searchInfo.value.endCreatedAt.getTime() || searchInfo.value.startCreatedAt.getTime() > searchInfo.value.endCreatedAt.getTime())) {
          callback(new Error('开始日期应当早于结束日期'))
        } else {
          callback()
        }
      }, trigger: 'change' }
  ],
})

const elSearchFormRef = ref()
const form = ref({})
const title = ref('')
// =========== 表格控制部分 ===========
const page = ref(1)
const total = ref(0)
const pageSize = ref(10)
const tableData = ref([])
const searchInfo = ref({})

// 重置
const onReset = () => {
  searchInfo.value = {}
  getTableData()
}

// 搜索
const onSubmit = () => {
  elSearchFormRef.value?.validate(async(valid) => {
    if (!valid) return
    page.value = 1
    pageSize.value = 10
    getTableData()
  })
}

// 分页
const handleSizeChange = (val) => {
  pageSize.value = val
  getTableData()
}

// 修改页面容量
const handleCurrentChange = (val) => {
  page.value = val
  getTableData()
}

// 查询
const getTableData = async() => {
  const table = await getClustersList({ page: page.value, pageSize: pageSize.value,
    startCreatedAt: searchInfo.value.startCreatedAt,endCreatedAt:searchInfo.value.endCreatedAt,name:searchInfo.value.name })
  if (table.code === 0) {
    tableData.value = table.data.list
    total.value = table.data.total
    page.value = table.data.page
    pageSize.value = table.data.pageSize
  }
}

getTableData()

// ============== 表格控制部分结束 ===============

// 获取需要的字典 可能为空 按需保留
const setOptions = async () =>{
}

// 获取需要的字典 可能为空 按需保留
setOptions()


// 多选数据
const multipleSelection = ref([])
// 多选
const handleSelectionChange = (val) => {
  multipleSelection.value = val
}

// 删除行
const deleteRow = (row) => {
  ElMessageBox.confirm('您确定要删除  ' + row.name + ' 该集群？, 集群相关授权也会一并删除，是否继续?', '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning'
  }).then(() => {
    deleteK8sClusterFunc(row)
  })
}

// 多选删除
const onDelete = async() => {
  ElMessageBox.confirm('您确定要删除选中的集群？, 集群相关授权也会一并删除，是否继续?', '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning'
  }).then(async() => {
    const IDs = []
    if (multipleSelection.value.length === 0) {
      ElMessage({
        type: 'warning',
        message: '请选择要删除的数据'
      })
      return
    }
    multipleSelection.value &&
    multipleSelection.value.map(item => {
      IDs.push(item.id)
    })
    const res = await DeleteClusterByIds({ IDs })
    if (res.code === 0) {
      ElMessage({
        type: 'success',
        message: '删除成功'
      })
      if (tableData.value.length === IDs.length && page.value > 1) {
        page.value--
      }
      getTableData()
    }
  })
}

// 行为控制标记（弹窗内部需要增还是改）
const type = ref('')

// 更新行
const updateK8sClusterFunc = async(row) => {
  const res = await getClustersById({ id: row.id })
  type.value = 'update'
  if (res.code === 0) {
    formData.value = res.data.cluster
    dialogFormVisible.value = true
  }
}


// 删除行
const deleteK8sClusterFunc = async (row) => {
  const res = await DeleteCluster({ id: row.id })
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

// 弹窗控制标记
const dialogFormVisible = ref(false)

// 打开弹窗
const openDialog = () => {
  dialogFormVisible.value = false
  type.value = 'create'
  title.value = '创建'
  form.value = {}
  dialogFormVisible.value = true
}

// 关闭弹窗
const closeDialog = () => {
  dialogFormVisible.value = false
  formData.value = {
    // alias: '',
    // city: ref(0),
    // clusterId: '',
    // createBy: '',
    // district: '',
    // kubeconfig: '',
    // kube_type: ref(0),
    // prometheus_auth_type: ref(0),
    // prometheus_user: '',
    // prometheus_pwd: '',
    // api_address: '',
    // name: '',
    // note: '',
    // status: '',
    // updateBy: '',
    // version: '',
  }
}
const dialogRbacFormVisible = ref(false)
const handleRbacManage = async(row) => {
  title.value = '集群授权'
  form.value = row
  dialogRbacFormVisible.value = true
}
// 弹窗确定
const enterDialog = async () => {
  let res
  console.log(formData.value)
  console.log("mmmmmmmmmmmmmmmmmmmmm")
  console.log(type.value)
  switch (type.value) {
    case 'create':
      res = await CreateCluster(formData.value)
      break
    case 'update':
      console.log(formData.value)
      res = await UpdateCluster(formData.value)
      break
    default:
      res = await CreateCluster(formData.value)
      break
  }
  if (res.code === 0) {
    ElMessage({
      type: 'success',
      message: '创建/更改成功'
    })
    closeDialog()
    getTableData()
  }
}

</script>

<style>

</style>
