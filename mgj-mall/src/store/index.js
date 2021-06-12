import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

const store = new Vuex.Store({
  // state: 状态管理
  state: {
    cartList: [],
  },
  // mutations: 修改 state 数据
  mutations,
  actions,
  getters: {},
  modules: {},
})

// 导出 store 独享
export default store
