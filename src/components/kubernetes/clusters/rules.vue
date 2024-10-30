<template>
  <div>
    <el-table ref="multipleTable" :data="formData.rules" style="width: 100%" tooltip-effect="dark" row-key="ID">
      <el-table-column align="left" label="名称" prop="metadata.name" width="150">
        <template #default="scope">
          <span>{{ formData.metadata.name }}</span>
        </template>
      </el-table-column>
      <el-table-column label="API Groups" width="150">
        <template #default="scope">
          <div v-for="(apiGroup,index) in scope.row.apiGroups" :key="index">
            <el-tag v-if="apiGroup!==''">{{ apiGroup }}</el-tag>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="URL">
        <template #default="scope">
          <span v-for="(url,index) in scope.row.nonResourceURLs" :key="index">{{ url }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Resources" min-width="300px">
        <template #default="scope">
          <el-tag v-for="(resource,index) in scope.row.resources" :key="index" type="success">{{ resource }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="Create" width="80px">
        <template #default="scope">
          <i v-if="checkVerb(scope.row.verbs,'create')" class="el-icon-check">* </i>
          <span v-else> - </span>
        </template>
      </el-table-column>
      <el-table-column label="Delete" width="80px">
        <template #default="scope">
          <i v-if="checkVerb(scope.row.verbs,'delete')" class="el-icon-check">* </i>
          <span v-else> - </span>
        </template>
      </el-table-column>
      <el-table-column label="Get" width="80px">
        <template #default="scope">
          <i v-if="checkVerb(scope.row.verbs,'get')" class="el-icon-check">* </i>
          <span v-else> - </span>
        </template>
      </el-table-column>
      <el-table-column label="List" width="80px">
        <template #default="scope">
          <i v-if="checkVerb(scope.row.verbs,'list')" class="el-icon-check">* </i>
          <span v-else> - </span>
        </template>
      </el-table-column>
      <el-table-column label="Patch" width="80px">
        <template #default="scope">
          <i v-if="checkVerb(scope.row.verbs,'patch')" class="el-icon-check">* </i>
          <span v-else> - </span>
        </template>
      </el-table-column>
      <el-table-column label="Update" width="80px">
        <template #default="scope">
          <i v-if="checkVerb(scope.row.verbs,'update')" class="el-icon-check">* </i>
          <span v-else> - </span>
        </template>
      </el-table-column>
      <el-table-column label="Watch" width="80px">
        <template #default="{row}">
          <i v-if="checkVerb(row.verbs,'watch')" class="el-icon-check">* </i>
          <span v-else> - </span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  name: 'Rules',
}
</script>
<script setup>
import { ref } from 'vue'
const props = defineProps({
  form: {
    default: function() {
      return {}
    },
    type: Object
  },
})
// 表单数据初始化
const formData = ref({})
const GetFormData = () => {
  formData.value = props.form
}

GetFormData()

const checkVerb = (verbs, ope) => {
  return verbs.indexOf('*') > -1 ? verbs.indexOf('*') > -1 : verbs.indexOf(ope) > -1
}
</script>
<style scoped>

</style>
