<template>

<el-container class="ech flex-col">
<el-header class="m-header"><img src="../assets/images/pdsimg/deng.png">车库应急照明-1-B相电压<hr style="width=100%" color="#C0C0C0"></el-header>
  <el-container class="main">
      <div class="s">对比日期(1):</div>
      <div class="main1"><el-input v-model="input" placeholder="yyyy-mm-dd"></el-input></div>
      <div class="s">对比日期(2):</div>
      <div class="main1"><el-input v-model="input" placeholder="yyyy-mm-dd"></el-input></div>
      <div><button class="sbtn">查询</button></div>
  </el-container>
      <el-container class="ech">
        <Echarts/>
      </el-container>
</el-container>
</template>     
<script>
import Echarts from './echarts.vue'
export default {
  components: {
    Echarts
  } 
}
</script>
<style>
.m-header {
    height: 40px !important;
    width: 100%;
    text-align: left;
    font-size: 15px;
  }
.main{
    margin-top: 80px;
    height: 80px;
    margin-left: 250px;
}
.main1{
    height: 20px;
    width: 150px;
    margin-top: 10px;
    margin-left: 20px;
}
.s{
    margin-left: 40px;
    margin-top: 17px;
    font-size: 15px;
}
.sbtn{
    height: 25px;
    width: 50px;
    margin-top: 20px;
    margin-left: 70px;
    background-color: #2EA0F9;
    color: aliceblue;
    border: none;
    border-radius: 2px;
}
.flex {
  display: flex;
  flex-wrap: nowrap;
}
</style>