import service from '@/utils/request'

const BaseUrl = (cluster_id) => {
  return `/kubernetes/proxy/${cluster_id}/api/v1/endpoints`
}

const BaseNamespaceUrl = (cluster_id, namespace) => {
  return `/kubernetes/proxy/${cluster_id}/api/v1/namespaces/${namespace}/endpoints`
}

// export const EndpointsList = (cluster_id, page, pageSize, namespace, keywords, labelSelector) => {
//   if (namespace && namespace !== 'All Namespaces') {
//     return service({
//       url: `${BaseNamespaceUrl(cluster_id, namespace)}?search=true&keywords=${keywords}&page=${page}&pageSize=${pageSize}&labelSelector=${labelSelector}`,
//       method: 'get',
//     })
//   }
//   return service({
//     url: `${BaseUrl(cluster_id)}?search=true&keywords=${keywords}&page=${page}&pageSize=${pageSize}`,
//     method: 'get',
//   })
// }
export const EndpointsList = (params) => {
  return service({
    url: '/kubernetes/endpoint',
    method: 'get',
    params
  })
}
export const EndpointsGet = (params) => {
  return service({
    url: '/kubernetes/endpointDetails',
    method: 'get',
    params
  })
}
// export const EndpointsGet = (cluster_id, namespace, name) => {
//   return service({
//     url: `${BaseNamespaceUrl(cluster_id, namespace)}/${name}`,
//     method: 'get',
//   })
// }

// export const EndpointsCreate = (cluster_id, namespace, data) => {
//   return service({
//     url: `${BaseNamespaceUrl(cluster_id, namespace)}`,
//     method: 'post',
//     data
//   })
// }
export const EndpointsCreate = ( data) => {
  return service({
    url: '/kubernetes/endpoint',
    method: 'post',
    data
  })
}
export const EndpointsUpdate = (cluster_id, namespace, name, data) => {
  return service({
    url: `${BaseNamespaceUrl(cluster_id, namespace)}/${name}`,
    method: 'put',
    data
  })
}

export const EndpointsDelete = (cluster_id, namespace, name) => {
  return service({
    url: `${BaseNamespaceUrl(cluster_id, namespace)}/${name}`,
    method: 'delete',
  })
}
