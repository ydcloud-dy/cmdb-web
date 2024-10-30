<template>
  <div style="margin-top: 20px">
    <el-card class="box-card" shadow="hover">
      <table style="width: 98%" class="tab-table">
        <tr>
          <th scope="col" width="48%">
            <label>键</label>
          </th>
          <th scope="col" width="48%">
            <label>值</label>
          </th>
          <th align="left" />
        </tr>
        <tr v-for="label in data" :key="label.index">
          <td>
            <form-item-block
              v-model="label.key"
              placeholder="键"
              clearable
              item-type="input"
            />
          </td>
          <td>
            <form-item-block
              v-model="label.value"
              placeholder="值"
              clearable
              item-type="textarea"
            />
          </td>
          <td>
            <el-button type="danger" link icon="delete" size="small" @click="handleDelete(label)">删除
            </el-button>
          </td>
        </tr>
        <tr>
          <td align="left">
            <el-button size="small" type="primary" link icon="plus" @click="handleAdd">添加</el-button>
            <el-upload :before-upload="readFile" action="">
              <el-button size="small" type="primary" link icon="UploadFilled">上传</el-button>
            </el-upload>
          </td>
        </tr>
      </table>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'SecretData',
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
  },
  base64checked: {
    default: function() {
      return false
    },
    type: Boolean
  },
})

// 数据初始化
const data = ref([])
const FormInitData = () => {
  if (props.form) {
    for (const key in props.form) {
      if (Object.prototype.hasOwnProperty.call(props.form, key)) {
        const value = Base64.decode(props.form[key])
        data.value.push({
          index: Math.random(),
          key: key,
          value: value,
        })
      }
    }
  }
}

FormInitData()

// 删除
const handleDelete = (row) => {
  for (let i = 0; i < data.value.length; i++) {
    if (data.value[i] === row) {
      data.value.splice(i, 1)
    }
  }
}

// 添加
const handleAdd = () => {
  data.value.push({ index: Math.random(), key: '', value: '' })
}

// 文件上传
const readFile = (file) => {
  const reader = new FileReader()
  reader.readAsText(file)
  reader.onerror = e => {
    console.log('error' + e)
  }
  reader.onload = () => {
    const item = {
      index: Math.random(),
      key: file.name,
      value: reader.result,
    }
    data.value.push(item)
  }
  return false
}

const transformation = (parentFrom) => {
  if (data.value && data.value.length > 0) {
    const obj = {}
    for (let i = 0; i < data.value.length; i++) {
      if (data.value[i].key !== '') {
        obj[data.value[i].key] = Base64.encode(data.value[i].value)
      }
    }
    parentFrom.data = obj
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
