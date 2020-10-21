<template>
  <div class="company-info  linear-words d-flex align-items-center">
    <img class="logo" src="../../assets/images/logo.png" />
    <div class="company-name">{{ companyName }}</div>
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
    width:57px;
    height: 22px;
    vertical-align: center;
}
.company-name{
    padding-left: 20px;
    font-size: 1.2rem;
}
</style>