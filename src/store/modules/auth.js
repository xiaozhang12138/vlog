import auth from '@/api/auth.js'

const state = {
  //获取用户信息
  user: null,
  //掌握登陆注册状态，初始化未登录
  isLogin: false
}
//处理数据，把登陆注册获得的信息处理之后放到页面上或者给服务器。计算属性
const getters = {
  //映射给header中的组件
  user: state => state.user,
  isLogin: state => state.isLogin
}
//给actions提供修改数据的方法
const mutations = {
  //用户登陆了，把user 传递给 state 
  setUser(state, payload) {
    state.user = payload.user
  },
  //用户登陆返回更改 isLogin 的值
  setLogin(state, payload) {
    state.isLogin = payload.isLogin
  }
}
//异步操作，调用我们已有的方法进行包装处理，绑定为事件。
const actions = {
  //用户登陆
   login({ commit }, { username, password }) {
    //要把整个异步的操作 return 出去，如果没有retuen，那么无法进行跳转，因为并没有返回什么内容
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
    //把所有的东西都归零，重置
    commit('setUser', { user: null })
    commit('setLogin', { isLogin: false })
  },
  //判断用户是否登陆
  async checkLogin({ commit, state}) {
    //如果登陆了，那么直接返回 true ，否则去提交一个方法去判断是否登陆、
    if(state.isLogin) return true
    let res = await auth.getInfo()
    //判断用户是否登陆之后都把，对的 isLogin 返回给 state 
    commit('setLogin', { isLogin: res.isLogin })
    if(!res.isLogin) return false
    //如果用户没登陆，那么直接返回 false ，如果判断登陆了，那么返回 user 给 state 
    //用于跳转页面判断用户是否登陆，
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