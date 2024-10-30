<template>
  <div>
    <h3>部署策略</h3>
    <el-button v-if="!enableEdit" style="margin-left: 10px;" size="small" type="primary" icon="edit" @click="enableEdit = true">
      编辑信息
    </el-button>
    <div v-if="Detaildata.spec.updateStrategy">
      <el-form ref="form" label-position="top" :model="Detaildata">
        <el-row :gutter="20">
          <el-col v-if="Detaildata.spec.updateStrategy.type" :span="12">
            <el-form-item label="策略" prop="spec.updateStrategy.type" required>
              <span v-if="!enableEdit" style="margin-left: 10px;">{{ getLabels(Detaildata.spec.updateStrategy.type) }}</span>
              <el-select v-else v-model="Detaildata.spec.updateStrategy.type" style="width:100%" @change="typeChange(Detaildata)">
                <el-option v-for="(item, index) in CloneSetStrategyList" :key="index" :label="item.label" :value="item.value" />
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col v-if="Detaildata.spec.updateStrategy.partition" :span="8">
            <el-form-item label="保留旧版本Pod的数量或百分比(%)" prop="spec.updateStrategy.partition">
              <span v-if="!enableEdit" style="margin-left: 10px;">{{ Detaildata.spec.updateStrategy.partition }} %</span>
              <el-input v-else v-model="Detaildata.spec.updateStrategy.partition" />
            </el-form-item>
          </el-col>
          <el-col v-if="Detaildata.spec.updateStrategy.inPlaceUpdateStrategy" :span="8">
            <el-form-item v-if="Detaildata.spec.updateStrategy.inPlaceUpdateStrategy.gracePeriodSeconds" label="等待时间(秒)" prop="spec.updateStrategy.inPlaceUpdateStrategy.gracePeriodSeconds">
              <span v-if="!enableEdit && Detaildata.spec.updateStrategy.inPlaceUpdateStrategy.gracePeriodSeconds" style="margin-left: 10px;">{{ Detaildata.spec.updateStrategy.inPlaceUpdateStrategy.gracePeriodSeconds }} 秒</span>
              <el-input v-else v-model="Detaildata.spec.updateStrategy.inPlaceUpdateStrategy.gracePeriodSeconds" />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="最大Pod数量(个)" prop="spec.updateStrategy.maxSurge">
              <span v-if="!enableEdit" style="margin-left: 10px;">{{ Detaildata.spec.updateStrategy.maxSurge }}</span>
              <el-input v-else v-model="Detaildata.spec.updateStrategy.maxSurge" />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="最大不可用数量(%)" prop="spec.strategy.updateStrategy.maxUnavailable">
              <span v-if="!enableEdit" style="margin-left: 10px;">{{ Detaildata.spec.updateStrategy.maxUnavailable }}</span>
              <el-input v-else v-model="Detaildata.spec.updateStrategy.maxUnavailable " />
            </el-form-item>
          </el-col>
        </el-row>
        <div v-if="enableEdit" style="float:right">
          <el-button @click="handleUpdate(Detaildata)">提交</el-button>
          <el-button @click="enableEdit = false">取消</el-button>
        </div>
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
const CloneSetStrategyList = ref([
  { label: '原地升级', value: 'InPlaceIfPossible' },
  { label: '重新创建', value: 'ReCreate' },
  { label: '只允许原地升级', value: 'InPlaceOnly' },
])
const Detaildata = ref({})
const enableEdit = ref(false)
const DetailDataInit = async() => {
  Detaildata.value = props.data
}

DetailDataInit()

const typeChange = (value) => {
  switch (value) {
    case 'InPlaceIfPossible':
      value.spec.updateStrategy = {
        'inPlaceUpdateStrategy': {
          'gracePeriodSeconds': 10
        },
        'maxSurge': 0,
        'maxUnavailable': '20%',
        'partition': 0,
        'paused': false,
        'type': 'InPlaceIfPossible'
      }
      return
    case 'ReCreate':
      value.spec.updateStrategy = {
        'inPlaceUpdateStrategy': {
          'gracePeriodSeconds': 10
        },
        'maxSurge': 0,
        'maxUnavailable': '20%',
        'partition': 0,
        'paused': false,
        'type': 'ReCreate'
      }
      return
    case 'InPlaceOnly':
      value.spec.updateStrategy = {
        'inPlaceUpdateStrategy': {
          'gracePeriodSeconds': 10
        },
        'maxSurge': 0,
        'maxUnavailable': '20%',
        'partition': 0,
        'paused': false,
        'type': 'InPlaceOnly'
      }
      return
  }
}

const getLabels = (value) => {
  switch (value) {
    case 'InPlaceIfPossible':
      return '原地升级'
    case 'ReCreate':
      return '重新创建'
    case 'InPlaceOnly':
      return '只允许原地升级'
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
