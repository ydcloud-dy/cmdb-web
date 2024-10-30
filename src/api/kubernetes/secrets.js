import service from '@/utils/request'

const BaseUrl = (cluster_id) => {
  return `/kubernetes/proxy/${cluster_id}/api/v1/secrets`
}

const BaseNamespaceUrl = (cluster_id, namespace) => {
  return `/kubernetes/proxy/${cluster_id}/api/v1/namespaces/${namespace}/secrets`
}
export const SecretsList = (params) => {
  return service({
    url: '/kubernetes/secret',
    method: 'get',
    params
  })
}

// export const SecretsList = (cluster_id, page, pageSize, namespaces, keywords, labelSelector) => {
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

export const SecretsGet = (params) => {
  return service({
    url: '/kubernetes/secretDetails',
    method: 'get',
    params
  })
}

export const SecretsCreate = ( data) => {
  return service({
    url: '/kubernetes/secret',
    method: 'post',
    data
  })
}

export const SecretsUpdate = (data) => {
  return service({
    url: '/kubernetes/secret',
    method: 'put',
    data
  })
}

export const SecretsDelete = (data) => {
  return service({
    url: '/kubernetes/secret',
    method: 'delete',
    data
  })
}
