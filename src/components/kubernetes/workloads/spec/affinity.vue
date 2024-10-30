<template>
  <div>
    <el-form label-position="top">
      <div v-for="(item, index) in podaffinity" :key="index">
        <el-card style="margin-top: 10px">
          <el-row type="flex" justify="end">
            <el-button type="danger" link icon="delete" size="small" @click="handlePodAffinityDelete(index)">删除</el-button>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="12">
              <el-form-item label="类型">
                <form-item-block v-model="item.type" item-type="radio" :radios="affinityType" />
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="优先级">
                <form-item-block v-model="item.priority" item-type="radio" :radios="priorityList" />
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="12">
              <el-form-item label="Namespaces">
                <form-item-block v-model="item.namespaces" style="width: 100%" item-type="select2" multiple :selections="namespaces_list" />
              </el-form-item>
            </el-col>
            <el-col v-if="item.priority === 'Preferred'" :span="12">
              <el-form-item label="权重">
                <form-item-block v-model="item.weight" item-type="number" />
              </el-form-item>
            </el-col>
          </el-row>

          <div style="margin-top: 20px"><span>matchExpressions</span></div>
          <match-table :match-tables.sync="item.rules" />

          <div style="margin-top: 20px"><span>matchLabels</span></div>
          <table style="width: 100%; margin-top: 5px" class="tab-table">
            <tr v-for="(row, index) in item.labelRules" :key="index">
              <td width="48%">
                <form-item-block v-model="row.key" item-type="input" />
              </td>
              <td width="48%">
                <form-item-block v-model="row.value" item-type="input" />
              </td>
              <td>
                <el-button type="danger" link icon="delete" size="small" @click="handleMatchLabelDelete(item, index)">
                  删除
                </el-button>
              </td>
            </tr>
            <tr>
              <td align="left">
                <el-button type="primary" size="small" link icon="plus" @click="handleMatchLabelAdd(item)">添加</el-button>
              </td>
            </tr>
          </table>
          <el-row style="margin-top: 10px">
            <el-col :span="24">
              <el-form-item label="拓扑键">
                <form-item-block v-model="item.topologyKey" item-type="input" placeholder="topology.kubernetes.io/zone" />
              </el-form-item>
            </el-col>
          </el-row>
        </el-card>
      </div>
      <el-button size="small" type="primary" link icon="plus" @click="handlePodAffinityAdd">添加Pod亲和性</el-button>
      <div v-for="(item, index) in nodeaffinity" :key="index">
        <el-card style="margin-top: 10px">
          <el-row type="flex" justify="end">
            <el-button type="danger" link icon="delete" size="small" @click="handleNodeAffinityDelete(index)">删除</el-button>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="优先级">
                <form-item-block v-model="item.priority" item-type="radio" :radios="priorityList" />
              </el-form-item>
            </el-col>
            <el-col v-if="item.priority === 'Preferred'" :span="12">
              <el-form-item label="权重">
                <form-item-block v-model="item.weight" item-type="number" />
              </el-form-item>
            </el-col>
          </el-row>

          <div style="margin-top: 20px"><span>matchLabels</span></div>
          <match-table :match-tables.sync="item.rules" />
          <div style="margin-top: 20px"><span>matchFields</span></div>
          <match-table :match-tables.sync="item.fields" />
        </el-card>
      </div>
      <el-button size="small" type="primary" link icon="plus" @click="handleNodeAffinityAdd()">添加Node亲和性</el-button>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'AffinityBlock',
}
</script>
<script setup>
import { ref } from 'vue'
import FormItemBlock from '@/components/kubernetes/form-item/index.vue'
import MatchTable from '@/components/kubernetes/workloads/match-table.vue'
const props = defineProps({
  form: {
    default: function() {
      return {}
    },
    type: Object
  },
  namespaces_list: {
    default: function() {
      return []
    },
    type: Array
  },
  type: {
    default: function() {
      return ''
    },
    type: String
  },
})

// 数据初始化为表单数据
const podaffinity = ref([])
const ValueToFormData = (type, priority, d, weight) => {
  const namespaces = d.namespaces || ''
  const rules = []
  if (d.labelSelector.matchExpressions) {
    for (const express of d.labelSelector.matchExpressions) {
      rules.push({ key: express.key, operator: express.operator, value: express.values ? express.values.join(',') : null })
    }
  }

  const labelRules = []
  if (d.labelSelector.matchLabels) {
    for (const key in d.labelSelector.matchLabels) {
      if (Object.prototype.hasOwnProperty.call(d.labelSelector.matchLabels, key)) {
        labelRules.push({
          key: key,
          value: d.labelSelector.matchLabels[key],
        })
      }
    }
  }

  const topologyKey = d.topologyKey ? d.topologyKey : ''
  podaffinity.value.push({
    type: type,
    priority: priority,
    weight: parseInt(weight) || null,
    namespaces: namespaces || '',
    rules: rules,
    labelRules: labelRules,
    topologyKey: topologyKey,
  })
}

// Pod亲和性反亲和性数据初始化
const PodAntiAffinityOrPodAffinity = (form) => {
  if (form.podAffinity) {
    if (form.podAffinity.requiredDuringSchedulingIgnoredDuringExecution) {
      const required = form.podAffinity.requiredDuringSchedulingIgnoredDuringExecution
      for (const r of required) {
        ValueToFormData('Affinity', 'Required', r)
      }
    }
    if (form.podAffinity.preferredDuringSchedulingIgnoredDuringExecution) {
      const preferred = form.podAffinity.preferredDuringSchedulingIgnoredDuringExecution
      for (const p of preferred) {
        if (p.podAffinityTerm) {
          ValueToFormData('Affinity', 'Preferred', p.podAffinityTerm, p.weight)
        }
      }
    }
  }

  if (form.podAntiAffinity) {
    if (form.podAntiAffinity.requiredDuringSchedulingIgnoredDuringExecution) {
      const required = form.podAntiAffinity.requiredDuringSchedulingIgnoredDuringExecution
      for (const r of required) {
        ValueToFormData('AntiAffinity', 'Required', r)
      }
    }
    if (form.podAntiAffinity.preferredDuringSchedulingIgnoredDuringExecution) {
      const preferred = form.podAntiAffinity.preferredDuringSchedulingIgnoredDuringExecution
      for (const p of preferred) {
        if (p.podAffinityTerm) {
          ValueToFormData('AntiAffinity', 'Preferred', p.podAffinityTerm, p.weight)
        }
      }
    }
  }
}

// Node亲和性反亲和性数据初始化
const nodeaffinity = ref([])
const NodeAntiAffinityOrNodeAffinity = (form) => {
  if (form.nodeAffinity) {
    if (form.nodeAffinity.requiredDuringSchedulingIgnoredDuringExecution) {
      const required = form.nodeAffinity.requiredDuringSchedulingIgnoredDuringExecution
      for (const r of required) {
        const rules = []
        if (r.matchExpressions) {
          for (const express of r.matchExpressions) {
            rules.push({ key: express.key, operator: express.operator, value: express.values.join(',') })
          }
        }
        const fields = []
        if (r.matchFields) {
          for (const express of r.matchFields) {
            fields.push({ key: express.key, operator: express.operator, value: express.values.join(',') })
          }
        }
        nodeaffinity.value.push({ priority: 'Required', rules: rules, fields: fields })
      }
    }
    if (form.nodeAffinity.preferredDuringSchedulingIgnoredDuringExecution) {
      const preferred = form.nodeAffinity.preferredDuringSchedulingIgnoredDuringExecution
      for (const p of preferred) {
        const rules = []
        const fields = []
        if (p.preference) {
          if (p.preference.matchExpressions) {
            for (const express of p.preference.matchExpressions) {
              rules.push({ key: express.key, operator: express.operator, value: express.values.join(',') })
            }
          }
          if (p.preference.matchFields) {
            for (const express of p.preference.matchFields) {
              fields.push({ key: express.key, operator: express.operator, value: express.values.join(',') })
            }
          }
        }
        nodeaffinity.value.push({ priority: 'Preferred', rules: rules, fields: fields, weight: p.weight || null })
      }
    }
  }
}

// 数据初始化
const formData = ref({})
const type = ref({})
const affinityType = ref([{ label: '亲和性', value: 'Affinity' }, { label: '反亲和性', value: 'AntiAffinity' }])
const priorityList = ref([{ label: '优先', value: 'Preferred' }, { label: '必须', value: 'Required' }])
const namespaces_list = ref([])
const FormInitData = () => {
  formData.value = props.form
  type.value = props.type
  for (const ns of props.namespaces_list) {
    namespaces_list.value.push(ns.name)
  }
  PodAntiAffinityOrPodAffinity(formData.value)
  NodeAntiAffinityOrNodeAffinity(formData.value)
}

FormInitData()

// 添加Pod亲和性规则
const handlePodAffinityAdd = () => {
  var item = {
    type: 'Affinity',
    priority: 'Preferred',
    namespaces: '',
    weight: 1,
    rules: [],
    labelRules: [],
    topologyKey: '',
  }
  podaffinity.value.push(item)
}

// 删除Pod亲和性规则
const handlePodAffinityDelete = (index) => {
  podaffinity.value.splice(index, 1)
}

// 添加Node亲和性规则
const handleNodeAffinityAdd = () => {
  var item = {
    priority: 'Preferred',
    weight: 1,
    rules: [],
    fields: [],
  }
  nodeaffinity.value.push(item)
}

// 删除Node亲和性规则
const handleNodeAffinityDelete = (index) => {
  nodeaffinity.value.splice(index, 1)
}

// 添加标签匹配规则
const handleMatchLabelAdd = (Item) => {
  var item = {
    key: '',
    value: '',
  }
  Item.labelRules.push(item)
}

// 删除标签匹配规则
const handleMatchLabelDelete = (Item, index) => {
  Item.labelRules.splice(index, 1)
}

// 格式化MatchExpress数据
const getMatchExpress = (val) => {
  const matchs = []
  if (val.length === 0) {
    return matchs
  }
  for (const rule of val) {
    if (rule.value) {
      matchs.push({
        key: rule.key,
        operator: rule.operator,
        values: rule.value.split(','),
      })
    } else {
      matchs.push({
        key: rule.key,
        operator: rule.operator,
      })
    }
  }
  return matchs
}

// 格式化MatchLabels数据
const getMatchLabels = (val) => {
  const obj = {}
  if (val.length === 0) {
    return obj
  }
  for (let i = 0; i < val.length; i++) {
    if (val[i].key !== '') {
      obj[val[i].key] = val[i].value
    }
  }
  return obj
}

// 提交后端数据格式化
const transformation = (parentFrom) => {
  parentFrom.affinity = {}
  if (podaffinity.value.length !== 0) {
    for (const pS of podaffinity.value) {
      const itemAdd = {}
      itemAdd.namespaces = (pS.namespaces && pS.namespaces.length !== 0) ? pS.namespaces : undefined
      itemAdd.topologyKey = pS.topologyKey || undefined
      const matchs = getMatchExpress(pS.rules)
      const labelMatchs = getMatchLabels(pS.labelRules)
      switch (pS.type + '+' + pS.priority) {
        case 'Affinity+Required':
          if (!parentFrom.affinity.podAffinity) {
            parentFrom.affinity.podAffinity = {}
          }
          parentFrom.affinity.podAffinity.requiredDuringSchedulingIgnoredDuringExecution = []
          itemAdd.labelSelector = { matchExpressions: matchs, matchLabels: labelMatchs }
          parentFrom.affinity.podAffinity.requiredDuringSchedulingIgnoredDuringExecution.push(itemAdd)
          break
        case 'Affinity+Preferred':
          if (!parentFrom.affinity.podAffinity) {
            parentFrom.affinity.podAffinity = {}
          }
          parentFrom.affinity.podAffinity.preferredDuringSchedulingIgnoredDuringExecution = []
          itemAdd.podAffinityTerm = { labelSelector: { matchExpressions: matchs, matchLabels: labelMatchs }}
          itemAdd.weight = parseInt(pS.weight)
          parentFrom.affinity.podAffinity.preferredDuringSchedulingIgnoredDuringExecution.push(itemAdd)
          break
        case 'Anti-Affinity+Required':
          if (!parentFrom.affinity.podAntiAffinity) {
            parentFrom.affinity.podAntiAffinity = {}
          }
          parentFrom.affinity.podAntiAffinity.requiredDuringSchedulingIgnoredDuringExecution = []
          itemAdd.labelSelector = { matchExpressions: matchs, matchLabels: labelMatchs }
          parentFrom.affinity.podAntiAffinity.requiredDuringSchedulingIgnoredDuringExecution.push(itemAdd)
          break
        case 'Anti-Affinity+Preferred':
          if (!parentFrom.affinity.podAntiAffinity) {
            parentFrom.affinity.podAntiAffinity = {}
          }
          parentFrom.affinity.podAntiAffinity.preferredDuringSchedulingIgnoredDuringExecution = []
          itemAdd.podAffinityTerm = { labelSelector: { matchExpressions: matchs, matchLabels: labelMatchs }}
          itemAdd.weight = parseInt(pS.weight)
          parentFrom.affinity.podAntiAffinity.preferredDuringSchedulingIgnoredDuringExecution.push(itemAdd)
          break
      }
    }
  }
  parentFrom.nodeAffinity = {}
  if (nodeaffinity.value.length !== 0) {
    for (const nS of nodeaffinity.value) {
      const matchs = getMatchExpress(nS.rules)
      const fields = getMatchExpress(nS.fields)
      const itemAdd = {}
      switch (nS.priority) {
        case 'Preferred':
          parentFrom.nodeAffinity.preferredDuringSchedulingIgnoredDuringExecution = []
          itemAdd.weight = parseInt(nS.weight)
          itemAdd.preference = { matchExpressions: matchs, matchFields: fields }
          parentFrom.nodeAffinity.preferredDuringSchedulingIgnoredDuringExecution.push(itemAdd)
          break
        case 'Required':
          if (!parentFrom.nodeAffinity.requiredDuringSchedulingIgnoredDuringExecution) {
            parentFrom.nodeAffinity.requiredDuringSchedulingIgnoredDuringExecution = {}
          }
          parentFrom.nodeAffinity.requiredDuringSchedulingIgnoredDuringExecution.nodeSelectorTerms = []
          itemAdd.matchExpressions = matchs
          itemAdd.matchFields = fields
          parentFrom.nodeAffinity.requiredDuringSchedulingIgnoredDuringExecution.nodeSelectorTerms.push(itemAdd)
          break
      }
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
