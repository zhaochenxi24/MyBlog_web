import Vue from 'vue'
import Router from 'vue-router'
// testPage
import test from '../views/test'
// user
import Login from '../views/user/beforeLogin/Login'
import Register from '../views/user/beforeLogin/Register'
import Home from '../views/user/Home'
import FindPwd from '../views/user//beforeLogin/FindPwd'
// user/攻略页面
import Switch from '../views/user/walkThrough/switch/Switch'
// manager
import Index from '../views/manager/Index'
// import { path } from 'chromedriver'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/Home'
    },

    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/findPwd',
      name: 'findPwd',
      component: FindPwd
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    }, {
      path: '/switch/index',
      name: 'Switch',
      component: Switch
    }, {
      path: '/test',
      name: 'test',
      component: test
    },
    {
      path: '/manager/Index',
      name: 'Index',
      component: Index
    }
  ]
  // 去掉地址中的#号
  // mode: 'history'
})
