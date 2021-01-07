<template>
  <div>
    <div class="p">
      <div id="p1">
        <!-- 为 ECharts 准备一个具备大小（宽高）的 DOM -->
        <div id="ma1" style="float: left; width: 100%; height: 300px"></div>
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
     window.addEventListener('resize',()=>{
                this.$echarts.init(document.getElementById('ma1')).resize()
            })
  },
  methods: {
    //初始化数据
    initData() {
      // 基于准备好的dom，初始化echarts实例
      const myChart = echarts.init(document.getElementById("ma1"));
      // 绘制图表
      myChart.setOption({
        color: ["#0263FF", "#FF7723", '#3CBC98',"#8E30FF"],
        legend: {
        left: 'center',
        top: 'bottom',
        data: ['rose1', 'rose2', 'rose3','rose4']
    },
    toolbox: {
        show: true,
        feature: {
            mark: {show: true},
            dataView: {show: true, readOnly: false},
            magicType: {
                show: true,
                type: ['pie', 'funnel']
            },
            restore: {show: true},
            saveAsImage: {show: true}
        }
    },
    series: [
        {
            name: '面积模式',
            type: 'pie',
            radius: [30, 110],
            roseType: 'area',
            data: [
                {value: 10, name: 'rose1'},
                {value: 5, name: 'rose2'},
                {value: 15, name: 'rose3'},
                {value: 15, name: 'rose4'},
            ]
        }
    ]
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