import service from '@/utils/request'

const BaseUrl = (cluster_id) => {
  return `/kubernetes/proxy/${cluster_id}/apis/apps.kruise.io/v1alpha1/sidecarsets`
}

export const SidecarSetsList = (cluster_id, page, pageSize, keywords, labelSelector) => {
  return service({
    url: `${BaseUrl(cluster_id)}?search=true&keywords=${keywords}&page=${page}&pageSize=${pageSize}`,
    method: 'get',
  })
}

export const SidecarSetsGet = (cluster_id, name) => {
  return service({
    url: `${BaseUrl(cluster_id)}/${name}`,
    method: 'get',
  })
}

export const SidecarSetsCreate = (cluster_id, data) => {
  return service({
    url: `${BaseUrl(cluster_id)}`,
    method: 'post',
    data
  })
}

export const SidecarSetsUpdate = (cluster_id, name, data) => {
  return service({
    url: `${BaseUrl(cluster_id)}/${name}`,
    method: 'put',
    data
  })
}

export const SidecarSetsDelete = (cluster_id, name) => {
  return service({
    url: `${BaseUrl(cluster_id)}/${name}`,
    method: 'delete',
  })
}
