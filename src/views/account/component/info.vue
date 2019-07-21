<template>
  <el-card class="info-card">
      <div slot="header" class="info-header" style="margin-left: 10px;">
        <span>我的信息</span>
      </div>
    <el-form ref="infoForm" :model="infoForm" :rules="infoRules" class="login-form" autocomplete="on" label-position="left">

      <el-form-item prop="nickname">
        <el-row>
          <el-col :span="3" :offset="3">
             <span class="svg-container" style="float: right;">
                <svg-icon icon-class="nicheng" />
               <span style="margin-left: 10px;">昵&nbsp&nbsp&nbsp称：</span>
             </span>
          </el-col>
          <el-col :span="14" :offset="1">
            <el-input
              ref="nickname"
              v-model="infoForm.nickname"
              placeholder="昵称"
              name="nickName"
              type="text"
              tabindex="1"
              autocomplete="on"
            />
          </el-col>
        </el-row>
      </el-form-item>

      <el-form-item prop="username">
        <el-row>
          <el-col :span="3" :offset="3" >
             <span class="svg-container" style="float: right;">
                <svg-icon icon-class="yonghuming" />
                <span style="margin-left: 10px;" >用户名：</span>
             </span>
          </el-col>
          <el-col :span="14" :offset="1">
            <el-input
              ref="username"
              v-model="infoForm.username"
              placeholder="Username"
              name="username"
              type="text"
              tabindex="2"
              autocomplete="on"
            />
          </el-col>
        </el-row>
      </el-form-item>

      <el-form-item prop="gender">
        <el-row>
          <el-col :span="3" :offset="3">
             <span class="svg-container" style="float: right;">
                <svg-icon icon-class="gender" />
               <span style="margin-left: 10px;">性&nbsp&nbsp&nbsp别：</span>
             </span>
          </el-col>
          <el-col :span="14" :offset="1">
            <el-radio-group v-model="infoForm.gender" tabindex="3">
              <el-radio :label="0">男</el-radio>
              <el-radio :label="1">女</el-radio>
              <el-radio :label="2">保密</el-radio>
            </el-radio-group>
          </el-col>
        </el-row>
      </el-form-item>

      <el-form-item prop="birthday" tabindex="4">
        <el-row>
          <el-col :span="4" :offset="2">
             <span class="svg-container" style="float: right;">
                <svg-icon icon-class="chushengnianyue" />
               <span style="margin-left: 10px;">出生日期：</span>
             </span>
          </el-col>
          <el-col :span="14" :offset="1">
            <el-date-picker
              v-model="infoForm.birthday"
              type="date"
              placeholder="选择日期">
            </el-date-picker>
          </el-col>
        </el-row>

      </el-form-item>

      <el-form-item prop="phoneNo">
        <el-row>
          <el-col :span="4" :offset="2" >
             <span class="svg-container" style="float: right;">
                <svg-icon icon-class="shoujihaoma" />
               <span style="margin-left: 10px;">手机号码：</span>
             </span>
          </el-col>
          <el-col :span="14" :offset="1">
            <el-input
              ref="phoneNo"
              v-model="infoForm.phoneNo"
              placeholder="手机号码"
              name="phoneNo"
              type="text"
              tabindex="5"
              autocomplete="on"
            />
          </el-col>
        </el-row>
      </el-form-item>

      <el-form-item prop="IDCardNo">
        <el-row>
          <el-col :span="4" :offset="2">
             <span class="svg-container" style="float: right;">
                <svg-icon icon-class="shenfenzhenghaoma" />
               <span style="margin-left: 10px;">身份证号码：</span>
             </span>
          </el-col>
          <el-col :span="14" :offset="1">
            <el-input
              ref="IDCardNo"
              v-model="infoForm.IDCardNo"
              placeholder="身份证号码"
              name="IDCardNo"
              type="text"
              tabindex="6"
              autocomplete="on"
            />
          </el-col>
        </el-row>
      </el-form-item>

      <el-row>
        <el-col :span="12" :offset="6">
          <el-button :loading="loading" type="primary" class="submit-button" @click.native.prevent="handleSubmit">提交</el-button>
        </el-col>
      </el-row>
    </el-form>
  </el-card>
</template>

<script>
  import { validUsername } from '../../../utils/validate'
  import axios from 'axios'

    export default {
      name: "info",
      data() {
        const validateUsername = (rule, value, callback) => {
          if (!validUsername(value)) {
            callback(new Error('请输入正确的用户名！'))
          } else {
            callback()
          }
        }
        const validatePassword = (rule, value, callback) => {
          if (value.length < 6) {
            callback(new Error('密码不能少于6位！'))
          } else {
            callback()
          }
        }
        return {
          // urlOfImg: require('../../assets/jyzn-p.jpg'),
          infoForm: {
            nickname: 'admin',
            username: 'admin',
            gender: 1,
            birthday: '',
            IDCardNo: '',
            phoneNo: ''
          },
          infoRules: {
            username: [{required: true, trigger: 'blur', validator: validateUsername}],
            password: [{required: true, trigger: 'blur', validator: validatePassword}]
          },
          loading: false,
          showDialog: false,
          redirect: undefined,
          otherQuery: {}
        }
      },
      mounted(){
       /* axios.post('').then(res=>{

        }).catch(err=>{
          console.log(err)
        })*/
      },
      methods: {
        handleSubmit(){

        }
      }
    }
</script>

<style scoped>
.info-header{
  color: #00A1D6;
}
.svg-container {
  font-size: 15px;
  /*color: $dark_gray;*/
  vertical-align: middle;
  display: inline-block;
}
  .submit-button{
    width:100%;
    margin-bottom:10px;
    margin-top: 10px;

  }
</style>
