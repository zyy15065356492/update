<template>
  <div class="box">
    <!-- 查询条件区域 -->
    <div class="select1">
      <div class="block" style="    margin-right: 2rem;">
        <span class="demonstration">账号:</span>
        <el-input v-model="input" placeholder="请输入"></el-input>
      </div>
      <div class=" buttonblock">
        <el-button type="primary" @click="chaxun">查询</el-button>
      </div>
    </div>
    <!-- 表格区域 -->
    <div style="height: 80%; width: 98%" class="ddd">
      <el-table
        height="100%"
        :header-cell-style="{
          background: '#F8F8F9',
          color: '#515A6E',
          fontSize: '1.3335rem',
          weight: '46px',
        }"
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        class="table"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="55"> </el-table-column>
        <el-table-column prop="id" label="ID编号"> </el-table-column>
        <el-table-column prop="number" label="用户账号"> </el-table-column>
        <el-table-column prop="rmb" label="充值金额"> </el-table-column>
        <el-table-column prop="endrmb" label="充值后余额"> </el-table-column>
        <el-table-column prop="order" label="订单号"> </el-table-column>
        <el-table-column label="充值日期">
          <template slot-scope="scope">{{ scope.row.date }}</template>
        </el-table-column>
      </el-table>
    </div>
    <!-- 分页 -->
    <div style="display: flex; width: 100%; justify-content: flex-end">
      <paging />
    </div>
  </div>
</template>

<script>
import { accountData } from "@/mock/cloudylist-datas";
import paging from "./paging/paging.vue";
export default {
  name: "HelloWorld",
  components: {
    paging,
  },
  data() {
    return {
      input: "",
      msg: "Welcome to Your Vue.js App",
      tableData: accountData,
      // ???
      multipleSelection: [],
    };
  },
  methods: {
    // 点击查询跳转路由事件
    chaxun() {
      this.$router.push("/energy");
    },
    // ？？？
    toggleSelection(rows) {
      if (rows) {
        rows.forEach((row) => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    // ??? 代码里@selection-change="handleSelectionChange"
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .select1 {
    display: flex;
    justify-content: center;
    margin-top: 2.1428rem;
    margin-left: 2rem;
    margin-right: 2rem;
    width: 100%;

  }

.box {
  display: flex;
  flex-direction: column;
  align-items: center;
}


</style>
