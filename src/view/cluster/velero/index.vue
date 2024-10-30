<template>
  <div class="containers">
    <ClusterNamespace />
    <el-tabs style="width:100%;">
      <el-tab-pane label="VeleroTools">
        <!--子组件-->
        <VeleroTools />
      </el-tab-pane>
      <el-tab-pane label="备份任务">
          <!--子组件-->
          <VeleroTasks />
        </el-tab-pane>
      <el-tab-pane label="备份记录">
        <!--子组件-->
        <VeleroRecord />
      </el-tab-pane>
      <el-tab-pane label="恢复记录">
        <!--子组件-->
        <VeleroRestore />
      </el-tab-pane>
      </el-tabs>
  </div>
</template>
<script>
import VeleroTools from './veleroTools.vue'
import VeleroTasks from './veleroTasks.vue'
import VeleroRecord from "./veleroRecord.vue";
import ClusterNamespace from '@/components/kubernetes/select/index.vue'
import VeleroRestore from "./veleroRestore.vue"
export default {
  name: 'Velero',
  components: {
    VeleroTasks,
    ClusterNamespace,
    VeleroTools,
    VeleroRecord,
    VeleroRestore
  }
}
</script>

<style>
.containers {
  width: 100%;
}
</style>
