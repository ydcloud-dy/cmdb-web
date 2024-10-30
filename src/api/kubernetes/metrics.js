import service from '@/utils/request'

const BaseUrl = (cluster_id) => {
    return `/kubernetes/proxy/${cluster_id}`
}

// export const NodeMetricsList = (cluster_id, data) => {
//     return service({
//         url: `${BaseUrl(cluster_id)}/apis/metrics.k8s.io/v1beta1/nodes?search=true`,
//         method: 'get',
//         data
//     })
// }

export const NodeMetricsList = (params) => {
    return service({
        url: '/kubernetes/nodes/metrics',
        method: 'get',
        params
    })
}
export const PodsMetricsList = (params) => {
    return service({
        url: '/kubernetes/pods/metrics',
        method: 'get',
        params
    })
}

export const GetMetrics = (params) => {
    return service({
        url: '/kubernetes/pods/metrics',
        method: 'get',
        params
    })
}
