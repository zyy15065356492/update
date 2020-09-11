import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import echarts from 'echarts';
import "@/assets/styles/index.less";
import "@/assets/fonts/iconfont/iconfont.css"
import 'swiper/swiper.less';
Vue.prototype.$echarts = echarts;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
