import Vue from 'vue'
import Router from 'vue-router'
// testPage
import test from '../views/test'
// user
import Login from '../views/user/Login'
import Register from '../views/user/Register'
import Home from '../views/user/Home'
import FindPwd from '../views/user/FindPwd'
// manager
import Index from '../views/manager/Index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/user/Home'
    },
    {
      path: '/user/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/user/Register',
      name: 'Register',
      component: Register
    },
    {
      path: '/user/FindPwd',
      name: 'FindPwd',
      component: FindPwd
    },
    {
      path: '/user/Home',
      name: 'Home',
      component: Home
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
