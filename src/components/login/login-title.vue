<template>
    <div class="login-title d-flex align-items-center justify-content-center">
        <div class="system-logo"><img src="../../assets/images/login/logo.png"/></div>
        <div class="system-title text-white">{{sysName}}</div>
    </div>
</template>
<script lang="ts">
//登录标题
import {Component, Vue} from 'vue-property-decorator';
// const sysLoginLogo =require("@/assets/images/login/logo.png") ;
import {SYS_NAME} from "@/utils/consts";

@Component
export default class LoginTitle extends Vue{
    sysName=SYS_NAME
}
</script>
<style lang="less" scoped>
.system-title{
    font-size: 84px;
    line-height: 84px;
    margin-left: 2rem;
}
.system-logo{
    width: 173px;
    height: 73px;
}
</style>