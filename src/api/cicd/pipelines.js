import service from '@/utils/request'


export const createPipelines = (data) => {
    return service({
        url: '/cicd/pipelines',
        method: 'post',
        data,
        loadingOption: {
            target: '.right-container'
        }
    })
}
export const getPipelinesList = (params) => {
    return service({
        url: '/cicd/pipelines',
        method: 'get',
        params
    })
}
export const getPipelinesStatus = (params) => {
    return service({
        url: '/cicd/pipelinesStatus',
        method: 'get',
        params
    })
}
