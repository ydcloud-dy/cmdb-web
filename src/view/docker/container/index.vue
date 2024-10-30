<template>
  <div class="dycloud-form-box">
    <div style="margin-bottom: 15px;display: inline-block">

      <el-form :inline="true" :model="searchFrom" @keyup.native.enter="onSearch()">

        <el-form-item label="主机:">
          <el-select v-model="currentHost" @change="currentChange" placeholder="请选择主机">
            <el-option
                v-for="item in hostList"
                :key="item.value"
                :label="item.label"
                :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" icon="plus"  @click="showAddContainerDialog">创建容器</el-button>
        </el-form-item>
        <el-form-item>
          <el-button icon="delete" style="margin-left: 10px;" :disabled="!multipleSelection.length" @click="showBatchDelete">批量删除</el-button>
        </el-form-item>
        <el-form-item label="容器状态:">
          <el-select v-model="searchFrom.state"  placeholder="请选择容器状态">
            <el-option
                v-for="item in statusOptions"
                :label="item.label"
                :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>

        <el-form-item>
          <el-input v-model="searchFrom.name" class="search-input" placeholder="输入容器名称" />
          <el-button
              style="margin-left: 20px;"
              type="primary"
              icon="search"
              @click="onSearch()"
          >查询
          </el-button>
        </el-form-item>

      </el-form>
    </div>
    <el-table
      :data="list"
      style="width: 100%;color:#ffffff"
      row-key="ID"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="55" />
      <el-table-column
        show-overflow-tooltip="true"
        label="容器名称"
        prop="Names"
        width="150px"
      >
        <template #default="scope">
          <el-button type="text" @click="showContainerDialog(scope.row)">{{ scope.row.Names[0].replace("/", "") }}</el-button>
        </template>
      </el-table-column>
      <el-table-column
        label="状态"
        prop="State"
        sortable
        width="80px"
      >
        <template #default="scope">
          <span v-if="scope.row.State == 'running'">
            <el-tag
              type="success"
            >运行中</el-tag>
          </span>
          <span v-else-if="scope.row.State == 'exited'">
            <el-tag
              type="danger"
            >退出</el-tag>
          </span>
        </template>
      </el-table-column>
      <el-table-column
        label="镜像名称"
        show-overflow-tooltip="true"
        prop="Image"
        width="240px"
      />
      <el-table-column
        label="运行时间"
        prop="Status"
        sortable
        width="150px"
      />
      <el-table-column
        label="操作"
        width="700px"
      >
        <template #default="scope">
          <el-button type="primary" icon="video-play" :loading="scope.row.startLoading" round @click="startContainerHandle(scope.row)">启动
          </el-button>
          <el-button type="primary" icon="video-pause" :loading="scope.row.stopLoading" round @click="stopContainerHandle(scope.row)">停止
          </el-button>
          <el-button type="primary" icon="refresh" :loading="scope.row.restartLoading" round @click="restartContainerHandle(scope.row)">重启
          </el-button>
          <el-button type="primary" icon="monitor" round @click="showMonitorDialog(scope.row)">监控
          </el-button>
          <el-button
            type="primary"
            icon="edit"
            round
            @click="showLogDialog(scope.row.Names[0].replace('/',''))"
          >查看日志
          </el-button>
          <el-button
            type="primary"
            icon="platform"
            round
            @click="openTerminalDialog(scope.row)"
          >终端</el-button>
          <el-button type="danger" icon="delete-filled" round @click="showDeleteContainer(scope.row.Id)" />
        </template>
      </el-table-column>
    </el-table>
    <div class="dycloud-pagination">
      <el-pagination
        :current-page="page"
        :page-size="pageSize"
        :page-sizes="[10, 30, 50, 100]"
        :total="total"
        layout="total, sizes, prev, pager, next, jumper"
        @current-change="handleCurrentChange"
        @size-change="handleSizeChange"
      />
    </div>

    <!-- 查看容器详细信息dialog -->
    <el-dialog
        v-model="containerDetailsDialog"
        title="查看容器详细信息"
        top="0px"
        width="1300px"
        height="800px"
        style="max-width: 1200px"
    >
      <div class="container-detail-content">
        <el-descriptions class="margin-top" :column="2" colon="true" size="mini" direction="vertical" border>
          <el-descriptions-item label="容器ID" span="2">{{ containerDetails.Id }}</el-descriptions-item>
          <el-descriptions-item label="启动命令" span="2">{{ containerDetails.Command }}</el-descriptions-item>
          <el-descriptions-item label="网络模式">{{ containerDetails.HostConfig.NetworkMode }}</el-descriptions-item>
          <el-descriptions-item label="镜像ID">{{ containerDetails.ImageID }}</el-descriptions-item>
        </el-descriptions>
        <el-descriptions class="margin-top" :column="3" colon="true" size="mini" direction="vertical" border>
          <el-descriptions-item label="镜像名称">{{ containerDetails.Image }}</el-descriptions-item>
          <el-descriptions-item label="容器状态">{{containerDetails.State }}</el-descriptions-item>
          <el-descriptions-item label="状态">{{ containerDetails.Status }}</el-descriptions-item>
          <el-descriptions-item label="网络模式">{{ containerDetails.HostConfig.NetworkMode }}</el-descriptions-item>
          <el-descriptions-item label="创建时间">{{ timestampToDate(containerDetails.Created) }}</el-descriptions-item>
        </el-descriptions>
        <el-descriptions class="margin-top" :column="2" colon="true" size="mini" direction="vertical" border>
          <el-descriptions-item label="存储卷">
            <el-table
                :data="containerDetails.Mounts"
            >
              <el-table-column
                  label="类型"
                  width="80"
                  prop="Type"
              />
              <el-table-column
                  label="源路径"
                  prop="Source"a
              />
              <el-table-column
                  label="目标路径"
                  prop="Destination"
              />
            </el-table>
          </el-descriptions-item>
          <el-descriptions-item label="端口映射">
            <div v-for="p in containerDetails.Ports" key="key" :label="value" :prop="key">
              <div v-if="p.IP">
                <el-tag type="info">{{ p.IP }}:{{ p.PublicPort }}</el-tag> =>
                <el-tag type="info">{{ p.PrivatePort }}</el-tag>
              </div>
            </div>
          </el-descriptions-item>
        </el-descriptions>
        <el-descriptions class="margin-top" class-name="custom-description-item" :column="1" colon="true" size="mini" direction="vertical" border>
          <el-descriptions-item label="标签">
            <div v-for="(value,key) in containerDetails.Labels" key="key" :label="value" :prop="key">
              <el-tag type="info">{{ key }}</el-tag> => <el-tag type="info">{{ value }}</el-tag>
            </div>
          </el-descriptions-item>
        </el-descriptions>
        <el-descriptions class="margin-top" :column="1" colon="true" size="mini" direction="vertical" border>
          <el-descriptions-item label="环境变量">
          <div v-for="item in containerDetails.envs">
            <el-tag type="info">{{item}}</el-tag>
          </div>
          </el-descriptions-item>
        </el-descriptions>
      </div>


    </el-dialog>


    <!-- 创建容器dialog -->
    <el-dialog
      v-model="addContainerDialog"
      title="创建容器"
      top="0px"
      width="900px"
      height="1000px"
    >
      <div style="overflow:auto;padding:0 12px;">
        <el-form ref="addContainerFrom" :model="container" label-width="200px">
          <el-tabs v-model="addContainerTab" type="card">
            <el-tab-pane label="基础配置" name="base">
              <el-form-item label="容器名称:">
                <el-input v-model="container.name" style="width: 240px;" />
              </el-form-item>
              <el-form-item label="镜像:" :rules="[{ required: true, message: '容器名称不能为空' }]">
                <el-autocomplete
                  v-model="container.containerConfig.image"
                  placeholder="示例: nginx:latest"
                  clearable
                  style="width: 400px"
                  :fetch-suggestions="queryImageSearch"
                >
                  <template #default="{ item }">
                    <div class="tag">{{ item.value }}</div>
                  </template>
                </el-autocomplete>
              </el-form-item>
              <el-form-item label="端口映射:">
                <template v-for="(item, index) in container.containerHostConfig.portBinding" :key="index" style="height: 51px">
                  <div style="width: 450px">
                    <el-input v-model="item.host" placeholder="主机端口" size="small" style="width: 100px;margin-left: 10px;" /><span style="margin-left: 10px">:</span>
                    <el-input v-model="item.container" placeholder="容器端口" size="small" style="width: 100px;margin-left: 10px;" />
                    <el-radio-group v-model="item.protocol" style="margin-left: 10px;">
                      <el-radio-button label="tcp" />
                      <el-radio-button label="udp" />
                    </el-radio-group>
                    <el-button type="danger" size="mini" style="margin-left: 10px;" @click="deletePortMapItem(item, index)">-</el-button>
                  </div>
                </template>
                <el-button type="primary" size="mini" style="margin-left: 10px;" @click="addPortMapItem()">+</el-button>
              </el-form-item>
              <el-form-item label="环境变量:">
                <template v-for="(item, index) in container.containerConfig.envs" :key="index" style="height: 51px">
                  <div style="width: 350px">
                    <el-input
                      v-model="item.key"
                      placeholder="键"
                      maxlength="5"
                      size="small"
                      style="width: 100px;margin-left: 10px;"
                    />
                    <span style="margin-left: 10px;">:</span>
                    <el-input
                      v-model="item.value"
                      placeholder="值"
                      maxlength="5"
                      size="small"
                      style="width: 100px;margin-left: 10px;"
                    />
                    <el-button
                      type="danger"
                      size="mini"
                      style="margin-left: 10px;"
                      @click="deleteEnvItem(item, index)"
                    >-
                    </el-button>
                  </div></template>
                <el-button type="primary" size="mini" style="margin-left: 10px;" @click="addEnvItem()">+</el-button>
              </el-form-item>
              <el-form-item label="标签:">
                <template v-for="(item, index) in container.containerConfig.labels" :key="index" style="height: 51px">
                  <div style="width: 350px">
                    <el-input
                      v-model="item.key"
                      placeholder="键"
                      maxlength="5"
                      size="small"
                      style="width: 100px;margin-left: 10px;"
                    />
                    <span style="margin-left: 10px;">:</span>
                    <el-input
                      v-model="item.value"
                      placeholder="值"
                      maxlength="5"
                      size="small"
                      style="width: 100px;margin-left: 10px;"
                    />
                    <el-button
                      type="danger"
                      size="mini"
                      style="margin-left: 10px;"
                      @click="deleteLabelItem(item, index)"
                    >-
                    </el-button>
                  </div></template>
                <el-button type="primary" size="mini" style="margin-left: 10px;" @click="addLabelItem()">+</el-button>
              </el-form-item>
              <el-form-item label="是否自动删除:">
                <el-switch
                  v-model="container.containerHostConfig.autoRemove"
                  size="small"
                />
              </el-form-item>
              <el-form-item label="开启特权模式:">
                <el-switch
                  v-model="container.containerHostConfig.privileged"
                  size="small"
                />
              </el-form-item>
              <el-form-item label="工作目录:">
                <el-input v-model="container.containerConfig.workingDir" placeholder="示例: /workdir" style="width: 240px;" />
              </el-form-item>
              <el-form-item label="Cmd:">
                <el-input
                  v-model="container.containerConfig.cmd"
                  placeholder="示例: /usr/bin/nginx -t -c /mynginx.conf"
                  style="width: 400px;"
                />
              </el-form-item>
              <el-form-item label="Entrypoint:">
                <el-input v-model="container.containerConfig.entrypoint" placeholder="示例: /bin/sh -c" style="width: 240px;" />
              </el-form-item>
              <el-form-item label="控制台">
                <el-radio v-model="container.containerConfig.console" label="1" border>Interactive & TTY (-i -t)</el-radio>
                <el-radio v-model="container.containerConfig.console" label="2" border>TTY (-t)</el-radio>
                <el-radio v-model="container.containerConfig.console" label="3" border>Interactive (-i)</el-radio>
                <el-radio v-model="container.containerConfig.console" label="4" border>None</el-radio>
              </el-form-item>
              <el-form-item label="用户:">
                <el-input v-model="container.containerConfig.user" placeholder="示例: root" style="width: 240px;" />
              </el-form-item>
              <el-form-item label="重启策略:">
                <el-radio-group v-model="container.containerHostConfig.restartPolicy">
                  <el-radio-button label="1">Never</el-radio-button>
                  <el-radio-button label="2">Always</el-radio-button>
                  <el-radio-button label="3">On failure</el-radio-button>
                  <el-radio-button label="4">Unless stopped</el-radio-button>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="日志驱动:">
                <el-select v-model="container.containerHostConfig.logConfig.type">
                  <el-option
                    v-for="item in loggingConfigOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  />
                </el-select>
              </el-form-item>
              <el-form-item label="日志驱动选项:">
                <template v-for="(item, index) in container.containerHostConfig.logConfig.config" :key="index" style="height: 51px">
                  <div style="width: 500px">
                    <el-input
                      v-model="item.option"
                      placeholder="示例: FOO"
                      size="small"
                      style="width: 200px;margin-left: 10px;"
                    />
                    <span style="margin-left: 10px;">:</span>
                    <el-input
                      v-model="item.value"
                      placeholder="示例: bar"
                      size="small"
                      style="width: 200px;margin-left: 10px;"
                    />
                    <el-button
                      type="danger"
                      size="mini"
                      style="margin-left: 10px;"
                      @click="deleteLogOptionItem(item, index)"
                    >-
                    </el-button>
                  </div></template>
                <el-button type="primary" size="mini" style="margin-left: 10px;" @click="addLogOptionItem()">+</el-button>
              </el-form-item>
            </el-tab-pane>
            <el-tab-pane label="存储卷" name="volume">
              <template v-for="(item, index) in container.containerHostConfig.containerMount" :key="index">
                <el-form-item label="容器路径:">
                  <el-input
                    v-model="item.target"
                    placeholder="容器path: /path/in/container"
                    size="small"
                    style="width: 250px;"
                  />
                  <el-radio-group v-model="item.type">
                    <el-radio-button label="volume" />
                    <el-radio-button label="bind" />
                  </el-radio-group>
                </el-form-item>
                <el-form-item v-if="item.type === 'volume'" label="存储卷">
                  <el-select v-model="item.source" placeholder="选择一个存储卷" size="large">
                    <el-option
                      v-for="i in volumeList"
                      :key="i.value"
                      :label="i.label"
                      :value="i.value"
                    />
                  </el-select>
                  <el-button
                    type="danger"
                    size="mini"
                    style="margin-left: 10px;"
                    @click="deleteVolumeItem(item, index)"
                  >-
                  </el-button>
                </el-form-item>
                <el-form-item v-if="item.type === 'bind'" label="主机路径:">
                  <el-input
                    v-model="item.source"
                    placeholder="主机path: /path/on/host "
                    size="small"
                    style="width: 250px;"
                  />
                  <el-radio-group v-model="item.storageType" @change="radioStorageTypeChange(item, index)">
                    <el-radio-button label="1">读写</el-radio-button>
                    <el-radio-button label="2">只读</el-radio-button>
                  </el-radio-group>
                  <el-button
                    type="danger"
                    size="mini"
                    style="margin-left: 10px;"
                    @click="deleteVolumeItem(item, index)"
                  >-
                  </el-button>
                </el-form-item>
              </template>
              <el-form-item>
                <el-button type="primary" size="mini" style="margin-top: 10px;" @click="addVolumeItem()">+ 添加存储卷
                </el-button>
              </el-form-item>
            </el-tab-pane>
            <el-tab-pane label="网络" name="network">
              <el-form-item label="网络:">
                <el-select v-model="container.containerNetwork.name" placeholder="选择一个网络" size="large">
                  <el-option
                    v-for="item in networkList"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  />
                </el-select>
              </el-form-item>
              <el-form-item label="主机名称:">
                <el-input v-model="container.containerConfig.hostname" placeholder="示例: web01" style="width: 240px;" />
              </el-form-item>
              <el-form-item label="域名:">
                <el-input v-model="container.containerConfig.domainName" placeholder="示例: example.com" style="width: 240px;" />
              </el-form-item>
              <el-form-item label="mac地址:">
                <el-input
                  v-model="container.containerConfig.macAddress"
                  placeholder="示例: 11:a1:c2:b1:d2:12"
                  style="width: 240px;"
                />
              </el-form-item>
              <el-form-item label="ipv4地址:">
                <el-input v-model="container.containerNetwork.networkEndpoint.ipAddress" placeholder="示例: 1.1.1.1" style="width: 240px;" />
              </el-form-item>
              <el-form-item label="添加host解析:">
                <el-button type="primary" size="mini" style="margin-top: 10px;" @click="addHostItem()">+ 添加host解析
                </el-button>
              </el-form-item>
              <template v-for="(item, index) in container.containerHostConfig.extraHosts" :key="index" style="height: 51px">
                <el-form-item label="值:">
                  <el-input
                    v-model="item.value"
                    placeholder="host:IP"
                    size="small"
                    style="width: 200px;margin-left: 10px;"
                  />
                  <el-button
                    type="danger"
                    size="mini"
                    style="margin-left: 10px;"
                    @click="deleteHostItem(item, index)"
                  >-
                  </el-button>
                  <el-form-item />
                </el-form-item>
              </template>
            </el-tab-pane>
            <el-tab-pane label="运行时" name="runtime">
              <el-form-item label="运行时:">
                <el-select v-model="container.containerHostConfig.runtime" size="large">
                  <el-option
                    v-for="item in runtimeListOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  />
                </el-select>
              </el-form-item>
              <el-form-item label="设备:">
                <template v-for="(item, index) in container.containerHostConfig.devices" :key="index" style="height: 51px">
                  <div style="width: 500px">
                    <el-input
                      v-model="item.host"
                      placeholder="示例: /dev/tty0"
                      size="small"
                      style="width: 200px;margin-left: 10px;"
                    />
                    <span style="margin-left: 10px;">:</span>
                    <el-input
                      v-model="item.container"
                      placeholder="示例: /dev/tty0"
                      size="small"
                      style="width: 200px;margin-left: 10px;"
                    />
                    <el-button
                      type="danger"
                      size="mini"
                      style="margin-left: 10px;"
                      @click="deleteDeviceItem(item, index)"
                    >-
                    </el-button>
                  </div></template>
                <el-button type="primary" size="mini" style="margin-left: 10px;" @click="addDeviceItem()">+</el-button>
              </el-form-item>
              <el-form-item label="Sysctls:">
                <template v-for="(item, index) in container.containerHostConfig.sysctls" :key="index" style="height: 51px">
                  <div style="width: 500px">
                    <el-input
                      v-model="item.name"
                      placeholder="示例: FOO"
                      size="small"
                      style="width: 200px;margin-left: 10px;"
                    />
                    <span style="margin-left: 10px;">:</span>
                    <el-input
                      v-model="item.value"
                      placeholder="示例: bar"
                      size="small"
                      style="width: 200px;margin-left: 10px;"
                    />
                    <el-button
                      type="danger"
                      size="mini"
                      style="margin-left: 10px;"
                      @click="deleteSysctlItem(item, index)"
                    >-
                    </el-button>
                  </div></template>
                <el-button type="primary" size="mini" style="margin-left: 10px;" @click="addSysctlItem()">+</el-button>
              </el-form-item>
              <el-form-item label="共享内存大小(MB):">
                <el-input v-model="container.containerHostConfig.shmSize" placeholder="示例: 2048" style="width: 150px;" />
              </el-form-item>
              <el-form-item label="保留内存(MB):">
                <el-slider v-model="container.containerHostConfig.resource.memoryReservation" style="width:300px;" :max="memTotal" />
              </el-form-item>
              <el-form-item label="限制内存(MB):">
                <el-slider v-model="container.containerHostConfig.resource.memory" :max="memTotal" style="width:300px;" />
              </el-form-item>
              <el-form-item label="cpu最大使用核心数:">
                <el-slider v-model="container.containerHostConfig.resource.nanoCpus" :max="nCPU" step="0.1" style="width:300px;" />
              </el-form-item>
            </el-tab-pane>
          </el-tabs>
        </el-form>
      </div>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="closeAddContainerDialog">取 消</el-button>
          <el-button type="primary" @click="enterAddContainerDialog">确 定</el-button>
        </div>
      </template>
    </el-dialog>
    <!-- 删除容器dialog -->
    <el-dialog
      v-model="deleteContainerDialog"
      title="确定删除"
      width="200px"
      height="200px"
      :show-close="false"
    >
      <el-switch
        v-model="deleteContainerData.Force"
        active-text="强制删除"
      />
      <div slot="footer" class="dialog-footer">
        <el-button @click="closeDeleteContainerDialog">取 消</el-button>
        <el-button type="primary" @click="enterDeleteContainerDialog">确 定</el-button>
      </div>
    </el-dialog>
    <!-- 查看容器日志dialog -->
    <el-dialog
      v-model="logDialog"
      title="查看日志"
      width="1200px"
      destroy-on-close="true"
      height="800px"
      :loading="logsLoding"
      modal="true"
      :close-on-click-modal="false"
      :close-on-press-escape="false"
      @close="closeLogDialog"
    >
      <div>
        <el-form :inline="true"  >
          <el-form-item label="时间范围">
              <el-date-picker
                      v-model="containerLogParams.datetimerange"
                      type="datetimerange"
                      style="width:340px"
                      value-format="YYYY-MM-DD HH:mm:ss"
                      range-separator="至"
                      start-placeholder="开始日期"
                      end-placeholder="结束日期">
              </el-date-picker>
          </el-form-item>
          <el-form-item >
            <el-input type="text" v-model="containerLogParams.text"  placeholder="请输入要搜索内容" ></el-input>
          </el-form-item>
          <el-form-item >
            <el-switch
                    v-model="containerLogParams.regexp"
                    active-text="正则表达式"
            />
          </el-form-item>
          <el-form-item >
            <el-switch
                    v-model="containerLogParams.upperLower"
                    active-text="忽略大小写"
            />
          </el-form-item>
          <el-form-item >
            <el-button
                    style="margin-left: 20px;"
                    type="primary"
                    icon="search"
                    @click="refreshLog()"
            >查询
            </el-button>
          </el-form-item>
        </el-form>
      </div>
      <div id="logs" ref="logRef" v-loading="logLoading">
        <div v-for="(log, index) in logs" :key="index">
          <div style="margin-bottom: 5px;  font-size: 14px" v-html="log" />
        </div>
      </div>
      <div class="dialog-footer">
        <el-form :inline="true"  >
          <el-form-item >
            <el-switch
                v-model="enableRefreshLog"
                active-text="自动刷新日志"
                @change="enableAutoRefreshLog()"
            />
          </el-form-item>
          <el-form-item>
            <el-select v-model="containerLogParams.tail" allow-create  filterable placeholder="选择日志行数">
              <el-option
                      v-for="item in tailOptions"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item >
            <el-switch
                v-model="containerLogParams.timestamps"
                active-text="时间戳"
            />
          </el-form-item>


        </el-form>
      </div>
    </el-dialog>
    <!-- 容器监控dialog -->
    <el-dialog
      v-model="containerMonitorDialog"
      width="1100px"
      height="800px"
      destroy-on-close="true"
      center="true"
      top="0px"
      modal="true"
      :close-on-click-modal="false"
      :close-on-press-escape="false"
      append-to-body
      @open="openMonitorDialog"
      @close="closeMonitorDialog"
    >
      <el-form-item label="刷新频率">
        <el-select v-model="refreshFrequency" @change="changeMonitorRefresh">
          <el-option label="1s" value="1000" />
          <el-option label="3s" value="3000" />
          <el-option label="5s" value="5000" />
          <el-option label="10s" value="10000" />
          <el-option label="15s" value="15000" />
          <el-option label="30s" value="30000" />
        </el-select>
      </el-form-item>
      <el-row>
        <el-col :span="12"><div id="cpuChart" ref="cpuChartRef" style="width: 500px;height: 400px" /></el-col>
        <el-col :span="12"><div id="memoryChart" ref="memoryChartRef" style="width: 500px;height: 400px" /></el-col>
      </el-row>
      <el-row>
        <el-col :span="12"><div id="networkChart" ref="networkChartRef" style="width: 500px;height: 400px" /></el-col>
        <el-col :span="12"><div id="ioChart" ref="ioChartRef" style="width: 500px;height: 400px" /></el-col>
      </el-row>
    </el-dialog>

  </div>
</template>
<script>
export default {
  name: 'Container',
}
</script>
<script setup>
import * as echarts from 'echarts'
import {
  listContainer,
  logContainer,
  statsContainer,
  deleteContainer,
  restartContainer,
  stopContainer,
  inspectContainer,
  startContainer
} from '@/api/docker/container'
import axios from 'axios'
import {
  getHostList,
} from '@/api/docker/host'
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import { onMounted, onUnmounted } from 'vue'
import 'xterm/css/xterm.css'
import { listVolume } from '@/api/docker/volume'
import { listNetwork } from '@/api/docker/network'
import { listImage } from '@/api/docker/image'
import { createContainer } from '@/api/docker/container'
import { getSystemInfo } from '@/api/docker/system'
const router = useRouter()
const addContainerTab = ref('base')
const container = ref({
  containerConfig: {
    hostname: '',
    domainName: '',
    image: '',
    user: '',
    envs: [],
    cmd: '',
    entrypoint: '',
    labels: [],
    workingDir: '',
    console: '4'
  },
  containerHostConfig: {
    restartPolicy: '1',
    autoRemove: false,
    logConfig: {
      type: 'default',
      config: []
    },
    containerMount: [],
    portBinding: [],
    extraHosts: [],
    runtime: 'default',
    sysctls: [],
    shmSize: '',
    devices: [],
    resource: {
      memoryReservation: 0,
      memory: 0,
      nanoCpus: 0,
    }
  },
  containerNetwork: {
    name: 'bridge',
    networkEndpoint: {
      ipAddress: '',
      macAddress: '',
    }
  },
  name: ''
})

const page = ref(1)
const total = ref(0)
const pageSize = ref(10)
// 分页
const handleSizeChange = (val) => {
  pageSize.value = val
  ListContainer()
}
const handleCurrentChange = (val) => {
  page.value = val
  ListContainer()
}

// 多选数据
const multipleSelection = ref([])
// 多选
const handleSelectionChange = (val) => {
  multipleSelection.value = val
}

// 搜索容器
const searchFrom = ref({
  state: 'all',
  name: ''
})
const statusOptions = ref([
  {
    label: "所有",
    value: "all"
  },
  {
    label: "运行中",
    value: "running"
  },
  {
    label: "退出",
    value: "exited"
  }
])

const list = ref([])
// 获取容器列表
const ListContainer = async() => {
  list.value = []
  const res = await listContainer(currentHost.value,{
    page: page.value,
    pageSize: pageSize.value,
    name: searchFrom.value.name,
    state: searchFrom.value.state
  })
  if (res.code === 0) {
    for (const i in res.data.items) {
      res.data.items[i].stopLoading = false
      res.data.items[i].startLoading = false
      res.data.items[i].restartLoading = false
    }
    total.value = res.data.total
    page.value = res.data.page
    pageSize.value = res.data.pageSize
    list.value = res.data.items
  }
}
const onSearch = async() => {
  page.value = 1
  pageSize.value = 10
  await ListContainer()
}

// 添加容器
const addContainerDialog = ref(false)
const showAddContainerDialog = async() => {
  addContainerDialog.value = true
}
const closeAddContainerDialog = async() => {
  addContainerDialog.value = false
}
const enterAddContainerDialog = async() => {
  const res = await createContainer(currentHost.value,container.value)
  if (res.code === 0) {
    ElMessage({
      type: 'success',
      message: '创建成功'
    })
    ListContainer()
    addContainerDialog.value = false
    container.value = {
      containerConfig: {
        hostname: '',
        domainName: '',
        image: '',
        user: '',
        envs: [],
        cmd: '',
        entrypoint: '',
        labels: [],
        workingDir: '',
        console: '4'
      },
      containerHostConfig: {
        restartPolicy: '1',
        autoRemove: false,
        networkMode: '',
        logConfig: {
          type: 'default',
          config: []
        },
        containerMount: [],
        portBinding: [],
        extraHosts: [],
        runtime: 'default',
        sysctls: [],
        shmSize: '',
        devices: [],
        resource: {
          memoryReservation: 0,
          memory: 0,
          nanoCpus: 0,
        }
      },
      containerNetwork: {
        name: 'bridge',
        networkEndpoint: {
          ipAddress: '',
          macAddress: '',
        }
      },
      name: ''
    }
  } else {
    ElMessage({
      type: 'error',
      message: '操作失败'
    })
  }
}

// 容器终端
const openTerminalDialog = async(row) => {
  router.push({ name: 'Terminal', query: { containerId: row.Id,currentHost: currentHost.value, name: row.Names[0].replace('/', '') }})
}

// 删除容器
const deleteContainerDialog = ref(false)
const deleteContainerData = ref({ Ids: [], Force: false })
const showDeleteContainer = async(id) => {
  deleteContainerData.value.Ids = [id]
  deleteContainerDialog.value = true
}



const closeDeleteContainerDialog = async() => {
  deleteContainerDialog.value = false
}

const enterDeleteContainerDialog = async() => {
  const res = await deleteContainer(currentHost.value,{ Ids: deleteContainerData.value.Ids, Force: deleteContainerData.value.Force })
  if (res.code === 0) {
    ElMessage({
      type: 'success',
      message: '删除成功'
    })
    deleteContainerDialog.value = false
    deleteContainerData.value.Force = false
    ListContainer()
  }
}
// 时间戳转时间
const timestampToDate = (val) => {
  const date = new Date(val * 1000)
  const Y = date.getFullYear() + '-'
  const M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-'
  const D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + ' '
  const h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':'
  const m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':'
  const s = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds())
  return Y + M + D + h + m + s
}

// 查看容器日志
const logDialog = ref(false)
const logs = ref([]) // 日志内容
const logRef = ref(null) // 日志dialog ref对象
const enableRefreshLog = ref(true) // 自动刷新日志开关
const logLoading = ref(false) // 日志加载开关
const containerLogParams = ref({
  datetimerange: '',
  containerId: '',
  tail: 'all',
  stdout: true,
  stderr: true,
  timestamps: false,
  text: '',
  regexp: false,
  upperLower: false,
})

const tailOptions = ref([
  {
    label: '所有日志',
    value: 'all'
  },
  {
    label: '10',
    value: '10'
  },
  {
    label: '50',
    value: '50'
  },
  {
    label: '100',
    value: '100'
  },
  {
    label: '200',
    value: '200'
  },
  {
    label: '500',
    value: '500'
  },
  {
    label: '1000',
    value: '1000'
  },
  {
    label: '2000',
    value: '2000'
  },
  {
    label: '5000',
    value: '5000'
  },
])



// 容器stats状态监控面板
const cpuChart = ref(null)
const memoryChart = ref(null)
const networkChart = ref(null)
const ioChart = ref(null)
const containerMonitorDialog = ref(false)
const refreshFrequency = ref('3000') // 监控面板刷新频率
const containerStatsId = ref('')
const monitorInterval = ref(null)

// cpu使用率参数
const cpuValueList = ref([])
const cpuTimeList = ref([])

// 内存使用量参数
const memoryUsageValueList = ref([])
const memoryCacheValueList = ref([])
const memoryTimeList = ref([])

// 网络流量参数
const networkRxValueList = ref([])
const networkTxValueList = ref([])
const networkTimeList = ref([])

// io 使用量参数
const ioReadValueList = ref([])
const ioWriteValueList = ref([])
const ioTimeList = ref([])

// 打开容器监控dialog open事件
const openMonitorDialog = () => {
  cpuTimeList.value = []
  cpuValueList.value = []

  memoryCacheValueList.value = []
  memoryUsageValueList.value = []
  memoryTimeList.value = []

  networkRxValueList.value = []
  networkTxValueList.value = []
  networkTimeList.value = []

  ioReadValueList.value = []
  ioWriteValueList.value = []
  ioTimeList.value = []

  // 初始化dialog监控面板图表
  cpuChart.value = echarts.init(document.getElementById('cpuChart'))
  ioChart.value = echarts.init(document.getElementById('ioChart'))
  memoryChart.value = echarts.init(document.getElementById('memoryChart'))
  networkChart.value = echarts.init(document.getElementById('networkChart'))

  updateMonitorEchartOption()
  // 定时请求容器监控面板数据 刷新图表数据
  monitorInterval.value = setInterval(function() {
    getContainerMonitorData(containerStatsId.value)
  }, refreshFrequency.value)
}
// 关闭容器监控dialog close事件
const closeMonitorDialog = () => {
  containerMonitorDialog.value = false
  clearInterval(monitorInterval.value)
}
// 显示容器监控dialog
const showMonitorDialog = async(row) => {
  containerMonitorDialog.value = true
  containerStatsId.value = row.Id
}
// 获取容器监控数据
const getContainerMonitorData = async(row) => {
  const res = await statsContainer(currentHost.value,row)
  if (res.code === 0) {
    cpuTimeList.value.push(res.data.time)
    cpuValueList.value.push(res.data.cpuUsage)
    memoryCacheValueList.value.push(res.data.memCache)
    memoryUsageValueList.value.push(res.data.memUsage)
    memoryTimeList.value.push(res.data.time)
    networkTimeList.value.push(res.data.time)
    ioReadValueList.value.push(res.data.ioRead)
    ioWriteValueList.value.push(res.data.ioWrite)
    networkRxValueList.value.push(res.data.rxBytes)
    networkTxValueList.value.push(res.data.txBytes)
    ioTimeList.value.push(res.data.time)
  }
  updateMonitorEchartOption()
}

const convertUnit = (value) => {
  if ((value / 1024 / 1024) <= 1024) {
    return (value / 1024 / 1024).toFixed(1) + 'MB'
  } else if ((value / 1024 / 1024 / 1024) <= 1024) {
    return (value / 1024).toFixed(1) + 'GB'
  } else if ((value / 1024 / 1024 / 1024 / 1024) <= 1024) {
    return (value / 1024).toFixed(1) + 'TB'
  } else {
    return value + 'KB'
  }
}

// 更新容器监控echart图表设置和内容
const updateMonitorEchartOption = () => {
  cpuChart.value.setOption({
    title: {
      text: 'cpu使用率'
    },
    xAxis: {
      type: 'category',
      data: cpuTimeList.value
    },
    legend: {
      data: ['cpu']
    },
    tooltip: {
      trigger: 'item',
      formatter: function(params) {
        return `${params.value}%`
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        formatter: function(value) {
          return value + '%'
        }
      }
    },
    series: [
      {
        name: 'cpu',
        data: cpuValueList.value,
        type: 'line',
        smooth: true,
        areaStyle: {
          color: '#205500'
        }
      }
    ]
  })
  memoryChart.value.setOption({
    title: {
      text: '内存使用量'
    },
    legend: {
      data: ['缓存使用量', '内存使用量']
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: memoryTimeList.value
    },
    tooltip: {
      trigger: 'item',
      formatter: function(params) {
        return convertUnit(params.value)
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        formatter: function(value) {
          if ((value / 1024 / 1024) <= 1024) {
            return (value / 1024 / 1024).toFixed(1) + 'MB'
          } else if ((value / 1024 / 1024 / 1024) <= 1024) {
            return (value / 1024).toFixed(1) + 'GB'
          } else if ((value / 1024 / 1024 / 1024 / 1024) <= 1024) {
            return (value / 1024).toFixed(1) + 'TB'
          } else {
            return value + 'KB'
          }
        }
      }
    },
    series: [
      {
        name: '内存使用量',
        data: memoryUsageValueList.value,
        type: 'line',
        areaStyle: {}
      },
      {
        name: '缓存使用量',
        data: memoryCacheValueList.value,
        type: 'line',
        areaStyle: {}
      }
    ]
  })
  networkChart.value.setOption({
    title: {
      text: '网络流量(总计)'
    },
    legend: {
      data: ['发送', '接收']
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: networkTimeList.value
    },
    tooltip: {
      trigger: 'item',
      formatter: function(params) {
        return convertUnit(params.value)
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        formatter: function(value) {
          if ((value / 1024 / 1024) <= 1024) {
            return (value / 1024 / 1024).toFixed(1) + 'MB'
          } else if ((value / 1024 / 1024 / 1024) <= 1024) {
            return (value / 1024).toFixed(1) + 'GB'
          } else if ((value / 1024 / 1024 / 1024 / 1024) <= 1024) {
            return (value / 1024).toFixed(1) + 'TB'
          } else {
            return value + 'KB'
          }
        }
      }
    },
    series: [
      {
        data: networkRxValueList.value,
        type: 'line',
        name: '接收',
        smooth: true
      },
      {
        data: networkTxValueList.value,
        type: 'line',
        name: '发送',
        smooth: true
      }
    ]
  })
  ioChart.value.setOption({
    title: {
      text: 'io使用量(总计)'
    },
    legend: {
      data: ['读(总计)', '写(总计)']
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ioTimeList.value
    },
    tooltip: {
      trigger: 'item',
      formatter: function(params) {
        return convertUnit(params.value)
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        formatter: function(value) {
          if ((value / 1024 / 1024) <= 1024) {
            return (value / 1024 / 1024).toFixed(1) + 'MB'
          } else if ((value / 1024 / 1024 / 1024) <= 1024) {
            return (value / 1024).toFixed(1) + 'GB'
          } else if ((value / 1024 / 1024 / 1024 / 1024) <= 1024) {
            return (value / 1024).toFixed(1) + 'TB'
          } else {
            return value + 'KB'
          }
        }
      }
    },
    series: [
      {
        data: ioReadValueList.value,
        type: 'line',
        areaStyle: {},
        name: '读(总计)',
      },
      {
        data: ioWriteValueList.value,
        type: 'line',
        areaStyle: {},
        name: '写(总计)',
      }
    ]
  })
}

// 选择监控更新频率
const changeMonitorRefresh = () => {
  clearInterval(monitorInterval.value)
  monitorInterval.value = setInterval(function() {
    getContainerMonitorData(containerStatsId.value)
  }, refreshFrequency.value)
}

// 清理监控dialog定时任务
const clearMonitorInterval = () => {
  if (monitorInterval.value) {
    clearInterval(monitorInterval.value)
  }
}


// 显示日志
const refreshFlag = ref(true)
const refreshLog = async() => {
    logLoading.value = true
    const res = await logContainer(currentHost.value,containerLogParams.value)
    if (res.status === 200) {
      refreshFlag.value = true
      logs.value = res.data.split(/[(\r\n)\r\n]+/)
      for (const i in logs.value) {
        // if (logs.value[i].length > 8) {
        //   logs.value[i] = logs.value[i].substring(8,logs.value[i].length -1)
        // }else{
          logs.value[i] =logs.value[i]
        // }
      }
      logRef.value.scrollTop = logRef.value.scrollHeight + 100
    }
    logLoading.value = false
}
const logInterval = ref(null)
const showLogDialog = async(container) => {
  logDialog.value = true
  containerLogParams.value.containerId = container
  refreshLog()
  enableAutoRefreshLog()
}

// 切换自动刷新日志
const enableAutoRefreshLog = ()=> {
  if (enableRefreshLog.value){
    logInterval.value = setInterval(refreshLog, 2000)
  }else{
    clearLogInterval()
  }
}


const closeLogDialog = () => {
  logDialog.value = false
  clearLogInterval()
}
// 清理日志dialog定时任务
const clearLogInterval = () => {
  if (logInterval.value) {
    clearInterval(logInterval.value)
  }
}
// 重启容器
const restartContainerHandle = async(row) => {
  row.restartLoading = true
  const res = await restartContainer(currentHost.value,{ Id: row.Id })
  if (res.code === 0) {
    ElMessage({
      type: 'success',
      message: '操作成功'
    })
  } else {
    ElMessage({
      type: 'error',
      message: '操作失败'
    })
  }
  row.restartLoading = false
  ListContainer()
}

// 停止容器
const stopContainerHandle = async(row) => {
  row.stopLoading = true
  const res = await stopContainer(currentHost.value,{ Id: row.Id })
  if (res.code === 0) {
    ElMessage({
      type: 'success',
      message: '操作成功'
    })
  } else {
    ElMessage({
      type: 'error',
      message: '操作失败'
    })
  }
  row.stopLoading = false
  ListContainer()
}

// 启动容器
const startContainerHandle = async(row) => {
  row.startLoading = true
  const res = await startContainer(currentHost.value,{ Id: row.Id })
  if (res.code === 0) {
    ElMessage({
      type: 'success',
      message: '操作成功'
    })
  } else {
    ElMessage({
      type: 'error',
      message: '操作失败'
    })
  }
  row.startLoading = false
  ListContainer()
}

// 创建容器
// 添加端口映射项
const addPortMapItem = async() => {
  container.value.containerHostConfig.portBinding.push({
    host: '',
    container: '',
    protocol: 'tcp'
  })
}
// 删除端口映射项
const deletePortMapItem = async(item, index) => {
  container.value.containerHostConfig.portBinding.splice(index, 1)
}
// 添加环境变量项
const addEnvItem = async() => {
  container.value.containerConfig.envs.push({
    key: '',
    value: '',
  })
}
// 删除环境变量项
const deleteEnvItem = async(item, index) => {
  container.value.containerConfig.envs.splice(index, 1)
}
// 添加标签项
const addLabelItem = async() => {
  container.value.containerConfig.labels.push({
    key: '',
    value: '',
  })
}
// 删除标签项
const deleteLabelItem = async(item, index) => {
  container.value.containerConfig.labels.splice(index, 1)
}
// 添加存储卷项
const addVolumeItem = async() => {
  container.value.containerHostConfig.containerMount.push({
    type: 'volume',
    source: '',
    target: '',
    storageType: '1',
  })
}
// 删除存储卷项
const deleteVolumeItem = async(item, index) => {
  container.value.containerHostConfig.containerMount.splice(index, 1)
}
// 添加host 解析项
const addHostItem = async() => {
  container.value.containerHostConfig.extraHosts.push({
    value: '',
  })
}
// 删除host 解析项
const deleteHostItem = async(item, index) => {
  container.value.containerHostConfig.extraHosts.splice(index, 1)
}
// 添加device项
const addDeviceItem = async() => {
  container.value.containerHostConfig.devices.push({
    host: '',
    container: ''
  })
}
// 删除device项
const deleteDeviceItem = async(item, index) => {
  container.value.containerHostConfig.devices.splice(index, 1)
}
// 添加sysctl配置项
const addSysctlItem = async() => {
  container.value.containerHostConfig.sysctls.push({
    name: '',
    value: ''
  })
}
// 删除sysctl配置项
const deleteSysctlItem = async(item, index) => {
  container.value.containerHostConfig.sysctls.splice(index, 1)
}
// 添加日志选项
const addLogOptionItem = async() => {
  if (container.value.containerHostConfig.logConfig.type !== 'default') {
    container.value.containerHostConfig.logConfig.config.push({
      option: '',
      value: ''
    })
  }
}
// 删除日志选项
const deleteLogOptionItem = async(item, index) => {
  container.value.containerHostConfig.logConfig.config.splice(index, 1)
}

// 获取存储卷列表
const volumeList = ref([])
const ListVolume = async() => {
  volumeList.value = []
  const res = await listVolume(currentHost.value,{ name: '' })
  if (res.code === 0) {
    for (const i in res.data.items) {
      volumeList.value.push({ value: res.data.items[i].name, label: res.data.items[i].name })
    }
  }
}

// 获取网络列表
const networkList = ref([])
const ListNetwork = async() => {
  networkList.value = []
  const res = await listNetwork(currentHost.value,{ name: '' })
  if (res.code === 0) {
    for (const i in res.data.items) {
      networkList.value.push({ value: res.data.items[i].name, label: res.data.items[i].name })
    }
  }
}

// 获取镜像列表
const restaurants = ref([])
const queryImageSearch = (queryString, cb) => {
  const results = queryString
    ? restaurants.value.filter(createImageFilter(queryString))
    : restaurants.value
  cb(results)
}
const createImageFilter = (queryString) => {
  return (restaurant) => {
    return (
      restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
    )
  }
}
const ListImage = async() => {
  restaurants.value = []
  const res = await listImage(currentHost.value,{ data: '' })
  if (res.code === 0) {
    for (const i in res.data.items) {
      restaurants.value.push({ value: res.data.items[i].tag })
    }
  }
}
const loggingConfigOptions = ref([])
const runtimeListOptions = ref([])
const nCPU = ref(0.0)
const memTotal = ref(0)
const GetSystemInfo = async() => {
  loggingConfigOptions.value = [
    { label: 'default', value: 'default' }
  ]
  runtimeListOptions.value = [
    { label: 'default', value: 'default' }
  ]
  const res = await getSystemInfo(currentHost.value)
  if (res.code === 0) {
    for (const l in res.data.Plugins.Log) {
      loggingConfigOptions.value.push({ label: res.data.Plugins.Log[l], value: res.data.Plugins.Log[l] })
    }

    const keys = Object.keys(res.data.Runtimes)
    for (let i = 0; i < keys.length; i++) {
      runtimeListOptions.value.push({ label: keys[i], value: keys[i] })
    }
    nCPU.value = res.data.NCPU.toFixed(1)
    memTotal.value = Math.round(res.data.MemTotal / 1024 / 1024)
  }
}

// 多选删除
const showBatchDelete = async() => {
    const IDs = []
    if (multipleSelection.value.length === 0) {
      ElMessage({
        type: 'warning',
        message: '请选择要删除的数据'
      })
      return
    }
    multipleSelection.value &&
    multipleSelection.value.map(item => {
      IDs.push(item.Id)
    })
  deleteContainerData.value.Ids = IDs
  deleteContainerDialog.value = true
}


const hostList = ref([])
const initHostList =async () =>{
  hostList.value = []
  const res = await getHostList({
    pageSize: 10000,
  })
  if (res.code === 0) {
    for(let i=0 ; i < res.data.list.length; i++ ){
      hostList.value.push({
        value: res.data.list[i].name,
        label: res.data.list[i].name,
      })
    }
  }
}

const currentHost = ref('host')
const initCurrentHost = ()=>{
  const host = window.localStorage.getItem("currentHost")
  if (host){
    currentHost.value = host
  }
}

const currentChange = (e)=>{
  currentHost.value = e
  window.localStorage.setItem("currentHost",e)
  initData()
}

const containerDetailsDialog = ref(false)
const containerDetails = ref({
  envs:[]
})
const showContainerDialog = async(row)=>{
    containerDetails.value = row
    const res =  await inspectContainer(currentHost.value,{id: row.Id})
    if(res.code === 0 ){
      // console.log(res.data)
      containerDetails.value.envs = res.data.Config.Env
    }

    console.log( containerDetails.value.envs)
    containerDetailsDialog.value = true
}

const initData = () =>{
  ListContainer('')
  ListVolume()
  ListNetwork()
  ListImage()
  GetSystemInfo()
}

onMounted(async() => {
  initHostList()
  initCurrentHost()
  initData()
})

onUnmounted(() => {
  clearMonitorInterval()
  clearLogInterval()
})
</script>
<style>
body {
  font-family: Consolas;
}

#logs {
  background-color: #112435;
  color: #FFFFFF;
  width: 1100px;
  height: 450px;
  margin-bottom: 30px;
  overflow-y: scroll;
  scroll-padding-right: auto;
  border: 2px solid #999999;
  padding: 15px 15px 15px 15px;
  white-space: pre-wrap;
  overflow-x: hidden;
}

#logs::-webkit-scrollbar {
  /* 隐藏默认的滚动条 */
  -webkit-appearance: none;
}

#logs::-webkit-scrollbar:vertical {
  /* 设置垂直滚动条宽度 */
  width: 2px;
}

#logs::-webkit-scrollbar:horizontal{
  /* 设置水平滚动条厚度 */
  height: 2px;
}

#logs::-webkit-scrollbar-thumb {
  /* 滚动条的其他样式定制，注意，这个一定也要定制，否则就是一个透明的滚动条 */
  border-radius: 8px;
  border: 2px solid rgba(255,255,255,.4);
  background-color: rgba(0, 0, 0, .5);
}


.search-input {
  width: 200px;
}


.custom-description-item {
  max-width: 300px;
  word-break: break-all;
  word-wrap: break-word;
}
.container-detail-content{
  overflow: auto;
  height: 800px;
}

</style>
