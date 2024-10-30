import service from '@/utils/request'

const BaseUrl = (cluster_id) => {
  return `/kubernetes/proxy/${cluster_id}/apis/apps.kruise.io/v1alpha1/daemonsets`
}

const BaseNamespaceUrl = (cluster_id, namespace) => {
  return `/kubernetes/proxy/${cluster_id}/apis/apps.kruise.io/v1alpha1/namespaces/${namespace}/daemonsets`
}

// export const DaemonsetsList = (cluster_id, page, pageSize, namespaces, keywords, labelSelector) => {
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
export const DaemonsetsList = (params) => {
  return service({
    url: '/kubernetes/daemonSet',
    method: 'get',
    params
  })
}
// export const DaemonsetsGet = (cluster_id, namespaces, name) => {
//   return service({
//     url: `${BaseNamespaceUrl(cluster_id, namespaces)}/${name}`,
//     method: 'get',
//   })
// }

export const DaemonsetsCreate = (cluster_id, namespace, data) => {
  return service({
    url: `${BaseNamespaceUrl(cluster_id, namespace)}`,
    method: 'post',
    data
  })
}

export const DaemonsetsUpdate = (cluster_id, namespace, name,  data) => {
  return service({
    url: `${BaseNamespaceUrl(cluster_id, namespace)}/${name}`,
    method: 'put',
    data
  })
}

export const DaemonsetsDelete = (cluster_id, namespace, name) => {
  return service({
    url: `${BaseNamespaceUrl(cluster_id, namespace)}/${name}`,
    method: 'delete',
  })
}
