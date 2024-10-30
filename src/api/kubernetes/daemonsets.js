import service from '@/utils/request'

const BaseUrl = (cluster_id) => {
  return `/kubernetes/proxy/${cluster_id}/apis/apps/v1/daemonsets`
}

const BaseNamespaceUrl = (cluster_id, namespace) => {
  return `/kubernetes/proxy/${cluster_id}/apis/apps/v1/namespaces/${namespace}/daemonsets`
}

export const DaemonsetsList = (params) => {
  return service({
    url: '/kubernetes/daemonset',
    method: 'get',
    params
  })
}
// export const DaemonsetsList = (cluster_id, page, pageSize, namespaces, keywords) => {
//   // if (namespaces && namespaces !== 'All Namespaces') {
//   //   return service({
//   //     url: `${BaseNamespaceUrl(cluster_id, namespaces)}?search=true&keywords=${keywords}&page=${page}&pageSize=${pageSize}`,
//   //     method: 'get',
//   //   })
//   // }
//   // return service({
//   //   url: `${BaseUrl(cluster_id)}?search=true&keywords=${keywords}&page=${page}&pageSize=${pageSize}`,
//   //   method: 'get',
//   // })
// }
// export const DaemonsetsList = (params) => {
//   return service({
//     url: '/kubernetes/DaemonsetsList',
//     method: 'get',
//     params
//   })
// }

export const DaemonsetsGet = (params) => {
  return service({
    url: '/kubernetes/daemonsetDetails',
    method: 'get',
    params
  })
}

export const DaemonsetsCreate = ( data) => {
  return service({
    url: '/kubernetes/daemonset',
    method: 'post',
    data
  })
}

export const DaemonsetsUpdate = (data) => {
  return service({
    url: '/kubernetes/daemonset',
    method: 'put',
    data
  })
}

export const DaemonsetsDelete = (data) => {
  return service({
    url: '/kubernetes/daemonset',
    method: 'delete',
    data
  })
}
