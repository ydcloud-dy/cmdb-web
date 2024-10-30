<template>
  <div class="containers">
    <ClusterNamespace />
    <el-tabs style="width:100%;">
      <el-tab-pane label="Config Maps">
        <!--子组件-->
        <Configmaps />
      </el-tab-pane>
      <el-tab-pane label="Secrets">
        <!--子组件-->
        <Secrets />
      </el-tab-pane>
      <el-tab-pane label="Resource Quotas">
        <!--子组件-->
        <ResourceQuotas />
      </el-tab-pane>
      <el-tab-pane label="Limit Ranges">
        <!--子组件-->
        <LimitRanges />
      </el-tab-pane>
      <el-tab-pane label="HPA">
        <!--子组件-->
        <HorizontalPodautoscalers />
      </el-tab-pane>
      <el-tab-pane label="Pod Disruption Budget">
        <!--子组件-->
        <PodDisruptionbudgets />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import Configmaps from './configmaps/index.vue'
import Secrets from './secrets/index.vue'
import ResourceQuotas from './resourcequotas/index.vue'
import LimitRanges from './limitranges/index.vue'
import HorizontalPodautoscalers from './horizontalpodautoscalers/index.vue'
import PodDisruptionbudgets from './poddisruptionbudgets/index.vue'
import ClusterNamespace from '@/components/kubernetes/select/index.vue'
export default {
  name: 'Network',
  components: {
    Configmaps,
    Secrets,
    ResourceQuotas,
    LimitRanges,
    HorizontalPodautoscalers,
    PodDisruptionbudgets,
    ClusterNamespace
  }
}
</script>
<style>
.containers {
  width: 100%;
}
</style>
