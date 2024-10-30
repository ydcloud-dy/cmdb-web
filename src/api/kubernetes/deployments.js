import service from '@/utils/request'
import namespace from "@/components/kubernetes/namespace/index.vue";

const BaseUrl = (cluster_id) => {
  return `/kubernetes/proxy/${cluster_id}/apis/apps/v1/deployments`
}

const BaseNamespaceUrl = (cluster_id, namespace) => {
  return `/kubernetes/proxy/${cluster_id}/apis/apps/v1/namespaces/${namespace}/deployments`
}

// export const DeploymentsList = (cluster_id, page, pageSize, namespaces, keywords) => {
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
export const DeploymentsList = (params) => {
  return service({
    url: '/kubernetes/deployment',
    method: 'get',
    params
  })
}
export const DeploymentsGet = (params) => {
  return service({
    url: '/kubernetes/deployment/detail',
    method: 'get',
    params
  })
}

export const DeploymentsCreate = ( data) => {
  return service({
    url: '/kubernetes/deployment',
    method: 'post',
    data
  })
}

export const DeploymentsUpdate = (data) => {
  return service({
    url: `/kubernetes/deployment`,
    method: 'put',
    data
  })
}

export const DeploymentsPatch = ( data) => {
  return service({
    url: '/kubernetes/deployment',
    method: 'patch',
    data
  })
}

export const DeploymentsDelete = (data) => {
  return service({
    url: '/kubernetes/deployment',
    method: 'delete',
    data
  })
}
