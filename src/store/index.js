import { createStore } from 'vuex'

// 创建一个新的 store 实例
const store = createStore({
  state () {
    return {
      
      count: 0,
      newAdvise: {
        adviseName: '',
        introduce: '',
        feasibilityAnalyze: '',
        innovation: ''
      },
      newProject: {
        projectName: '',
        projectType: '',
        projectObjective: '',
        projectTank:'',
        departmentName: '',
        startTime: '',
        endTime: '',
        introduce: '',
        feasibilityAnalyze: '',
        innovation: '',
        createrMx: ''
      },
      advise:{
        id: '',
      },
      project:{
        id: ''
      }
    }
  },
  mutations: {
    setAdviseId (state,id) {
      state.advise.id = id
    },
    setNewAdvise(state,newAdvise)
    {
      state.newAdvise = newAdvise
    },
    setProjectId (state,id) {
      state.project.id = id
    },
    setNewProject(state,newProject)
    {
      state.newProject = newProject
    },
  }
})

export default store

