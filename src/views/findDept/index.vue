<template>
    <el-container>
      <el-header>
          <MyHeader/>
      </el-header>
      <el-main style="margin-top: 100px;">
          <findDept/>
      </el-main>
      <el-footer>
          <my-footer/>
      </el-footer>
    </el-container>
</template>

<script>
  import MyHeader from '../../components/common/MyHeader'
  import MyFooter from '../../components/common/MyFooter'
  import findDept from './component/findDept'

    export default {
        name: "index",
      components: {MyHeader, MyFooter, findDept},
      data(){
          return{

          }
      }
    }
</script>

<style scoped>

</style>
