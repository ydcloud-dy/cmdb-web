
<template>
  <el-scrollbar class="page-scrollbar">
    <el-container>
      <!-- 页面头部 -->
      <el-header>
        <h2>创建流水线</h2>
      </el-header>

      <!-- 页面主体 -->
      <el-main>
        <!-- 基本信息表单 -->
        <el-card class="card-section" shadow="never">
          <h3>基本信息</h3>
          <el-form :model="pipelineInfo" label-width="80px">
            <el-row :gutter="20">
              <el-col :span="12">
                <el-form-item label="名称" required>
                  <el-input
                      v-model="pipelineInfo.name"
                      placeholder="请输入流水线名称"
                  ></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="关联环境" required>
                  <el-select
                      v-model="pipelineInfo.environment"
                      placeholder="请选择关联环境"
                  >
                    <el-option
                        v-for="env in pipelineInfo.environmentOptions"
                        :key="env.value"
                        :label="env.label"
                        :value="env.value"
                    ></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </el-card>

        <!-- 阶段任务部分 -->
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
      </el-main>

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
            >
              <el-option label="gitlab" value="gitlab"></el-option>
              <el-option label="gitte" value="gitte"></el-option>
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
    </el-container>
  </el-scrollbar>
</template>

<script setup>
import { reactive, ref, onMounted, computed } from "vue";
import { ElMessage, ElScrollbar } from "element-plus";
import { getRegistryList} from "@/api/configurationCenter/service";
import { useRoute } from "vue-router";
import flowFrame from "./flow-frame.vue";
import {createApplications, describeApplications} from "@/api/cicd/applications";
import { getBuildEnvList} from "@/api/configurationCenter/buildEnv";
import {createPipelines} from "@/api/cicd/pipelines";

const taskGrid = ref([]);


const route = useRoute();
const addParallelTaskDialogVisible = ref(false);
const parallelTaskTitle = ref("编辑任务");
const index_X = ref(-1);
const index_Y = ref(-1);
const isEditTask = ref(false); // 是否在编辑已有阶段

// 从查询参数中获取 id、name 和 gitUrl
const appId = route.query.appId;
const name = route.query.name;
const gitUrl = route.query.gitUrl;

// 表单数据模型
const pipelineInfo = reactive({
  namespace: "",
  name: "",
  environment: "",
  environmentOptions: [], // 用于存储获取的环境选项
});

const repositoryInfo = reactive({
  url: "",
  appCode: "",
  defaultBranch: "",
  voucherType: "",
  branch: "",
  codeSourceStatus: 0,
});

const tasks = ref([]); // 存储任务列表
const newTask = reactive({ name: "", executor: "", params: [] }); // 临时任务对象
const addTaskDialogVisible = ref(false); // 控制添加阶段弹窗的显示
const repositoryDialogVisible = ref(false); // 控制关联代码库弹窗的显示
const registryList = ref([]); // 用于存储返回的注册表列表
const buildEnvList = ref([]);

// 在页面加载时设置 repositoryInfo.url 为 gitUrl
onMounted(async () => {
  // repositoryInfo.url = gitUrl || ''; // 如果 gitUrl 存在则设置为默认值
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
});
const currentTaskIndex = ref(-1);

// 打开关联代码库弹窗
const linkRepository = () => {
  repositoryDialogVisible.value = true;
};
const deleteCurrentTask = () => {
  if (currentTaskIndex.value >= 0) {
    tasks.value.splice(currentTaskIndex.value, 1);
    currentTaskIndex.value = -1;
    addTaskDialogVisible.value = false;
    ElMessage.success("阶段已删除");
  } else {
    ElMessage.error("无法删除阶段，请刷新后重试！");
  }
};
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

// 重置
const resetNewTask = () => {
  for (let key in popupTask.value) {
    popupTask.value[key] = "";
  }
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

const isShowDel = ref(false);
const currentTaskGroup = ref({});
const currentTaskInfo = ref({}); // 存储每个任务的详细信息
const currentDeleteIndex = ref(null);
const createTask = (taskGroup, task, x, y) => {
  resetNewTask();

  newTask.name = "";
  newTask.params = []; // 清空参数列表

  isShowDel.value = false;
  currentTaskGroup.value = taskGroup;

  addParallelTaskDialogVisible.value = true;
};

// 确认关联代码库
const confirmRepository = () => {
  if (repositoryInfo.url && repositoryInfo.defaultBranch) {
    // 将弹窗填写的 Git 地址和分支更新到主界面显示
    repositoryInfo.branch = repositoryInfo.defaultBranch; // 更新主界面显示的分支
    repositoryDialogVisible.value = false; // 关闭弹窗
    ElMessage.success("关联代码库成功");
  } else {
    ElMessage.error("请填写完整信息");
  }
};

const numberOfRows = computed(() => {
  return taskGrid.value.length;
});

// 计算列数，假设以第一行的长度为列数基准
const numberOfColumns = computed(() => {
  if (taskGrid.value.length === 0) {
    return 0; // 如果没有行，列数为 0
  }
  return taskGrid.value[0].length; // 获取第一行的列数
});

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

// 打开添加阶段弹窗
const openAddTaskDialog = (index = -1) => {
  isEditTask.value = false;
  addTaskDialogVisible.value = true;
};

const openAddTaskDialogFlow = (x, y) => {
  addTaskDialogVisible.value = true;
  isEditTask.value = false;
};
const loadAppDetails = async () => {
  console.log(appId);
  console.log("================================");
  try {
    const res = await describeApplications(appId); // 调用接口
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

const optionIndex = ref();

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

// 添加自定义参数
const addParam = () => {
  newTask.params.push({ name: "", defaultValue: "" });
};

const addFlowFrame = () => {
  tasks.value.push({ name: "", defaultValue: "" });
};

// 删除自定义参数
const removeParam = (row, index) => {
  newTask.params.splice(index, 1);
};

const handleChange = (value) => {
  if (value == "1") {
    popupTask.value.textarea = "#!/bin/sh";
  } else if (value == "2") {
    popupTask.value.textarea = "#!/bin/bash";
  } else {
    popupTask.value.textarea = "#!/bin/python";
  }
};
const handlePoputask = (value) => {
  console.log(value);
};
// 删除任务
const removeTask = (index) => {
  tasks.value.splice(index, 1);
};
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

// 保存流水线
const savePipeline = async () => {
  console.log(taskGrid.value)
  console.log(pipelineInfo)
  console.log(popupTask.value)
  // 目标转换逻辑
// 目标转换逻辑
  const backendJson = {
    name: pipelineInfo.name, // 示例固定值，或者从 pipelineInfo 动态设置
    app_name: repositoryInfo.appCode, // 示例固定值，或者从 pipelineInfo 动态设置
    env_name: pipelineInfo.environment, // 从 pipelineInfo 中获取环境
    build_script: "#!/bin/sh", // 示例固定值
    k8s_namespace:  getEnvProperty(pipelineInfo.environment, 'namespace'), // 示例固定值
    k8s_cluster_name: getEnvProperty(pipelineInfo.environment, 'clusterName'), // 示例固定值
    // base_image: "registry.cn-hangzhou.aliyuncs.com/dyclouds/alpine:latest", // 示例固定值
    // dockerfile_path: "./Dockerfile", // 示例固定值
    // image_name: "yiyuetong", // 示例固定值
    // image_tag: "v1.0.0", // 示例固定值
    registry_url: `${popupTask.value.warehouse}/${popupTask.value.spatialName}`, // 示例固定值
    registry_user:  getRegistryCredentials(popupTask.value.warehouse).username, // 示例固定值
    registry_pass: getRegistryCredentials(popupTask.value.warehouse).password, // 示例固定值
    git_url: "https://gitee.com/dycloud5416/spring-boot-helloWorld.git", // 示例固定值
    git_branch: "main", // 示例固定值
    git_commit_id: "", // 示例固定值或动态值
    stages: taskGrid.value.map((stage, stageIndex) => ({
      name: stageIndex === 0 ? "build-stage" : stageIndex === 1 ? "docker-stage" : "deploy-stage", // 按顺序命名阶段
      params: stage.params.map(param => ({
        name: param.name,
        defaultValue: param.defaultValue
      })),
      task_list: stage.taskList.map((task, taskIndex) => ({
        name: task.name === "maven" ? "build-project" : task.name,
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
  console.log(backendJson)
  let res;
  res = await createPipelines(backendJson);
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

};
// 辅助函数，用于根据环境值查找对应的属性
function getEnvProperty(environment, property) {
  if (!pipelineInfo.environmentOptions || !Array.isArray(pipelineInfo.environmentOptions)) {
    console.error('environmentOptions 未正确加载或不是数组:', pipelineInfo.environmentOptions);
    return ''; // 返回空字符串以避免报错
  }
  const env = pipelineInfo.environmentOptions.find(env => env.value === environment);
  return env ? env[property] : ''; // 找到匹配项则返回指定属性，否则返回空字符串
}
// 取消操作
const cancel = () => {
  ElMessage.info("操作已取消");
};
</script>

<style scoped>
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
