<template>
  <div class="general-info">
    <div
      class="info-item half-width"
      v-for="(infoItem, index) in infoItemList"
      :key="'item-info-' + index"
    >
      <div class="item-container d-flex justify-content-start align-items-center flex-grow-1">
        <div>
          <span
            v-if="infoItem.icon"
            class="icon iconfont"
            :class="infoItem.icon"
          ></span>
          <span class="title">{{ infoItem.name }}({{ infoItem.unit }})：</span>
        </div>
 
          <span class="value">{{ infoItem.value }}</span>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Prop, Watch, Component } from "vue-property-decorator";
import InfoItem from "@/interfaces/info-item";
@Component
export default class GeneralInfo extends Vue {
  @Prop({
    type: Array,
  })
  private infoItemList!: Array<InfoItem>;

  constructor() {
    super();
    console.log("this.infoItemList", this.infoItemList);
  }
  mouted() {
    console.log("this.infoItemList", this.infoItemList);
  }
  @Watch("infoItemList", { deep: true })
  infoItemListChange(newVal: InfoItem[]) {
    console.log("infoItemListChange", newVal);
  }
}
</script>
<style lang="less" scoped>
.general-info {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}
.info-item {
  height: 40px;
  background-color: #0e6de985;
  position: relative;
  width: calc(50% - 26.99px);
  height: auto;
  padding: 4px 4px 4px 22.99px;
  text-align: left;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .icon {
    color: #15e8f3;
    font-size: 18px;
    padding-right: 4px;
  }
  .title {
    color: #ffffffff;
    margin-left: 11px;
  }
  .value {
    color: #ffdc1c;
    line-height:0;
  }
  &:nth-child(even)::before {
    content: " ";
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 2px;
    background-color: #0e6de9;
  }
  &:nth-child(even) {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }
   &:nth-child(odd) {
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }
}
.item-container {
  padding: 8px 12px;
}
</style>