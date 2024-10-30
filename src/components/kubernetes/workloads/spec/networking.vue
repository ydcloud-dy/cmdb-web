<template>
  <div v-if="FormInitStatus">
    <el-form label-position="top" :model="form">
      <el-row :gutter="20">
        <el-col :span="24">
          <el-form-item label="DNS 策略" prop="dnsPolicy">
            <form-item-block v-model="formData.dnsPolicy" item-type="radio" :radios="dns_policy_list" />
          </el-form-item>
        </el-col>
      </el-row>

      <el-row :gutter="20">
        <el-col :span="6">
          <el-form-item label="hostIPC" prop="hostIPC">
            <form-item-block v-model="formData.hostIPC" item-type="radio" :radios="yes_no_list" />
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="hostNetwork" prop="hostNetwork">
            <form-item-block v-model="formData.hostNetwork" item-type="radio" :radios="yes_no_list" />
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="hostPID" prop="hostPID">
            <form-item-block v-model="formData.hostPID" item-type="radio" :radios="yes_no_list" @change="checkIsValid('hostPID')" />
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="shareProcessNamespace" prop="shareProcessNamespace">
            <form-item-block v-model="formData.shareProcessNamespace" item-type="radio" :radios="yes_no_list" @change="checkIsValid('shareProcessNamespace')" />
          </el-form-item>
        </el-col>
      </el-row>

      <el-row :gutter="20">
        <el-col :span="12">
          <span>服务器地址</span>
          <table style="width: 100%;margin-top:10px" class="tab-table">
            <tr v-for="(row,index) in formData.dnsConfig.nameservers" :key="index">
              <td width="90%">
                <form-item-block v-model="row.value" placeholder="e.g. 1.1.1.1" item-type="input" />
              </td>
              <td>
                <el-button type="danger" link icon="delete" size="small" @click="handleNameserversDelete(index)">
                  删除
                </el-button>
              </td>
            </tr>
            <tr>
              <td align="left">
                <el-button size="small" type="primary" link icon="plus" @click="handleNameserversAdd">添加服务器地址</el-button>
              </td>
            </tr>
          </table>
        </el-col>
        <el-col :span="12">
          <span>搜索域</span>
          <table style="width: 100%;margin-top:10px" class="tab-table">
            <tr v-for="(row,index) in formData.dnsConfig.searches" :key="index">
              <td width="90%">
                <form-item-block v-model="row.value" placeholder="e.g. mycompany.com" item-type="input" />
              </td>
              <td>
                <el-button type="danger" link icon="delete" size="small" @click="handleSearchesDelete(index)">删除</el-button>
              </td>
            </tr>
            <tr>
              <td align="left">
                <el-button size="small" type="primary" link icon="plus" @click="handleSearchesAdd">添加搜索域</el-button>
              </td>
            </tr>
          </table>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="12">
          <span>DNS 解析</span>
          <table style="width: 100%;margin-top:10px" class="tab-table">
            <tr>
              <th scope="col" width="43%" align="left"><label>键</label></th>
              <th scope="col" width="43%" align="left"><label>值</label></th>
              <th align="left" />
            </tr>
            <tr v-for="(row,index) in formData.dnsConfig.options" :key="index">
              <td>
                <form-item-block v-model="row.name" placeholder="e.g. foo" item-type="input" />
              </td>
              <td>
                <form-item-block v-model="row.value" placeholder="e.g. bar" item-type="input" />
              </td>
              <td>
                <el-button type="danger" link icon="delete" size="small" @click="handleOptionsDelete(index)">删除</el-button>
              </td>
            </tr>
            <tr>
              <td align="left">
                <el-button size="small" type="primary" link icon="plus" @click="handleOptionsAdd">添加DNS解析</el-button>
              </td>
            </tr>
          </table>
        </el-col>
        <el-col :span="12">
          <span>主机别名</span>
          <table style="width: 100%;margin-top:10px" class="tab-table">
            <tr>
              <th scope="col" width="43%" align="left"><label>IP 地址</label></th>
              <th scope="col" width="43%" align="left"><label>主机别名</label></th>
              <th align="left" />
            </tr>
            <tr v-for="(row, index) in formData.hostAliases" :key="index">
              <td>
                <form-item-block v-model="row.ip" placeholder="e.g. 1.1.1.1" item-type="input" />
              </td>
              <td>
                <form-item-block v-model="row.hostnames" placeholder="e.g. foo.com,bar.com" item-type="input" />
              </td>
              <td>
                <el-button type="danger" link icon="delete" size="small" @click="handleAliasDelete(index)"> 删除</el-button>
              </td>
            </tr>
            <tr>
              <td align="left">
                <el-button size="small" type="primary" link icon="plus" @click="handleAliasAdd">添加主机别名</el-button>
              </td>
            </tr>
          </table>
        </el-col>
      </el-row>

      <el-row :gutter="20" style="margin-top:20px">
        <el-col :span="12">
          <el-form-item label="主机名" prop="hostname">
            <form-item-block v-model="formData.hostname" style="width: 100%" placeholder="hostname" item-type="input" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="域名" prop="subdomain">
            <form-item-block v-model="formData.subdomain" style="width: 100%" placeholder="subdomain" item-type="input" />
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'NetworkingBlock',
}
</script>
<script setup>
import FormItemBlock from '@/components/kubernetes/form-item/index.vue'
import { ref } from 'vue'
import { ElMessage } from 'element-plus'
const props = defineProps({
  form: {
    default: function() {
      return {}
    },
    type: Object
  },
})

// 数据初始化
const formData = ref([])
const dns_policy_list = ref([
  { label: 'Default', value: 'Default' },
  { label: 'ClusterFirst', value: 'ClusterFirst' },
  { label: 'None', value: 'None' },
  { label: 'ClusterFirstWithHostNet', value: 'ClusterFirstWithHostNet' },
])
const yes_no_list = ref([
  { label: '是', value: true },
  { label: '否', value: false },
])
const FormInitStatus = ref(false)
const FormInitData = () => {
  if (props.form) {
    formData.value = props.form
    if (!formData.value.hostIPC) {
      formData.value.hostIPC = null
    }

    if (!formData.value.hostNetwork) {
      formData.value.hostNetwork = null
    }

    if (!formData.value.hostPID) {
      formData.value.hostPID = null
    }

    if (!formData.value.shareProcessNamespace) {
      formData.value.shareProcessNamespace = null
    }

    if (!formData.value.subdomain) {
      formData.value.subdomain = ''
    }

    if (!formData.value.dnsPolicy) {
      formData.value.dnsPolicy = ''
    }

    if (!formData.value.hostname) {
      formData.value.hostname = ''
    }

    if (!formData.value.hostAliases) {
      formData.value.hostAliases = []
    }

    if (formData.value.dnsConfig) {
      if (!formData.value.dnsConfig.nameservers) {
        formData.value.dnsConfig.nameservers = []
      } else {
        const nameservers = ref([])
        for (const item of formData.value.dnsConfig.nameservers) {
          nameservers.value.push({ value: item })
        }
        formData.value.dnsConfig.nameservers = nameservers.value
      }

      const searches = ref([])
      if (!formData.value.dnsConfig.searches) {
        formData.value.dnsConfig.searches = []
      } else {
        for (const item of formData.value.dnsConfig.searches) {
          searches.value.push({ value: item })
        }
        formData.value.dnsConfig.searches = searches.value
      }

      if (!formData.value.dnsConfig.options) {
        formData.value.dnsConfig.options = []
      }
    } else {
      formData.value.dnsConfig = {
        nameservers: [],
        searches: [],
        options: [],
      }
    }
  }
  FormInitStatus.value = true
}

FormInitData()

// 添加DNS解析
const handleOptionsAdd = () => {
  var item = {
    name: '',
    value: '',
  }
  formData.value.dnsConfig.options.push(item)
}

// 删除DNS解析
const handleOptionsDelete = (index) => {
  formData.value.dnsConfig.options.splice(index, 1)
}

// 添加nameservers服务器地址
const handleNameserversAdd = () => {
  var item = {
    value: '',
  }
  formData.value.dnsConfig.nameservers.push(item)
}

// 删除nameservers服务器地址
const handleNameserversDelete = (index) => {
  formData.value.dnsConfig.nameservers.splice(index, 1)
}

// 添加主机别名
const handleAliasAdd = () => {
  var item = {
    ip: '',
    hostnames: '',
  }
  formData.value.hostAliases.push(item)
}

// 删除机别名
const handleAliasDelete = (index) => {
  formData.value.hostAliases.splice(index, 1)
}

// 搜索域添加
const handleSearchesAdd = () => {
  var item = {
    value: '',
  }
  formData.value.dnsConfig.searches.push(item)
}

// 搜索域删除
const handleSearchesDelete = (index) => {
  formData.value.dnsConfig.searches.splice(index, 1)
}

// 状态检查
const checkIsValid = (item) => {
  if (formData.value.hostPID && formData.value.shareProcessNamespace) {
    ElMessage({
      title: '提示',
      type: 'warning',
      message: 'shareProcessNamespace 和 hostPID 不能同时为 true'
    })
    if (item === 'hostPID') {
      formData.value.hostPID = null
    } else {
      formData.value.shareProcessNamespace = null
    }
  }
}

// 格式化对象返回父页面
const transformation = (parentFrom) => {
  parentFrom.subdomain = formData.value.subdomain || undefined
  parentFrom.dnsPolicy = formData.value.dnsPolicy || undefined
  parentFrom.hostname = formData.value.hostname || undefined
  parentFrom.hostIPC = formData.value.hostIPC === null ? undefined : formData.value.hostIPC
  parentFrom.hostNetwork = formData.value.hostNetwork === null ? undefined : formData.value.hostNetwork
  parentFrom.hostPID = formData.value.hostPID === null ? undefined : formData.value.hostPID
  parentFrom.shareProcessNamespace = formData.value.shareProcessNamespace === null ? undefined : formData.value.shareProcessNamespace

  const aliases = []
  if (formData.value.hostAliases) {
    for (const item of formData.value.hostAliases) {
      if (typeof item.hostnames === 'string') {
        aliases.push({
          ip: item.ip || undefined,
          hostnames: item.hostnames ? item.hostnames.split(',') : undefined,
        })
      }

      if (typeof item.hostnames === 'object') {
        aliases.push({
          ip: item.ip || undefined,
          hostnames:  Object.values(item.hostnames) || undefined
        })
      }
    }
  }

  parentFrom.hostAliases = aliases.length !== 0 ? aliases : undefined

  const nameservers = []
  for (const item of formData.value.dnsConfig.nameservers) {
    nameservers.push(item.value)
  }
  const searches = []
  for (const item of formData.value.dnsConfig.searches) {
    searches.push(item.value)
  }
  parentFrom.dnsConfig = parentFrom.dnsConfig || {
    nameservers: nameservers.length !== 0 ? nameservers : undefined,
    searches: searches.length !== 0 ? searches : undefined,
    options: formData.value.dnsConfig.options.length !== 0 ? formData.value.dnsConfig.options : undefined,
  }
}

// 格式化为对象返回父页面
const transformationformat = async(parentFrom) => {
  transformation(parentFrom)
}

defineExpose({
  transformationformat
})
</script>
<style scoped>

</style>
