import service from '@/utils/request'

const BaseUrl = (cluster_id) => {
  return `/kubernetes/proxy/${cluster_id}/api/v1/serviceaccounts`
}

const BaseNamespaceUrl = (cluster_id, namespace) => {
  return `/kubernetes/proxy/${cluster_id}/api/v1/namespaces/${namespace}/serviceaccounts`
}

// export const ServiceAccountsList = (cluster_id, page, pageSize, namespaces, keywords, labelSelector) => {
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
export const ServiceAccountsList = (params) => {
  return service({
    url: '/kubernetes/serviceAccount',
    method: 'get',
    params
  })
}

export const ServiceAccountsGet = (params) => {
  return service({
    url: '/kubernetes/serviceAccountDetails',
    method: 'get',
    params
  })
}

export const ServiceAccountsCreate = (data) => {
  return service({
    url: '/kubernetes/serviceAccount',
    method: 'post',
    data
  })
}

export const ServiceAccountsUpdate = ( data) => {
  return service({
    url: '/kubernetes/serviceAccount',
    method: 'put',
    data
  })
}

export const ServiceAccountsDelete = (data) => {
  return service({
    url: '/kubernetes/serviceAccount',
    method: 'delete',
    data
  })
}
