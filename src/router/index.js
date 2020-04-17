import Vue from 'vue'
import Router from 'vue-router'
import UserLayout from '../components/layout/UserLayout.vue'
import Login from '../views/user/login.vue'
import Register from '../views/user/register.vue'
import Home from '../views/Home/HomeLayout.vue'
import Test from '../components/Test.vue'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'index',
    component: Home,
    meta: { title: '首页' },
    redirect: '/home',
    children: [
      {
        path: 'home',
        name: 'TestHome',
        component: Test
      }
    ]
  },
  {
    path: '/user',
    name: 'user',
    component: UserLayout,
    redirect: '/user/login',
    hidden: true,
    children: [
      {
        path: '/login',
        name: 'login',
        component: Login,
        meta: { title: '登录' }
      },
      {
        path: '/register',
        name: 'register',
        component: Register,
        meta: { title: '注册' }
      }
    ]
  }
]


export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes
})