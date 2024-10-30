import service from '@/utils/request'

const BaseUrl = (cluster_id) => {
  return `/kubernetes/proxy/${cluster_id}/apis/autoscaling/v2beta2/horizontalpodautoscalers`
}

const BaseNamespaceUrl = (cluster_id, namespace) => {
  return `/kubernetes/proxy/${cluster_id}/apis/autoscaling/v2beta2/namespaces/${namespace}/horizontalpodautoscalers`
}

// export const HorizontalPodautoscalersList = (cluster_id, page, pageSize, namespace, keywords, labelSelector) => {
//   if (namespace && namespace !== 'All Namespaces') {
//     return service({
//       url: `${BaseNamespaceUrl(cluster_id)}?search=true&keywords=${keywords}&page=${page}&pageSize=${pageSize}&labelSelector=${labelSelector}&namespace=${namespace}`,
//       method: 'get',
//     })
//   }
//   return service({
//     url: `${BaseUrl(cluster_id)}?search=true&keywords=${keywords}&page=${page}&pageSize=${pageSize}`,
//     method: 'get',
//   })
// }
export const HorizontalPodautoscalersList = (params) => {
  // if (namespace && namespace !== 'All Namespaces') {
  //   return service({
  //     url: `${BaseNamespaceUrl(cluster_id)}?search=true&keywords=${keywords}&page=${page}&pageSize=${pageSize}&labelSelector=${labelSelector}&namespace=${namespace}`,
  //     method: 'get',
  //   })
  // }
  return service({
    url: '/kubernetes/horizontalPod',
    method: 'get',
    params
  })
}
export const HorizontalPodautoscalersGet = (params) => {
  return service({
    url: '/kubernetes/horizontalPodDetail',
    method: 'get',
    params
  })
}

export const HorizontalPodautoscalersCreate = ( data) => {
  return service({
    url: '/kubernetes/horizontalPod',
    method: 'post',
    data
  })
}

export const HorizontalPodautoscalersUpdate = (  data) => {
  return service({
    url: '/kubernetes/horizontalPod',
    method: 'put',
    data
  })
}

export const HorizontalPodautoscalersDelete = (data) => {
  return service({
    url: '/kubernetes/horizontalPod',
    method: 'delete',
    data

  })
}
