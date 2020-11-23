<template>
  <div class="home full-bg">
    <div class="home-body d-flex align-items-stretch">
      <SectionContainer
        class="section-col position-relative"
        :section-info="{
          title: '项目分布',
          position: 'left',
          icon: applicationFieldsIcon,
        }"
      >
        <area-map></area-map>
      </SectionContainer>
      <div class="home-right-container d-flex flex-column">
        <SectionContainer
          class="none-height flex-grow-1 section-item general-info-container"
          :section-info="{ title: '综合信息', position: 'left', icon: projectsDistributionIcon }"
        >
          <GeneralInfo
            class="general-info"
            v-if="generalList"
            :info-item-list="generalList"
          ></GeneralInfo>
        </SectionContainer>
        <SectionContainer
          class="none-height flex-grow-1 section-item application-area"
          :section-info="{ title: '应用领域', position: 'left', icon: summarizeIcon }"
        >
          <application-fields
            class="flex-grow-1"
            @selected-field="selectFieldListener"
            :field-list="applicationFields"
          ></application-fields>
        </SectionContainer>
      </div>
    </div>
    <dialog-container
      v-if="isShowDialog"
      :dialogTitle="selectAppList.name"
      @close-dialog="isShowDialog = false"
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
import  applicationFieldsIcon from "@/assets/images/home/application-fields.png";
import  projectsDistributionIcon from "@/assets/images/home/projects-distribution.png";
import  summarizeIcon from "@/assets/images/home/summarize.png";
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
  applicationFieldsIcon = applicationFieldsIcon;
  projectsDistributionIcon = projectsDistributionIcon;
  summarizeIcon = summarizeIcon;
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
    this.applicationFields = applicationFields;
  }
  get operatedDays(): InfoItem {
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
.home-right-container {
  width: 36%;
  margin-left: 1rem;
}
.home {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.home-body {
  flex-shrink: 1;
  flex-grow: 1;
  display: flex;
  flex-direction: row;
  padding: 32px;
}
.section-col {
  display: flex;
  flex-direction: column;
  justify-content: stretch;

  width: 0;
  flex-grow: 1;
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
  margin-top: 1.6rem;
}
.general-info {
  flex-grow: 1;
  padding: 5% 6%;
}
.operating-status {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-around;
}
.operating-days {
  position: absolute;
  top: 15%;
  left: 0;
  right: 0;
  margin: 0 auto;
}
</style>
