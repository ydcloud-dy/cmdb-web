import service from '@/utils/request'
// @Tags System
// @Summary 获取网络列表
// @Produce  application/json
// @Success 200
// @Router /docker/network/list
export const listNetwork = (host,data) => {
  if (data.name === undefined) {
    return service({
      url: `/docker/${host}/network/list?page=${data.page}&pageSize=${data.pageSize}`,
      method: 'get'
    })
  } else {
    return service({
      url: `/docker/${host}/network/list?name=${data.name}&page=${data.page}&pageSize=${data.pageSize}`,
      method: 'get'
    })
  }
}

// @Tags System
// @Summary 删除网络
// @Produce  application/json
// @Success 200
// @Router /docker/network
export const deleteNetwork = (host,data) => {
  return service({
    url: `/docker/${host}/network`,
    method: 'delete',
    data: data,
  })
}

// @Tags System
// @Summary 删除网络
// @Produce  application/json
// @Success 200
// @Router /docker/network
export const createNetwork = (host,data) => {
  return service({
    url: `/docker/${host}/network`,
    method: 'post',
    data: data,
  })
}
