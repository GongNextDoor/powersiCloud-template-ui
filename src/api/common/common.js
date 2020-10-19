import request from '@/utils/request'
import apiUrl from '../apiUrl'

// 获取字典
export function getCodeDict(data) {
  return request.get(apiUrl.commonApi.getCodeDict, data)
}

