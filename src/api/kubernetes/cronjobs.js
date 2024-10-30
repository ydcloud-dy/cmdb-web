import service from '@/utils/request'

const BaseUrl = (cluster_id) => {
  return `/kubernetes/proxy/${cluster_id}/apis/batch/v1beta1/cronjobs`
}

const BaseNamespaceUrl = (cluster_id, namespace) => {
  return `/kubernetes/proxy/${cluster_id}/apis/batch/v1beta1/namespaces/${namespace}/cronjobs`
}


// export const CronjobList = (cluster_id, page, pageSize, namespaces, keywords) => {
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
export const CronjobList = (params) => {
  return service({
    url: '/kubernetes/cronJob',
    method: 'get',
    params
  })
}
export const CronjobGet = (params) => {
  return service({
    url: '/kubernetes/cronJobDetails',
    method: 'get',
    params
  })
}

export const CronjobCreate = ( data) => {
  return service({
    url: '/kubernetes/cronJob',
    method: 'post',
    data
  })
}

export const CronjobUpdate = ( data) => {
  return service({
    url: '/kubernetes/cronJob',
    method: 'put',
    data
  })
}

export const CronjobDelete = (data) => {
  return service({
    url: '/kubernetes/cronJob',
    method: 'delete',
    data
  })
}
