<template>

    <div class="interface">
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
      <!-- 运行概况 -->
      <div class="allEvaluation">
        <div class="hhh">
          <div class="www"><Ztcanvas class="ztcanvas" :gradenum1="gradeArea">
          </Ztcanvas></div>
          <div class="number" id="bb">{{ $route.query.grade }}</div>
          <div class="fen">分</div>
        </div>
        <div class="operatView">
          <div class="notes">
            <div class="notes1">
              {{ $route.query.name }} &nbsp;&nbsp;&nbsp;&nbsp;运行概况
            </div>
            <div class="notes2">检修建议：变压器降档 台区改造，增加线径</div>
          </div>
          <div class="major">
            <div class="major1">
              {{ majorSum[0].majname }}:<span>{{ majorSum[0].majnum }}</span
              >KVA
            </div>
            <div
              v-for="(value, index) in majorSum.slice(1)"
              :key="index"
              class="major1"
            >
              {{ value.majname }}：
              <span>{{ value.majnum }}</span>
            </div>
          </div>
        </div>
        <div class="repaire">主动运检</div>
      </div>
      <!-- 内容 -->
      <div class="content">
        <!-- 处理告警条数 -->
        <div class="tips">
          <img src="..\assets\images\叹号.png" alt="" />
          <div>
            本台区未处理告警 <span>{{ alarmTotal }}</span> 条，主要告警类型为{{
              alarmDetail(Alarmclass, "aclass", "anum")
            }}，告警主要分布于{{
              alarmDetail(Alarmequip, "aename", "aenum")
            }}设备。
          </div>
        </div>
        <!-- 告警分类 -->
        <div class="alarmClass">
          <img src="..\assets\images\分类2.png" alt="" />
          <div>告警分类</div>
        </div>
        <!-- 告警分类详情 -->
        <div class="alarmClassicon">
          <div
            v-for="(value, index) in Alarmclass"
            :key="index"
            class="adetails"
          >
            <img :src="value.aimg" alt="" />
            <div>{{ value.aclass }}</div>
            <div class="aend">{{ value.anum }}项</div>
          </div>
        </div>
        <!-- 告警设备 -->
        <div class="alarmEquip">
          <img src="..\assets\images\设备.png" alt="" />
          <div>告警设备</div>
        </div>
        <!-- 告警设备详情 -->
        <div class="alarmEquipcion">
          <div
            v-for="(value, index) in Alarmequip1"
            :key="index"
            class="adetails"
          >
            <img :src="value.aeimg" alt="" />
            <div>{{ value.aename }}</div>
            <div class="aend">{{ value.aenum }}项</div>
          </div>
        </div>
        <!-- 检测项目明细 -->
        <div class="details">
          <img src="..\assets\images\分类2.png" alt="" />
          <div>检测项目明细：</div>
        </div>
        <!-- 检测项目明细详情 -->
        <div class="detailsicon">
          <div class="zong" v-for='(value,index) in Details' :key="index">
            <div class="a">
              <div class="a1a">
                <img :src="value.dicon" alt="">
                {{value.dname}}--共<span class="a1span1">{{value.dfen}}</span>分 <span class="a1span2">（实际得分100占比{{value.dfen}}%变压器健康度）</span>
              </div>
              <div class="a22" @click="show(index)">
                <img src="..\assets\images\指下.png" alt="" :id='"p"+index'>
              </div>
            </div>
            <div class="aa" :id='"a"+index'>
              <div class="aa1" v-for='(v,i) in value.ddatails' :key="i">
                <img :src="v.icon" alt="" />
                <div>{{v.iconame}}</div>
                <div class="aend">{{v.iconum}}项</div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>

</template>
<script>
import Ztcanvas from "../components/utils/ztcanvas";
import { majorSum } from "../mock/data-analyse-datas";
import { Alarmclass } from "../mock/data-analyse-datas";
import { Alarmequip } from "../mock/data-analyse-datas";
import { alarmDetail } from "../mock/data-analyse-datas";
import { Details } from '../mock/data-analyse-datas'
export default {
  data() {
    return {
      gradeArea: this.$route.query.grade,
      majorSum: majorSum,
      Alarmclass: Alarmclass,
      Alarmequip: Alarmequip,
      alarmDetail: alarmDetail,
      Details:Details
    };
  },
  methods:{
     //适配屏幕宽1360与1366时，上方分数球的大小改变
    media(){
      if(window.screen.width==1360||window.screen.width==1366){
        document.getElementsByClassName('ztcanvas')[0].style.transform='scale(0.7)'

      }
    },
    // 检测项目明细详情随箭头随展开收缩
    show(i){
      if(document.getElementById('a'+i).style.display=='flex'){
        document.getElementById('a'+i).style.display='none'
        document.getElementById('p'+i).src=require('../assets/images/指下.png')

      }
       else if(document.getElementById('a'+i).id==("a"+i)){
         document.getElementById('a'+i).style.display='flex'
         document.getElementById('a'+i).style.marginLeft=10+'%'
         document.getElementById('p'+i).src=require('../assets/images/指上.png')
       }
    }
  },
  computed: {
    // 告警红色条数数字
    alarmTotal() {
      let atotal = 0;
      for (let i = 0; i < Alarmclass.length; i++) {
        if (Alarmclass[i].anum > 0) {
          atotal = atotal + 1;
        }
      }
      for (let i = 0; i < Alarmequip.length; i++) {
        if (Alarmequip[i].aenum > 0) {
          atotal = atotal + 1;
        }
      }
      return atotal;
    },
    // 告警分布设备文字
    Alarmequip1() {
      const Alarmequip2 = [];
      for (let i = 0; i < this.Alarmequip.length; i++) {
        if (this.Alarmequip[i].aenum > 0) {
          Alarmequip2.push(this.Alarmequip[i]);
        }
      }
      return Alarmequip2;
    },
  },
  components: {
    // 挂载球组件
    Ztcanvas,
  },
  mounted() {
    this.media()
    //告警设备的详情为0情况
    let aenumtotal = 0;
    for (let i = 0; i < Alarmequip.length; i++) {
      aenumtotal = aenumtotal + Alarmequip[i].aenum;
      if (aenumtotal == 0) {
        document.getElementsByClassName("alarmEquipcion")[0].innerHTML = "";
        document.getElementsByClassName("alarmEquipcion")[0].style.height =
          2 + "%";
        document.getElementsByClassName("details")[0].style["border-top"] =
          "#ececec solid 0.1rem";
      }
    }
  },
};
</script>
<style scoped>
.hhh{
    display: flex;
    justify-content: center;
    width: 22rem;
    height: 14.6rem;
    margin-left: 4rem;
    align-items: center;
}
.www{
transform: scale(0.35);
    display: flex;
    position: fixed;
    min-width: 62.9rem;
    height: 48.571428rem;
    justify-content: center;
    align-items: center;
    margin-top: 8rem;
    /* margin-left: -3rem; */

}
.zong {
  font-family: MicrosoftYaHei;
  width: 100%;
  display: flex;
  flex-direction: column;
  
}
.detailsicon {
  width: 100%;
  display: flex;
  flex-direction: column;
}
.a {
  width: 100%;
  height: 3rem;
  display: flex;
  justify-content: center;
  flex-direction: row;
  border-top: rgb(230, 228, 228) solid 0.1rem;
  border-bottom: rgb(228, 226, 226) solid 0.1rem;

}
.a1a {
  width: 85%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.a1a>img{
  margin-left: 10.5rem;
  width: 1.428rem;
  height: 1.428rem;
  margin-right: 0.5rem;
}
.a1span1{
  color: rgb(0, 153, 255);
}
.a1span2{
  margin-left: 5%;
}
.a22 {
  width: 1.5%;
  height: 100%;

  justify-content: flex-end;
  display: flex;
  align-items: center;
margin-left: 5rem;
}
.a22>img{
  width: 50%;
  height: 30%;


}
.aa {
  margin-left: 12rem;
  
}

.aa1> img{
  width: 40%;
}
.aa1end{
  background-color: rgb(0, 162, 255);
  border-radius: 10rem;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 2%;
}

.content {
  overflow-y: auto;
  overflow-x: hidden;
  flex-grow: 1;
  top: 10rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
}
.allEvaluation {
  width: 100%;
  height: 16.75rem;
  margin-top: 1.2857rem;
  background-color: #ecf3f9;
  display: flex;
  flex-direction: row;
  /* align-content: flex-start; */
  align-items: center;
}
.tips,
.alarmClass,
.alarmEquip,
.details {
  display: flex;
  align-items: center;
  width: 100%;
  height: 4rem;
  min-height: 4rem;

  border-bottom: #ececec solid 0.1rem;
}
.aa{
  display: none;
  margin-top: 2%;
  width: 80%;
  height: 10.71428rem;
  min-height: 10.71428rem;
}
.alarmClassicon,
.alarmEquipcion{
  display: flex;
  margin-top: 2%;
  width: 80%;
  height: 10.71428rem;

  min-height: 10.71428rem;

}
.ztcanvas {
  width: 12rem;
  height: 12rem;
  /* margin-left: 14.9285rem; */
  /* margin-top: 4.35rem; */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  transform-origin: -0.71428rem -10.71428rem;

}
.number {

    font-size: 3rem;
    display: flex;
    font-weight: 800;
}
.fen {
    margin-bottom: -3%;
    font-size: 1rem;
    display: flex;
    font-weight: 100;
}
.operatView {
  width: 50%;
  height: 80%;

  margin-top: 1%;
  display: flex;
  flex-direction: column;
  flex-wrap:nowrap;
}
.notes {
  width: 100%;
  height: 40%;
  display: flex;
  justify-content: flex-start;
}
.notes1 {
  width: 50%;
  height: 100%;
  display: flex;
  align-items:center;;
  font-size: 1.7857rem;
  font-weight: 600;
  color: #333333;
  font-family: MicrosoftYaHei;
}
.notes2 {
  width: 50%;
  height: 100%;
  display: flex;
  align-items:center;;
  font-size: 1.2857rem;
  align-items: center;
  color: #666666;

}
.major {
  display: flex;
  flex-grow: 1;
  width: 45rem;

  flex-wrap: wrap;
  justify-content: flex-start;
}
.major1 {
  margin-right: 1%;
  width: 20%;
  height: 50%;
  justify-content: flex-start;
  display: flex;
  font-size: 1.1428rem;
  flex-wrap: nowrap;

}
.major1 > span {
  color: rgb(0, 162, 255);
}
.repaire {
  width: 7.6428rem;
  height:2.7857rem;
  border-radius: 10rem;
  border: #0385D7 solid 0.1rem;
  margin-left: 15rem;
  display: flex;
  align-items: center;
   justify-content:center;
  color: #0385D7;
  font-size: 1.42857rem;
  font-family: MicrosoftYaHei;
}
.tips > img {
  width: 1.6428rem;
  height: 1.6428rem;
  margin-left: 15rem;
}
.tips > div {
  font-size: 1.1428rem;
  color: #333333;
  margin-left: 0.7%;
}
.tips > div > span {
  color: red;
}
.alarmClass > img,
.alarmEquip > img,
.details > img {
  width: 1.2142rem;
  margin-left: 13%;
}
.alarmClass > div,
.alarmEquip > div,
.details > div {
  font-size: 1.1428rem;
  margin-left: 0.7%;
  font-weight: 700;
}

.adetails ,.aa1{
  width: 9%;
  height: 7rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 1%;
  font-size: 90%;

}
.adetails > img,.aa1>img  {
  width: 4.42857rem;
}

.adetails > div,.aa1> div {
  
  margin-top: 5%;
}
.aend{
  color: rgb(255, 255, 255);
}
.aend {
  background-color: rgb(0, 162, 255);
  border-radius: 10rem;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 2%;
}
</style>