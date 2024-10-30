<template>
  <div>
    <el-form>
      <table style="width: 98%" class="tab-table">
        <tr>
          <th scope="col" width="25%" align="left">
            <label>键</label>
          </th>
          <th scope="col" width="10%" align="left">
            <label>运算符</label>
          </th>
          <th scope="col" width="25%" align="left">
            <label>值</label>
          </th>
          <th scope="col" width="16%" align="left">
            <label>影响</label>
          </th>
          <th scope="col" width="15%" align="left">
            <label>容忍时间(秒)</label>
          </th>
          <th align="left" />
        </tr>
        <tr v-for="(row, index) in formData" :key="index">
          <td>
            <form-item-block v-model="row.key" item-type="input" />
          </td>
          <td>
            <form-item-block v-model="row.operator" item-type="select" :selections="operatorList" />
          </td>
          <td>
            <form-item-block v-if="row.operator === 'Exists'" v-model="row.value" disabled placeholder="N/A" item-type="input" />
            <form-item-block v-if="row.operator !== 'Exists'" v-model="row.value" item-type="input" />
          </td>
          <td>
            <form-item-block v-model="row.effect" item-type="select" :selections="effectList" />
          </td>
          <td>
            <form-item-block v-model.number="row.tolerationSeconds" :disabled="row.effect !== 'NoExecute'" item-type="number" devider-name="秒" />
          </td>
          <td>
            <el-button type="danger" link icon="delete" size="small" @click="handleTolerationsDelete(index)">删除</el-button>
          </td>
        </tr>
        <tr>
          <td align="left">
            <el-button size="small" type="primary" link icon="plus" @click="handleTolerationsAdd">添加容忍</el-button>
          </td>
        </tr>
      </table>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'TolerationsBlock',
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
})

// 数据初始化
const formData = ref([])
const operatorList = ref([{ label: 'Exists', value: 'Exists' }, { label: '=', value: 'Equal' }])
const effectList = ref([
  { label: '不调度', value: 'NoSchedule' },
  { label: '倾向与不调度', value: 'PreferNoSchedule' },
  { label: '不执行', value: 'NoExecute' }])
const FormInitData = () => {
  if (props.form.tolerations) {
    formData.value = props.form.tolerations
  }
}

FormInitData()

// 删除容忍
const handleTolerationsDelete = (index) => {
  formData.value.splice(index, 1)
}

// 添加容忍
const handleTolerationsAdd = () => {
  var item = {
    key: '',
    operator: '',
    value: '',
    effect: '',
    tolerationSeconds: '',
  }
  formData.value.push(item)
}

// 返回父页面数据格式化
const transformation = (parentFrom) => {
  const tolerations = []
  for (const item of formData.value) {
    tolerations.push({
      key: item.key || undefined,
      operator: item.operator || undefined,
      value: item.value || undefined,
      effect: item.effect || undefined,
      tolerationSeconds: item.tolerationSeconds || undefined,
    })
  }
  parentFrom.tolerations = tolerations.length !== 0 ? tolerations : undefined
}

// 格式化为对象返回父页面
const transformationformat = async(parentForm) => {
  transformation(parentForm)
}

defineExpose({
  transformationformat
})
</script>
<style scoped>

</style>
