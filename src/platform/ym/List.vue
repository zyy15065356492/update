<template>
  <el-table
    
    :data="tableData"
    style="width: 90%; height: 100%; border-radius: 5px"
    :header-cell-style="{ background: '#1f91ee', color: '#eee' }"
    size="small"
    :height="height"
  >
    <el-table-column prop="type" label="月份" align="center"> </el-table-column>
    <el-table-column prop="cons" label="电费" align="center"> </el-table-column>
    <el-table-column prop="cost" label="水费" align="center"> </el-table-column>
    <el-table-column prop="costradio" label="天然气" align="center">
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  mounted() {
     setTimeout(this.initData,10);
  },
  data() {
    return {
      height: "",
      tableData: [
        {
          type: "1月",
          cons: "253020",
          cost: "314739",
          costradio: "361670",
        },
        {
          type: "2月",
          cons: "253020",
          cost: "314739",
          costradio: "361670",
        },
        {
          type: "3月",
          cons: "253020",
          cost: "314739",
          costradio: "361670",
        },
        {
          type: "4月",
          cons: "253020",
          cost: "314739",
          costradio: "361670",
        },
        {
          type: "5月",
          cons: "253020",
          cost: "314739",
          costradio: "361670",
        },
        {
          type: "6月",
          cons: "253020",
          cost: "314739",
          costradio: "361670",
        },
        {
          type: "7月",
          cons: "253020",
          cost: "314739",
          costradio: "361670",
        },
        {
          type: "8月",
          cons: "253020",
          cost: "314739",
          costradio: "361670",
        },

        {
          type: "9月",
          cons: "253020",
          cost: "314739",
          costradio: "361670",
        },
        {
          type: "10月",
          cons: "253020",
          cost: "314739",
          costradio: "361670",
        },
        {
          type: "11月",
          cons: "253020",
          cost: "314739",
          costradio: "361670",
        },
        {
          type: "12月",
          cons: "253020",
          cost: "314739",
          costradio: "361670",
        },
      ],
    };
  },
  methods: {
    getHeight() {
      this.height = window.innerHeight - 510;
    },
  },
  created() {
    this.getHeight();
  },
};
</script>
<style scoped>
el-table-column {
  line-height: 0px;
}
</style>