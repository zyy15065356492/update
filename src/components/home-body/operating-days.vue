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
  font-size: 18px;
}
.day-item {
  width: 30px;
  height: 40px;
  font-family: "digiface";
  background-color: darkblue;
  margin: 0 4px;
  font-size: 30px;
  border: solid 1px #4fc3f7;
  border-radius: 4px;
}
.days-unit {
  color: white;
}
</style>