<template>
  <div class="company-info  linear-words">
    <img class="logo" src="../../assets/images/logo.png" />
    {{ companyName }}
  </div>
</template>
<script lang="ts">
import {Component, Prop, Vue } from "vue-property-decorator";
@Component
export default class CompanyInfo extends Vue {
  @Prop() private companyName!: string;
  mounted() {
      console.log("this.companyName",this.companyName);
  }
}
</script>
<style lang="less" scoped>
.logo{
    height: 12px;
    vertical-align: center;
}
</style>