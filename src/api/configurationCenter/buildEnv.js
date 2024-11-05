import service from '@/utils/request'


export const createBuildEnv = (data) => {
    return service({
        url: '/configCenter/buildEnv',
        method: 'post',
        data,
        loadingOption: {
            target: '.right-container'
        }
    })
}

export const deleteBuildEnv = (id) => {
    return service({
        url: `/configCenter/buildEnv/${id}`,
        method: 'delete',
        loadingOption: {
            target: '.right-container'
        }
    })
}

export const updateBuildEnv = (data) => {
    return service({
        url: '/configCenter/buildEnv',
        method: 'put',
        data
    })
}


export const describeBuildEnv = (id) => {
    return service({
        url: `/configCenter/buildEnv/${id}`,
        method: 'get',
    })
}


export const getBuildEnvList = (params) => {
    return service({
        url: '/configCenter/buildEnv',
        method: 'get',
        params
    })
}
export const deleteBuildEnvByIds = (data) => {
    return service({
        url: '/configCenter/buildEnv',
        method: 'delete',
        data,
        loadingOption: {
            target: '.right-container'
        }
    })
}

