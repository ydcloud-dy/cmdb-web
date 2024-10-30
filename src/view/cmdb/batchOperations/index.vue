<template>
  <el-row :gutter="20" style="padding: 20px;">
    <el-col :span="18">
      <!-- 目标主机 -->
      <el-card>
        <div slot="header" class="clearfix">
          <span>目标主机</span>
          <!-- 动态显示按钮内容，已选择多少主机 -->
          <el-button v-if="selectedHosts.length === 0" style="float: right;" type="primary" plain @click="openHostDialog">
            添加目标主机
          </el-button>
          <el-button v-else style="float: right;" type="primary" plain @click="openHostDialog">
            已选择 {{ selectedHosts.length }} 台主机
          </el-button>
        </div>

        <!-- 执行命令 -->
        <el-card style="margin-top: 20px;">
          <div slot="header" class="clearfix">
            <span>执行命令</span>
          </div>
          <!-- Tab for Shell and Python -->
          <el-tabs v-model="activeTab">
            <el-tab-pane label="Shell" name="shell">
              <CodeEditor v-model:value="shellCommand" language="shell" />
            </el-tab-pane>
            <el-tab-pane label="Python" name="python">
              <CodeEditor v-model:value="pythonCommand" language="python" />
            </el-tab-pane>
          </el-tabs>
          <el-button style="margin-top: 10px" type="primary" icon="el-icon-lightning" @click="executeCommand">
            开始执行
          </el-button>
        </el-card>
      </el-card>
    </el-col>

    <!-- 执行记录 -->
    <el-col :span="6">
      <el-card>
        <div slot="header">
          <span>执行记录</span>
        </div>
        <div class="execution-log">
          <el-list>
            <el-list-item v-for="(log, index) in executionLogs" :key="index">
              <div class="log-item">
                <!-- 显示执行状态、命令和时间 -->
                <el-tag :type="log.status === 'success' ? 'success' : 'danger'" size="small">{{ log.status }}</el-tag>
                <span class="log-content">{{ log.command }}</span>
                <span class="log-timestamp">{{ log.timestamp }}</span>
              </div>
            </el-list-item>
          </el-list>
        </div>
      </el-card>
    </el-col>

    <!-- 主机选择对话框 -->
    <el-dialog title="主机列表" v-model="dialogVisible" width="800px">
      <el-row :gutter="20" style="align-items: stretch;">
        <el-col :span="6">
          <!-- 资源分布 -->
          <el-card style="height: 100%;">
            <div slot="header" class="clearfix">
              <span>资源分布</span>
            </div>
            <el-menu :default-active="activeResource" @select="handleResourceSelect">
              <el-menu-item v-for="resource in resourceList" :key="resource.ID" :index="resource.ID">
                {{ resource.name }}
              </el-menu-item>
            </el-menu>
          </el-card>
        </el-col>

        <el-col :span="18">
          <!-- 表格 -->
          <el-card style="height: 100%;">
            <div>已选择 {{ selectedHosts.length }} 台主机</div>
            <el-button v-if="selectedHosts.length > 0" type="text" @click="clearSelection">取消选择</el-button>
            <el-table
                ref="hostTable"
                :data="resourceData"
                border
                @selection-change="handleSelectionChange"
                :default-selection="selectedHosts"
                height="400"
            >
              <el-table-column type="selection" width="55"></el-table-column>
              <el-table-column prop="name" label="主机名称" width="150"></el-table-column>
              <el-table-column prop="serverHost" label="IP地址" width="200">
                <template #default="scope">
                  <el-tag>{{ scope.row.serverHost }}</el-tag>
                </template>
              </el-table-column>
              <el-table-column prop="note" label="备注信息"></el-table-column>
            </el-table>
          </el-card>
        </el-col>
      </el-row>

      <!-- 对话框底部 -->
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="confirmSelection">确定</el-button>
        </span>
      </template>
    </el-dialog>
  </el-row>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import CodeEditor from '@/components/codeMirrorEditor/CodeMirrorEditor.vue';
import { getCmdbHostsList } from '@/api/cmdb/cmdbHosts';
import { getCmdbProjectsList } from '@/api/cmdb/cmdbProjects';
import { executeCommands, executeRecords } from "@/api/cmdb/batchOperations"; // 导入新的API
import { useRouter } from "vue-router";
import { ElMessage } from "element-plus";
const router = useRouter()

// 声明 reactive state
const activeTab = ref('shell');
const shellCommand = ref('echo "Hello, Shell!"'); // 示例 Shell 命令
const pythonCommand = ref('print("Hello, Python!"'); // 示例 Python 命令
const executionLogs = ref([]); // 动态获取执行日志数据
const hostTable = ref(null);

const dialogVisible = ref(false); // 控制对话框的显示
const activeResource = ref(null); // 当前选择的资源

// 获取执行记录并更新 executionLogs
const getExecutionLogs = async () => {
  try {
    const res = await executeRecords(); // 调用 API 获取执行记录
    if (res.code === 0) {
      // 解析返回数据
      executionLogs.value = res.data.map((log) => ({
        command: log.Command,
        status: log.Status,
        timestamp: formatDate(log.CreatedAt) // 格式化时间
      }));
    } else {
      ElMessage.error("获取执行记录失败");
    }
  } catch (error) {
    console.error("获取执行记录时出错:", error);
    ElMessage.error("获取执行记录时发生错误");
  }
};
const formatDate = (isoDate) => {
  const date = new Date(isoDate);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');
  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
};
// 资源列表和主机数据
const resourceList = ref([]); // 从 getCmdbProjectsList 获取的资源列表
const resourceData = ref([]); // 从 getCmdbHostsList 获取的主机数据

// 处理主机表格的选择变化
const selectedHosts = ref([]); // 存储已选择的主机
const handleSelectionChange = (selection) => {
  selectedHosts.value = selection;
};

// 清空已选择的主机
const clearSelection = () => {
  if (hostTable.value) {
    hostTable.value.clearSelection(); // 清空表格中的所有选择
  }
  selectedHosts.value = [];
};

// 打开主机选择对话框
const openHostDialog = async () => {
  dialogVisible.value = true;
  await getResources();
};

// 获取资源列表
const getResources = async () => {
  try {
    const res = await getCmdbProjectsList();
    if (res.code === 0) {
      resourceList.value = res.data.list;
    }
  } catch (error) {
    console.error('获取资源列表失败:', error);
  }
};

// 处理资源选择并获取对应的主机列表
const handleResourceSelect = async (resourceId) => {
  activeResource.value = resourceId;
  await getHostsByResource(resourceId);
};

// 获取对应资源的主机数据
const getHostsByResource = async (resourceId) => {
  try {
    const res = await getCmdbHostsList({ project: resourceId, page: 1, pageSize: 10000000 });
    console.log(res);
    if (res.code === 0) {
      resourceData.value = res.data.list;
    }
  } catch (error) {
    console.error('获取主机列表失败:', error);
  }
};

// 确认选择的主机
const confirmSelection = () => {
  console.log('选中的主机: ', selectedHosts.value);
  dialogVisible.value = false;
};

// 执行命令
const executeCommand = async () => {
  if (selectedHosts.value.length === 0) {
    ElMessage({
      message: '请选择执行主机',
      type: 'warning',
    });
    return; // 如果没有选择主机，终止执行
  }

  let command = '';
  let commands = [];

  if (activeTab.value === 'shell') {
    command = shellCommand.value;
  } else if (activeTab.value === 'python') {
    command = pythonCommand.value;
  }

  if (command.trim() !== '') {
    commands.push(command);

    // 构造请求数据
    const requestData = {
      hosts: selectedHosts.value.map(host => host.serverHost),
      users: selectedHosts.value.map(host => host.username),
      ports: selectedHosts.value.map(host => host.port),
      commands: commands,
      language: activeTab.value === 'shell' ? 'shell' : 'python',
    };

    try {
      const response = await executeCommands(requestData);

      if (response && response.data) {
        const successHosts = response.data.successHosts || [];
        const failureHosts = response.data.failureHosts || [];
        const executionLogs = response.data.executionLogs || [];
        const allHosts = response.data.allHosts || [];

        // 存储数据到 sessionStorage
        sessionStorage.setItem('executeResult', JSON.stringify({
          commands: requestData.commands,
          allHosts,
          successHosts,
          failureHosts,
          executionLogs
        }));

        // 跳转到结果页面，不使用 query 参数
        router.push({ name: 'executeResult' });
      }
    } catch (error) {
      console.error('执行命令时出错:', error);
    }

    // 清空输入框
    shellCommand.value = '';
    pythonCommand.value = '';
  }
};

// 获取资源列表初始化
onMounted(() => {
  getResources();
  getExecutionLogs(); // 页面加载时获取执行记录
});
</script>

<style scoped>
.el-menu-item {
  height: 30px;
  text-align: center; /* 文字居中 */
  padding: 10px 0; /* 调整内边距 */
}

.el-menu-item:hover {
  background-color: #2b2f3a; /* 鼠标悬浮时背景色 */
}

.execution-log {
  max-height: 400px;
  overflow-y: auto;
}

.log-item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

.log-content {
  flex: 1;
  margin-left: 10px;
}

.log-timestamp {
  color: #909399;
}

.dialog-footer {
  text-align: right;
}
</style>
