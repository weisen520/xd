import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
// import MyHeader from './components/MyHeader'
// Vue.component("my-header",MyHeader)
Vue.config.productionTip = false
// 将axios
Vue.prototype.axios=axios;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
