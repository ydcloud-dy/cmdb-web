<template>
  <div>
    <el-table ref="multipleTable" :data="tableData" style="width: 100%" tooltip-effect="dark" row-key="ID">
      <el-table-column type="selection" width="55" />
      <el-table-column align="left" label="名称" prop="metadata.name">
        <template #default="scope">
          <span class="operate-span-primary" @click="handleDetail(scope.row)">{{ scope.row.metadata.name }}</span>
        </template>
      </el-table-column>
      <el-table-column
          label="备份状态"
          prop="schedule"
          type="scope"
      >
        <template #default="scope">
          <span>{{ scope.row.status.phase }}</span>
        </template>
      </el-table-column>
      <el-table-column
          label="开始时间"
          prop="startTime"
          type="scope"
      >
        <template #default="scope">
          {{ scope.row.status.startTimestamp }}
        </template>
      </el-table-column>
      <el-table-column
          label="结束时间"
          prop="endTime"
          type="scope"
      >
        <template #default="scope">
          {{ scope.row.status.completionTimestamp }}
        </template>
      </el-table-column>
      <el-table-column
          label="过期时间"
          prop="expiration"
          type="scope"
      >
        <template #default="scope">
          {{ scope.row.status.expiration }}
        </template>
      </el-table-column>
      <el-table-column
          label="包含的命名空间"
          prop="includedNamespaces"
          type="scope"
      >
        <template #default="scope">
          <div v-for="(item, index) in scope.row.spec.includedNamespaces" :key="index">
            <span>{{ item }}<span v-if="index < scope.row.spec.includedNamespaces.length - 1">,</span></span>
          </div>
        </template>
      </el-table-column>
      <el-table-column
          label="包含的资源类型"
          prop="includedResources"
          type="scope"
      >
        <template #default="scope">
          <div v-if="scope.row.spec.includedResources && scope.row.spec.includedResources.length > 0">
            <div v-for="(item, index) in scope.row.spec.includedResources" :key="index">
              <span>{{ item }}<span v-if="index < scope.row.spec.includedResources.length - 1">,</span></span>
            </div>
          </div>
          <div v-else>
            <span>*</span>
          </div>
        </template>
      </el-table-column>

      <el-table-column
          label="创建时间"
          prop="creationTimestamp"
          type="scope"
      >
        <template #default="scope">
          {{ scope.row.metadata.creationTimestamp }}
        </template>
      </el-table-column>
      <el-table-column
          label="存储位置"
          prop="endpoint"
          type="scope"
      >
        <template #default="scope">
        </template>
      </el-table-column>
      <el-table-column label="命名空间" prop="selector">
        <template #default="scope">
          <el-tag v-for="(value,key,index) in scope.row.spec.selector" :key="index" type="info">
            {{ key }}={{ value }}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column align="left" label="操作">
        <template #default="scope">
          <el-button size="small" type="primary" link icon="edit" @click="handleUpdateYAML(scope.row)">YAML</el-button>
          <el-button size="small" type="primary" link icon="edit" @click="handleReduction(scope.row)">还原</el-button>
          <el-popover v-model="scope.row.visible" placement="top">
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
  name: 'RecordTable',
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



// YAML更新
const handleUpdateYAML = (value) => {
  emit('yaml_update', value)
}
const handleReduction = (value) => {
  console.log("还原拉")
  console.log(value)
  emit('reduction', value)
}// 删除
const handleDelete = (value) => {
  emit('delete', value)
}

// 详情
const handleDetail = (value) => {
  // emit('detail', value)
}

</script>
<style scoped>
.operate-span-primary {
  color: var(--el-color-primary);
  cursor: pointer;
  font-weight:bold;
}
</style>
