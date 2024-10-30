import service from '@/utils/request'
// @Tags System
// @Summary 获取docker 信息
// @Produce  application/json
// @Success 200
// @Router /docker/system/info
export const getSystemInfo = (host) => {
  return service({
    url: `/docker/${host}/system/info`,
    method: 'get'
  })
}
