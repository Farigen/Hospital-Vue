<template>
  <el-table
    :data="records"
    stripe
    style="width: 100%;margin-left: 10px;">
    <el-table-column
      prop="date"
      label="日期时间"
      width="225">
    </el-table-column>
    <el-table-column
      prop="docName"
      label="专家姓名"
      width="100">
    </el-table-column>
    <el-table-column
      prop="deptName"
      label="科室"
      width="100">
    </el-table-column>
    <el-table-column
      prop="location"
      label="地址">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="100">
      <template slot-scope="scope">
        <el-button  type="text" size="small">查看</el-button>
        <el-button type="text" size="small">编辑</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
  import axios from  'axios'
  import qs from 'qs'

    export default {
      name: "record",
      data() {
        return {
          records: [],
          tableData: [{
            date: '2016-05-02 14:30-16:30',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04 14:30-16:30',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01 14:30-16:30',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03 14:30-16:30',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }]
        }
      },
      mounted(){
        axios.post("http://localhost:8081/getRecordsByPatientId", qs.stringify({
          userId: this.$store.state.userId
        })).then(res=>{
          res.data.forEach(record=>{
            record.date = record.date.substr(0, 10) + ' ' + record.date.substr(11, 5)
          })
          this.records = res.data
        }).catch(err=>{
          console.log(err)
        })
      }
    }
</script>

<style scoped>

</style>
