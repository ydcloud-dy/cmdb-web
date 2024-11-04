import service from '@/utils/request'


export const createService = (data) => {
    return service({
        url: '/cicd/service',
        method: 'post',
        data,
        loadingOption: {
            target: '.right-container'
        }
    })
}

export const deleteService = (id) => {
    return service({
        url: `/cicd/service/${id}`,
        method: 'delete',
        loadingOption: {
            target: '.right-container'
        }
    })
}

export const updateService = (data) => {
    return service({
        url: '/cicd/service',
        method: 'put',
        data
    })
}


export const describeService = (id) => {
    return service({
        url: `/cicd/service/${id}`,
        method: 'get',
    })
}


export const getServiceList = (params) => {
    return service({
        url: '/cicd/service',
        method: 'get',
        params
    })
}
export const deleteServiceByIds = (data) => {
    return service({
        url: '/cicd/service',
        method: 'delete',
        data,
        loadingOption: {
            target: '.right-container'
        }
    })
}
