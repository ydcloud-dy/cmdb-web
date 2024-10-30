<template>
  <div>
    <el-card class="box-card" shadow="hover">
      <template #header>
        <div class="card-header">
          <span>资产管理</span>
        </div>
      </template>
      <el-row :gutter="24">
        <el-col :span="3">
          <el-card class="box-card" shadow="hover">
            <template #header>
              <div class="card-header">
                <span>资源分布</span>
              </div>
            </template>
            <el-tree-v2
              ref="treeRef"
              :data="data"
              :props="props"
              node-key="region"
              :default-expanded-keys="['0']"
              :expand-on-click-node="false"
              @node-click="nodeClick"
            />
          </el-card>
        </el-col>
        <el-col :span="21">
          <el-card class="el-card">
            <div class="dycloud-search-box">
              <el-form ref="searchForm" :inline="true" :model="searchInfo">
                <el-form-item>
                  <el-dropdown split-button>
                    {{ discriminativeSearch }}
                    <template #dropdown>
                      <el-dropdown-menu>
                        <div v-for="(item,index) in searchFields" :key="index">
                          <el-dropdown-item @click.native="handlesearchFields(item.name, item.field)">
                            {{ item.name }}
                          </el-dropdown-item>
                        </div>
                      </el-dropdown-menu>
                    </template>
                  </el-dropdown>
                </el-form-item>
                <el-form-item>
                  <el-input v-model="searchInfo.keyword" placeholder="请输入搜索关键字" />
                </el-form-item>
                <el-form-item>
                  <el-button size="small" type="primary" icon="search" @click="onSubmit">查询</el-button>
                  <el-button size="small" icon="refresh" @click="onReset">重置</el-button>
                  <el-button size="small" type="primary" icon="refresh" @click="onSync">同步</el-button>
                </el-form-item>
              </el-form>
            </div>
            <div class="dycloud-table-box">
              <TableBlock :table-data="tableData" @search="handlesortChange" />
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
          </el-card>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>
<script>

export default {
  name: 'Index',
}
</script>
<script setup>
import { ref } from 'vue'
import TableBlock from './table.vue'
import { RDSList, RDSTree, syncRDS } from '@/api/cloudCmdb/cloud_rds'
import { ElMessage } from 'element-plus'

const props = {
  value: 'id',
  label: 'name',
  children: 'region',
}
const page = ref(1)
const total = ref(0)
const pageSize = ref(10)
const searchInfo = ref({ 'keyword': '', 'region': '', 'field': '' })
const data = ref([])
const tableData = ref([])
const discriminativeSearch = ref('识别搜索')
const searchFields = [{ 'id': 1, 'field': 'name', 'name': '实例名称' }, { 'id': 2, 'field': 'instance_id', 'name': '实例ID' }, { 'id': 3, 'field': 'private_addr', 'name': '私网地址' }, { 'id': 4, 'field': 'public_addr', 'name': '公网地址' }, { 'id': 5, 'field': 'region', 'name': '区域ID' }, { 'id': 6, 'field': 'region_name', 'name': '区域名称' }, { 'id': 7, 'field': 'status', 'name': '状态' }]

const GetRDSTree = async() => {
  const res = await RDSTree()
  if (res.code === 0) {
    data.value = res.data.list
  }
}

GetRDSTree()

// 同步资源
const cloud_id = ref(0)
const onSync = async() => {
  if (cloud_id.value === 0) {
    ElMessage({
      message: '请单击左侧，选择要同步的厂商',
      type: 'warning',
    })
    return
  }

  const res = await syncRDS({ 'id': cloud_id.value })
  if (res.code === 0) {
    ElMessage({
      message: '同步操作，异步执行中，请稍后！',
      type: 'success',
    })
  }
}

// 点击节点
const nodeClick = (val) => {
  if (val.region_id) {
    searchInfo.value.region = val.region_id
    getTableData()
  }

  if (val.region || val.region === null) {
    cloud_id.value = val.id
  }
}

// 查询
const getTableData = async() => {
  const table = await RDSList({ page: page.value, pageSize: pageSize.value, ...searchInfo.value })
  if (table.code === 0) {
    tableData.value = table.data.list
    total.value = table.data.total
    page.value = table.data.page
    pageSize.value = table.data.pageSize
  }
}

getTableData()

// 搜索
const onReset = () => {
  searchInfo.value = {}
  discriminativeSearch.value = '识别搜索'
  cloud_id.value = 0
}

// 提交搜索
const onSubmit = () => {
  if (searchFields.value === '识别搜索') {
    ElMessage({
      message: '请选择搜索类型',
      type: 'warning',
    })
    return
  }
  page.value = 1
  pageSize.value = 10
  getTableData()
  GetRDSTree()
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

const handlesearchFields = (val, field) => {
  searchInfo.value.field = field
  discriminativeSearch.value = val
}

// 排序
const handlesortChange = (value) => {
  searchInfo.value = value
  getTableData()
}

</script>
<style scoped>
.tree-content{
  height: auto;
}
</style>
