<template>
  <div>
    <el-form ref="form" label-position="top" :model="formData">
      <el-row :gutter="20">
        <el-col :span="12">
          <el-form-item label="策略" prop="strategy.type">
            <form-item-block v-if="isDeployment()" v-model="formData.strategy.type" item-type="radio" :radios="deployment_strategy_list" />
            <form-item-block v-else v-model="formData.strategy.type" item-type="radio" :radios="strategy_list" />
          </el-form-item>
        </el-col>
        <el-col v-if="isStatefulset()" :span="12">
          <el-form-item label="pod 管理策略" prop="podManagementPolicy">
            <form-item-block v-model="formData.podManagementPolicy" item-type="radio" :radios="pod_management_policy_list" />
          </el-form-item>
        </el-col>
      </el-row>

      <el-row v-if="formData.strategy.type === 'RollingUpdate'" :gutter="20">
        <el-col v-if="isDeployment()" :span="12">
          <el-form-item label="最大 Pod 数量" prop="strategy.rollingUpdate.maxSurge">
            <el-input v-model.number="formData.strategy.rollingUpdate.maxSurge" on-keypress="return (/[\d]/.test(String.fromCharCode(event.keyCode)))" />
          </el-form-item>
        </el-col>
        <el-col v-if="isDeployment() || isDaemonset()" :span="12">
          <el-form-item label="最大不可用数量" prop="strategy.rollingUpdate.maxUnavailable">
            <el-input v-model.number="formData.strategy.rollingUpdate.maxUnavailable" on-keypress="return (/[\d]/.test(String.fromCharCode(event.keyCode)))" clearable />
          </el-form-item>
        </el-col>
      </el-row>

      <el-row :gutter="20">
        <el-col v-if="isDeployment() || isDaemonset()" :span="12">
          <el-form-item label="最小就绪时间(秒)" prop="minReadySeconds">
            <form-item-block v-model.number="formData.minReadySeconds" devider-name="秒" style="width: 100%" item-type="number" />
          </el-form-item>
        </el-col>
        <el-col v-if="isDeployment()" :span="12">
          <el-form-item label="进程截止时间(秒)" prop="progressDeadlineSeconds">
            <form-item-block v-model.number="formData.progressDeadlineSeconds" style="width: 100%" devider-name="秒" item-type="number" />
          </el-form-item>
        </el-col>
      </el-row>

      <el-row :gutter="20">
        <el-col :span="12">
          <el-form-item label="修订历史记录限制" prop="revisionHistoryLimit">
            <form-item-block v-model.number="formData.revisionHistoryLimit" style="width: 100%" devider-name="版本" item-type="number" />
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'UpgradeCommonBlock',
}
</script>
<script setup>
import { ref } from 'vue'
import FormItemBlock from '@/components/kubernetes/form-item/index.vue'
const props = defineProps({
  form: {
    default: function() {
      return {}
    },
    type: Object
  },
  type: {
    default: function() {
      return 0
    },
    type: String
  },
})

// 数据初始化
const type = ref('')
const deployment_strategy_list = ref([
  { label: '滚动升级', value: 'RollingUpdate' },
  { label: '重新创建', value: 'Recreate' },
])
const strategy_list = ref([
  { label: '滚动升级', value: 'RollingUpdate' },
  { label: '删除', value: 'OnDelete' },
])

const pod_management_policy_list = ([
  { label: 'OrderedReady', value: 'OrderedReady' },
  { label: 'Parallel', value: 'Parallel' },
])

const formData = ref({
  strategy: {
    type: 'RollingUpdate',
    rollingUpdate: {
      maxUnavailable: null,
      maxSurge: null,
    },
  },
  minReadySeconds: null,
  progressDeadlineSeconds: null,
  revisionHistoryLimit: null,
})
const formDataTmp = ref({})
const FormInitData = () => {
  formDataTmp.value = props.form
  type.value = props.type

  if (formDataTmp.value) {
    switch (type.value) {
      case 'deployments': {
        if (formDataTmp.value.strategy) {
          if (formDataTmp.value.strategy.type) {
            formData.value.strategy.type = formDataTmp.value.strategy.type
          }
          if (formDataTmp.value.strategy.rollingUpdate) {
            if (formDataTmp.value.strategy.rollingUpdate.maxUnavailable) {
              formData.value.strategy.rollingUpdate.maxUnavailable = formDataTmp.value.strategy.rollingUpdate.maxUnavailable
              formData.value.strategy.rollingUpdate.maxSurge = formDataTmp.value.strategy.rollingUpdate.maxSurge
            }
          }
        }
        if (formDataTmp.value.minReadySeconds) {
          formData.value.minReadySeconds = formDataTmp.value.minReadySeconds
        }
        if (formDataTmp.value.revisionHistoryLimit) {
          formData.value.revisionHistoryLimit = formDataTmp.value.revisionHistoryLimit
        }
        if (formDataTmp.value.progressDeadlineSeconds) {
          formData.value.progressDeadlineSeconds = formDataTmp.value.progressDeadlineSeconds
        }
        break
      }
      case 'statefulsets': {
        if (formDataTmp.value.updateStrategy) {
          if (formDataTmp.value.updateStrategy.type) {
            formData.value.strategy.type = formDataTmp.value.updateStrategy.type
          }
        }
        if (formDataTmp.value.podManagementPolicy) {
          formData.value.podManagementPolicy = formDataTmp.value.podManagementPolicy
        }
        if (formDataTmp.value.revisionHistoryLimit) {
          formData.value.revisionHistoryLimit = formDataTmp.value.revisionHistoryLimit
        }
        break
      }
      case 'daemonsets': {
        if (formDataTmp.value.updateStrategy) {
          if (formDataTmp.value.updateStrategy.type) {
            formData.value.strategy.type = formDataTmp.value.updateStrategy.type
          }
          if (formDataTmp.value.updateStrategy.rollingUpdate) {
            if (formDataTmp.value.updateStrategy.rollingUpdate.maxUnavailable) {
              formData.value.strategy.rollingUpdate.maxUnavailable = formDataTmp.value.updateStrategy.rollingUpdate.maxUnavailable
              formData.value.strategy.rollingUpdate.maxSurge = formDataTmp.value.updateStrategy.rollingUpdate.maxSurge
            }
          }
        }
        if (formDataTmp.value.minReadySeconds) {
          formData.value.minReadySeconds = formDataTmp.value.minReadySeconds
        }
        if (formDataTmp.value.revisionHistoryLimit) {
          formData.value.revisionHistoryLimit = formDataTmp.value.revisionHistoryLimit
        }
        break
      }
    }
  }
}

FormInitData()

const isDeployment = () => {
  return type.value === 'deployments'
}
const isStatefulset = () => {
  return type.value === 'statefulsets'
}
const isDaemonset = () => {
  return type.value === 'daemonsets'
}

const transformation = (spec) => {
  const itemForm = {}
  itemForm.type = formData.value.strategy.type || undefined
  switch (type.value) {
    case 'deployments':
    // eslint-disable-next-line no-lone-blocks
    {
      if (formData.value.strategy.type === 'RollingUpdate') {
        itemForm.rollingUpdate = {}
        itemForm.rollingUpdate.maxUnavailable = formData.value.strategy.rollingUpdate.maxUnavailable
        itemForm.rollingUpdate.maxSurge = formData.value.strategy.rollingUpdate.maxSurge
      }
      spec.minReadySeconds = formData.value.minReadySeconds || undefined
      spec.revisionHistoryLimit = formData.value.revisionHistoryLimit || undefined
      spec.progressDeadlineSeconds = formData.value.progressDeadlineSeconds || undefined
      spec.strategy = itemForm
      break
    }
    case 'statefulsets': {
      spec.revisionHistoryLimit = formData.value.revisionHistoryLimit || undefined
      spec.updateStrategy = itemForm
      break
    }
    case 'daemonsets': {
      if (formData.value.strategy.type === 'RollingUpdate') {
        itemForm.rollingUpdate = {}
        itemForm.rollingUpdate.maxUnavailable = formData.value.strategy.rollingUpdate.maxUnavailable
      }
      spec.minReadySeconds = formData.value.minReadySeconds || undefined
      spec.revisionHistoryLimit = formData.value.revisionHistoryLimit || undefined
      spec.updateStrategy = itemForm
      break
    }
  }
}
// 格式化为对象返回父页面
const transformationformat = async(parentForm) => {
  transformation(parentForm)
}

defineExpose({
  transformationformat
})
</script>
<style scoped>

</style>
