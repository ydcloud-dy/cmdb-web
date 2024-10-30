import service from '@/utils/request'

const BaseUrl = (cluster_id) => {
  return `/kubernetes/proxy/${cluster_id}/api/v1/resourcequotas`
}

const BaseNamespaceUrl = (cluster_id, namespace) => {
  return `/kubernetes/proxy/${cluster_id}/api/v1/namespaces/${namespace}/resourcequotas`
}

// export const ResourceQuotasList = (cluster_id, page, pageSize, namespace, keywords, labelSelector) => {
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
export const ResourceQuotasList = (params) => {
  // if (namespace && namespace !== 'All Namespaces') {
  //   return service({
  //     url: `${BaseNamespaceUrl(cluster_id, namespace)}?search=true&keywords=${keywords}&page=${page}&pageSize=${pageSize}&labelSelector=${labelSelector}`,
  //     method: 'get',
  //   })
  // }
  return service({
    url: '/kubernetes/ResourceQuotas',
    method: 'get',
    params
  })
}

export const ResourceQuotasGet = (params) => {
  return service({
    url: '/kubernetes/ResourceQuotaDetails',
    method: 'get',
    params
  })
}

export const ResourceQuotasCreate = ( data) => {
  return service({
    url: '/kubernetes/ResourceQuotas',
    method: 'post',
    data
  })
}

export const ResourceQuotasUpdate = ( data) => {
  return service({
    url: '/kubernetes/ResourceQuotas',
    method: 'put',
    data
  })
}

export const ResourceQuotasDelete = (data) => {
  return service({
    url: '/kubernetes/ResourceQuotas',
    method: 'delete',
    data
  })
}
