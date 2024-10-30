import service from '@/utils/request'

const BaseUrl = (cluster_id) => {
  return `/kubernetes/proxy/${cluster_id}/apis/rbac.authorization.k8s.io/v1/clusterroles`
}

const BaseNamespaceUrl = (cluster_id, namespace) => {
  return `/kubernetes/proxy/${cluster_id}/apis/rbac.authorization.k8s.io/v1/clusterroles`
}

export const ClusterRolesList = (params) => {
  // if (namespace && namespace !== 'All Namespaces') {
    return service({
      url: '/kubernetes/ClusterRole',
      method: 'get',
      params
    })
  // }
  // return service({
  //   url: `${BaseUrl(cluster_id)}?search=true&keywords=${keywords}&page=${page}&pageSize=${pageSize}`,
  //   method: 'get',
  // })
}

export const ClusterRolesGet = (params) => {
  return service({
    url: '/kubernetes/ClusterRoleDetails',
    method: 'get',
    params
  })
}

export const ClusterRolesCreate = ( data) => {
  return service({
    url: '/kubernetes/ClusterRole',
    method: 'post',
    data
  })
}

export const ClusterRolesUpdate = ( data) => {
  return service({
    url: '/kubernetes/ClusterRole',
    method: 'put',
    data
  })
}

export const ClusterRolesDelete = (data) => {
  return service({
    url: '/kubernetes/ClusterRole',
    method: 'delete',
    data
  })
}
