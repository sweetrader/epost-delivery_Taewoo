const common = {
  state: {
    mainTab: '',
    login: false,
    userNickName: ''
  },
  mutations: {
    SET_MAIN_TAB: (state, mainTab) => {
      state.mainTab = mainTab
    },
    SET_USER_NAME: (state, userNickName) => {
      state.userNickName = userNickName
    },
    SET_LOGIN_STATUS: (state, login) => {
      state.login = login
      console.log(state.login)
    }
  },

  actions: {
    setMainTab({ commit }, mainTab) {
      commit('SET_MAIN_TAB', mainTab)
    }
  }
}

export default common
