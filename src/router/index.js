import { createRouter, createWebHistory } from 'vue-router'
import UserList from '../views/UserList.vue'
import AddUser from '../views/AddUser.vue'
import About from '../views/About.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'UserList',
      component: UserList,
      meta: {
        title: '用户列表'
      }
    },
    {
      path: '/add',
      name: 'AddUser',
      component: AddUser,
      meta: {
        title: '添加用户'
      }
    },
    {
      path: '/edit/:id',
      name: 'EditUser',
      component: AddUser,
      meta: {
        title: '编辑用户'
      }
    },
    {
      path: '/about',
      name: 'About',
      component: About,
      meta: {
        title: '关于系统'
      }
    }
  ]
})

// 路由前置守卫，设置页面标题
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title + ' - 用户管理系统'
  }
  next()
})

export default router