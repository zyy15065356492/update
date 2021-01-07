<template>
  <div>
    <div class="h">
      <div id="h1">
        <!-- 为 ECharts 准备一个具备大小（宽高）的 DOM -->
        <div id="m1" style="float: left; width: 100%; height: 400%"></div>
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
// 引入z柱状图组件
require("echarts/lib/chart/bar");
// 引入提示框和title组件
require("echarts/lib/component/tooltip");
require("echarts/lib/component/title");

export default {
  mounted() {
    this.initData();
     window.addEventListener('resize',()=>{
                this.$echarts.init(document.getElementById('m1')).resize()
            })
  },
  methods: {
    //初始化数据
    initData() {
      // 基于准备好的dom，初始化echarts实例
      const myChart = echarts.init(document.getElementById("m1"));
      // 绘制图表
      myChart.setOption({
        color: ["#3398DB"],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
          },
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            data: [
              "1月",
              "2月",
              "3月",
              "4月",
              "5月",
              "6月",
              "7月",
              "8",
              "9月",
              "10月",
              "11月",
              "12月",
            ],
            axisTick: {
              alignWithLabel: true,
            },
            axisLine:{
              lineStyle:{
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
            name: "直接访问",
            type: "bar",
            barWidth: "20%",
            data: [
              260,
              470,
              120,
              260,
              275,
              250,
              500,
              740,
              540,
              480,
              900,
              530,
              1250,
            ],
           
            itemStyle: {
              //柱形图圆角，鼠标移上去效果，如果只是一个数字则说明四个参数全部设置为那么多
              normal: {
                //柱形图圆角，初始化效果
                barBorderRadius: [25, 25, 0, 0],
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
  background-color: #d1cdcb;
}
</style>