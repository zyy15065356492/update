<template>
  <div class="ztdata1">
    <div class="day">已运行{{ daynow }}天</div>
    <div class="describe">
      <span style="font-size: 2.1428rem"
        >台区运行状态：{{ areaState }}
        <div style="display:flex">
          <img
            src="..\..\assets\images\提示.png"
            title="较差：0-59
一般：60-79
良好：80-89
优秀：90-100"
          /></div
      ></span>
    </div>

    <table class="table1" border="1" rules="rows" cellspacing="0" align="right">
      <tr style="background: rgb(58, 153, 237);border-radius: 5rem;">
        <td style="font-size:1.71428rem;  border-radius:0.4rem 0 0 0.4rem;" >台区名称</td>
  
        <td style="font-size:1.71428rem; border-radius:0 0.4rem 0.4rem 0;">得分（分）</td>
      </tr>
      
      <tr v-for="(value,index) in areaGrade" :key='index' @click="Southfive(index)">
        <td style="font-size:1.571428rem">{{value.areaName}}</td>
        <td class="numself"  style="font-size:1.71428rem">{{value.gradeself}}</td>
      </tr>
    </table>
  </div>
</template>
<script>
import { areaGrade } from "../../mock/data-analyse-datas";
import { Gradenum1 } from "../../mock/data-analyse-datas";
import { daystart } from "../../mock/data-analyse-datas";

export default {
  data() {
    return {
      Gradenum1:Gradenum1,
      daynow: 0,
      areaState: "良好",
      areaGrade:areaGrade,
      daystart:daystart
    };
  },
  methods: {
    //点击调转详情页
    Southfive(areaNum) {
      
      if (areaNum == 0) {
        // console.log('2')
        this.$router.push({
          path:'/Home/data/Area5',
          query:{
            name:this.areaGrade[0].areaName,
            grade:this.areaGrade[0].gradeself
          }
        });
        // console.log(this.areaGrade[0].gradeself)
      }
      
    },
    //台区状态评价函数
    changeareaState() {
      if (this.Gradenum1 >= 90) {
        this.areaState = "优秀";
      } else if (this.Gradenum1 >= 80 && this.Gradenum1 <= 89) {
        this.areaState = "良好";
      } else if (this.Gradenum1 >= 60 && this.Gradenum1 <= 79) {
        this.areaState = "一般";
      } else if (this.Gradenum1 <= 59) {
        this.areaState = "较差";
      }
    },
    //改变分值颜色函数
    changeColor(numself) {
      if (numself >= 80) {
        return "#4ED583";
      }
      if (numself >= 60 && numself <= 79) {
        return "#FF7E32";
      }
      if (numself <= 59) {
        return "#FF5845";
      }
    },
  },
  mounted() {
    //获取天数
    // console.log(areaGrade)
    
    const daystart = new Date(this.daystart.replace(/-/g, "/"));
    const dayend = new Date();
    const days = dayend.getTime() - daystart.getTime();
    const time = parseInt(days / (1000 * 60 * 60 * 24));
    this.daynow = time;
    //随分数整体台区状态评价
    this.changeareaState();
    //随分数改变分数颜色
    for (let i = 0; i < 5; i++) {
      document.getElementsByClassName("numself")[
        i
      ].style.color = this.changeColor(this.areaGrade[i].gradeself);
    }
  },
};
</script>
<style scoped>
.table1 {
  /* border-color: rgb(236, 235, 235); */
/* border-collapse:separate; */
  font-family: MicrosoftYaHei;
  border: 1px solid rgba(197, 197, 197,0.5);
  width: 59.0715rem;
  height: 28.36rem;
  margin-top: 4%;
  margin-left: -1.071428rem;
}
.table1>td {

  padding-right: 10rem;
}
.table1>tr:not(:first-child) {
  cursor: pointer;


}
.table1>tr:nth-child(2n + 1):not(:first-child) {
  background: rgba(58, 153, 237, 0.2);
}
.table1>tr:first-child > td {

  font-size: 2rem;
  color: rgb(255, 255, 255);
}
.table1>tr:not(:first-child) > td {
  font-size: 2rem;
  color: #666666;
}

.ztdata1 {
  width: 75rem;
  /* height: 75rem; */
  /* background-color: rgb(210, 152, 252); */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 8.5714%;

}
.day {
  font-size: 4.2857rem;
  /* letter-spacing: 0.8rem; */
    margin-left: -0.857rem;
    font-family: MicrosoftYaHei;
    color: #666666;
}
.describe {
  /* color: #2665fe; */
  margin-left: -0.7142rem;
  font-family: MicrosoftYaHei;
  color: #205BDF;
}
span {
  display: flex;
  margin-top: 4%;
}
span > div {
  display: flex;
}
span > div > img {
  width: 2rem;
  height: 1.995rem;
  margin-left: 6%;
  margin-top: 28%;
  margin-left: 46%;
}
</style>