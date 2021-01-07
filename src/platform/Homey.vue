<template>
  <div class="container">
    <el-row :gutter="20" style="background: #f4f5fa">
      <el-col :lg="7" :xl="5">
        <div class="tmk1 bg-purple">
          <img :src="imgUrl" />
          <span> 购入能源费用 </span>
          <div class="hr">
            <hr style="border: 1.5px inset #f0f0ef8f; width: 95%" />
          </div>
          <span style="text-align: left">2020年度</span>
          <div style="line-height: 2.5vh">
            <img :src="img5" class="img5" />
            <span style="color: #4088ff;font-size:3vh;
            left:11vh;top:3vh;">3724759</span><span style="
            color:#666666;font-size:1.8vh;font-weight: 500;
            left:11.5vh;top:3.5vh">元</span>
            <span style="color:#666666;
            top:6.5vh;font-weight: 500;">能源总费用</span>
          </div>
          <Table class="table" />
        </div>
        <div class="xmk bg-purple">
          <img :src="img1" />
          <span>电能消耗分析</span>
          <div class="hr">
            <hr style="border: 1.5px inset #f0f0ef8f; width: 95%" />
          </div>
          <span style="text-align: left">2020年度</span>
          <span style="color:#FF7723;font-size:3vh;
          left:2vh;top:4vh">300791</span><span style="color:#666666;font-size:1.8vh;
          font-weight: 500;left:2vh;top:5.3vh">kWh</span>
          <span style="color:#FF7723;font-size:3vh;
          left:9vh;top:4vh;">7006.41</span><span style="
          color:#666666;font-size:1.8vh;
          font-weight: 500;left:9vh;top:5vh">kgce</span>
          <img :src="img6" class="img6"/>
          <span style="color:#666666;font-weight:500;
          top:8.5vh;left:-2.1rem;">消耗电量</span>
          <img :src="img7" class="img7"/>
          <span style="color:#666666;font-weight:500;
         top:-0.15rem;left:2.65rem;">消耗当量</span>
          <tablelist class="tablex" />
        </div>
      </el-col>
      <el-col :lg="7" :xl="5">
        <div class="tmk1 bg-purple">
          <img :src="img2" />
          <span>
            购入能源费用百分比
          </span>
          <div class="hr">
            <hr style="border: 1.5px inset #f0f0ef8f; width: 95%" />
          </div>
          <span style="text-align: left">2020年度</span>
          <Et class="et"/>
        </div>
        <div class="xmk bg-purple">
          <img :src="img3" />
          <span>电能消耗分项百分比</span>
          <div class="hr">
            <hr style="border: 1.5px inset #f0f0ef8f; width: 95%" />
          </div>
          <span style="text-align: left">2020年度</span>
          <Bt  class="Bt"/>
        </div>
      </el-col>
      <el-col :lg="10" :xl="8">
        <div class="tymk bg-purple">
          <img :src="img4" />
          <span>
            购入能源费用逐月对比
          </span>
          <div class="hr">
            <hr style="border: 1.5px inset #f0f0ef8f; width: 95%" />
          </div>
          <Zt class="Zt" />
          <List class="List" />
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Table from "./ym/Table.vue";
import tablelist from "./ym/tablelist.vue";
import Et from "./ym/Et.vue";
import Bt from "./ym/Bt.vue";
import List from "./ym/List.vue";
import Zt from "./ym/Zt.vue";
import {defineBaseRem} from './defineBaseRem'
// import Et1 from "./Et.vue";
export default {
  data() {
    return {
      imgUrl: require("../assets/images/yyimg/nengyuan.png"),
      img1: require("../assets/images/yyimg/nenglipinggu.png"),
      img2: require("../assets/images/yyimg/leixing.png"),
      img3: require("../assets/images/yyimg/yuangongxinxi.png"),
      img4: require("../assets/images/yyimg/jixiao.png"),
      img5: require("../assets/images/yyimg/zonglan.png"),
      img6:require("../assets/images/yyimg/nian.png"),
      img7:require("../assets/images/yyimg/jishu.png")
    };
  },
  name: "HelloWorld",
  props: {
    msg: String,
  },
  components: {
    Table,
    Et,
    Bt,
    tablelist,
    List,
    Zt,
  },
  methods: {
    abc(){
      this.$router.push({path: "/List"})
    }
  },
  beforeDestroy(){
console.log('aaaa')
     if(document.documentElement.getBoundingClientRect().width>=1300&&document.documentElement.getBoundingClientRect().width<1600){
        document.getElementsByTagName('html')[0].style.fontSize='12px'
     }
     else if(document.documentElement.getBoundingClientRect().width>=1600){
               document.getElementsByTagName('html')[0].style.fontSize='14px'
     }else{
               document.getElementsByTagName('html')[0].style.fontSize='16px'
     }
  },
  mounted(){
   defineBaseRem(1366,1024)
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  /* margin-top: -6vh; */
  width: 100%;
  height: 100vh;
}
.el-row {
  margin-bottom: 1vh;
}
.el-row .xymk {
  margin-top: -40px;
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: white;
}
.bg-purple {
  background: white;
}
.bg-purple-light {
  background: white;
}
.tmk {
  border-radius: 4px;
  min-height: 45vh;
}
.tmk1 {
  border-radius: 4px;
  min-height: 45vh;
  margin-top: 2.15vh;
}
.tymk {
  margin-top: 2.15vh;
  border-radius: 4px;
  min-height: 92vh;
}
.xmk {
  border-radius: 4px;
  margin-top: 2vh;
  min-height: 45vh;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
.table {
  position: relative;
  float: left;
  left: 5%;
  top: 0.4rem;
}
.tablex {
  position: relative;
  float: left;
  left: 5%;
  /* top: 0.1rem; */
}
.List {
  height: 20rem;
  position: relative;
  float: left;
  left: 5%;
  top: -0.4rem;
}
.Zt {
  width: 98%;
  height: 90%;
  position: relative;
  float: left;
  left: -1%;
  top: -0.4rem;
}
.Bt {
    width: 100%;
    position: relative;
    top: -0.1rem;
}
span {
  text-align: left;
  font-weight: 600;
  font-family: 微软雅黑;
  position: relative;
  float: left;
  left: 1vh;
  top: 0.8vh;
  font-size: 0.1rem;
}
img {
  position: relative;
  float: left;
  left: 0.5vh;
  margin-top: 0.8vh;
}
.img5 {
  position: relative;
  float: left;
  left: 13.5vh;
  margin-top: 6.8vh;
  width: 2vh;
  height: 2vh;
}
.img6 {
  position: relative;
  float: left;
  left: -28.5vh;
  margin-top: 8.7vh;
  width: 2vh;
  height: 2vh;
}
.img7 {
  position: relative;
  float: left;
  left: -15.5vh;
  margin-top: 8.7vh;
  width: 2vh;
  height: 2vh;
}
.hr {
  position: relative;
  float: left;
  width: 100%;
}
.et {
  width: 100%;
  position: relative;
  top: -0.1rem;
}
</style>
