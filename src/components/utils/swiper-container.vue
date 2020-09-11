<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <slot></slot>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>
<script lang="ts">
import Swiper from "swiper";
import { Component, Vue } from "vue-property-decorator";
@Component
export default class SwiperContainer extends Vue {
  swiper: any;
  mounted() {
    console.log("mounted:");
    this.swiper = new Swiper(".swiper-container", {
      pagination: {
        el: ".swiper-pagination",
      },
    });
  }
}
</script>