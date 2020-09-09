<template>
  <div class="application-list">
    <table-list :table-info="tableList" @show-detail="showDetail"></table-list>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import AppInfo from "@/interfaces/app-info";
import TableList from "@/components/utils/table-list.vue";
import TableInfo from "@/interfaces/table-info";
@Component({
  components: {
    TableList,
  },
})
export default class ApplicationList extends Vue {
  @Prop() appList!: Array<AppInfo>;

  get tableList(): TableInfo {
    const _titles = ["序号", "项目名称", "地区", "详情"];
    const _contents = this.getTableContents(this.appList);
    return { titles: _titles, contents: _contents };
  }
  getTableContents(appList: AppInfo[]): Array<Array<string>> {
    return appList.map(
      (appInfo, index): Array<string> => {
        return [
          (index + 1).toString(),
          appInfo.name,
          appInfo.site,
          appInfo.value,
        ];
      }
    );
  }
  showDetail(url: string) {
    window.open(url);
    this.$emit("close-dialog");
  }
}
</script>
<style lang="less" scoped>
.application-list{
    padding: 12px;
}
</style>