// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import Demo from '@/components/Demo'
// import Layout from './components/Layout'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// V - Distpicker 是一个简单易用的地区选择器
import VDistpicker from 'v-distpicker'

// 全局注册axios
var axios = require('axios')
// 全局注册，之后可在其他组件中通过 this.$axios 发送数据
Vue.prototype.$axios = axios
// 设置反向代理,前端请求默认发送到 http://localhost:8888
// 本地服务器
axios.defaults.baseURL = 'http://localhost:81'
// 服务器地址
// axios.defaults.baseURL = 'http://tongtong.website:81/myblog'

// 地区选择器
Vue.component('v-distpicker', VDistpicker)

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
