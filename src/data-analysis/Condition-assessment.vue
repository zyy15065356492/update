<template>
<!-- 在外面容器 -->
  <div class="interface">
    <!-- 小标题 -->
    <div class="title2">
      <div class="ima">
        <img
          src="..\assets\images\home\projects-distribution.png"
          alt=""
          class="image"
        />
      </div>
      <div class="txt">设备状态评价</div>
    </div>
    <!-- 内容 -->
    <div class="container">
      <div class="row">
        <!-- 左侧内容 -->
        <div class="col-md-5 col-lg-5 col-sm-5 col-xs-5">
          <div id="zt">
            <Ztcanvas :gradenum1="Gradenum1" class="ccc"> </Ztcanvas>
            <div class="number" id="bb">{{Gradenum1 }}</div>
            <div class="fen">分</div>
          </div>
        </div>
        <!-- 右侧内容 -->
        <div class="col-md-7 col-lg-7 col-sm-7 col-xs-7">
          <div class="ztdata">
            <Ztdata></Ztdata>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

import Ztdata from "../components/utils/ztdata";
import { Gradenum1 } from "../mock/data-analyse-datas";
import "bootstrap/dist/css/bootstrap.min.css";
import {scoreList} from '../api/article'
import Ztcanvas from '../components/utils/ztcanvas'
export default {
  data() {
    return {
      // Score_B: 0, //大球分数
      Gradenum1,
    };
  },
  computed: {},
  components: {
    Ztcanvas,
    Ztdata,
  },
  mounted() {
    // console.log(this.Gradenum)
    // scoreList({
    //   callback: "jQuery341035544206163731995_1608773947981",
    //   UIDstr: "OTVCREZENjRCMkYzRDMxMQ",
    //   TaskIDstrS:
    //     "NjYwMjA0OTk5NkQzQzM4NA,MjQwNUY1QkEwNTI3RENFNA,MDY2NjMyNEM1RTczRTc0NA,OEQ3NUZCMUU1MDdBMkFCRg,MUE4OTU0MTc0QTY1MEZDNQ,M0M1N0IyQ0REQ0Q4NDFEMg,QjY4NERFRTYxM0U2N0MzNw,RkE5QzJBQjdGOTcxMEMzQg",
    //   _: "1608773947983",
    // })
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err)=>{
    //       console.log('err')
    //   });
    this.media()
  },

  methods: {
    //适配屏幕宽1360与1366时，右侧分数球的大小改变
    media(){
      if(window.screen.width==1360||window.screen.width==1366){
        document.getElementsByClassName('ccc')[0].style.transform='scale(0.8)'
      }
    }
  },
};
</script>
<style scoped>
.number {
  z-index: 999;
  margin-top: 19%;
  font-family: FZDHTJW--GB1-0;
  font-size: 10.3rem;
  display: flex;
  font-weight: 800;
  color: #595454;
}
.fen {
  z-index: 999;
  font-family: FZDHTJW--GB1-0;
  margin-top: 24%;
  font-size: 3.2rem;
  display: flex;
  font-weight: 100;
  color: #595454;
}

#zt {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 18%;
}

.container {
  width: 100%;
  flex-grow: 1;
}
.ccc {
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 47.8571rem;
  min-width: 47.8571rem;
  height: 29rem;
/* margin-left: 7%; */
  margin-top: 10%;
  position: fixed;
  transform-origin: 11.5714rem -4.71428rem;
}

</style>