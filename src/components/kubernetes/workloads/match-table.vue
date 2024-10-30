<template>
  <div>
    <el-form label-position="top">
      <table style="width: 100%" class="tab-table">
        <tr v-for="(row, index) in matchTablesData" :key="index">
          <td width="40%">
            <form-item-block v-model="row.key" item-type="input" />
          </td>
          <td width="16%">
            <form-item-block v-model="row.operator" item-type="select" :selections="operator_list" />
          </td>
          <td width="40%">
            <form-item-block v-if="row.operator === 'Exists' || row.operator === 'DoesNotExist'" disabled item-type="input" value="N/A" />
            <form-item-block v-else v-model="row.value" item-type="input" />
          </td>
          <td>
            <el-button type="danger" link icon="delete" size="small" @click="handleMatchDelete(index)">删除</el-button>
          </td>
        </tr>
        <tr>
          <td align="left">
            <el-button size="small" type="primary" link icon="plus" @click="handleMatchAdd">添加</el-button>
          </td>
        </tr>
      </table>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'MatchTable',
}
</script>
<script setup>
import FormItemBlock from '@/components/kubernetes/form-item/index.vue'
import { ref } from 'vue'
const props = defineProps({
  matchTables: {
    default: function() {
      return []
    },
    type: Array
  }
})

// 数据初始化
const matchTablesData = ref({})
const operator_list = ref([])
const priority = ref('')
const FormInitData = () => {
  matchTablesData.value = props.matchTables
  priority.value = 'Preferred'
  operator_list.value = [
    { label: 'Lt', value: 'Lt' },
    { label: 'Gt', value: 'Gt' },
    { label: 'Exists', value: 'Exists' },
    { label: 'DoesNotExist', value: 'DoesNotExist' },
    { label: 'In', value: 'In' },
    { label: 'NotIn', value: 'NotIn' },
  ]
}

FormInitData()

const handleMatchDelete = (index) => {
  matchTablesData.value.splice(index, 1)
}

const handleMatchAdd = () => {
  var item = {
    key: '',
    operator: '',
    value: '',
  }
  matchTablesData.value.push(item)
}
</script>
<style scoped>

</style>
