<template>
  <div>
    <el-link v-if="showExpand" @click="showItem=!showItem">
      {{ showItem ? "收起" : "展开" }}
    </el-link>
    <div v-if="showItem">
      <div v-for="(value,key,index) in detailKeyValueData" :key="index" class="myTag">
        <el-tag v-if="value.length < 50" type="info" size="small">
          {{ key }} = {{ value }}
        </el-tag>
        <el-tooltip v-if="value.length > 50" :content="value" placement="top">
          <el-tag v-if="value.length >= 50" type="info" size="small">
            {{ key }} = {{ value.substring(0, 50) + "..." }}
          </el-tag>
        </el-tooltip>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailKeyValue',
}
</script>
<script setup>
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
const detailKeyValueData = ref({})
const showItem = ref(false)
const showExpand = ref(false)
const detailKeyValueInit = () => {
  detailKeyValueData.value = props.form
  showExpand.value = Object.keys(detailKeyValueData).length > 5
  showItem.value = !showExpand.value
}
detailKeyValueInit()
</script>
<style scoped>

</style>
