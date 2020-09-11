<template>
  <div
    class="application-field-item full-bg cursor-pointer"
    v-on:click.stop="fieldItemClickListener(appFieldItemInfo)"
  >
    <div class="icon iconfont" :class="appFieldItemInfo.icon"></div>
    <div class="content">
      <div class="value-content">
        <span class="value">{{appFieldItemInfo.value}}</span>
        <span class="unit">{{appFieldItemInfo.unit}}</span>
      </div>
      <div class="name">{{appFieldItemInfo.name}}</div>
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
    console.log("infoItem",appFieldItemInfo);
  }
}
</script>
<style lang="less" scoped>
.application-field-item {
  width: 30%;
  height: 80px;
  background-image: url(../../assets/images/application-field-item-bg.png);
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 4px 0;
}
.icon {
  font-size: 30px;
}
.content {
  display: flex;
  width: 60%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.value-content {
  color: #4babfd;
}
.icon {
  color: #0dcdff;
}
.name {
  color: white;
  font-size: 14px;
}
.value {
  font-size: 20px;
}
.unit {
  font-size: 14px;
}
</style>