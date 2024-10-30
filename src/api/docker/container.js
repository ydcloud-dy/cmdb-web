import service from '@/utils/request'
import axios from 'axios'
// @Tags System
// @Summary 获取容器列表
// @Produce  application/json
// @Success 200
// @Router /docker/container/list
export const listContainer = (host,data) => {
  // if (data.name === undefined ) {
  //   return service({
  //     url: `/docker/${host}/container/list?page=${data.page}&pageSize=${data.pageSize}`,
  //     method: 'get'
  //   })
  // } else {
    return service({
      url: `/docker/${host}/container/list?name=${data.name}&page=${data.page}&pageSize=${data.pageSize}&state=${data.state}`,
      method: 'get'
    })
  // }
}

// @Tags System
// @Summary 获取容器日志
// @Produce  application/json
// @Success 200
// @Router /docker/container/logs
export const logContainer = (host,data) => {
  const r = axios.create({
    baseURL: import.meta.env.VITE_BASE_API,
    timeout: 99999
  })
  return r({
    url: `/docker/${host}/container/logs?containerId=${data.containerId}&since=${data.since}&stdout=${data.stdout}&stderr=${data.stderr}&tail=${data.tail}&timestamps=${data.timestamps}&text=${data.text}&regexp=${data.regexp}&upperLower=${data.upperLower}&datetimerange=${data.datetimerange}`,
    method: 'get'
  })
}

// @Tags System
// @Summary 获取容器stats监控状态
// @Produce  application/json
// @Success 200
// @Router /docker/container/stats
export const statsContainer = (host,id) => {
  return service({
    url: `/docker/${host}/container/stats?id=${id}`,
    method: 'get'
  })
}

// @Tags System
// @Summary 删除容器
// @Produce  application/json
// @Success 200
// @Router /docker/container
export const deleteContainer = (host,data) => {
  return service({
    url: `/docker/${host}/container`,
    method: 'delete',
    data: data,
  })
}

// @Tags System
// @Summary 重启容器
// @Produce  application/json
// @Success 200
// @Router /docker/container/restart
export const restartContainer = (host,data) => {
  return service({
    url: `/docker/${host}/container/restart`,
    method: 'post',
    data: data,
  })
}

// @Tags System
// @Summary 启动容器
// @Produce  application/json
// @Success 200
// @Router /docker/container/start
export const startContainer = (host,data) => {
  return service({
    url: `/docker/${host}/container/start`,
    method: 'post',
    data: data,
  })
}

// @Tags System
// @Summary 停止容器
// @Produce  application/json
// @Success 200
// @Router /docker/container/stop
export const stopContainer = (host,data) => {
  return service({
    url: `/docker/${host}/container/stop`,
    method: 'post',
    data: data,
  })
}

// @Tags System
// @Summary 创建容器exec
// @Produce  application/json
// @Success 200
// @Router /docker/container/exec
export const createContainerExec = (host,data) => {
  return service({
    url: `/docker/${host}/container/exec`,
    method: 'post',
    data: data,
  })
}

// @Tags System
// @Summary 修改容器终端大小
// @Produce  application/json
// @Success 200
// @Router /docker/container/exec/resize
export const resizeContainerExec = (host,data) => {
  return service({
    url: `/docker/${host}/container/exec/resize`,
    method: 'post',
    data: data,
  })
}

// @Tags System
// @Summary 创建容器
// @Produce  application/json
// @Success 200
// @Router /docker/container
export const createContainer = (host,data) => {
  return service({
    url: `/docker/${host}/container`,
    method: 'post',
    data: data,
  })
}


// @Tags System
// @Summary 获取容器详细信息
// @Produce  application/json
// @Success 200
// @Router /docker/container/inspect
export const inspectContainer = (host,data) => {
  return service({
    url: `/docker/${host}/container/inspect`,
    method: 'post',
    data: data,
  })
}