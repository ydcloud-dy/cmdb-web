<template>
  <div style="margin-top: 20px">
    <el-card class="box-card" shadow="hover">
      <template #header>
        <div class="card-header">
          <span>{{ title }}</span>
        </div>
      </template>
      <el-row>
        <el-col :span="24">
          <el-form :disabled="isReadOnly">
            <table style="width: 98%" class="tab-table">
              <tr>
                <th scope="col" width="48%" align="left">
                  <label>键</label>
                </th>
                <th scope="col" width="48%" align="left">
                  <label>值</label>
                </th>
                <th align="left" />
              </tr>
              <tr v-for="(row, index) in formData" :key="index">
                <td>
                  <form-item-block v-model="row.key" placeholder="e.g. foo" item-type="input" />
                </td>
                <td>
                  <form-item-block
                    v-model="row.value"
                    placeholder="e.g. bar"
                    item-type="textarea"
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
          </el-form>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'KeyValueBlock',
}
</script>
<script setup>
import FormItemBlock from '@/components/kubernetes/form-item/index.vue'
import { ref } from 'vue'
const props = defineProps({
  form: {
    default: function() {
      return {}
    },
    type: Object
  },
  title: {
    default: function() {
      return ''
    },
    type: String
  }
})

// 数据初始化
const formData = ref([])
const isReadOnly = ref(false)
const title = ref('')
const FormInitData = () => {
  title.value = props.title
  if (props.form) {
    for (const key in props.form) {
      if (Object.prototype.hasOwnProperty.call(props.form, key)) {
        formData.value.push({
          index: Math.random(),
          key: key,
          value: props.form[key],
        })
      }
    }
  }
  isReadOnly.value = props.isreadonly
}

FormInitData()

// 添加
const handleAdd = () => {
  const item = {
    index: Math.random(),
    key: '',
    value: '',
  }
  formData.value.push(item)
}

// 删除
const handleDelete = (index) => {
  formData.value.splice(index, 1)
}

const transformation = (parentFrom, type) => {
  if (formData.value) {
    const obj = {}
    for (let i = 0; i < formData.value.length; i++) {
      if (formData.value[i].key !== '') {
        obj[formData.value[i].key] = formData.value[i].value
      }
    }

    switch (type) {
      case 'selector':
        if (parentFrom.spec) {
          parentFrom.spec.selector = obj
        }
        break
      case 'labels':
        if (parentFrom.metadata) {
          parentFrom.metadata.labels = obj
        }
        break
      case 'annotations':
        if (parentFrom.metadata) {
          parentFrom.metadata.annotations = obj
        }
        break
      case 'data':
        if (parentFrom) {
          parentFrom.data = obj
        }
        break
      case 'binaryData':
        if (parentFrom) {
          parentFrom.binaryData = obj
        }
        break
    }
  }
}

// 格式化为对象返回父页面
const transformationformat = async(parentFrom, type) => {
  transformation(parentFrom, type)
}

defineExpose({
  transformationformat
})
</script>
<style scoped>

</style>
