<!--
    @auther: bypanghu<bypanghu@163.com>
    @date: 2024/5/8
!-->

<template>
  <el-carousel class="-mt-2">
    <el-carousel-item class="cursor-pointer lg:h-40" v-for="(item , index) in banners" :key="index" @click="openLink(item.link)">
      <el-image class="h-full w-full" :src="item.img" fit="fill"></el-image>
    </el-carousel-item>
  </el-carousel>
</template>

<script setup>
// import banner from "@/assets/banner.jpg"
// import banner2 from "@/assets/banner2.jpg"

const openLink = (link) => {
    window.open(link, '_blank')
}

const banners = [

]
</script>

<style scoped lang="scss">

</style>
