<template>
  <el-table
    :data="tableData"
    stripe
    style="width: 100%;margin-left: 10px;">
    <el-table-column
      prop="date"
      label="日期时间"
      width="225">
    </el-table-column>
    <el-table-column
      prop="name"
      label="专家姓名"
      width="100">
    </el-table-column>
    <el-table-column
      prop="name"
      label="科室"
      width="100">
    </el-table-column>
    <el-table-column
      prop="address"
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
    export default {
      name: "record",
      data() {
        return {
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
      }
    }
</script>

<style scoped>

</style>
