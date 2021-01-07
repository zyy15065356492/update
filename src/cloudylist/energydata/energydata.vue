<template>
  <div class="interface">
    <div class="title2">
      <div class="ima">
        <img
          src="..\..\assets\images\home\projects-distribution.png"
          alt=""
          class="image"
        />
      </div>
      <div class="txt">设备状态评价</div>
    </div>
    <div style="height:80%;width:100%">   
          <el-table 
            stripe
            :data="tableData"
            :row-style="rowStyle"
            :header-cell-style="headerCellStyle"
            :span-method="tableRowMerge"
            :cell-style="cellStyle"
            style="width: 100%"
          >
            <!-- 第一列的列宽在这里设置 -->
            <el-table-column prop label="区域/月份" width="196">
              <el-table-column prop="area" width="98" />
              <el-table-column prop="floor" width="98" />
            </el-table-column>
            <el-table-column
              v-for="(column, index) in columnInfo"
              :key="index"
              :prop="column.prop"
              :label="column.label"
              :width="column.width"
            />
          </el-table>
    </div>
    <div style="display:flex;width:100%;justify-content: flex-end;">
      <paging />
    </div>
  </div>
</template>

<script>
import paging from "../paging/paging.vue";

export default {
  components: {
    paging,
  },
  data() {
    return {
      tableData: [], //表格数据
      columnInfo: [], //表格列数据
      months: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
    };
  },
  created() {
    //加载表格数据
    this.initData();
    //加载列数据
    this.loadColumnInfo();
    console.log(this.tableData);
  },
  methods: {
    initData() {
      //创建假数据
      for (let i = 0; i < 12; i++) {
        const oneData = {};
        if (i < 4) {
          oneData.area = "地下室";
        }
        if (i >= 4 && i < 8) {
          oneData.area = "jun楼";
        }
        if (i >= 8 && i < 12) {
          oneData.area = "商业区";
        }
        oneData.floor = `${i}楼层`;

        for (let j = 0; j < this.months.length; j++) {
          oneData[this.months[j]] = 123;
        }

        oneData.total = 6666; //合计自己算出来就好
        this.tableData.push(oneData);
      }
    },
    /**加载列信息 */
    loadColumnInfo() {
      const label = [
        "一月",
        "二月",
        "三月",
        "四月",
        "五月",
        "六月",
        "七月",
        "八月",
        "九月",
        "十月",
        "十一月",
        "十二月",
      ];
      for (let i = 0; i < label.length; i++) {
        const column = {};
        column.label = label[i];
        column.prop = this.months[i];
        // 一到十二月的列宽
        // column.width = 100;
        this.columnInfo.push(column);
      }
      //合计列的列宽自适应
      this.columnInfo.push({ label: "合计", prop: "total", width: "200" });
    },
    /**表格头的样式 */
    headerCellStyle({ row, column, rowIndex, columnIndex }) {
      const style = { backgroundColor: "#3A98ED", color: "white", border: 0 ,height:'5%'};
      //合并列头
      if (column.property === "area" || column.property === "floor") {
        style.display = "none";
      }
      return style;
    },
    /**表格行合并方法 */
    tableRowMerge({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 0) {
        if (rowIndex % 4 === 0) {
          return [4, 1];
        } else {
          return [0, 1];
        }
      }
    },
    /**单元格样式 */
    cellStyle({ row, column, rowIndex, columnIndex }) {

      const style = {};
      style.fontSize=1.2857+'rem'
      if(window.innerHeight>=1050){
          style.padding='1.1% 0'
      }
      if(window.innerHeight>=768&&window.innerHeight<1050){
        style.psdding='0.5% 0 '
      }
     
      style.borderRightWidth = 0;
      if (rowIndex % 4 === 3 || columnIndex === 0) {
        style.borderBottomColor = "#CDCDCD";
        style.borderBottomWidth = 0.1 + "rem";
      }
      if (columnIndex === 0) {
        style.backgroundColor = "#F5F6F7";
        style.borderRightColor = "#CDCDCD";
        style.borderRightWidth = 0.1 + "rem";
      }

      return style;
    },
    /**表格行样式 */
    rowStyle({ row, rowIndex }) {
      return {
        // boderBottom:'10px'
      };
    },
  },
};
</script>

<style>

tr {
  color: #2f333f;
}

/* 分页 */



</style>