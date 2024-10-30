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
        </el-row>
        <el-col :span="24">
          <el-tabs
            ref="tabs"
            v-model="activeName"
            tab-position="top"
            type="border-card"
            @tab-click="handleClick"
          >
            <el-tab-pane label="规则" name="rule">
              <IngressRule :cluster="cluster_id" :version="version" :form="formData" :namespace.sync="formData.metadata.namespace" />
            </el-tab-pane>
            <el-tab-pane label="证书" name="tls">
              <IngressTls :cluster="cluster_id" :form="formData" :namespace.sync="formData.metadata.namespace" />
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
import IngressRule from '@/components/kubernetes/network/ingress-rule.vue'
import IngressTls from '@/components/kubernetes/network/ingress-tls.vue'
import KVTableBlock from '@/components/kubernetes/configuration/key-value.vue'

const emit = defineEmits(['close', 'enter'])
const props = defineProps({
  form: {
    default: function() {
      return {}
    },
    type: Object
  },
  version: {
    default: function() {
      return ''
    },
    type: String
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

// 数据初始化
const formData = ref({})
const cluster_id = ref({})
const activeName = ref('rule')
const version = ref('')
const readOnly = ref(false)
const rules = ref({
  'metadata.name': [{ required: true, message: '请输入名称', trigger: 'blur' }],
  'metadata.namespace': [{ required: true, message: '请选择命名空间', trigger: 'blur' }],
})
const FormInitData = () => {
  formData.value = props.form
  cluster_id.value = props.cluster
  version.value = props.version
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
const labels = ref(null)
const annotations = ref(null)
const enterDialog = async() => {
  await labels.value.transformationformat(formData.value, 'labels')
  await annotations.value.transformationformat(formData.value, 'annotations')
  emit('enter', formData.value)
}

// 切换标签
const handleClick = (tab) => {
  activeName.value = tab.name
}
</script>
<style scoped>

</style>
