<template>
  <div class="section-title full-bg">{{sectionTitle}}</div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
@Component
export default class SectionTitle extends Vue {
  @Prop({
    default: "标题",
  })
  sectionTitle!: string;
}
</script>
<style lang="less" scoped>
.section-title {
  color: white;
  width: 80px;
  height: 40px;
  background-image: url(../../assets/images/title-bg.png);
  text-align: center;
  line-height: 40px;
}
</style>