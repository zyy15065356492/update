<template>
  <div>
    <div class="j">
      <div id="j1">
        <!-- 为 ECharts 准备一个具备大小（宽高）的 DOM -->
        <div id="hh1" style="float: left; width: 100%; height: 300px"></div>
      </div>
      <!-- <div id="h2">
        <div id="m2" style="float: left; width: 100%; height: 300px"></div>
      </div> -->
    </div>
  </div>
</template>

<script>
// 引入基本模板
const echarts = require("echarts/lib/echarts");
// 引入柱状图组件
require("echarts/lib/chart/bar");
// 引入提示框和title组件
require("echarts/lib/component/tooltip");
require("echarts/lib/component/title");

export default {

  mounted() {
    // this.initData();
    setTimeout(this.initData,10);
    window.addEventListener('resize',()=>{
                this.$echarts.init(document.getElementById('hh1')).resize()
            })
  },
  methods: {
    //初始化数据
    initData() {
      // 基于准备好的dom，初始化echarts实例
      const myChart = echarts.init(document.getElementById("hh1"));
      // 绘制图表
      myChart.setOption({
        tooltip: {
          trigger: "axis",
        },
        legend: {
          data: ["今日耗能", "昨日耗能"],
        },
        toolbox: {
          show: true,
          feature: {
            dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ["line", "bar"] },
            restore: { show: true },
            saveAsImage: { show: true },
          },
        },
        calculable: true,
        xAxis: [
          {
            type: "category",
            data: [
              "照明",
              "空调",
              "电梯",
              "插座",
              "硬件设备",
              "应急设备",
              "特殊设备",
              "信息中心设备",
            ],
            axisLine: {
            lineStyle: {
              color:'#d1cdcb'
             }
            },
             axisLabel: {
              textStyle: {
                color:'#333333'
              }
            }
          },
          
        ],
        yAxis: [
          {
            type: "value",
             axisLabel: {
              textStyle: {
                color:'#333333'
              }
            },
            axisLine:{
              lineStyle:{
                color:['#d1cdcb']
              }
            },
          },
        ],
        series: [
          {
            name: "今日耗能",
            type: "bar",
            data: [31, 46, 38, 25, 38, 31, 48, 23],
            itemStyle: {
              //柱形图圆角，鼠标移上去效果，如果只是一个数字则说明四个参数全部设置为那么多
              normal: {
                //柱形图圆角，初始化效果
                barBorderRadius: [25, 25, 0, 0],
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: "#FFC859" },
                  { offset: 1, color: "#FDAC51" },
                ]),
              },
            },
          },
          {
            name: "昨日耗能",
            type: "bar",
            data: [28, 42, 34, 23, 35, 28, 45, 21],
            itemStyle: {
              //柱形图圆角，鼠标移上去效果，如果只是一个数字则说明四个参数全部设置为那么多
              normal: {
                //柱形图圆角，初始化效果
                barBorderRadius: [25, 25, 0, 0],
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: "#1EBFA0" },
                  { offset: 1, color: "#61A3DD" },
                ]),
              },
            },
          },
        ],
      });
    },
  },
};
</script>
<style>
.pie {
  position: relative;
  /* top: 0.1vh; */
  background-color: #fa7844;
}
</style>