import service from '@/utils/request'

const BaseUrl = (cluster_id) => {
  return `/kubernetes/proxy/${cluster_id}/apis/rbac.authorization.k8s.io/v1/clusterrolebindings`
}

const BaseNamespaceUrl = (cluster_id, namespace) => {
  return `/kubernetes/proxy/${cluster_id}/apis/rbac.authorization.k8s.io/v1/clusterrolebindings`
}

export const ClusterRoleBindingsList = (params) => {
  // if (namespace && namespace !== 'All Namespaces') {
    return service({
      url: '/kubernetes/ClusterRoleBinding',
      method: 'get',
      params
    })
  // }
  // return service({
  //   url: `${BaseUrl(cluster_id)}?search=true&keywords=${keywords}&page=${page}&pageSize=${pageSize}`,
  //   method: 'get',
  // })
}

export const ClusterRoleBindingsGet = (params) => {
  return service({
    url: '/kubernetes/ClusterRoleBindingDetails',
    method: 'get',
    params
  })
}

export const ClusterRoleBindingsCreate = ( data) => {
  return service({
    url: '/kubernetes/ClusterRoleBinding',
    method: 'post',
    data
  })
}

export const ClusterRoleBindingsUpdate = ( data) => {
  return service({
    url: '/kubernetes/ClusterRoleBinding',
    method: 'put',
    data
  })
}

export const ClusterRoleBindingsDelete = (data) => {
  return service({
    url: '/kubernetes/ClusterRoleBinding',
    method: 'delete',
    data
  })
}
