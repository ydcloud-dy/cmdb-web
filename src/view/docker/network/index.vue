<template>
  <div class="dycloud-form-box">
    <div style="margin-bottom: 20px;display: inline-block">
      <el-form :inline="true" :model="searchNetworkFrom">
        <el-form-item label="主机:">
          <el-select v-model="currentHost" @change="currentChange" placeholder="请选择主机">
            <el-option
                v-for="item in hostList"
                :key="item.value"
                :label="item.label"
                :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
              <el-button type="primary" icon="plus"  @click="openCreateNetworkDialog()">创建网络</el-button>
        </el-form-item>
        <el-form-item>
          <el-button icon="delete" style="margin-left: 10px;" :disabled="!multipleSelection.length" @click="showBatchDelete">批量删除</el-button>
        </el-form-item>
        <el-form-item>
              <el-input v-model="searchNetworkFrom.name" class="search-input"  placeholder="输入网络名称" />
              <el-button
                style="margin-left: 20px;"
                type="primary"
                icon="search"
                @click="onSearch(searchNetworkFrom.name)"
              >查询
              </el-button>
        </el-form-item>
      </el-form>
    </div>
    <el-table
      :data="networkList"
      style="color:#ffffff"
      row-key="id"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="55" />
      <el-table-column
        label="网络名称"
        prop="name"
      >
        <template #default="scope">
          {{ scope.row.name }}
          <el-tag
            v-if="scope.row.name === 'bridge'|| scope.row.name === 'host'||scope.row.name === 'none'"
            type="danger"
            disable-transitions
          >系统</el-tag>
        </template>
      </el-table-column>
      <el-table-column
        label="网络驱动"
        prop="driver"
      />
      <el-table-column
        label="IPAM 驱动"
        prop="ipam.driver"
      />
      <el-table-column
        label="IPAM IPv4 子网"
        prop="ipam.config.subnet"
      />
      <el-table-column
        label="IPAM IPv4 网关"
        prop="ipam.config.gateway"
      />
      <el-table-column
        label="创建时间"
        prop="created"
        sortable
      />
      <el-table-column
        label="操作"
      >
        <template #default="scope">
          <el-button v-if="scope.row.name !== 'bridge' && scope.row.name !== 'host' && scope.row.name !== 'none' " type="danger" icon="delete-filled" round @click="showDeleteNetwork(scope.row)" />
        </template>
      </el-table-column>
    </el-table>
    <!-- 创建容器dialog -->
    <el-dialog
      v-model="createNetworkDialog"
      title="创建网络"
      width="500px"
      :show-close="false"
      :close-on-press-escape="false"
      :close-on-click-modal="false"
    >
      <el-form ref="addNetworkFrom" :rules="rules" :model="network" label-width="120px">
        <el-form-item label="网络名称:" prop="name" :rules="[{ required: true, message: '网络名称不能为空' }]">
          <el-input v-model="network.name" placeholder="my network" style="width: 240px;" />
        </el-form-item>
        <el-form-item label="网络驱动:" prop="driver">
          <el-radio-group v-model="network.driver">
            <el-radio-button label="bridge" />
            <el-radio-button label="ipvlan" />
            <el-radio-button label="macvlan" />
            <el-radio-button label="overlay" />
          </el-radio-group>
        </el-form-item>
        <el-form-item label="子网地址:" prop="ipam">
          <el-input
            v-model="network.ipam.config.subnet"
            placeholder="示例: 172.20.0.0/16"
            style="width: 200px;"
            size="small"
          />
        </el-form-item>
        <el-form-item label="网关地址:" prop="ipam">
          <el-input
            v-model="network.ipam.config.gateway"
            placeholder="示例: 172.20.10.11"
            style="width: 200px;"
            size="small"
          />
        </el-form-item>

        <el-form-item label="IP范围:">
          <el-input
            v-model="network.ipam.config.ipRange"
            placeholder="示例: 172.20.10.128/25"
            style="width: 200px;"
            size="small"
          />
        </el-form-item>

        <el-form-item v-if="network.driver === 'macvlan'" label="网络接口:">
          <el-input
            v-model="network.ipam.config.ipRange"
            placeholder="示例: eth0"
            style="width: 170px;"
            size="small"
          />
        </el-form-item>

      </el-form>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="closeCreateNetworkDialog">取 消</el-button>
          <el-button type="primary" @click="enterCreateNetworkDialog">确 定</el-button>
        </div>
      </template>
    </el-dialog>
    <!-- 删除网络dialog -->
    <el-dialog
      v-model="deleteNetworkDialog"
      title="是否确定删除?"
      width="300px"
      :show-close="false"
    >
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="enterDeleteNetworkDialog">是</el-button>
        <el-button @click="closeDeleteNetworkDialog">否</el-button>
      </div>
    </el-dialog>
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
</template>

<script>
export default {
  name: 'Network',
}
</script>

<script setup>
import { listNetwork, deleteNetwork, createNetwork } from '@/api/docker/network'
import { ref } from 'vue'
import { ElMessage } from 'element-plus'
import { onMounted } from 'vue'
import {
  getHostList,
} from '@/api/docker/host'
const page = ref(1)
const total = ref(0)
const pageSize = ref(10)
// 分页
const handleSizeChange = (val) => {
  pageSize.value = val
  ListNetwork()
}
const handleCurrentChange = (val) => {
  page.value = val
  ListNetwork()
}

// 获取网络列表
const searchNetworkFrom = ref({
  name: '',
})
const networkList = ref([])
const ListNetwork = async() => {
  const res = await listNetwork(currentHost.value,{
    page: page.value,
    pageSize: pageSize.value,
    name: searchNetworkFrom.value.name,
  })
  if (res.code === 0) {
    total.value = res.data.total
    page.value = res.data.page
    pageSize.value = res.data.pageSize
    networkList.value = res.data.items
  }
}
const onSearch = async() => {
  page.value = 1
  pageSize.value = 10
  ListNetwork()
}

// 创建网络
const network = ref({
  name: '',
  driver: 'bridge',
  ipam: {
    driver: '',
    config: {}
  }
})
const createNetworkDialog = ref(false)
const openCreateNetworkDialog = async() => {
  createNetworkDialog.value = true
}
const closeCreateNetworkDialog = async() => {
  createNetworkDialog.value = false
}
const enterCreateNetworkDialog = async() => {
  if (network.value.name === '') {
    return
  }
  const res = await createNetwork(currentHost.value,network.value)
  if (res.code === 0) {
    closeCreateNetworkDialog()
    network.value = {
      name: '',
      driver: 'bridge',
      ipam: {
        driver: '',
        config: {}
      }
    }
    ListNetwork()
  }
}

// 多选数据
const multipleSelection = ref([])
// 多选
const handleSelectionChange = (val) => {
  multipleSelection.value = val
}



// 多选删除
const showBatchDelete = async() => {
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
  deleteNetworkData.value.Ids = IDs
  deleteNetworkDialog.value = true
}

// 删除网络
const deleteNetworkDialog = ref(false)
const deleteNetworkData = ref({ Ids: [] })
const closeDeleteNetworkDialog = async() => {
  deleteNetworkDialog.value = false
}

const showDeleteNetwork = async(row) => {
  deleteNetworkData.value.Ids = [row.id]
  deleteNetworkDialog.value = true
}

const enterDeleteNetworkDialog = async() => {
  const res = await deleteNetwork(currentHost.value,deleteNetworkData.value)
  if (res.code === 0) {
    ElMessage({
      type: 'success',
      message: '删除成功'
    })
    closeDeleteNetworkDialog()
    deleteNetworkData.value.Ids = []
    ListNetwork('')
  }
}


const hostList = ref([])
const initHostList =async () =>{
  hostList.value = []
  const res = await getHostList({
    pageSize: 10000,
  })
  if (res.code === 0) {
    for(let i=0 ; i < res.data.list.length; i++ ){
      hostList.value.push({
        value: res.data.list[i].name,
        label: res.data.list[i].name,
      })
    }
  }
}

const currentHost = ref('host')
const initCurrentHost = ()=>{
  const host = window.localStorage.getItem("currentHost")
  if (host){
    currentHost.value = host
  }
}

const currentChange = (e)=>{
  currentHost.value = e
  window.localStorage.setItem("currentHost",e)
  initData()
}

const initData = ()=> {
  ListNetwork('')
}

onMounted(() => {
  initCurrentHost()
  initHostList()
  initData()
})

</script>
<style>
body {
  font-family: Consolas;
}
.search-input {
  width: 300px;
}
</style>
