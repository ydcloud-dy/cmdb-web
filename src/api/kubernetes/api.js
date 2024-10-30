import service from '@/utils/request'
const BaseUrl = (cluster_id) => {
    return `/kubernetes/proxy/${cluster_id}/apis`
}
// searchInfo.value.cluster_id, 'networking.k8s.io', 'v1', 'Ingress'
export const listResourceApi = (params) => {
    return service({
        url: '/kubernetes/api-resources',
        method: 'get',
        params
    })
}
