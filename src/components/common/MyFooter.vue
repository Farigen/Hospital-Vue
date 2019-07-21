<template>
  <div class="footer">
    <p class="hr">
      <span></span>
    <p>
    <p>服务条款&nbsp;&nbsp;|&nbsp;&nbsp;隐私政策</p>
    <p>Copyright By <a :href="url">Lucas</a></p>
  </div>
</template>

<script>
    export default {
        name: "myFooter",
        data(){
          return{
            url: 'https://github.com/Lucas-Wang'
          }
        }
    }
</script>

<style scoped>
  .footer{
    padding:30px 0px;
    font-style: italic;
    font-size: 14px;
  }
  .hr{
    text-align:center;
    margin-bottom:10px !important;
  }
  .hr span{
    display:inline-block;
    width:350px;
    border-top:1px solid #444;
  }
  .footer p{
    margin:0;
    text-align:center;
  }
</style>
