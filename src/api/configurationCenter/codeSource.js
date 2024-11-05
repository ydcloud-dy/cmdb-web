import service from '@/utils/request'


export const createCodeSource = (data) => {
    return service({
        url: '/configCenter/sourceCode',
        method: 'post',
        data,
        loadingOption: {
            target: '.right-container'
        }
    })
}

export const deleteSourceCode = (id) => {
    return service({
        url: `/configCenter/sourceCode/${id}`,
        method: 'delete',
        loadingOption: {
            target: '.right-container'
        }
    })
}

export const updateSourceCode = (data) => {
    return service({
        url: '/configCenter/sourceCode',
        method: 'put',
        data
    })
}


export const describeSourceCode = (id) => {
    return service({
        url: `/configCenter/sourceCode/${id}`,
        method: 'get',
    })
}


export const getSourceCodeList = (params) => {
    return service({
        url: '/configCenter/sourceCode',
        method: 'get',
        params
    })
}
export const deleteSourceCodeByIds = (data) => {
    return service({
        url: '/configCenter/sourceCode',
        method: 'delete',
        data,
        loadingOption: {
            target: '.right-container'
        }
    })
}
export const TestSourceCode = (data) => {
    return service({
        url: '/configCenter/sourceCode/verify',
        method: 'post',
        data,
        loadingOption: {
            target: '.right-container'
        }
    })
}
