<template>
  <div class="b">
    <div class="c">
      <ul>
        <li>单位：kWh</li>
        <li>今日用电：<span style="color: #343432">68.64</span></li>
        <li>昨日用电：<span style="color: #343432">74.12</span></li>
        <li>本月用电：<span style="color: #343432">249.01</span></li>
        <li>累计用电：<span style="color: #343432">1247.35</span></li>
      </ul>
    </div>
    <div class="con">
      <ul>
        <li>单位：kWh</li>
        <li>今日用电：<span style="color: #343432">68.64</span></li>
        <li>昨日用电：<span style="color: #343432">74.12</span></li>
        <li>本月用电：<span style="color: #343432">249.01</span></li>
        <li>累计用电：<span style="color: #343432">1247.35</span></li>
      </ul>
    </div>
  </div>
</template>
<style scoped>
.c {
  width: 10%;
  height: 25vh;
  background-color: #fefaee;
  border-radius: 8px;
  overflow: hidden;
}
.con {
  width: 10%;
  height: 25vh;
  position: relative;
  float: left;
  top: -25vh;
  left: 22vh;
  background-color: #F5F8FF;
  border-radius: 8px;
  overflow: hidden;
}
ul {
  /* text-align:center; */
  text-align: left;
}
ul li {
  list-style: none;
  line-height: 4.5vh;
  text-align: left;
  color: #999a9c;
}
</style>