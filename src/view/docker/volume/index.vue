<template>
  <div class="dycloud-form-box">
    <div style="margin-bottom: 20px;display: inline-block">
      <el-form :inline="true" :model="searchVolumeFrom" @keyup.native.enter="onSearch(searchVolumeFrom.name)">
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
              <el-button type="primary" icon="plus"  @click="openCreateVolumeDialog()">创建存储卷</el-button>
        </el-form-item>
        <el-form-item>
          <el-button icon="delete" style="margin-left: 10px;" :disabled="!multipleSelection.length" @click="showBatchDelete">批量删除</el-button>
        </el-form-item>
          <el-form-item>
              <el-input v-model="searchVolumeFrom.name" class="search-input" placeholder="输入存储卷名称" />
              <el-button
                style="margin-left: 20px;"
                type="primary"
                icon="search"
                @click="onSearch(searchVolumeFrom.name)"
              >查询
              </el-button>
        </el-form-item>
      </el-form>
    </div>
    <el-table
      :data="volumeList"
      style="color:#ffffff"
      row-key="id"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="55" />
      <el-table-column
        label="存储卷名称"
        prop="name"

      >
        <template #default="scope">
          <el-button type="text" @click="showVolumeDialog(scope.row)">{{ scope.row.name }} </el-button>
          <el-tag
            v-if="scope.row.name === 'bridge'|| scope.row.name === 'host'||scope.row.name === 'none'"
            type="danger"
            disable-transitions
          >未使用</el-tag>
        </template>
      </el-table-column>
      <el-table-column
        label="存储卷驱动"
        prop="driver"
        width="150px"
      />
      <el-table-column
        label="挂载点"
        prop="mountPoint"
      />
      <el-table-column
        label="创建时间"
        sortable
        prop="created"
      />
      <el-table-column
        label="操作"
      >
        <template #default="scope">
          <el-button type="danger" icon="delete-filled" round @click="showDeleteVolume(scope.row)" />
        </template>
      </el-table-column>
    </el-table>
    <!-- 创建存储卷dialog -->
    <el-dialog
      v-model="createVolumeDialog"
      title="创建存储卷"
      width="800px"
      :show-close="false"
      :close-on-press-escape="false"
      :close-on-click-modal="false"
    >

      <el-form ref="addVolumeFrom" :rules="rules" :model="volume" label-width="250px;" label-position="left">
        <el-form-item label="存储卷名称:" prop="name" :rules="[{ required: true, message: '存储卷名称不能为空' }]">
          <el-input v-model="volume.name" placeholder="my volume" style="width: 240px;" />
        </el-form-item>
        <el-form-item label="存储卷驱动:" prop="driver">
          <el-radio-group v-model="volume.driver">
            <template v-for="s in systemInfo.Plugins.Volume">
              <el-radio-button :label="s" />
            </template>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="是否开启nfs存储卷:" prop="ipam">
          <el-switch
            v-model="volume.nfs.enable"
            active-color="#13ce66"
            inactive-color="#ff4949"
            @change="nfsEnableChange()"
          />
          <el-link style="color: #ED6A0C;margin-left: 20px;" disabled="true" icon="question-filled"> 注意: 开启nfs存储卷,需要先安装nfs-utils</el-link>
        </el-form-item>

        <el-form-item v-if="volume.nfs.enable" label="nfs访问地址:" prop="address">
          <el-input
            v-model="volume.nfs.addr"
            placeholder="my.nfs-server.com 或 xxx.xxx.xxx.xxx"
            style="width: 300px;"
            size="small"
          />

        </el-form-item>
        <el-form-item v-if="volume.nfs.enable" label="nfs版本:" prop="version">
          <el-select v-model="volume.nfs.version" style="width:100px" placeholder="请选择">
            <el-option
              v-for="item in nfsOptionVersion"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>

        <el-form-item v-if="volume.nfs.enable" label="nfs挂载点:" prop="nfsMountPoint">
          <el-input
            v-model="volume.nfs.device"
            placeholder="/export/share"
            style="width: 250px;"
            size="small"
          />
        </el-form-item>

        <el-form-item v-if="volume.nfs.enable" label="nfs挂载参数:" prop="nfsOption">
          <el-input
            v-model="volume.nfs.args"
            placeholder="rw,noatime,rsize=8192,wsize=8192,tcp,timeo=14"
            style="width: 400px;"
            size="small"
          />
        </el-form-item>

        <el-form-item label="是否开启cifs存储卷:" prop="ipam">
          <el-switch
            v-model="volume.cifs.enable"
            active-color="#13ce66"
            inactive-color="#ff4949"
            @change="cifsEnableChange()"
          />
          <el-link style="color: #ED6A0C;margin-left: 20px;" disabled="true" icon="question-filled"> 注意: 开启cifs存储卷,需要先安装cifs-utils</el-link>
        </el-form-item>
        <el-form-item v-if="volume.cifs.enable" label="cifs访问地址:" prop="address">
          <el-input
            v-model="volume.cifs.addr"
            placeholder="my.nfs-server.com 或 xxx.xxx.xxx.xxx"
            style="width: 300px;"
            size="small"
          />
        </el-form-item>

        <el-form-item v-if="volume.cifs.enable" label="cifs版本:" prop="version">
          <el-select v-model="volume.cifs.version" style="width:500px" placeholder="请选择">
            <el-option
              v-for="item in cifsOptionVersion"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>

        <el-form-item v-if="volume.cifs.enable" label="cifs共享目录:" prop="share">
          <el-input
            v-model="volume.cifs.device"
            placeholder="/export/share"
            style="width: 300px;"
            size="small"
          />
        </el-form-item>
        <el-form-item v-if="volume.cifs.enable" label="用户名:" prop="username">
          <el-input
            v-model="volume.cifs.username"
            placeholder="your username"
            style="width: 300px;"
            size="small"
          />
        </el-form-item>
        <el-form-item v-if="volume.cifs.enable" label="密码:" prop="password">
          <el-input
            v-model="volume.cifs.password"
            placeholder="your password"
            style="width: 300px;"
            size="small"
          />
        </el-form-item>
      </el-form>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="closeCreateVolumeDialog">取 消</el-button>
          <el-button type="primary" @click="enterCreateVolumeDialog">确 定</el-button>
        </div>
      </template>
    </el-dialog>

    <!-- 删除存储卷dialog -->
    <el-dialog
      v-model="deleteVolumeDialog"
      title="是否确定删除?"
      width="300px"
      :show-close="false"
    >
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="enterDeleteVolumeDialog">是</el-button>
        <el-button @click="closeDeleteVolumeDialog">否</el-button>
      </div>
    </el-dialog>

    <!-- 存储卷详细信息 -->
    <el-dialog
      v-model="volumeDetailDialog"
      title="详细信息"
      width="1000px"
    >
      <el-descriptions title="存储卷详细信息" :column="2" direction="vertical" border>
        <el-descriptions-item label="ID:">{{ volumeDetail.name }}</el-descriptions-item>
        <el-descriptions-item label="创建时间:">{{ volumeDetail.created }}</el-descriptions-item>
        <el-descriptions-item label="挂载路径:">{{ volumeDetail.mountPoint }}</el-descriptions-item>
        <el-descriptions-item label="驱动:">{{ volumeDetail.driver }}</el-descriptions-item>
      </el-descriptions>

      <el-descriptions v-if="volumeDetail.options" title="存储卷参数" :column="2" direction="vertical" border>
        <el-descriptions-item label="type:">{{ volumeDetail.options.type }}</el-descriptions-item>
        <el-descriptions-item label="device:">{{ volumeDetail.options.device }}</el-descriptions-item>
        <el-descriptions-item label="o:">{{ volumeDetail.options.o }}</el-descriptions-item>
      </el-descriptions>
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
  name: 'Volume',
}
</script>

<script setup>
import { listVolume, deleteVolume, createVolume } from '@/api/docker/volume'
import { getSystemInfo } from '@/api/docker/system'
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
  ListVolume()
}
const handleCurrentChange = (val) => {
  page.value = val
  ListVolume()
}

// 获取系统信息
const systemInfo = ref({
  Containers: 0,
  ContainersRunning: 0,
  ContainersPaused: 0,
  ContainersStopped: 0,
  Images: 0,
  NCPU: 0,
  MemTotal: 0,
  Plugins: {
    Volume: [],
    Network: [],
  },
})
const GetSystemInfo = async() => {
  const res = await getSystemInfo(currentHost.value)
  if (res.code === 0) {
    systemInfo.value = res.data
  }
}

// 获取存储卷列表
const searchVolumeFrom = ref({
  name: '',
})
const volumeList = ref([])
const ListVolume = async() => {
  const res = await listVolume(currentHost.value,{
    page: page.value,
    pageSize: pageSize.value,
    name: searchVolumeFrom.value.name,
  })
  if (res.code === 0) {
    total.value = res.data.total
    page.value = res.data.page
    pageSize.value = res.data.pageSize
    volumeList.value = res.data.items
  }
}
const onSearch = async() => {
  page.value = 1
  pageSize.value = 10
  ListVolume()
}

// 创建存储卷
const nfsOptionVersion = ref([
  {
    label: 'NFS4',
    value: 'NFS4'
  },
  {
    label: 'NFS',
    value: 'NFS'
  }
])
const cifsOptionVersion = ref([
  {
    label: 'CIFS v2.1 (Used by Windows 7 / Server 2008 R2)',
    value: 'v2.1'
  }, {
    label: 'CIFS v1.0 (Used by Windows XP / Server 2003 and earlier)',
    value: 'v1.0'
  }, {
    label: 'CIFS v2.0 (Used by Windows Vista / Server 2008)',
    value: 'v2.0'
  }, {
    label: 'CIFS 3.0 (Used by Windows 8 / Server 2012 and newer)',
    value: 'v3.0'
  }
])

const nfsEnableChange = () => {
  if (volume.value.nfs.enable) {
    volume.value.cifs = {
      enable: false,
      device: '',
      addr: '',
      version: 'v2.1',
      username: '',
      password: ''
    }
  }
}
const cifsEnableChange = () => {
  if (volume.value.cifs.enable) {
    volume.value.nfs = {
      enable: false,
      addr: '',
      device: '',
      version: 'NFS4',
      option: 'rw,noatime,rsize=8192,wsize=8192,tcp,timeo=14'
    }
  }
}
const volume = ref({
  name: '',
  driver: 'local',
  mountPoint: '',
  driverOption: [],
  nfs: {
    enable: false,
    addr: '',
    device: '',
    version: 'NFS4',
    option: 'rw,noatime,rsize=8192,wsize=8192,tcp,timeo=14'
  },
  cifs: {
    enable: false,
    device: '',
    addr: '',
    version: 'v2.1',
    username: '',
    password: ''
  }
})
const createVolumeDialog = ref(false)
const openCreateVolumeDialog = async() => {
  createVolumeDialog.value = true
}
const closeCreateVolumeDialog = async() => {
  createVolumeDialog.value = false
}
const enterCreateVolumeDialog = async() => {
  const res = await createVolume(currentHost.value,volume.value)
  if (res.code === 0) {
    closeCreateVolumeDialog()
    ElMessage({
      type: 'success',
      message: '创建成功'
    })
    ListVolume()
  }
}

// 删除存储卷
const deleteVolumeDialog = ref(false)
const deleteVolumeData = ref({ Ids: [] })
const closeDeleteVolumeDialog = async() => {
  deleteVolumeDialog.value = false
}
const showDeleteVolume = async(row) => {
  deleteVolumeData.value.Ids = [row.name]
  deleteVolumeDialog.value = true
}
const enterDeleteVolumeDialog = async() => {
  const res = await deleteVolume(currentHost.value,deleteVolumeData.value)
  if (res.code === 0) {
    ElMessage({
      type: 'success',
      message: '删除成功'
    })
    closeDeleteVolumeDialog()
    deleteVolumeData.value.Ids = []
    ListVolume()
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
    IDs.push(item.name)
  })
  deleteVolumeData.value.Ids = IDs
  deleteVolumeDialog.value = true
}

// 查看存储卷详细信息
const volumeDetailDialog = ref(false)
const volumeDetail = ref({
  name: '',
  created: '',
  mountPoint: '',
  driver: '',
  options: {
    device: '',
    o: '',
    type: ''
  }
})
const showVolumeDialog = (row) => {
  volumeDetailDialog.value = true
  volumeDetail.value = row
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

const initData=()=> {
  GetSystemInfo()
  ListVolume('')
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
