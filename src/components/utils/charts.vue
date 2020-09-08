<template>
  <div :id="chartId" class="chart"></div>
</template>
<script lang="ts">
import { Vue, Prop, Watch, Component } from "vue-property-decorator";
import echarts from "echarts";

@Component
export default class Charts extends Vue {
  private chart: any;
  private dom: any;
  private chartData: any;
  @Prop({ default: "chart-id" }) private readonly chartId!: string;
  @Prop({
    default: () => {
      return {
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)",
        },
        calculable: true,
        series: [
          {
            name: "面积模式",
            type: "pie",
            radius: [30, 110],
            center: ["50%", "50%"],
            roseType: "area",
            data: [
              { value: 10, name: "兰山区" },
              { value: 5, name: "罗庄区" },
              { value: 15, name: "河东区" },
              { value: 22, name: "沂南县" },
              { value: 24, name: "郯城县" },
              { value: 30, name: "沂水县" },
              { value: 35, name: "兰陵县" },
              { value: 12, name: "费县" },
              { value: 32, name: "平邑县" },
              { value: 45, name: "莒南县" },
              { value: 24, name: "蒙阴县" },
              { value: 35, name: "临沭县" },
            ],
          },
        ],
        color: [
          "#00f6ff",
          "#f39d77",
          "#ff549d",
          "#4c67eb",
          "#49cc45",
          "#ffcc00",
          "#ad9eff",
          "#f711ff",
        ],
      };
    },
  })
  private readonly options!: Record<string, any>;

  created() {
    window.removeEventListener("resize", this.resizeMap);
    window.addEventListener("resize", this.resizeMap);
  }
  beforeRouteLeave(to: any, from: any, next: Function) {
    this.chart.dispose();
    this.chart = null;
    next();
  }
  mounted() {
    if (!this.chart) {
      this.initChart();
    }
    this.setOptions();
  }
  beforeDestroy() {
    console.log("destroy");
    window.removeEventListener("resize", this.resizeMap);
  }
  @Watch("options", {
    deep: true,
  })
  optionsChangeListeners() {
    if (!this.chart) {
      this.initChart();
    }
    this.setOptions();
  }

  initChart() {
    this.dom = document.getElementById(this.chartId);
    this.chart = echarts.init(this.dom);
  }
  resizeMap() {
    this.chart.resize();
  }
  setOptions() {
    this.chart.setOption(this.options);
  }
  getXAxis() {
    if (this.chartData.xAxisData.data) {
      return Object.assign({}, this.chartData.xAxisData);
    }
    return {
      type: "category",
      data: this.chartData.xAxisData,
      name: this.chartData.xUnit ? this.chartData.xUnit : "",
      axisLine: {
        lineStyle: {
          color: "#63b8d5", //坐标轴线颜色
        },
      },
    };
  }
}
</script>
<style scoped>
.dfdf {
  color: rgb(243, 157, 119);
  color: #f711ff;
}
</style>

