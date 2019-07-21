<template>
    <div class="navMenu">
        <el-row type="flex">
            <el-col :span="18" style="margin-left: 11.5%;margin-top: 10px;">
              <el-card>
                <DeptsUnion v-for="(union, index) in depts" :key="index" :union="union" :index="index" />
              </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
  import DeptsUnion from './deptsunion'

    export default {
        name: "navmenu",
        data(){
          return{
              depts: [
                {id:"骨科", content:["创伤骨科", "骨科", "关节外科", "手足外科", "骨质疏松门诊", "脊柱外科"]},
                {id: "妇产科", content: ["妇科", "产科营养门诊", "遗传科", "胎儿医学"]},
                {id: "消化内科", content: ["胃食管反流病", "消化内科", "炎症性肠病"]}],
          }
        },
      components: {DeptsUnion}
    }
</script>

<style scoped>

</style>
