<template>
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

          <!-- 显示添加的任务阶段，水平排列 -->
          <div v-for="(task, index) in tasks" :key="index" class="task-item">
            <div class="line"></div> <!-- 连接线 -->
            <div class="task-box">
              <span>#{{ index + 1 }} {{ task.name }}</span>
              <el-button type="text" icon="el-icon-error" class="error-icon" @click="removeTask(index)"></el-button>
              <el-button type="text" class="add-parallel-task">+ 新建并行任务</el-button>
            </div>
          </div>

          <!-- 添加阶段按钮 -->
          <div class="line-and-button">
            <span class="line"></span>
            <button class="add-task-icon" @click="openAddTaskDialog">+</button>
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
    <el-dialog :model-value="repositoryDialogVisible" title="关联代码库">
      <el-form :model="repositoryInfo" label-width="80px">
        <el-form-item label="代码库地址" required>
          <el-input v-model="repositoryInfo.url" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="分支" required>
          <el-select v-model="repositoryInfo.branch" placeholder="请选择分支">
            <el-option label="main" value="main"></el-option>
            <el-option label="dev" value="dev"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <template #footer>
        <el-button @click="repositoryDialogVisible = false">取消</el-button>
        <el-button type="primary" @click="confirmRepository">确认</el-button>
      </template>
    </el-dialog>

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
        <el-button type="primary" plain @click="addParam">+ 添加自定义参数</el-button>
      </el-form>
      <template #footer>
        <el-button @click="addTaskDialogVisible = false">取消</el-button>
        <el-button type="primary" @click="confirmAddTask">确认</el-button>
      </template>
    </el-dialog>
  </el-container>
</template>

<script setup>
import { reactive, ref, onMounted } from 'vue'
import { ElMessage } from 'element-plus'
import { useRoute } from 'vue-router';

const route = useRoute();

// 从查询参数中获取 id、name 和 gitUrl
const id = route.query.id;
const name = route.query.name;
const gitUrl = route.query.gitUrl;

// 表单数据模型
const pipelineInfo = reactive({
  name: '',
  environment: ''
})

const repositoryInfo = reactive({
  url: '',
  branch: ''
})

const tasks = ref([]) // 存储任务列表
const newTask = reactive({ name: '', params: [] }) // 临时任务对象
const addTaskDialogVisible = ref(false) // 控制添加阶段弹窗的显示
const repositoryDialogVisible = ref(false) // 控制关联代码库弹窗的显示

// 在页面加载时设置 repositoryInfo.url 为 gitUrl
onMounted(() => {
  repositoryInfo.url = gitUrl || ''; // 如果 gitUrl 存在则设置为默认值
})

// 打开关联代码库弹窗
const linkRepository = () => {
  repositoryDialogVisible.value = true
}

// 确认关联代码库
const confirmRepository = () => {
  if (repositoryInfo.url && repositoryInfo.branch) {
    repositoryDialogVisible.value = false
    ElMessage.success('关联代码库成功')
  } else {
    ElMessage.error('请填写完整信息')
  }
}

// 打开添加阶段弹窗
const openAddTaskDialog = () => {
  addTaskDialogVisible.value = true
}

// 确认添加任务
const confirmAddTask = () => {
  if (newTask.name) {
    tasks.value.push({ ...newTask })
    newTask.name = ''
    newTask.params = [] // 重置参数
    addTaskDialogVisible.value = false
    ElMessage.success('新阶段已添加')
  } else {
    ElMessage.error('请填写阶段名称')
  }
}

// 添加自定义参数
const addParam = () => {
  newTask.params.push({ name: '', defaultValue: '' })
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
.card-section {
  margin-bottom: 20px;
  padding: 20px;
}
.stage-task {
  display: flex;
  align-items: center;
  padding: 20px 0;
  gap: 10px;
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
.task-item {
  display: flex;
  align-items: center;
}
.task-box {
  display: flex;
  align-items: center;
  background-color: #f0f2f5;
  border: 1px solid #dcdfe6;
  padding: 5px 10px;
  border-radius: 5px;
}
.error-icon {
  color: #f56c6c;
}
.add-parallel-task {
  margin-left: 10px;
  color: #409EFF;
  cursor: pointer;
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
