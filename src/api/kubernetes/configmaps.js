import service from '@/utils/request'

const BaseUrl = (cluster_id) => {
  return `/kubernetes/proxy/${cluster_id}/api/v1/configmaps`
}

const BaseNamespaceUrl = (cluster_id, namespace) => {
  return `/kubernetes/proxy/${cluster_id}/api/v1/namespaces/${namespace}/configmaps`
}

// export const ConfigmapsList = (cluster_id, page, pageSize, namespaces, keywords, labelSelector) => {
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

export const ConfigmapsList = (params) => {
  return service({
    url: '/kubernetes/configMap',
    method: 'get',
    params
  })
}

export const ConfigmapsGet = (params) => {
  return service({
    url: '/kubernetes/configMapDetails',
    method: 'get',
    params
  })
}

export const ConfigmapsCreate = ( data) => {
  return service({
    url: '/kubernetes/configMap',
    method: 'post',
    data
  })
}

export const ConfigmapsUpdate = ( data) => {
  return service({
    url: '/kubernetes/configMap',
    method: 'put',
    data
  })
}

export const ConfigmapsDelete = (data) => {
  return service({
    url: '/kubernetes/configMap',
    method: 'delete',
    data
  })
}
