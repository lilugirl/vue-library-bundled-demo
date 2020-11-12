import Vue from 'vue'
import App from './App.vue'
import LiuyiLibrary from './index'
Vue.config.productionTip = false
Vue.use(LiuyiLibrary);

new Vue({
  render: h => h(App),
}).$mount('#app')
