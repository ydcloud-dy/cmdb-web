<template>
  <div>
    <el-form>
      <el-form-item label="注解">
        <table style="width: 100%" class="tab-table">
          <tr v-for="(row,index) in annotations" :key="index">
            <td width="48%">
              <form-item-block v-model="row.key" placeholder="请输入键" item-type="input" />
            </td>
            <td width="48%">
              <form-item-block v-model="row.value" placeholder="请输入值" item-type="input" />
            </td>
            <td width="4%">
              <el-button type="danger" link icon="delete" size="small" @click="handleDelete(annotations, index)">删除</el-button>
            </td>
          </tr>
          <tr>
            <td align="left">
              <el-button size="small" type="primary" link icon="Plus" @click="handleAdd(annotations)">添加</el-button>
            </td>
          </tr>
        </table>
      </el-form-item>
      <el-form-item label="标签">
        <table style="width: 100%" class="tab-table">
          <tr v-for="(row,index) in labels" :key="index">
            <td width="48%">
              <form-item-block v-model="row.key" placeholder="请输入键" item-type="input" />
            </td>
            <td width="48%">
              <form-item-block v-model="row.value" placeholder="请输入值" item-type="input" />
            </td>
            <td width="4%">
              <el-button type="danger" link icon="delete" size="small" @click="handleDelete(labels, index)">删除</el-button>
            </td>
          </tr>
          <tr>
            <td align="left">
              <el-button size="small" type="primary" link icon="Plus" @click="handleAdd(labels)">添加</el-button>
            </td>
          </tr>
        </table>
      </el-form-item>
      <el-form-item v-if="operation === 'create'" label="标签选择器">
        <warning-bar title="注：标签选择器的键值，必须为基于标签等值或者集合" />
        <table style="width: 100%" class="tab-table">
          <tr v-for="(row,index) in matchLabels" :key="index">
            <td width="48%">
              <form-item-block v-model="row.key" placeholder="请输入键" item-type="input" />
            </td>
            <td width="48%">
              <form-item-block v-model="row.value" placeholder="请输入值" item-type="input" />
            </td>
            <td width="4%">
              <el-button type="danger" link icon="delete" size="small" @click="handleDelete(matchLabels, index)">删除</el-button>
            </td>
          </tr>
          <tr>
            <td align="left">
              <el-button size="small" type="primary" link icon="Plus" @click="handleAdd(matchLabels)">添加</el-button>
            </td>
          </tr>
        </table>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'KVTableBlock'
}
</script>
<script setup>
import WarningBar from '@/components/warningBar/warningBar.vue'
import FormItemBlock from '@/components/kubernetes/form-item/index.vue'
import { parseArryToObj, parseObjToArry } from '@/utils/objArryParse'
import { ref } from 'vue'
const props = defineProps({
  form: {
    default: function() {
      return {}
    },
    type: Object
  },
  operation: {
    default: function() {
      return 0
    },
    type: String
  },
  readonly: {
    default: function() {
      return false
    },
    type: Boolean
  },
})

// 数据初始化
const formData = ref({})
const annotations = ref([])
const labels = ref([])
const matchLabels = ref([])
const operation = ref('')
const readonly = ref(false)
const FormInitData = () => {
  formData.value = props.form
  operation.value = props.operation
  readonly.value = props.readonly
  if (props.form.metadata) {
    if (props.form.metadata.labels) {
      labels.value = parseObjToArry(props.form.metadata.labels)
    }
  }

  if (props.form.metadata) {
    if (props.form.metadata.annotations) {
      annotations.value = parseObjToArry(props.form.metadata.annotations)
    }
  }

  if (props.form.spec.selector) {
    if (props.form.spec.selector.matchLabels) {
      matchLabels.value = parseObjToArry(props.form.spec.selector.matchLabels)
    }
  }
}

FormInitData()
// 删除
const handleDelete = (data, index) => {
  data.splice(index, 1)
}

const handleAdd = (data) => {
  const item = {
    key: '',
    value: '',
  }
  data.push(item)
}

const transformation = (parentForm, podMetadata) => {
  if (!podMetadata.labels) {
    podMetadata.labels = {}
  }
  if (operation.value === 'create') {
    const labelstmp = parseArryToObj(labels.value)
    parentForm.spec.selector = { matchLabels: {}}
    for (const key in labelstmp) {
      podMetadata.labels[key] = labelstmp[key]
      parentForm.metadata.labels[key] = labelstmp[key]
      parentForm.spec.selector.matchLabels[key] = labelstmp[key]
    }
    parentForm.metadata.annotations = parseArryToObj(annotations.value)
    return
  }

  const selectors = parseArryToObj(matchLabels.value)
  parentForm.spec.selector = { matchLabels: {}}
  for (const key in selectors) {
    podMetadata.labels[key] = selectors[key]
    parentForm.spec.selector.matchLabels[key] = selectors[key]
  }
  parentForm.metadata.labels = parseArryToObj(labels.value)
  parentForm.metadata.annotations = parseArryToObj(annotations.value)
}

// 格式化为对象返回父页面
const transformationformat = async(parentForm, podMetadata) => {
  transformation(parentForm, podMetadata)
}

defineExpose({
  transformationformat
})

</script>
<style scoped>
</style>
