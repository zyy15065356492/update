<template>
  <div class="login full-bg d-flex flex-column justify-content-around align-items-center">
      <login-title class="login-title"></login-title>
      <div class="flex-grow-1 d-flex flex-column justify-content-center align-items-center">
             <login-panel></login-panel>
      </div>
   
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import LoginTitle from "@/components/login/login-title.vue";
import LoginPanel from "@/components/login/login-panel.vue";
@Component({
    components:{
        LoginTitle,
        LoginPanel
    }
})
export default class Login extends Vue {

}
</script>
<style lang="less" scoped>
.login{
    width: 100%;
    height: 100%;
    background-image: url(../assets/images/login/login-bg.png);
}
.login-title{
    margin-top:6rem;
}
.m-auto{
    margin: auto;
}
</style>