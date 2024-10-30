<template>
  <div>
    <el-select v-if="itemTypeData==='select'" filterable :clearable="!noClearData" style="width: 100%;" v-bind="$attrs">
      <el-option v-for="(item, index) in selections" :key="index" :label="item.label" :value="item.value" />
    </el-select>

    <el-select v-if="itemTypeData==='select2'" filterable :clearable="!noClearData" style="width: 100%;" v-bind="$attrs">
      <el-option v-for="(item, index) in selectionsData" :key="index" :label="item" :value="item" />
    </el-select>

    <el-input v-if="itemTypeData==='input'" clearable v-bind="$attrs">
      <template v-if="deviderNameData" slot="append">{{ deviderNameData }}</template>
    </el-input>

    <el-input v-if="itemTypeData==='password'" type="password" clearable v-bind="$attrs">
      <template v-if="deviderNameData" slot="append">{{ deviderNameData }}</template>
    </el-input>

    <el-input v-if="itemTypeData==='number'" clearable v-bind="$attrs">
      <template v-if="deviderNameData" slot="append">{{ deviderNameData }}</template>
    </el-input>

    <div v-if="itemTypeData==='checkbox'">
      <el-checkbox-group v-bind="$attrs">
        <el-checkbox v-for="(item, index) in checksData" :key="index" :label="item.value">{{ item.label }}</el-checkbox>
      </el-checkbox-group>
    </div>

    <div v-if="itemTypeData==='radio' && radioLayoutData === 'vertical'" style="display: block;">
      <el-radio-group v-bind="$attrs">
        <el-radio v-for="(item, index) in radiosData" :key="index" :disabled="item.disabledOption" :label="item.value" style="display: block; line-height: 25px">{{ item.label }}
        </el-radio>
      </el-radio-group>
    </div>
    <div v-if="itemTypeData==='radio' && !radioLayoutData">
      <el-radio-group v-bind="$attrs">
        <el-radio v-for="(item, index) in radios" :key="index" :disabled="item.disabledOption" :label="item.value">
          {{ item.label }}
        </el-radio>
      </el-radio-group>
    </div>
    <el-input v-if="itemTypeData==='textarea'" style="width:100%;" type="textarea" :rows="1" v-bind="$attrs" :autosize="{maxRows:10}">
      <template v-if="deviderNameData" slot="append">{{ deviderNameData }}</template>
    </el-input>
  </div>
</template>

<script>
export default {
  name: 'FormItemBlock',
}
</script>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  itemType: {
    default: function() {
      return ''
    },
    type: String
  },
  selections: {
    default: function() {
      return []
    },
    type: Array
  },
  noClear: {
    default: function() {
      return ''
    },
    type: Boolean
  },
  deviderName: {
    default: function() {
      return ''
    },
    type: String
  },
  radios: {
    default: function() {
      return []
    },
    type: Array
  },
  radioLayout: {
    default: function() {
      return ''
    },
    type: String
  },
  checks: {
    default: function() {
      return []
    },
    type: Array
  },
})

// 数据初始化
const itemTypeData = ref('')
const selectionsData = ref([])
const noClearData = ref(false)
const deviderNameData = ref('')
const radiosData = ref([])
const radioLayoutData = ref('')
const checksData = ref([])
const FormInitData = () => {
  itemTypeData.value = props.itemType
  selectionsData.value = props.selections
  noClearData.value = props.noClear
  deviderNameData.value = props.deviderName
  radiosData.value = props.radios
  radioLayoutData.value = props.radioLayout
  checksData.value = props.checks
}

FormInitData()
</script>
<style scoped>

</style>
