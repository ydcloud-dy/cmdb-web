<template>
  <div>
    <el-table ref="multipleTable" :data="tableData" style="width: 100%" tooltip-effect="dark" row-key="ID">
      <el-table-column type="selection" width="55" />
      <el-table-column align="left" label="名称" prop="metadata.name" />
      <el-table-column label="标签" prop="metadata.labels" width="300px" type="scope">
        <template #default="scope">
          <div v-for="(k, v, index) in scope.row.metadata.labels" :key="index">
            <span class="span-color-span" type="info">{{ k }}: {{ v }}</span>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="状态" prop="status.phase" type="scope">
        <template #default="scope">
          <el-tag v-if="scope.row.status.phase ==='Active'" type="success">Active</el-tag>
          <el-tag v-else type="danger">{{ scope.row.status.phase }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column align="left" label="存活时间" prop="metadata.creationTimestamp" width="180">
        <template #default="scope">
          <span>{{ AgeFormat(scope.row.metadata.creationTimestamp) }}</span>
        </template>
      </el-table-column>
      <el-table-column align="left" label="操作">
        <template #default="scope">
          <el-button size="small" type="primary" link icon="edit" @click="handleUpdate(scope.row)">编辑</el-button>
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
  name: 'TableBlock',
  emits: {
    update: () => {
      return true
    },
    search: () => {
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
const emit = defineEmits(['update', 'delete', 'search'])
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

</script>
<style scoped>
  .span-color-span {
    border-radius: 15px 15px 15px 15px;
    background: #f1f1f1;
    position: relative;
    margin: 2px;
    color: #06C;
    cursor: pointer;
  }
</style>
