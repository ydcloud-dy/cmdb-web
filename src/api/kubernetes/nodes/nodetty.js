import service from '@/utils/request'

export const getNodetty = (data) => {
    return service({
        url: '/kubernetes/nodetty/get',
        method: 'post',
        data,
        doNotShowLoading: true,
    })
}
