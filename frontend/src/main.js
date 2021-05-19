import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'

import App from './App'

import './config/bootstrap'
import store from './config/store'
import router from './config/router'

Vue.config.productionTip = false

require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6IkphaWxzb24gTWVuZGVzIiwiZW1haWwiOiJqYWlsc3VAMTIzLmNvbSIsImFkbWluIjp0cnVlLCJpYXQiOjE2MjE0NTA5NzgsImV4cCI6MTYyMTcxMDE3OH0.VWfro7NGdkHzcyS82amhNZv_Frhzh_PQMOmTw8MDvmM'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')