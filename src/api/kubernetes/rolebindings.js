import service from '@/utils/request'

const BaseUrl = (cluster_id) => {
  return `/kubernetes/proxy/${cluster_id}/apis/rbac.authorization.k8s.io/v1/rolebindings`
}

const BaseNamespaceUrl = (cluster_id, namespace) => {
  return `/kubernetes/proxy/${cluster_id}/apis/rbac.authorization.k8s.io/v1/namespaces/${namespace}/rolebindings`
}

export const RoleBindingsList = (params) => {
  // if (namespace && namespace !== 'All Namespaces') {
    return service({
      url: '/kubernetes/RoleBinding',
      method: 'get',
      params
    })
  // }
  // return service({
  //   url: `${BaseUrl(cluster_id)}?search=true&keywords=${keywords}&page=${page}&pageSize=${pageSize}`,
  //   method: 'get',
  // })
}

export const RoleBindingsGet = (params) => {
  return service({
    url: '/kubernetes/RoleBindingDetails',
    method: 'get',
    params
  })
}

export const RoleBindingsCreate = ( data) => {
  return service({
    url: '/kubernetes/RoleBinding',
    method: 'post',
    data
  })
}

export const RoleBindingsUpdate = ( data) => {
  return service({
    url: '/kubernetes/RoleBinding',
    method: 'put',
    data
  })
}

export const RoleBindingsDelete = (data) => {
  return service({
    url: '/kubernetes/RoleBinding',
    method: 'delete',
    data
  })
}
