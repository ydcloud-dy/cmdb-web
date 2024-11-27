import service from '@/utils/request'


export const createApplications = (data) => {
    return service({
        url: '/cicd/applications',
        method: 'post',
        data,
        loadingOption: {
            target: '.right-container'
        }
    })
}
export const getAppPodList = (data) => {
    return service({
        url: '/cicd/applications/deploymentInfo',
        method: 'post',
        data,
        loadingOption: {
            target: '.right-container'
        }
    })
}
export const syncApplicationBranchs = (id) => {
    return service({
        url: `/cicd/applications/${id}/syncBranches`,
        method: 'post',
        loadingOption: {
            target: '.right-container'
        }
    })
}
export const getAppBranchList = (id,page,pageSize) => {
    return service({
        url: `/cicd/applications/${id}/branches`,
        method: 'get',
        params:{
            page,pageSize
        }
    })
}
export const deleteApplications = (id) => {
    return service({
        url: `/cicd/applications/${id}`,
        method: 'delete',
        loadingOption: {
            target: '.right-container'
        }
    })
}

export const updateApplications = (data) => {
    return service({
        url: '/cicd/applications',
        method: 'put',
        data
    })
}


export const describeApplications = (id) => {
    return service({
        url: `/cicd/applications/${id}`,
        method: 'get',
    })
}


export const getApplicationsList = (params) => {
    return service({
        url: '/cicd/applications',
        method: 'get',
        params
    })
}
export const GetGitProjectsByRepoId = (params) => {
    return service({
        url: '/configCenter/sourceCode/repo/projects',
        method: 'get',
        params
    })
}
export const deleteApplicationsByIds = (data) => {
    return service({
        url: '/cicd/applications',
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
