import config from '@/config/index'

export default {
  commonApi: {
    getCodeDict: `/${config.dictApiPath}/comm/biz/dict/getValues.action` // 获取字典
  },
  demoApi: {
    get: `/${config.baseApiPath}/help/dirtree/all`, // get
    post: `/${config.baseApiPath}/help/dirtree/all`, // post
    formData: `/${config.baseApiPath}/help/dirtree/all` // formData
  }
}
