export default {
  actions: {
    addUserData(ctx) {
      // load data user
      const data = []

      ctx.commit("setUserData", data)
    }
  },
  mutations: {
    setUserData(state, data) {
      state.user = data;
    }
  },
  state: {
    user: []
  },
  getters: {
    getData(state) {
      return state.user;
    }
  }
}