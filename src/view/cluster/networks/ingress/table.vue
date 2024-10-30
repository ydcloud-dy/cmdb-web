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
      <el-table-column
        label="命名空间"
        prop="namespace"
        type="scope"
      >
        <template #default="scope">
          <span>{{ scope.row.metadata.namespace }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="端点"
        prop="loadBalancer"
        type="scope"
      >
        <template #default="scope">
          <div v-if="scope.row.status.loadBalancer.ingress">
            <div v-for="item in scope.row.status.loadBalancer.ingress" :key="item.index">
              <span style="float: left">{{ item.ip }}</span>
            </div>
          </div>
        </template>
      </el-table-column>
      <el-table-column
        label="规则"
        prop="loadBalancer"
        type="scope"
      >
        <template #default="scope">
          <div v-if="scope.row.spec.rules">
            <div v-for="item in scope.row.spec.rules" :key="item.index">
              <div v-for="pts in item.http.paths" :key="pts.index">
                <span class="operate-span-primary" @click="handleOpenHost(item.host+pts.path)"> {{ item.host }}{{ pts.path }}</span>
                <span>  ->  </span>
                <span>  {{ pts.backend.serviceName }}:{{ pts.backend.servicePort }}</span>
              </div>
            </div>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="存活时间" prop="metadata.creationTimestamp" width="180">
        <template #default="scope">
          <span>{{ AgeFormat(scope.row.metadata.creationTimestamp) }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template #default="scope">
          <el-button size="small" type="primary" link icon="edit" @click="handleUpdateYAML(scope.row)">YAML</el-button>
          <el-button size="small" type="primary" link icon="edit" @click="handleUpdate(scope.row)">编辑</el-button>          <el-popover v-model="scope.row.visible" placement="top">
            <p>确定要删除吗？</p>
            <div style="text-align: right; margin-top: 8px;">
              <el-button size="small" type="primary" link @click="scope.row.visible = false">取消</el-button>
              <el-button type="primary" size="small" @click="handleDelete(scope.row)">确定</el-button>
            </div>
            <template #reference>
              <el-button type="primary" link icon="delete" size="small" @click="scope.row.visible = true">删除</el-button>
            </template>
          </el-popover>
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
    detail: () => {
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
import { AgeFormat } from '@/utils/age'
const emit = defineEmits(['update', 'delete', 'search', 'detail', 'yaml_update'])
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

// YAML更新
const handleUpdateYAML = (value) => {
  emit('yaml_update', value)
}

// 删除
const handleDelete = (value) => {
  emit('delete', value)
}

// 详情
const handleDetail = (value) => {
  emit('detail', value)
}

// 打开地址
const handleOpenHost = (value) => {
  window.open('http://' + value)
}
</script>
<style scoped>
   .operate-span-primary {
     color: var(--el-color-primary);
     cursor: pointer;
     font-weight:bold;
   }
</style>
