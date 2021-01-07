<template>
  <div class="box">
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
      <div class="block">
        <span class="demonstration">所属范围:</span>
        <xia></xia>
      </div>
      <div class="block addblock">
        <span class="demonstration adddemon">故障日期:</span>
        <input type="date" value="2015-09-12" class="i1" />
        <span style="width: 2rem">至</span>
        <input type="date" value="2015-09-12" class="i1" />
      </div>
      <div class=" buttonblock">
        <el-button type="primary" @click="chaxun">查询</el-button>
      </div>
    </div>
    <!-- 信息数据展示区域 -->
    <div class="shujuhead">
      <div v-for="(val, i) in shujuhead" :key="i" class="Block">
        <div class="bigshu">
          <div class="shuzi">
            {{ val.num.n }}<span>{{ val.num.u }}</span>
          </div>
          <div style="font-size: 1.1428rem">{{ val.dec }}</div>
        </div>
        <img :src="val.img" alt="" />
      </div>
    </div>
    <!--表格展示区域 -->
    <div style="overflow-y: auto; height: 80%; width: 98%" class="ddd">
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
        highlight-current-row
        style="font-size: 1.1428rem"
      >
        <el-table-column prop="id" label="工单编号"> </el-table-column>
        <el-table-column prop="name" label="预警名称"> </el-table-column>
        <el-table-column prop="project" label="所属项目"> </el-table-column>
        <el-table-column prop="place" label="故障地点" width="190">
        </el-table-column>
        <el-table-column prop="type" label="事件类型"> </el-table-column>
        <el-table-column label="预警时间" width="190">
          <template slot-scope="scope">{{ scope.row.date }}</template>
        </el-table-column>
        <el-table-column prop="stage" label="工单阶段"> </el-table-column>
        <el-table-column prop="state" label="工单状态"> </el-table-column>
        <el-table-column prop="leixing" label="工单类型"> </el-table-column>
      </el-table>
    </div>
    <!-- 页数 -->
    <div style="display: flex; width: 100%; justify-content: flex-end">
      <paging @pageNow="pageNow1"></paging>
    </div>
  </div>
</template>
<script>
import paging from "../paging/paging.vue";
import { shujuhead } from "../../mock/cloudylist-datas";
import { tableData1 } from "../../mock/cloudylist-datas";
import xia from "../../components/utils/xia";
export default {
  components: {
    // 页数组件
    paging,
    // 查询条件控件
    xia,
  },
  data() {
    return {
      shujuhead,
      // value1: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
      tableData: tableData1,
      multipleSelection: [],
    };
  },
  methods: {
    
    chaxun() {
      console.log("chaxun结果展示");
    },
    // 点击页数传入值
    pageNow1(a) {
      console.log(a);
    },
  },
  // mounted(){

  // }
};
</script>
<style>
/* 全局文字居中 */
.el-table th > .cell {
  text-align: center;
}
.el-table .cell {
  text-align: center;
}

.box {
  display: flex;
  flex-direction: column;
  align-items: center;
}



#sss {
  width: 10.7142rem !important;
}
#sss2 {
  width: 10.6rem !important;
}
.el-input__inner {
  border: solid rgb(0, 0, 0) 1px !important;
  border-radius: 0 !important;
}


.adddemon{

}


.box {
  width: 100%;
  height: 100%;
}
/* 下拉 */


/* 日期选择 */

/* 数据表头 */
.shujuhead {
  margin-top: 2.1428rem;
padding: 0 2rem;
  display: flex;
  justify-content: space-around;
  width: 100%;
}
.Block > img {
  width: 14.2857rem;
  height: 4.2857rem;
  display: flex;
  position: fixed;
}
.shuzi {
  display: flex;
  font-size: 1.71428rem;
}
.shuzi > span {
  font-size: 1.21428rem;
  margin-top: 12%;
  margin-left: 10%;
}
.bigshu {
  z-index: 1;
  display: flex;
  flex-direction: column;
  margin-left: 35%;
}
.Block {
  display: flex;

  width: 14.2857rem;
  height: 4.2857rem;

  color: #ffffff;
  border-radius: 5px;
  align-items: center;
  justify-content: flex-start;
}
</style>