import request from '@/utils/request'
import apiUrl from '../apiUrl'

// get
export function get(params) {
  return request.get(apiUrl.demoApi.get, params)
}

// post
export function post(data) {
  return request.post(apiUrl.demoApi.get, data)
}

// formData
export function formData(data) {
  return request.formData(apiUrl.demoApi.get, data)
}

// put

// delete
