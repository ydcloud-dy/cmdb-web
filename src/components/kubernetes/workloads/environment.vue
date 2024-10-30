<template>
  <div>
    <el-form ref="form" label-position="top" :model="formData">
      <table style="width: 98%" class="tab-table">
        <tr>
          <th scope="col" width="50%" align="left"><label>键</label></th>
          <th scope="col" width="50%" align="left"><label>值</label></th>
        </tr>
        <tr v-for="(row, index) in formData.env" :key="index">
          <td>
            <form-item-block v-model="row.name" item-type="input" />
          </td>
          <td>
            <form-item-block v-model="row.value" item-type="textarea" />
          </td>
          <td>
            <el-button type="danger" link icon="delete" size="small" @click="handleDelete(index)">
              删除
            </el-button>
          </td>
        </tr>
        <tr>
          <td align="left">
            <el-button size="small" type="primary" link icon="plus" @click="handleAdd">添加环境变量</el-button>
          </td>
        </tr>
      </table>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'Environment',
}
</script>
<script setup>
import { ref } from 'vue'
import FormItemBlock from '@/components/kubernetes/form-item/index.vue'
const props = defineProps({
  form: {
    default: function() {
      return {}
    },
    type: Object
  }
})

// 数据初始化
const formData = ref({})
const FormInitData = () => {
  formData.value = props.form
  if (!formData.value.env) {
    formData.value.env = []
  }
}

FormInitData()

const handleAdd = () => {
  formData.value.env.push({ name: '', value: '' })
}

const handleDelete = (index) => {
  formData.value.env.splice(index, 1)
}

</script>
<style scoped>

</style>
