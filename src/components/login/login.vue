<template>
  <el-form ref="form1"  label-width="95px" class="demo-ruleForm">
    <el-form-item label="账号" prop="username">
      <el-input v-model="username" size="medium" clearable placeholder="手机号码或用户名"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input v-model="password" type="password" size="medium" clearable></el-input>
    </el-form-item>
    <el-row>
      <el-col :span="16">
        <el-form-item label="验证码" prop="code">
          <el-input v-model="code" size="medium" clearable></el-input>
        </el-form-item>
      </el-col>
      <!--<el-col :span="8">
        <img id="imgVerifyCode" width=100 height=36 style="margin-left:5px;cursor:pointer;" onclick="javascript:changeVerifyCode();" src="VerifyCodeAction_getVerifyCode?name=loginCode&" />
      </el-col>-->
    </el-row>
    <el-form-item>
      <el-button type="primary" @click="submitForm('form1')">立即登录</el-button>
      <el-button >重置</el-button>
    </el-form-item>
    <el-form-item>
      <a href="findPassword.jsp">忘记密码？</a>&nbsp;&nbsp;&nbsp;
      <a href="register.jsp">注册</a>
    </el-form-item>
  </el-form>
</template>

<script>
    export default {
        name: "login",
      data:function () {
        return{
          username: '',
          password: '',
          code: ''
        }
      }
    }
</script>

<style scoped>

</style>
