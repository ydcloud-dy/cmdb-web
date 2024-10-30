<template>
  <el-row style="height: 100vh;">
    <!-- 左侧执行详情 -->
    <el-col :span="4" class="execution-details">
      <el-card>
        <!-- 返回按钮 -->
        <el-button @click="goBack" type="text" class="back-button">
          <i class="el-icon-arrow-left"></i> 执行详情
        </el-button>

        <div class="execution-summary">
          <!-- 所有主机 -->
          <el-button type="primary" plain @click="filterResults('all')" class="summary-button">
            <el-badge :value="allHosts.length" class="badge">All</el-badge>
          </el-button>
          <el-button type="success" plain @click="filterResults('success')" class="summary-button">
            <el-badge :value="successHosts.length" class="badge">成功</el-badge>
          </el-button>

          <el-button type="danger" plain @click="filterResults('failure')" class="summary-button">
            <el-badge :value="failureHosts.length" class="badge">失败</el-badge>
          </el-button>
        </div>
      </el-card>

      <!-- 主机列表 -->
      <el-card style="margin-top: 20px;">
        <el-menu default-active="1" class="host-menu">
          <el-menu-item
              v-for="(host, index) in filteredHosts"
              :key="index"
              @click="selectHost(host)"
              :class="{'selected-host': selectedHost === host}"
          >
            <span v-if="successHosts.includes(host)" style="color: green;">✔</span>
            <span v-else-if="failureHosts.includes(host)" style="color: red;">✘</span>
            {{ host }}
          </el-menu-item>
        </el-menu>
      </el-card>
    </el-col>

    <!-- 右侧执行日志显示 -->
    <el-col :span="20" class="execution-log">
      <el-card>
        <h3>{{ selectedHost }}</h3>
        <pre v-html="formattedLog"></pre>
      </el-card>
    </el-col>
  </el-row>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router'; // 导入 useRouter

// 获取 router 实例
const router = useRouter();

// 返回按钮的功能
const goBack = () => {
  router.back(); // 返回上一页
};

// 执行记录的状态
const allHosts = ref([]); // 所有的主机列表
const successHosts = ref([]); // 成功的主机列表
const failureHosts = ref([]); // 失败的主机列表
const executionLogs = ref([]); // 执行日志
// 获取执行记录
const getExecuteResults = () => {
  const executeResult = sessionStorage.getItem('executeResult');
  if (executeResult) {
    try {
      const data = JSON.parse(executeResult);
      allHosts.value = data.allHosts || [];
      successHosts.value = data.successHosts || [];
      failureHosts.value = data.failureHosts || [];
      executionLogs.value = data.executionLogs || [];
    } catch (error) {
      console.error('解析执行结果时出错:', error);
      sessionStorage.removeItem('executeResult'); // 如果解析失败，移除无效数据
    }
  } else {
    console.error("没有找到执行结果数据");
  }
};

// 页面加载时调用
onMounted(() => {
  getExecuteResults();
});

// 其他状态
const selectedHost = ref('');
const selectedLog = ref('');
const filter = ref('all');

// 过滤后的主机
const filteredHosts = ref(allHosts.value);

// 选择主机时，展示对应的执行日志
const selectHost = (host) => {
  selectedHost.value = host;
  // 查找与选中主机匹配的日志条目
  const logEntry = executionLogs.value.find(log => log.host.startsWith(host));

  if (logEntry) {
    // 优先显示 error 信息，如果存在则显示错误，否则显示输出
    selectedLog.value = logEntry.error ? logEntry.error : logEntry.output;
  } else {
    selectedLog.value = '无日志';  // 如果未找到日志，显示“无日志”
  }
};

// 过滤函数
const filterResults = (type) => {
  filter.value = type;
  if (type === 'all') {
    filteredHosts.value = allHosts.value;
  } else if (type === 'success') {
    filteredHosts.value = successHosts.value;
  } else if (type === 'failure') {
    filteredHosts.value = failureHosts.value;
  }
};

// 代码格式化日志
const formattedLog = computed(() => {
  return selectedLog.value
      .replace(/### (.*?)\n/g, '<span style="color: cyan">### $1</span>\n')
      .replace(/\*\* (.*?) \*\*/g, '<span style="color: green">** $1 **</span>\n')
      .replace(/(test.tar.gz)/g, '<span style="color: red">$1</span>');
});
</script>


<style scoped>
.execution-summary {
  display: flex;
  justify-content: space-around;
  margin-bottom: 10px;
}

.execution-log {
  padding: 20px;
}

.host-menu {
  margin-top: 10px;
}

.back-button {
  margin-bottom: 20px;
  font-size: 14px;
}

.selected-host {
  background-color: #e6f7ff; /* 选中项的背景颜色 */
  font-weight: bold; /* 加粗字体 */
  color: #409EFF; /* 改变文字颜色 */
}

.summary-button {
  margin-right: 0px; /* 添加按钮之间的间距 */
  display: flex;
  align-items: center;
}

.badge {
  margin-left: 8px; /* 调整 badge 的位置 */
}

pre {
  background-color: #2e2e2e;
  color: #fff;
  padding: 20px;
  border-radius: 10px;
  font-size: 14px;
  white-space: pre-wrap;
}
</style>
