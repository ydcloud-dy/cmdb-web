<template>
  <div style="margin-top: 20px">
    <el-card class="box-card" shadow="hover">
      <template #header>
        <div class="card-header">
          <span>私有镜像仓库登录密钥</span>
        </div>
      </template>
      <el-row>
        <el-col :span="24">
          <table style="width: 100%;padding: 0" class="tab-table">
            <tr>
              <th scope="col" width="30%">
                <label>仓库地址</label>
              </th>
              <th scope="col" width="30%">
                <label>用户名</label>
              </th>
              <th scope="col" width="30%">
                <label>密码</label>
              </th>
              <th />
            </tr>
            <tr v-for="(row,index) in formData" :key="index">
              <td>
                <el-input v-model="row.registry" />
              </td>
              <td>
                <form-item-block v-model="row.username" style="width: 100%" item-type="input" />
              </td>
              <td>
                <form-item-block
                  v-model="row.password"
                  style="width: 100%"
                  item-type="input"
                  type="password"
                  show-password
                />
              </td>
              <td>
                <el-button type="danger" link icon="delete" size="small" @click="handleDelete(index)">删除
                </el-button>
              </td>
            </tr>
            <tr>
              <td align="left">
                <el-button size="small" type="primary" link icon="plus" @click="handleAdd">添加</el-button>
              </td>
            </tr>
          </table>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'SecretDockerData',
}
</script>
<script setup>
import { ref } from 'vue'
import FormItemBlock from '@/components/kubernetes/form-item/index.vue'
import { Base64 } from 'js-base64'
const props = defineProps({
  form: {
    default: function() {
      return {}
    },
    type: Object
  }
})

// 数据初始化
const formData = ref([])
const FormInitData = () => {
  if (props.form && props.form['.dockerconfigjson']) {
    const value = Base64.decode(props.form['.dockerconfigjson'])
    const obj = JSON.parse(value)
    const auths = obj.auths
    for (const key in auths) {
      if (Object.prototype.hasOwnProperty.call(auths, key)) {
        formData.value.push({
          registry: key,
          username: auths[key].username,
          password: auths[key].password
        })
      }
    }
  }
}

FormInitData()

// 添加
const handleAdd = () => {
  formData.value.push({
    registry: '',
    username: '',
    password: ''
  })
}

// 删除
const handleDelete = (index) => {
  formData.value.splice(index, 1)
}

const result = ref({})
const transformation = (parentFrom) => {
  result.value.auths = {}
  for (const val of formData.value) {
    if (val.registry) {
      result.value.auths[val.registry] = {
        username: val.username,
        password: val.password,
        auth: Base64.encode(val.username + ':' + val.password)
      }
    }
    parentFrom.data = { '.dockerconfigjson': Base64.encode(JSON.stringify(result.value)) }
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
