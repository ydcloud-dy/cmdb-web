<template>
  <div>
    <h3>部署策略</h3>
    <el-button v-if="!enableEdit" style="margin-left: 10px;" size="small" type="primary" icon="edit" @click="enableEdit = true">
      编辑信息
    </el-button>
    <div>
      <el-form ref="form" label-position="top" :model="Detaildata">
        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item label="策略" prop="spec.strategy.type" required>
              <span v-if="!enableEdit" style="margin-left: 10px;">{{ getLabels(Detaildata.spec.strategy.type) }}</span>
              <el-select v-else v-model="Detaildata.spec.strategy.type" style="width:100%" @change="typeChange(Detaildata)">
                <el-option v-for="(item, index) in DeploymentStrategyList" :key="index" :label="item.label" :value="item.value" />
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row v-if="Detaildata.spec.strategy.type === 'RollingUpdate'" :gutter="20">
          <el-col :span="12">
            <el-form-item label="最大Pod数量" prop="spec.strategy.rollingUpdate.maxSurge">
              <span v-if="!enableEdit" style="margin-left: 10px;">{{ Detaildata.spec.strategy.rollingUpdate.maxSurge }}</span>
              <el-input v-else v-model="Detaildata.spec.strategy.rollingUpdate.maxSurge" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="最大不可用数量" prop="spec.strategy.rollingUpdate.maxUnavailable">
              <span v-if="!enableEdit" style="margin-left: 10px;">{{ Detaildata.spec.strategy.rollingUpdate.maxUnavailable }}</span>
              <el-input v-else v-model="Detaildata.spec.strategy.rollingUpdate.maxUnavailable" />
            </el-form-item>
          </el-col>
        </el-row>
        <div v-if="enableEdit" style="float:right">
          <el-button @click="handleUpdate(Detaildata)">提交</el-button>
          <el-button @click="enableEdit = false">取消</el-button>
        </div>
        <br>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailUpdate',
  emits: {
    update: () => {
      return true
    },
  }
}
</script>
<script setup>
import { ref } from 'vue'
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
const DeploymentStrategyList = ref([
  { label: '滚动升级', value: 'RollingUpdate' },
  { label: '重新创建', value: 'Recreate' },
])
const Detaildata = ref({})
const enableEdit = ref(false)
const DetailDataInit = async() => {
  Detaildata.value = props.data
}

DetailDataInit()

const typeChange = (value) => {
  switch (value) {
    case 'RollingUpdate':
      value.spec.strategy.type = 'RollingUpdate'
      value.spec.strategy.rollingUpdate = {
        maxSurge: 0,
        maxUnavailable: 0,
      }
      return
    case 'Recreate':
      value.spec.strategy.type = 'Recreate'
      delete value.spec.strategy.rollingUpdate
      return
  }
}

const getLabels = (value) => {
  switch (value) {
    case 'RollingUpdate':
      return '滚动升级'
    case 'Recreate':
      return '重新创建'
    case 'OnDelete':
      return '删除'
  }
}

// 更新
const handleUpdate = (value) => {
  emit('update', value)
  enableEdit.value = false
}
</script>
<style scoped>

</style>
