import { createStore } from 'vuex'
// Create a new store instance.
const store = createStore({
  state () {
    return {
      count: 0
    }
  },
  mutations: {
    increment (state,n) {
      state.count+=n
    }
  },
  actions: {
    increment (context) {
      context.commit('increment')
    }
  }
})

export default store