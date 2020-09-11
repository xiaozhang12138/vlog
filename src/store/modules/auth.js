import auth from '@/api/auth.js'

const state = {
  //获取用户信息
  user: null,
  //掌握登陆注册状态，初始化未登录
  isLogin: false
}
//处理数据，把登陆注册获得的信息处理之后放到页面上或者给服务器。计算属性
const getters = {
  user: state => state.user,
  isLogin: state => state.isLogin
}

const mutations = {
  //用户注册了，返回参数给页面
  setUser(state, payload) {
    state.user = payload.user
  },
  //用户登陆返回参数
  setLogin(state, payload) {
    state.isLogin = payload.isLogin
  }
}
//异步操作，调用我们已有的方法进行包装处理，绑定为事件。
const actions = {
  //用户登陆
  login({ commit }, { username, password }) {
    return auth.login({ username, password })
      .then(res => {
        commit('setUser', { user: res.data })
        commit('setLogin', { isLogin: true })
      })
  },
  //用户注册
  async register({ commit }, { username, password }) {
    let res = await auth.register({ username, password })
    commit('setUser', { user: res.data })
    commit('setLogin', { isLogin: true })
    return res.data
  },
  //用户注销登陆
  async logout({ commit }) {
    await auth.logout()
    commit('setUser', { user: null })
    commit('setLogin', { isLogin: false })
  },

  async checkLogin({ commit, state}) {
    if(state.isLogin) return true
    let res = await auth.getInfo()
    commit('setLogin', { isLogin: res.isLogin })
    if(!res.isLogin) return false
    commit('setUser', { user: res.data })
    return true
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}