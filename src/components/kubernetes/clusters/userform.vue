<template>
  <div style="overflow: hidden;width: 100%;">
    <el-form ref="FormBlock" :model="formData" :rules="rules" label-width="100px">
      <el-form-item label="用户" prop="user">
        <el-input v-if="formtype === 'edit'" v-model="formData.nickName" disabled autocomplete="off" />
        <el-select
            v-else
            v-model="formData.user_uuids"
            placeholder="请选择用户"
            multiple
            filterable
            style="width: 100%"
        >
          <el-option
              v-for="item in user_list"
              :key="item.userName"
              :label="item.nickName"
              :value="item.uuid"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="集群权限" prop="cluster_roles">
        <el-select
            v-model="formData.cluster_roles"
            placeholder="请选择角色"
            multiple
            filterable
            style="width: 100%"
        >
          <el-option
              v-for="item in clusterRoles_list"
              :key="item.metadata.name"
              :label="item.metadata.name"
              :value="item.metadata.name"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="命名空间角色" prop="namespace_roles">
        <table border="1" cellspacing="0" style="width: 100%">
          <thead>
          <tr>
            <th style="width: 30%">命名空间</th>
            <th style="width: 30%">角色</th>
            <th style="width: 30%">操作</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td align="left">
              <el-button size="small" type="primary" link icon="plus" @click="handleAddRole(item)">添加</el-button>
            </td>
          </tr>
          <tr v-if="formData.namespace_roles.length===0">
            <td style="text-align: center" colspan="4">无数据</td>
          </tr>
          <tr v-for="(item,index) in formData.namespace_roles" :key="index">
            <td>
              <el-select v-model="item.namespace" filterable style="width:90%">
                <el-option v-for="(item,index) in namespace_list" :key="index" :value="item.metadata.name">
                  {{ item.metadata.name }}
                </el-option>
              </el-select>
            </td>
            <td>
              <el-select v-model="item.roles" multiple filterable style="width:90%">
                <el-option v-for="(item,index) in namespaceRoles_list" :key="index" :value="item.metadata.name">
                  {{ item.metadata.name }}
                </el-option>
              </el-select>
            </td>
            <td>
              <el-button type="danger" link icon="delete" size="small" @click="handleDelRole(item)">删除</el-button>
            </td>
          </tr>
          </tbody>
        </table>
      </el-form-item>
    </el-form>
    <div class="dialog-footer" align="right">
      <el-button size="small" @click="closeDialog">取 消</el-button>
      <el-button size="small" type="primary" @click="enterDialog">确 定</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserForm',
}
</script>
<script setup>
import { ref } from 'vue'
import { getUserList } from '@/api/user'
import { getClusterRoles,getClusterListNamespace } from '@/api/kubernetes/cluster/k8sCluster'
// import { getClusterListNamespace } from '@/api/kubernetes/cluster/k8sCluster'
const emit = defineEmits(['close', 'enter'])
const props = defineProps({
  form: {
    default: function() {
      return {}
    },
    type: Object
  },
  data: {
    default: function() {
      return {}
    },
    type: Object
  },
  formtype: {
    default: function() {
      return ''
    },
    type: String
  }
})

const formData = ref({})
const user_list = ref([])
const clusterRoles_list = ref([])
const namespaceRoles_list = ref([])
const namespace_list = ref([])
const cluster_id = ref(0)
const rules = ref({
  user_uuids: [{ required: true, message: '请选择用户', trigger: 'blur' }],
})

// 表单数据初始化
const GetFormData = async() => {
  formData.value = props.form
  if (!formData.value.cluster_roles) {
    formData.value.cluster_roles = []
  }

  if (!formData.value.namespace_roles) {
    formData.value.namespace_roles = []
  }

  cluster_id.value = props.data.id
}

GetFormData()

const ClusterRoles = async() => {
  const res = await getClusterRoles({ cluster_id: cluster_id.value, role_type: 'cluster' })
  if (res.code === 0) {
    clusterRoles_list.value = res.data.roles
  }
}

ClusterRoles()

const NamespaceRoles = async() => {
  const res = await getClusterRoles({ cluster_id: cluster_id.value, role_type: 'namespace' })
  if (res.code === 0) {
    namespaceRoles_list.value = res.data.roles
  }
}

NamespaceRoles()
// 查询
const getUserData = async() => {
  const table = await getUserList({ page: 1, pageSize: 9999 })
  if (table.code === 0) {
    user_list.value = table.data.list
  }
}

getUserData()

// 获取命名空间列表
const GetNamespaceList = async() => {
  const res = await getClusterListNamespace({ 'id': cluster_id.value })
  if (res.code === 0) {
    namespace_list.value = res.data.namespaces
  }
}

GetNamespaceList()

// 关闭
const closeDialog = () => {
  FormBlock.value.resetFields()
  emit('close')
}

// 校验并提交
const FormBlock = ref(null)
const enterDialog = async() => {
  FormBlock.value.validate(async valid => {
    if (valid) {
      formData.value.cluster_id = cluster_id.value
      emit('enter', formData.value)
    }
  })
}

// 添加角色
const handleAddRole = () => {
  formData.value.namespace_roles.push({ 'namespace': '', 'roles': [] })
}

// 删除角色
const handleDelRole = (index) => {
  formData.value.namespace_roles.splice(index, 1)
}
</script>
<style scoped>

</style>
