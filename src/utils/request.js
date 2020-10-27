import axios from 'axios'
import qs from 'qs'
import { Message } from 'element-ui'

axios.defaults.withCredentials = true
var productionUrl = window.location.protocol + '//' + window.location.host
const service = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? productionUrl : process.env.VUE_APP_BASE_API,
  // baseURL: 'http://172.18.40.40:20001/',
  timeout: 300000
})

// request过滤器
service.interceptors.request.use(
  config => {
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

/**
 * 这里进一步封装了axios的各种常见请求，如果有接口胡乱接值的情况就直接用service手动写值吧
 */
export default {
  service: service,
  get: (url, params) => {
    return service({
      url: url,
      method: 'get',
      params
    })
  },
  post: (url, data) => {
    return service({
      url: url,
      method: 'post',
      data
    })
  },
  formData: (url, data) => {
    return service({
      url: url,
      method: 'post',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: qs.stringify(data)
    })
  },
  put: (url, data) => {
    return service({
      url: url,
      method: 'put',
      data
    })
  },
  delete: (url, params) => {
    return service({
      url: url,
      method: 'delete',
      params
    })
  }
}
