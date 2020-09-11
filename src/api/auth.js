import request from '@/helpers/request'

const URL = {
  REGISTER: '/auth/register',
  LOGIN: '/auth/login',
  LOGOUT: '/auth/logout',
  GET_INFO: '/auth'
}

export default {
  //用户登陆
  register({username, password}) {
    return request(URL.REGISTER, 'POST', { username, password })
  },
  //用户注册
  login({username, password}) {
    return request(URL.LOGIN, 'POST', { username, password })
  },
  //用户注销登陆
  logout() {
    return request(URL.LOGOUT), localStorage.removeItem('token')
  },
  //检查用户是否登陆， 返回"isLogin": true,
  getInfo() {
    return request(URL.GET_INFO)
  }
}