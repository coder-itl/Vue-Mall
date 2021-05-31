import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  // state: 状态管理
  state: {
    counter: 1000,
  },
  // mutations: 修改 state 数据
  mutations: {
    increment(state) {
      state.counter++
    },
    decrement(state) {
      state.counter--
    },
  },
  actions: {},
  getters: {},
  modules: {},
})

// 导出 store 独享
export default store
