import service from '@/utils/request'
// @Tags CmdbHostss
// @Summary 创建cmdbHostss表
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.CmdbHostss true "创建cmdbHostss表"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"创建成功"}"
// @Router /cmdbHostss/createCmdbHostss [post]
export const executeCommands = (data) => {
    return service({
        url: '/cmdb/batchOperations/execute',
        method: 'post',
        data,
        loadingOption: {
            target: '.right-container'
        }
    })
}
export const executeRecords = (params) => {
    return service({
        url: '/cmdb/batchOperations/execLogs',
        method: 'get',
        params,
        loadingOption: {
            target: '.right-container'
        }
    })
}


