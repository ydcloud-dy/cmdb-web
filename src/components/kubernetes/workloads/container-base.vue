<template>
  <el-form>
    <el-row style="margin-top: 20px;">
      <el-col :span="6">
        <el-radio-group v-model="selectContainerType" style="width: 100%" @change="selectContainer(true)">
          <el-radio-button v-for="(item, index) in type_list" :key="index" style="width: 50%" :label="item.value">{{ item.label }}</el-radio-button>
        </el-radio-group>
      </el-col>
      <el-col :key="isRefresh" :span="14">
        <el-form-item>
          <el-select v-if="selectContainerType === 'standardContainers'" v-model="selectContainerIndex" style="width:100%" @change="selectContainer(false)">
            <el-option v-for="(item, index) in formData.containers" :key="index" :label="item.name" :value="index" />
          </el-select>
          <el-select v-if="selectContainerType === 'initContainers'" v-model="selectContainerIndex" style="width:100%" @change="selectContainer(false)">
            <el-option v-for="(item, index) in formData.initContainers" :key="index" :label="item.name" :value="index" />
          </el-select>
        </el-form-item>
      </el-col>
      <el-col :span="2">
        <div>
          <el-button size="small" type="primary" link icon="plus" style="width:100%" @click="handleAddContainer">添加</el-button>
        </div>
      </el-col>
      <el-col :span="2">
        <div>
          <el-button type="danger" link icon="delete" size="small" style="width:100%" @click="handleDeleteContainer">删除</el-button>
        </div>
      </el-col>
    </el-row>
  </el-form>
</template>

<script>
export default {
  name: 'Containers',
}
</script>
<script setup>
import { ref } from 'vue'
const emit = defineEmits(['addContainer', 'deleteContainer', 'refreshContainer'])
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
const isRefresh = ref(false)
const initContainers = ref([])
const containers = ref([])
const type_list = ref([
  { label: '初始化容器', value: 'initContainers' },
  { label: '标准容器', value: 'standardContainers' },
])
const selectContainerIndex = ref(0)
const currentContainerIndex = ref(0)
const selectContainerType = ref('standardContainers')
const currentContainerType = ref('standardContainers')
const currentContainer = ref({})

const FormInitData = () => {
  formData.value = props.form
  containers.value = formData.value.containers
  initContainers.value = formData.value.initContainers
}

// 选中容器类型
const selectContainer = (isChangeType) => {
  selectContainerIndex.value = isChangeType ? 0 : selectContainerIndex.value
  if (selectContainerType.value === 'initContainers') {
    if (!initContainers.value || initContainers.value.length === 0) {
      const itemContainer = { name: 'init-container-0', image: '', imagePullPolicy: 'IfNotPresent' }
      initContainers.value = [itemContainer]
      currentContainerType.value = selectContainerType.value
      currentContainerIndex.value = selectContainerIndex.value
      currentContainer.value = initContainers.value[currentContainerIndex.value]
      emit('addContainer', currentContainerType.value, itemContainer)
      emit('refreshContainer', currentContainerType.value, currentContainerIndex.value, currentContainer.value)
    } else {
      currentContainerType.value = selectContainerType.value
      currentContainerIndex.value = selectContainerIndex.value
      currentContainer.value = initContainers.value[currentContainerIndex.value]
      emit('refreshContainer', currentContainerType.value, currentContainerIndex.value, currentContainer.value)
      isRefresh.value = !isRefresh.value
    }
  } else {
    currentContainerType.value = selectContainerType.value
    currentContainerIndex.value = selectContainerIndex.value
    currentContainer.value = containers.value[currentContainerIndex.value]
    emit('refreshContainer', currentContainerType.value, currentContainerIndex.value, currentContainer.value)
    isRefresh.value = !isRefresh.value
  }
}

// 添加容器
const handleAddContainer = () => {
  const itemContainer = ref({})
  itemContainer.value.image = ''
  itemContainer.value.stdin = false
  itemContainer.value.tty = true
  itemContainer.value.imagePullPolicy = 'Always'
  if (selectContainerType.value === 'initContainers') {
    if (initContainers.value) {
      itemContainer.value.name = 'init-container-' + initContainers.value.length.toString()
    } else {
      initContainers.value = []
      itemContainer.value.name = 'init-container-0'
    }
    initContainers.value.push(itemContainer.value)
  } else {
    itemContainer.value.name = 'container-' + containers.value.length.toString()
    containers.value.push(itemContainer.value)
  }
  emit('addContainer', currentContainerType.value, itemContainer.value)
}

// 删除容器
const handleDeleteContainer = () => {
  selectContainerIndex.value = 0
  if (selectContainerType.value === 'initContainers') {
    emit('deleteContainer', currentContainerType.value, currentContainerIndex.value)
    if (initContainers.value.length <= currentContainerIndex.value) {
      return
    }
    if (initContainers.value.length === 1) {
      initContainers.value = null
      selectContainerType.value = 'standardContainers'
      currentContainerType.value = 'standardContainers'
      currentContainer.value = containers.value[0]
    } else {
      initContainers.value.splice(currentContainerIndex.value, 1)
      currentContainer.value = initContainers.value[0]
    }
  } else {
    if (containers.value.length <= currentContainerIndex.value || containers.value.length === 1) {
      return
    } else {
      emit('deleteContainer', currentContainerType.value, currentContainerIndex.value)
      containers.value.splice(currentContainerIndex.value, 1)
      currentContainer.value = containers.value[0]
    }
  }
  currentContainerIndex.value = 0
  isRefresh.value = !isRefresh.value
  emit('refreshContainer', currentContainerType.value, currentContainerIndex.value, currentContainer.value)
}
FormInitData()
</script>
<style scoped>

</style>
