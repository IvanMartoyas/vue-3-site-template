import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Blog from '../views/Blog.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {layout: 'Main'},
  },
  {
    path: '/blog',
    name: 'blog',
    component: Blog,
    meta: {layout: 'Main-Sitbar'},
  },
  {
    path: '/about',
    name: 'about',
    meta: {layout: 'Main-Sitbar'},
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
