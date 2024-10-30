<template>
  <div>
    <el-form ref="form" label-position="top" :model="formData">
      <el-row v-if="isCronJob()" :gutter="24">
        <el-col :span="24">
          <el-form-item label="并发策略" prop="concurrencyPolicy">
            <form-item-block v-model="formData.concurrencyPolicy" style="width:100%" radio-layout="vertical" item-type="radio" :radios="concurrency_policy_list" />
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item label="暂停" prop="suspend">
            <form-item-block v-model="formData.suspend" item-type="radio" :radios="suspend_list" />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="12">
          <el-form-item label="需完成数" prop="completions">
            <form-item-block v-model.number="formData.completions" devider-name="次" item-type="number" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="并发数" prop="parallelism">
            <form-item-block v-model.number="formData.parallelism" devider-name="次" item-type="number" />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="12">
          <el-form-item label="重试次数" prop="backoffLimit">
            <form-item-block v-model.number="formData.backoffLimit" devider-name="次" item-type="number" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="活跃终止时间" prop="activeDeadlineSeconds">
            <form-item-block v-model.number="formData.activeDeadlineSeconds" devider-name="次" item-type="number" />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row v-if="isCronJob()" :gutter="20">
        <el-col :span="12">
          <el-form-item label="历史成功累计" prop="successfulJobsHistoryLimit">
            <form-item-block v-model.number="formData.successfulJobsHistoryLimit" item-type="number" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="历史失败累计" prop="failedJobsHistoryLimit">
            <form-item-block v-model.number="formData.failedJobsHistoryLimit" item-type="number" />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row v-if="isCronJob()" :gutter="20">
        <el-col :span="12">
          <el-form-item label="运行 job 截止时间" prop="startingDeadlineSeconds">
            <form-item-block v-model.number="formData.startingDeadlineSeconds" devider-name="秒" item-type="number" />
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'UpgradeJob',
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

const isCronJob = () => {
  return type.value === 'cronjobs'
}

const concurrency_policy_list = ref([
  { label: '允许多个 CronJobs 同时运行', value: 'Allow' },
  { label: '如果当前 Job 没结束，则跳过', value: 'Forbid' },
  { label: '如果当前 Job 没结束，则替换运行', value: 'Replace' },
])
const suspend_list = ref([
  { label: '确认', value: true },
  { label: '否', value: false },
])
const formDataTmp = ref({})
const formData = ref({
  activeDeadlineSeconds: null,
  backoffLimit: null,
  completions: null,
  parallelism: null,
  concurrencyPolicy: null,
  successfulJobsHistoryLimit: null,
  failedJobsHistoryLimit: null,
  startingDeadlineSeconds: null,
  suspend: false,
})
const type = ref('')
const FormInitData = () => {
  formDataTmp.value = props.form
  type.value = props.type

  if (formDataTmp.value) {
    let itemSpec = {}
    if (isCronJob()) {
      if (formDataTmp.value.jobTemplate?.spec) {
        itemSpec = formDataTmp.value.jobTemplate.spec
      }
      if (formDataTmp.value.concurrencyPolicy) {
        formData.value.concurrencyPolicy = formDataTmp.value.concurrencyPolicy
      }
      if (formDataTmp.value.successfulJobsHistoryLimit) {
        formData.value.successfulJobsHistoryLimit = formDataTmp.value.successfulJobsHistoryLimit
      }
      if (formDataTmp.value.failedJobsHistoryLimit) {
        formData.value.failedJobsHistoryLimit = formDataTmp.value.failedJobsHistoryLimit
      }
      if (formDataTmp.value.startingDeadlineSeconds) {
        formData.value.startingDeadlineSeconds = formDataTmp.value.startingDeadlineSeconds
      }
      if (formDataTmp.value.suspend !== undefined) {
        formData.value.suspend = formDataTmp.value.suspend
      }
    } else {
      itemSpec = formDataTmp.value
    }
    if (itemSpec.activeDeadlineSeconds) {
      formData.value.activeDeadlineSeconds = itemSpec.activeDeadlineSeconds
    }
    if (itemSpec.backoffLimit) {
      formData.value.backoffLimit = itemSpec.backoffLimit
    }
    if (itemSpec.completions) {
      formData.value.completions = itemSpec.completions
    }
    if (itemSpec.parallelism) {
      formData.value.parallelism = itemSpec.parallelism
    }
  }
}

FormInitData()

const transformation = (spec) => {
  if (isCronJob()) {
    spec.jobTemplate = {}
    spec.jobTemplate.spec = {}
    spec.jobTemplate.spec.activeDeadlineSeconds = formData.value.activeDeadlineSeconds || undefined
    spec.jobTemplate.spec.backoffLimit = formData.value.backoffLimit || undefined
    spec.jobTemplate.spec.completions = formData.value.completions || undefined
    spec.jobTemplate.spec.parallelism = formData.value.parallelism || undefined

    spec.concurrencyPolicy = formData.value.concurrencyPolicy || undefined
    spec.successfulJobsHistoryLimit = formData.value.successfulJobsHistoryLimit || undefined
    spec.failedJobsHistoryLimit = formData.value.failedJobsHistoryLimit || undefined
    spec.startingDeadlineSeconds = formData.value.startingDeadlineSeconds || undefined
    spec.suspend = formData.value.suspend || undefined
  } else {
    spec.activeDeadlineSeconds = formData.value.activeDeadlineSeconds || undefined
    spec.backoffLimit = formData.value.backoffLimit || undefined
    spec.completions = formData.value.completions || undefined
    spec.parallelism = formData.value.parallelism || undefined
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
