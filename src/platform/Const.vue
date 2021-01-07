<template>
  <div class="container">
    <el-row :gutter="20" class="el1 flex">
      <span class="span1">区域耗能：</span>
      <el-input
        placeholder="输入查询的地区"
        suffix-icon="el-icon-search"
      ></el-input>
      <el-button>查询</el-button>
      <el-button class="bt1"
        >查看全部区域<i class="el-icon-arrow-right"></i
      ></el-button>
    </el-row>
    <el-row :gutter="20" class="el2 flex">
      <div class="col1">
        <img :src="imgUrl" />
        <span class="s1">能耗总览</span>
        <div class="hr">
          <hr style="border: 1.5px inset #f0f0ef8f; width: 95%" />
        </div>

       
    <div class="c">
      <ul>
        <li>单位：kWh</li>
        <li style="position:relative;left:-0.3rem;">今日用电：<span style="color: #343432">68.64</span></li>
        <li style="position:relative;left:-0.3rem;">昨日用电：<span style="color: #343432">74.12</span></li>
        <li style="position:relative;left:-0.35rem;">本月用电：<span style="color: #343432;position:relative;left:0.9rem;">249.01</span></li>
        <li style="position:relative;left:-0.42rem;">累计用电:<span style="color: #343432;position:relative;left:0.95rem;">1247.35</span></li>
      </ul>
    </div>
    <div class="con">
      <ul>
        <li>单位：kWh</li>
        <li style="position:relative;left:-0.3rem;">今日用电：<span style="color: #343432">68.64</span></li>
        <li style="position:relative;left:-0.3rem;">昨日用电：<span style="color: #343432">74.12</span></li>
        <li style="position:relative;left:-0.35rem;">本月用电：<span style="color: #343432;position:relative;left:0.9rem;">249.01</span></li>
        <li style="position:relative;left:-0.42rem;">累计用电:<span style="color: #343432;position:relative;left:0.95rem;">1247.35</span></li>
      </ul>
    </div>
  
      </div>
      <div class="col2">
        <img :src="img1" class="img1" />
        <span class="s1">办公区能耗</span>
        <div class="hr">      
          <hr style="border: 1.5px inset #f0f0ef8f; width: 95%" />
        </div>
        <Tj  style="position:relative;left:0.1rem"/>
      </div>
      <div class="col3">
        <img :src="img2" class="img1" />
        <span class="s1">分项能耗监测</span>
        <div class="hr">
          <hr style="border: 1.5px inset #f0f0ef8f; width: 95%" />
        </div>
        <Jc style="position:relative;"/>
      </div>
    </el-row>
    <el-row :gutter="20" class="el3 flex-col">
      <img :src="img3" class="img1" />
      <span class="s1">区域能耗趋势</span>
      <div class="hr">
        <hr style="border: 1.5px inset #f0f0ef8f; width: 98%" />
      </div>  
      <Qs style="position:relative;" class="qs"/>
    </el-row>
  </div>
</template>
<script>
import Tj from "./ym/Tj.vue";
import Jc from "./ym/Jc.vue";
import Qs from "./ym/Qs.vue";
import {defineBaseRem} from './defineBaseRem'
export default {
  data() {
    return {
      imgUrl: require("../assets/images/yyimg/nenglipinggu.png"),
      img1: require("../assets/images/yyimg/yuangongxinxi.png"),
      img2: require("../assets/images/yyimg/jixiao.png"),
      img3: require("../assets/images/yyimg/nengyuan.png"),
    };
  },
  components: {
    Tj,
    Jc,
    Qs,
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
<style scoped>
.qs {
  flex-direction: column;
  position: relative;
  top:-0.3rem;
}
.flex {
  display: flex;
  flex-wrap: nowrap;
}
.container {
  width: 13.5rem;
  height: 8rem;
  background-color: #f4f5fa;
  position: relative;
  float: left;
  /* top: -0.6rem; */
}
.el1 {
  width: 95%;
  height: 0.6rem;
  position: relative;
  float: left;
  left: 0.5rem;
  top: 0.2rem;
  background-color: #fff;
  border-radius: 0.05rem;
  /* flex-direction: column; */
}
.el2 {
  width: 95%;
  height: 3.1rem;
  position: relative;
  float: left;
  left: 0.5rem;
  top: 0.3rem;
  background-color: #f4f5fa;
  border-radius: 0.05rem;
}
.el3 {
  width: 95%;
  height: 3rem;
  position: relative;
  float: left;
  left: 0.5rem;
  top: 0.5rem;
  background-color: #fff;
  border-radius: 0.05rem;
}
.col1 {
  width: 25%;
  height: 3.2rem;
  position: relative;
  float: left;
  background-color: #fff;
  border-radius: 4px;
}
.col2 {
  width: 25%;
  height: 3.2rem;
  position: relative;
  left: 0.16rem;
  background-color: #fff;
  border-radius: 4px;
}
.col3 {
  width: 47.3%;
  height: 3.2rem;
  position: relative;  
  left: 0.35rem;
  background-color: #fff;
  border-radius: 4px;
}
.el-input {
  width: 20%;
  height: 0.1rem;
  position: relative;
  float: left;
  left: 3.3rem;
  top: 0.15rem;
  color: #717171;
  /* font-size: 1rem; */
}
.el-button {
  height: 0.3rem;
  position: relative;
  float: left;
  top: 0.16rem;
  left: 3.4rem;
  background-color: #2ea0f9;
  color: #ffffff;
  /* font-size: 1rem; */
}
.bt1 {
  height: 0.3rem;
  position: relative;
  float: left;
  top: 0.16rem;
  left: 3.45rem;
  background-color: #fff;
  color: #676767;
  /* font-size: 1rem; */
}
span {
  position: relative;
  float: left;
  top: 0rem;
  left: 0.8rem;
  /* font-size: 1rem; */
  font-weight: 600;
}
.span1 {
  position: relative;
  float: left;
  top: 0.2rem;
  left: 3.2rem;
  /* font-size: 1rem; */
  font-weight: 600;
}
img {
  width: 2vh;
  height: 2vh;
  position: relative;
  float: left;
  left: 1vh;
  margin-top: 1vh;
}
.hr {
  position: relative;
  float: left;
  width: 100%;
}
.s1 {
  text-align: left;
  font-weight: 600;
  font-family: 微软雅黑;
  position: relative;
  float: left;
  left: 0.1rem;
  top: 0.8vh;
}
.c {
  width: 40%;
  height: 25vh;
  position: relative;
  left:0.2rem;
  top:0.3rem;
  background-color: #fefaee;
  border-radius: 8px;
  overflow: hidden;
}
.con {
  width: 40%;
  height: 25vh;
  position: relative;
  top: -1.4rem;
  left: 1.5rem;
  margin-left: 3vh;
  background-color: #F5F8FF;
  border-radius: 8px;
  overflow: hidden;
}
ul {
  text-align:center;
  text-align: left;
}
ul li {
  list-style: none;
  line-height: 4.5vh;
  /* text-align: center; */
  text-align: left;
  color: #999a9c;
}
</style>