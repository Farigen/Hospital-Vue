<template>
  <li>
    <el-row>
      <el-col :span="20" :offset="2">
        <el-card class="singleDate">
          <el-row type="flex">
            <el-col :span="6" :offset="1">
              <span>{{date}}</span>
            </el-col>
            <el-col :span="3" :offset="14">
              <el-button type="primary" class="submit-button" @click.native.prevent="handleIsAvailable">{{availableButton}}</el-button>
            </el-col>
          </el-row>

          <el-row style="margin-top: 10px" v-if="displayAM" >
            <el-col :span="10" :offset="1">
              <el-card>
                <el-row>
                  <el-col :span="12">
                    <span>08:00-10:00</span>
                  </el-col>
                  <el-col :span="8" :offset="4">
                    <el-button type="primary" class="submit-button" @click.native.prevent="handleIsAvailable" :disabled="!isAvailable">预约</el-button>
                  </el-col>
                </el-row>
              </el-card>
            </el-col>
            <el-col :span="10" :offset="2">
              <el-card>
                <el-row>
                  <el-col :span="12">
                    <span>10:00-12:00</span>
                  </el-col>
                  <el-col :span="8" :offset="4">
                    <el-button type="primary" class="submit-button" @click.native.prevent="handleIsAvailable" :disabled="!isAvailable">预约</el-button><!--:disabled="!isAvailable"-->
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
                    <el-button type="primary" class="submit-button" @click.native.prevent="handleIsAvailable" :disabled="!isAvailable">预约</el-button>
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
    export default {
        name: "singleDate",
        props: {
          date: '',
        },
        data(){
          return{
            isAvailable: true,
            displayAM: false,
            displayPM: false
          }
        },
        methods: {
          handleIsAvailable(){
            if (this.date.indexOf('上午') > 0){
              this.displayAM = !this.displayAM;
            } else{
              this.displayPM = !this.displayPM;
            }
          }
        },
        computed: {
           availableButton : function() {
             return  this.isAvailable === true ? '有号' : '无号'
           }
        }
    }
</script>

<style lang="scss" scoped>
.singleDate{
  margin-bottom: 20px;
  /*width: 60%;*/
}
</style>
