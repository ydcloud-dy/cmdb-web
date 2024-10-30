import service from '@/utils/request'

export const createOrganization = (data) => {
  return service({
    url: '/org/createOrganization',
    method: 'post',
    data
  })
}

export const findOrganization = (params) => {
  return service({
    url: '/org/findOrganization',
    method: 'get',
    params
  })
}

export const updateOrganization = (data) => {
  return service({
    url: '/org/updateOrganization',
    method: 'put',
    data
  })
}

export const deleteOrganizationByIds = (data) => {
  return service({
    url: '/org/deleteOrganizationByIds',
    method: 'delete',
    data
  })
}

export const deleteOrganization = (data) => {
  return service({
    url: '/org/deleteOrganization',
    method: 'delete',
    data
  })
}

export const getOrganizationList = (params) => {
  return service({
    url: '/org/getOrganizationList',
    method: 'get',
    params
  })
}

export const getOrganizationTree = () => {
  return service({
    url: '/org/getOrganizationTree',
    method: 'get',
  })
}

export const findOrgUserAll = (params) => {
  return service({
    url: '/org/findOrgUserAll',
    method: 'get',
    params
  })
}

export const createOrgUser = (data) => {
  return service({
    url: '/org/createOrgUser',
    method: 'post',
    data
  })
}

export const findOrgUserList = (params) => {
  return service({
    url: '/org/findOrgUserList',
    method: 'get',
    params
  })
}

export const setOrgUserAdmin = (data) => {
  return service({
    url: '/org/setOrgUserAdmin',
    method: 'put',
    data
  })
}

export const deleteOrgUserApi = (data) => {
  return service({
    url: '/org/deleteOrgUser',
    method: 'delete',
    data
  })
}

export const transferOrgUserApi = (data) => {
  return service({
    url: '/org/transferOrgUser',
    method: 'put',
    data
  })
}

export const setDataAuthority = (data) => {
  return service({
    url: '/org/setDataAuthority',
    method: 'put',
    data
  })
}

export const syncAuthority = () => {
  return service({
    url: '/org/syncAuthority',
    method: 'post'
  })
}

export const getAuthority = () => {
  return service({
    url: '/org/getAuthority',
    method: 'get'
  })
}

