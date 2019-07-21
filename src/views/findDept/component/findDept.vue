<template>
    <div>
        <Search/>
        <el-row type="flex" style="margin-top: 20px">
            <el-col style="margin-left: 11.5%;" :span="4">
                <SideNav/>
            </el-col>
          <el-col :span="14">
            <router-view></router-view>
          </el-col>
        </el-row>
    </div>
</template>

<script>
  import Search from './search'
  import SideNav from './sideNav/sideNav'
  import Carousel from './main/carousel'

    export default {
        name: "findDept",
        components: {Search, SideNav,Carousel},
        data(){
          return{

          }
        },
    }
</script>

<style scoped>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }
</style>
