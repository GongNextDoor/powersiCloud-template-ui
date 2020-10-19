/**
 * 字典操作
 */

import store from '@/store'

/**
 * 根据code获取字典列表
 * @param {*} code
 * @param {强制刷新，传入true则不会从vuex里获取字典列表} isRefresh
 */
export async function getCodeDict(code, isRefresh) {
  if (!store.state.codeTable.codeDicts[code] || isRefresh) {
    await store.dispatch('codeTable/setCodeDicts', code)
  }
  return
}

/**
 * 字典值翻译
 * @param {*} code
 * @param {*} key
 * @param {强制刷新，传入true则不会从vuex里获取字典列表} isRefresh
 */
export function dictTranslate(arr, key) {
  var value = ''
  for (var el of arr) {
    if (el.id.toString() === key.toString()) {
      value = el.text
      return value
    }
  }
}
