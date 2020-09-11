// 页面入口 JS 文件 

import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store/index.js'//如果后面没有写东西默认为，该目录下的 index.js

Vue.use(ElementUI)
Vue.config.productionTip = false

/* 这是Vue基础实例，组件在这里注册，Vuex 也要在这里进行注入*/
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
