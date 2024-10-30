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


        <template v-if="showAllQuery">
          <!-- 将需要控制显示状态的查询条件添加到此范围内 -->
        </template>

        <el-form-item>
          <el-button type="primary" icon="search" @click="onSubmit">查询</el-button>
          <el-button icon="refresh" @click="onReset">重置</el-button>
          <el-button type="text" icon="arrow-down" @click="showAllQuery=true" v-if="!showAllQuery">展开</el-button>
          <el-button type="text" icon="arrow-up" @click="showAllQuery=false" v-else>收起</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="dycloud-table-box">
        <div class="dycloud-btn-list">
            <el-button type="primary" icon="plus" @click="openDialog">新增</el-button>
            <el-button icon="delete" style="margin-left: 10px;" :disabled="!multipleSelection.length" @click="onDelete">删除</el-button>
          <el-link style="margin-left: 20px" icon="download" :href="apiAddress+'/docker/host/genTlsScript'">生成SSL证书脚本</el-link>
        </div>
        <el-table
        ref="multipleTable"
        style="width: 100%"
        tooltip-effect="dark"
        :data="tableData"
        row-key="ID"
        @selection-change="handleSelectionChange"
        >
        <el-table-column type="selection" width="55" />

        <el-table-column align="left" label="日期" prop="createdAt" width="180">
            <template #default="scope">{{ formatDate(scope.row.CreatedAt) }}</template>
        </el-table-column>

        <el-table-column align="left" label="主机名称" prop="name" width="120" />
        <el-table-column align="left" label="连接类型" prop="type" width="120" >
            <template #default="scope">{{ scope.row.type }}</template>
        </el-table-column>
        <el-table-column align="left" label="主机描述" prop="description" width="120" />
        <el-table-column align="left" label="开启tls" prop="enableTls" width="120">
            <template #default="scope">{{ formatBoolean(scope.row.enableTls) }}</template>
        </el-table-column>
<!--        <el-table-column align="left" label="tls ca证书" prop="tlsCa" width="120" />-->
<!--        <el-table-column align="left" label="tls crt证书" prop="tlsCert" width="120" />-->
<!--        <el-table-column align="left" label="tls key证书" prop="tlsKey" width="120" />-->
        <el-table-column align="left" label="跳过安全证书" prop="skipCert" width="120">
            <template #default="scope">{{ formatBoolean(scope.row.skipCert) }}</template>
        </el-table-column>
        <el-table-column align="left" label="访问地址" prop="apiAddress" width="120" />
        <el-table-column align="left" label="访问端口" prop="port" width="120" />
        <el-table-column align="left" label="操作" fixed="right" min-width="240">
            <template #default="scope">
                <el-button type="primary" link  class="table-button" @click="CheckHostApi(scope.row)">测试连接</el-button>
            <el-button type="primary" link icon="edit" class="table-button" @click="updateHostFunc(scope.row)">变更</el-button>
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
    <el-drawer destroy-on-close size="800" v-model="dialogFormVisible" :show-close="false" :before-close="closeDialog">
       <template #header>
              <div class="flex justify-between items-center">
                <span class="text-lg">{{type==='create'?'添加':'修改'}}</span>
                <div>
                  <el-button type="primary" @click="enterDialog">确 定</el-button>
                  <el-button @click="closeDialog">取 消</el-button>
                </div>
              </div>
            </template>

          <el-form :model="formData" label-position="left" ref="elFormRef" :rules="rule" label-width="200px">
            <el-form-item label="主机名称:"  prop="name" >
              <el-input v-model="formData.name" :clearable="true"  placeholder="请输入主机名称,示例: test 使用小写英文" />
            </el-form-item>

              <el-form-item label="主机类型:"  prop="type" >

                  <el-select v-model="formData.type"  placeholder="选择主机类型">
                      <el-option
                              v-for="item in connectTypeOptions"
                              :key="item.value"
                              :label="item.label"
                              :value="item.value">
                      </el-option>
                  </el-select>

              </el-form-item>

            <el-form-item label="主机描述:"  prop="description" >
              <el-input v-model="formData.description" :clearable="true"  placeholder="请输入主机描述" />
            </el-form-item>
            <el-form-item label="开启tls:"  prop="enableTls" v-if="formData.type === 1"  >
              <el-switch v-model="formData.enableTls" active-color="#13ce66" inactive-color="#ff4949"  clearable ></el-switch>
            </el-form-item>
            <el-form-item v-if="formData.enableTls && formData.type === 1" label="跳过安全证书检查:"  prop="skipCert" >
              <el-switch v-model="formData.skipCert" active-color="#13ce66" inactive-color="#ff4949"  clearable ></el-switch>
            </el-form-item>
            <el-form-item label="CA证书:"  prop="tlsCa" v-if=" formData.type === 1 && formData.enableTls && !formData.skipCert" >
              <el-input type="textarea"  v-model="formData.tlsCa"  :clearable="true"  placeholder="填写CA证书内容" />
            </el-form-item>
            <el-form-item label="TLS Certificate:"  prop="tlsCert" v-if="formData.type === 1 &&formData.enableTls && !formData.skipCert" >
              <el-input type="textarea"  v-model="formData.tlsCert"   :clearable="true"  placeholder="填写TLS Certificate" />
            </el-form-item>
            <el-form-item label="TLS Key:"  prop="tlsKey" v-if="formData.type === 1 && formData.enableTls && !formData.skipCert" >
              <el-input type="textarea" v-model="formData.tlsKey" :clearable="true"  placeholder="填写TLS Key" />
            </el-form-item>

            <el-form-item label="访问地址:" v-if="formData.type === 1"  prop="apiAddress" >
              <el-input v-model="formData.apiAddress" :clearable="true"  placeholder="示例: example.com or 1.1.1.1" />
            </el-form-item>
            <el-form-item label="访问端口:" v-if="formData.type === 1"   prop="port" >
              <el-input v-model.number="formData.port" :clearable="true" placeholder="请输入docker api访问端口" />
            </el-form-item>
              <el-form-item label="socket文件路径:" v-if="formData.type === 0"   prop="port" >
                  <el-input v-model.number="formData.socketPath" :clearable="true" placeholder="请输入Socket文件路径,示例: /var/run/docker.sock" />
              </el-form-item>
              <el-form-item>
                  <el-button @click="CheckHostApi(formData)">测试连接</el-button>
              </el-form-item>
          </el-form>
    </el-drawer>
  </div>


</template>

<script setup>
import {
  createHost,
  deleteHost,
  deleteHostByIds,
  updateHost,
  findHost,
  getHostList,
    checkHost
} from '@/api/docker/host'

// 全量引入格式化工具 请按需保留
import { getDictFunc, formatDate, formatBoolean, filterDict ,filterDataSource, ReturnArrImg, onDownloadFile } from '@/utils/format'
import { ElMessage, ElMessageBox } from 'element-plus'
import { ref, reactive } from 'vue'

defineOptions({
    name: 'Host'
})

// 控制更多查询条件显示/隐藏状态
const showAllQuery = ref(false)

// 自动化生成的字典（可能为空）以及字段
const formData = ref({
        name: '',
        description: '',
        enableTls: false,
        tlsCa: '',
        tlsCert: '',
        tlsKey: '',
        skipCert: false,
        apiAddress: '',
        port: 2375,
        type: 1
        })


// 验证规则
const rule = reactive({
    socketPath : [{
        required: true,
        message: '',
        trigger: ['input','blur'],
    }],
               name : [{
                   required: true,
                   message: '',
                   trigger: ['input','blur'],
               },
                 {
                   whitespace: true,
                   message: '不能只输入空格',
                   trigger: ['input', 'blur'],
                 }],
  apiAddress: [{
    required: true,
    message: '',
    trigger: ['input','blur'],
  },
    {
      whitespace: true,
      message: '不能只输入空格',
      trigger: ['input', 'blur'],
    }],
               enableTls : [{
                   required: true,
                   message: '',
                   trigger: ['input','blur'],
               },
              ],
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

const elFormRef = ref()
const elSearchFormRef = ref()

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
    if (searchInfo.value.enableTls === ""){
        searchInfo.value.enableTls=null
    }
    if (searchInfo.value.skipCert === ""){
        searchInfo.value.skipCert=null
    }
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
  const table = await getHostList({ page: page.value, pageSize: pageSize.value, ...searchInfo.value })
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
    ElMessageBox.confirm('确定要删除吗?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
    }).then(() => {
            deleteHostFunc(row)
        })
    }

// 多选删除
const onDelete = async() => {
  ElMessageBox.confirm('确定要删除吗?', '提示', {
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
          IDs.push(item.ID)
        })
      const res = await deleteHostByIds({ IDs })
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
const updateHostFunc = async(row) => {
    const res = await findHost({ ID: row.ID })
    type.value = 'update'
    if (res.code === 0) {
        formData.value = res.data.rehs
        dialogFormVisible.value = true
    }
}


// 删除行
const deleteHostFunc = async (row) => {
    const res = await deleteHost({ ID: row.ID })
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
    type.value = 'create'
    dialogFormVisible.value = true
}

// 关闭弹窗
const closeDialog = () => {
    dialogFormVisible.value = false
    formData.value = {
        name: '',
        description: '',
        enableTls: false,
        tlsCa: '',
        tlsCert: '',
        tlsKey: '',
        skipCert: false,
        apiAddress: '',
        port: 0,
        }
}
// 弹窗确定
const enterDialog = async () => {
     elFormRef.value?.validate( async (valid) => {
             if (!valid) return
              let res
              switch (type.value) {
                case 'create':
                  res = await createHost(formData.value)
                  break
                case 'update':
                  res = await updateHost(formData.value)
                  break
                default:
                  res = await createHost(formData.value)
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
      })
}
const apiAddress = ref(import.meta.env.VITE_BASE_API)

const scriptContent = ref('')
const downloadScript = async() =>{
  const res = await genTlsScript()
  if (res === 0) {
      scriptContent.value = res.data.script
  }
}

const connectTypeOptions = ref([
    {
        label: 'socket',
        value: 0,
    },
    {
        label: 'api',
        value: 1,
    }
])

const CheckHostApi  = async(row) => {

    console.log(row)
    if (row.type === 0 && row.socketPath === ''){
            ElMessage({
                type: 'error',
                message: 'socketPath 参数不能为空'
            })
        return
    }

    if  (row.type === 1 ){

        if (row.apiAddress === '' ){
            ElMessage({
                type: 'error',
                message: 'API地址不能为空'
            })
            return
        }
        if (row.port === 0 ){
            ElMessage({
                type: 'error',
                message: 'API端口不能为空'
            })
            return
        }
    }

    const res = await checkHost(row)
    if (res.code === 0 ){
        if (res.data.success) {
            ElMessage({
                type: 'success',
                message: '测试主机成功'
            })
        }else{
            ElMessage({
                type: 'error',
                message: res.msg
            })
        }
    }
}


</script>

<style>

</style>
