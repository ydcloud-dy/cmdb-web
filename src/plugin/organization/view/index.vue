<template>
  <div class="p-4">
    <div class="dycloud-organization-box">
      <div class="dycloud-organization-box-left">
        <div class="toolbar">
          <el-button
            type="primary"
            @click="addOrg(0)"
          >新增组织</el-button>
        </div>
        <div class="tree-body">
          <el-tree
            ref="treeRef"
            :data="treeData"
            default-expand-all
            node-key="ID"
            :props="defaultProps"
            :expand-on-click-node="false"
            highlight-current
            @current-change="getNowOrg"
          >
            <template #default="{ node ,data }">
              <span class="tree-body-tree-node">
                <el-tooltip
                  class="box-item"
                  effect="dark"
                  :show-after="600"
                  :content="node.label"
                  placement="top-start"
                >
                  <span class="tree-body-tree-node-label">{{ node.label }}</span>
                </el-tooltip>
                <span>
                  <el-dropdown>
                    <span class="el-more-filled">
                      <el-icon><more-filled /></el-icon>
                    </span>
                    <template #dropdown>
                      <el-dropdown-menu>
                        <el-dropdown-item @click="addOrg(data.ID)">
                          <el-icon><Plus /></el-icon>
                          新增子组织</el-dropdown-item>
                        <el-dropdown-item @click="editOrg(data)">
                          <el-icon><CirclePlus /></el-icon>
                          编辑组织</el-dropdown-item>
                        <el-dropdown-item @click="deleteOrg(data)">
                          <el-icon><Delete /></el-icon>
                          删除组织</el-dropdown-item>
                      </el-dropdown-menu>
                    </template>
                  </el-dropdown>
                </span>
              </span>
            </template>
          </el-tree>
        </div>
      </div>
      <div class="dycloud-organization-box-right">
        <div class="toolbar">
          <div class="toolbar-search">
            <el-input
              v-model="userSearch.userName"
              placeholder="请输入要搜索的用户名"
            />
            <el-button
              type="primary"
              @click="getUserTable"
            >搜索</el-button>
          </div>
          <div>
            <el-button
              type="primary"
              @click="openTransferOrgUser()"
            >更换组织</el-button>
            <el-button
              type="primary"
              @click="deleteUser(selectData.map(item=>item.sysUser.ID))"
            >踢出组织</el-button>
            <el-button
              type="primary"
              @click="addUser"
            >人员入职</el-button>
          </div>

        </div>
        <div class="table-body">
          <el-table
            :data="userTable"
            @selection-change="handleSelectionChange"
          >
            <el-table-column
              type="selection"
              width="55"
            />
            <el-table-column
              prop="sysUser.nickName"
              label="姓名"
              width="120"
            />
            <el-table-column
              prop="sysUser.authority.authorityName"
              label="用户角色"
              width="120"
            />
            <el-table-column
              prop="isAdmin"
              label="是否管理员"
              width="120"
            >
              <template #default="{row}">
                {{ row.isAdmin?"是":"否" }}
              </template>
            </el-table-column>
            <el-table-column
              label="操作列"
              min-width="220"
            >
              <template #default="{row}">
                <el-button
                  link
                  type="primary"
                  @click="openTransferOrgUser(row.sysUser.ID)"
                > 更换组织</el-button>
                <el-button
                  link
                  type="primary"
                  @click="deleteUser([row.sysUser.ID])"
                > 踢出组织</el-button>
                <el-button
                  v-if="!row.isAdmin"
                  link
                  type="primary"
                  @click="setAdmin(row.sysUser.ID,true)"
                > 设置管理员</el-button>
                <el-button
                  v-else
                  link
                  type="primary"
                  @click="setAdmin(row.sysUser.ID,false)"
                > 取消管理员</el-button>
              </template>
            </el-table-column>
          </el-table>
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
        </div>

      </div>
    </div>
    <el-dialog
      v-model="orgDialog"
      :before-close="orgClear"
      title="组织管理"
    >
      <el-form
        :model="orgForm"
        label-width="120px"
      >
        <el-form-item label="父组织">
          <el-tree-select
            v-model="orgForm.parentID"
            :data="[{ID:0,name:'根组织'},...treeData]"
            check-strictly
            :props="defaultProps"
            :render-after-expand="false"
          />
        </el-form-item>
        <el-form-item label="组织名称">
          <el-input v-model="orgForm.name" />
        </el-form-item>
      </el-form>
      <template #footer>
        <el-button @click="orgClear">取消</el-button>
        <el-button
          type="primary"
          @click="orgEnter"
        >确认</el-button>
      </template>
    </el-dialog>

    <el-dialog
      v-model="orgUserDialog"
      title="组织人员"
    >
      <el-form
        v-model="orgUserForm"
        label-width="120px"
      >
        <el-form-item label="组织">
          <el-tree-select
              v-model="orgUserForm.organizationID"
              :data="[{ID:0,name:'根组织'},...treeData]"
              check-strictly
              :props="defaultProps"
              :render-after-expand="false"
              disabled
          />
        </el-form-item>
        <el-form-item label="成员">
          <el-select
            v-model="orgUserForm.sysUserIDS"
            placeholder="请选择需要加入组织的成员"
            multiple
            filterable
          >
            <el-option
              v-for="item in userList"
              :key="item.ID"
              :disabled="disabledUserMap[item.ID]"
              :label="item.nickName"
              :value="item.ID"
            />
          </el-select>
        </el-form-item>
      </el-form>
      <template #footer>
        <el-button @click="orgUserClear">取消</el-button>
        <el-button
          type="primary"
          @click="orgUserEnter"
        >确定</el-button>
      </template>
    </el-dialog>

    <el-dialog
      v-model="transferOrgUserFlag"
      title="更换组织"
    >
      <el-form
        v-model="targetOrg"
        label-width="120px"
      >
        <el-form-item label="父组织">
          <el-tree-select
            v-model="targetOrg.toOrganizationID"
            :data="[{ID:0,name:'根组织'},...treeData]"
            check-strictly
            :props="defaultProps"
            :render-after-expand="false"
          />
        </el-form-item>
      </el-form>
      <template #footer>
        <el-button @click="cloesTransferOrgUser">取消</el-button>
        <el-button
          type="primary"
          @click="transferOrgUser"
        >确定</el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script>
import { ref } from 'vue'
import { createOrganization,
  deleteOrganization,
  getOrganizationTree,
  updateOrganization,
  findOrganization,
  findOrgUserAll,
  createOrgUser,
  findOrgUserList,
  setOrgUserAdmin,
  deleteOrgUserApi,
  transferOrgUserApi
} from '@/plugin/organization/api/organization'
import { getUserList } from '@/api/user.js'
import { ElMessageBox, ElMessage } from 'element-plus'
export default {
  name: 'Organization',
}
</script>

<script setup>
const defaultProps = {
  value: 'ID',
  children: 'children',
  label: 'name',
}

const currentOrg = ref(0)

const data = ref([])

const orgDialog = ref(false)

const selectData = ref([])

// 获取组织树
const treeData = ref([])

const getOrganizationTreeFunc = async() => {
  const res = await getOrganizationTree()
  if (res.code === 0 && res.data !== null) {
    treeData.value = res.data
  }
}

const orgForm = ref({
  ID: 0,
  parentID: 0,
  name: '',
})

// 组织弹窗操作标记
const orgType = ref('add')

// 新增组织或子组织
const addOrg = (ID) => {
  orgForm.value = {
    ID: 0,
    parentID: ID,
    name: '',
  }
  orgType.value = 'add'
  orgDialog.value = true
}

// 组织弹窗关闭
const orgClear = () => {
  orgForm.value = {
    ID: 0,
    parentID: 0,
    name: '',
  }
  setDisabled(treeData.value, false)
  orgDialog.value = false
}

const setDisabled = (treeNodes, disabled) => {
  treeNodes.forEach((node) => {
    node.disabled = disabled
    if (node.children) {
      setDisabled(node.children, disabled)
    }
  })
}

// 当前ID和其子组织全部disabled
const findNode = (nodes, ID) => {
  console.log(1)
  nodes.forEach((node) => {
    if (node.ID === ID) {
      setDisabled([node], true)
    }
    if (node.children) {
      findNode(node.children, ID)
    }
  })
}

// 编辑组织弹窗打开
const editOrg = async(row) => {
  const res = await findOrganization({ ID: row.ID })
  if (res.code === 0) {
    findNode(treeData.value, row.ID)
    orgForm.value = {
      ID: res.data.reorg.ID,
      parentID: res.data.reorg.parentID,
      name: res.data.reorg.name,
    }
    orgType.value = 'edit'
    orgDialog.value = true
  }
}

// 删除组织
const deleteOrg = async(row) => {
  ElMessageBox.confirm('确定删除该组织吗？', '提示', {
    type: 'warning',
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    showClose: false,
  }).then(async() => {
    const res = await deleteOrganization({
      ID: row.ID,
    })
    if (res.code === 0) {
      ElMessage.success('删除成功')
      getOrganizationTreeFunc()
    }
  }).catch(() => {
    ElMessage.info('取消删除')
  })
}

// 对选中组织进行编辑或添加操作
const orgEnter = async() => {
  switch (orgType.value) {
    case 'add':
    {
      const res = await createOrganization(orgForm.value)
      if (res.code === 0) {
        orgClear()
        getOrganizationTreeFunc()
      }
      break
    }
    case 'edit':
    {
      const res = await updateOrganization(orgForm.value)
      if (res.code === 0) {
        orgClear()
        getOrganizationTreeFunc()
      }
      break
    }
    default:
      break
  }
}

// 左侧组织树操作 end

// 右侧人员操作

// 多选人员
const handleSelectionChange = (val) => {
  selectData.value = val
}

const disabledUserMap = ref({})

// 人员操作弹窗
const orgUserDialog = ref(false)

// 人员操作弹窗数据
const orgUserForm = ref({
  sysUserIDS: [],
  organizationID: '',
})

// 增加当前组织用户
const addUser = async() => {
  disabledUserMap.value = {}
  const res = await findOrgUserAll({ organizationID: currentOrg.value })
  if (res.code === 0) {
    res.data && res.data.forEach(item => {
      disabledUserMap.value[item] = true
    })
  }
  orgUserForm.value.organizationID = currentOrg.value
  orgUserDialog.value = true
}

// 切换选中组织
const getNowOrg = (e) => {
  currentOrg.value = e.ID
  getUserTable()
}

// 组织树组件获取
const treeRef = ref(null)

// 设置为管理员
const setAdmin = async(id, flag) => {
  const res = await setOrgUserAdmin({
    sysUserID: id,
    isAdmin: flag
  })
  if (res.code === 0) {
    ElMessage.success('设置成功')
    getUserTable()
  }
}

// 当前组织用户列表
const userTable = ref([])

const page = ref(1)
const pageSize = ref(10)
const total = ref(0)

const handleCurrentChange = (e) => {
  page.value = e
  getUserTable()
}

const handleSizeChange = (e) => {
  pageSize.value = e
  getUserTable()
}

// 获取当前组织用户列表
const getUserTable = async() => {
  const res = await findOrgUserList({ organizationID: currentOrg.value, page: page.value, pageSize: pageSize.value, ...userSearch.value })
  if (res.code === 0) {
    page.value = res.data.page
    pageSize.value = res.data.pageSize
    total.value = res.data.total
    userTable.value = res.data.list
  }
}

// 所有用户列表
const userList = ref([])

// 组织用户搜索
const userSearch = ref({
  userName: '',
})

// 踢出组织
const deleteUser = async(sysUserIDS) => {
  ElMessageBox.confirm('确定删除选中用户吗？', '提示', {
    type: 'warning',
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    showClose: false,
  }).then(async() => {
    const res = await deleteOrgUserApi({ sysUserIDS, organizationID: currentOrg.value })
    if (res.code === 0) {
      ElMessage.success('删除成功')
      getUserTable()
      selectData.value = []
    }
  }).catch(() => {
    ElMessage.info('取消删除')
  })
}

// 获取所有用户（用于弹窗内选择）
const getAllUser = async(e) => {
  const res = await getUserList({ page: 1, pageSize: 9999 })
  userList.value = res.data.list
  total.value = res.data.total
}

// 成员入职功能关闭弹窗
const orgUserClear = () => {
  orgUserForm.value.sysUserIDS = []
  orgUserDialog.value = false
}

// 切换组织功能数据
const targetOrg = ref({
  sysUserIDS: [],
  organizationID: 0,
  toOrganizationID: undefined,
})

// 切换组织弹窗标记
const transferOrgUserFlag = ref(false)

// 打开切换组织弹窗
const openTransferOrgUser = (sysUserID) => {
  targetOrg.value.organizationID = currentOrg.value
  if (sysUserID) {
    targetOrg.value.sysUserIDS = [sysUserID]
  } else {
    targetOrg.value.sysUserIDS = selectData.value.map(item => item.sysUser.ID)
  }
  transferOrgUserFlag.value = true
}

// 关闭切换组织弹窗
const cloesTransferOrgUser = () => {
  transferOrgUserFlag.value = false
  targetOrg.value.sysUserIDS = []
  targetOrg.value.toOrganizationID = undefined
}

// 成员切换组织
const transferOrgUser = async() => {
  const res = await transferOrgUserApi(targetOrg.value)
  if (res.code === 0) {
    ElMessage.success('转移成功')
    getUserTable()
    selectData.value = []
    cloesTransferOrgUser()
  }
}

// 添加组织成员
const orgUserEnter = async() => {
  orgUserDialog.value = false
  const res = await createOrgUser(orgUserForm.value)
  if (res.code === 0) {
    ElMessage.success('添加成功')
    orgUserClear()
    getUserTable()
  }
}

// 初始化方法
const init = async() => {
  await getOrganizationTreeFunc()
  treeRef.value.setCurrentKey(treeData.value[0].ID)
  getAllUser()
  currentOrg.value = treeData.value[0].ID
  getUserTable()
}

init()

</script>

<style scope lang="scss">
.org-top{
  padding-bottom: 20px;
}

.dycloud-organization-box{
  @apply flex flex-row justify-between h-[calc(100vh-170px)] gap-2;
  &-left{
    @apply w-80 box-border p-4  dark:bg-slate-900 bg-white;
    &>.toolbar{
      @apply mb-4;
    }
     .tree-body-tree-node{
       @apply flex justify-between pr-4 flex-1;
        &-label{
          @apply flex-1;
          max-width: 100px;
          overflow:hidden;
          text-overflow:ellipsis;
          white-space:nowrap;
            }
      }
    &>.tree-body{
      height: calc(100% - 52px);
      overflow: auto;

      &::-webkit-scrollbar{
        width: 2px;
        height: 2px;
      }
    }
  }
  &-right{
    @apply w-[calc(100%-90px)] box-border p-4 dark:bg-slate-900 bg-white;
     &>.toolbar{
       padding-bottom: 20px;
       display: flex;
       justify-content: space-between;
       .toolbar-search{
          display: flex;
          align-items: center;
          margin-bottom: 20px;
          .el-input{
            flex: 1;
          }
          .el-button{
            margin-left: 10px;
          }
       }
    }
    width: calc(100% - 270px);
  }
}

</style>
