import service from '@/utils/request'

export const syncRegion = (data) => {
  return service({
    url: '/cloudcmdb/cloud_region/syncRegion',
    method: 'post',
    data
  })
}
