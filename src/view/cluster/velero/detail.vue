<template>
  <div>
    <el-row :gutter="20" class="row-box">
      <el-col :span="24">
        <el-card class="el-card">
          <detail-basic :form="detailData" />
        </el-card>
      </el-col>
      <el-col :span="24">
        <el-tabs v-model="activeName" type="border-card">
          <el-tab-pane name="pods" label="容器组">
            <detail-pods :data="detailData" :selectors="Selectors" />
          </el-tab-pane>
          <el-tab-pane v-if="detailData.spec.length !== 0" name="ports" label="端口">
            <detail-ports :data="detailData.spec.ports" />
          </el-tab-pane>
        </el-tabs>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'DetailBlock',
}
</script>
<script setup>
import DetailBasic from '@/components/kubernetes/detail/detail-basic.vue'
import DetailPods from '@/components/kubernetes/detail/detail-pods.vue'
import DetailPorts from '@/components/kubernetes/detail/detail-ports.vue'
import { ref } from 'vue'
const props = defineProps({
  data: {
    default: function() {
      return {}
    },
    type: Object
  },
})

// 标签选择器
const Selectors = ref('')
const SelectormatchLabel = async() => {
  if (detailData.value.spec.selector) {
    for (const key in detailData.value.spec.selector) {
      if (Object.prototype.hasOwnProperty.call(detailData.value.spec.selector, key)) {
        Selectors.value += key + '=' + detailData.value.spec.selector[key] + ','
      }
    }
    Selectors.value = Selectors.value.length !== 0 ? Selectors.value.substring(0, Selectors.value.length - 1) : ''
  }
}
// 数据初始化
const activeName = ref('')
const detailData = ref({})
const detailInitData = () => {
  activeName.value = 'pods'
  detailData.value = props.data
  SelectormatchLabel()
}

detailInitData()

</script>
<style scoped>

</style>
