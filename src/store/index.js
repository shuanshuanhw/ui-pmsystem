import { createStore } from 'vuex'

// 创建一个新的 store 实例
const store = createStore({
  state () {
    return {
      id: '',
      count: 0,
      newAdvise: {
        adviseName: '',
        introduce: '',
        feasibilityAnalyze: '',
        innovation: ''
      }
    }
  },
  mutations: {
    setId (state,id) {
      state.id = id
    },
    setNewAdvise(state,newAdvise)
    {
      state.newAdvise = newAdvise
    }
  }
})

export default store

