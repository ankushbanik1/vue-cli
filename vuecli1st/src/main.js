import Vue from 'vue'
import App from './App'
import router from './router'
import students from './components/students.vue'
Vue.config.productionTip = false

Vue.component("students",students)


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
