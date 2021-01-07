<style scoped>
  #chart_example{
    width:1300px;
    height:344px;
    border:none;
  }
</style>

<template>
  <div>
    <div id="chart_example">
    </div>
  </div>
</template>
 
<script>
  import echarts from 'echarts'
  export default {
    data() {
      return {
      }
    },
    mounted() {
      const myChart = echarts.init(document.getElementById('chart_example'))
      window.onresize = function () {
          resizeTo;
     }

      const option = {
       tooltip: {
        // trigger: 'axis',
        axisPointer: {
            // type: 'cross',
            label: {
                backgroundColor: '#C0C0C0'
            }
        }
    },
     legend: {
        data: ['2020-11-29(1)','2020-11-29(2)']
    },
        xAxis: [
        {
            type: 'category',
            boundaryGap: false,
            data: ['00:00', '01:05', '02:10', '03:15', '04:20', '05:25', '06:30','07:35','08:40','09:45','10:50','11:55','13:00','14:05','15:10','16:15','17:20','18:35','19:30','20:35','21:40','22:45','23:50']
        }
    ],
    
    yAxis: [
        {
            name: "单位（V）",
            type: 'value'
        }
    ],
       series:[

        {
            name:'2020-11-29(1)',
            type:'line',
            stack: '总量',
            itemStyle: {  
                normal: {   //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1,[{
                           offset: 0, color: '#F1CC3B' // 0% 处的颜色
                        }, {
                            offset: 0.4, color: '#FFFFE0' // 100% 处的颜色
                        }, {
                            offset: 1, color: '	#FFFFF0' // 100% 处的颜色
                        }] 
                    ),  //背景渐变色 
                    lineStyle: {        // 系列级个性化折线样式  
                        width: 3,  
                        type: 'solid',  
                        color: "#FFFF00"
                    }
                },
                emphasis: {  
                    color: '#FED13D',  
                    lineStyle: {        // 系列级个性化折线样式  
                        width:3,  
                        type: 'dotted',  
                        color: "black" //折线的颜色
                    }  
                }
            },//线条样式  
            symbolSize:1, //折线点的大小
            areaStyle: {normal: {}},
            data:[320, 332, 601, 134, 120, 230, 210]
        },

        {
            name:'2020-11-29(2)',
            type:'line',
            stack: '总量',
            itemStyle: {  
                normal: { //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1,[{
                        offset: 0, color: '#28A0F8' // 0% 处的颜色
                        }, {
                            offset: 0.5, color: '#eefcfd' // 100% 处的颜色
                        }, {
                            offset: 1, color: '#fff' // 100% 处的颜色
                        }]    
                    ), //背景渐变色    
                    lineStyle: {        // 系列级个性化折线样式  
                        width: 3,  
                        type: 'solid',  
                        color: "#0180ff" //折线的颜色
                    }  
                },  
                emphasis: {
                    color: '#0180ff',   
                    lineStyle: {        // 系列级个性化折线样式  
                        width: 1,  
                        type: 'dotted',  
                        color: "#FED13D" 
                    } 
                },  
            },//线条样式
            symbolSize:1, //折线点的大小
            areaStyle: {normal: {}},
            data:[820, 932, 901, 934, 1290, 1330, 1320]
        }
    ]};
      myChart.setOption(option);
      window.addEventListener('resize',function() {myChart.resize()});
    },
    methods: {},
    watch: {},

  }
</script>