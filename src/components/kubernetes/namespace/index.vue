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
const emit = defineEmits(['enter'])
const props = defineProps({
  // eslint-disable-next-line vue/prop-name-casing
  namespace_list: {
    default: function() {
      return []
    },
    type: Array
  },
  namespace: {
    default: function() {
      return ''
    },
    type: String
  },
})

// 数据初始化
const namespaceStr = ref('')
const namespace_list = ref([])
const FormInitData = () => {
  namespaceStr.value = props.namespace
  namespace_list.value = props.namespace_list
}

FormInitData()

const handleNamespaceChange = (value) => {
  emit('enter', value)
}
</script>
<style scoped>

</style>
