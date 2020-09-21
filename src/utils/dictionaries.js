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
  if (store.state.codeTable[code] && !isRefresh) {
    return store.state.codeTable[code]
  } else {
    await store.dispatch('codeTable/setCodeDicts', code)
    return store.state.codeTable[code]
  }
}

/**
 * 字典值翻译
 * @param {*} code
 * @param {*} key
 * @param {强制刷新，传入true则不会从vuex里获取字典列表} isRefresh
 */
export async function dictTranslate(code, key, isRefresh) {
  var arr = []
  if (store.state.codeTable[code] && !isRefresh) {
    arr = store.state.codeTable[code]
  } else {
    await store.dispatch('codeTable/setCodeDicts', code)
    arr = store.state.codeTable[code]
  }
  var name = ''
  for (var el of arr) {
    if (el.dictValueCode === code) {
      name = el.dictValueName
      break
    }
  }
  return name
}
