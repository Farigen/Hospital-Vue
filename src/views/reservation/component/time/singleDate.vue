<template>
  <li>
    <el-row>
      <el-col :span="20" :offset="2">
        <el-card class="singleDate">
          <el-row type="flex">
            <el-col :span="6" :offset="1">
              <span>{{dateString}}</span>
            </el-col>
            <el-col :span="3" :offset="14">
              <el-button type="primary" class="submit-button" @click.native.prevent="handleIsAvailable">{{availableButton}}</el-button>
            </el-col>
          </el-row>

          <el-row style="margin-top: 10px" v-if="displayAM8" >
            <el-col :span="10" :offset="1">
              <el-card>
                <el-row>
                  <el-col :span="12">
                    <span>08:00-10:00</span>
                  </el-col>
                  <el-col :span="8" :offset="4">
                    <el-button type="primary" class="submit-button" @click.native.prevent="handleSubmit" :disabled="!isAvailable">预约</el-button>
                  </el-col>
                </el-row>
              </el-card>
            </el-col>

          </el-row>

          <el-row style="margin-top: 10px" v-if="displayAM10">
            <el-col :span="10" :offset="1" >
              <el-card>
                <el-row>
                  <el-col :span="12">
                    <span>10:00-12:00</span>
                  </el-col>
                  <el-col :span="8" :offset="4">
                    <el-button type="primary" class="submit-button" @click.native.prevent="handleSubmit" :disabled="!isAvailable">预约</el-button><!--:disabled="!isAvailable"-->
                  </el-col>
                </el-row>
              </el-card>
            </el-col>
          </el-row>

          <el-row style="margin-top: 10px" v-if="displayPM" >
            <el-col :span="10" :offset="1">
              <el-card>
                <el-row>
                  <el-col :span="12">
                    <span>14:30-16:30</span>
                  </el-col>
                  <el-col :span="8" :offset="4">
                    <el-button type="primary" class="submit-button" @click.native.prevent="handleSubmit" :disabled="!isAvailable">预约</el-button>
                  </el-col>
                </el-row>
              </el-card>
            </el-col>
          </el-row>

        </el-card>
      </el-col>
    </el-row>
  </li>
</template>

<script>
  import axios from 'axios'
  import qs from 'qs'

    export default {
        name: "singleDate",
        props: {
          register: Object
        },
        data(){
          return{
            isAvailable: true,
            displayAM8: false,
            displayAM10: false,
            displayPM: false,
            date: Date,
            dateString: ''
          }
        },
        mounted(){
          this.date = new Date(this.register.dateTime.substr(5, 2) + ' ' + this.register.dateTime.substr(8, 2) + ','
            + this.register.dateTime.substr(0, 4) + ' ' + this.register.dateTime.substr(11, 8));
          this.dateString = this.getDateString(this.date)
          if (this.register.availableNum === 0){
            this.isAvailable = false;
          }
        },
        methods: {
          handleIsAvailable(){
            switch (this.date.getHours()) {
              case 8: {
                this.displayAM8 = !this.displayAM8;
                break;
              }
              case 10: {
                this.displayAM10 = !this.displayAM10;
                break;
              }
              case 14: {
                this.displayPM = !this.displayPM;
                break;
              }
            }
          },
          handleSubmit(){
            axios.post("http://localhost:8081/addPatientOrder", qs.stringify({
              registerId: this.register.id,
              userId: this.$store.state.userId,
            })).then(res=>{
              if (res.data.flag === 'success') {
                alert('预约成功！');
              }else {
                alert('预约失败！');
              }
            }).catch(err=>{
              console.log(err)
            })
          },
          getDateString(date) {
            let nowDate = new Date();
            if (date.getTime() === nowDate.getTime()) {
              alert(date.getTime()+" : " + nowDate.getTime());
              return (date.getHours() <= 12 ? '今天上午' : '今天下午')
            } else {
              let tempMonth = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
              let tempDate = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
              if (date.getHours() <= 12) {
                return (tempMonth + '月' + tempDate + '日 ' + this.getWeek(date.getDay()) + ' 上午');
              } else {
                return (tempMonth + '月' + tempDate + '日 ' + this.getWeek(date.getDay()) + ' 下午');
              }
            }
          },
          getWeek(weekNo) {
            return "星期" + "日一二三四五六".charAt(weekNo);
          },
        },
        computed: {
           availableButton : function() {
             return this.isAvailable === true ? '有号' : '无号';
           },
        }
    }
</script>

<style lang="scss" scoped>
.singleDate{
  margin-bottom: 20px;
  /*width: 60%;*/
}
</style>
