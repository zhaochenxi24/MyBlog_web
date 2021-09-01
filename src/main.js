// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import Layout from './components/Layout'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 全局注册axios
var axios = require('axios')
// 全局注册，之后可在其他组件中通过 this.$axios 发送数据
Vue.prototype.$axios = axios
// 设置反向代理,前端请求默认发送到 http://localhost:8888
axios.defaults.baseURL = 'http://localhost:81/user'

// 关闭生产提示
Vue.config.productionTip = false

// 引入element-UI
Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
