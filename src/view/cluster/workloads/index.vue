<template>
  <div class="container">
    <ClusterNamespace />
    <el-tabs style="width:100%;">
      <el-tab-pane label="Deployments">
        <!--子组件-->
        <Deployments />
      </el-tab-pane>
      <el-tab-pane label="DaemonSets">
        <!--子组件-->
        <Daemonsets />
      </el-tab-pane>
      <el-tab-pane label="StatefulSets">
        <!--子组件-->
        <StatefulSets />
      </el-tab-pane>
      <el-tab-pane label="Jobs">
        <!--子组件-->
        <Jobs />
      </el-tab-pane>
      <el-tab-pane label="CronJobs">
        <!--子组件-->
        <CronJobs />
      </el-tab-pane>
      <el-tab-pane label="Pods">
        <!--子组件-->
        <Pods />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import Pods from './pods/index.vue'
import Deployments from './deployments/index.vue'
import Daemonsets from './daemonsets/index.vue'
import StatefulSets from './statefulsets/index.vue'
import Jobs from './jobs/index.vue'
import CronJobs from './cronjobs/index.vue'
import ClusterNamespace from '@/components/kubernetes/select/index.vue'
export default {
  name: 'Workloads',
  components: {
    Pods,
    Deployments,
    Daemonsets,
    Jobs,
    CronJobs,
    StatefulSets,
    ClusterNamespace
  },
}
</script>
