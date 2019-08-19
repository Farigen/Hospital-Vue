<template>
  <div class="MyHeader">
      <el-row type="flex">
          <el-col :span="12" :offset="2">
              <el-image :src="url"></el-image>
          </el-col>
        <el-col :span="2" :offset="5" v-if="showUserName === false">
            <div class="login" @click="handleLogin">
                <span>登录</span>
            </div>
        </el-col>
        <el-col :span="3" :offset="5" v-if="showUserName === true">
          <div class="login">
            <el-dropdown @command="handleCommand" class="dropdown">
              <span class="el-dropdown-link">
                {{userName}}，欢迎您
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="info">个人中心</el-dropdown-item>
                <el-dropdown-item command="record">我的记录</el-dropdown-item>
                <el-dropdown-item command="security">安全设置</el-dropdown-item>
                <el-dropdown-item command="logout">注销账户</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            <!--<span>{{userName}}</span>-->
          </div>
        </el-col>
        <el-col :span="2" v-if="showUserName === false">
          <div class="login" @click="handleRegister">
            注册
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">
          <el-menu-item style="margin-left: 10%;" index="1" @click="handleClick">首页</el-menu-item>
          <el-submenu index="2" style="margin-left: 10px;">
            <template slot="title">医院概况</template>
            <el-menu-item index="2-1">医院简介</el-menu-item>
            <el-menu-item index="2-2">机构设置</el-menu-item>
            <el-menu-item index="2-3">医院位置</el-menu-item>
            <el-menu-item index="2-4">院长信箱</el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">学科介绍</template>
            <el-menu-item index="3-1">非手术科室</el-menu-item>
            <el-menu-item index="3-2">手术科室</el-menu-item>
            <el-menu-item index="3-3">平台科室</el-menu-item>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">专家介绍</template>
            <el-menu-item index="4-1">非手术科室</el-menu-item>
            <el-menu-item index="4-2">手术科室</el-menu-item>
            <el-menu-item index="4-3">平台科室</el-menu-item>
          </el-submenu>
          <el-menu-item index="5">预约挂号</el-menu-item>
          <!--<a href="https://www.ele.me" target="_blank"></a>-->
          <el-menu-item index="6">就诊指南</el-menu-item>
        </el-menu>
      </el-row>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex';
  import {isAccount} from "../../utils/validate";

    export default {
        name: "MyHeader",
        data(){
          return{
            url : require('../../assets/logo.jpg'),
            activeIndex: '1',
            showUserName: false,
            userName: ''
          }
        },
      mounted(){
        if (this.$store.state.Authorization !== ''){
          this.showUserName = true;
          this.userName = this.$store.state.userName;
        } else {
          this.showUserName = false;
        }
      },
      methods:{
        ...mapMutations(['logout']),
        handleClick() {
          this.$router.push({
            path: '/'
          })
        },
        handleLogin() {
          this.$router.push({
            path: '/login'
          })
        },
        handleRegister(){
          this.$router.push({
            path: '/register'
          })
        },
        handleCommand(command){
            switch (command) {
              case 'info': {
                this.$router.push('/account/info')
                break
              }
              case 'record': {
                this.$router.push('/account/record')
                break
              }
              case 'security': {
                this.$router.push('/account/security')
                break
              }
              case 'logout': {
                this.logout();
                if (isAccount(this.$route.path)) {
                  this.$router.push({
                    path: '/'
                  })
                }else{
                  // 刷新页面，整个浏览器进行了重新加载，闪烁
                  this.$router.go(0);
                  break
                }
              }
            }
        }
      }
    }
</script>

<style scoped>
.login{
  width: 67%;
  height: 100%;
  cursor: pointer;
  text-align: center;
  /*vertical-align: middle;*/
  color: #0588D1;
 /* 竖直方向居中*/
  display: -webkit-box;
  -webkit-box-pack:center;
  -webkit-box-orient:vertical;
}
  .login:hover{
    background-color: #409EFF;
    color: white;
  }
  .dropdown{
    color: #0588D1;
  }
  .dropdown:hover{
    color: white;
    background-color: #409EFF;
  }
</style>
