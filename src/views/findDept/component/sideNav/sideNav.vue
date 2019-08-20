<template>
  <el-menu
    class="el-menu-vertical-demo"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b">
    <el-menu-item v-for="(type, index) in types" :key="index" @click="handleClick(type)">
      <router-link :to="`/dept/${type}`" >
        <span class="svg-container">
          <svg-icon :icon-class="type" />
        </span>
        <span class="dept">{{type}}</span>
      </router-link>
    </el-menu-item>
  </el-menu>
</template>

<script>
  import axios from 'axios'
  import pubsub from 'pubsub-js'
    export default {
        name: "sideNav",
        methods: {
          handleClick(type){
          }
        },
        data(){
          return {
            types: [],
          }
        },
      mounted() {
          /*axios.post('/getTypeOfDepts').then(response =>{
              this.types = response;
          }).catch(function (err) {
            console.log(err);
          })*/
          const res = ['内科', '外科', '妇产科', '儿科', '骨科', '口腔科', '耳鼻喉科', '肿瘤科', '其他'];
          this.types = res;
      }
    }
</script>

<style scoped>
  .el-menu-vertical-demo a{
    text-decoration: none;
  }
  /*#545c64-*/
.svg-container{
  margin-left: 5px;
  margin-right: 10px;
}
  .dept{
    color: #ffffff;
  }
  .router-link-active a{
    text-decoration: none;
    -webkit-text-decoration-style: -moz-none;
    -webkit-text-decoration-color: #000;
    /*color:#000;*/
  }
</style>
