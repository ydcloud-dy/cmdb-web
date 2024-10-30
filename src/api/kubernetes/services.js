import service from '@/utils/request'

const BaseUrl = (cluster_id) => {
  return `/kubernetes/proxy/${cluster_id}/api/v1/services`
}

const BaseNamespaceUrl = (cluster_id, namespace) => {
  return `/kubernetes/proxy/${cluster_id}/api/v1/namespaces/${namespace}/services`
}

// export const ServicesList = (cluster_id, page, pageSize, namespaces, keywords, labelSelector) => {
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

export const ServicesList = (params) => {
  return service({
    url: '/kubernetes/service',
    method: 'get',
    params
  })
}


export const ServicesGet = (params) => {
  return service({
    url: '/kubernetes/serviceDetails',
    method: 'get',
    params
  })
}

export const ServicesCreate = ( data) => {
  return service({
    url: '/kubernetes/service',
    method: 'post',
    data
  })
}

export const ServicesUpdate = (  data) => {
  return service({
    url: '/kubernetes/service',
    method: 'put',
    data
  })
}

export const ServicesDelete = (data) => {
  return service({
    url: '/kubernetes/service',
    method: 'delete',
    data
  })
}
