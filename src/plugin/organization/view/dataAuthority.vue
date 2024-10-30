<template>
  <div class="organization">
    <div class="dycloud-search-box org-top">
      资源权限管理
    </div>
    <div class="dycloud-table-box">
      <div class="dycloud-btn-list">
        <el-button size="small" type="primary" icon="plus" @click="syncAuthorityFun()">同步角色数据</el-button>
      </div>
      <el-table
        :data="tableData"
        row-key="authorityId"
        style="width: 100%"
      >
        <el-table-column label="角色ID" min-width="180" prop="authorityID" />
        <el-table-column align="left" label="角色名称" min-width="180" prop="authority.authorityName" />
        <el-table-column label="资源权限" min-width="180" prop="authorityType">
          <template #default="{row}">
            <el-select v-model="row.authorityType" @change="(val)=>{setDataAuthorityFun(row,val)}">
              <el-option label="无资源权限" :value="0" />
              <el-option label="仅本人" :value="1" />
              <el-option label="本部门" :value="2" />
              <el-option label="部门及以下" :value="3" />
              <el-option label="全部" :value="4" />
            </el-select>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { setDataAuthority,
  syncAuthority,
  getAuthority,
} from '@/plugin/organization/api/organization'
import { ElMessage } from 'element-plus'

const tableData = ref([])
const getTableData = async() => {
  const res = await getAuthority()
  tableData.value = res.data
}
getTableData()

const syncAuthorityFun = async() => {
  const res = await syncAuthority()
  if (res.code === 0) {
    ElMessage.success('同步完成')
    getTableData()
  }
}

const setDataAuthorityFun = async(row, val) => {
  const res = await setDataAuthority({ authorityID: row.authorityID, authorityType: val })
  if (res.code === 0) {
    ElMessage.success('设置成功')
  }
  getTableData()
}

</script>

<style scoped lang="scss">
.org-top{
  padding-bottom: 20px;
}

</style>
