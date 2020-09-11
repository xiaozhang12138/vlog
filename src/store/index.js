import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth'
import blog from './modules/blog'
//入口文件，注册Vuex并且把模块注册进来
Vue.use(Vuex)
//入口文件，新建一个Vuex 并且在Vue 根实例中进行注册
export default new Vuex.Store({
  modules: {
    auth,
    blog
  }
})