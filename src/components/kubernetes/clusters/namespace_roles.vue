<template>
  <div>
    <div class="dycloud-btn-list">
      <el-button size="small" link type="primary" icon="plus" @click="handleAdd">添加</el-button>
      <el-button size="small" link type="primary" icon="refresh" @click="handleflush">刷新</el-button>
    </div>
    <div v-if="formData" style="width: 100%">
      <el-table ref="multipleTable" :data="formData" style="width: 100%" tooltip-effect="dark" row-key="ID">
        <el-table-column align="left" label="名称" prop="metadata.name">
          <template #default="scope">
            <span class="operate-span-primary" @click="handleDetail(scope.row)">{{ scope.row.metadata.name }}</span>
          </template>
        </el-table-column>
        <el-table-column align="left" label="内置" prop="metadata.name">
          <template #default="scope">
            <span v-if="scope.row.metadata.annotations.builtin === 'true'">是</span>
            <span v-else>否</span>
          </template>
        </el-table-column>
        <el-table-column align="left" label="存活时间" prop="metadata.creationTimestamp" width="180">
          <template #default="scope">
            <span>{{ AgeFormat(scope.row.metadata.creationTimestamp) }}</span>
          </template>
        </el-table-column>
        <el-table-column align="left" label="操作">
          <template #default="scope">
            <el-button v-if="scope.row.metadata.annotations.builtin !== 'false'" size="small" type="primary" link icon="edit" disabled>编辑</el-button>
            <el-button v-else size="small" type="primary" link icon="edit" @click="handleUpdate(scope.row)">编辑</el-button>
            <el-button v-if="scope.row.metadata.annotations.builtin !== 'false'" type="primary" link icon="delete" size="small" disabled>删除</el-button>
            <el-button v-else type="primary" link icon="delete" size="small" @click="handleDelete(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div v-if="dialogDetailFormVisible">
      <el-dialog
        v-model="dialogDetailFormVisible"
        width="70%"
        :title="title"
        :close-on-press-escape="false"
        :close-on-click-modal="false"
      >
        <RulesBlock :form="form" />
      </el-dialog>
    </div>
    <div v-if="dialogAddFormVisible">
      <el-dialog
        v-model="dialogAddFormVisible"
        width="70%"
        :title="title"
        :close-on-press-escape="false"
        :close-on-click-modal="false"
      >
        <el-form ref="FormBlock" :model="RoleFormData">
          <el-form-item label="名称" prop="name">
            <el-input v-if="optionType === 'edit'" v-model="RoleFormData.name" disabled autocomplete="off" />
            <el-input v-else v-model="RoleFormData.name" autocomplete="off" />
          </el-form-item>
          <el-form-item label="描述" prop="description">
            <el-input v-model="RoleFormData.description" autocomplete="off" />
          </el-form-item>
          <el-form-item label="规则" prop="rules">
            <table border="1" cellspacing="0" style="width: 100%">
              <thead>
                <tr>
                  <th style="width: 30%">API 组</th>
                  <th style="width: 30%">资源</th>
                  <th style="width: 30%">动作</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td align="left">
                    <el-button size="small" type="primary" link icon="plus" @click="handleAddRule(item)">添加</el-button>
                  </td>
                </tr>
                <tr v-if="RoleFormData.rules.length===0">
                  <td style="text-align: center" colspan="4">无数据</td>
                </tr>
                <tr v-for="(item,index) in RoleFormData.rules" :key="index">
                  <td style="text-align: center">
                    <el-select v-model="item.apiGroups" filterable style="width: 90%" multiple @change="loadResources(item)">
                      <el-option v-for="(groupName,index) in groups" :key="index" :value="groupName">
                        {{ groupName }}
                      </el-option>
                    </el-select>
                  </td>
                  <td>
                    <el-select v-model="item.resources" multiple filterable style="width:90%" @change="loadVerbs(item)">
                      <el-option v-for="(item,index) in item.resourceOptions" :key="index" :value="item">
                        {{ item }}
                      </el-option>
                    </el-select>
                  </td>
                  <td>
                    <el-select v-model="item.verbs" multiple filterable style="width:90%">
                      <el-option v-for="(item,index) in item.verbOptions" :key="index" :value="item">
                        {{ item }}
                      </el-option>
                    </el-select>
                  </td>
                  <td>
                    <el-button type="danger" link icon="delete" size="small" @click="handleDelRule(item)">删除</el-button>
                  </td>
                </tr>
              </tbody>
            </table>
          </el-form-item>
          <div class="dialog-footer" align="center">
            <el-button size="small" @click="closeDialog">取 消</el-button>
            <el-button size="small" type="primary" @click="enterDialog">确 定</el-button>
          </div>
        </el-form>
      </el-dialog>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ClusterRoles',
}
</script>
<script setup>
import { ref } from 'vue'
import { AgeFormat } from '@/utils/age'
import {
  getClusterRoles,
  getClusterApiGroups,
  createClusterRole,
  updateClusterRole,
  deleteClusterRole,
} from '@/api/kubernetes/cluster/k8sCluster'
import RulesBlock from './rules.vue'
import { ElMessage, ElMessageBox } from 'element-plus'
const props = defineProps({
  form: {
    default: function() {
      return {}
    },
    type: Object
  },
})

const groups = ref([])
const formData = ref([])
const ClusterRoles = async() => {
  const res = await getClusterRoles({ cluster_id: props.form.id, role_type: 'namespace' })
  if (res.code === 0) {
    formData.value = res.data.roles
  }
}

const groupRootData = ref([])
const cluster_id = ref(0)
const ClusterApiGroups = async() => {
  const res = await getClusterApiGroups({ cluster_id: cluster_id.value, api_type: 'namespace' })
  if (res.code === 0) {
    groupRootData.value = res.data.groups
    for (const g of res.data.groups) {
      groups.value.push(g.group === '' ? 'core' : g.group)
    }
  }
}

// 表单数据初始化
const GetFormData = () => {
  cluster_id.value = props.form.id
  ClusterRoles()
  ClusterApiGroups()
}

GetFormData()

// 详情
const dialogDetailFormVisible = ref(false)
const form = ref({})
const optionType = ref('')
const title = ref('角色详情')
const handleDetail = (raw) => {
  form.value = raw
  dialogDetailFormVisible.value = true
}

// 创建
const RoleFormData = ref({})
const dialogAddFormVisible = ref(false)
const handleAdd = () => {
  optionType.value = 'create'
  RoleFormData.value = {
    name: '',
    rules: [],
    description: '',
  }
  title.value = '创建集群角色'
  dialogAddFormVisible.value = true
}

// 刷新
const handleflush = () => {
  ClusterRoles()
}

// 创建规则
const ruleData = ref({})
const handleAddRule = () => {
  for (const nr of RoleFormData.value.rules) {
    if (nr.apiGroups.length === 0 || nr.resources.length === 0 || nr.verbs.length === 0) {
      ElMessage({
        type: 'error',
        message: '角色规则不能为空!'
      })
      return
    }
  }

  ruleData.value = { apiGroups: [], resources: [], verbs: [] }
  RoleFormData.value.rules.push(ruleData.value)
}

// 删除规则
const handleDelRule = (value) => {
  const index = RoleFormData.value.rules.indexOf(value)
  if (index > -1) {
    RoleFormData.value.rules.splice(index, 1)
  }
}

// 处理resource资源
const loadResources = (row) => {
  const resources = []
  for (const currentGroup of row.apiGroups) {
    const currentG = currentGroup === 'core' ? '' : currentGroup
    for (const group of groupRootData.value) {
      if (currentG === group.group) {
        for (const resource of group.resources) {
          resources.push(resource.resource)
        }
      }
    }
  }
  const map = new Map()
  row.resourceOptions = resources.filter((key) => !map.has(key) && map.set(key, 1))
}

// 处理verb
const loadVerbs = (row) => {
  let verbs = []
  for (const currentResouce of row.resources) {
    for (const group of groupRootData.value) {
      for (const resource of group.resources) {
        if (currentResouce === resource.resource) {
          verbs = resource.verbs
        }
      }
    }
  }
  verbs.unshift('*')
  const map = new Map()
  row.verbOptions = verbs.filter((key) => !map.has(key) && map.set(key, 1))
}

// 关闭
const closeDialog = () => {
  RoleFormData.value = {
    name: '',
    rules: [],
    description: '',
  }
  dialogAddFormVisible.value = false
}

// 提交
const enterDialog = async() => {
  const req = {
    cluster_id: cluster_id.value,
    metadata: {
      name: RoleFormData.value.name,
      annotations: {
        description: RoleFormData.value.description,
      },
      labels: {
        'devops/role-type': 'namespace',
      },
    },
    rules: [],
  }
  for (const rule of RoleFormData.value.rules) {
    req.rules.push({
      apiGroups: rule.apiGroups,
      resources: rule.resources,
      verbs: rule.verbs,
    })
  }

  let res
  switch (optionType.value) {
    case 'create':
      res = await createClusterRole(req)
      if (res.code === 0) {
        ElMessage({
          type: 'success',
          message: '角色添加成功!'
        })
      }
      dialogAddFormVisible.value = false
      break
    case 'edit':
      res = await updateClusterRole(req)
      if (res.code === 0) {
        ElMessage({
          type: 'success',
          message: '角色更新成功!'
        })
      }
      dialogAddFormVisible.value = false
      break
    default:
      res = await createClusterRole(req)
      if (res.code === 0) {
        ElMessage({
          type: 'success',
          message: '角色添加成功!'
        })
      }
      dialogAddFormVisible.value = false
      break
  }
  handleflush()
}

// 更新
const handleUpdate = (row) => {
  optionType.value = 'edit'
  RoleFormData.value = {
    name: row.metadata.name,
    description: row.metadata.annotations['description'],
    rules: row.rules,
  }
  for (const rule of RoleFormData.value.rules) {
    for (let i = 0; i < rule.apiGroups.length; i++) {
      if (rule.apiGroups[i] === '') {
        rule.apiGroups[i] = 'core'
      }
    }
  }
  dialogAddFormVisible.value = true
}

// 删除
const handleDelete = async(row) => {
  ElMessageBox.confirm('您确定要删除  ' + row.metadata.name + ' 角色？, 是否继续?', '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning'
  })
    .then(async() => {
      row.cluster_id = cluster_id.value
      const res = await deleteClusterRole(row)
      if (res.code === 0) {
        ElMessage({
          type: 'success',
          message: res.msg
        })
      }
      ClusterRoles()
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
.operate-span-primary {
  color: var(--el-color-primary);
  cursor: pointer;
  font-weight:bold;
}
</style>
