<template>
  <el-card>
    <!--{{$route.params.dept}}: {{$route.params.doc}}-->
    <div slot="header" class="title">
      <span>预约挂号</span>
    </div>
    <div class="reservation-time">
      <ul>
          <SingleDate v-for="(date, index) in timeArrayOfNormal" :key="index" :date="date" />
      </ul>
    </div>
    <!--<el-backtop target=".page-component__scroll .el-scrollbar__wrap"></el-backtop>-->
  </el-card>
</template>

<script>
  import axios from 'axios'
  import SingleDate from './singleDate'

    export default {
        name: "dateList",
        components: {SingleDate},
        data(){
          return{
            dept: '',
            timeArrayOfNormal: [],
            timeArrayOfExpert: [],
            nowTime: '',
          }
        },
      mounted() {
          /*axios.post('/getTime').then(res =>{

          }).catch(err=>{

          })*/
          this.nowTimes();
      },
      methods: {
          getWeek(weekNo) {
            return "星期" + "日一二三四五六".charAt(weekNo);
           },
          getTimeArrayOfNormal(){
            const tempArray = [];
            let nowDate = new Date();
            let hh = nowDate.getHours();
            if (hh <= 12) {
              tempArray.push('今天上午')
              tempArray.push('今天下午')
            }else if(12 < hh) {
              tempArray.push('今天下午')
            }
            let month = nowDate.getMonth();
            let date = nowDate.getDate();
            let year = nowDate.getFullYear();
            let week = nowDate.getDay();

            for (let i = 1; i < 7; i++){
                let monthDaysCount = new Date(year, month + 1, 0).getDate();
                let tempDate = (date + i) < monthDaysCount ? (date + i) : 1;
                let tempMonth = (date + i) < monthDaysCount ? month : month + 1;
                let tempWeek = week + i < 7 ? week + i : 0;

                tempMonth = tempMonth + 1 < 10? "0" + (tempMonth + 1) : tempMonth + 1;
                tempDate= tempDate < 10? "0" + tempDate: tempDate;

                tempArray.push(tempMonth+'月'+tempDate+'日 '+ this.getWeek(tempWeek) + ' 上午');
                tempArray.push(tempMonth+'月'+tempDate+'日 '+ this.getWeek(tempWeek) + ' 下午');
            }

            this.timeArrayOfNormal = tempArray;
        },
        nowTimes(){
          this.getTimeArrayOfNormal();
          setInterval(this.nowTimes,30*1000);
        },

      }
    }
</script>

<style lang="scss" scoped>
.title{
  padding-left: 30px;
  font-size: 24px;
  color: #263768;
}
  .reservation-time li{
    list-style-type:none;
  }
</style>
