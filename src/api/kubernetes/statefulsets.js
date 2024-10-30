import service from '@/utils/request'

const BaseUrl = (cluster_id) => {
  return `/kubernetes/proxy/${cluster_id}/apis/apps/v1/statefulsets`
}

const BaseNamespaceUrl = (cluster_id, namespace) => {
  return `/kubernetes/proxy/${cluster_id}/apis/apps/v1/namespaces/${namespace}/statefulsets`
}


// export const StatefulSetsList = (cluster_id, page, pageSize, namespaces, keywords) => {
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
export const StatefulSetsList = (params) => {
  return service({
    url: '/kubernetes/statefulset',
    method: 'get',
    params
  })
}

export const StatefulSetsGet = (params) => {
  return service({
    url: '/kubernetes/statefulsetDetails',
    method: 'get',
    params
  })
}

export const StatefulSetsCreate = ( data) => {
  return service({
    url: '/kubernetes/statefulset',
    method: 'post',
    data
  })
}

export const StatefulSetsUpdate = (  data) => {
  return service({
    url: '/kubernetes/statefulset',
    method: 'put',
    data
  })
}

export const StatefulSetsDelete = (data) => {
  return service({
    url: '/kubernetes/statefulset',
    method: 'delete',
    data
  })
}
