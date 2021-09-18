import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '../views/HelloWorld'
import Login from '../views/user/Login'
import Home from '../views/user/Home'

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
      path: '/user/Home',
      name: 'Home',
      component: Home
    }
  ],
  // 去掉地址中的#号
  mode: 'history'
})
