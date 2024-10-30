import service from '@/utils/request'

const BaseUrl = (cluster_id) => {
  return `/kubernetes/proxy/${cluster_id}/api/v1/limitranges`
}

const BaseNamespaceUrl = (cluster_id, namespace) => {
  return `/kubernetes/proxy/${cluster_id}/api/v1/namespaces/${namespace}/limitranges`
}

// export const LimitRangesList = (cluster_id, page, pageSize, namespace, keywords, labelSelector) => {
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
export const LimitRangesList = (params) => {
  // if (namespace && namespace !== 'All Namespaces') {
  //   return service({
  //     url: `${BaseNamespaceUrl(cluster_id, namespace)}?search=true&keywords=${keywords}&page=${page}&pageSize=${pageSize}&labelSelector=${labelSelector}`,
  //     method: 'get',
  //   })
  // }
  return service({
    url: '/kubernetes/limitRange',
    method: 'get',
    params
  })
}
export const LimitRangesGet = (params) => {
  return service({
    url: '/kubernetes/limitRangeDetails',
    method: 'get',
    params
  })
}

export const LimitRangesCreate = ( data) => {
  return service({
    url: '/kubernetes/limitRange',
    method: 'post',
    data
  })
}

export const LimitRangesUpdate = ( data) => {
  return service({
    url: '/kubernetes/limitRange',
    method: 'put',
    data
  })
}

export const LimitRangesDelete = (data) => {
  return service({
    url: '/kubernetes/limitRange',
    method: 'delete',
    data

  })
}
