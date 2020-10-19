import { getCodeDict } from '@/api/common/common'

const state = {
  codeDicts: {}
}

const mutations = {
  SET_CODEDICTS: (state, codeDicts) => {
    state.codeDicts = codeDicts
  }
}

const actions = {
  setCodeDicts({ commit }, code) {
    return new Promise((resolve, reject) => {
      getCodeDict({
        dict_key: code
      }).then(res => {
        var codeDicts = state.codeDicts
        codeDicts[code] = res.select2Datalist
        commit('SET_CODEDICTS', codeDicts)
        resolve(codeDicts)
      }).catch(Error => {
        reject(Error)
      })
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
