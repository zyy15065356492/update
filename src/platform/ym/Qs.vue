<template>
  <div>
    <div class="q">
      <div id="q1">
        <!-- 为 ECharts 准备一个具备大小（宽高）的 DOM -->
        <div id="qq1" style="float: left; width: 100%; height: 300px"></div>
      </div>
    </div>
  </div>
</template>

<script>
// 引入基本模板
const echarts = require("echarts/lib/echarts");
// 引入折线图组件
import 'echarts/lib/chart/line';
// 引入提示框和title组件
require("echarts/lib/component/tooltip");
require("echarts/lib/component/title");
import 'echarts/lib/component/toolbox';

export default {
  mounted() {
     setTimeout(this.initData,10);
    window.addEventListener('resize',()=>{
                this.$echarts.init(document.getElementById('qq1')).resize()
            })
  },
  methods: {
    //初始化数据
    initData() {
      // 基于准备好的dom，初始化echarts实例
     const myChart = echarts.init(document.getElementById("qq1"));
      // 绘制图表
      myChart.setOption({
        tooltip: {
        trigger: 'axis'
    },
    grid: {
        left: '3%',
        right: '10%',
        bottom: '5%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],
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
    yAxis: {
        type: 'value',
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
    series: [
         {
            name: '生产车间',
            type: 'line',
            stack: '总量',
            data: [51,30,50,29,50,36,50,46,50,35,36,30,53,48,51,36,38,39,30,50,31,50,49.9,26,35]
        },
        {
            name: '实验室耗能',
            type: 'line',
            stack: '总量',
            data: [20,30,50,29,50,36,50,46,50,35,36,30,53,48,51,36,38,39,30,50,31,50,49.9,0,0]
        },
       
        {
            name: '展厅',
            type: 'line',
            stack: '总量',
            data: [51,30,50,29,50,36,50,46,50,35,36,30,53,48,51,36,38,39,30,50,31,50,49.9,10,11]
        },
        {
            name: '仓库',
            type: 'line',
            stack: '总量',
            data: [51,30,50,29,50,36,50,46,50,35,36,30,53,48,51,36,38,39,30,50,31,50,49.9,15,20]
        },
        
    ]
      });
    },
  },
};
</script>
<style scoped>
</style>