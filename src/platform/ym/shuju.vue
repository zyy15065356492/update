<template>
   <div>
       <img :src="img1" style="position:relative;top:0.3rem;right:3.6rem">
      <span class="s1" style="color:#5ECF39;position:relative;top:0.1rem;right:3.5rem;">-23.89%</span>
      
      <span class="s2">同比减少</span>
    
      <span class="s1" style="color:#4088FF;">3024759.22</span>
      <span>kgce</span>
      <img :src="img2" style="position:relative;top:0.4rem;right:1.1rem;">
      <span class="s2">总耗能</span>

      <span class="s1" style="color；#111111；">3987894.54</span>
      <span>kgce</span>
      <img :src="img3" style="position:relative;top:0.4rem;right:1.1rem;">
      <span class="s2">同比耗能</span>
   </div>
</template>
<script>
export default {
    data() {
        return {
            img1: require("../../assets/images/yyimg/xia.png"),
            img2: require("../../assets/images/yyimg/zonglan.png"),
            img3: require("../../assets/images/yyimg/diannao.png")
        }
    }
}
</script>
<style scoped>
.s1 {
    font-size: 0.2rem;
    line-height: 0.6rem;
}
.s2 {
    display: block;
    position: relative;
    left:0.15rem;
}
</style>