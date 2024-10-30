import service from '@/utils/request'

const BaseUrl = (cluster_id) => {
  return `/kubernetes/proxy/${cluster_id}/api/v1/persistentvolumes`
}

const BaseNamespaceUrl = (cluster_id, namespace) => {
  return `/kubernetes/proxy/${cluster_id}/api/v1/persistentvolumes`
}

export const PersistentVolumesList = (params) => {
  // if (namespace && namespace !== 'All Namespaces') {
    return service({
      url: '/kubernetes/pv',
      method: 'get',
      params
    })
  // }
  // return service({
  //   url: `${BaseUrl(cluster_id)}?search=true&keywords=${keywords}&page=${page}&pageSize=${pageSize}`,
  //   method: 'get',
  // })
}

export const PersistentVolumesGet = (params) => {
  return service({
    url: '/kubernetes/pvDetails',
    method: 'get',
    params
  })
}

export const PersistentVolumesCreate = ( data) => {
  return service({
    url: '/kubernetes/pv',
    method: 'post',
    data
  })
}

export const PersistentVolumesUpdate = ( data) => {
  return service({
    url: '/kubernetes/pv',
    method: 'put',
    data
  })
}

export const PersistentVolumesDelete = (data) => {
  return service({
    url: '/kubernetes/pv',
    method: 'delete',
    data

  })
}
