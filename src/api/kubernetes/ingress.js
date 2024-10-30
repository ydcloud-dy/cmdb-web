import service from '@/utils/request'

const BaseUrl = (cluster_id) => {
  return `/kubernetes/proxy/${cluster_id}/apis/networking.k8s.io/v1/ingresses`
}

const BaseNamespaceUrl = (cluster_id, namespace) => {
  return `/kubernetes/proxy/${cluster_id}/apis/networking.k8s.io/v1/namespaces/${namespace}/ingresses`
}

// export const IngressesList = (cluster_id, page, pageSize, namespaces, keywords, labelSelector, fieldSelector) => {
//   if (namespaces && namespaces !== 'All Namespaces') {
//     return service({
//       url: `${BaseNamespaceUrl(cluster_id, namespaces)}?search=true&keywords=${keywords}&page=${page}&pageSize=${pageSize}&labelSelector=${labelSelector}&fieldSelector=${fieldSelector}`,
//       method: 'get',
//     })
//   }
//   return service({
//     url: `${BaseUrl(cluster_id)}?search=true&keywords=${keywords}&page=${page}&pageSize=${pageSize}&labelSelector=${labelSelector}&fieldSelector=${fieldSelector}`,
//     method: 'get',
//   })
// }
export const IngressesList = (params) => {
  return service({
    url: '/kubernetes/ingress',
    method: 'get',
    params
  })
}
export const IngressesGet = (params) => {
  return service({
    url: '/kubernetes/ingressDetails',
    method: 'get',
    params
  })
}

export const IngressesCreate = ( data) => {
  return service({
    url: '/kubernetes/ingress',
    method: 'post',
    data
  })
}

export const IngressesUpdate = ( data) => {
  return service({
    url: '/kubernetes/ingress',
    method: 'put',
    data
  })
}

export const IngressesDelete = (data) => {
  return service({
    url: '/kubernetes/ingress',
    method: 'delete',
    data
  })
}
