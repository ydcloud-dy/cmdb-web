<template>
  <div class="containers">
    <ClusterNamespace />
    <el-tabs style="width:100%;">
      <el-tab-pane label="Service Accounts">
        <!--子组件-->
        <ServiceAccounts />
      </el-tab-pane>
      <el-tab-pane label="Roles">
        <!--子组件-->
        <Roles />
      </el-tab-pane>
      <el-tab-pane label="Role Bindings">
        <!--子组件-->
        <RoleBindings />
      </el-tab-pane>
      <el-tab-pane label="Cluster Roles">
        <!--子组件-->
        <ClusterRoles />
      </el-tab-pane>
      <el-tab-pane label="Cluster Role Bindings">
        <!--子组件-->
        <ClusterRoleBindings />
      </el-tab-pane>
      <el-tab-pane label="Pod Security Policies">
        <!--子组件-->
<!--        <PodSecurityPolicies />-->
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import ServiceAccounts from './serviceaccounts/index.vue'
import Roles from './roles/index.vue'
import RoleBindings from './rolebindings/index.vue'
import ClusterRoles from './clusterroles/index.vue'
import ClusterRoleBindings from './clusterrolebindings/index.vue'
// import PodSecurityPolicies from './podsecuritypolicies/index.vue'
import ClusterNamespace from '@/components/kubernetes/select/index.vue'

export default {
  name: 'AccessControls',
  components: {
    ServiceAccounts,
    Roles,
    RoleBindings,
    ClusterRoles,
    ClusterRoleBindings,
    // PodSecurityPolicies,
    ClusterNamespace
  }
}
</script>
<style>
.containers {
  width: 100%;
}
</style>
