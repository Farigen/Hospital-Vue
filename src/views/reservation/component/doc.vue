<template>
  <li class="doc-list-li">
    <el-row type="flex">
      <el-col :span="2" :offset="1">
        <a :href="doc.imageUrl" title=""><img :src="doc.imageUrl" class="yy-img" alt=""/></a>
      </el-col>
      <el-col :span="10" :offset="1">
        <div class="yy-msg">
          <div style="margin-top: 15px;">
            <a href="/nj/zonghe/64d6e.html" class="yy-name" title="name"><b>{{doc.name}}</b></a><span class="doc-title"> {{doc.title}}</span>
          </div>
          <p>
            {{doc.des}}
          </p>
        </div>
      </el-col>
      <el-col :span="4" class="expert">
        <span>专家号：￥{{doc.price}}</span>
      </el-col>
      <el-col :offset="1" :span="3" class="as">
        <!--<el-card class="is-available">有号</el-card>-->
        <el-button type="primary" class="is-available">有号</el-button><br/>
        <el-button type="primary" @click="handleReservation">预约挂号</el-button>
      </el-col>
    </el-row>
  </li>
</template>

<script>
    export default {
        name: "doc",
        props:{
          doc: Object
        },
        methods:{
          handleReservation(){
            this.$router.push({
              path: this.$router.query + '/time/' + this.doc.name
            })
          }
        }
    }
</script>

<style lang="scss" scoped>
  .doc-list-li {
    float: left;
    width: 100%;
    height: 115px;
    overflow: hidden;
    padding: 20px;
    margin-top: -1px;
    border-top: 1px dotted #eee;
    a{
      text-decoration: none;
    }
    .expert{
      text-align: center;
      display: -webkit-box;
      -webkit-box-pack:center;
      -webkit-box-orient:vertical;
    }
    .is-available{
      margin-bottom: 20px;
      width: 98px;
    }
  }

  .yy-img {
    float: left;
    /*width: 140px;*/
    height: 105px;
    margin: 5px 15px 0 0;
  }

  .yy-msg {
    float: left;
    overflow: hidden;
    margin-right: 0px;

    .yy-name{
      max-width: 206px;
      font-size: 18px;
      font-family: 微软雅黑;
      color: #000;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;

      .doc-title{
        color: #999999;
        padding-left: 10px;
      }
    }
  }
.as{
  float: right;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-pack:center;
  -webkit-box-orient:vertical;
}
</style>
