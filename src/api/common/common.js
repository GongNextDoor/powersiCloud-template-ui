import request from '@/utils/request'
import apiUrl from '../apiUrl'

// 获取字典
export function getCodeDict(params) {
  return request.get(apiUrl.commonApi.getCodeDict, params)
}

