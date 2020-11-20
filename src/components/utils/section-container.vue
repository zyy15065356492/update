<template>
  <div
    class="section-bg full-bg"
    v-bind:class="[
      sectionInfo.position == 'center' ? 'large-section' : 'normal-section',
    ]"
  >
    <div
      class="section-title text-white d-flex align-items-center"
      v-bind:class="[sectionInfo.position == 'center' ? 'title-center' : '']"
    >
      <img :src="sectionInfo.icon" />
      <div class="title">{{ sectionInfo.title }}</div>
    </div>
    <div class="divider"></div>
    <slot class="section-body"></slot>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import SectionInfo from "@/interfaces/sectionInfo";

@Component
export default class SectionItem extends Vue {
  @Prop({
    default: {
      title: "标题",
      position: "center",
    },
  })
  private readonly sectionInfo!: SectionInfo;
  mounted() {
    console.log("this.section-info.position", this.sectionInfo);
  }
}
</script>
<style lang="less" scoped>
.section-bg {
  border: 2px solid transparent;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
}
.normal-section {
  border-image: url(../../assets/images/section-bg.png) 2;
}
.large-section {
  border-image: url(../../assets/images/large-section-bg.png) 2;
}
.section-body {
  flex-shrink: 1;
  flex-grow: 1;
  background-color: white;
}
.section-title {
  text-align: left;
  padding: 0.5rem 1rem;
  font-size: 1.4rem;
  color: #333333;
}
.divider {
  height: 1px;
  background-color: #E6E6E6;
}
.title-center {
  text-align: center;
  background: linear-gradient(
    to right,
    #00000000,
    #01b4ff00,
    #0825b7,
    #01b4ff00,
    #00000000
  );
}
.title {
  padding-left: 10px;
}
</style>