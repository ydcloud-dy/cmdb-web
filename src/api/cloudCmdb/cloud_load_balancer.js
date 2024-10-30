import service from '@/utils/request'
export const LoadBalancerList = (data) => {
  return service({
    url: '/cloudcmdb/loadBalancer/list',
    method: 'post',
    data
  })
}

export const SyncLoadBalancer = (data) => {
  return service({
    url: '/cloudcmdb/loadBalancer/sync',
    method: 'post',
    data
  })
}

export const LoadBalancerTree = (data) => {
  return service({
    url: '/cloudcmdb/loadBalancer/tree',
    method: 'post',
    data
  })
}

