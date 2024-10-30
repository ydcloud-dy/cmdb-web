<template>
  <div>
    <div class="dycloud-btn-list">
      <el-upload
          :action="`${uploadPath}`"
          :headers="{ 'x-token': userStore.token }"
          :on-error="uploadError"
          :on-success="uploadSuccess"
          :show-file-list="false"
          :multiple="true"
          class="upload-btn"
      >
        <el-button icon="Files" size="small" type="primary" @click="handleUploadFile">上传文件</el-button>
      </el-upload>
    </div>
    <div style="margin-top: 20px;height:20px">
      <el-button size="small" type="primary" link icon="Folder" @click="handleRoot">根目录</el-button>
      <span v-for="(v,i) in folders" :key="i">
        <span>/</span>
        <el-link :disabled="i === (folders.length -1 )" @click="handlelinkToDir(v)">
          <span v-if="i === (folders.length -1 )"> {{ v }}</span>
          <span v-else class="operate-span-primary"> {{ v }}</span>
        </el-link>
      </span>
    </div>
    <div class="dycloud-table-box">
      <el-table ref="multipleTable" :key="filesFormData" :data="filesFormData" style="width: 100%" tooltip-effect="dark">
        <el-table-column
            label="名称"
            prop="name"
            type="scope"
        >
          <template #default="{row}">
            <el-button v-if="row.isDir" link icon="Folder" class="operate-span-primary" @click="handleToFolder(row)">
              {{ row.name }}{{ row.link ? " -> " + row.link : "" }}
            </el-button>
            <el-button v-else link icon="Files" class="operate-span" @click="handleCatFile(row)">
              {{ row.name }}{{ row.link ? " -> " + row.link : "" }}
            </el-button>
          </template>
        </el-table-column>
        <el-table-column label="大小" prop="size" />
        <el-table-column label="权限" prop="mode" />
        <el-table-column label="所有者" prop="user" />
        <el-table-column label="所属组" prop="group" />
        <el-table-column
            label="最后修改时间"
            prop="modTime"
            type="scope"
        >
          <template #default="{row}">
            <span>{{ formatTimeToStr(row.modTime) }}</span>
          </template>
        </el-table-column>
        <el-table-column fixed="right" label="操作" type="scope">
          <template #default="scope">
            <el-button size="small" type="primary" link icon="Download" @click="handleDownload(scope.row)">下载</el-button>
            <el-button size="small" type="primary" link icon="delete" @click="handleDelete(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FilesBlock',
}
</script>
<script setup>
import { ref } from 'vue'
import { formatTimeToStr } from '@/utils/date'
import { DeleteFile, PodsListFiles } from '@/api/kubernetes/pods'
import { ElMessage, ElMessageBox } from 'element-plus'
const VITE_BASE_PATH = ref(import.meta.env.VITE_BASE_PATH)
const VITE_SERVER_PORT = ref(import.meta.env.VITE_SERVER_PORT)
const path = ref(import.meta.env.VITE_BASE_API)
import { useUserStore } from '@/pinia/modules/user'
const userStore = useUserStore()

const props = defineProps({
  form: {
    default: function() {
      return {}
    },
    type: Object
  },
})

// 获取文件列表
const folders = ref([])
const folder = ref('/')
const filesFormData = ref([])
const GetPodsListFiles = async(fd, fds) => {
  fileRequest.value.path = fd
  console.log(fileRequest.value)
  console.log("filerequest: =================")
  const res = await PodsListFiles( fileRequest.value)
  if (res.code === 0) {
    filesFormData.value = res.data.files
    folder.value = fd
    folders.value = fds
  }
}

// 表单数据初始化
const formData = ref({})
const fileRequest = ref({})

const GetFormData = () => {
  formData.value = props.form
  if (formData.value) {
    fileRequest.value = {
      cluster_id: formData.value.cluster_id,
      namespace: formData.value.metadata.namespace,
      podName: formData.value.metadata.name,
      containerName: formData.value.container_name,
      path: '/'
    }
  }

  GetPodsListFiles('/', [])
}

GetFormData()

// 拼接URL
const GetUrl = (name) => {
  fileRequest.value.path = GetPath(name)
  let url = ''
  const keys = Object.keys(fileRequest.value)
  for (let i = 0; i < keys.length; i++) {
    if (!fileRequest.value[keys[i]]) {
      continue
    }
    if (url) {
      url += `&${keys[i]}=${fileRequest.value[keys[i]]}`
    } else {
      url += `?${keys[i]}=${fileRequest.value[keys[i]]}`
    }
  }
  return url
}
// 编辑
const handleDownload = async(row) => {
  const url = GetUrl(row.name)
  const token = localStorage.getItem('token')
  const urlData = `${VITE_BASE_PATH.value}:${VITE_SERVER_PORT.value}/kubernetes/pods/downloadFile${url}&x-token=${token}`
  window.open(urlData, '_blank')
}

// 查看文件
const handleCatFile = (row) => {
  if (row.link !== '') {
    ElMessage({
      type: 'info',
      message: '链接文件 不支持此操作'
    })
    return
  }
}

// 文件上传URL拼接
const GetUploadUrl = () => {
  let url = ''
  const keys = Object.keys(fileRequest.value)
  for (let i = 0; i < keys.length; i++) {
    if (!fileRequest.value[keys[i]]) {
      continue
    }
    if (url) {
      url += `&${keys[i]}=${fileRequest.value[keys[i]]}`
    } else {
      url += `?${keys[i]}=${fileRequest.value[keys[i]]}`
    }
  }
  return url
}

// 上传文件
const uploadPath = ref('')
const handleUploadFile = () => {
  uploadPath.value = path.value + '/kubernetes/pods/uploadFile' + GetUploadUrl()
}

// 上传成功
const uploadSuccess = (res) => {
  if (res.code === 0) {
    ElMessage({
      type: 'success',
      message: res.msg
    })
  } else {
    ElMessage({
      type: 'error',
      message: res.msg
    })
  }
  GetPodsListFiles(fileRequest.value.path, folders.value)
}

// 上传失败
const uploadError = () => {
  ElMessage({
    type: 'error',
    message: '上传失败'
  })
}

// 拼接路径
const GetPath = (name) => {
  if (folder.value === '/') {
    return folder.value + name
  } else {
    return folder.value + '/' + name
  }
}

// 切换目录
const handleToFolder = (row) => {
  const folder = row.name
  const folderDir = GetPath(folder)
  const newFolders = folders.value.concat([folder])
  GetPodsListFiles(folderDir, newFolders)
}

// 导航切换目录
const handlelinkToDir = (row) => {
  const folderDirTmp = ref('/')
  const foldersTmp = ref([])
  for (const v of folders.value) {
    foldersTmp.value.push(v)
    folderDirTmp.value = folderDirTmp.value + v + '/'
    if (row === v) {
      break
    }
  }

  GetPodsListFiles(folderDirTmp.value, foldersTmp.value)
}
// 切换跟目录
const handleRoot = () => {
  GetPodsListFiles('/', [])
}

// 删除
const handleDelete = async(row) => {
  const fileType = ref('')
  if (row.isDir) {
    fileType.value = '  文件夹'
  } else {
    fileType.value = '  文件'
  }
  ElMessageBox.confirm('您确定要删除  ' + row.name + fileType.value + '  ？该操作不可逆, 是否继续?', '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning'
  })
      .then(async() => {
        fileRequest.value.path = GetPath(row.name)
        const res = await DeleteFile(fileRequest.value)
        if (res.code === 0) {
          ElMessage({
            type: 'success',
            message: res.msg
          })
          GetPodsListFiles(folder.value, folders.value)
        }
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
.operate-span {
  cursor: pointer;
  font-weight:bold;
}
</style>
