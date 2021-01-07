<style scoped>
  #chart_example{
    margin-left: 230px;
    width:800px;
    height:400px;
    border:none;
  }
</style>
<template>
  <div>
    <div id="chart_example"></div>
  </div>
</template>
 
<script>
  import pop from 'echarts'
  export default {
    data() {
      return {
      }
    },
    mounted() {
      const myChart = pop.init(document.getElementById('chart_example'));
      const option = {
       tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#C0C0C0',
                location:'conmpont'
            }
        }
    },
     legend: {
        data: ['2020-11-29','2020-11-29']
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
       series : [

        {
            name:'2020-11-29',
            type:'line',
            stack: '总量',
            itemStyle: {  
                normal: {   //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
                    color: new pop.graphic.LinearGradient(0, 0, 0, 1,[{
                            offset: 0, color: '#FFFF00' // 0% 处的颜色
                        }, {
                            offset: 0.4, color: '#FFFFE0' // 100% 处的颜色
                        }, {
                            offset: 1, color: '	#FFFFF0' // 100% 处的颜色
                        }] 
                    ),  //背景渐变色 
                    lineStyle: {        // 系列级个性化折线样式  
                        width: 3,  
                        type: 'solid',  
                         color: "	#FFFF00"
                    }
                },  
                emphasis: {  
                    color: '#4fd6d2',  
                    lineStyle: {        // 系列级个性化折线样式  
                        width:2,  
                        type: 'dotted',  
                        color:"#fffff" //折线的颜色
                    }  
                }  
            },//线条样式  
            symbolSize:5, //折线点的大小
            areaStyle: {normal: {}},
            data:[320, 332, 601, 134, 120, 230, 210]
        },
        {
            name:'2020-11-29',
            type:'line',
            stack: '总量',
            itemStyle: {  
                normal: { //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
                    color: new pop.graphic.LinearGradient(0, 0, 0, 1,[{
                        offset: 0, color: '#d7f4f8' // 0% 处的颜色
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
                        width: 2,  
                        type: 'dotted',  
                        color: "0180ff" 
                    }  
                }  
            },//线条样式
            symbolSize:5, //折线点的大小
            label: {
                normal: {
                    show: true,
                    position: 'top'
                }
            },
            areaStyle: {normal: {}},
            data:[820, 932, 901, 934, 1290, 1330, 1320, 820, 932, 901, 934, 1290, 1330, 1320,]
        }
    ]};
      myChart.setOption(option);
      window.addEventListener('resize',function() {myChart.resize()});
    },
    methods: {},
    watch: {},
  }
</script>