<template>
  <div class="right-spanner full-bg">
    <login-info></login-info>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import LoginInfo from "@/components/header/login-info.vue";
@Component({
  components: {
    LoginInfo,
  },
})
export default class RightSpanner extends Vue {}
</script>
<style lang="less" scoped>
.right-spanner {
  background-image: url(../../assets/images/right-spanner-bg.png);
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right:24px ;
}
</style>