import service from '@/utils/request'

const BaseUrl = (cluster_id) => {
  return `/kubernetes/proxy/${cluster_id}/apis/batch/v1/jobs`
}

const BaseNamespaceUrl = (cluster_id, namespace) => {
  return `/kubernetes/proxy/${cluster_id}/apis/batch/v1/namespaces/${namespace}/jobs`
}

// export const JobsList = (cluster_id, page, pageSize, namespaces, keywords) => {
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
export const JobsList = (params) => {
  return service({
    url: '/kubernetes/job',
    method: 'get',
    params
  })
}

export const JobsGet = (params) => {
  return service({
    url: '/kubernetes/jobDetails',
    method: 'get',
    params
  })
}

export const JobsCreate = ( data) => {
  return service({
    url: '/kubernetes/job',
    method: 'post',
    data
  })
}

export const JobsUpdate = (  data) => {
  return service({
    url: '/kubernetes/job',
    method: 'put',
    data
  })
}

export const JobsDelete = (data) => {
  return service({
    url: '/kubernetes/job',
    method: 'delete',
    data
  })
}
