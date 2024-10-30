import service from '@/utils/request'

export const getClustersList = (params) => {
  return service({
    url: '/kubernetes/clusterList',
    method: 'get',
    params
  })
}

export const getClustersById = (data) => {
  return service({
    url: '/kubernetes/clusterById',
    method: 'post',
    data
  })
}

export const CreateCluster = (data) => {
  return service({
    url: '/kubernetes/cluster',
    method: 'post',
    data
  })
}

export const UpdateCluster = (data) => {
  return service({
    url: '/kubernetes/cluster',
    method: 'put',
    data
  })
}

export const DeleteCluster = (data) => {
  return service({
    url: '/kubernetes/cluster',
    method: 'delete',
    data
  })
}

export const DeleteClusterByIds = (data) => {
  return service({
    url: '/kubernetes/clusterByIds',
    method: 'delete',
    data
  })
}

export const CreateCredential = (data) => {
  return service({
    url: '/kubernetes/credential',
    method: 'post',
    data
  })
}

export const getUserById = (data) => {
  return service({
    url: '/kubernetes/getUserById',
    method: 'post',
    data
  })
}

export const getClusterRoles = (data) => {
  return service({
    url: '/kubernetes/getClusterRoles',
    method: 'post',
    data
  })
}

export const getClusterApiGroups = (data) => {
  return service({
    url: '/kubernetes/getClusterApiGroups',
    method: 'post',
    data
  })
}

export const createClusterRole = (data) => {
  return service({
    url: '/kubernetes/createClusterRole',
    method: 'post',
    data
  })
}

export const updateClusterRole = (data) => {
  return service({
    url: '/kubernetes/updateClusterRole',
    method: 'put',
    data
  })
}

export const deleteClusterRole = (data) => {
  return service({
    url: '/kubernetes/deleteClusterRole',
    method: 'delete',
    data
  })
}

export const createClusterUser = (data) => {
  return service({
    url: '/kubernetes/createClusterUser',
    method: 'post',
    data
  })
}

export const updateClusterUser = (data) => {
  return service({
    url: '/kubernetes/updateClusterUser',
    method: 'put',
    data
  })
}

export const deleteClusterUser = (data) => {
  return service({
    url: '/kubernetes/deleteClusterUser',
    method: 'delete',
    data
  })
}
export const getClusterUserNamespace = (data) => {
  return service({
    url: '/kubernetes/getClusterUserNamespace',
    method: 'post',
    data
  })
}

export const getClusterListNamespace = (data) => {
  return service({
    url: `/kubernetes/getClusterListNamespace`,
    method: 'post',
    data
  })
}
