<template>
  <div class="login-container">
    <MyHeader/>
    <!--<el-image :src="urlOfImg"></el-image>-->
    <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form" autocomplete="on" label-position="left">

      <div class="title-container">
        <h3 class="title">用户登录</h3>
      </div>

      <el-form-item prop="phoneNumber">
        <span class="svg-container">
          <svg-icon icon-class="user" />
        </span>
        <el-input
          ref="username"
          v-model="loginForm.username"
          placeholder="Username"
          name="username"
          type="text"
          tabindex="1"
          autocomplete="on"
        />
      </el-form-item>

      <el-tooltip v-model="capsTooltip" content="大写已锁定！" placement="right" manual>
        <el-form-item prop="password">
          <span class="svg-container">
            <svg-icon icon-class="password" />
          </span>
          <el-input
            :key="passwordType"
            ref="password"
            v-model="loginForm.password"
            :type="passwordType"
            placeholder="Password"
            name="password"
            tabindex="2"
            autocomplete="on"
            @keyup.native="checkCapslock"
            @blur="capsTooltip = false"
            @keyup.enter.native="handleLogin"
          />
          <span class="show-pwd" @click="showPwd">
            <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'" />
          </span>
        </el-form-item>
      </el-tooltip>

      <el-row>
          <el-col :span="16">
              <el-form-item prop="verificationCode">
                  <span class="svg-container">
                      <svg-icon icon-class="user"/>
                  </span>
                  <el-input class="verificationCodeInput"
                          ref="verificationCode"
                          v-model="loginForm.verificationCode"
                          name="verificationCode"
                          type="text"
                          tabindex="3"
                          autocomplete="on"
                  />
              </el-form-item>
          </el-col>
          <el-col :span="8" id="codeImage">
          </el-col>
      </el-row>

      <el-button :loading="loading" type="primary" style="width:100%;margin-bottom:30px;" @click.native.prevent="handleLogin">登录</el-button>

      <div style="position:relative;margin-top: 30px">
        <!--<div class="tips">
          <span>Username : admin</span>
          <span>Password : any</span>
        </div>
        <div class="tips">
          <span style="margin-right:18px;">Username : editor</span>
          <span>Password : any</span>
        </div>-->
        <el-button class="thirdparty-button" type="primary" @click.native.prevent="register">
          注册
        </el-button>
      </div>
    </el-form>
    <my-footer/>
  </div>
</template>

<script>
import { validPhoneNumber } from '../../utils/validate'
import MyHeader from '../../components/common/MyHeader'
import MyFooter from '../../components/common/MyFooter'
import axios from 'axios'
import qs from 'qs'
import Vue from 'vue'
import { mapMutations } from 'vuex';

//image的click事件不能触发。vue没有将其作为vue的模板解析渲染,不用v-html而是component模板编译
//https://blog.csdn.net/qq_31393401/article/details/81017912
let ImageComponent = Vue.extend({
  template: '<el-image id="imgVerifyCode"  style="margin-left:20px;margin-top:10px;cursor:pointer;" @click.native="changeVerifyCode" :src="codeSrc"  alt=""/>',
  computed:{
    codeSrc: function () {
      return "/getVerifyCode?name=loginCode&key=" + new Date().getTime();
    }
  },
  methods: {
    //看不清，换一张
    changeVerifyCode() {
      // this.loginForm.codeSrc = "http://localhost:8081/getVerifyCode?name=loginCode&key=" + new Date().getTime();
      let img = document.getElementById("imgVerifyCode");
      img.src = "/getVerifyCode?name=loginCode&key=" + new Date().getTime();
    }
  }
});
let component = new ImageComponent().$mount();

export default {
  name: 'Login',
  components: {MyHeader, MyFooter},
  data() {
    //图形验证码验证
    const checkCode = (rule, value, callback)=>{
      let regex = /^\d{6}$/;
      if (!regex.test(value)) {
        this.loginForm.isVerificationCodeTrue = false;
        callback(new Error("输入6位数字验证码"));
      } else {
        //解决跨域时每次访问请求时sessionId不同 https://blog.csdn.net/weixin_40461281/article/details/81196932
        axios.defaults.withCredentials = true;
        axios.post("/checkVerifyCode", qs.stringify({
          name: "loginCode",
          code: this.loginForm.verificationCode
        })).then(res=>{
          if (res.data.flag==="no"){
            this.loginForm.isVerificationCodeTrue = false;
            callback(new Error(res.data.message));
          }else {
            this.loginForm.isVerificationCodeTrue = true;
            callback();
          }
        }).catch(err=>{
          console.log(err)
        });
      }
    };
    const validPhoneNumber = (rule, value, callback) => {
      if (!validPhoneNumber(value)) {
        callback(new Error('请输入正确的手机号！'))
      } else {
        callback()
      }
    };
    const validatePassword = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error('密码不能少于6位！'))
      } else {
        callback()
      }
    };
    return {
      // urlOfImg: require('../../assets/jyzn-p.jpg'),
      loginForm: {
        username: '18251806718',
        password: '123456',
        verificationCode: '',
        // codeSrc: ''
      },
      loginRules: {
        username: [{ required: true, trigger: 'blur', validator: validPhoneNumber }],
        password: [{ required: true, trigger: 'blur', validator: validatePassword }],
        verificationCode: [{ required: true, trigger: 'blur', validator: checkCode }]
      },
      passwordType: 'password',
      capsTooltip: false,
      loading: false,
      isVerificationCodeTrue: true,
      redirect: undefined,
      otherQuery: {},
      userToken: ''
    }
  },
 /* watch: {
    $route: {
      handler: function(route) {
        /!*const query = route.query
        if (query) {
          this.redirect = query.redirect
          this.otherQuery = this.getOtherQuery(query)
        }*!/
      },
      immediate: true
    }
  },*/
  created() {
    // window.addEventListener('storage', this.afterQRScan)
  },
  mounted() {
    if (this.loginForm.username === '') {
      this.$refs.username.focus()
    } else if (this.loginForm.password === '') {
      this.$refs.password.focus()
    }
    document.getElementById('codeImage').appendChild(component.$el);
  },
  destroyed() {
    // window.removeEventListener('storage', this.afterQRScan)
  },
  methods: {
    ...mapMutations(['changeLogin']),
    checkCapslock({ shiftKey, key } = {}) {
      if (key && key.length === 1) {
        if (shiftKey && (key >= 'a' && key <= 'z') || !shiftKey && (key >= 'A' && key <= 'Z')) {
          this.capsTooltip = true
        } else {
          this.capsTooltip = false
        }
      }
      if (key === 'CapsLock' && this.capsTooltip === true) {
        this.capsTooltip = false
      }
    },
    showPwd() {
      if (this.passwordType === 'password') {
        this.passwordType = ''
      } else {
        this.passwordType = 'password'
      }
      this.$nextTick(() => {
        this.$refs.password.focus()
      })
    },
    handleLogin() {
      /*this.$refs.registerForm.validate(valid => {
        if (valid) {
          this.loading = true
          this.$store.dispatch('user/login', this.registerForm)
            .then(() => {
              this.$router.push({ path: this.redirect || '/', query: this.otherQuery })
              this.loading = false
            })
            .catch(() => {
              this.loading = false
            })
        } else {
          console.log('error submit!!')
          return false
        }
      })*/
      if (this.loginForm.isVerificationCodeTrue === false){
        return
      }
      let name = '';
      // http://localhost:8081/doLogin
      axios.post('/doLogin', qs.stringify({
        userName : this.loginForm.username,
        password : this.loginForm.password
      })).then((res)=>{
        if (res.data.message==='success'){
          this.userToken = res.data.token;
          name = res.data.user.name == null ? res.data.user.phoneNumber : res.data.user.name;
          this.changeLogin({ Authorization: this.userToken,  userName: name, userId: res.data.user.id});
          this.$router.push({
            path: '/'
          })
        } else {
          alert(res.data.message)
        }}).catch(function (err) {
          alert("Error:"+err);
          console.log(err)
      });
    },
    getOtherQuery(query) {
      return Object.keys(query).reduce((acc, cur) => {
        if (cur !== 'redirect') {
          acc[cur] = query[cur]
        }
        return acc
      }, {})
    },
    register(){
      this.$router.push({
        path: '/register'
      })
    },
  }
}


</script>

<style lang="scss">
$bg:#283443;
/*$light_gray:#fff;*/
$light_gray:#000;
$cursor: #fff;

@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
  .login-container .el-input input {
    color: $cursor;
  }
}

/* reset element-ui css */
.login-container {
  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;

    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: $light_gray;
      height: 47px;
      /*caret-color: $cursor;*/

      &:-webkit-autofill {
        box-shadow: 0 0 0px 1000px $bg inset !important;
        -webkit-text-fill-color: $cursor !important;
      }
    }
  }

  .el-form-item {
    border: 1px solid #0588D1;  /*rgba(255, 255, 255, 0.1)*/
    /*background: rgba(0, 0, 0, 0.1);*/
    /*background: #97FFFF;*/
    border-radius: 5px;
    /*color: #454545;*/
    color: #97FFFF;
  }
  .verificationCodeInput{
    width: 50%;
  }
}
</style>

<style lang="scss" scoped>
$bg:#2d3a4b;
$dark_gray:#889aa4;
$light_gray:#eee;

.login-container {
  min-height: 100%;
  width: 100%;
/*  background-color: $bg;*/
  overflow: hidden;

  .login-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 40px 35px 0;
    margin: 0 auto;
    overflow: hidden;
  }

  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;

    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }

  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }

  .title-container {
    position: relative;

    .title {
      font-size: 26px;
      color: #0588D1;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
  }

  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }

  .thirdparty-button {
    position: absolute;
    right: 0;
    bottom: 6px;
  }

  @media only screen and (max-width: 470px) {
    .thirdparty-button {
      display: none;
    }
  }
}
</style>
