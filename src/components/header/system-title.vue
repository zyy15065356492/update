<template>
  <div class="system-title">{{sysName}}</div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class SystemTitle extends Vue {
  @Prop() private sysName!: string;
}
</script>
<style lang="less" scoped>
.system-title{
  background:linear-gradient(to right,#0072FF,#00EAFF,#01A9FF);
  font-size: 40px;
  line-height: 80px;
  color:transparent;
  background-clip: text;
  -webkit-background-clip: text;
  font-weight: bold;
}
</style>