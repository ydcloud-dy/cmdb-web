import service from '@/utils/request'

const BaseUrl = (cluster_id) => {
  return `/kubernetes/proxy/${cluster_id}/apis/storage.k8s.io/v1/storageclasses`
}

const BaseNamespaceUrl = (cluster_id) => {
  return `/kubernetes/proxy/${cluster_id}/apis/storage.k8s.io/v1/storageclasses`
}

export const StorageClassList = (params) => {
  // if (namespace && namespace !== 'All Namespaces') {
  //   return service({
  //     url: `${BaseNamespaceUrl(cluster_id, namespace)}?search=true&keywords=${keywords}&page=${page}&pageSize=${pageSize}&labelSelector=${labelSelector}`,
  //     method: 'get',
  //   })
  // }
  return service({
    url: '/kubernetes/storageClass',
    method: 'get',
    params
  })
}

export const StorageClassGet = (params) => {
  return service({
    url: '/kubernetes/storageClassDetails',
    method: 'get',
    params
  })
}

export const StorageClassCreate = ( data) => {
  return service({
    url: '/kubernetes/storageClass',
    method: 'post',
    data
  })
}

export const StorageClassUpdate = ( data) => {
  return service({
    url: '/kubernetes/storageClass',
    method: 'put',
    data
  })
}

export const StorageClassDelete = (data) => {
  return service({
    url: '/kubernetes/storageClass',
    method: 'delete',
    data
  })
}
