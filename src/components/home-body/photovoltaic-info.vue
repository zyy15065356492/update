<template>
  <div class="photovoltaic-info">
    <section-title section-title="光伏"></section-title>
    <div class="list-container">
      <div
        class="info-item"
        v-for="(infoItem,index) in photovoltaicInfoList"
        :key="`info-item-${index}`"
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
  </div>
</template>
<script lang="ts">
import InfoItem from "@/interfaces/info-item";
import { Component, Prop, Vue } from "vue-property-decorator";
import SectionTitle from "@/components/utils/section-title.vue";
@Component({
  components: {
    SectionTitle,
  },
})
export default class PhotovoltaicInfo extends Vue {
  @Prop({
    type: Array,
  })
  private photovoltaicInfoList!: Array<InfoItem>;
}
</script>
<style lang="less" scoped>
.photovoltaic-info{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.list-container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin: 0 8px;
  padding: 12px 30px;
}
.info-item {
  position: relative;
  width: calc(50% - 16px);
  height: auto;
  padding: 4px 8px;
  text-align: left;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .icon {
    color: #15e8f3;
    font-size: 18px;
    margin-right:4px;
  }
  .title {
    color: #ffffffff;
  }
  .value {
    color: #ffdc1c;
  }
}
</style>