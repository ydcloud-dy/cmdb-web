<template>
  <div>
    <div class="dycloud-search-box">
      <el-form ref="searchForm" :inline="true" :model="searchInfo">
        <el-form-item label="名称">
          <el-input v-model="searchInfo.name" placeholder="名称" />
        </el-form-item>
        <el-form-item>
          <el-button size="small" type="primary" icon="search" @click="onSubmit">查询</el-button>
          <el-button size="small" icon="refresh" @click="onReset">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="dycloud-table-box">
      <div class="dycloud-btn-list">
        <el-button size="small" type="primary" icon="plus" @click="openDialog('addApi')">新增</el-button>
<!--        <el-popover v-model="deleteVisible" placement="top" width="160">-->
<!--          <p>确定要删除吗？</p>-->
<!--          <div style="text-align: right; margin-top: 8px;">-->
<!--            <el-button size="small" type="primary" link @click="deleteVisible = false">取消</el-button>-->
<!--            <el-button size="small" type="primary" @click="onDelete">确定</el-button>-->
<!--          </div>-->
<!--          <template #reference>-->
<!--            <el-button icon="delete" size="small" :disabled="!clusters.length" style="margin-left: 10px;" @click="deleteVisible = true">删除</el-button>-->
<!--          </template>-->
<!--        </el-popover>-->
      </div>
      <div v-if="tableData">
        <TableBlock :table-data="tableData" @update="handleUpdate" @search="handlesortChange" @test="handleTest"  @select="handleSelectionChange" @delete="handleDelete" @region="handleUpdateRegion" />
      </div>
    </div>
    <div class="dycloud-pagination">
      <el-pagination
        :current-page="page"
        :page-size="pageSize"
        :page-sizes="[10, 30, 50, 100]"
        :total="total"
        layout="total, sizes, prev, pager, next, jumper"
        @current-change="handleCurrentChange"
        @size-change="handleSizeChange"
      />
    </div>
    <div v-if="dialogFormVisible">
      <el-dialog
        v-model="dialogFormVisible"
        width="40%"
        :title="title"
        :show-close="false"
        :close-on-press-escape="false"
        :close-on-click-modal="false"
      >
        <FormBlock
            :form="form"
            :regions="regions"
            :is-url-disabled="isUrlDisabled"
            :url-placeholder="urlPlaceholder"
            @close="closeDialog"
            :type="type"
            @enter="enterDialog"
        />
      </el-dialog>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Index',
}
</script>

<script setup>
import {
  createService,
  deleteService,
  updateService,
  getServiceList,
  describeService,
  deleteServiceByIds, TestService
} from '@/api/configurationCenter/service'
import {
  createCodeSource,
  updateSourceCode,
  deleteSourceCode,
  deleteSourceCodeByIds,
  describeSourceCode,
  getSourceCodeList, TestSourceCode
} from "@/api/configurationCenter/codeSource";
import FormBlock from './form.vue'
import TableBlock from './table.vue'
import { ref } from 'vue'
import { ElMessage } from 'element-plus'
import { syncRegion } from '@/api/cloudCmdb/cloud_region'

const form = ref({})
const page = ref(1)
const total = ref(0)
const pageSize = ref(10)
const tableData = ref([])
const title = ref('')
const searchInfo = ref({})
const deleteVisible = ref(false)
const clusters = ref([])
const regions = ref([])
// 搜索
const onReset = () => {
  searchInfo.value = {}
}

// 排序
const handlesortChange = (value) => {
  searchInfo.value = value
  getTableData()
}

// 提交搜索
const onSubmit = () => {
  page.value = 1
  pageSize.value = 10
  getTableData()
}

// 分页
const handleSizeChange = (val) => {
  pageSize.value = val
  getTableData()
}

const handleCurrentChange = (val) => {
  page.value = val
  getTableData()
}

// 查询
const getTableData = async() => {
  const table = await getSourceCodeList({ page: page.value, pageSize: pageSize.value, keyword: searchInfo.value.name })
  if (table.code === 0) {
    tableData.value = table.data.list
    total.value = table.data.total
    page.value = table.data.page
    pageSize.value = table.data.pageSize
  }
}

getTableData()
const isUrlDisabled = ref(false);
const urlPlaceholder = ref('请输入地址');

// 更新数据模态框
const dialogFormVisible = ref(false)
const type = ref('')
const handleUpdate = async (row) => {
  const res = await describeSourceCode(row.ID);
  type.value = 'update';
  title.value = '更新';

  if (res.code === 0) {
    const data = res.data;

    // 将查询结果中的数据赋值到表单
    form.value = {
      ID: data.ID,
      name: data.name,
      desc: data.desc,
      type: data.type, // 设置为数据中获取的类型
      repositoryType: data.config.type === 0 ? 'private' : 'public', // 根据 config.type 判断仓库类型
      url: data.config.url || '',
      username: data.type === 3 && data.config.type === 0 ? data.config.username : '', // 仅在 GitLab 私有仓库时显示用户名
      token: data.config.token || '',
    };

    // 设置 URL 和禁用状态的条件
    if (data.type === 4) { // GitHub
      form.value.url = 'https://github.com';
      isUrlDisabled.value = true;
      urlPlaceholder.value = 'https://github.com';
    } else if (data.type === 5) { // Gitee
      form.value.url = 'https://gitee.com';
      isUrlDisabled.value = true;
      urlPlaceholder.value = 'https://gitee.com';
    } else {
      // 其他类型和情况恢复可编辑状态
      isUrlDisabled.value = false;
      urlPlaceholder.value = '请输入地址';
    }

    dialogFormVisible.value = true;
  }
};



// 同步Region
const handleUpdateRegion = async(row) => {
  const res = await syncRegion({ id: row.id })
  if (res.code === 0) {
    ElMessage({
      type: 'success',
      message: '操作成功'
    })
    getTableData()
  }
}

// 关闭模态框
const closeDialog = () => {
  dialogFormVisible.value = false
  form.value = {}
}

// 删除数据
const handleDelete = async(row) => {
  row.visible = false
  const res = await deleteSourceCode(  row.ID )
  if (res.code === 0) {
    ElMessage({
      type: 'success',
      message: '删除成功'
    })
    if (tableData.value.length === 1 && page.value > 1) {
      page.value--
    }
    getTableData()
  }
}

// 批量操作
const handleSelectionChange = (val) => {
  clusters.value = val
}

// 批量删除
const onDelete = async() => {
  const ids = clusters.value.map(item => item.ID)
  const res = await deleteSourceCodeByIds({ ids:ids })
  if (res.code === 0) {
    ElMessage({
      type: 'success',
      message: res.msg
    })
    if (tableData.value.length === ids.length && page.value > 1) {
      page.value--
    }
    deleteVisible.value = false
    getTableData()
  }
}

// 提交数据提示信息
const handleOptions = async(res) => {
  if (res.code === 0) {
    ElMessage({
      type: 'success',
      message: res.msg
    })
    if (tableData.value.length === 1 && page.value > 1) {
      page.value--
    }
    getTableData()
  }
}

// 提交数据
const enterDialog = async (value) => {
  console.log(value);
  console.log("================================");

  // 转换 `type` 字段值和 `config` 数据结构
  if (value.type === "kubernetes") {
    value.type = 0;

    // 处理 Kubernetes 配置，生成符合后端格式的 `config` 对象
    value.config = {
      type: 0,
      // 根据 `authType` 的不同，配置 `config` 内容
      conf: value.authType === "config" ? value.conf : undefined,
      url: value.authType === "token" ? value.url : undefined,
      token: value.authType === "token" ? value.kubeToken : undefined,
    };
    // 移除不必要的字段
    delete value.conf;
    delete value.url;
    delete value.kubeToken;
  } else if (value.type === "registry") {
    value.type = 1;

    // 处理 Registry 配置
    value.config = {
      url: value.registryUrl,
      username: value.username,
      password: value.password,
      isHttps: value.isHttps,
    };
    // 移除不必要的字段
    delete value.registryUrl;
    delete value.username;
    delete value.password;
    delete value.isHttps;
  }

  // 删除前端不需要的临时字段
  delete value.authType;

  // 调用 API，根据 type 选择操作
  let res;
  switch (type.value) {
    case "create":
      res = await createCodeSource(value);
      break;
    case "update":
      res = await updateSourceCode(value);
      break;
    default:
      res = await createCodeSource(value);
      break;
  }

  // 处理 API 响应
  if (res.code === 0) {
    closeDialog();
    handleOptions(res);
  }
};
// 处理 test 事件的函数
const handleTest = async (value) => {
  console.log('测试:', value)
  const res = await TestSourceCode(value)
  if (res.code === 0) {
    ElMessage({
      type: 'success',
      message: res.data
    })
  }
  console.log(res)
  // 在这里添加测试逻辑
}

// 创建
const openDialog = () => {
  type.value = 'create'
  title.value = '创建'
  form.value = { repositoryType: 'private',type: 3 }; // 确保创建时默认是私有
  dialogFormVisible.value = true
}

</script>
<style></style>
