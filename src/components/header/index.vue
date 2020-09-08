<template>
  <div class="sys-header full-bg">
    <div class="date-weather">
       <system-date class="sys-date"></system-date>
       <weather-info class="weather-info"></weather-info>
    </div>
    <right-spanner class="right-spanner"></right-spanner>
    <system-title :sys-name="sysName"></system-title>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import SystemTitle from "@/components/header/system-title.vue";
import { SYS_NAME } from "@/utils/consts.ts";
import SystemDate from "@/components/header/system-date.vue";
import WeatherInfo from "@/components/header/weather-info.vue";
import RightSpanner from "@/components/header/right-spanner.vue";
@Component({
  components: {
    SystemTitle,
    SystemDate,
    WeatherInfo,
    RightSpanner
  },
})
export default class Header extends Vue {
  private sysName = SYS_NAME;
}
</script>
<style lang="less" scoped>
.sys-header {
  position: relative;
  min-height: 5rem;
  max-height: 5rem;
  background-image: url(../../assets/images/header-bg.png);
  display: flex;
  justify-content: center;
}
.date-weather{
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding:12px 20px;
  position: absolute;
  color: white;
  left: 0;
  bottom: 0;
  right: 70%;
}
.right-spanner{
  position:absolute;
  left: 70%;
  right: 0;
  bottom: 0;
  top: 20px;
}
</style>