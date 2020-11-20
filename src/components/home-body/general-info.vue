<template>
  <div class="general-info">
    <div
      class="info-item half-width full-bg"
      v-for="(infoItem, index) in infoItemList"
      :key="'item-info-' + index"
      :style="{ 'background-image': `url(${infoItem.bgImg})` }"
    >
      <div
        class="item-container d-flex flex-column align-items-center flex-grow-1"
      >
        <div class="value">
          {{ infoItem.value }}<span class="unit">{{ infoItem.unit }}</span>
        </div>
        <div class="d-flex align-items-center">
          <span class="title">{{ infoItem.name }}</span>
        </div>
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
  height: 80px;
  position: relative;
  width: calc(50% - 12.99px);
  padding: 4px 4px 4px 5px;
  text-align: left;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  .icon {
    color: #15e8f3;
    font-size: 1.7rem;
    padding-right: 4px;
  }
  .title {
    color: #ffffffff;
    margin-left: 11px;
  }
  .value {
    font-size: 1.8rem;
    line-height:1;
  }
  .unit {
    font-size: 1rem;
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
  padding: 0.4rem 0.8rem 0.4rem 2rem;
}
</style>