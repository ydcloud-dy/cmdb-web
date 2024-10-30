<template>
  <div>
    <el-table ref="multipleTable" :data="tableData" style="width: 100%" tooltip-effect="dark" row-key="ID">
      <el-table-column type="selection" width="55" />
      <el-table-column align="left" label="名称" prop="metadata.name">
        <template #default="scope">
          <span class="operate-span-primary" @click="handleDetail(scope.row)">{{ scope.row.metadata.name }}</span>
          <el-tooltip placement="top">
            <template #content>
              <div v-for="(v,k, i) in scope.row.metadata.labels" slot="content" :key="i">
                <span> {{ k }}: {{ v }}</span>
              </div>
            </template>
            <el-button size="small" type="primary" link icon="PriceTag" />
          </el-tooltip>
        </template>
      </el-table-column>
      <el-table-column label="Internal IP" prop="metadata.name" max-width="30px">
        <template #default="scope">
          <div v-for="(address,index) in scope.row.status.addresses" :key="index">
            <span v-if="address.type === 'InternalIP'">{{ address.address }}</span>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="状态" prop="status" type="scope">
        <template #default="scope">
          <el-tag v-if="handleNodeStatus(scope.row) ==='Ready'" type="success">Ready</el-tag>
          <el-tag v-else type="danger">{{ handleNodeStatus(scope.row) }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="角色" prop="metadata.labels" type="scope">
        <template #default="scope">
          <span>{{ handleNodeRole(scope.row.metadata.labels) }}</span>
        </template>
      </el-table-column>
      <el-table-column label="CPU用量" prop="cpuUsage" type="scope">
        <template #default="scope">
          <div>
            <div>
              <span>{{ scope.row.cpuUsagePersent }}%</span>
            </div>
            <div>
              <span>{{ CpuFormat(scope.row.cpuUsage) }} / {{ CpuFormat(scope.row.status.allocatable.cpu) }} 核</span>
            </div>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="内存用量" prop="memoryUsage" type="scope">
        <template #default="scope">
          <div>
            <div>
              <span>{{ scope.row.memoryUsagePersent }}%</span>
            </div>
            <div>
              <span>{{ giMemoryFormat(scope.row.memoryUsage) }} / {{ giMemoryFormat(scope.row.status.allocatable.memory) }} Gi</span>
            </div>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="版本" prop="version" type="scope" align="center" width="250">
        <template #default="scope">
          <div style="text-align: center">
            <span>{{ scope.row.status.nodeInfo.kubeletVersion }}</span><br>
            <span>{{ scope.row.status.nodeInfo.containerRuntimeVersion }}</span><br>
            <span>{{ scope.row.status.nodeInfo.osImage }}</span>
          </div>
        </template>
      </el-table-column>
      <el-table-column align="left" label="存活时间" prop="metadata.creationTimestamp" width="180">
        <template #default="scope">
          <span>{{ AgeFormat(scope.row.metadata.creationTimestamp) }}</span>
        </template>
      </el-table-column>
      <el-table-column align="left" label="操作">
        <template #default="scope">
          <el-form :inline="true" class="demo-form-inline">
            <el-form-item>
              <el-button size="small" type="primary" link icon="edit" @click="handleUpdate(scope.row)">编辑</el-button>
              <el-dropdown>
                <el-button type="primary" link icon="MoreFilled" size="small">更多</el-button>
                <template #dropdown>
                  <el-dropdown-menu>
                    <el-dropdown-item icon="InfoFilled" @click.native="handleDetail(scope.row)">详情</el-dropdown-item>
                    <el-dropdown-item icon="Expand" @click.native="handleShell(scope.row)">Shell</el-dropdown-item>
                    <el-dropdown-item icon="Monitor" @click.native="handleMonitor(scope.row)">监控</el-dropdown-item>
                    <el-dropdown-item icon="edit" @click.native="handleYAML(scope.row)">YAML</el-dropdown-item>
                    <el-dropdown-item icon="Crop" @click.native="handleDrain(scope.row)">节点排空</el-dropdown-item>
                    <el-dropdown-item icon="Setting" @click.native="handleSchedule(scope.row)">调度设置</el-dropdown-item>
<!--                    <el-dropdown-item icon="delete" @click.native="handleDelete(scope.row)">删除</el-dropdown-item>-->
                  </el-dropdown-menu>
                </template>
              </el-dropdown>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'TableBlock',
  emits: {
    update: () => {
      return true
    },
    search: () => {
      return true
    },
    drain: () => {
      return true
    },
    schedule: () => {
      return true
    },
    detail: () => {
      return true
    },
    yaml: () => {
      return true
    },
    monitor: () => {
      return true
    },
    shell: () => {
      return true
    },
    delete: (value) => {
      if (value.length === 1) {
        return true
      } else {
        return false
      }
    },
  }
}
</script>
<script setup>
import { AgeFormat } from '@//utils/age'
import { giMemoryFormat, CpuFormat } from '@/utils/unitConvert'
const emit = defineEmits(['update', 'delete', 'search', 'detail', 'schedule', 'drain', 'yaml', 'monitor', 'shell'])
defineProps({
  tableData: {
    default: function() {
      return []
    },
    type: Array
  },
})

// 更新
const handleUpdate = (value) => {
  emit('update', value)
}

// 删除
const handleDelete = (value) => {
  emit('delete', value)
}

// 节点状态
const handleNodeStatus = (value) => {
  console.log("node 状态::::::")
  console.log(value)
  let status = ''
  for (const condition of value.status.conditions) {
    if (condition.type === 'Ready') {
      if (condition.status === 'True') {
        status = 'Ready'
        break
      }else {
        status = condition.status
        break
      }
    }
  }

  if (value.spec.unschedulable) {
    status += ', SchedulingDisabled'
  }
  return status
}

// 节点角色
const handleNodeRole = (labels) => {
  if (!labels || typeof labels !== 'object') {
    return ''
  }
  const roleLabels = Object.keys(labels)
      .filter(key => key.includes('node-role.kubernetes.io'))
      .map(key => key.match(/([^/]+$)/)[0]) // all after last slash

  if (labels['kubernetes.io/role'] !== undefined) {
    roleLabels.push(labels['kubernetes.io/role'])
  } else {
    roleLabels.push('Worker')
  }
  return roleLabels.join(', ')
}

// 排空
const handleDrain = (value) => {
  emit('drain', value)
}

// 调度设置
const handleSchedule = (value) => {
  emit('schedule', value)
}

// 详情
const handleDetail = (value) => {
  console.log(value)
  console.log("namespace详情啊啊啊啊")
  emit('detail', value)
}

// YAML
const handleYAML = (value) => {
  emit('yaml', value)
}

// Monitor
const handleMonitor = (value) => {
  emit('monitor', value)
}

// Shell
const handleShell = (value) => {
  emit('shell', value)
}
</script>
<style scoped>
.el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}
.tooltip-base-box {
  width: 600px;
}
.tooltip-base-box .row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.tooltip-base-box .center {
  justify-content: center;
}
.tooltip-base-box .box-item {
  width: 110px;
  margin-top: 10px;
}
.operate-span-primary {
  color: var(--el-color-primary);
  cursor: pointer;
  font-weight:bold;
}
</style>
