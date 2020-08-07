import Vue from 'vue'

import components from '@/utils/components.js'
Vue.use(components)

import Cookies from 'js-cookie'

import 'normalize.css/normalize.css' // a modern alternative to CSS resets
import '@/assets/font-awesome-4.7.0/css/font-awesome.css'

import Element from 'element-ui'
import './styles/element-variables.scss'

import '@/styles/index.scss' // global css

import App from './App'
import store from './store'
import router from './router'

import './icons' // icon
import './permission' // permission control
import './utils/error-log' // error log

import * as filters from './filters' // global filters

import { handleConfirm, msgSuccess, msgError } from './utils/message'
// import vueSticky from './directive/sticky'
// 全局方法挂载
Vue.prototype.$msgSuccess = msgSuccess

Vue.prototype.$msgError = msgError

Vue.prototype.$msgConfirm = handleConfirm
Vue.prototype.$msgInfo = function(msg) {
  this.$message.info(msg)
}
Vue.use(Element, {
  size: Cookies.get('size') || 'small' // set element-ui default size
})

// register global utility filters
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
