import service from '@/utils/request'

// @Tags Host
// @Summary 创建主机列表
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.Host true "创建主机列表"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"创建成功"}"
// @Router /docker/host/createHost [post]
export const createHost = (data) => {
  return service({
    url: '/docker/host/createHost',
    method: 'post',
    data
  })
}

// @Tags Host
// @Summary 删除主机列表
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.Host true "删除主机列表"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"删除成功"}"
// @Router /docker/host/deleteHost [delete]
export const deleteHost = (params) => {
  return service({
    url: '/docker/host/deleteHost',
    method: 'delete',
    params
  })
}

// @Tags Host
// @Summary 批量删除主机列表
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body request.IdsReq true "批量删除主机列表"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"删除成功"}"
// @Router /docker/host/deleteHost [delete]
export const deleteHostByIds = (params) => {
  return service({
    url: '/docker/host/deleteHostByIds',
    method: 'delete',
    params
  })
}

// @Tags Host
// @Summary 更新主机列表
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.Host true "更新主机列表"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"更新成功"}"
// @Router /docker/host/updateHost [put]
export const updateHost = (data) => {
  return service({
    url: '/docker/host/updateHost',
    method: 'put',
    data
  })
}

// @Tags Host
// @Summary 用id查询主机列表
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data query model.Host true "用id查询主机列表"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"查询成功"}"
// @Router /docker/host/findHost [get]
export const findHost = (params) => {
  return service({
    url: '/docker/host/findHost',
    method: 'get',
    params
  })
}

// @Tags Host
// @Summary 分页获取主机列表列表
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data query request.PageInfo true "分页获取主机列表列表"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"获取成功"}"
// @Router /docker/host/getHostList [get]
export const getHostList = (params) => {
  return service({
    url: '/docker/host/getHostList',
    method: 'get',
    params
  })
}

// 获取添加host tls脚本
export const genTlsScript = () => {
  return service({
    url: '/docker/host/genTlsScript',
    method: 'get'
  })
}



// @Tags Host
// @Summary 检查主机可用性
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.Host true "检查主机可用性"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"更新成功"}"
// @Router /docker/host/checkHost [put]
export const checkHost = (data) => {
  return service({
    url: '/docker/host/checkHost',
    method: 'post',
    data
  })
}