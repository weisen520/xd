import Vue from 'vue'
import Router from 'vue-router'
// const index=require
// import Index from './views/Index'
// import Details from './views/Details'
//import head from './components/head1.vue'
import index from './components/index.vue'
//import foot from './components/foot.vue'
import login from './components/login.vue'
import lbt from './components/lbt.vue'
import semen from './components/semen_cassiae.vue'
Vue.use(Router)
export default new Router({
  routes: [
    {path:"/semen",component:semen},
    {path:"/lbt",component:lbt},
    {path:"/login",component:login},
    {path:"/",component:index},
    //{path:'/foot',component:foot},
   //{path:"/head",component:head},
   {
     path:"*",
     component:{
       template:`<h1>404:Not Found</h1>`
     }
   }
  ]
})
