const module = {
  namespaced : true,
  state : {
    userToken : '111'
  },
  mutations : {
    setToken (state,data) {
      state.userToken = data
    }
  }
}
export default module;