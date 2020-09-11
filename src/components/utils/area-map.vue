<template>
  <div id="area-map" class="area-map"></div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class AreaMap extends Vue {
  public $echarts: any;
  private chart: any;
  private areaName = "china";
  private chinaFull = require(`@/assets/map/10000_full.json`);

  mounted(): void {
      this.initCharts();
  }
  initCharts(): void {
    const ele = document.getElementById("area-map");
    if (this.chart) {
      this.chart.clear();
    } else {
      this.chart = this.$echarts.init(ele);
    }
    // this.$echarts.registerMap( this.areaName,this.china);
    this.$echarts.registerMap( `${this.areaName}full`,this.chinaFull);
    

    this.chart.setOption(this.getOptions(this.chinaFull));
  }
  getOptions(chinaFull: any) {
    return {
      tooltip: {
        trigger: "item",
        formatter: "{b}",
      },
      geo: [
        {
          map: `${this.areaName}full`,
          name: `${this.areaName}full`,
          // type: "map",
          mapType: `${this.areaName}full`, // 自定义扩展图表类型
          zIndex: 1,
          zoom: 1.25,
          cursor: "default",
          markPoint: {
            symbol: "circle",
          },
          label: {
            normal: {
              show: false,
            },
            emphasis: {
              show: false,
            },
          },
          itemStyle: {
            normal: {
              label: {
                show: false,
                position: "right",
                fontSize: 14,
                color: "gold",
              },
              areaColor: "#0d47a1",
              borderColor: "rgba(255, 255, 255, 0.8)",
            },
            emphasis: {
              areaColor: "rgb(44,80,208)",
            },
            silent: true,
          },
        },
      ],
      series: [
        // {
        //   name: "涟漪散点",
        //   type: "effectScatter",
        //   coordinateSystem: "geo",
        //   symbolSize: 10,
        //   data: this.convertData(chinaFull),
        //   rippleEffect: {
        //     color: "#2196f3",
        //   },
        //   markPoint: {
        //     size: 20,
        //   },
        //   label: {
        //     normal: {
        //       show: true,
        //       formatter: "{b}",
        //       position: "right",
        //     },
        //   },
        //   itemStyle: {
        //     color: "#2196f3",
        //     shadowBlur: 10,
        //     shadowColor: "#333",
        //   },
        // },
      ],
    };
  }
  convertData(fullJson: any) {
    const res = [];
    for (const index in fullJson.features) {
      res.push({
        name: fullJson.features[index].properties.name,
        value: fullJson.features[index].properties.center,
      });
    }
    return res;
  }
}
</script>
<style lang="less" scoped>
.area-map{
    width: 100%;
    height: 100%;
}
</style>