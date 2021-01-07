<template>
  <div class="ech flex-col">
<el-row :gutter="10">
  <el-col :span="12">
    <div class="grid-content bg-purple">
     <el-container>
          <el-footer class="footer"><img src="../assets/images/pdsimg/floor.png" width="470px" height="550px"></el-footer>
     </el-container>
     <div class="louceng">
       <table class="f">
         <tr>
           <td><button>20</button></td>
           <td><button>20</button></td>
         </tr>
         <tr>
           <td><button>19</button></td>
           <td><button>19</button></td>
         </tr>
         <tr>
           <td><button>18</button></td>
           <td><button>18</button></td>
         </tr>
         <tr>
           <td><button>17</button></td>
           <td><button>17</button></td>
         </tr>
         <tr>
           <td><button>16</button></td>
           <td><button>16</button></td>
         </tr>
         <tr>
           <td><button>15</button></td>
           <td><button>15</button></td>
         </tr>
         <tr>
           <td><button>14</button></td>
           <td><button>14</button></td>
         </tr>
         <tr>
           <td><button>13</button></td>
           <td><button>13</button></td>
         </tr>
         <tr>
           <td><button>12</button></td>
           <td><button>12</button></td>
         </tr>
         <tr>
           <td><button>11</button></td>
           <td><button>11</button></td>
         </tr>
         <tr>
           <td><button>10</button></td>
           <td><button>10</button></td>
         </tr>
         <tr>
           <td><button>9</button></td>
           <td><button>9</button></td>
         </tr>
         <tr>
           <td><button>8</button></td>
           <td><button>8</button></td>
         </tr>
         <tr>
           <td><button>7</button></td>
           <td><button>7</button></td>
         </tr>
         <tr>
           <td><button>6</button></td>
           <td><button>6</button></td>
         </tr>
         <tr>
           <td><button>5</button></td>
           <td><button>5</button></td>
         </tr>
         <tr>
           <td><button>4</button></td>
           <td><button>4</button></td>
         </tr>
         <tr>
           <td><button>3</button></td>
           <td><button>3</button></td>
         </tr>
         <tr>
           <td><button>2</button></td>
           <td><button>2</button></td>
         </tr>
         <tr>
           <td><button>1</button></td>
           <td><button>1</button></td>
         </tr>
       </table>
     </div>
    </div>
  </el-col>
  
  <el-col :span="12">
    <div class="grid-content bg-purple">
     <el-container class="left">
        <table class="nenghao">
          <tr>
            <td class="b"><span>1406</span><h6>示值:11076kwh<br>余电:885.6kwh<br>2020-09-2410:21:36</h6></td>
            <td class="b"><span>1407</span><h6>示值:11076kwh<br>余电:885.6kwh<br>2020-09-2410:21:36</h6></td>
            <td class="b"><span>1408</span><h6>示值:11076kwh<br>余电:885.6kwh<br>2020-09-2410:21:36</h6></td>
            <td rowspan="3" class="b"><span>1401</span><h6>示值:11076kwh<br>余电:885.6kwh<br>2020-09-2410:21:36</h6></td>
          </tr>
          <tr>
            <td rowspan="2" class="b"><span>1405</span><h6>示值:11076kwh<br>余电:885.6kwh<br>2020-09-2410:21:36</h6></td>
            <td colspan="2" class="c"><center><div class="mm">B座-14F能耗信息</div></center></td>
          </tr>
          <tr>
            <td colspan="2" class="c"><span>公共区域</span><h6>示值:11076kwh<br>余电:885.6kwh<br>2020-09-2410:21:36</h6></td>
          </tr>
          <tr>
            <td class="b"><span>1404</span><h6>示值:11076kwh<br>余电:885.6kwh<br>2020-09-2410:21:36</h6></td>
            <td class="b"><span>1403</span><h6>示值:11076kwh<br>余电:885.6kwh<br>2020-09-2410:21:36</h6></td>
            <td colspan="2" class="b"><span>1402</span><h6>示值:11076kwh<br>余电:885.6kwh<br>2020-09-2410:21:36</h6></td>
          </tr>
        </table>
     </el-container>
     <el-container class="ech flex-col">
       <chart-1 class="ch1"/>
     </el-container>
    </div>
    </el-col>
    </el-row>
  </div>
</template>
<script>
import chart1 from './chart1.vue'
export default {
  components: { chart1 },
  data(){
    return{
      state:'true'
    }
  }
}
</script>

<style scoped>
.flex {
  display: flex;
  flex-wrap: nowrap;
}
.ch1 {
  flex-direction: column;
}
  .footer{
    margin-top: 10px;
    margin-left: 80px;
  }
  .bg-purple {
    flex-direction: column;
    background:#F4F5FA;
    height: 555px;
    text-align: left;
  }
  .f{
    border-spacing:180px 2px ;
    overflow: hidden;
    margin-left: -20px;
    border-collapse: separate;
  }
  .f>tr>td>button{
    border: none;
    width: 65px;
    height: 17px;
    background:#2A80B4;
    line-height: normal;
  }
  .left{
    height: 350px;
    width: 600px;
  }
  .nenghao{
    height: 200px;
    width: 500px;
    background:#F4F5FA;
    margin-top: 10px;
    margin-left: 60px;  
    margin: 0px,auto;
    text-align: center;
    border-color: #F4F5FA;
  }
  .c{
    background: white;
  }
  
  .b{
    background: #C6CEE2;
  }
  span{
    color: #25A5F7;
    font-size: 15px;
    font-weight:bold;
  }
  .mm{
    width: 150px;
    height: 35px;
    border: 0px solid #000;
    border-radius: 25px;
    background: #E6E6E6;
    text-align:center;
    display: table-cell;
    vertical-align:middle;
    font-weight:bold;
  }
  h6{
    font-size: 2px;
  }
  .ech{
    /* height: 200px;
    width: 600px;
    margin-left: 20px; */
    flex-direction: column-reverse;
  }
</style>