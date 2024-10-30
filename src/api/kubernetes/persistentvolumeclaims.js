import service from '@/utils/request'

const BaseUrl = (cluster_id) => {
  return `/kubernetes/proxy/${cluster_id}/api/v1/persistentvolumeclaims`
}

const BaseNamespaceUrl = (cluster_id, namespace) => {
  return `/kubernetes/proxy/${cluster_id}/api/v1/namespaces/${namespace}/persistentvolumeclaims`
}
export const PersistentVolumeClaimsList = (params) => {
  return service({
    url: '/kubernetes/pvc',
    method: 'get',
    params
  })
}
// export const PersistentVolumeClaimsList = (cluster_id, page, pageSize, namespaces, keywords, labelSelector) => {
//   if (namespaces && namespaces !== 'All Namespaces') {
//     return service({
//       url: `${BaseNamespaceUrl(cluster_id, namespaces)}?search=true&keywords=${keywords}&page=${page}&pageSize=${pageSize}&labelSelector=${labelSelector}`,
//       method: 'get',
//     })
//   }
//   return service({
//     url: `${BaseUrl(cluster_id)}?search=true&keywords=${keywords}&page=${page}&pageSize=${pageSize}`,
//     method: 'get',
//   })
// }

export const PersistentVolumeClaimsGet = (params) => {
  return service({
    url: '/kubernetes/pvcDetails',
    method: 'get',
    params
  })
}

export const PersistentVolumeClaimsCreate = ( data) => {
  return service({
    url: '/kubernetes/pvc',
    method: 'post',
    data
  })
}

export const PersistentVolumeClaimsUpdate = ( data) => {
  return service({
    url: '/kubernetes/pvc',
    method: 'put',
    data
  })
}

export const PersistentVolumeClaimsDelete = (data) => {
  return service({
    url: '/kubernetes/pvc',
    method: 'delete',
    data
  })
}
