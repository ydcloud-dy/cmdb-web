import service from '@/utils/request'

export const getCloudtty = (data) => {
    return service({
        url: '/kubernetes/cloudtty/get',
        method: 'post',
        data
    })
}
