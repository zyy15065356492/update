<template>
  <div class="fenye">
    <div>共{{totalnum}}条数据</div>
    <el-pagination background layout="prev, pager, next" :total="100" @current-change="pagenow">
    </el-pagination>
  </div>
</template>
<script>
export default {
  data(){
    return{
        totalnum:55
    }
  },
  methods:{
    pagenow(val){
      // console.log(val)
      this.$emit('pageNow',val)
    }
  }
}
</script>
<style>
.fenye {
     display: flex;
    flex-wrap: nowrap;

    font-size: 1.4285rem;
    color: #666666;

    margin-top: 1.428rem;
    align-items: center;

    }

</style>