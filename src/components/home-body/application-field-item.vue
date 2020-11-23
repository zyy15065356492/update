<template>
  <div
    class="application-field-item full-bg cursor-pointer"
    v-on:click.stop="fieldItemClickListener(appFieldItemInfo)"
  >
    <div
      class="icon-container d-flex align-items-center justify-content-center"
      v-bind:style="{
        background: `linear-gradient(${appFieldItemInfo.colors[0]}, ${appFieldItemInfo.colors[1]})`,
      }"
    >
      <span class="icon iconfont" :class="appFieldItemInfo.icon"></span>
    </div>
    <div class="content">
      <div class="name">{{ appFieldItemInfo.name }}</div>
      <div class="value-content">
        <span class="value">{{ appFieldItemInfo.value }}</span>
        <span class="unit">{{ appFieldItemInfo.unit }}</span>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop, Emit } from "vue-property-decorator";
import InfoItem from "@/interfaces/info-item";
@Component
export default class ApplicationFieldItem extends Vue {
  @Prop() private appFieldItemInfo!: InfoItem;
  @Emit("selected-field")
  fieldItemClickListener(appFieldItemInfo: InfoItem) {
    console.log("infoItem", appFieldItemInfo);
  }
}
</script>
<style lang="less" scoped>
.application-field-item {
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 4px 0;

  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.08);
  border-radius: 4px 4px 4px 4px;
}
.icon {
  font-size: 36px;
  color: white;
}
.content {
  display: flex;
  width: 60%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.value-content {
  color: #FEA034;
}
.name {
  color: #232323;
  font-size: 1rem;
}
.value {
  font-size: 1.6rem;
}
.unit {
  font-size: 1.4rem;
}
.icon-container {
  height: 5rem;
  width: 5rem;
}
</style>