<template>
  <el-card >
    <div slot="header" class="dept-reservation">
      <span>{{$route.params.dept}}</span>
    </div>
    <div class="normal-reservation">
      <ul>
        <el-row type="flex">
          <el-col :span="4">
            <a href="/nj/zonghe/64d6e.html" title=""><img
              src="https://pimg.39.net/PictureLib/A/f4/c3/20181212/org/7430322.jpg" class="yy-img" alt=""/></a>
          </el-col>
          <el-col :span="10">
            <div class="yy-msg">
              <div style="margin-top: 15px;">
                <a href="/nj/zonghe/64d6e.html" class="yy-name" title="name"><b>普通号</b></a>
              </div>
              <p>
                擅长：江苏省南京市鼓楼区中山路321号;北院地址:江苏省鼓楼区中山北路53号
              </p>
            </div>
          </el-col>
          <el-col :span="4" class="expert">
            <span>普通号：￥12</span>
          </el-col>
          <el-col :offset="1" :span="3" class="as">
            <!--<el-card class="is-available">有号</el-card>-->
            <el-button type="primary" class="is-available">{{isAvailableButton}}</el-button>
            <br/>
            <el-button type="primary" @click="handleReservation($route.params.dept)">预约挂号</el-button>
          </el-col>
        </el-row>
      </ul>
    </div>
    <div class="doc-list-div">
      <ul>
        <Doc v-for="(doc, index) in docs" :key="index" :doc="doc"/>
      </ul>
    </div>
  </el-card>
</template>

<script>
  //reference: http://yyk.39.net/nanjing/hospitals/erke/
  import Doc from './doc'
  import axios from 'axios'
  import qs from 'qs'

    export default {
        name: "reservation",
        components:{Doc},
        data(){
          return{
            docs: [],
            normal: 0,
            isAvailable: true
            // dept: ''
          }
        },
      mounted() {
        axios.post('/getDocsByDeptName', qs.stringify({
          deptName : this.$route.params.dept
        })).then(res =>{
          const temp = [];
          res.data.forEach(doc=>{
            temp.push(doc);
          });
          this.docs = temp;
        }).catch((err)=>{
          alert('err:' + err)
        });
        /*const docs = [{name: '王志群', title: '主治医师', price: 25 ,available: 1}, {name: '宋治非', title: '主治医师', price: 25 ,available: 1}
                      ,{name: '顾宁', title: '副主治医师', price: 15 ,available: 1}, {name: '王银河', title: '正主任', price: 235 ,available: 1}
        ]
        this.docs = docs;*/
      },
      computed : {
          isAvailableButton : function() {
            return this.isAvailable === true ? '有号' : '无号'
          }
      },
      methods:{
        handleReservation(dept){
          this.$router.push({
            path: '/reservation/'+ dept + '/time/'+ '普通号'
          })
        }
      }
    }
</script>

<style lang="scss" scoped>
  .dept-reservation{
    /*height: 42px;*/
    /*line-height: 40px;*/
    padding-left: 30px;
    font-size: 24px;
    color: #263768;
    /*font-weight: bold;*/
    position: relative;
  }
  .normal-reservation {
    float: left;
    width: 100%;
    height: 115px;
    overflow: hidden;
    padding: 20px;
    margin-top: -1px;
    border-top: 1px dotted #eee;

    a {
      text-decoration: none;
    }

    .expert {
      text-align: center;
      display: -webkit-box;
      -webkit-box-pack: center;
      -webkit-box-orient: vertical;
    }

    .is-available {
      margin-bottom: 20px;
      width: 98px;
    }

    .yy-img {
      float: left;
      width: 140px;
      height: 105px;
      margin: 5px 15px 0 0;
    }

    .yy-msg {
      float: left;
      overflow: hidden;
      margin-right: 0px;

      .yy-name {
        max-width: 206px;
        font-size: 18px;
        font-family: 微软雅黑;
        color: #000;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;

        .doc-title {
          color: #999999;
          padding-left: 10px;
        }
      }
    }

    .as {
      float: right;
      overflow: hidden;
      display: -webkit-box;
      -webkit-box-pack: center;
      -webkit-box-orient: vertical;
    }
  }
</style>
