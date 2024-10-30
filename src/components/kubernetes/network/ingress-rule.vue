<template>
  <div style="margin-top: 20px">
    <el-card class="box-card" shadow="hover">
      <el-form ref="form" label-position="top" :model="formData">
        <el-card
          v-for="(row,ind) in formData.spec.rules"
          :key="ind"
          style=";margin-top: 10px;position: relative"
        >
          <div style="float: right; padding: 3px 0;position: relative;z-index: 1">
            <el-button
              v-if="formData.spec.rules.length > 1"
              type="danger"
              link
              icon="delete"
              size="small"
              @click="removeRule(ind)"
            >删除
            </el-button>
          </div>
          <div>
            <el-row :gutter="20">
              <el-col :span="12">
                <el-form-item label="域名" prop="host">
                  <el-input v-model="row.host" placeholder="e.g. example.com" />
                </el-form-item>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="24">
                <table style="width: 100%;padding: 0" class="tab-table">
                  <tr>
                    <th scope="col" width="20%" align="left">
                      <label>路径</label>
                    </th>
                    <th scope="col" width="38.5%" align="left" />
                    <th scope="col" width="20%" align="left">
                      <label>Service</label>
                    </th>
                    <th scope="col" width="20%" align="left">
                      <label>端口</label>
                    </th>
                    <th />
                  </tr>
                  <tr v-for="(row,index) in row.http.paths" :key="index">
                    <td>
                      <el-select v-model="row.pathType">
                        <el-option label="Prefix" value="Prefix" />
                        <el-option label="Exact" value="Exact" />
                        <el-option label="ImplementationSpecific" value="ImplementationSpecific" />
                      </el-select>
                    </td>
                    <td>
                      <el-input v-model="row.path" />
                    </td>
                    <td v-if="!versionV1">
                      <el-select
                        v-model="row.backend.serviceName"
                        style="width: 100%"
                        :remove-tag="changeService(row.backend.service.name)"
                        @change="changeService(row.backend.serviceName)"
                      >
                        <el-option
                          v-for="service in services"
                          :key="service.metadata.name"
                          :label="service.metadata.name"
                          :value="service.metadata.name"
                        />
                      </el-select>
                    </td>
                    <td v-else>
                      <el-select
                        v-model="row.backend.service.name"
                        style="width: 100%"
                        :remove-tag="changeService(row.backend.service.name)"
                        @change="changeService(row.backend.service.name)"
                      >
                        <el-option
                          v-for="service in services"
                          :key="service.metadata.name"
                          :label="service.metadata.name"
                          :value="service.metadata.name"
                        />
                      </el-select>
                    </td>

                    <td v-if="!versionV1">
                      <el-select v-model="row.backend.servicePort">
                        <el-option
                          v-for="port in servicePorts"
                          :key="port.name"
                          :label="port.port"
                          :value="port.port"
                        />
                      </el-select>
                    </td>
                    <td v-else>
                      <el-select v-model="row.backend.service.port.number">
                        <el-option
                          v-for="port in servicePorts"
                          :key="port.name"
                          :label="port.port"
                          :value="port.port"
                        />
                      </el-select>
                    </td>
                    <td>
                      <el-button type="danger" link icon="delete" size="small" @click="deletePath(ind,index)">
                        删除
                      </el-button>
                    </td>
                  </tr>
                  <tr>
                    <td align="left">
                      <el-button size="small" type="primary" link icon="plus" @click="addPath(row)">添加路径
                      </el-button>
                    </td>
                  </tr>
                </table>
              </el-col>
            </el-row>
          </div>
        </el-card>
      </el-form>
      <el-button size="small" type="primary" link icon="plus" @click="addRule">添加规则
      </el-button>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'IngressRule',
}
</script>
<script setup>
import { ref, watch } from 'vue'
import { ServicesList } from '@/api/kubernetes/services'
const props = defineProps({
  form: {
    default: function() {
      return {}
    },
    type: Object
  },
  cluster: {
    default: function() {
      return 0
    },
    type: Number
  },
  version: {
    default: function() {
      return ''
    },
    type: String
  },
  namespace: {
    default: function() {
      return ''
    },
    type: String
  }
})

// 监听数据变化
watch(
  () => props.namespace,
  async() => {
    await Getservices(props.namespace)
  }
)

// 获取命名空间services
const services = ref([])
const Getservices = async(namespace) => {
  const res = await ServicesList({cluster_id:cluster_id.value,  namespace:namespace})
  if (res.code === 0) {
    services.value = res.data.items
  }
}

// 数据初始化
const formData = ref('')
const versionV1 = ref(false)
const cluster_id = ref(0)
const namespace = ref('')
const FormInitData = async() => {
  formData.value = props.form
  cluster_id.value = props.cluster
  namespace.value = props.namespace
  if (props.version === 'networking.k8s.io/v1') {
    versionV1.value = true
  }

  await Getservices(namespace.value)
}

FormInitData()

// 默认path
const defaultPath = () => {
  if (versionV1) {
    return {
      path: '/',
      pathType: 'Prefix',
      backend: {
        service: {
          name: null,
          port: {
            number: null
          }
        }
      }
    }
  } else {
    return {
      path: '/',
      pathType: 'Prefix',
      backend: {
        serviceName: null,
        servicePort: null
      }
    }
  }
}

// 默认规则
const defaultRule = () => {
  if (versionV1) {
    return {
      host: '',
      http: {
        paths: [
          {
            path: '/',
            pathType: 'Prefix',
            backend: {
              service: {
                name: null,
                port: {
                  number: null
                }
              }
            }
          },
        ]
      }
    }
  } else {
    return {
      host: '',
      http: {
        paths: [
          {
            path: '/',
            pathType: 'Prefix',
            backend: {
              serviceName: null,
              servicePort: null
            }
          },
        ]
      }
    }
  }
}

// 添加规则
const addRule = () => {
  if (formData.value.spec.rules) {
    formData.value.spec.rules.push(defaultRule())
  }
}

// 删除规则
const removeRule = (index) => {
  formData.value.spec.rules.splice(index, 1)
}

// 选择服务端口
const servicePorts = ref([])
const changeService = (serviceName) => {
  for (const service of services.value) {
    if (service.metadata.name === serviceName) {
      servicePorts.value = service.spec.ports
      break
    }
  }
}

// 添加路径
const addPath = (row) => {
  row.http.paths.push(defaultPath())
}

// 删除路径
const deletePath = (ind, index) => {
  formData.value.spec.rules[ind].http.paths.splice(index, 1)
}
</script>
<style scoped>

</style>
