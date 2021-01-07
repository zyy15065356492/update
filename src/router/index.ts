import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Condition from '../data-analysis/Condition-assessment.vue'
import Area5 from '../data-analysis/Area5.vue'
import energydata from '../cloudylist/energydata/energydata.vue'
import energy from '../cloudylist/energy/energy.vue'
import HelloWorld from '../cloudylist/HelloWorld.vue'
import workorder from '../cloudylist/workorder/workorder.vue'
import emergency from '../peidianshi/emergency.vue'
import jiance from '../peidianshi/jiance.vue'
import floor from '../peidianshi/floor.vue'
import pop from '../peidianshi/pop.vue'
import Analyse from '../platform/Analyse.vue'
import Const from '../platform/Const.vue'
import Homey from '../platform/Homey.vue'




Vue.use(VueRouter)
const routes: Array<RouteConfig> = [
    {
    path:'/',
    name:'Login',
    component:Login
  },
  {
    path:'/Home',
    name:'Home',
    component:Home
  },
  //zt
  {
    path: '/Home/data/Condition',
    name: 'Condition',
    component: Condition
  },
  {
    path: '/Home/data/Area5',
    name: 'Area5',
    component:Area5
  },

  {
    path: '/',
    redirect: '/Home/data/Condition'
  },
  {
    path: '/Home/cloudylist/energydata',
    name: 'energydata',
    component: energydata
  },
  {
    path: '/Home/cloudylist/energy',
    name: 'energy',
    component: energy
  },
  {
    path: '/Home/cloudylist/helloworld',
    name: 'HelloWorld',
    component: HelloWorld
  },
  {
    path: '/Home/cloudylist/workorder',
    name: 'workorder',
    component: workorder
  },
  //zyr
  {
    path:"/Home/peidianshi/emergency",
    name:'emergency',
    component:emergency
  },
  {
    path:"/Home/peidianshi/floor",
    name:'floor',
    component:floor
  },
  {
    path:"/Home/peidianshi/pop",
    name:'pop',
    component:pop
  },
  {
    path:"/Home/peidianshi/jiance",
    name:'jiance',
    component:jiance
  },
  //zyy
  {
    path:"/Home/platform/Analyse",
    name:'Analyse',
    component:Analyse
  },
  {
    path:"/Home/platform/Const",
    name:'Const',
    component:Const
  },
  {
    path:"/Home/platform/Homey",
    name:'Homey',
    component:Homey
  },


]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
})

export default router
