<template>
  <div class="dycloud-form-box">
    <div style="margin-bottom: 15px;display: inline-block">
      <el-form :inline="true" :model="searchFrom" @keyup.native.enter="onSearch()">
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
              <el-button type="primary" icon="download" @click="openPullImageDialog()">下载镜像</el-button>
        </el-form-item>
        <el-form-item>
          <el-button icon="delete" style="margin-left: 10px;" :disabled="!multipleSelection.length" @click="showBatchDelete">批量删除</el-button>
        </el-form-item>
        <el-form-item>
          <el-input v-model="searchFrom.name" class="search-input" placeholder="输入镜像名称" />
          <el-button
              style="margin-left: 20px;"
              type="primary"
              icon="search"
              @click="onSearch(searchFrom.name)"
          >查询
          </el-button>
        </el-form-item>
      </el-form>
    </div>
    <el-table
      :data="imageList"
      style="width: 100%;color:#ffffff"
      row-key="id"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="55" />
      <el-table-column
        label="镜像ID"
        prop="id"
        width="200px"
      >
        <template #default="scope">
          {{ scope.row.id.replaceAll("sha256:", "").substr(0, 11) }}
        </template>
      </el-table-column>

      <el-table-column
        label="镜像名称"
        prop="tag"
        width="350px"
      />
      <el-table-column
        label="创建时间"
        prop="created"
        sortable
        width="200px"
      />
      <el-table-column
        label="镜像大小"
        prop="size"
        sortable
        width="150px"
      />
      <el-table-column
        label="操作"
        width="450px"
      >
        <template #default="scope">
          <el-button type="danger" icon="delete-filled" round @click="showDeleteImage(scope.row.id)" />
        </template>
      </el-table-column>
    </el-table>
    <!-- 下载镜像dialog -->
    <el-dialog
      v-model="pullImageDialog"
      title="下载镜像"
      width="400px"
      destroy-on-close="true"
      :show-close="true"
    >
      <div>
        <el-form ref="pullImageRef" :model="pullImageFrom">
          <el-form-item label="镜像:" prop="image">
            <el-input v-model="pullImageFrom.name" type="text" placeholder="nginx:latest" style="width: 300px;" />
          </el-form-item>
        </el-form>
      </div>
      <div slot="footer">
        <el-button type="primary" :loading="pullImageLoading" round @click="pullImageHandle()">开始下载</el-button>
      </div>
    </el-dialog>

    <!-- 删除镜像dialog -->
    <el-dialog
      v-model="deleteImageDialog"
      title="是否确定删除?"
      width="300px"
      :show-close="false"
    >
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="enterDeleteImageDialog">是</el-button>
        <el-button @click="closeDeleteImageDialog">否</el-button>
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
  name: 'Image',
}
</script>

<script setup>
import { listImage, deleteImage, pullImage } from '@/api/docker/image'
import {
  getHostList,
} from '@/api/docker/host'
import { ref } from 'vue'
import { ElMessage } from 'element-plus'
import { onMounted } from 'vue'

const page = ref(1)
const total = ref(0)
const pageSize = ref(10)
// 分页
const handleSizeChange = (val) => {
  pageSize.value = val
  ListImage()
}
const handleCurrentChange = (val) => {
  page.value = val
  ListImage()
}

const pullImageDialog = ref(false)
const pullImageLoading = ref(false)

const pullImageFrom = ref({
  name: '',
})

// 多选数据
const multipleSelection = ref([])
// 多选
const handleSelectionChange = (val) => {
  multipleSelection.value = val
}

const searchFrom = ref({})

// 下载镜像
const openPullImageDialog = async() => {
  pullImageDialog.value = true
}

const pullImageHandle = async() => {
  pullImageLoading.value = true
  const res = await pullImage(currentHost.value,pullImageFrom.value)
  if (res.code === 0) {
    ElMessage({
      type: 'success',
      message: '下载成功'
    })
    ListImage()
    pullImageDialog.value = false
  }
  pullImageLoading.value = false
}

// 获取存储卷列表
const onSearch = async() => {
  page.value = 1
  pageSize.value = 10
  ListImage()
}

// 镜像管理
const imageList = ref([])
const ListImage = async() => {
  const res = await listImage(currentHost.value,{
    page: page.value,
    pageSize: pageSize.value,
    name: searchFrom.value.name,
  })
  if (res.code === 0) {
    total.value = res.data.total
    page.value = res.data.page
    pageSize.value = res.data.pageSize
    imageList.value = res.data.items
  }
}

// 删除镜像
const deleteImageDialog = ref(false)
const deleteImageData = ref({ Ids: [] })
const showDeleteImage = async(id) => {
  deleteImageData.value.Ids = [id]
  deleteImageDialog.value = true
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
  console.log(IDs)
  deleteImageData.value.Ids = IDs
  deleteImageDialog.value = true
}

const closeDeleteImageDialog = async() => {
  deleteImageDialog.value = false
}

const enterDeleteImageDialog = async() => {
  const res = await deleteImage(currentHost.value,{ Ids: deleteImageData.value.Ids })
  if (res.code === 0) {
    ElMessage({
      type: 'success',
      message: '删除成功'
    })
    deleteImageDialog.value = false
    ListImage('')
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
  ListImage('')
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
