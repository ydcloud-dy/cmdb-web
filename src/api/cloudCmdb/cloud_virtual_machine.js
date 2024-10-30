import service from '@/utils/request'
export const virtualMachineList = (data) => {
  return service({
    url: '/cloudcmdb/virtualMachine/list',
    method: 'post',
    data
  })
}

export const syncMachine = (data) => {
  return service({
    url: '/cloudcmdb/virtualMachine/sync',
    method: 'post',
    data
  })
}

export const virtualMachineTree = (data) => {
  return service({
    url: '/cloudcmdb/virtualMachine/tree',
    method: 'post',
    data
  })
}

