<template>
  <div class="general-info">
    <div
      class="info-item half-width"
      v-for="(infoItem,index) in infoItemList"
      :key="'item-info-'+index"
    >
      <div>
        <span v-if="infoItem.icon" class="icon iconfont" :class="infoItem.icon"></span>
        <span class="title">{{infoItem.name}}({{infoItem.unit}})</span>
      </div>
      <div>
        <span class="value">{{infoItem.value}}</span>
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
  margin: 0 8px;
}
.info-item {
  background-color: #0e6de9;
  position: relative;
  width: calc(50% - 16px);
  height: auto;
  padding: 4px 8px;
  text-align: left;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .icon{
    color: #15e8f3;
    font-size: 18px;
    padding-right: 4px;
  }
  .title {
    color: #ffffffff;
  }
  .value {
    color: #ffdc1c;
  }
  &:nth-child(even)::before {
    content: " ";
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 2px;
    background-color: #00eeff;
  }
}
</style>