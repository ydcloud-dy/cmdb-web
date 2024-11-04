import service from '@/utils/request'


export const createEnv = (data) => {
    return service({
        url: '/cicd/environment',
        method: 'post',
        data,
        loadingOption: {
            target: '.right-container'
        }
    })
}

export const deleteEnv = (id) => {
    return service({
        url: `/cicd/environment/${id}`,
        method: 'delete',
        loadingOption: {
            target: '.right-container'
        }
    })
}

export const updateEnv = (data) => {
    return service({
        url: '/cicd/environment',
        method: 'put',
        data
    })
}


export const describeEnv = (id) => {
    return service({
        url: `/cicd/environment/${id}`,
        method: 'get',
    })
}


export const getEnvList = (params) => {
    return service({
        url: '/cicd/environment',
        method: 'get',
        params
    })
}
export const deleteEnvByIds = (data) => {
    return service({
        url: '/cicd/environment',
        method: 'delete',
        data,
        loadingOption: {
            target: '.right-container'
        }
    })
}

