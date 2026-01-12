import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    /*{
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },*/
      /*{
          path: '/hello',
          name: 'hello',
          component: () => import('../views/HelloWorldView.vue')
      },*/
    {
      path: '/admin',
      name: 'Main',
      component: () => import('../layouts/MainLayout.vue'),
      children: [
        {
          path: 'hello',
          name: 'hello',
          component: () => import('../views/HelloWorldView.vue')
        }
      ]
    },
    {
      name: 'Secondary',
      component: () => import('../layouts/SecondaryLayout.vue'),
      children: [
        {
          path: '/about',
          name: 'About',
          component: () => import('../views/AboutView.vue')
        }
      ]
    }
  ],
})

export default router
