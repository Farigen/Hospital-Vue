<template>
  <el-carousel trigger="click" height="504px">
    <el-carousel-item v-for="url in urls" :key="url">
      <el-image :src="url" ></el-image>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
    export default {
        name: "carousel",
      data(){
        return{
          urls: [ require("@/assets/1.jpg"), require("@/assets/3.png")]
        }
      }
    }
</script>

<style scoped>

</style>
