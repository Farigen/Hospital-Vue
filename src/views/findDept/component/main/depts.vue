<template>
    <!--<div>This is {{$route.params.name}}</div>-->
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>{{$route.params.name}}</span>
      </div>
      <div class="depts-ul">
        <ul>
          <a  v-for="(dept, index) in depts" :key="index" >
            <li @click="handleClick(dept)">{{dept}}</li>
          </a>
        </ul>
      </div>
    </el-card>

</template>

<script>
  import axios from 'axios'
  import qs from 'qs'

    export default {
        name: "depts",
        data(){
          return{
            depts: [],
            type: this.$route.params.name
          }
        },
        mounted() {
          // this.type = this.$route.params.name;
          axios.post('/getDeptsByTypeName', qs.stringify({
            typeName: this.type
          })).then(res =>{
            const temp = [];
            res.data.forEach(dept=>{
              temp.push(dept.name);
            });
            this.depts = temp;
          }).catch((err)=>{
            alert('err:' + err)
          });
         /* const depts = ['心血管内科', '神经内科', '消化内科', '内分泌科', '免疫科', '呼吸科', '肾病内科', '血液科', '感染内科', '过敏反应科', '老年病科', '普通内科'
            , '血液透析科', '变态反应科', '感染科', '风湿免疫科', '社区全科', '炎症性肠病内科门诊', '肝病科'];
          this.depts = depts;*/
        },
      methods:{
          handleClick(dept){
            this.type = dept;
            this.$router.push({
              path: '/reservation/'+dept,
              params:{
                'name' : dept
              }
            });
          },
          setData(res){
            const temp = [];
            res.data.forEach(dept=>{
              temp.push(dept.name);
            });
            this.depts = temp;
          }
      },
      //beforeRouteEnter和beforeRouteUpdate用于在跳转路由时刷新数据
      //reference: https://www.cnblogs.com/mirrortom/p/10711396.html
      // 这个方法不用调用this,因为此时机组件还没生成,所以无this
      // 要调用刷新数据方法时,需要写在next回调里,
      // next是在组件生成后会调用
      beforeRouteEnter(to, from, next) {
        //axios包含vm是为了保证先得到数据再赋值渲染
        axios.post('/getDeptsByTypeName', qs.stringify({
          typeName: to.params.name
        })).then(res =>{
          next((vm) => {
            vm.setData(res)
          });
        }).catch((err)=>{
          alert('err:' + err)
        });
      },

    // 这个方法是路由不变,只变参数时执行
      beforeRouteUpdate(to, from, next) {
        axios.post('/getDeptsByTypeName', qs.stringify({
          typeName: to.params.name
        })).then(res =>{
          this.setData(res)
        }).catch((err)=>{
          alert('err:' + err)
        });
        next();
      }
    }
</script>

<style lang="scss" scoped>
  .box-card{
    width: 100%;
    height: 100%;
    background-image: url("../../../../assets/meihua.jpg");

  }

  .depts-ul {
    width: 100%;
    height: 100%;
    color: #000;
    li {
      width: 22.7%;
      margin: 0 1% 15px 1%;
      border: 1px solid #9a9a9a;
      border-radius: 5px;
      height: 36px;
      text-align: center;
      line-height: 36px;
      font-size: 16px;
      float: left;
      cursor: pointer;
    }
    /*hover存在问题*/
    li:hover{
      border: 1px solid #014f99;
      background-color: #014f99;
      color: #fff;
    }

    ul {
      list-style: none;
      margin-top: 7.5%;
    }

    a {
      /*color: #333;*/
      text-decoration: none;
      outline: none;
    }

  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }
  .clearfix{
    font-size: 20px;
  }
</style>
