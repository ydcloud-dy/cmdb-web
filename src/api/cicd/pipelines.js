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
export const DescribePipelines = (id) => {
    return service({
        url: `/cicd/pipelines/${id}`,
        method: 'get',
    })
}
export const createPipelinesNotice = (data) => {
    return service({
        url: '/cicd/pipelines/notice',
        method: 'post',
        data,
        loadingOption: {
            target: '.right-container'
        }
    })
}
export const GetPipelinesNotice = (id) => {
    return service({
        url: `/cicd/pipelines/notice/${id}`,
        method: 'get',
    })
}
export const GetPipelinesCache = (id) => {
    return service({
        url: `/cicd/pipelines/cache/${id}`,
        method: 'get',
    })
}
export const createPipelinesCache = (data) => {
    return service({
        url: '/cicd/pipelines/cache',
        method: 'post',
        data,
        loadingOption: {
            target: '.right-container'
        }
    })
}
export const updatePipelines = (data) => {
    return service({
        url: '/cicd/pipelines',
        method: 'put',
        data
    })
}
