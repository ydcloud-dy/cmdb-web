<template>
  <div>
    <el-table ref="multipleTable" :data="tableData" style="width: 100%;" tooltip-effect="dark" row-key="ID" @sort-change="sortChange">
      <el-table-column type="selection" width="55" />
      <el-table-column align="left" width="455" label="实例ID / 名称" sortable="custom" prop="instance_id">
        <template #default="scope">
          <div style="text-align: left">
            <el-button class="operate-button-primary" link>{{ scope.row.instance_id }}</el-button>
            <el-button size="small" type="primary" link icon="DocumentCopy" @click="copyText(scope.row.instance_id)" />
            <el-button link>{{ scope.row.name }}</el-button>
            <el-button size="small" type="primary" link icon="DocumentCopy" @click="copyText(scope.row.name)" />
          </div>
        </template>
      </el-table-column>
      <el-table-column label="状态" width="95" prop="status" sortable="custom" type="scope">
        <template #default="scope">
          <el-button v-if="scope.row.status ==='运行中'" size="small" link type="success">{{ scope.row.status }}</el-button>
          <el-button v-else size="small" link type="danger">{{ scope.row.status }}</el-button>
        </template>
      </el-table-column>
      <el-table-column width="95" label="操作系统" prop="os_type" type="scope" sortable="custom">
        <template #default="scope">
          <el-tooltip placement="top" class="box-item" effect="dark">
            <template #content>
              <div slot="content">
                {{ scope.row.os }}
              </div>
            </template>
            <el-button link> {{ scope.row.os_type }} </el-button>
          </el-tooltip>
        </template>
      </el-table-column>
      <el-table-column align="left" width="115" label="可用区" prop="region_name" />
      <el-table-column align="left" width="115" label="配置" type="scope">
        <template #default="scope">
          <div style="text-align: left">
            <span v-if="scope.row.cpu !== ''" class="custom-span">{{ scope.row.cpu }} vCPU</span>
            <span v-if="scope.row.memory !== ''" class="custom-span">{{ scope.row.memory }} MiB </span>
          </div>
        </template>
      </el-table-column>
      <el-table-column align="left" width="165" label="IP地址" type="scope">
        <template #default="scope">
          <div style="text-align: left">
            <span v-if="scope.row.public_addr !== ''" class="custom-span">{{ scope.row.public_addr }} (公)</span>
            <span v-if="scope.row.private_addr !== ''" class="custom-span">{{ scope.row.private_addr }} (私有)</span>
          </div>
        </template>
      </el-table-column>
      <el-table-column align="left" label="到期时间" prop="expired_time" width="230">
        <template #default="scope">
          <span v-if="scope.row.expired_time !==''">{{ formatDate(scope.row.expired_time) }} 到期</span>
          <span v-else>无</span>
        </template>
      </el-table-column>
      <el-table-column fixed="right" width="150" label="操作">
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
import { ElTooltip, ElMessage } from 'element-plus'
import { formatDate } from '@/utils/format'
import { ref } from 'vue'
import { toSQLLine } from '@/utils/stringFun'
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

// 拷贝内容
const copyText = (value) => {
  const url = value
  const oInput = document.createElement('input')
  oInput.value = url
  document.body.appendChild(oInput)
  oInput.select() // 选择对象;
  document.execCommand('Copy') // 执行浏览器复制命令
  ElMessage({
    message: '复制成功',
    type: 'success',
  })
  oInput.remove()
}

// 搜索排序
const searchInfo = ref({})
const sortChange = ({ prop, order }) => {
  if (prop) {
    if (prop === 'ID') {
      prop = 'id'
    }
    searchInfo.value.orderKey = toSQLLine(prop)
    searchInfo.value.desc = order === 'descending'
  }
  emit('search', searchInfo.value)
}
</script>
<style scoped>
.custom-span{
  word-break:normal;
  width:auto;
  display:block;
  white-space:pre-wrap;
  word-wrap : break-word ;
  overflow: hidden ;
}
  .operate-button-primary {
    color: var(--el-color-primary);
    cursor: pointer;
    font-weight:bold;
  }
</style>
