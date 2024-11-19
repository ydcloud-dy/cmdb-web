<template>
  <div>
    <el-table
        ref="multipleTable"
        :data="tableData"
        style="width: 100%"
        tooltip-effect="dark"
        row-key="ID"
        @sort-change="sortChange"
        @selection-change="handleSelectionChange"
        highlight-current-row

    >
      <el-table-column type="selection" width="55" />
      <el-table-column align="left" label="ID" prop="ID" width="80" sortable="custom" />
      <!-- 应用名列，添加 el-link 以实现跳转 -->
      <el-table-column align="left" label="应用名" prop="appName" sortable="custom">
        <template #default="scope">
          <el-link @click.prevent="goToDetail(scope.row.ID)" style="cursor: pointer;">{{ scope.row.appName }}</el-link>
        </template>
      </el-table-column>
      <el-table-column align="left" label="应用标识" prop="appCode" />
      <el-table-column align="left"  label="语言" prop="language" />
      <el-table-column align="left" label="默认分支" prop="branch" />

      <!-- 可点击的仓库地址列 -->
      <el-table-column align="left" label="仓库地址" prop="gitRepo" show-overflow-tooltip>
        <template #default="scope">
          <el-link :href="scope.row.gitRepo" target="_blank">{{ scope.row.gitRepo }}</el-link>
        </template>
      </el-table-column>


      <el-table-column align="left" label="创建时间" prop="CreatedAt" :formatter="formatDate" />

      <el-table-column align="left" label="操作">
        <template #default="scope">
          <el-button size="small" type="primary" link icon="edit" @click="handleUpdate(scope.row)">编辑</el-button>
          <el-popover v-model="scope.row.visible" placement="top">
            <p>确定要删除吗？</p>
            <div style="text-align: right; margin-top: 8px;">
              <el-button size="small" type="primary" link @click="scope.row.visible = false">取消</el-button>
              <el-button type="primary" size="small" @click="handleDelete(scope.row)">确定</el-button>
            </div>
            <template #reference>
              <el-button type="primary" link icon="delete" size="small" @click="scope.row.visible = true">删除</el-button>
            </template>
          </el-popover>
        </template>
      </el-table-column>
    </el-table>
    <!-- 编辑弹窗 -->
    <el-dialog title="修改应用" v-model="editDialogVisible" width="700px">
      <el-form :model="editForm" :rules="editFormRules" ref="editFormRef" label-width="120px">
        <h3>基本信息</h3>
        <el-form-item label="代码仓库" prop="gitRepo">
          <el-input v-model="editForm.gitRepo" placeholder="请输入代码仓库地址" />
        </el-form-item>
        <el-form-item label="主干分支" prop="branch">
          <el-input v-model="editForm.branch" placeholder="请输入主干分支" />
        </el-form-item>
        <el-form-item label="应用名称" prop="appName">
          <el-input v-model="editForm.appName" placeholder="请输入应用名称" />
        </el-form-item>
        <el-form-item label="应用标识" prop="appCode">
          <el-input v-model="editForm.appCode" placeholder="请输入应用标识" />
        </el-form-item>
        <el-form-item label="应用描述" prop="appDesc">
          <el-input
              v-model="editForm.appDesc"
              type="textarea"
              maxlength="100"
              show-word-limit
              placeholder="请输入应用描述"
          />
        </el-form-item>

        <h3>研发信息</h3>
        <el-form-item label="负责人" prop="owner">
          <el-select v-model="editForm.owner" multiple placeholder="请选择负责人">
            <el-option
                v-for="user in editFormUsers"
                :key="user.ID"
                :label="`${user.userName} / ${user.nickName}`"
                :value="user.ID"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="开发" prop="developers">
          <el-select v-model="editForm.developers" multiple placeholder="请选择开发人员">
            <el-option
                v-for="user in editFormUsers"
                :key="user.ID"
                :label="`${user.userName} / ${user.nickName}`"
                :value="user.ID"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="程序设计语言" prop="language">
          <el-select v-model="editForm.language" placeholder="请选择程序设计语言">
            <el-option label="Java" value="java" />
            <el-option label="Golang" value="golang" />
            <el-option label="Python" value="python" />
          </el-select>
        </el-form-item>
<!--        <el-form-item label="是否核心应用" prop="isCore">-->
<!--          <el-radio-group v-model="editForm.isCore">-->
<!--            <el-radio :label="false">否</el-radio>-->
<!--            <el-radio :label="true">是</el-radio>-->
<!--          </el-radio-group>-->
<!--        </el-form-item>-->
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="editDialogVisible = false">取消</el-button>
        <el-button type="primary" @click="submitEdit">保存</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import dayjs from 'dayjs'
import { toSQLLine } from '@/utils/stringFun'
import { useRouter } from 'vue-router' // 使用 Vue Router 进行页面跳转
import { ElMessage} from "element-plus";
import { describeApplications} from "@/api/cicd/applications";

const router = useRouter() // 初始化 router

const emit = defineEmits(['update', 'delete', 'search', 'region', 'test'])
defineProps({
  tableData: {
    default: function() {
      return []
    },
    type: Array
  },
})
// 控制弹窗是否显示
const editDialogVisible = ref(false)

// 编辑表单的数据
const editForm = ref({
  ID: '',
  gitRepo: '',
  branch: '',
  appName: '',
  appCode: '',
  appDesc: '',
  language: '',
  owner: [],
})
// 表单校验规则
const editFormRules = {
  gitRepo: [{ required: true, message: '代码仓库不能为空', trigger: 'blur' }],
  branch: [{ required: true, message: '主干分支不能为空', trigger: 'blur' }],
  appCode: [{ required: true, message: '应用标识不能为空', trigger: 'blur' }],
  appName: [{ required: true, message: '应用名称不能为空', trigger: 'blur' }],
  owner: [{ required: true, message: '负责人不能为空', trigger: 'change' }],
  developers: [{ required: true, message: '开发人员不能为空', trigger: 'change' }],
  language: [{ required: true, message: '程序设计语言不能为空', trigger: 'change' }],
}
// 用户列表
const editFormUsers = ref([])
// 日期格式化函数
const formatDate = (row, column, cellValue) => {
  return cellValue ? dayjs(cellValue).format('YYYY-MM-DD HH:mm:ss') : ''
}

// 搜索排序
const searchInfo = ref({})
const sortChange = ({ prop, order }) => {
  if (prop) {
    if (prop === 'ID') {
      prop = 'id'
    }
    searchInfo.value.orderKey = toSQLLine(prop)
    searchInfo.value.desc = order === 'descending'
  }
  emit('search', searchInfo.value)
}

// 更新
const handleUpdate = async (row) => {
  try {
    const response = await describeApplications(row.ID) // 调用获取详情的 API
    if (response.code === 0) {
      const data = response.data

      // 填充表单
      editForm.ID = data.ID
      editForm.gitRepo = data.gitRepo
      editForm.branch = data.branch
      editForm.appName = data.appName
      editForm.appCode = data.appCode
      editForm.appDesc = data.appDesc
      editForm.language = data.language
      editForm.owner = data.owner.map((owner) => owner.ID) // 映射 owner 到表单

      editDialogVisible.value = true // 显示弹窗
    } else {
      ElMessage.error(response.msg || '获取应用详情失败！')
    }
  } catch (error) {
    console.error('获取应用详情失败：', error)
    ElMessage.error('请求失败，请稍后重试！')
  }
  // emit('update', value)
}

// 同步Region
const handleUpdateRegion = (value) => {
  emit('region', value)
}
const handleTest = (value) => {
  emit('test', value)
}
// 行点击事件处理
const handleRowClick = (row) => {
  // 使用 Vue Router 跳转到详情页，并将行的 ID 作为参数传递
  router.push({ name: 'applicationDetail', params: { id: row.ID } })
}
// 跳转到详情页
const goToDetail = (id) => {
  router.push({ name: 'applicationDetail', query: { id: id } })
}
// 删除
const handleDelete = (value) => {
  emit('delete', value)
}

// 批量操作
const handleSelectionChange = (value) => {
  emit('select', value)
}

</script>

<style scoped>
.dialog-footer {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
}
</style>
