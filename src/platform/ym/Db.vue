<template>
  <div>
    <div class="d">
      <div id="d1">
        <!-- 为 ECharts 准备一个具备大小（宽高）的 DOM -->
        <div id="dd1" style="float: left; width: 100%; height: 300px"></div>
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
                this.$echarts.init(document.getElementById('dd1')).resize()
            })
  },
  methods: {
    //初始化数据
    initData() {
      // 基于准备好的dom，初始化echarts实例
      const myChart = echarts.init(document.getElementById("dd1"));
      // 绘制图表
      myChart.setOption({
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
              "办公A区域",
              "办公C区域",
              "商业裙楼一层",
              "地下室区域",
              "活动中心",
              "室外广场",
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
            barMinHeight: "10%",
            barWidth: "15%",
            barMaxWidth: "20%",
            data: [
              1450,
              1450,
              2100,
              1600,
              1100,
              1600,
            ],
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