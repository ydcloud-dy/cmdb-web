import service from '@/utils/request'


export const createCodeSource = (data) => {
    return service({
        url: '/cicd/sourceCode',
        method: 'post',
        data,
        loadingOption: {
            target: '.right-container'
        }
    })
}

export const deleteSourceCode = (id) => {
    return service({
        url: `/cicd/sourceCode/${id}`,
        method: 'delete',
        loadingOption: {
            target: '.right-container'
        }
    })
}

export const updateSourceCode = (data) => {
    return service({
        url: '/cicd/sourceCode',
        method: 'put',
        data
    })
}


export const describeSourceCode = (id) => {
    return service({
        url: `/cicd/sourceCode/${id}`,
        method: 'get',
    })
}


export const getSourceCodeList = (params) => {
    return service({
        url: '/cicd/sourceCode',
        method: 'get',
        params
    })
}
export const deleteSourceCodeByIds = (data) => {
    return service({
        url: '/cicd/sourceCode',
        method: 'delete',
        data,
        loadingOption: {
            target: '.right-container'
        }
    })
}
export const TestSourceCode = (data) => {
    return service({
        url: '/cicd/sourceCode/verify',
        method: 'post',
        data,
        loadingOption: {
            target: '.right-container'
        }
    })
}
