<template>
  <div>
    <div class="dycloud-btn-list">
      <el-button size="small" link type="primary" icon="plus" @click="handleAdd">添加</el-button>
      <el-button size="small" link type="primary" icon="delete" @click="handleDel">删除</el-button>
      <el-button size="small" link type="primary" icon="refresh" @click="handleflush">刷新</el-button>
    </div>
    <el-table ref="multipleTable" :data="formData.users" style="width: 100%" tooltip-effect="dark" row-key="ID" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55" />
      <el-table-column align="left" label="英文名称" prop="userName" />
      <el-table-column align="left" label="名称" prop="nickName" />
      <el-table-column align="left" label="操作">
        <template #default="scope">
          <el-button size="small" type="primary" link icon="edit" @click="handleKubeConfig(scope.row)">凭据</el-button>
          <el-button size="small" type="primary" link icon="edit" @click="handleUpdate(scope.row)">变更</el-button>
          <el-button type="primary" link icon="delete" size="small" @click="handleDelete(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <div v-if="dialogUserFormVisible">
      <el-dialog
          v-model="dialogUserFormVisible"
          width="60%"
          :title="title"
      >
        <Userform :form="formOneData" :formtype="formtype" :data="formData" @close="closeDialog" @enter="enterDialog" />
      </el-dialog>
    </div>
    <div v-if="dialogYamlVisible">
      <el-dialog
          v-model="dialogYamlVisible"
          width="70%"
          :title="title"
      >
        <template #default>
          <div class="dialog-footer">
            <el-row>
              <el-col :span="24">
                <div v-if="readOnly" class="downloadKubeconfig">
                  <el-button class="btn" size="small" type="primary" link icon="Download" @click="handledownloadKubeconfig(kubeconfig)">下载</el-button>
                </div>
              </el-col>
            </el-row>
            <div>
              <el-button type="primary" link icon="CopyDocument" size="small" class="copydocument" @click="handleCredentialCopy(kubeconfig)">复制</el-button>
            </div>
            <YamlBlock :data="kubeconfig" :read-only="readOnly" />
          </div>
        </template>
      </el-dialog>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Users',
}
</script>
<script setup>
import { ref } from 'vue'
import YamlBlock from '../yaml/index.vue'
import Userform from './userform.vue'
import {
  getClustersById,
  createClusterUser,
  updateClusterUser,
  deleteClusterUser,
} from '@/api/kubernetes/cluster/k8sCluster'
import { ElMessage, ElMessageBox } from 'element-plus'
import yaml from 'js-yaml'

const props = defineProps({
  form: {
    default: function() {
      return {}
    },
    type: Object
  },
})

// 获取cluster数据
const dialogUserFormVisible = ref(false)
const dialogYamlVisible = ref(false)
const formData = ref({})
const formOneData = ref({})
const formtype = ref('')
const readOnly = ref(true)
const GetCluster = async(raw) => {
  console.log(raw)
  console.log("================================")
  console.log(raw.id)
  const res = await getClustersById({ id: raw.id })
  console.log(res)
  console.log(res.data.cluster,"fffffff")
  if (res.code === 0) {
    formData.value = res.data.cluster
  }
}

// 表单数据初始化
const cluster_id = ref(0)
const GetFormData = async() => {
  formData.value = props.form
  cluster_id.value = props.form.id
  GetCluster(formData.value)
}

GetFormData()

// 更新
const handleUpdate = async(row) => {
  formtype.value = 'edit'
  formOneData.value = row
  if (typeof row.cluster_roles === 'string' && row.cluster_roles !== '') {
    try {
      formOneData.value.cluster_roles = JSON.parse(row.cluster_roles)
    } catch (error) {
      console.error('JSON解析错误:', error)
    }
  }

  if (typeof row.namespace_roles === 'string' && row.namespace_roles !== '') {
    try {
      formOneData.value.namespace_roles = JSON.parse(row.namespace_roles)
    } catch (error) {
      console.error('JSON解析错误:', error)
    }
  }

  dialogUserFormVisible.value = true
}

// 删除
const handleDelete = async(row) => {
  ElMessageBox.confirm('您确定要删除  ' + row.nickName + ' 用户？, 是否继续?', '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning'
  })
      .then(async() => {
        const res = await deleteClusterUser({ 'cluster_id': cluster_id.value, 'user_uuids': [row.uuid] })
        if (res.code === 0) {
          ElMessage({
            type: 'success',
            message: res.msg
          })
        }
        handleflush()
      })
      .catch(() => {
        ElMessage({
          type: 'info',
          message: '已取消删除!'
        })
      })
}

// 添加
const title = ref('')
const handleAdd = () => {
  formtype.value = 'add'
  title.value = '添加用户授权'
  formData.value.users = []
  dialogUserFormVisible.value = true
}

// 关闭模态框
const closeDialog = () => {
  dialogUserFormVisible.value = false
  dialogYamlVisible.value = false
  formOneData.value = {}
}

// 提交数据
const enterDialog = async(value) => {
  let res
  switch (formtype.value) {
    case 'create':
      res = await createClusterUser(value)
      if (res.code === 0) {
        ElMessage({
          type: 'success',
          message: '用户添加中，请稍后刷新!'
        })
      }
      dialogUserFormVisible.value = false
      handleflush()
      break
    case 'edit':
      res = await updateClusterUser(value)
      if (res.code === 0) {
        ElMessage({
          type: 'success',
          message: '角色更新成功!'
        })
      }
      dialogUserFormVisible.value = false
      handleflush()
      break
    default:
      res = await createClusterUser(value)
      if (res.code === 0) {
        ElMessage({
          type: 'success',
          message: '用户添加中，请稍后刷新!'
        })
      }
      dialogUserFormVisible.value = false
      handleflush()
      break
  }
}

// 刷新
const handleflush = () => {
  closeDialog()
  GetFormData()
}

// 凭据
const kubeconfig = ref('')
const handleKubeConfig = (row) => {
  title.value = '用户 ' + row.nickName + '  的凭据'
  kubeconfig.value = JSON.parse(row.kube_config)
  dialogYamlVisible.value = true
}

// 凭据转YAML
const KubeconfigToYAML = (raw) => {
  if (JSON.stringify(raw) !== '{}') {
    return yaml.dump(raw)
  }
}

// 下载kubeconfig
const handledownloadKubeconfig = (raw) => {
  // 创建 Blob 对象
  const blob = new Blob([KubeconfigToYAML(raw)], { type: 'application/yaml' })

  // 创建一个临时链接元素
  const link = document.createElement('a')
  link.href = URL.createObjectURL(blob)

  // 设置链接的下载属性和文件名
  link.download = 'config'

  // 模拟点击链接来触发下载
  link.click()

  // 释放 Blob 对象的 URL
  URL.revokeObjectURL(link.href)
}

// 拷贝凭据
const handleCredentialCopy = (raw) => {
  const textArea = document.createElement('textarea')
  textArea.value = KubeconfigToYAML(raw)
  document.body.appendChild(textArea)
  textArea.select()
  document.execCommand('copy')
  document.body.removeChild(textArea)
  ElMessage({
    type: 'success',
    message: '内容已经拷贝到剪贴板'
  })
}

// 批量操作
const users = ref([])
const userNames = ref('')
const handleSelectionChange = (row) => {
  userNames.value = ''
  row.forEach(function(item) {
    if (item.nickName) {
      userNames.value += item.nickName + ' , '
    }
  })
  users.value = row
}

// 批量删除
const handleDel = () => {
  if (users.value.map(item => item.uuid).length === 0) {
    ElMessage({
      message: '请选择要删除的用户！',
      type: 'warning',
    })
    return
  }

  ElMessageBox.confirm('您确定要删除  ' + userNames.value + ' 这些用户？, 是否继续?', '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning'
  })
      .then(async() => {
        const res = await deleteClusterUser({ 'cluster_id': cluster_id.value, 'user_uuids': users.value.map(item => item.uuid) })
        if (res.code === 0) {
          ElMessage({
            type: 'success',
            message: res.msg
          })
        }
        handleflush()
      })
      .catch(() => {
        ElMessage({
          type: 'info',
          message: '已取消删除!'
        })
      })
}
</script>
<style scoped>
.downloadKubeconfig {
  text-align: right;
}
.copydocument {
  position: absolute;
  top: -33%;
  left:83%;
  width: 0;
  height: 100%;
  z-index: 1;
}
</style>
