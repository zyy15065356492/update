<template>
  <el-table size="small" :data="tableData" style="width: 90%;border-radius: 5px;" :header-cell-style="{background:'#F8B412',color:'#eee'}">
    <el-table-column prop="type" label="用电分项" align="center"> </el-table-column>
    <el-table-column prop="cons" label="消耗量"  align="center"> </el-table-column>
    <el-table-column prop="cost" label="当量" align="center"> </el-table-column>
    <el-table-column prop="costradio" label="百分比" align="center"> </el-table-column>
  </el-table>
</template>

<script>
export default {
  data() {
    return {
      height:"",
      tableData: [
        {
          type: "一工段",
          cons: "300791",
          cost: "36967.31",
          costradio: "26.58",
        },
        {
           type: "二工段",
          cons: "384199",
          cost: "47218.06",
          costradio: "33.95",
        },
        {
           type: "三工段",
          cons: "241175",
          cost: "29640.41",
          costradio: "21.31",
        },
        {
           type: "非生产",
          cons: "205642",
          cost: "25273.24",
          costradio: "18.17",
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
    background-color: #f7b707;
}
</style>