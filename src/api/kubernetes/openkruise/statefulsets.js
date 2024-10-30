import service from '@/utils/request'

const BaseUrl = (cluster_id) => {
  return `/kubernetes/proxy/${cluster_id}/apis/apps.kruise.io/v1beta1/statefulsets`
}

const BaseNamespaceUrl = (cluster_id, namespace) => {
  return `/kubernetes/proxy/${cluster_id}/apis/apps.kruise.io/v1beta1/namespaces/${namespace}/statefulsets`
}

// export const StatefulsetsList = (cluster_id, page, pageSize, namespaces, keywords, labelSelector) => {
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
export const StatefulsetsList = (params) => {
  return service({
    url: '/kubernetes/statefulset',
    method: 'get',
    params
  })
}
export const StatefulsetsGet = (params) => {
  return service({
    url: '/kubernetes/statefulsetDetails',
    method: 'get',
    params
  })
}
// export const StatefulsetsGet = (cluster_id, namespaces, name) => {
//   return service({
//     url: `${BaseNamespaceUrl(cluster_id, namespaces)}/${name}`,
//     method: 'get',
//   })
// }
export const StatefulsetsCreate = ( data) => {
  return service({
    url: '/kubernetes/statefulset',
    method: 'post',
    data
  })
}
// export const StatefulsetsCreate = (cluster_id, namespaces, data) => {
//   return service({
//     url: `${BaseNamespaceUrl(cluster_id, namespaces)}`,
//     method: 'post',
//     data
//   })
// }
export const StatefulsetsUpdate = (  data) => {
  return service({
    url: '/kubernetes/statefulset',
    method: 'put',
    data
  })
}
// export const StatefulsetsUpdate = (cluster_id, namespaces, name, data) => {
//   return service({
//     url: `${BaseNamespaceUrl(cluster_id, namespaces)}/${name}`,
//     method: 'put',
//     data
//   })
// }
export const StatefulsetsDelete = (data) => {
  return service({
    url: '/kubernetes/statefulset',
    method: 'delete',
    data
  })
}

// export const StatefulsetsDelete = (cluster_id, namespaces, name) => {
//   return service({
//     url: `${BaseNamespaceUrl(cluster_id, namespaces)}/${name}`,
//     method: 'delete',
//   })
// }
