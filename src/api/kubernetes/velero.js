import service from '@/utils/request'


export const VeleroTaskList = (params) => {
    return service({
        url: '/kubernetes/velero/tasks',
        method: 'get',
        params
    })
}
export const VeleroRecordList = (params) => {
    return service({
        url: '/kubernetes/velero/record',
        method: 'get',
        params
    })
}
export const DescribeVeleroTask = (params) => {
    return service({
        url: '/kubernetes/velero/taskDetail',
        method: 'get',
        params
    })
}

export const VeleroTaskCreate = ( data) => {
    return service({
        url: '/kubernetes/velero/tasks',
        method: 'post',
        data
    })
}
export const VeleroCreate = ( data) => {
    return service({
        url: '/kubernetes/velero',
        method: 'post',
        data
    })
}
export const VeleroTaskUpdate = ( data) => {
    return service({
        url: '/kubernetes/velero/tasks',
        method: 'put',
        data
    })
}

export const VeleroTaskDelete = (data) => {
    return service({
        url: '/kubernetes/velero/tasks',
        method: 'delete',
        data
    })
}
export const DescribeVeleroRecord = (params) => {
    return service({
        url: '/kubernetes/velero/recordDetail',
        method: 'get',
        params
    })
}
export const VeleroRecordDelete = (data) => {
    return service({
        url: '/kubernetes/velero/record',
        method: 'delete',
        data
    })
}
export const VeleroRecordUpdate = ( data) => {
    return service({
        url: '/kubernetes/velero/record',
        method: 'put',
        data
    })
}
export const VeleroRecordCreate = ( data) => {
    return service({
        url: '/kubernetes/velero/record',
        method: 'post',
        data
    })
}
export const VeleroReductionCreate = ( data) => {
    return service({
        url: '/kubernetes/velero/record/reduction',
        method: 'post',
        data
    })
}

export const VeleroRestoreList = (params) => {
    return service({
        url: '/kubernetes/velero/restore',
        method: 'get',
        params
    })
}
export const DescribeVeleroRestore = (params) => {
    return service({
        url: '/kubernetes/velero/restoreDetail',
        method: 'get',
        params
    })
}
export const VeleroRecordReduction = (data) => {
    return service({
        url: '/kubernetes/velero/record/reduction',
        method: 'post',
        data
    })
}
export const VeleroRestoreDelete = (data) => {
    return service({
        url: '/kubernetes/velero/restore',
        method: 'delete',
        data
    })
}
