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
                  <el-input v-model="pipelineInfo.name" placeholder="请输入流水线名称"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="关联环境" required>
                  <el-select v-model="pipelineInfo.environment" placeholder="请选择关联环境">
                    <el-option label="开发环境" value="dev"></el-option>
                    <el-option label="测试环境" value="test"></el-option>
                    <el-option label="生产环境" value="prod"></el-option>
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
                    <el-button type="primary" plain @click="linkRepository">关联代码库</el-button>
                    <p v-if="repositoryInfo.url" class="repo-url">{{ repositoryInfo.url }}</p>
                    <div v-if="repositoryInfo.branch && repositoryInfo.url" class="branch-info">
                      <i class="el-icon-branch"></i>
                      <el-tag type="success">{{ repositoryInfo.branch }}</el-tag>
                    </div>
                  </div>
                </el-card>

                <!-- 添加阶段按钮 -->
                <div class="line-and-button">
                  <span class="line"></span>
                  <button class="add-task-icon" @click="openAddTaskDialog">+</button>
                </div>

              </div>

            </div>

            <div class="stage-task-right">
              <div class="flow-list">

                <div v-for="(taskGroup, groupIndex) in taskGrid" :key="groupIndex" class="task-group">
                  <div v-for="(task, taskIndex) in taskGroup" :key="taskIndex" class="flow-item">
                    <flowFrame :x='groupIndex' :y='taskIndex' :transform-index="taskGroup"
                      @editTask="editTask(groupIndex, taskIndex)"
                      @createTask="createTask(taskGroup, task, groupIndex, taskIndex)"
                      @handleCircleClick="handleCircleClick(groupIndex, taskIndex)"
                      @openAddTaskDialogFlow="openAddTaskDialogFlow" :is-show="true" />
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
            <el-input v-model="repositoryInfo.defaultBranch" :disabled="true"></el-input>
          </el-form-item>

          <el-form-item label="选择凭证类型" required>
            <el-radio-group v-model="repositoryInfo.voucherType">
              <el-radio :value="1">密码方式</el-radio>
              <el-radio :value="2">密钥方式</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="服务连接" required>
            <el-select v-model="repositoryInfo.gitType" placeholder="请选择连接">
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

      <!-- 添加阶段弹窗 -->
      <el-dialog v-model="addTaskDialogVisible" title="添加阶段">
        <el-form :model="newTask" label-width="80px">
          <el-form-item label="阶段名称" required>
            <el-input v-model="newTask.name" placeholder="请输入阶段名称"></el-input>
          </el-form-item>
          <h4>阶段参数：</h4>
          <div v-for="(param, index) in newTask.params" :key="index" class="param-row">
            <el-form-item label="参数" required>
              <el-input v-model="param.name" placeholder="参数名称"></el-input>
            </el-form-item>
            <el-form-item label="默认值">
              <el-input v-model="param.defaultValue" placeholder="请输入默认值"></el-input>
            </el-form-item>
            <el-button type="text" @click="removeParam(index)">删除</el-button>
          </div>
          <el-button plain @click="addParam">+ 添加自定义参数</el-button>
        </el-form>
        <template #footer>
          <el-button @click="addTaskDialogVisible = false">取消</el-button>
          <el-button type="primary" @click="confirmAddTask">确认</el-button>
          <el-button type="danger" @click="deleteCurrentTask" v-if="isEditTask">删除</el-button>

        </template>
      </el-dialog>


      <!-- 配置并行任务 -->
      <el-dialog v-model="addParallelTaskDialogVisible" :title="parallelTaskTitle">
        <el-form :model="newTask" label-width="80px">
          <el-form-item label="任务名称" required>
            <el-input v-model="newTask.name" placeholder="请输入任务名称"></el-input>
          </el-form-item>
          <el-form-item label="任务插件" required>
            <el-select v-model="repositoryInfo.branch" placeholder="请选择任务插件">
              <el-option label="gitlab" value="1"></el-option>
              <el-option label="gitte" value="2"></el-option>
            </el-select>
          </el-form-item>

          <el-card class="card-section" shadow="never">

            <el-form-item label="目标资源" required>
              <el-select v-model="repositoryInfo.branch" placeholder="请选择目标资源">
                <el-option label="资源1" value="1"></el-option>
                <el-option label="资源2" value="2"></el-option>
              </el-select>
            </el-form-item>

            <el-form-item label="脚本类型" required>
              <el-radio-group v-model="repositoryInfo.voucherType">
                <el-radio :value="1">sh</el-radio>
                <el-radio :value="2">bash</el-radio>
                <el-radio :value="3">python</el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="执行脚本" required>
              <el-input v-model="textarea" style="width: 240px" :rows="10" type="textarea" placeholder="Please input" />
            </el-form-item>
          </el-card>
        </el-form>
        <template #footer>
          <el-button type="primary" @click="confirmAddParallelTask">确认</el-button>
          <el-button type="danger" @click="deleteParallelTask" :disabled="!isShowDel">删除</el-button>
          <el-button @click="addParallelTaskDialogVisible = false">取消</el-button>

        </template>
      </el-dialog>

    </el-container>

  </el-scrollbar>
</template>

<script setup>
import { reactive, ref, onMounted, computed } from 'vue'
import { ElMessage, ElScrollbar } from 'element-plus'
import { useRoute } from 'vue-router';
import flowFrame from './flow-frame.vue'
import {describeApplications} from "@/api/cicd/applications";

const taskGrid = ref([[]]);
const route = useRoute();
const addParallelTaskDialogVisible = ref(false)
const parallelTaskTitle = ref('添加任务')
const index_X = ref(-1)
const index_Y = ref(-1)
const isEditTask = ref(false); // 是否在编辑已有阶段

// 从查询参数中获取 id、name 和 gitUrl
const appId = route.query.appId;
const name = route.query.name;
const gitUrl = route.query.gitUrl;

// 表单数据模型
const pipelineInfo = reactive({
  name: '',
  environment: ''
})

const repositoryInfo = reactive({
  url: '',
  defaultBranch: '',
  voucherType: 1,
  branch: '',
  codeSourceStatus: 0
})

const tasks = ref([]) // 存储任务列表
const newTask = reactive({ name: '', params: [] }) // 临时任务对象
const addTaskDialogVisible = ref(false) // 控制添加阶段弹窗的显示
const repositoryDialogVisible = ref(false) // 控制关联代码库弹窗的显示

// 在页面加载时设置 repositoryInfo.url 为 gitUrl
onMounted(async () => {
  // repositoryInfo.url = gitUrl || ''; // 如果 gitUrl 存在则设置为默认值
  await loadAppDetails(); // 确保调用接口

})
const currentTaskIndex = ref(-1);

// 打开关联代码库弹窗
const linkRepository = () => {
  repositoryDialogVisible.value = true
}
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
const handleCircleClick = (x, y) => {
  isShowDel.value = true
  addParallelTaskDialogVisible.value = true
}

const editTask = (x, y) => {
  isShowDel.value = true
  addTaskDialogVisible.value = true

}

const isShowDel = ref(false)
const createTask = (taskGroup, task, x, y) => {
  isShowDel.value = false
  index_X.value = x
  index_Y.value = ++y
  addParallelTaskDialogVisible.value = true

}

// 确认关联代码库
const confirmRepository = () => {
  if (repositoryInfo.url && repositoryInfo.defaultBranch) {
    // 将弹窗填写的 Git 地址和分支更新到主界面显示
    repositoryInfo.branch = repositoryInfo.defaultBranch; // 更新主界面显示的分支
    repositoryDialogVisible.value = false; // 关闭弹窗
    ElMessage.success('关联代码库成功');
  } else {
    ElMessage.error('请填写完整信息');
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


  console.log("deleteParallelTask", index_X.value, index_Y.value)
  // 从 taskGrid 中删除指定的任务
  // if (taskGrid.value[index_X.value] && taskGrid.value[index_X.value][index_Y.value]) {
  //   taskGrid.value[index_X.value].splice(index_Y.value, 1);

  //   // 如果当前组为空，可以选择删除整个组
  //   if (taskGrid.value[index_X.value].length === 0) {
  //     taskGrid.value.splice(index_X.value, 1);
  //   }

  //   if (index_Y.value > 0) {
  //     taskGrid.value[index_X.value][index_Y.value - 1] = { isFlowShow: true, transformIndex: Date.now(), isShowwAdd: true, ishowHeader: (index_Y.value - 1) == 0 ? true : false };
  //   }
  //   ElMessage.success('任务已删除');
  //   addParallelTaskDialogVisible.value = false
  //   // if (taskGrid.value[index_X.value].length === 0) {
  //   //   // 如果当前组没有任务，则从 taskGrid 中删除该组
  //   //   taskGrid.value.splice(index_X.value, 1);
  //   //   index_X.value = -1; // 可以重置为无效值或其他逻辑
  //   //   index_Y.value = -1; // 可以重置为无效值或其他逻辑
  //   // } else {
  //   //   // 如果当前组仍有任务，更新 index_Y
  //   //   index_Y.value = Math.min(indexY.value, taskGrid.value[index_X.value].length - 1); // 确保 index_Y 在有效范围内
  //   // }
  //   if (taskGrid.value[index_X.value].length === 0) {
  //     taskGrid.value.splice(index_X.value, 1);
  //     index_X.value = 0; // 重置为无效值
  //     index_Y.value = 0;
  //   } else {
  //     // 更新 index_Y
  //     index_Y.value = Math.min(index_Y.value, taskGrid.value[index_X.value].length - 1);
  //   }



  // } else {
  //   ElMessage.error('任务未找到');
  // }

  if (index_Y.value > 0) {
    taskGrid.value[index_X.value][index_Y.value - 1] = { isFlowShow: true, transformIndex: Date.now(), isShowwAdd: true, ishowHeader: (index_Y.value - 1) == 0 ? true : false };
  }else if (index_Y.value == 0) {
    taskGrid.value[index_X.value][index_Y.value ] = { isFlowShow: true, transformIndex: Date.now(), isShowwAdd: true, ishowHeader: true };
  }
  if (taskGrid.value[index_X.value] && taskGrid.value[index_X.value][index_Y.value]) {
    // 删除指定的任务
    taskGrid.value[index_X.value].splice(index_Y.value, 1);

    // 如果当前组为空，删除整个组
    if (taskGrid.value[index_X.value].length === 0) {
      // 删除该组
      taskGrid.value.splice(index_X.value, 1);


      // 更新 index_X，确保指向有效的索引
      if (taskGrid.value.length === 0) {

        index_X.value = -1; // 如果没有任务组，重置为无效值
        index_Y.value = -1; // 同理
      } else {

        // 如果删除之后还有任务组，更新 index_X
        index_X.value = Math.max(0, index_X.value - 1); // 指向删除后组的上一个索引
        index_Y.value = Math.min(index_Y.value, taskGrid.value[index_X.value].length - 1); // 确保 index_Y 指向有效的列
      }
    } else {

      // 更新 index_Y
      index_Y.value = Math.min(index_Y.value, taskGrid.value[index_X.value].length - 1);
    }



    ElMessage.success('任务已删除');
    addParallelTaskDialogVisible.value = false;
  } else {
    ElMessage.error('任务未找到');
  }
};



// 打开添加阶段弹窗
const openAddTaskDialog = (index = -1) => {
  isEditTask.value = true;
  addTaskDialogVisible.value = true
  index_X.value = 0;
  index_Y.value = 0;
}

const openAddTaskDialogFlow = (x, y) => {
  addTaskDialogVisible.value = true
  index_X.value = ++x;
  index_Y.value = y;
}
const loadAppDetails = async () => {
  console.log(appId)
  console.log("================================")
  try {
    const res = await describeApplications(appId); // 调用接口
    if (res.code === 0 && res.data) {
      repositoryInfo.url = res.data.gitRepo || ''; // 填充代码库地址
      repositoryInfo.defaultBranch = res.data.branch || 'main'; // 填充默认分支
    } else {
      ElMessage.error(res.msg || '获取应用详情失败');
    }
  } catch (error) {
    console.error('加载应用详情失败:', error);
    ElMessage.error('加载应用详情失败，请稍后重试');
  }
};

// 确认添加任务
const confirmAddTask = () => {
  if (newTask.name) {
    tasks.value.push({ ...newTask })
    newTask.name = ''
    newTask.params = [] // 重置参数
    addTaskDialogVisible.value = false

    if (!taskGrid.value[index_Y.value]) {
      taskGrid.value[index_Y.value] = []; // 如果行不存在，则创建新的空行
    }
    if (!taskGrid.value[index_X.value]) {
      taskGrid.value[index_X.value] = []; // 如果行不存在，则创建新的空行
    }

    // 确保列存在
    if (!taskGrid.value[index_X.value][index_Y.value]) {
      taskGrid.value[index_X.value][index_Y.value] = { isFlowShow: true, transformIndex: 0, isShowwAdd: true, ishowHeader: true }; // 在指定位置添加一个子组件
    }

    ElMessage.success('新阶段已添加')
  } else {
    ElMessage.error('请填写阶段名称')
  }
}


const confirmAddParallelTask = () => {


  addParallelTaskDialogVisible.value = false

  if (!taskGrid.value[index_Y.value]) {
    taskGrid.value[index_Y.value] = []; // 如果行不存在，则创建新的空行
  }
  if (!taskGrid.value[index_X.value]) {
    taskGrid.value[index_X.value] = []; // 如果行不存在，则创建新的空行
  }

  // 确保列存在
  if (!taskGrid.value[index_X.value][index_Y.value]) {
    taskGrid.value[index_X.value][index_Y.value] = { isFlowShow: true, transformIndex: Date.now(), isShowwAdd: true, ishowHeader: false }; // 在指定位置添加一个子组件
    taskGrid.value[index_X.value][index_Y.value - 1] = { isFlowShow: true, transformIndex: Date.now(), isShowwAdd: false, ishowHeader: (index_Y.value - 1) == 0 ? true : false };
  }



  ElMessage.success('并行任务已添加')

}


// 添加自定义参数
const addParam = () => {
  newTask.params.push({ name: '', defaultValue: '' })
}

const addFlowFrame = () => {
  tasks.value.push({ name: '', defaultValue: '' })
}

// 删除自定义参数
const removeParam = (index) => {
  newTask.params.splice(index, 1)
}

// 删除任务
const removeTask = (index) => {
  tasks.value.splice(index, 1)
}

// 保存流水线
const savePipeline = () => {
  ElMessage.success('流水线已保存')
}

// 取消操作
const cancel = () => {
  ElMessage.info('操作已取消')
}
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
  color: #409EFF;
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
  color: #409EFF;
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
  flex: 1
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
</style>
