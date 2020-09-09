<template>
  <div class="login-info linear-words">
    <div class="person-info">
      <span class="icon-person-conatiner icon iconfont" :class="personInfo.avator"></span>
      <span>{{personInfo.name}}</span>
    </div>
    <div class="divider"></div>
    <div class="icon-quit-container">
      <span class="icon iconfont icon-084tuichu"></span>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import PersonInfo from "@/interfaces/person-info";
@Component
export default class LoginInfo extends Vue {
  @Prop({
    default: () => {
      return {
        avator: "icon-dingbudaohang-zhangh",
        name: "管理员",
        tel: "18832000010",
      };
    },
  })
  personInfo!: PersonInfo;
}
</script>
<style lang="less" scoped>
.login-info{
    display: flex;
    justify-content: flex-end;
    align-self:center;
}
.icon-person-conatiner{
    margin-right: 4px;
}
.person-info{
    display: flex;
    justify-content: center;
    align-items: center;
}
.icon{
    font-size: 20px;
}
// .icon-quit-container{
//     position: relative;
//     margin-left: 10px;
//     padding-left:12px ;
// }
.divider{

    margin: 0 12px;
    width: 1px;
    background-color: #64b5f6;
}
</style>