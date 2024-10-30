import service from '@/utils/request'
import { useUserStore} from "@/pinia";
// @Tags CmdbHostss
// @Summary 创建cmdbHostss表
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.CmdbHostss true "创建cmdbHostss表"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"创建成功"}"
// @Router /cmdbHostss/createCmdbHostss [post]
export const createCmdbHosts = (data) => {
    return service({
        url: '/cmdb/hosts',
        method: 'post',
        data,
        loadingOption: {
            target: '.right-container'
        }
    })
}
export const AuthenticationCmdbHosts = (data) => {
    return service({
        url: '/cmdb/hosts/authentication',
        method: 'post',
        data,
        loadingOption: {
            target: '.right-container'
        },
    })
}

// 通过 WebSocket 连接后端的终端服务
export const TerminalCmdbHosts = (hostIP, onMessageCallback, onErrorCallback) => {
    const userStore = useUserStore();
    const token = userStore.token;

    // 使用 WebSocket 连接后端
    const ws = new WebSocket(`ws://127.0.0.1:8888/cmdb/hosts/terminal?host_ip=${hostIP}`);

    ws.onopen = () => {
        console.log(`WebSocket connected to ${hostIP}`);

        // WebSocket 连接建立后发送 token
        ws.send(JSON.stringify({ action: 'auth', token: token }));

        // 发送连接请求
        ws.send(JSON.stringify({ action: 'connect', ip: hostIP }));
    };

    ws.onmessage = (event) => {
        const msg = event.data;
        console.log('Received from WebSocket:', msg);
        if (onMessageCallback) {
            onMessageCallback(msg);
        }
    };

    ws.onerror = (error) => {
        console.error('WebSocket error:', error);
        if (onErrorCallback) {
            onErrorCallback(error);
        }
    };

    ws.onclose = () => {
        console.log('WebSocket connection closed');
    };

    return {
        sendCommand: (command) => {
            if (ws.readyState === WebSocket.OPEN) {
                ws.send(JSON.stringify({ action: 'input', data: command }));
            }
        },
        closeConnection: () => ws.close(),
    };
};

// 通过excel模板批量创建主机
export const ImportHosts = (data,config ={}) => {
    return service({
        url: '/cmdb/hosts/import',
        method: 'post',
        data,
        ...config,
        // loadingOption: {
        //     target: '.right-container'
        // }
    })
}
// @Tags CmdbHostss
// @Summary 删除cmdbHostss表
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.CmdbHostss true "删除cmdbHostss表"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"删除成功"}"
// @Router /cmdbHostss/deleteCmdbHostss [delete]
export const deleteCmdbHosts = (params) => {
    return service({
        url: '/cmdb/hosts',
        method: 'delete',
        params,
        loadingOption: {
            target: '.right-container'
        }
    })
}

// @Tags CmdbHostss
// @Summary 批量删除cmdbHostss表
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body request.IdsReq true "批量删除cmdbHostss表"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"删除成功"}"
// @Router /cmdbHostss/deleteCmdbHostss [delete]
export const deleteCmdbHostssByIds = (params) => {
    return service({
        url: '/cmdb/hostsByIds',
        method: 'delete',
        params,
        loadingOption: {
            target: '.right-container'
        }
    })
}

// @Tags CmdbHostss
// @Summary 更新cmdbHostss表
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.CmdbHostss true "更新cmdbHostss表"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"更新成功"}"
// @Router /cmdbHostss/updateCmdbHostss [put]
export const updateCmdbHosts = (data) => {
    return service({
        url: '/cmdb/hosts',
        method: 'put',
        data,
        loadingOption: {
            target: '.right-container'
        }
    })
}

// @Tags CmdbHostss
// @Summary 用id查询cmdbHostss表1
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data query model.CmdbHostss true "用id查询cmdbHostss表"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"查询成功"}"
// @Router /cmdbHostss/findCmdbHostss [get]
export const findCmdbHosts = (params) => {
    return service({
        url: '/cmdb/hostsById',
        method: 'get',
        params,
        loadingOption: {
            target: '.right-container'
        }
    })
}

// @Tags CmdbHostss
// @Summary 分页获取cmdbHostss表列表
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data query request.PageInfo true "分页获取cmdbHostss表列表"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"获取成功"}"
// @Router /cmdbHostss/getCmdbHostssList [get]
export const getCmdbHostsList = (params) => {
    return service({
        url: '/cmdb/hosts',
        method: 'get',
        params,
        loadingOption: {
            target: '.right-container'
        }
    })
}
export const GetImportProgress = (params) => {
    return service({
        url: '/cmdb/hosts/progress',
        method: 'get',
        params,
        loadingOption: {
            target: '.right-container'
        }
    })
}

// @Tags CmdbHostss
// @Summary 不需要鉴权的cmdbHostss表接口
// @accept application/json
// @Produce application/json
// @Param data query cmdbReq.CmdbHostssSearch true "分页获取cmdbHostss表列表"
// @Success 200 {object} response.Response{data=object,msg=string} "获取成功"
// @Router /cmdbHostss/getCmdbHostssPublic [get]
export const getCmdbHostssPublic = () => {
    return service({
        url: '/cmdb/hostsPublic',
        method: 'get',
    })
}
