import service from '@/utils/request'
// @Tags CmdbProjects
// @Summary 创建cmdbProjects表
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.CmdbProjects true "创建cmdbProjects表"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"创建成功"}"
// @Router /cmdbProjects/createCmdbProjects [post]
export const createCmdbProjects = (data) => {
  return service({
    url: '/cmdb/projects',
    method: 'post',
    data
  })
}

// @Tags CmdbProjects
// @Summary 删除cmdbProjects表
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.CmdbProjects true "删除cmdbProjects表"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"删除成功"}"
// @Router /cmdbProjects/deleteCmdbProjects [delete]
export const deleteCmdbProjects = (params) => {
  return service({
    url: '/cmdb/projects',
    method: 'delete',
    params
  })
}

// @Tags CmdbProjects
// @Summary 批量删除cmdbProjects表
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body request.IdsReq true "批量删除cmdbProjects表"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"删除成功"}"
// @Router /cmdbProjects/deleteCmdbProjects [delete]
export const deleteCmdbProjectsByIds = (params) => {
  return service({
    url: '/cmdb/projectsByIds',
    method: 'delete',
    params
  })
}

// @Tags CmdbProjects
// @Summary 更新cmdbProjects表
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.CmdbProjects true "更新cmdbProjects表"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"更新成功"}"
// @Router /cmdbProjects/updateCmdbProjects [put]
export const updateCmdbProjects = (data) => {
  return service({
    url: '/cmdb/projects',
    method: 'put',
    data
  })
}

// @Tags CmdbProjects
// @Summary 用id查询cmdbProjects表
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data query model.CmdbProjects true "用id查询cmdbProjects表"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"查询成功"}"
// @Router /cmdbProjects/findCmdbProjects [get]
export const findCmdbProjects = (params) => {
  return service({
    url: '/cmdb/projectsById',
    method: 'get',
    params
  })
}

// @Tags CmdbProjects
// @Summary 分页获取cmdbProjects表列表
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data query request.PageInfo true "分页获取cmdbProjects表列表"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"获取成功"}"
// @Router /cmdbProjects/getCmdbProjectsList [get]
export const getCmdbProjectsList = (params) => {
  return service({
    url: '/cmdb/projects',
    method: 'get',
    params
  })
}

// @Tags CmdbProjects
// @Summary 不需要鉴权的cmdbProjects表接口
// @accept application/json
// @Produce application/json
// @Param data query cmdbReq.CmdbProjectsSearch true "分页获取cmdbProjects表列表"
// @Success 200 {object} response.Response{data=object,msg=string} "获取成功"
// @Router /cmdbProjects/getCmdbProjectsPublic [get]
export const getCmdbProjectsPublic = () => {
  return service({
    url: '/cmdb/projectsPublic',
    method: 'get',
  })
}
