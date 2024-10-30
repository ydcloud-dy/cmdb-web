import service from '@/utils/request'

const BaseUrl = (cluster_id) => {
  return `/kubernetes/proxy/${cluster_id}/apis/policy/v1beta1/poddisruptionbudgets`
}

const BaseNamespaceUrl = (cluster_id, namespace) => {
  return `/kubernetes/proxy/${cluster_id}/apis/policy/v1beta1/namespaces/${namespace}/poddisruptionbudgets`
}

// export const PodDisruptionbudgetsList = (cluster_id, page, pageSize, namespace, keywords, labelSelector) => {
//   if (namespace && namespace !== 'All Namespaces') {
//     return service({
//       url: `${BaseNamespaceUrl(cluster_id)}?search=true&keywords=${keywords}&page=${page}&pageSize=${pageSize}&labelSelector=${labelSelector}&namespace=${namespace}`,
//       method: 'get',
//     })
//   }
//   return service({
//     url: `${BaseUrl(cluster_id)}?search=true&keywords=${keywords}&page=${page}&pageSize=${pageSize}`,
//     method: 'get',
//   })
// }
export const PodDisruptionbudgetsList = (params) => {
  // if (namespace && namespace !== 'All Namespaces') {
  //   return service({
  //     url: `${BaseNamespaceUrl(cluster_id)}?search=true&keywords=${keywords}&page=${page}&pageSize=${pageSize}&labelSelector=${labelSelector}&namespace=${namespace}`,
  //     method: 'get',
  //   })
  // }
  return service({
    url: '/kubernetes/Poddisruptionbudget',
    method: 'get',
    params
  })
}
export const PodDisruptionbudgetsGet = (params) => {
  return service({
    url: '/kubernetes/PoddisruptionbudgetDetails',
    method: 'get',
    params
  })
}

export const PodDisruptionbudgetsCreate = ( data) => {
  return service({
    url: '/kubernetes/Poddisruptionbudget',
    method: 'post',
    data
  })
}

// export const PodDisruptionbudgetsUpdate = (cluster_id, namespace, name,  data) => {
//   return service({
//     url: `${BaseNamespaceUrl(cluster_id, namespace)}/${name}`,
//     method: 'put',
//     data
//   })
// }
export const PodDisruptionbudgetsUpdate = ( data) => {
  return service({
    url: '/kubernetes/Poddisruptionbudget',
    method: 'put',
    data
  })
}
// export const PodDisruptionbudgetsDelete = (cluster_id, namespace, name) => {
//   return service({
//     url: `${BaseNamespaceUrl(cluster_id, namespace)}/${name}`,
//     method: 'delete',
//   })
// }
export const PodDisruptionbudgetsDelete = (data) => {
  return service({
    url: '/kubernetes/Poddisruptionbudget',
    method: 'delete',
    data
  })
}
