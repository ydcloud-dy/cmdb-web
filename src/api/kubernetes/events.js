import service from '@/utils/request'

const BaseUrl = (cluster_id, namespaces) => {
    return `/kubernetes/proxy/${cluster_id}/api/v1/namespaces/${namespaces}/events`
}

// export const EventsList = (cluster_id, fieldSelector, namespaces) => {
//     return service({
//         url: `${BaseUrl(cluster_id, namespaces)}?search=true&fieldSelector=involvedObject.name=${fieldSelector}`,
//         method: 'get',
//     })
// }
// export const EventsList = (params) => {
//     return service({
//         url: `${BaseUrl(cluster_id, namespaces)}?search=true&fieldSelector=involvedObject.name=${fieldSelector}`,
//         method: 'get',
//         params
//     })
// }
export const EventsList = (params) => {
    return service({
        url: '/kubernetes/events',
        method: 'get',
        params
    })
}
