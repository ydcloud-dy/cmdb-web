<template>
  <div style="margin-top: 20px">
    <el-card>
      <el-form ref="form" label-position="top" :model="formData">
        <el-card
          v-for="(row,ind) in formData.spec.tls"
          :key="ind"
          style=";margin-top: 10px;position: relative"
        >
          <div style="float: right; padding: 3px 0;position: relative;z-index: 1">
            <el-button
              v-if="formData.spec.tls.length > 1"
              type="danger"
              link
              icon="delete"
              size="small"
              @click="removeTls(ind)"
            >删除
            </el-button>
          </div>
          <div style="margin-top: 20px">
            <el-row :gutter="24">
              <el-col :span="24">
                <el-form-item label="证书- Secret Name">
                  <el-select v-model="row.secretName" style="width: 100%">
                    <el-option label="Default Ingress Controller Certificate" value="" />
                    <el-option
                      v-for="(secret,index) in secrets"
                      :key="index"
                      :label="secret.metadata.name"
                      :value="secret.metadata.name"
                    />
                  </el-select>
                </el-form-item>
              </el-col>
            </el-row>
            <el-col :span="24">
              <el-form-item label="Host">
                <div v-for="(host,index) in row.hosts" :key="index">
                  <el-button type="danger" link icon="delete" size="small" @click="removeHost(row,index)">删除</el-button>
                  <el-col :span="20">
                    <span v-if="false">{{ host }}</span>
                    <el-input v-model="row.hosts[index]" />
                  </el-col>
                </div>
                <el-button size="small" type="primary" link icon="plus" @click="addHost(row)">添加Host</el-button>
              </el-form-item>
            </el-col>
          </div>
        </el-card>
      </el-form>
      <div style="margin-top: 10px">
        <el-button size="small" type="primary" link icon="plus" @click="addTls">添加证书</el-button>
      </div>
    </el-card>
  </div>
</template>
<script>
export default {
  name: 'IngressTls',
}
</script>
<script setup>
import { ref, watch } from 'vue'
import { SecretsList } from '@/api/kubernetes/secrets'
const props = defineProps({
  form: {
    default: function() {
      return {}
    },
    type: Object
  },
  cluster: {
    default: function() {
      return 0
    },
    type: Number
  },
  namespace: {
    default: function() {
      return ''
    },
    type: String
  }
})

// 监听数据变化
watch(
  () => props.namespace,
  async() => {
    namespace.value = props.namespace
    await getSecrets()
  }
)

// 获取 secrets 列表
const getSecrets = async() => {
  const res = await SecretsList({cluster_id: cluster_id.value, namespace: namespace.value})
  if (res.code === 0) {
    secrets.value = res.data.items
  }
}
// 数据初始化
const formData = ref('')
const cluster_id = ref(0)
const namespace = ref('')
const secrets = ref([])
const FormInitData = async() => {
  formData.value = props.form
  cluster_id.value = props.cluster
  namespace.value = props.namespace
  if (!formData.value.spec.tls) {
    formData.value.spec.tls = []
  }
  await getSecrets()
}

FormInitData()

// 删除证书
const removeTls = (index) => {
  formData.value.spec.tls.splice(index, 1)
}

// 添加证书
const addTls = () => {
  formData.value.spec.tls.push({
    secretName: '',
    hosts: []
  })
}

// 添加域名
const addHost = (row) => {
  row.hosts.push('')
}

// 删除域名
const removeHost = (row, index) => {
  row.hosts.splice(index, 1)
}
</script>

<style scoped>

</style>
