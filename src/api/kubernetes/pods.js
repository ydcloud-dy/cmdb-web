import service from '@/utils/request'

const BaseUrl = (cluster_id) => {
    return `/kubernetes/proxy/${cluster_id}/api/v1/pods`
}

const BaseNamespaceUrl = (cluster_id, namespace) => {
    return `/kubernetes/proxy/${cluster_id}/api/v1/namespaces/${namespace}/pods`
}

const EvictionUrl = (cluster_id, namespace, name) => {
    return `/kubernetes/proxy/${cluster_id}/api/v1/namespaces/${namespace}/pods/${name}/eviction`
}
export const GetPodsList = (params) => {
    return service({
        url: '/kubernetes/pods',
        method: 'get',
        params
    })
}
export const DeleteFile = (data) => {
    return service({
        url: '/kubernetes/pods/deleteFiles',
        method: 'post',
        data
    })
}
// export const PodsList = (cluster_id, page, pageSize, namespaces, keywords, labelSelector, fieldSelector) => {
//     if (namespaces && namespaces !== 'All Namespaces') {
//         return service({
//             url: `${BaseNamespaceUrl(cluster_id, namespaces)}?search=true&keywords=${keywords}&page=${page}&pageSize=${pageSize}&labelSelector=${labelSelector}&fieldSelector=${fieldSelector}`,
//             method: 'get',
//         })
//     }
//     return service({
//         url: `${BaseUrl(cluster_id)}?search=true&keywords=${keywords}&page=${page}&pageSize=${pageSize}&labelSelector=${labelSelector}&fieldSelector=${fieldSelector}`,
//         method: 'get',
//     })
// }

// export const PodsGet = (par) => {
//     return service({
//         url: '/kubernetes/pods',
//         method: 'get',
//     })
// }

export const DescribePodInfo = (params) => {
    return service({
        url: '/kubernetes/podDetails',
        method: 'get',
        params
    })
}
export const PodsCreate = ( data) => {
    return service({
        url: '/kubernetes/pods',
        method: 'post',
        data
    })
}

export const PodsUpdate = ( data) => {
    return service({
        url: '/kubernetes/pods',
        method: 'put',
        data
    })
}

export const PodsDelete = (data) => {
    return service({
        url: '/kubernetes/pods',
        method: 'delete',
        data
    })
}

// export const Podseviction = (cluster_id, name, namespaces, data) => {
//     return service({
//         url: `${EvictionUrl(cluster_id, namespaces, name)}`,
//         method: 'post',
//         data
//     })
// }
export const PodsEviction = (data) => {
    return service({
        url: '/kubernetes/nodes/EvictAllPod',
        method: 'post',
        data
    })
}


export const PodsListFiles = (data) => {
    return service({
        url: '/kubernetes/pods/listFiles',
        method: 'post',
        data
    })
}

