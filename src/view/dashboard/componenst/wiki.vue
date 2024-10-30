<!--
    @auther: bypanghu<bypanghu@163.com>
    @date: 2024/5/8
!-->

<template>
  <div class="grid grid-cols-2 gap-2">
    <a v-for="item in wikis" :key="item.url" :href="item.url" class="text-sm  text-gray-700 dark:text-gray-300 no-underline hover:text-active " target="_blank">
      {{ item.title }}
    </a>
  </div>
</template>

<script setup>
const wikis = [


]
</script>

<style scoped lang="scss">

</style>
