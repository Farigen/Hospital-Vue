<template>
    <el-container>
      <MyHeader/>
      <el-main class="reservation-main">
          <router-view></router-view>
      </el-main>
      <el-footer>
          <my-footer/>
      </el-footer>
    </el-container>
</template>

<script>
  import MyHeader from '../../components/common/MyHeader'
  import MyFooter from '../../components/common/MyFooter'
  import Reservation from './component/reservation'

    export default {
        name: "index",
      components: {MyHeader, MyFooter, Reservation},
      data(){
          return{

          }
      }
    }
</script>

<style scoped>
.reservation-main{
  margin-left: 11.5%;
  width: 75%;
}
</style>
