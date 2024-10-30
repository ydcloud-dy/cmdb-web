import service from '@/utils/request'

const BaseUrl = (cluster_id) => {
  return `/kubernetes/proxy/${cluster_id}/api/v1/namespaces`
}

export const GetNamespaceList = (params) => {
  return service({
    url: '/kubernetes/namespace',
    method: 'get',
    params
  })
}

export const NamespaceCreate = ( data) => {
  return service({
    url: '/kubernetes/namespace',
    method: 'post',
    data
  })
}

export const NamespaceUpdate = ( data) => {
  return service({
    url: '/kubernetes/namespace',
    method: 'put',
    data
  })
}

export const NamespaceDelete = (data) => {
  return service({
    url: '/kubernetes/namespace',
    method: 'delete',
    data

  })
}

export const getClusterUserNamespace = (data) => {
  return service({
    url: '/kubernetes/getClusterUserNamespace',
    method: 'post',
    data
  })
}

export const getClusterListNamespace = (data) => {
  return service({
    url: `/kubernetes/clusters/getClusterListNamespace`,
    method: 'post',
    data
  })
}
