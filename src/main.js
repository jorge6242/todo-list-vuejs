import Vue from 'vue'
import Router from 'vue-router'

import App from './App.vue'
import { store } from './store';
import { routes } from './routes'

Vue.config.productionTip = false

Vue.use(Router)
const router = new Router({ routes })

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
