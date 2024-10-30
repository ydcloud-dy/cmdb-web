import service from '@/utils/request'
const BaseUrl = (cluster_id, namespace) => {
  return `/kubernetes/proxy/${cluster_id}/apis/apps/v1/namespaces/${namespace}/replicasets`
}

// export function ReplicaSetsList(cluster_id, namespaces, selector) {
//   return service({
//     url: `${BaseUrl(cluster_id, namespaces)}?search=true&labelSelector=${selector}+&namespaces=${namespaces}`,
//     method: 'get',
//   })
// }

export const ReplicaSetsList = (params) => {
  return service({
    url: '/kubernetes/replicaSet',
    method: 'get',
    params
  })
}
