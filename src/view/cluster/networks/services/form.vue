<template>
  <div>
    <el-card class="el-card">
      <el-form ref="FormBlock" :model="formData" :rules="rules" label-width="100px">
        <el-row :gutter="24">
          <el-col :span="8">
            <el-form-item label="名称" prop="metadata.name">
              <form-item-block v-if="readOnly" v-model="formData.metadata.name" style="width: 100%" disabled item-type="input" />
              <form-item-block v-else v-model="formData.metadata.name" placeholder="请输入名称" item-type="input" style="width: 100%" />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="命名空间" required prop="metadata.namespace">
              <form-item-block v-if="readOnly" v-model="formData.metadata.namespace" style="width: 100%" disabled item-type="select2" />
              <NsSelect v-else :cluster="cluster_id" :namespace.sync="formData.metadata.namespace" @enter="enterNamespace" />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="类型">
              <el-select v-model="type" @change="changeType">
                <el-option label="Cluster IP" value="ClusterIP" />
                <el-option label="Headless" value="Headless" />
                <el-option label="External Name" value="ExternalName" />
                <el-option label="Load Balancer" value="LoadBalancer" />
                <el-option label="Node Port" value="NodePort" />
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-col :span="24">
          <el-tabs
            ref="tabs"
            v-model="activeName"
            tab-position="top"
            type="border-card"
            @tab-click="handleClick"
          >
            <el-tab-pane v-if="formData.spec.type==='ExternalName'" name="ExternalName" label="External Name">
              <ServiceExternalName :form="formData.spec" />
            </el-tab-pane>
            <el-tab-pane v-if="formData.spec.type!=='ExternalName'" name="ServicePorts" label="端口">
              <ServicePorts ref="serviceports" :type="type" :form="formData.spec" />
            </el-tab-pane>
            <el-tab-pane v-if="formData.spec.type!=='ExternalName' " name="Selectors" label="选择器">
              <KVTableBlock ref="selector" :title="'选择器'" :form="formData.spec.selector" />
            </el-tab-pane>
            <el-tab-pane v-if="formData.spec.type!=='ExternalName'" name="SessionAffinity" label="Session Affinity">
              <service-session-affinity :form="formData.spec" />
            </el-tab-pane>
            <el-tab-pane name="IPAddresses" label="IP地址">
              <ServiceIpAddresses :type="type" :form="formData.spec" />
            </el-tab-pane>
            <el-tab-pane name="Labels" label="标签/注解">
              <KVTableBlock ref="labels" :title="'标签'" :form.sync="formData.metadata.labels" />
              <KVTableBlock ref="annotations" :title="'注解'" :form.sync="formData.metadata.annotations" />
            </el-tab-pane>
          </el-tabs>
        </el-col>

      </el-form>
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
  name: 'FormBlock',
}
</script>
<script setup>
import { ref } from 'vue'
import FormItemBlock from '@/components/kubernetes/form-item/index.vue'
import NsSelect from '@/components/kubernetes/namespace/select-ns.vue'
import ServiceExternalName from '@/components/kubernetes/network/service-external-name.vue'
import ServicePorts from '@/components/kubernetes/network/service-ports.vue'
import ServiceSessionAffinity from '@/components/kubernetes/network/service-session-affinity.vue'
import ServiceIpAddresses from '@/components/kubernetes/network/service-ip-addresses.vue'
import KVTableBlock from '@/components/kubernetes/configuration/key-value.vue'
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
  readonly: {
    default: function() {
      return false
    },
    type: Boolean
  }
})

// 修改类型
const activeName = ref('ServicePorts')
const changeType = (type) => {
  if (type === 'Headless') {
    formData.value.spec.type = 'ClusterIP'
    formData.value.spec.clusterIP = 'None'
  } else {
    formData.value.spec.type = type
  }
  if (type === 'ExternalName') {
    activeName.value = 'ExternalName'
  } else {
    activeName.value = 'ServicePorts'
  }
}

// 数据初始化
const formData = ref({})
const cluster_id = ref({})
const type = ref('ClusterIP')
const rules = ref({
  'metadata.name': [{ required: true, message: '请输入名称', trigger: 'blur' }],
  'metadata.namespace': [{ required: true, message: '请选择命名空间', trigger: 'blur' }],
})
const readOnly = ref(false)
const FormInitData = () => {
  formData.value = props.form
  if (props.form.spec.type) {
    type.value = props.form.spec.type
  }
  changeType(type.value)
  cluster_id.value = props.cluster
  readOnly.value = props.readonly
}

FormInitData()

// 命名空间选择
const enterNamespace = async(value) => {
  if (formData.value.metadata) {
    formData.value.metadata.namespace = value
  }
}

// 关闭
const FormBlock = ref(null)
const closeDialog = () => {
  FormBlock.value.resetFields()
  emit('close')
}

// 提交
const serviceports = ref(null)
const selector = ref(null)
const labels = ref(null)
const annotations = ref(null)
const enterDialog = async() => {
  // 服务端口，选择器，标签，注解，子页面数据获取
  if (formData.value) {
    if (type.value !== 'ExternalName') {
      await serviceports.value.transformationformat(formData.value)
      await selector.value.transformationformat(formData.value, 'selector')
    }

    await labels.value.transformationformat(formData.value, 'labels')
    await annotations.value.transformationformat(formData.value, 'annotations')
  }
  emit('enter', formData.value)
}

// 切换标签
const handleClick = (tab) => {
  activeName.value = tab.name
}
</script>
<style scoped>

</style>
