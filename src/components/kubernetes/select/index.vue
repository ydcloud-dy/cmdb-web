<template>
  <div class="dycloud-search-box">
    <el-form
      ref="searchForm"
      :inline="true"
      :model="searchInfo"
    >
      <el-form-item label="集群">
        <el-select
          v-model="searchInfo.cluster_id"
          style="width: 200px"
          placeholder="请选择集群"
          @change="ClusterChange"
        >
          <el-option
            v-for="item in cluster_list"
            :key="item.id"
            :label="item.name"
            :value="item.id"
          />
        </el-select>
      </el-form-item>
      <el-form-item
        v-show="namespaceStatus"
        label="命名空间"
      >
        <el-select
          v-model="searchInfo.namespace"
          filterable
          size="large"
          style="width: 200px"
          placeholder="请选择命名空间"
          @change="NamespaceChange"
        >
          <el-option
            v-for="item in namespace_list"
            :key="item.id"
            :label="item.name"
            :value="item.name"
          />
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          icon="Cloudy"
          @click="handleCloudTty"
        >CloudShell</el-button>
      </el-form-item>
    </el-form>

    <div v-if="dialogCloudTtyVisible">
      <el-dialog
        v-model="dialogCloudTtyVisible"
        width="70%"
        :title="title"
        :center="true"
      >
        <template #default>
          <div class="dialog-footer">
            <CloudTTYBlock
              @close="closeDialog"
            />
          </div>
        </template>
      </el-dialog>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ClusterNamespace',
}
</script>

<script setup>
import { ref,provide } from 'vue'
import { getClustersList } from '@/api/kubernetes/cluster/k8sCluster'
import { getClusterUserNamespace } from '@/api/kubernetes/namespaces'
import { dispatchClusterIDEventStrage, dispatchNamespaceEventStrage } from '@/utils/watchLocalStorage'
import CloudTTYBlock from '@/components/kubernetes/cloudtty/index.vue'

const props = defineProps({
  namespace: {
    default: function() {
      return true
    },
    type: Boolean
  },
})

// 切换命名空间
const NamespaceChange = async(value) => {
  searchInfo.value['namespace'] = value
  dispatchNamespaceEventStrage(searchInfo.value.namespace)
}

// 集群选择
const ClusterChange = async(value) => {
  dispatchClusterIDEventStrage(searchInfo.value.cluster_id)
  await getNamespaceData(searchInfo.value.cluster_id)
  searchInfo.value['cluster_id'] = value
}

const defaultNamespace = ref({})
const getNamespaceData = async(cluster_id) => {
  const localStorageHit = ref(false)
  // defaultNamespace.value = { 'id': 0, 'name': 'All Namespaces' }
  defaultNamespace.value = { }

  const nstable = await getClusterUserNamespace({ id: cluster_id })
  if (nstable.code === 0) {
    namespace_list.value = []
    for (const ns of nstable.data.namespaces) {
      if (ns === localStorage.getItem('namespace')) {
        localStorageHit.value = true
      }

      const item = {
        id: Math.random(),
        name: ns,
      }
      namespace_list.value.push(item)
    }

    namespace_list.value.push(defaultNamespace.value)


    if (localStorage.getItem('namespace') === 'All Namespaces') {
      localStorageHit.value = true
    }

    if (localStorageHit.value) {
      searchInfo.value.namespace = localStorage.getItem('namespace')
    } else {
      searchInfo.value.namespace = namespace_list.value[0].name
    }
    dispatchNamespaceEventStrage(searchInfo.value.namespace)
  }
  console.log("================================================================")
  console.log(namespace_list.value)
}

const cluster_list = ref([])
const getClusterData = async() => {
  const table = await getClustersList({ page: 1, pageSize: 10000 })
  if (table.code === 0) {
    cluster_list.value = table.data.list
    searchInfo.value.cluster_id = cluster_list.value[0].id
    if (parseInt(localStorage.getItem('cluster_id')) > 0) {
      searchInfo.value.cluster_id = parseInt(localStorage.getItem('cluster_id'))
    }
    dispatchClusterIDEventStrage(searchInfo.value.cluster_id)
    await getNamespaceData(searchInfo.value.cluster_id)
  }
}

getClusterData()

// 数据初始化
const searchInfo = ref({})
const namespace_list = ref([])
const namespaceStatus = ref(true)
const FormInitData = () => {
  namespaceStatus.value = props.namespace
}

FormInitData()

// CloudTTY
const title = ref('')
const dialogCloudTtyVisible = ref(false)
const handleCloudTty = () => {
  title.value = 'CloudShell'
  dialogCloudTtyVisible.value = true
}

// 关闭
const closeDialog = () => {
  dialogCloudTtyVisible.value = false
}
</script>
<style scoped>

</style>
