<template>
  <div class="container">
    <el-row :gutter="15" style="background: #f4f5fa; width: 100%">
      <el-col :lg="4" :xl="2">
        <div class="b1">
          <img :src="img1" />
          <span class="s1">能源数据分析</span>
          <div class="hr">
            <hr style="border: 1.5px inset #f0f0ef8f; width: 95%" />
          </div>
          <!-- 左侧导航栏 -->
          <Dhl class="dhl" />
        </div>
      </el-col>
      <el-col :lg="20" :xl="18">
        <div class="c1">
          <div class="a1">
            <img :src="img2" />
            <span class="s1">2013年建筑总能耗统计</span>
            <div class="hr">
              <hr style="border: 1.5px inset #f0f0ef8f; width: 95%" />
            </div>

            <span
              style="
                text-align: left;
                font-weight: 500;
                font-family: 微软雅黑;
                position: relative;
                float: left;
                margin-left: 5vh;
                top: 0.1rem;
              "
              >某商业办公楼-2013</span
            >
            <img :src="img6" class="img6" />
            <!-- 左侧数据 -->
            <shuju style="position: relative; top: 0.4rem; right: 1.8rem" />
            <!-- 右侧列表部分 -->
            <div
              style="
                width: 0.7%;
                height: 5%;
                background-color: #2e9bf3;
                position: relative;
                bottom: 1.72rem;
                left: 2.6rem;
              "
            ></div>
            <span
              style="
                text-align: left;
                font-weight: 500;
                font-family: 微软雅黑;
                position: relative;
                right: 1.4rem;
                bottom: 1.9rem;
              "
              >分类能耗</span
            >
            <Znhlist class="zl" />
          </div>
          <div class="a2">
            <img :src="img3" class="img3" />
            <span class="s2">2013年建筑分类耗统计</span>
            <div class="h">
              <hr style="border: 1.5px inset #f0f0ef8f; width: 95%" />
            </div>
            <div
              style="
                width: 0.7%;
                height: 5%;
                background-color: #2e9bf3;
                position: relative;
                top: -3.3rem;
                left: 0.3rem;
              "
            ></div>
            <span
              style="
                text-align: left;
                font-weight: 500;
                font-family: 微软雅黑;
                position: relative;
                top: -3.55rem;
                left: -1rem;
              "
              >某商业办公楼-2013 分类能耗</span
            >
            <Flmhlist class="fl" />
          </div>
        </div>
        <div class="c2">
          <div class="d1">
            <img :src="img4" />
            <span class="s1">2013年建筑分项能耗统计</span>
            <div class="hr">
              <hr style="border: 1.5px inset #f0f0ef8f; width: 95%" />
            </div>
            <Tj class="Tj" />
          </div>
          <div class="d2">
            <img :src="img5" />
            <span class="s1">2013年区域总能耗统计对比</span>
            <div class="hr">
              <hr style="border: 1.5px inset #f0f0ef8f; width: 95%" />
            </div>
            <Db class="Db" />
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import Tj from "./ym/Tj";
import Db from "./ym/Db.vue";
import Flmhlist from "./ym/Flmhlist.vue";
import Znhlist from "./ym/Znhlist.vue";
import Dhl from "./ym/Dhl.vue";
import shuju from "./ym/shuju.vue";
import {defineBaseRem} from './defineBaseRem'
export default {
  data() {
    return {
      img1: require("../assets/images/yyimg/list.png"),
      img2: require("../assets/images/yyimg/loujing.png"),
      img3: require("../assets/images/yyimg/leixing.png"),
      img4: require("../assets/images/yyimg/yuangongxinxi.png"),
      img5: require("../assets/images/yyimg/jixiao.png"),
      img6: require("../assets/images/yyimg/xia.png"),
      img7: require("../assets/images/yyimg/zonglan.png"),
      img8: require("../assets/images/yyimg/diannao.png"),
      radio:"1"
    };
  },
  components: {
    Tj,
    Db,
    Flmhlist,
    Znhlist,
    Dhl,
    shuju
  },
  beforeDestroy(){
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
.img3 {
  position: relative;
  top: -3.65rem;
}
.container {
  width: 100%;
  height: 100%;
}
.b1 {
  position: relative;
  float: left;
  width: 100%;
  height: 97vh;
  top: 0.1rem;
  border-radius: 5px;
  background-color: white;
}

.c1 {
  position: relative;
  float: left;
  /* top: 2rem; */
  width: 100%;
  height: 47.5vh;
  border-radius: 5px;
  top: 0.1rem;
  background-color: #f4f5fa;
}

.a1 {
  position: relative;
  float: left;
  width: 53%;
  height: 100%;
  margin-right: 3rem;
  border-radius: 5px;
  background-color: white;
}
.a2 {
  position: relative;
  /* float: left; */
  margin-bottom: 1rem;
  left: 6.05rem;
  width: 45.73%;
  height: 100%;
  border-radius: 5px;
  background-color: white;
}
.d1 {
  position: relative;
  float: left;
  width: 30%;
  height: 3.5rem;
  top: 0.2rem;
  margin-right: 1.4rem;
  border-radius: 5px;
  background-color: white;
}
.d2 {
  position: relative;
  float: left;
  bottom: 3.3rem;
  left: 3.5rem;
  width: 68.4%;
  height: 3.5rem;
  border-radius: 5px;
  background-color: white;
}
.s1 {
  text-align: left;
  font-weight: 600;
  font-family: 微软雅黑;
  position: relative;
  float: left;
  left: 1.5vh;
  top: 0.8vh;
}
.s2 {
  position: relative;
  top: -3.6rem;
  left: -1.5rem;
  font-weight: 600;
}
.hr {
  position: relative;
  float: left;
  width: 100%;
}
.h {
  position: relative;
  float: left;
  top: -3.63rem;
  width: 98%;
}
img {
  width: 2vh;
  height: 2vh;
  position: relative;
  float: left;
  left: 1vh;
  margin-top: 1vh;
}
.fl {
  position: relative;
  float: left;
  left: 0.2rem;
  top: -3.3rem;
}
.zl {
  position: relative;
  float: left;
  left: 2.5rem;
  bottom: 1.535rem;
}
.Db {
  width: 100%;
  position: relative;
  /* float: left; */
  /* top: 0.3rem; */
}
.Tj {
  width: 100%;
  position: relative;
  float: left;
  /* top: 8vh; */
}
.img6 {
  position: relative;
  float: left;
  left: -7rem;
  top: 4rem;
}
.img7 {
  position: relative;
  float: left;
  left: -7.5rem;
  top: 11.3rem;
}
.img8 {
  position: relative;
  float: left;
  left: -9.2rem;
  top: 17.6rem;
}
.dhl {
  position: relative;
  float: left;
  left: 3vh;
}
</style>
