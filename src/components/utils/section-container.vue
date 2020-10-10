<template>
  <div class="section-bg full-bg">
    <div
      class="section-title text-white"
      v-bind:class="[sectionInfo.position == 'center' ? 'title-center' : '']"
    >
      {{ sectionInfo.title }}
    </div>
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
  border-image: url(../../assets/images/section-bg.png) 2;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
}
.section-body {
  flex-shrink: 1;
  flex-grow: 1;
}
.section-title {
  text-align: left;
  padding: 12px 24px 12px 24px;
  background: linear-gradient(to right, #0825b7, #01b4ff00);
}
.title-center {
  text-align: center;
  background: linear-gradient(to right,#00000000, #01b4ff00, #0825b7, #01b4ff00,#00000000);
}
</style>