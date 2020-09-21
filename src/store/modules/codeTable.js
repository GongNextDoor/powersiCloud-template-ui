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
    getCodeDict({
      code: code
    }).then(res => {
      commit('SET_SIZE', Object.assign(state.codeDicts, { code: res.data }))
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
