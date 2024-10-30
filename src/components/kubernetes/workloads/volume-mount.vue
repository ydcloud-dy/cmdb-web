<template>
  <div>
    <warning-bar v-if="!BlockStatus" title="注：请在上方选择，需要挂载的数据卷！" />
    <table v-if="BlockStatus" style="width: 100%;" class="tab-table">
      <tr>
        <th scope="col" width="15%" align="left"><label>数据卷(Volume)</label></th>
        <th scope="col" width="15%" align="left"><label>类型</label></th>
        <th scope="col" width="28%" align="left"><label>挂载路径</label></th>
        <th scope="col" width="26%" align="left"><label>卷内子路径</label></th>
        <th scope="col" width="4%" align="left"><label>只读</label></th>
        <th align="left" />
      </tr>
      <tr v-for="(row, index) in volumeMounts" :key="index">
        <td>
          <div v-if="BlockStatus">
            <el-select v-model="row.name" filterable @change="changeVolume(row)">
              <el-option v-for="(item, index) in volume_name_list" :key="index" :label="item" :value="item" />
            </el-select>
          </div>
        </td>
        <td>
          <form-item-block v-model="row.type" item-type="input" disabled />
        </td>
        <td>
          <form-item-block v-model="row.mountPath" item-type="input" />
        </td>
        <td>
          <form-item-block v-model="row.subPath" item-type="input" />
        </td>
        <td>
          <el-checkbox v-model="row.readOnly" />
        </td>
        <td>
          <el-button type="danger" link icon="delete" size="small" @click="handleMountDelete(index)">
            删除
          </el-button>
        </td>
      </tr>
      <tr>
        <td align="left">
          <el-button size="small" type="primary" link icon="plus" @click="handleMountAdd()">添加</el-button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'VolumeMount',
}
</script>
<script setup>
import { ref, watch } from 'vue'
import WarningBar from '@/components/warningBar/warningBar.vue'
import FormItemBlock from '@/components/kubernetes/form-item/index.vue'
const props = defineProps({
  form: {
    default: function() {
      return {}
    },
    type: Object
  },
  volumelist: {
    default: function() {
      return []
    },
    type: Array
  }
})

// 判断字符串是否在数组
const isInArray = (arr, str) => {
  var testStr = ',' + arr.join(',') + ','
  return testStr.indexOf(',' + str + ',') !== -1
}
// 数据监听
const volume_name_list = ref([])
const volume_list = ref([])
const volumeMounts = ref([])
const BlockStatus = ref(false)
watch(
  () => props.volumelist,
  () => {
    BlockStatus.value = false
    volume_list.value = props.volumelist
    const volume_name_tmp = ref([])
    for (const v of props.volumelist) {
      volume_name_tmp.value.push(v.name)
    }

    // 处理父页面绑定数据添加，删除
    volume_name_list.value = volume_name_tmp.value
    if (volume_name_list.value.length === 0) {
      volumeMounts.value = []
    } else {
      volumeMounts.value.forEach((v, index) => {
        if (!isInArray(volume_name_list.value, v.name)) {
          handleMountDelete(index)
        }
      })
    }
    BlockStatus.value = true
  }
)

// 选择卷类型赋值
const changeVolume = (row) => {
  for (const v of volume_list.value) {
    if (v.name === row.name) {
      row.type = v.type
      return
    }
  }
}

// 数据初始化
const formData = ref({})
const FormInitData = () => {
  BlockStatus.value = false
  formData.value = props.form
  volume_list.value = props.volumelist
  if (formData.value.volumeMounts) {
    for (const mount of formData.value.volumeMounts) {
      volume_name_list.value.push(mount.name)
      changeVolume(mount)
      volumeMounts.value.push(mount)
    }
  }
  BlockStatus.value = true
}

FormInitData()

// 添加挂载
const handleMountAdd = () => {
  volumeMounts.value.push({
    name: '',
    mountPath: '',
    subPath: '',
    readOnly: false,
  })
}

// 删除挂载
const handleMountDelete = (index) => {
  volumeMounts.value.splice(index, 1)
}

const formatformData = ref([])
const formDataFormat = () => {
  formatformData.value = []
  for (const mount of volumeMounts.value) {
    if (mount.name !== '') {
      formatformData.value.push({
        name: mount.name,
        mountPath: mount.mountPath || undefined,
        subPath: mount.subPath || undefined,
        readOnly: mount.readOnly || undefined,
      })
    }
  }
}

const transformation = (parentFrom) => {
  parentFrom.volumeMounts = []
  for (const mount of volumeMounts.value) {
    if (mount.name !== '') {
      parentFrom.volumeMounts.push({
        name: mount.name,
        mountPath: mount.mountPath || undefined,
        subPath: mount.subPath || undefined,
        readOnly: mount.readOnly || undefined,
      })
    }
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
