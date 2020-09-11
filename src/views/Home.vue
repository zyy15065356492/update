<template>
  <div class="home full-bg">
    <Header></Header>
    <div class="home-body">
      <div class="section-col">
        <SectionContainer
          class="section-item general-info-container"
          :section-info="{title:'综合信息',position:'left'}"
        >
          <GeneralInfo class="general-info" v-if="generalList" :info-item-list="generalList"></GeneralInfo>
        </SectionContainer>
        <SectionContainer class="section-item" :section-info="{title:'健康评价',position:'left'}">
          <Charts :options="healthEvaltionData" class="charts"></Charts>
        </SectionContainer>
      </div>
      <SectionContainer class="section-col" :section-info="{title:'地图',position:'center'}">
        <operating-days class="operating-days" v-bind:operated-days="operatedDays"></operating-days>
        <area-map></area-map>
      </SectionContainer>
      <div class="section-col">
        <SectionContainer class :section-info="{title:'应用领域',position:'left'}">
          <application-fields @selected-field="selectFieldListener" :field-list="applicationFields"></application-fields>
        </SectionContainer>
        <SectionContainer
          class="section-item sec-bottom"
          :section-info="{title:'系统运行',position:'left'}"
        >
          <div class="operating-status">
            <swiper-container>
              <photovoltaic-info class="swiper-slide" :photovoltaic-info-list="photovoltaicInfo"></photovoltaic-info>
              <charging-pile class="swiper-slide" :charging-pile-list="chargingPileList"></charging-pile>
            </swiper-container>
          </div>
        </SectionContainer>
      </div>
    </div>
    <dialog-container
      v-if="isShowDialog"
      :dialogTitle="selectAppList.name"
      @close-dialog="isShowDialog=false"
    >
      <application-list :app-list="selectAppList.list"></application-list>
    </dialog-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "@/components/header/index.vue";
import AreaMap from "@/components/utils/area-map.vue"; // @ is an alias to /srcb
import SectionContainer from "@/components/utils/section-container.vue";
import GeneralInfo from "@/components/home-body/general-info.vue";
import {
  generalList,
  healthEvaluationList,
  applicationFields,
  photovoltaicInfo,
  chargingPiles,
  operatedDays,
  applicationList,
} from "@/mock/home-data";
import InfoItem from "@/interfaces/info-item";
import Charts from "@/components/utils/charts.vue";
import ApplicationFields from "@/components/home-body/application-fields.vue";
import PhotovoltaicInfo from "@/components/home-body/photovoltaic-info.vue";
import ChargingPile from "@/components/home-body/charging-pile.vue";
import OperatingDays from "@/components/home-body/operating-days.vue";
import DialogContainer from "@/components/utils/dialog-container.vue";
import ApplicationList from "@/components/home-body/dialogs/application-list.vue";
import SwiperContainer from "@/components/utils/swiper-container.vue";
@Component({
  components: {
    AreaMap,
    Header,
    SectionContainer,
    GeneralInfo,
    Charts,
    ApplicationFields,
    PhotovoltaicInfo,
    ChargingPile,
    OperatingDays,
    DialogContainer,
    ApplicationList,
    SwiperContainer,
  },
})
export default class Home extends Vue {
  public generalList: Array<InfoItem>;
  private applicationFields: Array<InfoItem>;
  private selectAppList:
    | {
        name: string;
        list: (
          | { name: string; site: string; value: string }
          | { name?: undefined; site?: undefined; value?: undefined }
        )[];
      }
    | undefined;
  private isShowDialog = false;

  constructor() {
    super();
    this.generalList = generalList;
    console.log("generalList", generalList);
    this.applicationFields = applicationFields;
  }
  get operatedDays(): InfoItem {
    console.log("operatedDays", operatedDays);
    return operatedDays;
  }
  get photovoltaicInfo(): Array<InfoItem> {
    return photovoltaicInfo;
  }
  get chargingPileList(): Array<InfoItem> {
    return chargingPiles;
  }
  get xAxisData() {
    return healthEvaluationList.map((item) => {
      return item.name;
    });
  }
  get yAxisData() {
    return healthEvaluationList.map((item) => {
      return item.value;
    });
  }
  get healthEvaltionData() {
    return {
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
          data: this.xAxisData,
          axisLine: {
            linestyle: {
              color: "#21abfa",
            },
          },
          //  改变x轴字体颜色和大小
          axisLabel: {
            textStyle: {
              color: "#21abfa",
              fontSize: "12",
            },
            formatter: this.xAxisLabelFormatter,
            interval: 0,
          },
          axisTick: {
            alignWithLabel: true,
          },
        },
      ],
      yAxis: [
        {
          type: "value",
          axisLine: {
            linestyle: {
              color: "#21abfa",
            },
          },
          splitLine: {
            lineStyle: {
              // 使用深浅的间隔色
              color: "#21abfa",
              width: 0.5,
            },
          },
          //  改变x轴字体颜色和大小
          axisLabel: {
            textStyle: {
              color: "#21abfa",
              fontSize: "12",
            },
          },
        },
      ],
      series: [
        {
          name: "健康度",
          type: "bar",
          barWidth: "30%",
          data: this.yAxisData,
        },
      ],
    };
  }
  xAxisLabelFormatter(params: string): string {
    let newParam: string;
    if (params.length > 4) {
      newParam = params.substring(0, 4) + "\n" + params.substring(4);
    } else {
      newParam = params;
    }
    return newParam;
  }
  //选择field
  selectFieldListener(selectedField: InfoItem) {
    console.log("home-selected-field", selectedField);
    this.getShowAppList(selectedField);
    this.showDialog();
  }
  getShowAppList(selectedField: InfoItem) {
    const _app = applicationList.find((application) => {
      return application.name == selectedField.name;
    });
    this.selectAppList = _app;
  }
  showDialog() {
    this.isShowDialog = true;
  }
}
</script>
<style lang="less" scoped>
.home {
  position: relative;
  width: 100%;
  height: 100%;
  background-image: url(../assets/images/home-bg.png);
  display: flex;
  flex-direction: column;
}
.home-body {
  flex-shrink: 1;
  flex-grow: 1;
  display: flex;
  flex-direction: row;
  padding: 8px 16px;
}
.section-col {
  display: flex;
  flex-direction: column;
  justify-content: stretch;

  width: 0;
  flex-grow: 1;
  margin: 4px;
}
.section-item,
.charts {
  height: 0;
  flex-grow: 1;
}
.charts {
  padding: 20px 10px;
}
.section-item + .section-item,
.sec-bottom {
  margin-top: 8px;
}
.general-info {
  flex-grow: 1;
  padding: 10px 12px;
}
.operating-status {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-around;
}
.operating-days {
  margin-top: 10%;
}
</style>
