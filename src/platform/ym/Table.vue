<template>
  <el-table size="small" :data="tableData" style="width: 90%;border-radius: 5px;" :header-cell-style="{background:'#4088FF',color:'#eee'}">
    <el-table-column prop="type" label="能源类型" align="center"> </el-table-column>
    <el-table-column prop="cons" label="消耗量" align="center"> </el-table-column>
    <el-table-column prop="cost" label="费用" align="center"> </el-table-column>
    <el-table-column prop="costradio" label="费用占比" align="center"> </el-table-column>
  </el-table>
</template>

<script>
export default {
  data() {
    return {
      height:"",
      tableData: [
        {
          type: "电",
          cons: "1239364",
          cost: "1750772",
          costradio: "34.7",
        },
        {
           type: "水",
          cons: "35490",
          cost: "48914",
          costradio: "21.31",
        },
        {
           type: "天然气",
          cons: "584283",
          cost: "1825073",
          costradio: "51.68",
        },
      ],
    };
  },
  methods: {
    getHeight() {
      this.height = window.innerHeight - 500;
    },
  },
  created() {
    this.getHeight();
  },
};
</script>
<style scoped>
.t {
    background-color: #1f91ee;
}
</style>