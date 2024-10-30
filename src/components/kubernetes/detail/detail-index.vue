<template>
  <div>
    <el-row :gutter="20" class="row-box">
      <el-col :span="24">
        <el-card class="el-card">
          <detail-basic :form="detailData" />
        </el-card>
      </el-col>
      <el-col :span="24">
        <el-tabs v-model="activeName" type="border-card">
          <el-tab-pane name="pods" label="容器组">
            <detail-pods :data="detailData" :selectors="Selectors" />
          </el-tab-pane>
          <el-tab-pane v-if="detailData.type !== 'broadcastjob'" name="services" label="服务">
            <detail-services :data="detailData" :selectors="Selectors" />
          </el-tab-pane>
          <el-tab-pane v-if="detailData.type !== 'broadcastjob'" name="ingress" label="路由">
            <detail-ingress :data="detailData" />
          </el-tab-pane>
          <el-tab-pane name="conditions" label="运行时信息">
            <detail-conditions :conditions="detailData.status.conditions" />
          </el-tab-pane>
          <el-tab-pane v-if="detailData.type && detailData.type === 'deployment'" name="strategy" label="部署策略">
            <detail-update :data="detailData" @update="WorkloadsUpdate" />
          </el-tab-pane>
          <el-tab-pane v-if="detailData.type && detailData.type === 'advancedscloneset'" name="cloneset-update" label="部署策略">
            <open-kruise-cloneset-update :data="detailData" @update="WorkloadsUpdate" />
          </el-tab-pane>
          <el-tab-pane v-if="detailData.type && detailData.type === 'advanceddaemonset'" name="daemon-update" label="部署策略">
            <open-kruise-advanced-daemon-set-update :data="detailData" @update="WorkloadsUpdate" />
          </el-tab-pane>
          <el-tab-pane v-if="detailData.type && detailData.type === 'advancedstatefulset'" name="advancedstatefulset-update" label="部署策略">
            <open-kruise-advanced-statefulset-update :data="detailData" @update="WorkloadsUpdate" />
          </el-tab-pane>
          <el-tab-pane v-if="detailData.type && detailData.type === 'advancedscloneset'" name="cloneset-scaleStrategy" label="指定Pod缩容">
            <open-kruise-clone-set-scale-strategy :data="detailData" :selectors="Selectors" @update="WorkloadsUpdate" />
          </el-tab-pane>
          <el-tab-pane v-if="detailData.type && detailData.type === 'advancedscloneset'" name="cloneset-update-pause" label="暂停">
            <open-kruise-cloneset-update-pause :data="detailData" @update="WorkloadsUpdate" />
          </el-tab-pane>
          <el-tab-pane v-if="detailData.type && detailData.type === 'advancedstatefulset'" name="advancedstatefulset-update-pause" label="暂停">
            <open-kruise-advanced-statefulset-update-pause :data="detailData" @update="WorkloadsUpdate" />
          </el-tab-pane>
          <el-tab-pane v-if="detailData.type && detailData.type === 'advancedstatefulset'" name="statefulsetreserve-ordinal" label="序号保留（跳过）">
            <open-kruise-advanced-statefulsetreserve-ordinal :data="detailData" @update="WorkloadsUpdate" />
          </el-tab-pane>
          <el-tab-pane v-if="detailData.type && detailData.type === 'deployment' || detailData.type === 'advancedscloneset' || detailData.type === 'advancedstatefulset' " name="replicas" label="副本数">
            <detail-replicas :data="detailData" @update="WorkloadsUpdate" />
          </el-tab-pane>
          <el-tab-pane v-if="detailData.type && detailData.type === 'deployment' || detailData.type === 'advancedscloneset' || detailData.type === 'advancedstatefulset' || detailData.type === 'advanceddaemonset'" name="image" label="容器镜像">
            <detail-image :data="detailData" @update="WorkloadsUpdate" />
          </el-tab-pane>
          <el-tab-pane v-if="detailData.type && detailData.type === 'deployment' " name="pause" label="暂停">
            <detail-pause :data="detailData" @update="WorkloadsUpdate" />
          </el-tab-pane>
          <el-tab-pane v-if="detailData.type && detailData.type === 'deployment'" name="history" label="历史版本">
            <detail-replicasets :data="detailData" :selectors="Selectors" @update="WorkloadsUpdate" />
          </el-tab-pane>
        </el-tabs>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'DetailBlock',
}
</script>

<script setup>
import DetailBasic from '@/components/kubernetes/detail/detail-basic.vue'
import DetailPods from '@/components/kubernetes/detail/detail-pods.vue'
import DetailServices from '@/components/kubernetes/detail/detail-services.vue'
import DetailIngress from '@/components/kubernetes/detail/detail-ingress.vue'
import DetailConditions from '@/components/kubernetes/detail/detail-conditions.vue'
import DetailUpdate from '@/components/kubernetes/detail/detail-update.vue'
import OpenKruiseClonesetUpdate from '@/components/kubernetes/openkruise/detail-cloneset-update.vue'
import OpenKruiseAdvancedStatefulsetUpdate from '@/components/kubernetes/openkruise/detail-statefulset-update.vue'
import OpenKruiseAdvancedDaemonSetUpdate from '@/components/kubernetes/openkruise/detail-daemonset-update.vue'
import OpenKruiseCloneSetScaleStrategy from '@/components/kubernetes/openkruise/detail-cloneset-scalestrategy.vue'
import OpenKruiseClonesetUpdatePause from '@/components/kubernetes/openkruise/detail-cloneset-update-pause.vue'
import OpenKruiseAdvancedStatefulsetUpdatePause from '@/components/kubernetes/openkruise/detail-statefulset-update-pause.vue'
import OpenKruiseAdvancedStatefulsetreserveOrdinal from '@/components/kubernetes/openkruise/detail-statefulset-reserveordinals.vue'
import DetailReplicas from '@/components/kubernetes/detail/detail-replicas.vue'
import DetailImage from '@/components/kubernetes/detail/detail-image.vue'
import DetailPause from '@/components/kubernetes/detail/detail-pause.vue'
import DetailReplicasets from '@/components/kubernetes/detail/detail-replicasets.vue'
import { ref } from 'vue'
import { DeploymentsUpdate } from '@/api/kubernetes/deployments'
import { ElMessage } from 'element-plus'
import { CloneSetsUpdate } from '@/api/kubernetes/openkruise/clonesets'
import { StatefulsetsUpdate } from '@/api/kubernetes/openkruise/statefulsets'
import { DaemonsetsUpdate } from '@/api/kubernetes/openkruise/daemonsets'
const props = defineProps({
  data: {
    default: function() {
      return {}
    },
    type: Object
  },
})

// 标签选择器
const Selectors = ref('')
const SelectormatchLabel = async() => {
  if (detailData.value.spec.selector) {
    if (detailData.value.spec.selector.matchLabels) {
      for (const key in detailData.value.spec.selector.matchLabels) {
        if (Object.prototype.hasOwnProperty.call(detailData.value.spec.selector.matchLabels, key)) {
          Selectors.value += key + '=' + detailData.value.spec.selector.matchLabels[key] + ','
        }
      }
      Selectors.value = Selectors.value.length !== 0 ? Selectors.value.substring(0, Selectors.value.length - 1) : ''
    }
  }

  if (detailData.value.type === 'broadcastjob') {
    Selectors.value = 'broadcastjob-name' + '=' + detailData.value.metadata.name
  }
}

// 数据初始化
const activeName = ref('')
const detailData = ref({})
const detailInitData = () => {
  activeName.value = 'pods'
  detailData.value = props.data
  SelectormatchLabel()
}

detailInitData()

// 更新
const WorkloadsUpdate = async(value) => {
  if (value.type) {
    let res
    switch (value.type) {
      case 'deployment':
        res = await DeploymentsUpdate({cluster_id:value.cluster_id, namespace:value.metadata.namespace,deploymentName: value.metadata.name,
          content:value})
        break
      case 'advancedscloneset':
        res = await CloneSetsUpdate({cluster_id:value.cluster_id, namespace:value.metadata.namespace, name:value.metadata.name,content:value})
        break
      case 'advancedstatefulset':
        res = await StatefulsetsUpdate({cluster_id:value.cluster_id, namespace:value.metadata.namespace,name: value.metadata.name, content:value})
        break
      case 'advanceddaemonset':
        res = await DaemonsetsUpdate({cluster_id:value.cluster_id, namespace:value.metadata.namespace,name: value.metadata.name, content:value})
        break
      default:
        break
    }

    if (res.data.items) {
      if (res.data.items.code) {
        ElMessage({
          type: 'error',
          message: res.data.items.message,
        })
        return
      }
    }

    if (res.code === 0) {
      ElMessage({
        type: 'success',
        message: '更新成功'
      })
    }
  }
}
</script>
<style scoped>

</style>
