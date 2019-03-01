import Vue from 'vue'
import Router from 'vue-router'
import User from './views/User.vue'
import Document from '@/views/Document.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/user',
      name: 'Quản lý tài khoản',
      component: User
    },
    {
      path: '/document',
      name: 'Quản lý văn bản',
      component: Document
    }
  ]
})
