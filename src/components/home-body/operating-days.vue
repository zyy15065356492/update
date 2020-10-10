<template>
  <div class="operating-days">
    <div class="days-words">系统运行天数</div>
    <div class="days-container">
      <div class="days">
        <div class="day-item" v-for="(no,index) in operatedDaysStr" :key="`days-${index}`">{{no}}</div>
      </div>
      <div class="days-unit">天</div>
    </div>
  </div>
</template>
<script lang="ts">
import InfoItem from "@/interfaces/info-item";
import { Component, Prop, Vue } from "vue-property-decorator";
@Component
export default class OperatingDays extends Vue {
  @Prop() private readonly operatedDays!: InfoItem;
  get operatedDaysStr(): string {
    return this.operatedDays.value.toString();
  }

  mouted(){
    console.log("opreatedDaysStr",this.operatedDays)
  }
}
</script>
<style lang="less" scoped>
.operating-days{
  display: flex;
  color: white;
  justify-content: center;
  align-items: center;
}
.days-container ,.days {
  display: flex;
}
.days-container{
  align-items: flex-end;
}
.days-words {
  font-size: 22px;
}
.day-item {
  width: 35px;
  height: 50px;
  font-family: "digiface";
  background-color: #003888;
  margin: 0 4px;
  font-size: 42px;
  border: solid 1px #5495FF;
  font-weight: bold;
  border-radius: 5px;
}
.days-unit {
  color: white;
  font-size: 25px;
}
</style>