<template>
    <div>
        <div> <el-radio v-model="radio" label="1">能耗数据汇总展示</el-radio></div>
        <div> <el-radio v-model="radio" label="2">分类能耗统计分析</el-radio></div>
        <div> <el-radio v-model="radio" label="3">用电分项能耗分析</el-radio></div>
        <div> <el-radio v-model="radio" label="4">用电分项能耗趋势</el-radio></div>
        <div> <el-radio v-model="radio" label="5">能耗指标对比分析</el-radio></div>
        <div> <el-radio v-model="radio" label="6">分项能耗对比分析</el-radio></div>
        <div> <el-radio v-model="radio" label="7">区域能耗对比</el-radio></div>
        <div> <el-radio v-model="radio" label="8">分类能耗统计分析</el-radio></div>
        <div> <el-radio v-model="radio" label="9">同比、环比分析</el-radio></div>
    </div>
</template>
<script>
export default {
    data() {
        return{
            radio:"9"
        }
    }
}
</script>
<style scoped>
div {
    text-align:left;
    margin:10px 0;
    color: #111111;
}
.el-radio {
    font-weight: 700;
}
</style>