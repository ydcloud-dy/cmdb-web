import service from '@/utils/request'
// @Tags System
// @Summary 获取镜像列表
// @Produce  application/json
// @Success 200
// @Router /docker/image/list
export const listImage = (host,data) => {
  if (data.name === undefined) {
    return service({
      url: `/docker/${host}/image/list?page=${data.page}&pageSize=${data.pageSize}`,
      method: 'get'
    })
  } else {
    return service({
      url: `/docker/${host}/image/list?name=${data.name}&page=${data.page}&pageSize=${data.pageSize}`,
      method: 'get'
    })
  }
}

// @Tags System
// @Summary 删除镜像
// @Produce  application/json
// @Success 200
// @Router /docker/image
export const deleteImage = (host,data) => {
  return service({
    url: `/docker/${host}/image`,
    method: 'delete',
    data: data,
  })
}

// @Tags System
// @Summary 下载镜像
// @Produce  application/json
// @Success 200
// @Router /docker/image/pull
export const pullImage = (host,data) => {
  return service({
    url: `/docker/${host}/image/pull`,
    method: 'post',
    data: data,
  })
}
