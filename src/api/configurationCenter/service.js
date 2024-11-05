import service from '@/utils/request'


export const createService = (data) => {
    return service({
        url: '/configCenter/service',
        method: 'post',
        data,
        loadingOption: {
            target: '.right-container'
        }
    })
}

export const deleteService = (id) => {
    return service({
        url: `/configCenter/service/${id}`,
        method: 'delete',
        loadingOption: {
            target: '.right-container'
        }
    })
}

export const updateService = (data) => {
    return service({
        url: '/configCenter/service',
        method: 'put',
        data
    })
}


export const describeService = (id) => {
    return service({
        url: `/configCenter/service/${id}`,
        method: 'get',
    })
}


export const getServiceList = (params) => {
    return service({
        url: '/configCenter/service',
        method: 'get',
        params
    })
}
export const deleteServiceByIds = (data) => {
    return service({
        url: '/configCenter/service',
        method: 'delete',
        data,
        loadingOption: {
            target: '.right-container'
        }
    })
}
export const TestService = (data) => {
    return service({
        url: '/configCenter/service/verify',
        method: 'post',
        data,
        loadingOption: {
            target: '.right-container'
        }
    })
}
