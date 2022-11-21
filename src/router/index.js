import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/error',
    name: 'error',
    component: () => import('../views/Error.vue')
  },
  {
    path: '/about',
    name: 'about',   
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/forms',
    name: 'Forms',   
    component: () => import('../views/Forms.vue')
  },
  {
    path: '/courses',
    name: 'Courses',   
    component: () => import('../views/Courses.vue')
  },
  {
    path: '/forms/users',
    name: 'FormUsers',   
    component: () => import('../views/FormUsers.vue')
  },
  {
    path: '/forms/courses',
    name: 'FormCourses',   
    component: () => import('../views/FormCourses.vue')
  },
  {
    path: '/team',
    name: 'Team',   
    component: () => import('../views/Team.vue')
  },
  {
    path: '/login',
    name: 'Login',   
    component: () => import('../views/Login.vue')
  },
  {
    path: '/facebook',
    name: 'Facebook',   
    component: () => import('../views/Facebook.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
