<template>
  <div class="containers">
    <ClusterNamespace />
    <el-tabs style="width:100%;">
      <el-tab-pane label="Persistent VolumeClaims">
        <!--子组件-->
        <PersistentVolumeClaims />
      </el-tab-pane>
      <el-tab-pane label="Persistent Volumes">
        <!--子组件-->
        <PersistentVolumes />
      </el-tab-pane>
      <el-tab-pane label="Storage Class">
        <!--子组件-->
        <StorageClass />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import PersistentVolumeClaims from './persistentvolumeclaims/index.vue'
import PersistentVolumes from './persistentvolumes/index.vue'
import StorageClass from './storageclasses/index.vue'
import ClusterNamespace from '@/components/kubernetes/select/index.vue'

export default {
  name: 'Network',
  components: {
    PersistentVolumeClaims,
    PersistentVolumes,
    StorageClass,
    ClusterNamespace
  }
}
</script>
<style>
.containers {
  width: 100%;
}
</style>
