import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path : '/login',
    component : () => import ('@/views/Login.vue')
  },
  {
    path : '/index',
    component : () => import ('@/views/Index.vue')
  },
  {
    path: '/',
    redirect : '/index'
  },
]

const router = new VueRouter({
  routes
})

export default router
