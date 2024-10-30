import service from '@/utils/request'

const BaseUrl = (cluster_id) => {
  return `/kubernetes/proxy/${cluster_id}/apis/rbac.authorization.k8s.io/v1/roles`
}

const BaseNamespaceUrl = (cluster_id, namespace) => {
  return `/kubernetes/proxy/${cluster_id}/apis/rbac.authorization.k8s.io/v1/namespaces/${namespace}/roles`
}

export const RolesList = (params) => {
  // if (namespace && namespace !== 'All Namespaces') {
    return service({
      url: '/kubernetes/Role',
      method: 'get',
      params
    })
  // }
  // return service({
  //   url: `${BaseUrl(cluster_id)}?search=true&keywords=${keywords}&page=${page}&pageSize=${pageSize}`,
  //   method: 'get',
  // })
}

export const RolesGet = (params) => {
  return service({
    url: '/kubernetes/RoleDetails',
    method: 'get',
    params
  })
}

export const RolesCreate = (data) => {
  return service({
    url: '/kubernetes/Role',
    method: 'post',
    data
  })
}

export const RolesUpdate = ( data) => {
  return service({
    url: '/kubernetes/Role',
    method: 'put',
    data
  })
}

export const RolesDelete = (data) => {
  return service({
    url: '/kubernetes/Role',
    method: 'delete',
    data
  })
}
