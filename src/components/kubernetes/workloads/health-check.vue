<template>
  <div style="margin-top: 20px">
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <h3>{{ healthCheckType }}</h3>
        </div>
      </template>
      <div>
        <el-form ref="form" label-position="top" :model="form">
          <el-row :gutter="20">
            <el-col :span="12">
              <el-row>
                <el-form-item label="检查类型">
                  <form-item-block v-model="check_type" item-type="select" :no-clear="true" :selections="type_list" />
                </el-form-item>
              </el-row>
              <div v-if="check_type === 'httpGet' || check_type === 'httpsGet'">
                <el-row>
                  <el-form-item label="检查端口" prop="httpGet.port">
                    <form-item-block v-model.number="formData.httpGet.port" item-type="number" />
                  </el-form-item>
                </el-row>
                <el-row>
                  <el-form-item label="请求路径" prop="httpGet.path">
                    <form-item-block v-model="formData.httpGet.path" item-type="input" />
                  </el-form-item>
                </el-row>
              </div>
              <el-row v-if="check_type === 'tcpSocket'">
                <el-form-item label="检查端口" prop="tcpSocket.port">
                  <form-item-block v-model.number="formData.tcpSocket.port" item-type="number" />
                </el-form-item>
              </el-row>
              <el-row v-if="check_type === 'exec'">
                <table style="width: 98%" class="tab-table">
                  <tr>
                    <th scope="col" width="93%" align="left">
                      <label>检查命令</label>
                    </th>
                    <th align="left" />
                  </tr>
                  <tr v-for="(row,index) in formData.exec.command" :key="index">
                    <td>
                      <form-item-block v-model="row.value" placeholder="e.g. /tmp/health" item-type="textarea" />
                    </td>
                    <td>
                      <el-button type="danger" link icon="delete" size="small" @click="handleCommandDelete(index)">
                        删除
                      </el-button>
                    </td>
                  </tr>
                  <tr>
                    <td align="left">
                      <el-button size="small" type="primary" link icon="plus" @click="handleCommandAdd">添加</el-button>
                    </td>
                  </tr>
                </table>
              </el-row>
            </el-col>
            <el-col v-if="check_type !== 'None' && check_type !== ''" :span="12">
              <el-row :gutter="10">
                <el-col :span="8">
                  <el-form-item label="检查间隔" prop="periodSeconds">
                    <form-item-block v-model.number="formData.periodSeconds" placeholder="Default: 10" devider-name="sec" item-type="number" />
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="初始延时" prop="initialDelaySeconds">
                    <form-item-block v-model.number="formData.initialDelaySeconds" placeholder="Default: 0" devider-name="sec" item-type="number" />
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="超时时间" prop="timeoutSeconds">
                    <form-item-block v-model.number="formData.timeoutSeconds" placeholder="Default: 3" devider-name="sec" item-type="number" />
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="10">
                <el-col :span="12">
                  <el-form-item label="成功阈值" prop="successThreshold">
                    <form-item-block v-model.number="formData.successThreshold" placeholder="Default: 1" item-type="number" />
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="失败阈值" prop="failureThreshold">
                    <form-item-block v-model.number="formData.failureThreshold" placeholder="Default: 3" item-type="number" />
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <div><label>请求头</label></div>
                <table style="width: 98%" class="tab-table">
                  <tr>
                    <th scope="col" width="45%" align="left"><label>键</label></th>
                    <th scope="col" width="45%" align="left"><label>值</label></th>
                    <th align="left" />
                  </tr>
                  <tr v-for="(row, index) in formData.httpHeaders" :key="index">
                    <td>
                      <form-item-block v-model="row.key" placeholder="e.g. foo" item-type="input" />
                    </td>
                    <td>
                      <form-item-block v-model="row.value" placeholder="e.g. bar" item-type="input" />
                    </td>
                    <td>
                      <el-button type="danger" link icon="delete" size="small" @click="handleDelete(index)">
                        删除
                      </el-button>
                    </td>
                  </tr>
                  <tr>
                    <td align="left">
                      <el-button size="small" type="primary" link icon="plus" @click="handleAdd">添加</el-button>
                    </td>
                  </tr>
                </table>
              </el-row>
            </el-col>
          </el-row>
        </el-form>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'HealthCheck',
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
  healthCheckType: {
    default: function() {
      return ''
    },
    type: String
  }
})

const type_list = ref([
  { label: '无', value: 'None' },
  { label: 'HTTP 请求返回成功状态（200-399）', value: 'httpGet' },
  { label: 'HTTPS 请求返回成功状态（200-399）', value: 'httpsGet' },
  { label: 'TCP 连接正常', value: 'tcpSocket' },
  { label: '容器内部命令运行正常', value: 'exec' },
])

const check_type = ref('None')
// 数据初始化
const formData = ref({
  httpGet: {
    port: '',
    path: '',
  },
  periodSeconds: 10,
  initialDelaySeconds: 40,
  timeoutSeconds: 3,
  successThreshold: 1,
  failureThreshold: 3,
  httpHeaders: [],
  exec: {
    command: [],
  },
  tcpSocket: {
    port: '',
  },
})

const healthCheckType = ref('')
const FormInitData = () => {
  healthCheckType.value = props.healthCheckType
  if (props.form) {
    const prodeForm = ref({})
    switch (props.healthCheckType) {
      case '就绪检查':
        if (props.form.readinessProbe) {
          prodeForm.value = props.form.readinessProbe
        }
        break
      case '存活检查':
        if (props.form.livenessProbe) {
          prodeForm.value = props.form.livenessProbe
        }
        break
      case '启动检查':
        if (props.form.startupProbe) {
          prodeForm.value = props.form.startupProbe
        }
        break
    }

    if (prodeForm.value) {
      if (prodeForm.value.httpGet) {
        if (prodeForm.value.httpGet.scheme) {
          if (prodeForm.value.httpGet.scheme === 'HTTP') {
            check_type.value = 'httpGet'
          } else {
            check_type.value = 'httpsGet'
          }
        } else {
          check_type.value = 'httpGet'
        }
        if (prodeForm.value.httpGet.port) {
          formData.value.httpGet.port = prodeForm.value.httpGet.port
        }
        if (prodeForm.value.httpGet.path) {
          formData.value.httpGet.path = prodeForm.value.httpGet.path
        }
      } else if (prodeForm.value.tcpSocket) {
        check_type.value = 'tcpSocket'
        if (prodeForm.value.tcpSocket.port) {
          formData.value.tcpSocket.port = prodeForm.value.tcpSocket.port
        }
      } else if (prodeForm.value.exec) {
        check_type.value = 'exec'
        if (prodeForm.value.exec.command) {
          formData.value.exec.command = []
          for (const cmd of prodeForm.value.exec.command) {
            formData.value.exec.command.push({ value: cmd })
          }
        }
      }

      if (prodeForm.value.initialDelaySeconds) {
        formData.value.initialDelaySeconds = prodeForm.value.initialDelaySeconds
      }
      if (prodeForm.value.timeoutSeconds) {
        formData.value.timeoutSeconds = prodeForm.value.timeoutSeconds
      }
      if (prodeForm.value.periodSeconds) {
        formData.value.periodSeconds = prodeForm.value.periodSeconds
      }
      if (prodeForm.value.successThreshold) {
        formData.value.successThreshold = prodeForm.value.successThreshold
      }
      if (prodeForm.value.failureThreshold) {
        formData.value.failureThreshold = prodeForm.value.failureThreshold
      }
    }
  }
}

FormInitData()

// 添加头信息
const handleAdd = () => {
  const item = {
    key: '',
    value: '',
  }
  formData.value.httpHeaders.push(item)
}

// 删除头信息
const handleDelete = (index) => {
  formData.value.httpHeaders.splice(index, 1)
}

// 命令添加
const handleCommandAdd = () => {
  const item = {
    value: '',
  }
  formData.value.exec.command.push(item)
}

// 命令删除
const handleCommandDelete = (index) => {
  formData.value.exec.command.splice(index, 1)
}

// 返回数据格式化
const transformation = (parentFrom) => {
  if (check_type.value === 'None' || check_type.value === '') {
    return
  }
  const childForm = {}
  childForm.periodSeconds = formData.value.periodSeconds || undefined
  childForm.initialDelaySeconds = formData.value.initialDelaySeconds || undefined
  childForm.timeoutSeconds = formData.value.timeoutSeconds || undefined
  childForm.successThreshold = formData.value.successThreshold || undefined
  childForm.failureThreshold = formData.value.failureThreshold || undefined

  const obj = {}
  for (let i = 0; i < formData.value.httpHeaders.length; i++) {
    if (formData.value.httpHeaders[i].key !== '') {
      obj[formData.value.httpHeaders[i].key] = formData.value.httpHeaders[i].value
    }
  }
  childForm.httpHeaders = formData.value.httpHeaders.length !== 0 ? obj : undefined
  const commands = []
  switch (check_type.value) {
    case 'httpGet':
      childForm.httpGet = {}
      childForm.httpGet.scheme = 'HTTP'
      childForm.httpGet.path = formData.value.httpGet.path || undefined
      childForm.httpGet.port = formData.value.httpGet.port || undefined
      break
    case 'httpsGet':
      childForm.httpGet = {}
      childForm.httpGet.scheme = 'HTTPS'
      childForm.httpGet.path = formData.value.httpGet.path || undefined
      childForm.httpGet.port = formData.value.httpGet.port || undefined
      break
    case 'tcpSocket':
      childForm.tcpSocket = {}
      childForm.tcpSocket.port = formData.value.tcpSocket.port || undefined
      break
    case 'exec':
      for (const cmd of formData.value.exec.command) {
        commands.push(cmd.value)
      }
      childForm.exec = { command: commands.length !== 0 ? commands : undefined }
      break
    default:
      break
  }
  switch (healthCheckType.value) {
    case '就绪检查':
      parentFrom.readinessProbe = childForm
      break
    case '存活检查':
      parentFrom.livenessProbe = childForm
      break
    case '启动检查':
      parentFrom.startupProbe = childForm
      break
  }
}

// 格式化为对象返回父页面
const transformationformat = async(parentFrom) => {
  transformation(parentFrom)
}

defineExpose({
  transformationformat
})
</script>
<style scoped>

</style>
