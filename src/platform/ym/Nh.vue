<template>
  <div>
    <div class="n">
      <div id="n1">
        <!-- 为 ECharts 准备一个具备大小（宽高）的 DOM -->
        <div id="mac1" style="float: left; width: 100%; height: 300%"></div>
      </div>
      <!-- <div id="pie2">
        <div id="main2" style="float: left; width: 100%; height: 300px"></div>
      </div> -->
    </div>
  </div>
</template>

<script>
// 引入基本模板
const echarts = require("echarts/lib/echarts");
// 引入饼状图组件
require("echarts/lib/chart/pie");
// 引入提示框和title组件
require("echarts/lib/component/tooltip");
require("echarts/lib/component/title");

export default {

  mounted() {
    this.initData();
  },
  methods: {
    //初始化数据
    initData() {
      // 基于准备好的dom，初始化echarts实例
      const myChart = echarts.init(document.getElementById("mac1"));
      // 绘制图表
      myChart.setOption({
        color: ["#0263FF", "#FF7723", '#3CBC98',"#8E30FF"],
        // title: {
        //   text: "某站点用户访问来源", //主标题
        //   subtext: "纯属虚构", //副标题
        // x: "center", //x轴方向对齐方式
        // },
        // tooltip: {
        //   trigger: "item",
        //   formatter: "{a} <br/>{b}: {c} ({d}%)",
        // },
        legend: {
          orient: "vertical",
          left: 10,
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: ["35%", "70%"],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: "center",
            },
            // formatter: function (val) {
            //   //让series 中的文字进行换行
            //   return val.name.split(" ").join("\n");
            // },
            emphasis: {
              label: {
                show: true,
                fontSize: "16",
                // fontWeight: 'bold'
              },
            },
            labelLine: {
              show: false,
            },
            data: [
              { value: 120, name: "二工段(25.54%)48914" },
              { value: 120, name: "一工段(26.28%)1750772" },
              { value: 75, name: "非生产(26.58%)1925073" },
              { value: 35, name: "一工段(26.58%)1925073" },
            ],
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
  background-color: #f5f4f4;
}
</style>