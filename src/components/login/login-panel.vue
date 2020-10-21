<template>
  <div
    class="login-panel full-bg d-flex align-items-center aligin-items-cemter"
  > 
    <form class="login-form m-auto">
      <div class="input-container container-border">
        <i class="iconfont icon-yonghu1 icon"></i>
        <input class="input-field" type="text" placeholder="" name="用户名" />
      </div>

      <div class="input-container container-border">
        <i class="iconfont icon-mima icon"></i>
        <input class="input-field" type="password" placeholder="" name="psw" />
      </div>
      <div class="input-container">
        <input
          class="input-field input-border"
          type="text"
          name="verifyCode"
          placeholder="请输入右侧的验证码"
        />
        <img class="verify-code-image" src="../../assets/images/logo.png" />
      </div>

      <button class="btn" v-on:click="submit">登录</button>
    </form>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class LoginPanel extends Vue {
  submit(e: Event) {
    e.preventDefault();
    this.$router.push({
      name: "Home",
    });
  }
}
</script>
<style lang="less" scoped>
.login-panel {
  width: 45rem;
  height: 35rem;
  background-image: url(../../assets/images/login/login-panel-border.png);
}
.input-container {
  display: -ms-flexbox; /* IE10 */
  display: flex;
  width: 100%;
  margin-bottom: 15px;
}
.container-border {
  border: solid 1px lightblue;
}

.icon {
  padding: 10px;
  background: white;
  color: black;
  min-width: 20px;
  text-align: center;
}

.input-field {
  width: 100%;
  padding: 10px;
  outline: none;
  border: none;
}

.input-field:focus {
  border: 2px solid dodgerblue;
}

/* Set a style for the submit button */
.btn {
  background-color: dodgerblue;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  width: 100%;
  opacity: 0.9;
}

.btn:hover {
  opacity: 1;
}
.login-form {
  padding: 4rem;
  background-color: white;
}
.input-border {
  border: solid 1px lightblue;
}
.verify-code-image {
  margin-left: 5rem;
}
</style>