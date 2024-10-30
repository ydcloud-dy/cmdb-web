import service from '@/utils/request'
export const cloudplatformlist = (data) => {
  return service({
    url: '/cloudcmdb/cloud_platform/list',
    method: 'post',
    data
  })
}

export const cloudplatformById = (data) => {
  return service({
    url: '/cloudcmdb/cloud_platform/getById',
    method: 'post',
    data
  })
}

export const cloudplatformCreate = (data) => {
  return service({
    url: '/cloudcmdb/cloud_platform/create',
    method: 'post',
    data
  })
}

export const cloudplatformUpdate = (data) => {
  return service({
    url: '/cloudcmdb/cloud_platform/update',
    method: 'put',
    data
  })
}

export const cloudplatformDelete = (data) => {
  return service({
    url: '/cloudcmdb/cloud_platform/delete',
    method: 'delete',
    data
  })
}

export const cloudplatformDeleteByIds = (data) => {
  return service({
    url: '/cloudcmdb/cloud_platform/deleteByIds',
    method: 'delete',
    data
  })
}