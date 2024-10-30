<template>
  <el-container style="height: 100vh;">
    <!-- 左侧主机列表 -->
    <el-aside width="300px" class="aside-hosts">
      <el-input
          v-model="searchQuery"
          placeholder="搜索主机 IP"
          @input="filterHosts"
          clearable
          class="search-input"
      />
      <el-tree
          :data="filteredHosts"
          :props="defaultProps"
          node-key="id"
          highlight-current
          @node-click="handleNodeClick"
          :expand-on-click-node="false"
          :load="loadHosts"
          lazy
          class="host-tree"
      />
    </el-aside>

    <!-- 右侧终端连接 -->
    <el-container style="height: 100%">
      <el-main style="padding: 0; display: flex; flex-direction: column; height: 100%;"> <!-- 占满高度 -->
        <div v-if="selectedHost">
          <p>正在连接到 {{ selectedHost.ip }}...</p>
          <div id="terminal" class="terminal-output"></div> <!-- 替换掉 iframe -->
        </div>
        <div v-else>
          <p>请选择一个主机进行连接</p>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>
<script setup>
import { ref, nextTick, onMounted } from 'vue';
import { getCmdbProjectsList } from '@/api/cmdb/cmdbProjects';
import { getCmdbHostsList, TerminalCmdbHosts } from '@/api/cmdb/cmdbHosts'; // 引入 WebSocket 方法
import { Terminal } from 'xterm'; // 引入 xterm.js
import 'xterm/css/xterm.css'; // 引入 xterm 的样式

// 存储项目和主机数据
const projects = ref([]);
const searchQuery = ref('');
const filteredHosts = ref([]); // 用于展示的主机数据
const selectedHost = ref(null);
let terminalConnection = null; // WebSocket 连接实例
let xterm = null; // xterm 实例
let commandBuffer = ''; // 用于存储当前输入的命令

// 树形组件的属性配置
const defaultProps = {
  children: 'children', // 定义子节点
  label: 'label', // 定义显示的字段
  isLeaf: 'isLeaf', // 表示是否是叶子节点
};

// 获取项目列表
const GetvirtualMachineTree = async () => {
  const res = await getCmdbProjectsList({ page: 1, pageSize: 100 });
  if (res.code === 0) {
    projects.value = res.data.list.map((project) => ({
      id: project.ID,
      label: project.name,
      children: [],
      isLeaf: false,
    }));
    filteredHosts.value = projects.value;
  }
};

// 动态加载主机列表
const loadHosts = async (node, resolve) => {
  if (node.level === 0) {
    resolve(projects.value);
  } else if (node.level === 1) {
    const res = await getCmdbHostsList({ page: 1, pageSize: 100, project: node.data.id });
    if (res.code === 0) {
      const hosts = res.data.list.map((host) => ({
        id: host.ID,
        label: host.serverHost,
        isLeaf: true,
      }));
      resolve(hosts);
    } else {
      resolve([]);
    }
  }
};

// 当点击主机节点时，连接到该主机
const handleNodeClick = (node) => {
  if (node.isLeaf) {
    selectedHost.value = { ip: node.label };

    // 在下一次 DOM 更新完成后初始化 xterm.js 终端
    nextTick(() => {
      // 初始化 xterm.js 终端
      const height = window.innerHeight - 140;
      const width = window.innerWidth - 230;

      if (!xterm) {
        xterm = new Terminal({
          // rows: 24, // 终端行数
          rows: parseInt(height/17, 10),		// one row = 17px
          cols: 200, // 终端列数
          cursorStyle: 'block', // 设置光标样式为块状
          cursorBlink: true, // 光标闪烁
          scrollback: 1000, // 回滚的行数
          theme: {
            background: '#000000', // 背景色
            foreground: '#ffffff'  // 字体颜色
          }
        });
        xterm.open(document.getElementById('terminal')); // 将 xterm 绑定到前端

      }

      // 清空终端内容
      xterm.clear();

      // 使用 WebSocket 连接到后端的终端
      terminalConnection = TerminalCmdbHosts(node.label, (message) => {
        console.log(message,"00000000")
        // 处理换行符，确保每个输出行正确显示
        // 只保留 \r，并移除 \n，防止光标跳到下一行
        const processedMessage = message.replace(/\r?\n/g, '\r\n');
        xterm.write(processedMessage);
        // xterm.write(message.replace(/\n/g, '\r\n'));
      });

// 监听用户输入
      xterm.onData((data) => {
        if (data === '\r') {
          // 当按下回车键时，显示完整命令并发送到服务器
          xterm.write('\r\n');  // 显示回车后的空行
          terminalConnection.sendCommand(commandBuffer + '\n');
          commandBuffer = ''; // 清空缓冲区
        } else if (data === '\u007f') {
          // 处理退格键
          if (commandBuffer.length > 0) {
            commandBuffer = commandBuffer.slice(0, -1);
            xterm.write('\b \b');  // 在终端上模拟删除字符
          }
        } else {
          // 将输入的命令显示到终端上，并存入缓冲区
          commandBuffer += data;
          xterm.write(data);  // 显示用户输入
        }
      });


    });
  }
};

// 搜索并过滤主机
const filterHosts = () => {
  if (!searchQuery.value) {
    filteredHosts.value = projects.value;
  } else {
    const filter = (node) => {
      return node.label.includes(searchQuery.value);
    };

    const filterTree = (nodes) => {
      return nodes
          .map((node) => {
            const children = node.children ? filterTree(node.children) : [];
            if (filter(node) || children.length) {
              return { ...node, children };
            }
          })
          .filter((node) => node);
    };

    filteredHosts.value = filterTree(projects.value);
  }
};

onMounted(() => {
  GetvirtualMachineTree();
});
</script>

<style scoped>
.aside-hosts {
  background-color: #333;
  padding: 20px;
  color: #fff;
}

.search-input {
  margin-bottom: 20px;
}

.host-tree .el-tree-node__content {
  color: #fff;
}

.el-tree-node__content:hover {
  background-color: #444 !important;
}

.terminal-container {
  height: 600px;
  background-color: black;
  overflow-y: auto;
  padding: 10px;
  font-family: monospace;
}
.terminal-output {
  flex-grow: 1;
  height: 100%;
  width: 100%;
  background-color: black;
  color: white;
}
html, body {
  height: 100%;
  margin: 0;
  padding: 0;
}
.el-container {
  height: 100%;
}
.el-aside {
  height: 100%;
}

.el-main {
  height: 100%;
  display: flex;
  flex-direction: column;
}
#terminal {
  flex-grow: 1;
  width: 100%;
  height: 100%;
  background-color: black;
  color: white;
}
/*.xterm-screen{*/
/*  min-height: calc(100vh);*/
/*}*/
</style>
