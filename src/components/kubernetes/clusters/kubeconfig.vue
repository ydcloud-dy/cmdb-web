<template>
  <div>
    <div>
      <el-button v-show="YamlShow" type="primary" link icon="CopyDocument" size="small" class="copydocument" @click="handleCredentialCopy">复制</el-button>
    </div>
    <el-row>
      <el-col :span="12">
        <div v-show="!YamlShow" class="credentialadd">
          <el-button size="small" type="primary" @click="handleCredentialAdd">凭据申请</el-button>
        </div>
        <div v-show="YamlShow" class="credentialadd">
          <el-button size="small" type="primary" @click="handleCredentialRemove">吊销凭据</el-button>
        </div>
      </el-col>
      <el-col :span="12">
        <div v-show="YamlShow" class="downloadKubeconfig">
          <el-button class="btn" size="small" type="primary" link icon="Download" @click="handledownloadKubeconfig">下载</el-button>
        </div>
      </el-col>
    </el-row>
    <div v-if="YamlShow" ref="textToCopy">
      <YamlBlock :data="YamlData" :read-only="readOnly" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Kubeconfig',
}
</script>
<script setup>
import YamlBlock from '../yaml/index.vue'
import { ref } from 'vue'
import { CreateCredential, deleteClusterUser, getUserById } from '@/api/kubernetes/cluster/k8sCluster'
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

const YamlShow = ref(false)
const readOnly = ref(true)
const YamlData = ref({})
const UserData = ref({})
// 获取用户凭据
const GetUserCredentia = async() => {
  YamlShow.value = false
  const res = await getUserById({ 'id': formData.value.id })
  if (res.code === 0) {
    if (res.data.user.length > 0) {
      for (const key in res.data.user) {
        if (key !== undefined) {
          if (res.data.user[key].kube_config !== '') {
            UserData.value = res.data.user[key]
            YamlData.value = JSON.parse(res.data.user[key].kube_config)
            YamlShow.value = true
          }
        }
      }
    }
  }
}

// 表单数据初始化
const formData = ref({})
const cluster_id = ref(0)
const GetFormData = () => {
  formData.value = props.form
  cluster_id.value = formData.value.id
  GetUserCredentia()
}

GetFormData()

// 凭据申请
const handleCredentialAdd = async() => {
  const res = await CreateCredential({ 'id': cluster_id.value })
  if (res.code === 0) {
    ElMessage({
      type: 'success',
      message: res.msg
    })
  }

  GetUserCredentia()
}

// 凭据转YAML
const kubeconfig = ref('')
const KubeconfigToYAML = () => {
  if (JSON.stringify(YamlData.value) !== '{}') {
    kubeconfig.value = yaml.dump(YamlData.value)
  }
}

// 下载kubeconfig
const handledownloadKubeconfig = () => {
  KubeconfigToYAML()
  // 创建 Blob 对象
  const blob = new Blob([kubeconfig.value], { type: 'application/yaml' })

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
const handleCredentialCopy = () => {
  KubeconfigToYAML()
  const textArea = document.createElement('textarea')
  textArea.value = kubeconfig.value
  document.body.appendChild(textArea)
  textArea.select()
  document.execCommand('copy')
  document.body.removeChild(textArea)
  ElMessage({
    type: 'success',
    message: '内容已经拷贝到剪贴板'
  })
}

// 吊销凭据
const handleCredentialRemove = () => {
  const formOneData = ref({
    'user_uuids': [],
    'cluster_id': 0
  })
  ElMessageBox.confirm('您确定要吊销  ' + UserData.value.nickName + ' 用户凭据？, 是否继续?', '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning'
  }).then(async() => {
    console.log(UserData.value)
    formOneData.value.user_uuids.push(UserData.value.uuid)
    formOneData.value.cluster_id = cluster_id.value
    const res = await deleteClusterUser(formOneData.value)
    if (res.code === 0) {
      ElMessage({
        type: 'success',
        message: '凭据已吊销，请重新申请!'
      })
      GetUserCredentia()
    }
  })
      .catch(() => {
        ElMessage({
          type: 'info',
          message: '已取消吊销!'
        })
      })
}
</script>
<style scoped>
.credentialadd {
  text-align: left;
}

.downloadKubeconfig {
  text-align: right;
}
.copydocument {
  position: absolute;
  top: -40%;
  left:83%;
  width: 0;
  height: 100%;
  z-index: 1;
}
</style>
