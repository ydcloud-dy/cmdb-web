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
