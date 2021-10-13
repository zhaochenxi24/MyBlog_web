import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '../views/HelloWorld'
import Login from '../views/user/Login'
import Register from '../views/user/Register'
import Home from '../views/user/Home'
import test from '../views/user/test'
import FindPwd from '../views/user/FindPwd'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
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
      path: '/user/test',
      name: 'test',
      component: test
    }
  ]
  // 去掉地址中的#号
  // mode: 'history'
})
