<template>
  <div class="search">
    <el-row type="flex">
      <el-col :span="2" :offset="3" class='labelOfSearch' >
        <span>搜索科室：</span>
      </el-col>
      <el-col :span="1">
          <span class="svg-container">
              <svg-icon icon-class="search"/>
          </span>
      </el-col>
      <el-col :span="12">
        <el-input ref="content"
                  v-model="content"
                  name="content"
                  type="text"
                  tabindex="1"
                  autocomplete="on"
        />
      </el-col>
      <el-col :span="2" style="margin-left: 15px;">
        <el-button tabindex="2" type="primary" style="width:100%;" @click.native.prevent="handleSearch">搜索</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
    export default {
      name: "search",
      data(){
        return{
          content: ''
        }
      },

      methods:{
          handleSearch(){

          }
      }
    }
</script>

<style scoped lang="scss" >
  $bg:#283443;
  $dark_gray:#889aa4;
  $cursor: #fff;
.search {
  .svg-container {
    padding: 9px 6px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
   display: inline-block;
  }
  .labelOfSearch{
    font-family: Helvetica Neue;
    font-size: 20px;
    text-align: right;
    display: -webkit-box;
    -webkit-box-pack:center;
    -webkit-box-orient:vertical;
  }
  /*.el-input {
    display: inline-block;
    height: 47px;
    width: 85%;

    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      !*color: $light_gray;*!
      height: 47px;
      !*caret-color: $cursor;*!

      &:-webkit-autofill {
        box-shadow: 0 0 0px 1000px $bg inset !important;
        -webkit-text-fill-color: $cursor !important;
      }
    }
  }*/
}
</style>
