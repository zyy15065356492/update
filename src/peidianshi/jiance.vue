<template>
  <div class="hello">
<el-row :gutter="10">
  <el-col :span="16" xl="16">
    <div class="grid-content bg-purple">
     <el-container>
     <el-header class="header"><img src="../assets/images/pdsimg/biao.png" height="18px" width="24px" class="p">一次接线图<hr></el-header>
     <el-main class="main"><center><h3>基本信息</h3></center>
        <table  class="b" width="600px">
          <tr>
            <td>
              客户名称：夏津仁和纺织科技有限公司
            </td>
            <td>
              联系电话：许*  13884683034
            </td>
          </tr>
          <tr>
            <td>客户地址：夏津县银海路以东、银城路北侧</td>
          </tr>
        </table>
     </el-main>
     <el-footer class="footer"><img src="../assets/images/pdsimg/jiexianbiao.png" width="100%" height="100%" padding-bottom="100%"></el-footer>
</el-container>
    </div>
    </el-col>
  
  <el-col :span="8" xl="8">
    <div class="grid-content bg-purple">
     <el-container>
     <el-header class="header-r"><img src="../assets/images/pdsimg/shexiangtou.png" height="18px" width="24px" class="p">辅助监控<hr></el-header>
     <el-main class="main-r"><img src="../assets/images/pdsimg/jiankong.png" width="350px" height="200px"></el-main>
     <el-footer class="foot-r">
       <table class="h">
         <tr>
           <td>漏电</td>
           <td :style="{'color': (state=='true' ? '#808080':'#ff0000')}"><font size="6" color="#D6D6D6">●</font></td>
           <td>支路过载</td>
           <td :style="{'color': (state=='true' ? '#808080':'#ff0000')}"><font size="6" color="#D6D6D6">●</font></td>
         </tr>
         <tr>
           <td>过压</td>
           <td :style="{'color': (state=='true' ? '#808080':'#ff0000')}"><font size="6" color="#D6D6D6">●</font></td>
           <td>变电器超温</td>
           <td :style="{'color': (state=='true' ? '#808080':'#ff0000')}"><font size="6" color="#D6D6D6">●</font></td>
         </tr>
         <tr>
           <td>断电</td>
           <td :style="{'color': (state=='true' ? '#808080':'#ff0000')}"><font size="6" color="#D6D6D6">●</font></td>
           <td>三相不平衡</td>
           <td :style="{'color': (state=='true' ? '#808080':'#ff0000')}"><font size="6" color="#D6D6D6">●</font></td>
         </tr>
         <tr>
           <td>超温</td>
           <td :style="{'color': (state=='true' ? '#808080':'#ff0000')}"><font size="6" color="#D6D6D6">●</font></td>
           <td>短路</td>
           <td :style="{'color': (state=='true' ? '#808080':'#ff0000')}"><font size="6" color="#D6D6D6">●</font></td>
         </tr>
       </table>
     </el-footer>
</el-container>
    </div>
    </el-col>
    </el-row>
  </div>
</template>

<script>
import pop from './pop'
export default {
  data(){
    return{
      state:'true',
      pop
    }
  }
}
</script>
<style scoped>
 .el-row {
    margin-bottom: 10px;
  }
  .el-col {
    border-radius: 4px;
  }
  .main{
    margin-left: 10px;
    height: 175px;
    width: 800px;
    background:#F5F8FF;
  }
  ul li{
    list-style: none;
    float: left;
  }
  .footer{
    height: 200px !important;
    width: 800px !important;
    margin-top: 15px;
    margin-left: 10px;
  }
  .foot-r{
    margin: 0,auto;
  }
  .b{
    height: 70px;
  }
  .h{
    width: 300px;
    height: 200px;
    overflow: hidden;
    text-align: right;
  }
  .bg-purple-dark {
   background: #000;
  } 
  .bg-purple {
    background:#F4F5FA;
    height: 500px;
    text-align: left;
  }
  .bg-purple-light {
    background:#F4F5FA;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #ffffff;
  }
  .btn{
    border: none;
  }
  .p{
    margin-top: 6px;
  }
  /* .all{
    height: 100%;
    width: 100%;
  } */
</style>
