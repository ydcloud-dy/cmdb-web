<template>
  <div>
    <el-row :gutter="24" class="row-box">
      <el-col :span="12">
        <el-card class="el-card">
          <span style="font-size: 14px;font-weight: bold;">基础信息</span>
          <el-form ref="FormBlock" label-position="top" :model="formData" :rules="rules">
            <el-form-item label="名称" prop="metadata.name">
              <form-item-block v-model="formData.metadata.name" style="width: 100%" :disabled="readOnly" item-type="input" />
            </el-form-item>
            <el-form-item label="命名空间" prop="metadata.namespace">
              <namespace-select-block v-if="BlockStatus && operation === 'create'" style="width: 100%" :namespace_list="namespace_list" :namespace="formData.metadata.namespace" @enter="enterNamespace" />
              <form-item-block v-if="BlockStatus && operation !== 'create'" v-model="formData.metadata.namespace" style="width: 100%" disabled item-type="select2" />
            </el-form-item>
            <el-row>
              <form-k-v-block v-if="BlockStatus" ref="formkvblock" :operation="operation" :readonly="readOnly" :form="formData" />
            </el-row>
            <el-form-item v-if="isReplicasShow()" label="副本数" prop="spec.replicas">
              <form-item-block v-model.number="formData.spec.replicas" item-type="number" style="width: 100%" />
            </el-form-item>
            <el-row v-if="isCronJob()">
              <el-form-item label="调度" prop="spec.schedule">
                <form-item-block v-model="formData.spec.schedule" placeholder="0 * * * *" item-type="input" />
              </el-form-item>
            </el-row>
          </el-form>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card class="el-card">
          <span style="font-size: 14px;font-weight: bold;">数据卷(Volume)</span>
          <Volume v-if="BlockStatus" ref="volume" :form="podSpec" :configmaplist="config_map_list_of_ns" :pvclist="pvc_list_of_ns" :type="type" :secretlist="secretListNs" @loadVolumes="loadVolumes" />
        </el-card>
      </el-col>
    </el-row>
    <el-card style="margin-top: 20px;border: 0" class="el-card">
      <span style="font-size: 14px;font-weight: bold;">容器组</span>
      <el-tabs v-model="activeName" tab-position="left">
        <el-tab-pane label="Spec" name="Spec">
          <el-tabs v-model="activeNameSpec" type="border-card">
            <el-tab-pane label="扩缩容/升级策略" name="upgrade">
              <upgrade-job-block v-if="BlockStatus && isCronJob() || isJob()" ref="upgrade_job" :form="formData.spec" :type="type" />
              <upgrade-common-block v-else-if="BlockStatus" ref="upgrade_common" :form="formData.spec" :type="type" />
            </el-tab-pane>
            <el-tab-pane label="节点选择" name="node-selector">
              <nodeselector-block v-if="BlockStatus" ref="node_selector" :form="podSpec" :cluster="cluster_id" />
            </el-tab-pane>
            <el-tab-pane label="亲和性/反亲和性" name="affinity">
              <affinity-block v-if="BlockStatus" ref="affinity" :form="podSpec" :type="type" :namespaces_list="namespace_list" />
            </el-tab-pane>
            <el-tab-pane label="容忍" name="Toleration">
              <tolerations-block v-if="BlockStatus" ref="toleration" :form="podSpec" />
            </el-tab-pane>
            <el-tab-pane label="网络" name="Networking">
              <networking-block v-if="BlockStatus" ref="networking" :form="podSpec" />
            </el-tab-pane>
            <el-tab-pane label="其他" name="others">
              <others-block v-if="BlockStatus" ref="others" :type="type" :form="podSpec" :serviceaccounts-list="serviceaccountsList" :secret-list="secretList" />
            </el-tab-pane>
          </el-tabs>
        </el-tab-pane>
        <el-tab-pane label="Containers" name="Container">
          <el-row :gutter="20">
            <el-col :span="18">
              <ContainerBase v-if="BlockStatus" ref="Containers" :form="podSpec" @refreshContainer="refreshContainer" @addContainer="addContainer" @deleteContainer="deleteContainer" />
            </el-col>
          </el-row>
          <el-tabs :key="isRefresh" v-model="activeNameContainers" type="border-card">
            <el-tab-pane label="基础信息" name="General">
              <container-base-data v-if="BlockStatus" ref="containerdata" :form="currentContainer" :container-type="currentContainerType" />
            </el-tab-pane>

            <el-tab-pane label="命令" name="Command">
              <Command v-if="BlockStatus" ref="command" :form="currentContainer" />
            </el-tab-pane>
            <el-tab-pane label="端口" name="Port">
              <Ports v-if="BlockStatus" ref="ports" :form="currentContainer" />
            </el-tab-pane>
            <el-tab-pane label="环境变量" name="Environment">
              <Environment v-if="BlockStatus" ref="environment" :form="currentContainer" />
            </el-tab-pane>
            <el-tab-pane label="资源" name="Resources">
              <Resources v-if="BlockStatus" ref="resource" :form="currentContainer" />
            </el-tab-pane>
            <el-tab-pane v-if="isStandardContainer()" label="健康检查" name="Health Check">
              <health-check v-if="BlockStatus" ref="health_readiness_check" :form="currentContainer" :health-check-type="'就绪检查'" />
              <health-check v-if="BlockStatus" ref="health_liveness_check" :form="currentContainer" :health-check-type="'存活检查'" />
              <health-check v-if="BlockStatus" ref="health_startup_check" :form="currentContainer" :health-check-type="'启动检查'" />
            </el-tab-pane>
            <el-tab-pane label="挂载点" name="Mount">
              <VolumeMount v-if="BlockStatus" ref="volume_mount" :form="currentContainer" :volumelist="volume_list" />
            </el-tab-pane>
          </el-tabs>
        </el-tab-pane>
      </el-tabs>
      <div class="grid-content bg-purple-light">
        <div style="float: right;margin-top: 10px">
          <el-button size="small" @click="closeDialog">取 消</el-button>
          <el-button size="small" type="primary" @click="enterDialog">确 定</el-button>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'CreateBlock',
  emits: {
    close: () => {
      return true
    },
    enter: (value) => {
      if (value.length === 1) {
        return true
      } else {
        return false
      }
    },
  }
}
</script>
<script setup>
import ContainerBase from '@/components/kubernetes/workloads/container-base.vue'
import ContainerBaseData from '@/components/kubernetes/workloads/container-base-data.vue'
import Command from '@/components/kubernetes/workloads/command.vue'
import Ports from '@/components/kubernetes/workloads/ports.vue'
import Environment from '@/components/kubernetes/workloads/environment.vue'
import Resources from '@/components/kubernetes/workloads/resources.vue'
import HealthCheck from '@/components/kubernetes/workloads/health-check.vue'
import VolumeMount from '@/components/kubernetes/workloads/volume-mount.vue'
import UpgradeCommonBlock from '@/components/kubernetes/workloads/spec/upgrade-common.vue'
import UpgradeJobBlock from '@/components/kubernetes/workloads/spec/upgrade-job.vue'
import AffinityBlock from '@/components/kubernetes/workloads/spec/affinity.vue'
import TolerationsBlock from '@/components/kubernetes/workloads/spec/tolerations.vue'
import NetworkingBlock from '@/components/kubernetes/workloads/spec/networking.vue'
import OthersBlock from '@/components/kubernetes/workloads/spec/others.vue'
import NodeselectorBlock from '@/components/kubernetes/workloads/spec/node-selector.vue'
import FormItemBlock from '@/components/kubernetes/form-item/index.vue'
import FormKVBlock from '@/components/kubernetes/kv-table/index.vue'
import NamespaceSelectBlock from '@/components/kubernetes/namespace/index.vue'
import Volume from '@/components/kubernetes/workloads/volume.vue'
import { reactive, ref } from 'vue'
import { checkName } from '@/utils/rules'
import { SecretsList } from '@/api/kubernetes/secrets'
import { ServiceAccountsList } from '@/api/kubernetes/serviceaccounts'
import { getClusterUserNamespace } from '@/api/kubernetes/namespaces'
import { PersistentVolumeClaimsList } from '@/api/kubernetes/persistentvolumeclaims'
import { ConfigmapsList } from '@/api/kubernetes/configmaps'
const emit = defineEmits(['close', 'enter'])
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
  type: {
    default: function() {
      return 0
    },
    type: String
  },
  readOnly: {
    default: function() {
      return false
    },
    type: Boolean
  },
  operation: {
    default: function() {
      return 0
    },
    type: String
  }
})

const rules = reactive({
  'metadata.name': [{ validator: checkName, required: true, trigger: 'blur' }],
  'metadata.namespace': [{ required: true, trigger: 'blur', message: '请选择命名空间' }],
  'spec.replicas': [{ required: true, trigger: 'blur', type: 'number', min: 1, max: 10, message: '请输入1 ~ 10数字' }]
})

// 获取拉取密钥
const secretList = ref([])
const secretListNs = ref([])
const SecretsWithNs = async(namespace) => {
  const res = await SecretsList({cluster_id:cluster_id.value,namespace: namespace})
  if (res.code === 0) {
    res.data.items.forEach((item) => {
      secretList.value.push(item.metadata.name)
    })
    secretListNs.value = res.data.items
  }
}

// 获取拉取服务账号
const serviceaccountsList = ref([])
const ServiceAccountsWithNs = async(namespace) => {
  const res = await ServiceAccountsList({cluster_id:cluster_id.value, namespace: namespace})
  if (res.code === 0) {
    res.data.items.forEach((item) => {
      serviceaccountsList.value.push(item.metadata.name)
    })
  }
}

// 获取Pvc 列表
const pvc_list_of_ns = ref([])
const loadPvcsWithNs = async(namespace) => {
  const res = await PersistentVolumeClaimsList({cluster_id:cluster_id.value, namespace: namespace})
  if (res.code === 0) {
    pvc_list_of_ns.value = res.data.items
  }
}

// 获取configmap列表
const config_map_list_of_ns = ref([])
const loadConfigMapsWithNs = async(namespace) => {
  config_map_list_of_ns.value = []
  const res = await ConfigmapsList({cluster_id:cluster_id.value, namespace: namespace})
  if (res.code === 0) {
    config_map_list_of_ns.value = res.data.items
  }
}

// 切换命名空间
const changeNs = async(namespace) => {
  await SecretsWithNs(namespace)
  await ServiceAccountsWithNs(namespace)
  await loadPvcsWithNs(namespace)
  await loadConfigMapsWithNs(namespace)
}

// 命名空间
const namespace_list = ref([])
const getNamespaceData = async(cluster_id) => {
  const res = await getClusterUserNamespace({ id: cluster_id })
  if (res.code === 0) {
    namespace_list.value = []
    for (const ns of res.data.namespaces) {
      const item = {
        id: Math.random(),
        name: ns,
      }
      namespace_list.value.push(item)
    }
  }
}

const isCronJob = () => {
  return type.value === 'cronjobs'
}

// 数据初始化
const formData = ref({})
const activeName = ref('')
const activeNameSpec = ref('')
const readOnly = ref(false)
const cluster_id = ref(0)
const type = ref('')
const operation = ref('')
const BlockStatus = ref(false)
const currentContainerIndex = ref(0)
const currentContainerType = ref('standardContainers')
const currentContainer = ref({})
const isRefresh = ref(false)
const activeNameContainers = ref('General')
const podSpec = ref({ containers: [] })
const podMetadata = ref({})
const FormInitData = async() => {
  formData.value = props.form
  activeName.value = 'Container'
  activeNameSpec.value = 'upgrade'
  readOnly.value = props.readOnly
  cluster_id.value = props.cluster
  type.value = props.type
  operation.value = props.operation

  if (isCronJob()) {
    podSpec.value = formData.value.spec.jobTemplate.spec.template.spec
    podMetadata.value = formData.value.spec.jobTemplate.spec.template.metadata
    if (formData.value.spec.jobTemplate) {
      if (formData.value.spec.jobTemplate.spec.template.spec.containers.length === 0) {
        formData.value.spec.jobTemplate.spec.template.spec.containers = [
          {
            name: 'container-0',
            image: 'nginx:latest',
            imagePullPolicy: 'Always',
          },
        ]
        currentContainer.value = formData.value.spec.jobTemplate.spec.template.spec.containers[0]
      } else {
        currentContainer.value = formData.value.spec.jobTemplate.spec.template.spec.containers[0]
      }
    }
  } else {
    podSpec.value = formData.value.spec.template.spec
    podMetadata.value = formData.value.spec.template.metadata
    if (formData.value.spec) {
      if (formData.value.spec.template.spec.containers.length === 0) {
        formData.value.spec.template.spec.containers = [
          {
            name: 'container-0',
            image: 'nginx:latest',
            imagePullPolicy: 'Always',
          },
        ]
        currentContainer.value = formData.value.spec.template.spec.containers[0]
      } else {
        currentContainer.value = formData.value.spec.template.spec.containers[0]
      }
    }
  }

  if (formData.value.metadata) {
    if (formData.value.metadata.namespace) {
      await changeNs(formData.value.metadata.namespace)
      await getNamespaceData(cluster_id.value)
    } else {
      await getNamespaceData(cluster_id.value)
    }
  }

  BlockStatus.value = true
}

FormInitData()
// 关闭
const FormBlock = ref(null)
const closeDialog = () => {
  FormBlock.value.resetFields()
  emit('close')
}

// 子页面返回父页面修改父页面数据
const childrenPageData = async() => {
  await command.value.transformationformat(currentContainer.value)
  await ports.value.transformationformat(currentContainer.value)
  await resource.value.transformationformat(currentContainer.value)
  await volume_mount.value.transformationformat(currentContainer.value)
  if (isStandardContainer()) {
    await health_readiness_check.value.transformationformat(currentContainer.value)
    await health_startup_check.value.transformationformat(currentContainer.value)
    await health_liveness_check.value.transformationformat(currentContainer.value)
  }
}

// 校验并提交
const formkvblock = ref(null)
const upgrade_common = ref(null)
const affinity = ref(null)
const toleration = ref(null)
const networking = ref(null)
const others = ref(null)
const node_selector = ref(null)
const command = ref(null)
const ports = ref(null)
const resource = ref(null)
const health_readiness_check = ref(null)
const health_liveness_check = ref(null)
const health_startup_check = ref(null)
const volume_mount = ref(null)
const volume = ref(null)
const upgrade_job = ref(null)
const enterDialog = async() => {
  console.log("去顶啊啊啊")
  FormBlock.value.validate(async valid => {

    if (valid) {
      console.log("??????")
      console.log(type.value,"ffaffasfa")

      // 标签，注解，选择器
      if (formData.value.metadata) {
        await formkvblock.value.transformationformat(formData.value, podMetadata.value)
        console.log("================================")

      }
      // 更新策略
      if (isJob() || isCronJob()) {
        console.log("?????gaggg?")
        await upgrade_job.value.transformationformat(formData.value.spec)

      } else {
        await upgrade_common.value.transformationformat(formData.value.spec)
      }

      // 亲和性反亲和性
      await affinity.value.transformationformat(podSpec.value)

      // 容忍
      await toleration.value.transformationformat(podSpec.value)

      // 网络相关
      await networking.value.transformationformat(podSpec.value)

      // 其他
      await others.value.transformationformat(podSpec.value, podMetadata.value)

      // 节点选择器
      await node_selector.value.transformationformat(podSpec.value)

      // 卷挂载
      await volume.value.transformationformat(podSpec.value)

      // 处理cronjob赋值
      if (isCronJob()) {
        console.log("cronjobaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
        delete formData.value.spec.template
        formData.value.spec.jobTemplate.spec.template = { spec: podSpec.value, metadata: podMetadata.value }
      }
      //
      await childrenPageData()
      emit('enter', formData.value)
    }
  })
}

// 命名空间选择
const enterNamespace = async(value) => {
  if (formData.value.metadata) {
    formData.value.metadata.namespace = value
    await changeNs(value)
  }
}

// 判断资源类型
const isReplicasShow = () => {
  return type.value === 'deployments' || type.value === 'statefulsets'
}

const isJob = () => {
  return type.value === 'jobs'
}

// 切换容器
const refreshContainer = async(type, index, item) => {
  await childrenPageData()
  currentContainerIndex.value = index
  currentContainerType.value = type
  currentContainer.value = item
  isRefresh.value = !isRefresh.value
}

// 添加容器
const addContainer = (type, item) => {
  if (type === 'initContainers') {
    if (!formData.value.spec.template.spec.initContainers) {
      formData.value.spec.template.spec.initContainers = []
    }
    formData.value.spec.template.spec.initContainers.push(item)
  }
}

// 删除容器
const deleteContainer = (type, index) => {
  if (type === 'initContainers') {
    formData.value.spec.template.spec.initContainers.splice(index, 1)
  } else {
    formData.value.spec.template.spec.containers.splice(index, 1)
  }
}

const isStandardContainer = () => {
  return currentContainerType.value === 'standardContainers'
}

const loadVolumeType = (volume) => {
  if (volume.configMap) {
    return 'ConfigMap'
  }
  if (volume.secret) {
    return 'Secret'
  }
  if (volume.persistentVolumeClaim) {
    return 'PVC'
  }
  if (volume.emptyDir) {
    return 'EmptyDir'
  }
  if (volume.nfs) {
    return 'NFS'
  }
  if (volume.hostPath) {
    return 'HostPath'
  }
}

const volume_list = ref([])
const loadVolumes = (type, volumes, volumeClaimTemplates) => {
  BlockStatus.value = false
  if (type !== 'All') {
    volume_list.value = volume_list.value.filter((item) => {
      return item.belongTo !== type
    })
    for (const vo of volumes) {
      volume_list.value.push({ name: vo.name, type: vo.type, belongTo: 'volume' })
    }
    for (const vo of volumeClaimTemplates) {
      volume_list.value.push({ name: vo.name, type: 'VolumeClaimTemplates', belongTo: 'VolumeClaimTemplates' })
    }
  } else {
    volume_list.value = []
    for (const vo of volumes) {
      volume_list.value.push({ name: vo.name, type: loadVolumeType(vo), belongTo: 'volume' })
    }
    for (const vo of volumeClaimTemplates) {
      volume_list.value.push({
        name: vo.metadata.name,
        type: 'VolumeClaimTemplates',
        belongTo: 'VolumeClaimTemplates',
      })
    }
  }
  BlockStatus.value = true
}
</script>
<style scoped>

</style>
