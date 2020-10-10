<template>
  <div class="right-spanner full-bg">
    <system-date></system-date>
    <login-info></login-info>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import LoginInfo from "@/components/header/login-info.vue";
import systemDate from "@/components/header/system-date.vue";
@Component({
  components: {
    LoginInfo,
    systemDate
  },
})
export default class RightSpanner extends Vue {}
</script>
<style lang="less" scoped>
.right-spanner {
  background-image: url(../../assets/images/right-spanner-bg.png);
  padding: 0 0 0 2rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-right:24px ;
}
</style>