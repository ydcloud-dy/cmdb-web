<template>
  <div class="containers">
    <ClusterNamespace />
    <el-tabs style="width:100%;">
      <el-tab-pane label="Services">
        <!--子组件-->
        <Services />
      </el-tab-pane>
      <el-tab-pane label="Ingress">
        <!--子组件-->
        <Ingress />
      </el-tab-pane>
      <el-tab-pane label="Endpoints">
        <!--子组件-->
        <EndPoints />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import Services from './services/index.vue'
import Ingress from './ingress/index.vue'
import EndPoints from './endpoints/index.vue'
import ClusterNamespace from '@/components/kubernetes/select/index.vue'
export default {
  name: 'Network',
  components: {
    Services,
    Ingress,
    EndPoints,
    ClusterNamespace
  }
}
</script>
<style>
.containers {
  width: 100%;
}
</style>
