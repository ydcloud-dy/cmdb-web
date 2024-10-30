import service from '@/utils/request'
// @Tags System
// @Summary 获取存储卷列表
// @Produce  application/json
// @Success 200
// @Router /docker/volume/list
export const listVolume = (host,data) => {
  if (data.name === undefined) {
    return service({
      url: `/docker/${host}/volume/list?page=${data.page}&pageSize=${data.pageSize}`,
      method: 'get'
    })
  } else {
    return service({
      url: `/docker/${host}/volume/list?name=${data.name}&page=${data.page}&pageSize=${data.pageSize}`,
      method: 'get'
    })
  }
}

// @Tags System
// @Summary 删除存储卷
// @Produce  application/json
// @Success 200
// @Router /docker/volume
export const deleteVolume = (host,data) => {
  return service({
    url: `/docker/${host}/volume`,
    method: 'delete',
    data: data,
  })
}

// @Tags System
// @Summary 删除存储卷
// @Produce  application/json
// @Success 200
// @Router /docker/volume
export const createVolume = (host,data) => {
  return service({
    url: `/docker/${host}/volume`,
    method: 'post',
    data: data,
  })
}
