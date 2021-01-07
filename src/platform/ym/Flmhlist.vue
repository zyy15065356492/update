<template>
  <el-table size="small" :data="tableData" stripe style="width: 90%;border-radius: 5px;" :header-cell-style="{background:'#3A98ED',color:'#eee'}">
    <el-table-column prop="type" label="能源类型" align="center"> </el-table-column>
    <el-table-column prop="cons" label="能耗"  align="center"> </el-table-column>
    <el-table-column prop="cost" label="同比" align="center"> </el-table-column>
    <el-table-column prop="costradio" label="同比率" align="center"> </el-table-column>
  </el-table>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          type: "电",
          cons: "1967314kWh",
          cost: "232323232kWh",
          costradio: "-23.2%",
        },
        {
           type: "水",
          cons: "1967314kWh",
          cost: "232323232kWh",
          costradio: "-23.2%",
        },
        {
            type: "燃气",
          cons: "1967314kWh",
          cost: "232323232kWh",
          costradio: "-23.2%",
        },
        {
           type: "集中供热量",
          cons: "3232947GJ",
          cost: "4623075GJ",
          costradio: "-34.2%",
        },
        {
           type: "集中供热量",
          cons: "3232947GJ",
          cost: "4623075GJ",
          costradio: "-34.2%",
        },
      ],
    };
  },
};
</script>
<style scoped>
.t {
    background-color: #f7b707;
}
</style>