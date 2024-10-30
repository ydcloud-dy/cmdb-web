<template>
  <div style="margin-top: 20px">
    <el-card class="box-card" shadow="hover">
      <template #header>
        <div class="card-header">
          <span>Session Affinity</span>
        </div>
      </template>
      <el-row :gutter="20">
        <el-col :span="12">
          <el-radio-group v-model="formData.sessionAffinity" @change="changeType(formData.sessionAffinity)">
            <div style="width: 100%">
              <el-radio label="None">None</el-radio>
            </div>
            <div style="width: 100%">
              <el-radio label="ClientIP">Client IP</el-radio>
            </div>
          </el-radio-group>
        </el-col>
        <div v-if="formData.sessionAffinity === 'ClientIP'">
          <el-col :span="24">
            <div>Session Sticky Time</div>
            <el-input v-model.number="formData.sessionAffinityConfig.clientIP.timeoutSeconds">
              <template slot="append">Seconds</template>
            </el-input>
          </el-col>
        </div>
      </el-row>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'ServiceSessionAffinity',
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
  }
})

// 数据初始化
const formData = ref([])
const FormInitData = () => {
  formData.value = props.form
  if (!formData.value.sessionAffinityConfig) {
    formData.value.sessionAffinity = 'None'
    formData.value.sessionAffinityConfig = {
      clientIP: {}
    }
  }
}

FormInitData()

// 修改类型
const changeType = (value) => {
  if (value === 'ClientIP') {
    formData.value.sessionAffinityConfig.clientIP.timeoutSeconds = 10800
  } else {
    delete formData.value.sessionAffinityConfig.clientIP.timeoutSeconds
  }
}
</script >
<style scoped>

</style>
