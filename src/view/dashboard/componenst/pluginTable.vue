

<template>
  <div>
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="ranking" label="排名" width="80" align="center" />
      <el-table-column prop="title" label="插件标题" show-overflow-tooltip>
        <template #default="{ row }">
          <a class="text-active" :href="row.link" target="_blank">{{ row.title }}</a>
        </template>
      </el-table-column>
      <el-table-column prop="click_num" label="关注度" width="100" />
      <el-table-column prop="hot" label="热度值" width="100" />
    </el-table>
  </div>
</template>

<script setup>
const tableData = [

]
</script>

<style scoped lang="scss">

</style>
