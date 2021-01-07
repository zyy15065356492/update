<template>
  <el-table :data="tableData" stripe style="width: 47%;height:65%;" :header-cell-style="{background:'##f4f5fa',color:'#eee'}">
    <el-table-column prop="type" label="项目名称" align="center"> </el-table-column>
    <el-table-column prop="cons" label="面积(㎡)"  align="center"> </el-table-column>
    <el-table-column prop="cost" label="当日用电量(Kwh)" align="center"> </el-table-column>
  </el-table>
</template>
<script>
export default {
  name:"project-list",
  data() {
    return {
      tableData: [
        {
          type: "智慧配电台区1",
          cons: "500",
          cost: "123.44",
        },
        {
          type: "智慧配电台区2",
          cons: "430",
          cost: "87.91",
        },
        {
           type: "智慧配电台区3",
          cons: "756",
          cost: "174.50",
        },
        {
           type: "智慧配电台区4",
          cons: "432",
          cost: "93.48",
        },
        {
           type: "智慧配电台区5",
          cons: "512",
          cost: "87.19",
        },
        {
           type: "智慧配电台区6",
          cons: "831",
          cost: "102.03",
        },
        {
           type: "智慧配电台区7",
          cons: "780",
          cost: "193.22",
        },
        {
           type: "智慧配电台区8",
          cons: "780",
          cost: "193.22",
        },
      ],
    };
  },
};
</script>
<style scoped>
</style>