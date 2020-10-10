<template>
  <div id="area-map" class="area-map"></div>
</template>
<script lang="ts">
import light from "@/assets/mock/light-china.json";
import { Component, Vue } from "vue-property-decorator";

@Component
export default class AreaMap extends Vue {
  public $echarts: any;
  private chart: any;
  private areaName = "china";
  private chinaFull = require(`@/assets/map/10000_full.json`);
  private lightData=this.getLightData();

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
    this.$echarts.registerMap(`${this.areaName}full`, this.chinaFull);

    this.chart.setOption(this.getOptions());
  }
  getLightData() {
    console.log("light", light);
    return light.map((serieData: Array<number>, idx: number) => {
      let px: number = serieData[0] / 1000;
      let py = serieData[1] / 1000;
      const res = [[px, py]];

      for (let i = 2; i < serieData.length; i += 2) {
        const dx: number = serieData[i] / 1000;
        const dy: number = serieData[i + 1] / 1000;
        const x: number = px + dx;
        const y: number = py + dy;
        res.push([parseFloat(x.toFixed(2)), parseFloat(y.toFixed(2)), 1]);

        px = x;
        py = y;
      }
      return res;
    });
  }
  getOptions() {
    const option = {
      tooltip: {
        trigger: "item",
        formatter: "{b}",
      },
      geo: [
        {
          map: `${this.areaName}full`,
          name: `${this.areaName}full`,
          type: "map",
          mapType: `${this.areaName}full`, // 自定义扩展图表类型
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
              borderColor: "rgba(255, 255, 255,1)",
              borderWidth: 2,
            },
            emphasis: {
              areaColor: "rgb(44,80,208)",
            },
            silent: true,
          },
        },
      ],
      series: [
        {
          name: `${this.areaName}full`,
          type: "scatter",
          coordinateSystem: "geo",
          symbolSize: 2,
          large: true,
          itemStyle: {
            normal: {
              shadowBlur: 2,
              shadowColor: "#66bb6a78",
              color: "#66bb6a78",
            },
          },
          data: this.lightData[1],
        },
      ],
    };
    console.log("option", option);
    return option;
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
.area-map {
  width: calc(100% - 8rem);
  height: calc(100% - 8rem);
  padding: 4rem;
}
</style>