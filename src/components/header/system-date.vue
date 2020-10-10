<template>
  <div class="system-date d-flex linear-words justify-content-center align-items-center">
    <div>{{ date.format('YYYY-MM-DD ') }}</div>
    <div class="format-time">{{date.format('HH:mm:ss')}}</div>
  </div>
</template>

<script lang="ts">
import moment from "moment";
import { Component, Vue } from "vue-property-decorator";
@Component
export default class SystemDate extends Vue {
  private date: moment.Moment = moment();
}
</script>
<style lang="less" scoped>
.format-time{
  margin-left: 2rem;
  font-size: 22px;
}
</style>