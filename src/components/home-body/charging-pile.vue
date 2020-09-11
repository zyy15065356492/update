<template>
  <div class="charging-pile">
    <section-title section-title="充电桩"></section-title>
    <div class="info-container">
      <div
        class="info-item"
        :class="{'not-line-first':index%3}"
        v-for="(itemInfo,index) in chargingPileList"
        :key="`info-${index}`"
      >
        <div class="title">{{itemInfo.name}}</div>
        <div class="value-container">
          <span class="value">{{itemInfo.value}}</span>
          <span class="unit">{{itemInfo.unit}}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import SectionTitle from "@/components/utils/section-title.vue";
import InfoItem from "@/interfaces/info-item";
@Component({
  components: {
    SectionTitle,
  },
})
export default class ChargingPile extends Vue {
  @Prop() private chargingPileList!: Array<InfoItem>;
  mounted(){
    console.log("ChargingPile mounted");
  }
}
</script>
<style lang="less" scoped>
.charging-pile {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.info-container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin: 0 8px;
}
.info-item {
  margin: 4px 0;
  position: relative;
  width: calc(33% - 24px);
  height: auto;
  padding: 4px 8px;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .title {
    color: #ffffffff;
  }
  .value {
    color: #ffdc1c;
    font-size: 20px;
  }
  .unit {
    color: white;
  }
}
.not-line-first::before {
  content: " ";
  position: absolute;
  left: 0;
  top: 10px;
  bottom: 10px;
  width: 1px;
  background-color: rgba(255, 255, 255, 0.3);
}
</style>