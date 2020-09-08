<template>
  <div class="system-date linear-words">
      {{new Date().toLocaleString()}}
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class SystemDate extends Vue {

}
</script>
<style lang="less" scoped>

</style>