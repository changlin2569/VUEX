import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    add (state) {
      state.count += 1
    },
    addN (state, n) {
      state.count += n
    },
    sub (state) {
      state.count -= 1
    },
    subN (state, n) {
      state.count -= n
    }
  },
  actions: {
    addAsync (context) {
      setTimeout(() => {
        // console.log(context)
        context.commit('add')
      }, 2000)
    },
    addNAsync (context, step) {
      setTimeout(() => {
        context.commit('addN', step)
      }, 2000)
    },
    subAsync (context) {
      setTimeout(() => {
        context.commit('sub')
      }, 2000)
    },
    subNAsync (context, step) {
      setTimeout(() => {
        context.commit('subN', step)
      }, 2000)
    }
  },
  getters: {
    showCount (state) {
      return '当前最新的count值为：' + state.count
    }
  }
})
