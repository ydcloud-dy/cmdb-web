<template>
  <div>
    <h3>发布暂停</h3>
    <warning-bar title="注：通过设置 paused 为 true 暂停发布，不过控制器还是会做 replicas 数量管理" />
    <div>
      <el-form ref="form" label-position="top" :model="Detaildata">
        <el-row :gutter="20">
          <el-col :span="24" v-if="Detaildata.spec.updateStrategy">
            <el-form-item label="状态" prop="spec.updateStrategy.rollingUpdate.paused">
              <el-radio-group v-model="Detaildata.spec.updateStrategy.paused" @change="changeStatus(Detaildata)">
                <el-radio :label="true">暂停</el-radio>
                <el-radio :label="false">非暂停</el-radio>
              </el-radio-group>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CloneSetPause',
}
</script>
<script setup>
import { ref } from 'vue'
import WarningBar from '@/components/warningBar/warningBar.vue'
const emit = defineEmits(['update'])
const props = defineProps({
  data: {
    default: function() {
      return {}
    },
    type: Object
  }
})

// 数据初始化
const Detaildata = ref({})
const enableEdit = ref(false)
const DetailDataInit = async() => {
  Detaildata.value = props.data
  if (Detaildata.value.spec.updateStrategy.paused === undefined) {
    Detaildata.value.spec.updateStrategy.paused = false
  }
}

DetailDataInit()

// 更新
const changeStatus = (Detaildata) => {
  if (Detaildata.spec.updateStrategy.paused) {
    emit('update', Detaildata)
    enableEdit.value = false
  } else {
    emit('update', Detaildata)
    enableEdit.value = false
  }
}
</script>
<style scoped>

</style>
