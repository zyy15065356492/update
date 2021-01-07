<template>
  <!-- 容器 -->
  <div class="hello">
    <!-- 查询条件区域 -->
    <div class="select">
      <div class="block">
        <span class="demonstration">工单阶段:</span>
        <xia></xia>
      </div>
      <div class="block">
        <span class="demonstration">故障类型:</span>
        <xia></xia>
      </div>
      <div class="block addblock">
        <span class="demonstration">故障时间:</span>
        <input type="date" value="2015-09-12" class="i1" />
        <span style="width: 2rem">至</span>
        <input type="date" value="2015-09-12" class="i1" />
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
        @selection-change="handleSelectionChange"
        highlight-current-row
        style="font-size: 1.1428rem,border-left:red soild 1px"
      >
        <el-table-column prop="id" label="工单编号"> </el-table-column>
        <el-table-column prop="name" label="预警名称"> </el-table-column>
        <el-table-column prop="project" label="所属项目"> </el-table-column>
        <el-table-column prop="place" label="故障地点"> </el-table-column>
        <el-table-column prop="type" label="事件类型"> </el-table-column>
        <el-table-column label="预警时间">
          <template slot-scope="scope">{{ scope.row.date }}</template>
        </el-table-column>
        <el-table-column prop="state" label="工单状态"> </el-table-column>
        <el-table-column prop="leixing" label="工单类型"> </el-table-column>
      </el-table>
    </div>
    <!-- 分页 -->
    <div style="display: flex; width: 100%; justify-content: flex-end">
      <paging />
    </div>
  </div>
</template>

<script>
import paging from "../paging/paging.vue";
import { warnData } from "../../mock/cloudylist-datas";
import xia from "../../components/utils/xia";

export default {
  name: "energy",
  components: {
    paging,
    xia,
  },
  data() {
    return {

      value1: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
      tableData: warnData,
      // multipleSelection: [],
    };
  },
  methods: {
    toggleSelection(rows) {
      if (rows) {
        rows.forEach((row) => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    // ？？？
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    handleClick() {
      alert("button click");
    },
    chaxun() {
      this.$router.push("/Home/cloudylist/energydata");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.hello {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
}



#sss {
  width: 10.7142rem !important;
}
#sss2 {
  width: 10.6rem !important;
}


.soso {
  width: 200px;
}
/* .table {
  width: 90%;
  border: solid 1px #e5e5e5;
  margin: 20px auto;
} */

/* 下拉 */
.xiala {
  width: 15%;
  margin-left: 5%;
}
/* 日期选择 */
.riqi {
  width: 30%;
}
</style>
