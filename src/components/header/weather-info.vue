<template>
  <div class="weather-info">
      <div class="linear-words">多云转晴</div>
      <div class="linear-words" style="margin-left:20px;">8-15℃</div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class WeatherInfo extends Vue {}
</script>
<style lang="less" scoped>
.weather-info{
    display: flex;
    color:white;
}
</style>