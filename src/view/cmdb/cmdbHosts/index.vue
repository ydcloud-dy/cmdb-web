<template>
  <div>
    <el-card class="box-card" shadow="hover">
      <template #header>
        <div class="card-header">
          <span>资产管理</span>
        </div>
      </template>
      <el-row :gutter="24">
        <el-col :span="3">
          <el-card class="box-card" shadow="hover">
            <template #header>
              <div class="card-header">
                <span>资源分布</span>
              </div>
            </template>
            <el-tree-v2
                ref="treeRef"
                :data="data"
                :props="props"
                node-key="region"
                :default-expanded-keys="['0']"
                :expand-on-click-node="false"
                @node-click="nodeClick"
            />
          </el-card>
        </el-col>
        <el-col :span="21">
          <el-card class="el-card">
            <div class="dycloud-search-box">
              <el-form ref="searchForm" :inline="true" :model="searchInfo">
                <el-form-item>
                  <el-dropdown split-button>
                    {{ discriminativeSearch }}
                    <template #dropdown>
                      <el-dropdown-menu>
                        <div v-for="(item,index) in searchFields" :key="index">
                          <el-dropdown-item @click.native="handlesearchFields(item.name, item.field)">
                            {{ item.name }}
                          </el-dropdown-item>
                        </div>
                      </el-dropdown-menu>
                    </template>
                  </el-dropdown>
                </el-form-item>
                <el-form-item>
                  <el-input v-model="searchInfo.keyword" placeholder="请输入搜索关字" />
                </el-form-item>
                <el-form-item>
                  <el-button size="small" type="primary" icon="search" @click="onSubmit">查询</el-button>
                  <el-button size="small" icon="refresh" @click="onReset">重置</el-button>
                  <el-button size="small" type="primary" icon="plus" @click="openAddDialog">新增</el-button>
                  <el-button size="small" type="primary" icon="plus" @click="openImportDialog">批量导入</el-button>
                  <el-button size="small" type="primary" icon="plus" @click="openNewTerminalPage">web终端</el-button>

                </el-form-item>
              </el-form>
            </div>
            <div v-if="dialogAddVisible" >
              <el-dialog v-model="dialogAddVisible" width="650px"  :title="title" >
                <template #default>
                  <div class="dialog-footer">
                    <CreateHost :form="form" :data="data"  :title="title" :dataInfo="dataInfo" :operation="type" :type="'hosts'" @close="closeDialog" @enter="enterDialog" />
                  </div>
                </template>
              </el-dialog>
            </div>
            <div v-if="dialogImportVisible" >
              <el-dialog v-model="dialogImportVisible" width="650px"  :title="title" >
                <template #default>
                  <div class="dialog-footer">
                    <BulkImport :form="form" :data="data"  :title="title" :dataInfo="dataInfo" :operation="type" :type="'hosts'" @close="closeDialog" @enter="enterDialog" />
                  </div>
                </template>
              </el-dialog>
            </div>
            <div v-if="dialogAuthVisible">
              <el-dialog v-model="dialogAuthVisible" width="400px" title="密码验证">
                <template #default>
                  <div style="display: flex; align-items: center;">
                    <el-icon><WarningFilled /></el-icon>
                    <span style="margin-left: 10px;">首次验证请输入密码</span>
                  </div>
                  <el-input v-model="authPassword" type="password" placeholder="请输入密码" style="margin-top: 10px;" />
                  <div style="margin-top: 5px;">用户 {{ authUser }} 的密码，该密码仅做首次验证使用，不会存储该密码</div>
                </template>
                <template #footer>
                  <el-button @click="dialogAuthVisible = false">取消</el-button>
                  <el-button type="primary" @click="confirmAuthPassword">确定</el-button>
                </template>
              </el-dialog>
            </div>
            <el-dialog v-model="dialogProgressVisible" title="批量导入">
              <div>
                <div class="static-content-item">
                  <el-divider direction="horizontal">导入结果</el-divider>
                </div>
              </div>
              <div>
                <p>成功：{{ progress.success }} </p>
                <p>失败：{{ progress.failure }} </p>
              </div>
              <div>
                <div class="static-content-item">
                  <el-divider direction="horizontal">验证与同步</el-divider>
                </div>
                <el-scrollbar>
                  <ul>
                    <li v-for="(host, index) in progress.successHosts" :key="index" class="success">
                      {{ host }}：<span style="color:green">成功</span>
                    </li>
                    <li v-for="(host, index) in progress.failureHosts" :key="index" class="failure">
                      {{ host }}：<span style="color:red">失败</span>
                    </li>
                  </ul>
                </el-scrollbar>
              </div>
            </el-dialog>

            <div class="dycloud-table-box">
              <TableBlock :table-data="tableData" @search="handlesortChange"  @update="handleUpdate" @detail="handleDetail" @delete="handleDelete" />

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
          </el-card>
        </el-col>
      </el-row>
    </el-card>

  </div>
</template>
<script>

export default {
  name: 'Index',
}
</script>
<script setup>
import { ref, onMounted, nextTick,onBeforeUnmount } from 'vue'
import TableBlock from './table.vue'
import { ElMessage } from 'element-plus'
import CreateHost from "./createHost.vue"
import BulkImport from "./bulkImport.vue"
import {getCmdbProjectsList} from "@/api/cmdb/cmdbProjects";
import {
  AuthenticationCmdbHosts,
  createCmdbHosts,
  deleteCmdbHosts,
  findCmdbHosts,
  GetImportProgress,
  getCmdbHostsList,
  ImportHosts,
  updateCmdbHosts
} from "@/api/cmdb/cmdbHosts";
// import {getAssetProjectsList} from "@/api/assetManagement/assetProjects";

const form = ref({})
const title = ref("")
const props = {
  value: 'id',
  label: 'name',
  children: 'region',
}
const dataInfo = ref([])
const page = ref(1)
const total = ref(0)
const pageSize = ref(10)
const searchInfo = ref({ 'keyword': '', 'region': '', 'field': '' })
const data = ref([])
const tableData = ref([])
const discriminativeSearch = ref('识别搜索')
const searchFields = [{ 'id': 1, 'field': 'name', 'name': '实例名称' }, { 'id': 2, 'field': 'id', 'name': '实例ID' }, { 'id': 8, 'field': 'os', 'name': '操作系统' }, { 'id': 10, 'field': 'serverHost', 'name': '私网地址' }]
const projectId = ref(1)
const currentRow = ref(null)
const treeRef = ref(null)
const progress = ref({
  success: 0,
  failure: 0,
  successHosts: [],
  failureHosts: [],
  finished: false
});
// 添加这个函数来选择第一个节点
const selectFirstNode = () => {
  nextTick(() => {
    if (data.value && data.value.length > 0) {
      const firstNode = data.value[0]
      nodeClick(firstNode)
      if (treeRef.value) {
        treeRef.value.setCurrentKey(firstNode.region)
      }
      // 添加这行代码来获取表格数据
      getTableData()
    }
  })
}
const openNewTerminalPage = () => {
  // 打开新的 HTML 页面，其中加载了 TerminalPage.vue
  // window.open('./hostTerminal', '_blank');
  window.open('/#/hostTerminal', '_blank');  // 注意: 使用 # 符号

};
// 修改 GetvirtualMachineTree 函数
const GetvirtualMachineTree = async() => {
  const res = await getCmdbProjectsList({ page: page.value, pageSize: pageSize.value, ...searchInfo.value })
  if (res.code === 0) {
    data.value = res.data.list
    selectFirstNode() // 确保在数据加载完成后调用 selectFirstNode
  }
}

// 添加 onMounted 钩子
onMounted(() => {
  GetvirtualMachineTree()
  selectFirstNode() // 确保在页面加载时调用 selectFirstNode
})

const dialogAddVisible = ref(false)
const dialogImportVisible = ref(false)
const dialogAuthVisible = ref(false) // 新增
const dialogProgressVisible = ref(false)
const authPassword = ref('') // 新增
const authUser = ref('root') // 可以根据具体需求修改
let intervalId = null;

const type = ref('')
const openImportDialog = () =>{
  type.value = 'import'
  title.value = "导入主机"
  dialogImportVisible.value = true
}
const openAddDialog = () => {
  type.value = 'create'
  dataInfo.value = null
  title.value = '创建主机'
  // readOnly.value = false
  // form.value = getK8sObject('deploymentsinit', searchInfo.value.namespace, '')
  dialogAddVisible.value = true
}

const closeDialog = () => {
  dialogAddVisible.value = false
  dialogImportVisible.value = false
  dialogAuthVisible.value = false
  form.value = {}
}
// 同步主机
const cloud_id = ref(0)

// 点击节点
const nodeClick = (val) => {
  console.log(val)
  console.log("********************************")
  if (val.ID) {
    searchInfo.value.region = val.region_id
    projectId.value = val.ID
    getTableData()
  }
  console.log(projectId.value)
  if (val.region || val.region === null) {
    cloud_id.value = val.id
  }
}
const enterDialog = async(row) => {
  // if (createHostRef.value) {
  //   // 调用子组件的validate方法
  let res
  row.password = authPassword.value
  console.log(type.value)
  row.port = parseInt(row.port,10)
  currentRow.value = row
  console.log(row,"aaaaaa")
  console.log(projectId.value)
  console.log("================================")
  switch (type.value) {
    case 'create':
        res = await AuthenticationCmdbHosts(row)
        if (res.code == 177){
          dialogAuthVisible.value = true // 显示对话框
           // res = await createCmdbHosts(row)
          break
        }
        console.log(res)
      break
    case 'update':
      // res = await VeleroRecordUpdate({cluster_id: searchInfo.value.cluster_id, namespace: row.metadata.namespace,
      //   VeleroRecordName:row.metadata.name, content: row})
       res = await updateCmdbHosts(row)
      break
    case 'import':{
      console.log(row[0].raw)
      clearProgressData()
      console.log(form.value)
      // 确保 row 是一个 File 对象
      if (!(row[0].raw instanceof File)) {
        console.error("row is not a File object");
        break;
      }
      console.log(projectId.value,"___________")
      console.log("fuck")
      const data = new FormData()
      data.append('file',row[0].raw)
      data.append('projectId',row.project)
      console.log(data)
      dialogProgressVisible.value = true
      pollProgress();
      res = await ImportHosts(data,{donNotShowLoading: true})
      break
    }
    default:
      // res = await VeleroRecordCreate({cluster_id: searchInfo.value.cluster_id, content:row})
      break
  }
  if (res.code === 0) {
    closeDialog()
    handleOptions(res)
  }

}
function clearProgressData() {
  progress.value = {
    success: 0,
    failure: 0,
    successHosts: [],
    failureHosts: [],
    finished: false
  };
}

onBeforeUnmount(() => {
  if (intervalId) {
    clearInterval(intervalId);
  }
});
const pollProgress = () => {
  intervalId = setInterval(async () => {
    try {
      const response = await GetImportProgress();
      progress.value = response.data;
      if (progress.value.finished) {
        clearInterval(intervalId);
      }
    } catch (error) {
      clearInterval(intervalId);
      console.error(error);
    }
  }, 2000); // 每2秒轮询一次
};
const confirmAuthPassword = async () => {
  let res
  currentRow.value.password = authPassword.value
  console.log("Confirming authentication password for:", currentRow.value)
  res = await createCmdbHosts(currentRow.value)
  if (res.code === 0) {
    closeDialog()
    authPassword.value = ""
    handleOptions(res)
  }
  // 你可以在这里添加实际的逻辑，例如再发起一个请求进行验证
  // const res = await createCmdbHosts(row); // 示例: 重新调用 createCmdbHosts
}
const handleUpdate = async(row) => {
  type.value = 'update'

  const res = await findCmdbHosts({id: row.ID})
  if (res.data.items) {
    if (res.data.items.code) {
      ElMessage({
        type: 'error',
        message: res.data.items.message,
      })
      return
    }
  }
  dialogAddVisible.value = true // 打开模态框

  console.log(data.value)
  console.log(res.data)
  console.log("00000000000000000000")
  if (res.code === 0) {
    dataInfo.value = res.data

    title.value = "更新主机"
    dialogAddVisible.value = true
  }
  // const res = await UpdateAssetHosts(row)
  // if (res.data.items) {
  //   if (res.data.items.code) {
  //     ElMessage({
  //       type: 'error',
  //       message: res.data.items.message,
  //     })
  //     return
  //   }
  // }
  //
  // if (res.code === 0) {
  //   form.value = res.data.items
  //   dialogAddVisible.value = true
  // }
}
const handleDelete = async(row) => {
  console.log(row)
  row.visible = false
  const res = await deleteCmdbHosts({id: row.ID})
  if (res.data.items) {
    if (res.data.items.code) {
      ElMessage({
        type: 'error',
        message: res.data.items.message,
      })
      return
    }
  }
  //
  if (res.code === 0) {
    ElMessage({
      type: 'success',
      message: '删除成功'
    })
    getTableData()
  }
}
const handleOptions = async(res) => {
  if (res.code === 0) {
    ElMessage({
      type: 'success',
      message: res.msg
    })
    getTableData()
  }
}
const handleDetail = async(row) => {
  const res = await findCmdbHosts({id: row.ID})
  if (res.data.items) {
    if (res.data.items.code) {
      ElMessage({
        type: 'error',
        message: res.data.items.message,
      })
      return
    }
  }
  if (res.code === 0) {
    form.value = res.data.items
  }
}

// 查询
const getTableData = async() => {
  console.log(projectId)
  console.log("--------------------------------")
  const table = await getCmdbHostsList({ page: page.value, pageSize: pageSize.value,project: projectId.value, ...searchInfo.value })
  if (table.code === 0) {
    tableData.value = table.data.list
    total.value = table.data.total
    page.value = table.data.page
    pageSize.value = table.data.pageSize
  }
  console.log(table)
  console.log("================================================================")
}

getTableData()

// 搜索
const onReset = () => {
  searchInfo.value = {}
  discriminativeSearch.value = '识别搜索'
  cloud_id.value = 0
}

// 提交搜索
const onSubmit = () => {
  if (searchFields.value === '识别搜索') {
    ElMessage({
      message: '请选择搜索类型',
      type: 'warning',
    })
    return
  }
  page.value = 1
  pageSize.value = 10
  getTableData()
  // GetvirtualMachineTree()
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

const handlesearchFields = (val, field) => {
  searchInfo.value.field = field
  discriminativeSearch.value = val
}

// 排序
const handlesortChange = (value) => {
  searchInfo.value = value
  getTableData()
}

</script>
<style scoped>
.tree-content{
  height: auto;
}
.success {
  color: green;
}
.failure {
  color: red;
}
</style>
