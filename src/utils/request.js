import axios from 'axios'
import { Message } from 'element-ui'
import store from '@/store'
import { getToken } from '@/utils/auth'

axios.defaults.withCredentials = true
var productionUrl = window.location.protocol + '//' + window.location.host + '/' + window.location.pathname.split('/')[1] + 'power-xxx-server'
const service = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? productionUrl : process.env.VUE_APP_BASE_API_SERVERSGROUP,
  // baseURL: 'http://172.18.40.40:20001/power-xxx-server/',
  timeout: 10000
})

// request过滤器
service.interceptors.request.use(
  config => {
    if (store.getters.token) {
      config.headers['X-Token'] = getToken()
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// response过滤器
service.interceptors.response.use(
  response => {
    const res = response.data
    if (res.errCode !== '0') {
      Message({
        message: res.errMsg || 'Error',
        type: 'error',
        duration: 5 * 1000
      })
      return Promise.reject(new Error(res.errMsg || 'Error'))
    } else {
      return res
    }
  },
  error => {
    var headerData = error.response.request.getResponseHeader('sessionstatus')
    if (headerData === null) {
      Message({
        message: '服务器异常',
        type: 'error',
        duration: 5 * 1000
      })
    } else {
      var XMLHttpRequest = error.response.request
      var textStatus = error.response.status
      var statusText = error.response.statusText
      var pWin = window.top // 得到最底层父窗口
      if (pWin !== window) {
        // 当前窗口不是最顶层，意味着在iframe里面
        pWin.onAjaxError(XMLHttpRequest, textStatus, statusText)// 直接调用最底层iframe的重新登陆方法，跳转到登陆页
        // pWin.location.href = window.location.href; //触发底层窗口调整到登陆界面
      }
    }
    return Promise.reject(error)
  }
)

export default service
