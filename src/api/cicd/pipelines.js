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

export const RunPipelines = (data) => {
    return service({
        url: '/cicd/pipelinesRun',
        method: 'post',
        data,
        loadingOption: {
            target: '.right-container'
        }
    })
}
// 获取分支列表
export const getBranchList = (id) => {
    return service({
        url: `/cicd/pipelines/${id}/branches`,
        method: 'get',
    })
}
export const SyncBranchs = (id) => {
    return service({
        url: `/cicd/pipelines/syncBranch/${id}`,
        method: 'post',
        loadingOption: {
            target: '.right-container'
        }
    })
}
export const deletePipelines = (id) => {
    return service({
        url: `/cicd/pipelines/${id}`,
        method: 'delete',
        loadingOption: {
            target: '.right-container'
        }
    })
}
