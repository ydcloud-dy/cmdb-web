<template>
  <div style="margin-top: 20px">
    <el-collapse v-model="activeName">
      <el-collapse-item v-for="(item, index) in volumes" :key="index" style="margin-top: 10px" :title="item.name + '(' + item.type + ')'" :name="index">
        <el-form label-position="top">
          <el-button type="danger" link icon="delete" size="small" style="float: right;margin-top: 5px;margin-right: 20px; padding: 3px 0" @click="handleVolumeDelete(index)">删除</el-button>
          <el-form-item label="卷名称">
            <form-item-block v-model="item.name" item-type="input" @change="changeName" />
          </el-form-item>
          <el-form-item v-if="hasDefaultMode(item.type)" label="默认模式">
            <form-item-block v-model.number="item.defaultMode" item-type="number" placeholder="644" />
          </el-form-item>
          <el-form-item v-if="hasResource(item.type)" :label="item.type">
            <form-item-block v-if="item.type === 'ConfigMap'" v-model="item.resource" item-type="select2" :selections="config_map_name_list" @change="changeConfigMap(item)" />
            <form-item-block v-if="item.type === 'Secret'" v-model="item.resource" item-type="select2" :selections="secret_name_list" @change="changeSecret(item)" />
            <form-item-block v-if="item.type === 'PVC'" v-model="item.resource" item-type="select2" :selections="pvc_list" />
          </el-form-item>
          <table v-if="hasKvData(item.type)" style="width: 98%" class="tab-table">
            <tr>
              <th scope="col" width="43%" align="left">
                <label>键</label>
              </th>
              <th scope="col" width="43%" align="left">
                <label>映射目标路径</label>
              </th>
              <th align="left" />
            </tr>
            <tr v-for="(row, index) in item.items" :key="index">
              <td>
                <form-item-block v-model="row.key" item-type="select2" :selections="item.options" />
              </td>
              <td>
                <form-item-block v-model="row.path" item-type="input" />
              </td>
              <td>
                <el-button type="danger" link icon="delete" size="small" @click="handleDelete(item, index)">删除
                </el-button>
              </td>
            </tr>
            <tr>
              <td align="left">
                <el-button size="small" type="primary" link icon="plus" @click="handleAdd(item)">添加</el-button>
              </td>
            </tr>
          </table>
          <el-form-item v-if="hasOptional(item.type)" label="Optional">
            <form-item-block v-model="item.optional" item-type="radio" :radios="optional_list" />
          </el-form-item>
          <div v-if="item.type === 'NFS'">
            <el-form-item label="Path">
              <form-item-block v-model="item.path" item-type="input" />
            </el-form-item>
            <el-form-item label="Server">
              <form-item-block v-model="item.server" item-type="input" />
            </el-form-item>
          </div>
          <div v-if="item.type === 'HostPath'">
            <el-form-item label="路径或节点">
              <form-item-block v-model="item.path" item-type="input" />
            </el-form-item>
            <el-form-item label="类型">
              <form-item-block v-model="item.hostType" item-type="select2" :selections="host_path_list" />
            </el-form-item>
          </div>
        </el-form>
      </el-collapse-item>
    </el-collapse>
    <el-row style="margin-top: 10px">
      <el-col :span="12">
        <el-dropdown>
          <el-button size="small" type="primary" link icon="ArrowDown">添加</el-button>
          <template #dropdown>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item v-for="(item, index) in volume_type_list" :key="index" :command="item.value" @click.native="handleVolumeAdd(item.value)">{{ item.label }}</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Volume',
}
</script>
<script setup>
import { ref, watch } from 'vue'
const emit = defineEmits(['loadVolumes'])
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
      return ''
    },
    type: String
  },
  configmaplist: {
    default: function() {
      return []
    },
    type: Array
  },
  pvclist: {
    default: function() {
      return []
    },
    type: Array
  },
  secretlist: {
    default: function() {
      return []
    },
    type: Array
  }
})

const config_map_name_list = ref([])
const config_map_list = ref([])
const secret_list = ref([])
const secret_name_list = ref([])
const pvc_list = ref([])
watch(
  () => props.configmaplist,
  () => {
    config_map_list.value = props.configmaplist
    for (const cm of props.configmaplist) {
      config_map_name_list.value.push(cm.metadata.name)
    }
  }
)
watch(
  () => props.secretlist,
  () => {
    secret_list.value = props.secretlist
    for (const cm of props.secretlist) {
      secret_name_list.value.push(cm.metadata.name)
    }
  }
)

watch(
  () => props.pvclist,
  () => {
    for (const cm of props.pvclist) {
      pvc_list.value.push(cm.metadata.name)
    }
  }
)

const isSupport = (volumes) => {
  return volumes.configMap || volumes.secret || volumes.persistentVolumeClaim || volumes.emptyDir || volumes.nfs || volumes.hostPath
}

const formData = ref({})
const activeName = ref([])
const volume_type_list = ref([
  { label: 'NFS', value: 'NFS' },
  { label: 'PVC', value: 'PVC' },
  { label: 'EmptyDir', value: 'EmptyDir' },
  { label: 'HostPath', value: 'HostPath' },
  { label: 'ConfigMap', value: 'ConfigMap' },
  { label: 'Secret', value: 'Secret' },
])
const optional_list = ref([
  { label: '是', value: true },
  { label: '否', value: false },
])
const host_path_list = ref([
  'DirectoryOrCreate',
  'Directory',
  'FileOrCreate',
  'File',
  'Socket',
  'CharDevice',
  'BlockDevice'
])
const type = ref('')
const volumes = ref([])
const FormInitData = () => {
  formData.value = props.form
  type.value = props.type
  volumes.value = []
  secret_list.value = []
  config_map_list.value = []
  pvc_list.value = []
  secret_list.value = props.secretlist
  for (const cm of props.secretlist) {
    secret_name_list.value.push(cm.metadata.name)
  }

  config_map_list.value = props.configmaplist
  for (const cm of props.configmaplist) {
    config_map_name_list.value.push(cm.metadata.name)
  }

  for (const cm of props.pvclist) {
    pvc_list.value.push(cm.metadata.name)
  }

  if (formData.value.volumes) {
    for (const volume of formData.value.volumes) {
      if (isSupport(volume)) {
        const item = {}
        if (volume.name) {
          item.name = volume.name
        }
        let itemClild = {}
        if (volume.configMap) {
          item.type = 'ConfigMap'
          itemClild = volume.configMap
          item.items = volume.configMap.items || []
        }
        if (volume.secret) {
          item.type = 'Secret'
          itemClild = volume.secret
          item.items = volume.secret.items || []
          item.resource = volume.secret.secretName
        }
        if (volume.persistentVolumeClaim) {
          item.type = 'PVC'
          itemClild.name = volume.persistentVolumeClaim.claimName
        }
        if (volume.emptyDir) {
          item.type = 'EmptyDir'
          itemClild = {}
        }
        if (volume.nfs) {
          item.type = 'NFS'
          itemClild = volume.nfs
        }
        if (volume.hostPath) {
          item.type = 'HostPath'
          itemClild = volume.hostPath
        }

        if (itemClild.defaultMode) {
          item.defaultMode = itemClild.defaultMode.toString(8)
        }
        if (itemClild.optional !== undefined) {
          item.optional = itemClild.optional
        }
        if (itemClild.name) {
          item.resource = itemClild.name
        }
        if (itemClild.path) {
          item.path = itemClild.path
        }
        if (itemClild.server) {
          item.server = itemClild.server
        }
        if (itemClild.type) {
          item.hostType = itemClild.type
        }

        volumes.value.push(item)
      }
    }
    emit('loadVolumes', 'volume', volumes.value, [])
  }
}

FormInitData()

const handleVolumeAdd = (type) => {
  volumes.value.push({
    type: type,
    name: '',
    resource: '',
    defaultMode: null,
    optional: null,
    path: null,
    server: null,
    hostType: null,
    options: [],
    items: [],
  })
  activeName.value = volumes.value.length - 1
  emit('loadVolumes', 'volume', volumes.value, [])
}

const hasDefaultMode = (type) => {
  return type === 'ConfigMap' || type === 'Secret'
}

const hasResource = (type) => {
  return type === 'ConfigMap' || type === 'PVC' || type === 'Secret'
}

const hasKvData = (type) => {
  return type === 'ConfigMap' || type === 'Secret'
}

const hasOptional = (type) => {
  return type === 'ConfigMap' || type === 'Secret'
}

const changeName = () => {
  emit('loadVolumes', 'volume', volumes.value, [])
}

const handleVolumeDelete = (index) => {
  volumes.value.splice(index, 1)
  activeName.value = volumes.value.length - 1
  emit('loadVolumes', 'volume', volumes.value, [])
}

const handleAdd = (row) => {
  const item = {
    key: '',
    path: '',
  }
  row.items.push(item)
}

const handleDelete = (row, index) => {
  row.items.splice(index, 1)
}

const changeConfigMap = (row) => {
  row.options = []
  for (const cm of config_map_list.value) {
    if (row.resource === cm.metadata.name) {
      for (const item of Object.keys(cm.data)) {
        row.options.push(item)
      }
    }
  }
}

const changeSecret = (row) => {
  row.options = []
  for (const se of secret_list.value) {
    if (row.resource === se.metadata.name) {
      for (const item of Object.keys(se.data)) {
        row.options.push(item)
      }
    }
  }
}

const transformation = (parentFrom) => {
  if (!parentFrom.volumes) {
    parentFrom.volumes = []
  }
  parentFrom.volumes = parentFrom.volumes.filter((item) => {
    return !isSupport(item)
  })
  for (const volume of volumes.value) {
    const item = {}
    const itemClild = {}
    item.name = volume.name || undefined
    itemClild.defaultMode = volume.defaultMode ? parseInt('0' + volume.defaultMode.toString(), 8) : undefined
    itemClild.optional = volume.optional !== null ? volume.optional : undefined
    itemClild.path = volume.path || undefined
    itemClild.server = volume.server || undefined
    itemClild.type = volume.hostType || undefined

    switch (volume.type) {
      case 'ConfigMap':
        if (volume.items.length !== 0) {
          item.items = volume.items
        }
        item.configMap = itemClild
        item.configMap.name = volume.resource || undefined
        item.configMap.items = item.items
        delete item.items
        break
      case 'Secret':
        if (volume.items.length !== 0) {
          item.items = volume.items
        }
        item.secret = itemClild
        item.secret.secretName = volume.resource || undefined
        item.secret.items = item.items
        delete item.items
        break
      case 'PVC':
        item.persistentVolumeClaim = itemClild
        item.persistentVolumeClaim.claimName = volume.resource || undefined
        break
      case 'EmptyDir':
        item.emptyDir = {}
        break
      case 'NFS':
        item.nfs = itemClild
        break
      case 'HostPath':
        item.hostPath = itemClild
        break
    }
    parentFrom.volumes.push(item)
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
