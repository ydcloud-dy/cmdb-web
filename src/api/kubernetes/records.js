import service from '@/utils/request'

export const getlistRecord = (data) => {
  return service({
    url: '/kubernetes/records/listRecord',
    method: 'post',
    data
  })
}

export const getRecordById = (data) => {
  return service({
    url: '/kubernetes/records/getById',
    method: 'post',
    data
  })
}

export const recordDelete = (data) => {
  return service({
    url: '/kubernetes/records/delete',
    method: 'delete',
    data
  })
}

export const recordDeleteByIds = (data) => {
  return service({
    url: '/kubernetes/records/deleteByIds',
    method: 'delete',
    data
  })
}