import service from '@/utils/request'
export const RDSList = (data) => {
  return service({
    url: '/cloudcmdb/rds/list',
    method: 'post',
    data
  })
}

export const syncRDS = (data) => {
  return service({
    url: '/cloudcmdb/rds/sync',
    method: 'post',
    data
  })
}

export const RDSTree = (data) => {
  return service({
    url: '/cloudcmdb/rds/tree',
    method: 'post',
    data
  })
}

