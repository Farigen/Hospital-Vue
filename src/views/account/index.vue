<template>
  <el-container>
    <MyHeader/>
    <el-main class="account">
        <el-row type="flex">
          <el-col style="margin-left: 8%;" :span="3" class="personal-left">
            <el-menu
              class="el-menu-vertical-demo"
              background-color="#717171"
              text-color="#fff"
              active-text-color="#ffd04b"> <!--ffd04b--> <!--545c64-->
              <el-menu-item v-for="(category, index) in categoriesOfAccount" :key="index" >
                <router-link :to="`/account/${getCategoryUrl(category)}`">
                  <span class="svg-container">
                      <svg-icon :icon-class="category"/>
                  </span>
                  <span class="category">{{category}}</span>
                </router-link>
              </el-menu-item>
            </el-menu>
          </el-col>
          <el-col :span="16">
              <router-view/>
          </el-col>
        </el-row>

    </el-main>
    <el-footer>
      <my-footer/>
    </el-footer>
  </el-container>
</template>

<script>
    import MyHeader from '../../components/common/MyHeader'
    import MyFooter from '../../components/common/MyFooter'
    import Account from './component/account'

    export default {
        name: "index",
        components:{MyHeader, MyFooter, Account},
        data(){
          return{
            categoriesOfAccount : ['首页', '我的信息', '我的头像', '我的记录', '账号安全', '实名认证', '邀请注册'],
            categoryUrls : ['home', 'info', 'avatar', 'record', 'security', 'validation', 'invite']
          }
        },
        methods:{
          getCategoryUrl(category){
            const index = this.categoriesOfAccount.findIndex(item=>item===category);
            return this.categoryUrls[index];
          }
        }
    }
</script>

<style lang="scss" scoped>
  .account{
    a{
      text-decoration: none;
    }
  }
  .svg-container{
    margin-left: 5px;
    margin-right: 10px;
  }
  .category{
    color: #ffffff;
  }
  /*点击<router-link>时会出现红色下划线，使用下面的CSS没有解决，待解决*/
  .router-link-active a{
    text-decoration: none;
    -webkit-text-decoration-style: -moz-none;
    -webkit-text-decoration-color: #000;
    /*color:#000;*/
  }
  .el-menu-vertical-demo{
    /*margin-top: 15px;*/
  }
</style>
