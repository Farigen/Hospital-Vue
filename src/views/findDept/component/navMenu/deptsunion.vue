<template>
    <div>
        <el-row type="flex">
            <el-col :offset="2" :span="2">
                <span>{{union.id}}</span>
            </el-col>
          <el-col  :span="16">
              <Dept v-for="(dept, index) in union.content" :dept="dept" :key="index" :index="index"/>
          </el-col>
        </el-row>
    </div>
</template>

<script>
    import Dept from './dept'

    export default {
        name: "deptsunion",
        props: {
          union: {
            type: Object,
            default: () => {}
          }
        },
        components: {Dept}
    }
</script>

<style scoped>

</style>
