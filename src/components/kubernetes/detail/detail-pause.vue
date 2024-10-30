<template>
  <div>
    <h3>暂停</h3>
    <warning-bar title="注：通过设置 paused 为 true 暂停发布，不过控制器还是会做 replicas 数量管理" />
    <div>
      <el-form ref="form" label-position="top" :model="Detaildata">
        <el-row :gutter="20">
          <el-col :span="24">
            <el-form-item label="状态" prop="spec.paused">
              <el-radio-group v-model="Detaildata.spec.paused" @change="changeStatus(Detaildata)">
                <el-radio :label="true">暂停</el-radio>
                <el-radio :label="false">非暂停</el-radio>
              </el-radio-group>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item label="最小就绪时间(秒)" prop="spec.minReadySeconds">
              <span>{{ Detaildata.spec.minReadySeconds || 0 }}</span>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="进程截止时间(秒)" prop="spec.progressDeadlineSeconds">
              <span>{{ Detaildata.spec.progressDeadlineSeconds || 0 }}</span>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailReplicas',
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
  if (Detaildata.value.spec.paused === undefined) {
    Detaildata.value.spec.paused = false
  }
}

DetailDataInit()

// 更新
const changeStatus = () => {
  if (Detaildata.value.metadata.resourceVersion) {
    delete Detaildata.value.metadata.resourceVersion
  }
  if (Detaildata.value.spec.paused) {
    emit('update', Detaildata.value)
    enableEdit.value = true
  } else {
    emit('update', Detaildata.value)
    enableEdit.value = false
  }
}
</script>
<style scoped>

</style>
