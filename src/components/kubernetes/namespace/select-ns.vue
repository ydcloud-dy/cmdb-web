<template>
  <el-select v-model="namespaceStr" filterable @change="handleNamespaceChange">
    <el-option
      v-for="item in namespace_list"
      :key="item.id"
      :label="item.name"
      :value="item.name"
    />
  </el-select>
</template>

<script>
export default {
  name: 'NamespaceSelectBlock',
  emits: {
    enter: (value) => {
      if (value.length === 1) {
        return true
      } else {
        return false
      }
    },
  }
}
</script>
<script setup>
import { ref } from 'vue'
import { getClusterUserNamespace } from '@/api/kubernetes/namespaces'
const emit = defineEmits(['enter'])
const props = defineProps({
  namespace: {
    default: function() {
      return ''
    },
    type: String
  },
  cluster: {
    default: function() {
      return 0
    },
    type: Number
  },
})

// 命名空间
const getNamespaceData = async(cluster_id) => {
  const res = await getClusterUserNamespace({ 'id': cluster_id })
  if (res.code === 0) {
    namespace_list.value = []
    for (const ns of res.data.namespaces) {
      const item = {
        id: Math.random(),
        name: ns,
      }
      namespace_list.value.push(item)
    }
  }
}

// 数据初始化
const namespaceStr = ref('')
const cluster_id = ref(0)
const namespace_list = ref([])
const FormInitData = () => {
  namespaceStr.value = props.namespace
  cluster_id.value = props.cluster
  getNamespaceData(cluster_id.value)
}

FormInitData()

const handleNamespaceChange = (value) => {
  emit('enter', value)
}
</script>
<style scoped>

</style>
