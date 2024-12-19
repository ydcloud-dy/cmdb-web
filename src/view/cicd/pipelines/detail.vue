<template>
  <div style="width: 100%; padding: 20px;">
    <!-- 面包屑导航 -->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item @click="goToHome" style="cursor: pointer;">首页</el-breadcrumb-item>
      <el-breadcrumb-item @click="goBack" style="cursor: pointer;">流水线</el-breadcrumb-item>
      <el-breadcrumb-item>构建详情</el-breadcrumb-item>
    </el-breadcrumb>

    <!-- 标题 -->
    <h2 style="margin: 20px 0;">构建详情</h2>

    <!-- 标签页 -->
    <el-tabs
        v-model="activeTab"
        type="border-card"
        tab-bar-style="border-bottom: 2px solid #409EFF;"
        class="custom-tabs"
    >
      <el-tab-pane label="基本信息" name="basic-info">
        <h3 style="margin-bottom: 20px;">基本信息</h3>
        <el-table :data="tableData" border style="width: 100%;">
          <el-table-column prop="label" label="字段" width="150"></el-table-column>
          <el-table-column prop="value" label="值"></el-table-column>
        </el-table>
      </el-tab-pane>

      <el-tab-pane label="流程编排" name="flow-design">
        <!-- 阶段任务部分 -->
        <el-scrollbar class="page-scrollbar">

        <el-card class="card-section" shadow="never">
          <h3>阶段任务</h3>
          <div class="stage-task">
            <!-- 第一个节点：关联代码库 -->
            <div class="stage-task-left">
              <div class="task-source">
                <el-card class="task-card" shadow="always">
                  <div class="task-content">
                    <el-button type="primary" plain @click="linkRepository"
                    >关联代码库</el-button
                    >
                    <p v-if="repositoryInfo.url" class="repo-url">
                      {{ repositoryInfo.url }}
                    </p>
                    <div
                        v-if="repositoryInfo.branch && repositoryInfo.url"
                        class="branch-info"
                    >
                      <i class="el-icon-branch"></i>
                      <el-tag type="success">{{
                          repositoryInfo.branch
                        }}</el-tag>
                    </div>
                  </div>
                </el-card>

                <!-- 添加阶段按钮 -->
                <div class="line-and-button">
                  <span class="line"></span>
                  <button class="add-task-icon" @click="openAddTaskDialog">
                    +
                  </button>
                </div>
              </div>
            </div>

            <div class="stage-task-right">
              <div class="flow-list">
                <div
                    v-for="(taskGroup, groupIndex) in taskGrid"
                    :key="groupIndex"
                    class="task-group"
                >
                  <div class="header" style="cursor: pointer">
                    <el-tag
                        effect="dark"
                        round
                        @click="editTask(taskGroup, 'group')"
                    >
                      {{ taskGroup.name || "#test" }}
                      <!-- 显示传递的阶段名称 -->
                    </el-tag>
                  </div>
                  <div
                      v-for="(task, taskIndex) in taskGroup.taskList"
                      :key="taskIndex"
                      class="flow-item"
                  >
                    <flowFrame
                        :x="groupIndex"
                        :y="taskIndex"
                        :transform-index="task"
                        :phaseName="taskGroup.name"
                        :isShowAddTaskDialog="taskIndex == 0"
                        :isShowwAdd="taskIndex == taskGroup.taskList.length - 1"
                        @editTask="editTask(task)"
                        @createTask="createTask(taskGroup)"
                        @handleCircleClick="
                        handleCircleClick(task, taskGroup, taskIndex)
                      "
                        @openAddTaskDialogFlow="openAddTaskDialogFlow"
                        :is-show="true"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </el-card>

        <!-- 页面底部按钮 -->
        <div class="footer-buttons">
          <el-button type="primary" @click="savePipeline">保存</el-button>
          <el-button @click="cancel">取消</el-button>
        </div>

        <!-- 关联代码库弹窗 -->
        <el-drawer v-model="repositoryDialogVisible" :show-close="false">
          <template #header="{ close, titleId, titleClass }">
            <h4 :id="titleId" :class="titleClass">关联代码库</h4>
            <el-button type="danger" @click="close">
              <el-icon class="el-icon--left">
                <CircleCloseFilled />
              </el-icon>
              Close
            </el-button>
          </template>
          <el-form :model="repositoryInfo" label-width="130px">
            <el-form-item label="代码库地址" required>
              <el-input v-model="repositoryInfo.url" :disabled="true"></el-input>
            </el-form-item>
            <el-form-item label="默认分支" required>
              <el-input
                  v-model="repositoryInfo.defaultBranch"
                  :disabled="true"
              ></el-input>
            </el-form-item>

            <el-form-item label="选择凭证类型" required>
              <el-radio-group v-model="repositoryInfo.voucherType">
                <el-radio :value="1">密码方式</el-radio>
                <el-radio :value="2">密钥方式</el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="服务连接" required>
              <el-select
                  v-model="repositoryInfo.gitType"
                  placeholder="请选择连接"
                  @change="updateRepositoryInfo"
              >
                <el-option
                    v-for="item in serviceList"
                    :key="item.ID"
                    :label="item.name"
                    :value="item.name"
                ></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="开启代码源触发" required>
              <el-switch v-model="repositoryInfo.codeSourceStatus" />
            </el-form-item>
          </el-form>
          <template #footer>
            <el-button @click="repositoryDialogVisible = false">取消</el-button>
            <el-button type="primary" @click="confirmRepository">确认</el-button>
          </template>
        </el-drawer>

        <!-- 配置并行任务 -->
        <el-dialog
            v-model="addParallelTaskDialogVisible"
            :title="parallelTaskTitle"
        >
          <el-form :model="popupTask" label-width="130px">
            <el-form-item label="任务名称" required>
              <el-input
                  v-model="popupTask.name"
                  placeholder="请输入任务名称"
              ></el-input>
            </el-form-item>
            <el-form-item label="任务插件" required>
              <el-select
                  v-model="popupTask.branch"
                  placeholder="请选择任务插件"
                  @change="handlePoputask"
              >
                <el-option label="执行脚本" value="1"></el-option>
                <el-option label="镜像打包并推送到仓库" value="2"></el-option>
                <el-option label="构建产物上传至OSS" value="3"></el-option>
                <el-option label="KBS资源部署" value="4"></el-option>
                <el-option label="产物上传制品库" value="5"></el-option>
              </el-select>
            </el-form-item>

            <!-- 执行脚本部分 -->
            <el-card
                class="card-section"
                shadow="never"
                v-if="popupTask.branch == '1'"
            >
              <el-form-item label="目标资源" required>
                <el-select
                    v-model="popupTask.image"
                    placeholder="请选择目标资源"
                >
                  <!-- 遍历接口返回的列表，动态生成选项 -->
                  <el-option
                      v-for="env in buildEnvList"
                      :key="env.ID"
                      :label="env.image"
                      :value="env.image"
                  ></el-option>
                </el-select>
              </el-form-item>

              <el-form-item label="脚本类型" required>
                <el-radio-group
                    v-model="popupTask.voucherType"
                    @change="handleChange"
                >
                  <el-radio value="1">sh</el-radio>
                  <el-radio value="2">bash</el-radio>
                  <el-radio value="3">python</el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="执行脚本" required>
                <el-input
                    v-model="popupTask.textarea"
                    style="width: 550px"
                    :rows="10"
                    type="textarea"
                    placeholder="Please input"
                />
              </el-form-item>
            </el-card>
            <!-- 镜像打包并推送到仓库部分 -->
            <el-card
                class="card-section"
                shadow="never"
                v-if="popupTask.branch == '2'"
            >
              <el-form-item label="镜像仓库：" required>
                <template #label>
                  <span>镜像仓库</span>
                  <el-icon class="label" style="font-size: 15px">
                    <QuestionFilled />
                  </el-icon>
                  :
                </template>
                <el-select
                    v-model="popupTask.warehouse"
                    placeholder="请选择镜像仓库"
                    filterable
                    allow-create
                >
                  <el-option
                      v-for="(item, index) in registryList"
                      :key="index"
                      :label="item.config.url"
                      :value="item.config.url"
                  />
                </el-select>

              </el-form-item>

              <el-form-item label="空间名称：" required>
                <template #label>
                  <span>空间名称</span>
                  <el-icon class="label" style="font-size: 15px"
                  ><QuestionFilled /></el-icon
                  >:
                </template>
                <el-input
                    v-model="popupTask.spatialName"
                    placeholder="请输入空间名称"
                ></el-input>
              </el-form-item>
              <el-form-item label="镜像标签：" required>
                <template #label>
                  <span>镜像标签</span>
                  <el-icon class="label" style="font-size: 15px"
                  ><QuestionFilled /></el-icon
                  >:
                </template>
                <el-input
                    v-model="popupTask.mirrorTag"
                    placeholder="请输入镜像标签"
                ></el-input>
              </el-form-item>
              <el-form-item label="Dockerfile：" required>
                <template #label>
                  <span>Dockerfile</span>
                  <el-icon class="label" style="font-size: 15px"
                  ><QuestionFilled /></el-icon
                  >:
                </template>
                <el-input
                    v-model="popupTask.dockerfile"
                    placeholder="请输入Dockerfile"
                ></el-input>
              </el-form-item>
              <el-form-item label="ContextPath：">
                <template #label>
                  <span>ContextPath</span>
                  <el-icon class="label" style="font-size: 15px"
                  ><QuestionFilled /></el-icon
                  >:
                </template>
                <el-input
                    v-model="popupTask.contextPath"
                    placeholder="请输入ContextPath"
                ></el-input>
              </el-form-item>
            </el-card>

            <!-- 构建产物上传至OSS部分 -->
            <el-card
                class="card-section"
                shadow="never"
                v-if="popupTask.branch == '3'"
            >
              <el-form-item label="产品名称：" required>
                <el-input
                    v-model="popupTask.productName"
                    placeholder="请输入产品名称"
                ></el-input>
              </el-form-item>

              <el-form-item label="产品路径：" required>
                <el-input
                    v-model="popupTask.productPath"
                    placeholder="请输入产品路径"
                ></el-input>
              </el-form-item>
            </el-card>

            <!-- KBS资源部署部分 -->
            <el-card
                class="card-section"
                shadow="never"
                v-if="popupTask.branch == '4'"
            >
              <el-form-item label="kubectl版本" required>
                <template #label>
                  <span>kubectl版本</span>
                  <el-icon class="label" style="font-size: 15px"
                  ><QuestionFilled /></el-icon
                  >:
                </template>
                <el-select
                    v-model="popupTask.version"
                    placeholder="请选择kubectl版本"
                >
                  <el-option label="swr.cn-north-4.myhuaweicloud.com/ddn-k8s/docker.io/rancher/kubectl:v1.23.3" value="1"></el-option>
                  <el-option label="v1.23.6" value="2"></el-option>
                </el-select>
              </el-form-item>

              <el-form-item label="资源类型：" required>
                <template #label>
                  <span>资源类型</span>
                  <el-icon class="label" style="font-size: 15px"
                  ><QuestionFilled /></el-icon
                  >:
                </template>
                <el-select
                    v-model="popupTask.resource"
                    placeholder="请选择资源类型"
                >
                  <el-option label="Deployment" value="1"></el-option>
                  <el-option label="Statefulset" value="2"></el-option>
                  <el-option label="DaemonSet" value="3"></el-option>
                  <el-option label="Service" value="4"></el-option>
                  <el-option label="Ingress" value="5"></el-option>
                  <el-option label="ConfigMap" value="6"></el-option>
                  <el-option label="Secret" value="7"></el-option>
                </el-select>
              </el-form-item>

              <el-form-item label="YAML资源" required>
                <template #label>
                  <span>YAML资源</span>
                  <el-icon class="label" style="font-size: 15px"
                  ><QuestionFilled /></el-icon
                  >:
                </template>
                <el-input
                    v-model="popupTask.yamlResource"
                    style="width: 550px"
                    :rows="10"
                    type="textarea"
                    placeholder="Please input"
                />
              </el-form-item>
            </el-card>

            <!-- 产物上传制品库部分 -->
            <el-card
                class="card-section"
                shadow="never"
                v-if="popupTask.branch == '5'"
            >
              <el-form-item label="目标资源：" required>
                <el-input
                    v-model="popupTask.name"
                    placeholder="请输入目标资源"
                ></el-input>
              </el-form-item>

              <el-form-item label="执行脚本" required>
                <el-input
                    v-model="popupTask.openScript"
                    style="width: 550px"
                    :rows="10"
                    type="textarea"
                    placeholder="Please input"
                />
              </el-form-item>
            </el-card>
          </el-form>
          <template #footer>
            <footer class="footer-edit">
              <div>
                <el-button type="primary" @click="confirmAddParallelTask"
                >确认</el-button
                >
                <el-button
                    @click="deleteParallelTask"
                    :disabled="!isShowDel"
                    class="deleteBtn"
                >删除</el-button
                >
              </div>
              <el-button @click="addParallelTaskDialogVisible = false"
              >取消</el-button
              >
            </footer>
          </template>
        </el-dialog>

        <!-- 添加阶段弹窗 -->
        <el-dialog v-model="addTaskDialogVisible" title="添加阶段">
          <el-form :model="newTask" label-width="80px">
            <el-form-item label="阶段名称" :required="true">
              <el-input
                  v-model="newTask.name"
                  placeholder="请输入阶段名称"
              ></el-input>
            </el-form-item>
            <el-form-item label="阶段参数" :required="true">
              <el-table empty-text="" :data="newTask.params">
                <el-table-column prop="name" label="参数">
                  <template #default="{ row }">
                    <el-input
                        v-model="row.name"
                        placeholder="参数名称"
                    ></el-input>
                  </template>
                </el-table-column>
                <el-table-column prop="defaultValue" label="默认值">
                  <template #default="{ row }">
                    <el-input
                        v-model="row.defaultValue"
                        placeholder="请输入参数默认值"
                    ></el-input>
                  </template>
                </el-table-column>
                <el-table-column label="">
                  <template #default="{ row, index }">
                    <el-button
                        @click="removeParam(row, index)"
                        type="text"
                        size="small"
                    >删除</el-button
                    >
                  </template>
                </el-table-column>
              </el-table>
              <el-button @click="addParam" class="addBtn"
              >+ 添加自定义参数</el-button
              >
              <footer class="footer">
                <el-button
                    style="border-radius: 0px; background: blue; border: none"
                    type="primary"
                    @click="confirmAddTask"
                >确定</el-button
                >
                <el-button
                    style="border-radius: 0px"
                    @click="addTaskDialogVisible = false"
                >取消</el-button
                >
              </footer>
            </el-form-item>
          </el-form>
        </el-dialog>
        </el-scrollbar>

      </el-tab-pane>
      <el-tab-pane label="消息通知" name="message-notify">
        <div style="padding: 20px;">
          <!-- 消息通知标题和描述 -->
          <h3>消息通知</h3>
          <p style="color: #888;">开启通知提醒开关，并配置通知事件和通知方式</p>

          <!-- 通知开关 -->
          <el-form>
            <el-form-item label="通知提醒：" style="margin-bottom: 20px;">
              <el-switch v-model="notificationEnabled" />
            </el-form-item>
          </el-form>

          <!-- 如果开关开启，显示详细配置 -->
          <div v-if="notificationEnabled">
            <!-- 通知事件 -->
            <el-form-item label="通知事件：" style="margin-bottom: 20px;">
              <el-checkbox-group v-model="selectedEvents">
                <el-checkbox label="构建开始" />
                <el-checkbox label="构建成功" />
                <el-checkbox label="构建失败" />
                <el-checkbox label="构建中止" />
              </el-checkbox-group>
            </el-form-item>

            <!-- 通知方式 -->
            <el-form-item label="通知方式：" style="margin-bottom: 20px;">
              <!-- Webhook描述 -->
<!--              <div style="display:flex; margin-bottom: 10px; color: #888;">-->
<!--                Webhook通知 推送一条POST请求，详细样例见文档-->
<!--              </div>-->
              <div>
              <p>Webhook通知 推送一条POST请求，详细样例见文档</p>

              <!-- 选择框和输入框在一行 -->
              <div style="display: flex; gap: 10px; margin-bottom: 10px;">
                <el-select v-model="notificationMethod" placeholder="选择通知方式" style="flex: 2;">
                  <el-option label="钉钉通知" value="钉钉通知" />
                  <el-option label="飞书通知" value="飞书通知" />
                </el-select>
                <el-input v-model="webhookUrl" placeholder="请输入Webhook URL" style="flex: 3;" />
              </div>

              <!-- 动态提示信息 -->
              <div style="margin-top: 10px; font-size: 12px; color: #409EFF;">
                <span v-html="dynamicHelpText"></span>
              </div>
              </div>
            </el-form-item>
            <!-- 提交按钮 -->
            <el-button type="primary" @click="updateNotification">更新</el-button>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="缓存目录" name="cache-dir">
        <div style="padding: 20px;">
          <!-- 缓存目录标题和描述 -->
          <h3>缓存目录</h3>
          <p style="color: #888;">持续交付默认提供以下缓存目录，用于提高构建效率</p>

          <!-- 缓存配置开关 -->
          <el-form>
            <el-form-item label="缓存配置" style="margin-bottom: 20px;">
              <el-switch v-model="cacheEnabled" />
            </el-form-item>
          </el-form>

          <!-- 缓存选项 -->
          <div v-if="cacheEnabled">
            <el-form-item>
              <el-radio-group v-model="cacheOption">
                <el-radio label="workspace">工作空间 ${WORKSPACE}/cache</el-radio>
                <el-radio label="custom">自定义目录</el-radio>
              </el-radio-group>
            </el-form-item>

            <!-- 自定义目录输入框 -->
            <el-form-item v-if="cacheOption === 'custom'" style="margin-top: 10px;">
              <el-input
                  v-model="customCachePath"
                  placeholder="以变量方式定义，例如：${WORKSPACE}/gomod"
              />
            </el-form-item>

            <!-- 保存和取消按钮 -->
            <el-form-item style="margin-top: 20px;">
              <el-button type="primary" @click="saveCacheConfig">保存</el-button>
              <el-button @click="cancelCacheConfig">取消</el-button>
            </el-form-item>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="构建历史" name="build-history">
        构建历史内容...
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup>
import {useRoute, useRouter} from "vue-router";
import { ref, reactive,computed } from "vue";
import {onMounted} from "vue";
import {describeApplicationByName, describeApplications, getApplicationsList} from "@/api/cicd/applications";
import {
  createPipelines,
  createPipelinesCache,
  createPipelinesNotice,
  DescribePipelines,
  GetPipelinesCache,
  GetPipelinesNotice, updatePipelines
} from "@/api/cicd/pipelines";
import flowFrame from "./flow-frame.vue";

import dayjs from "dayjs";
import {ElMessage} from "element-plus";
import {getRegistryList} from "@/api/configurationCenter/service";
import {getBuildEnvList} from "@/api/configurationCenter/buildEnv";
import {getSourceCodeList} from "@/api/configurationCenter/codeSource"; // 引入 dayjs
const taskGrid = ref([]);
const repositoryDialogVisible = ref(false); // 控制关联代码库弹窗的显示
const addTaskDialogVisible = ref(false); // 控制添加阶段弹窗的显示
const cancel = () => {
  ElMessage.info("操作已取消");
};
const router = useRouter()
const route = useRoute()
const id = route.query.id
const isEditTask = ref(false); // 是否在编辑已有阶段
const activeTab = ref("basic-info");
const tableData = reactive([

]);
const parallelTaskTitle = ref("编辑任务");
const handleChange = (value) => {
  if (value == "1") {
    popupTask.value.textarea = "#!/bin/sh";
  } else if (value == "2") {
    popupTask.value.textarea = "#!/bin/bash";
  } else {
    popupTask.value.textarea = "#!/bin/python";
  }
};
const deleteParallelTask = () => {
  // if (currentTaskGroup.value.taskList.length == 1) {
  //   ElMessage.error("组内至少要保留一个任务");
  //   return;
  // }
  currentTaskGroup.value.taskList.splice(currentDeleteIndex.value, 1);
  taskGrid.value = taskGrid.value.filter((item) => {
    return item.taskList.length > 0;
  });
  addParallelTaskDialogVisible.value = false;
  ElMessage.success("任务已删除");
  console.log(taskGrid.value);

  return;
};
const handlePoputask = (value) => {
  console.log(value);
};
const addParam = () => {
  newTask.params.push({ name: "", defaultValue: "" });
};
const removeParam = (row, index) => {
  newTask.params.splice(index, 1);
};
const confirmRepository = () => {
  updateRepositoryInfo(); // 更新 repoId

  if (repositoryInfo.url && repositoryInfo.defaultBranch) {
    console.log("选中的完整仓库信息：", repositoryInfo);
    repositoryInfo.defaultBranch = "main"; // 设置默认分支为 "main"（可以根据需求调整）
    repositoryInfo.branch = "main"
    ElMessage.success("关联代码库成功");
    repositoryDialogVisible.value = false;

  } else {
    ElMessage.error("请填写完整信息");
  }
};
const registryList = ref([]); // 用于存储返回的注册表列表
const serviceList = ref([]); // 用于存储返回的注册表列表

function getRegistryCredentials(selectedWarehouse) {
  // 在 registryList 中查找匹配的仓库 URL
  const registry = registryList.value.find(item => item.config.url === selectedWarehouse);

  if (registry) {
    return {
      username: registry.config.username, // 获取用户名
      password: registry.config.password, // 获取密码
    };
  }

  // 如果没有匹配的仓库，返回默认值
  return {
    username: "",
    password: "",
  };
}
const updateRepositoryInfo = () => {
  if (!serviceList.value || serviceList.value.length === 0) {
    console.error("服务连接列表为空");
    return;
  }

  if (!repositoryInfo.gitType) {
    console.error("未选择服务连接");
    return;
  }

  const selectedService = serviceList.value.find(
      (item) => item.name === repositoryInfo.gitType
  );

  if (selectedService) {
    repositoryInfo.repoId = selectedService.ID; // 更新 repoId

    console.log("匹配的服务信息：", selectedService);
    console.log("更新后的 repositoryInfo：", repositoryInfo);
  } else {
    console.error("未找到与 repositoryInfo.gitType 匹配的服务连接");
  }
};

const buildEnvList = ref([]);
function getEnvProperty(environment, property) {
  if (!pipelineInfo.environmentOptions || !Array.isArray(pipelineInfo.environmentOptions)) {
    console.error('environmentOptions 未正确加载或不是数组:', pipelineInfo.environmentOptions);
    return ''; // 返回空字符串以避免报错
  }
  const env = pipelineInfo.environmentOptions.find(env => env.value === environment);
  return env ? env[property] : ''; // 找到匹配项则返回指定属性，否则返回空字符串
}
const confirmAddTask = () => {
  if (isEditTask.value) {
    // 修改任务
    const infoList = JSON.parse(JSON.stringify(newTask));
    for (let key in infoList) {
      currentTaskGroup.value[key] = infoList[key];
    }

    addTaskDialogVisible.value = false;
    ElMessage.success("阶段已修改");
  } else {
    if (newTask.name) {
      taskGrid.value.push({
        name: newTask.name,
        params: newTask.params,
        taskList: [
          {
            transformIndex: 0,
            name: "", //任务名称
            branch: "", //任务插件
            image: "", //目标资源
            voucherType: "1", //脚本类型
            textarea: "#!/bin/sh", //执行脚本
            spatialName: "", //空间名称
            warehouse: "", //镜像仓库
            mirrorTag: "", //镜像标签
            dockerfile: "", //Dockerfile
            contextPath: "", //ContextPath
            productName: "", //产品名称
            productPath: "", //产品路径
            version: "", //版本
            resource: "", //资源类型
            yamlResource: "", //YAML资源
            goalResource: "", //目标资源
            openScript: "", //执行脚本
          },
        ],
      });

      addTaskDialogVisible.value = false;
      ElMessage.success("新阶段已添加");
    } else {
      ElMessage.error("请填写阶段名称");
    }
  }

  newTask.name = "";
  newTask.params = [];
  isEditTask.value = false;

  console.log(taskGrid.value);
};
const confirmAddParallelTask = () => {
  console.log("添加或修改任务");
  addParallelTaskDialogVisible.value = false;
  popupTask.value.transformIndex = Date.now();
  if (!isShowDel.value) {
    // 添加任务
    currentTaskGroup.value.taskList.push(
        JSON.parse(JSON.stringify(popupTask.value))
    );
  } else {
    // 修改任务
    const infoList = JSON.parse(JSON.stringify(popupTask.value));
    for (let key in infoList) {
      currentTaskInfo.value[key] = infoList[key];
    }
  }
  console.log(taskGrid.value);

  // if (!taskGrid.value[index_Y.value]) {
  //   taskGrid.value[index_Y.value] = []; // 如果行不存在，则创建新的空行
  // }
  // if (!taskGrid.value[index_X.value]) {
  //   taskGrid.value[index_X.value] = []; // 如果行不存在，则创建新的空行
  // }

  // // 确保列存在
  // if (!taskGrid.value[index_X.value][index_Y.value]) {
  //   taskGrid.value[index_X.value][index_Y.value] = {
  //     isFlowShow: true,
  //     transformIndex: Date.now(),
  //     isShowwAdd: true,
  //     ishowHeader: false,
  //     phaseName: newTask.name,
  //     taskName: newTask.name, // 动态获取任务名称
  //   }; // 在指定位置添加一个子组件
  //   taskGrid.value[index_X.value][index_Y.value - 1] = {
  //     isFlowShow: true,
  //     transformIndex: Date.now(),
  //     taskName: newTask.name,
  //     isShowwAdd: false,
  //     ishowHeader: index_Y.value - 1 == 0 ? true : false,
  //   };
  // }

  // newTask.name = "";
  // console.log("Updated taskGrid:", JSON.stringify(taskGrid.value, null, 2));

  ElMessage.success("并行任务已添加");
};

const openAddTaskDialogFlow = (x, y) => {
  addTaskDialogVisible.value = true;
  isEditTask.value = false;
};
const isShowDel = ref(false);
const currentTaskGroup = ref({});
const currentTaskInfo = ref({}); // 存储每个任务的详细信息
const currentDeleteIndex = ref(null);
const addParallelTaskDialogVisible = ref(false);

const popupTask = ref({
  transformIndex: 0,
  name: "", //任务名称
  branch: "", //任务插件
  image: "", //目标资源
  voucherType: "1", //脚本类型
  textarea: "#!/bin/sh", //执行脚本
  spatialName: "", //空间名称
  warehouse: "", //镜像仓库
  mirrorTag: "", //镜像标签
  dockerfile: "", //Dockerfile
  contextPath: "", //ContextPath
  productName: "", //产品名称
  productPath: "", //产品路径
  version: "", //版本
  resource: "", //资源类型
  yamlResource: "", //YAML资源
  goalResource: "", //目标资源
  openScript: "", //执行脚本
});
const newTask = reactive({ name: "", executor: "", params: [] }); // 临时任务对象

const handleCircleClick = (item, taskGroup, index) => {
  isShowDel.value = true;

  currentTaskInfo.value = item;
  currentTaskGroup.value = taskGroup;
  currentDeleteIndex.value = index;

  for (let key in item) {
    popupTask.value[key] = item[key];
  }
  addParallelTaskDialogVisible.value = true;
};
const resetNewTask = () => {
  for (let key in popupTask.value) {
    popupTask.value[key] = "";
  }
};
const createTask = (taskGroup, task, x, y) => {
  resetNewTask();

  newTask.name = "";
  newTask.params = []; // 清空参数列表

  isShowDel.value = false;
  currentTaskGroup.value = taskGroup;

  addParallelTaskDialogVisible.value = true;
};
const editTask = (item, type) => {
  if (type == "group") {
    newTask.name = "";
    newTask.params = [];

    addTaskDialogVisible.value = true;
    currentTaskGroup.value = item;
    newTask.name = item.name;
    newTask.params = [...item.params];
    isEditTask.value = true;
  } else {
    resetNewTask();
    isShowDel.value = true;
    currentTaskInfo.value = item;
    addTaskDialogVisible.value = true;
  }
};
const openAddTaskDialog = (index = -1) => {
  isEditTask.value = false;
  addTaskDialogVisible.value = true;
};
const repositoryInfo = reactive({
  url: "",
  appCode: "",
  defaultBranch: "",
  gitType: "",
  voucherType: "",
  branch: "",
  codeSourceStatus: 0,
  repoId: null, // 新增字段，用于存储选中的服务连接 ID

});
let OldData = ref()
let app_code = ""
onMounted(async () => {
  console.log("Pipeline ID:", id);
  console.log(taskGrid.value)
  fetchserviceList()


  try {
    const res = await DescribePipelines(id);

    if (res.code === 0 && res.data) {
      const data = res.data;
      OldData.value = data
      repositoryInfo.url = data.git_url
      repositoryInfo.appCode = data.app_name
      repositoryInfo.defaultBranch = data.git_branch
      repositoryInfo.branch = data.git_branch

      const formattedCreatedAt = dayjs(data.CreatedAt).format("YYYY-MM-DD HH:mm:ss");
      app_code = data.app_name
      // 遍历每个 stage
      data.stages.forEach(stage => {
        const tasks = stage.task_list.map(task => ({
          transformIndex: 0,
          name: task.name, // 任务名称
          branch: task.branch, // 任务分支
          image: task.image || '', // 目标资源
          voucherType: "1", // 脚本类型
          textarea: task.script || '#!/bin/sh', // 执行脚本
          spatialName: task.spatial_name || '', // 空间名称
          warehouse: task.warehouse || '', // 镜像仓库
          mirrorTag: task.mirror_tag || '', // 镜像标签
          dockerfile: task.dockerfile || '', // Dockerfile
          contextPath: task.context_path || '', // ContextPath
          productName: task.product_name || '', // 产品名称
          productPath: task.product_path || '', // 产品路径
          version: task.version || '', // 版本
          resource: task.resource || '', // 资源类型
          yamlResource: task.yaml_resource || '', // YAML资源
          goalResource: task.goal_resource || '', // 目标资源
          openScript: task.open_script || '' // 执行脚本
        }));

        // 将任务添加到 taskGrid.value 中
        taskGrid.value.push({
          name: stage.name, // 阶段名称
          params: stage.params || [], // 填充阶段的参数
          taskList: tasks // 填充任务列表
        });
      });

      tableData.push(
          { label: "应用标识", value: data.app_name },
          { label: "仓库地址", value: data.git_url },
          { label: "环境", value: data.env_name },
          { label: "创建时间", value: formattedCreatedAt },
          { label: "默认分支", value: data.git_branch },
          { label: "凭证", value: data.registry_user }
      );
    } else {
      console.error("API 返回错误: ", res.msg);
    }
  } catch (error) {
    console.error("请求错误: ", error);
  }
  console.log()


  await loadAppDetails(); // 确保调用接口
  try {
    const response = await getRegistryList({ page: 1, pageSize: 1000 });
    if (response && response.data && response.data.list) {
      registryList.value = response.data.list;
      if (registryList.value.length > 0) {
        popupTask.value.warehouse = registryList.value[0].config.url; // 默认选中第一个仓库的 URL
      }
    }
  } catch (error) {
    console.error('Error fetching registry list:', error);
  }
  try {
    // 调用 getBuildEnvList 接口
    const response = await getBuildEnvList({ page: 1, pageSize: 10 });

    if (response && response.data && response.data.list) {
      buildEnvList.value = response.data.list;

      if (buildEnvList.value.length > 0) {
        // 设置目标资源为第一个返回的 image
        popupTask.value.image = buildEnvList.value[0].image;
      }
    }
  } catch (error) {
    console.error('Error fetching build environment list:', error);
  }

  try {
    // 调用 getBuildEnvList 接口
    const response = await GetPipelinesCache( id);
    console.log(response)
    if (response.data.enable === 1) {
      cacheEnabled.value = true
    }else {
      cacheEnabled.value = false
    }
    cacheOption.value = response.data.cache_option
    customCachePath.value = response.data.cache_dir
    console.log("缓存啊")
  } catch (error) {
    console.error('Error fetching build environment list:', error);
  }
  try {
    // 调用 getBuildEnvList 接口
    const response = await GetPipelinesNotice( id);
    console.log(response)
    if (response.data.enable === 1) {
      notificationEnabled.value = true
    }else {
      notificationEnabled.value = false
    }
    selectedEvents.value = response.data.notice_event
    notificationMethod.value = response.data.notice_type
    webhookUrl.value = response.data.webhook
    console.log("通知啊")
  } catch (error) {
    console.error('Error fetching build environment list:', error);
  }

})
const fetchserviceList = async () => {
  try {
    // 调用接口
    const response = await getSourceCodeList({ page: 1, pageSize: 10000 });

    // 检查接口返回是否成功
    if (response.code === 0 && response.data.list) {
      serviceList.value = response.data.list;
    } else {
      console.error("获取数据失败:", response.msg);
    }
  } catch (error) {
    console.error("接口请求错误:", error);
  }
};
const savePipeline = async () => {
  console.log(taskGrid.value)
  console.log(popupTask.value)
  console.log(OldData.value)
  console.log("--------------------------------'")
  const backendJson = {
    ID: parseInt(id),
    name: OldData.value.name, // 示例固定值，或者从 pipelineInfo 动态设置
    app_name: repositoryInfo.appCode, // 示例固定值，或者从 pipelineInfo 动态设置
    env_name: OldData.value.env_name, // 从 pipelineInfo 中获取环境
    build_script: "#!/bin/sh", // 示例固定值
    k8s_namespace:  getEnvProperty(pipelineInfo.environment, 'namespace'), // 示例固定值
    k8s_cluster_name: OldData.value.k8s_cluster_name, // 示例固定值
    // base_image: "registry.cn-hangzhou.aliyuncs.com/dyclouds/alpine:latest", // 示例固定值
    // dockerfile_path: "./Dockerfile", // 示例固定值
    // image_name: "yiyuetong", // 示例固定值
    // image_tag: "v1.0.0", // 示例固定值
    registry_url: `${popupTask.value.warehouse}/${popupTask.value.spatialName}`, // 示例固定值
    registry_user:  getRegistryCredentials(popupTask.value.warehouse).username, // 示例固定值
    registry_pass: getRegistryCredentials(popupTask.value.warehouse).password, // 示例固定值
    git_url: "https://gitee.com/dycloud5416/spring-boot-helloWorld.git", // 示例固定值
    git_branch: "main", // 示例固定值
    repo_id: repositoryInfo.repoId,
    git_commit_id: "", // 示例固定值或动态值
    stages: taskGrid.value.map((stage, stageIndex) => ({
      name: stage.name, // 按顺序命名阶段
      params: stage.params.map(param => ({
        name: param.name,
        defaultValue: param.defaultValue
      })),
      task_list: stage.taskList.map((task, taskIndex) => ({
        name: task.name,
        branch: task.branch || `${taskIndex + 1}`,
        plugin:
            task.name === "maven"
                ? "执行脚本"
                : task.name === "build-and-push"
                    ? "镜像打包并推送到仓库"
                    : task.name === "deploy"
                        ? "部署到Kubernetes"
                        : "",
        image:
            task.name === "deploy"
                ? "swr.cn-north-4.myhuaweicloud.com/ddn-k8s/docker.io/rancher/kubectl:v1.23.3"
                : task.image || "",
        script: task.textarea || "",
        spatial_name: task.spatialName || "",
        warehouse:
            task.name === "build-and-push"
                ? "registry.cn-hangzhou.aliyuncs.com/dyclouds"
                : task.warehouse || "",
        mirror_tag: task.mirrorTag || "",
        dockerfile: task.dockerfile || "",
        context_path: task.contextPath || "",
        product_name: task.productName || "",
        product_path: task.productPath || "",
        version: task.version || "",
        resource: task.resource || "",
        yaml_resource: task.yamlResource || "",
        goal_resource: task.goalResource || "",
        open_script: task.openScript || "",
      })),
    })),
  };
  // 查找匹配的 environmentOption
  const environment = pipelineInfo.environment;
  const matchedOption = pipelineInfo.environmentOptions.find(option => option.value === environment);
// 如果找到匹配的环境，赋值 namespace
  if (matchedOption) {
    backendJson.k8s_namespace = matchedOption.namespace;
  } else {
    // 如果没有匹配项，可以设置一个默认值
    backendJson.k8s_namespace = "default";
  }

  let res;
  res = await updatePipelines(backendJson);
  // 处理 API 响应
  if (res && res.code === 0) {
    console.log(res)
    ElMessage.success("流水线已保存");
  } else {
    ElMessage({
      type: 'error',
      message: res ? res.msg : '操作失败'
    });
  }
  console.log(backendJson)
}
const loadAppDetails = async () => {
  console.log("================================");
  try {
    const res = await describeApplicationByName({app_code:app_code}); // 调用接口
    if (res.code === 0 && res.data) {
      repositoryInfo.url = res.data.gitRepo || ""; // 填充代码库地址
      repositoryInfo.defaultBranch = res.data.branch || "main"; // 填充默认分支
      repositoryInfo.appCode = res.data.appCode

      pipelineInfo.environmentOptions = res.data.envs.map((env) => ({
        label: env.envName,
        value: env.envCode,
        namespace: env.namespace,
        clusterName: env.clusterName, // 确保包含 clusterName
      }));
    } else {
      ElMessage.error(res.msg || "获取应用详情失败");
    }
  } catch (error) {
    console.error("加载应用详情失败:", error);
    ElMessage.error("加载应用详情失败，请稍后重试");
  }
};
const pipelineInfo = reactive({
  namespace: "",
  name: "",
  environment: "",
  environmentOptions: [], // 用于存储获取的环境选项
});
const linkRepository = () => {
  repositoryDialogVisible.value = true;
};
const notificationEnabled = ref(false);
const selectedEvents = ref(["构建开始", "构建成功"]);
// 通知方式和 Webhook URL
const notificationMethod = ref("钉钉通知");
const webhookUrl = ref("");
// 动态更新帮助文本
const dynamicHelpText = computed(() => {
  if (notificationMethod.value === "钉钉通知") {
    return '添加钉钉机器人方式， 可参考 <a href="https://open.dingtalk.com" target="_blank">钉钉开放平台</a>';
  } else if (notificationMethod.value === "飞书通知") {
    return '添加飞书机器人方式， 可参考 <a href="https://open.feishu.cn" target="_blank">飞书开发者指南</a>';
  }
  return "请选择通知方式并填写Webhook URL";
});
// 更新通知配置
const updateNotification = async () => {
  console.log("通知配置已更新：", );
  console.log(notificationEnabled.value)
  console.log(id)
  let enable
  if (notificationEnabled.value == true) {
      enable = 1
  } else {
    enable = 2
  }
  try {
    const res = await createPipelinesNotice({
      pipeline_id: parseInt(id,10),
      enable: enable,
      notice_event: selectedEvents.value,
      notice_type: notificationMethod.value,
      webhook: webhookUrl.value,
    }); // 调用接口
    if (res.code === 0 && res.data) {
        console.log(res)
        ElMessage.success("更新成功")
    } else {
      ElMessage.error(res.msg || "创建通知失败");
    }
  } catch (error) {
    ElMessage.error("创建通知失败，请稍后重试");
  }
};

// 缓存配置开关状态
const cacheEnabled = ref(false);

// 缓存选项（默认选择 workspace）
const cacheOption = ref("workspace");

// 自定义目录输入框内容
const customCachePath = ref("");

// 保存缓存配置
const saveCacheConfig = async () => {
  console.log("缓存配置已保存:", {
    pipeline_id: parseInt(id,10),
    cacheEnabled: cacheEnabled.value,
    cacheOption: cacheOption.value,
    customCachePath: customCachePath.value,
  });
  let cache_dir
  if (cacheOption.value == "workspace"){
    cache_dir = "${WORKSPACE}/cache"
  }else  {
    cache_dir = customCachePath.value
  }
  let cache_enable
  if (cacheEnabled.value == true){
    cache_enable = 1
  }else  {
    cache_enable = 2
  }
  try {
    const res = await createPipelinesCache({
      pipeline_id: parseInt(id,10),
      enable: cache_enable,
      cache_option: cacheOption.value,
      cache_dir: cache_dir,
    }); // 调用接口
    console.log(res)
    if (res.code === 0 && res.data) {
      console.log(res)
      ElMessage.success("更新成功")
    } else {
      ElMessage.error(res.msg || "创建通知失败");
    }
  } catch (error) {
    ElMessage.error("创建通知失败，请稍后重试");
  }

};

// 取消缓存配置
const cancelCacheConfig = () => {
  console.log("缓存配置已取消");
  cacheEnabled.value = false;
  cacheOption.value = "workspace";
  customCachePath.value = "";
};
const goToHome = () => {
  router.push("/");
};

// 点击流水线返回上一个页面
const goBack = () => {
  router.back(); // 或者使用 router.go(-1);
};
</script>

<style scoped>
/* 设置选项卡样式 */
.custom-tabs >>> .el-tabs__item.is-active {
  color: #409EFF;
  font-weight: bold;
}

.custom-tabs >>> .el-tabs__active-bar {
  height: 3px;
  background: #409EFF;
}


.page-scrollbar {
  height: 100vh;
}

.card-section {
  margin-bottom: 20px;
  /* padding: 20px; */
}

.stage-task {
  display: flex;
  /* align-items: center; */
  padding: 20px 0;
  gap: 10px;
  flex-wrap: wrap;
  width: 100%;
}

.stage-task-left {
  flex: 3;
  /* 左侧占 3/10 的宽度 */
  /* background-color: lightblue; */
  /* 背景颜色 */
  display: flex;
  /* 使用 flexbox 对齐内容 */
  flex-direction: column;
  /* 纵向排列内容 */
  justify-content: flex-start;
  /* 纵向顶部对齐 */
  align-items: flex-start;
  /* 横向左侧对齐 */
}

.stage-task-right {
  flex: 7;
  display: flex;
  /* 使用 flexbox 对齐内容 */
  flex-direction: column;
  transform: translateX(-20px);
  /* 纵向排列内容 */
  justify-content: flex-start;
  /* 纵向顶部对齐 */
  align-items: flex-start;

  /* 横向左侧对齐 */
}

.task-source {
  display: flex;
  align-items: center;
}

.task-card {
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #dcdfe6;
  border-radius: 6px;
  background-color: #293742;
}

.task-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.repo-url {
  margin-top: 10px;
  color: #409eff;
  font-size: 14px;
}

.branch-info {
  display: flex;
  align-items: center;
  gap: 5px;
  margin-top: 5px;
}

.line-and-button {
  display: flex;
  align-items: center;
}

.line {
  width: 30px;
  height: 2px;
  background-color: #dcdfe6;
  margin-right: 8px;
}

.add-task-icon {
  font-size: 24px;
  color: #409eff;
  background: none;
  border: none;
  cursor: pointer;
}

.flow-list {
  margin-top: 15px;
  width: 280px;
  /* height: 80px; */
  display: flex;
}

.flow-item {
  display: inline-flex;
  justify-content: space-between;
  flex: 1;
}

.footer-buttons {
  display: flex;
  justify-content: flex-start;
  gap: 10px;
  padding: 20px 0;
}

.param-row {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
}
.addBtn {
  border: 1px dashed rgb(44, 94, 181);
  border-radius: 0px;
  width: 100%;
  margin-top: 10px;
  height: 40px;
  color: rgb(44, 94, 181);
}
.deleteBtn {
  border: 1px dashed rgb(245, 108, 108);
  border-radius: 0px;
  color: rgb(245, 108, 108);
}
.footer {
  width: 500px;
  height: 100px;
  margin-top: 20px;
}
.label {
  margin-top: 8px;
  background: rgb(40, 51, 69);
}
.footer-edit {
  display: flex;
  justify-content: space-around;
}
</style>
