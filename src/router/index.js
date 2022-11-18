import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/liste',
      name: 'liste',
      component: () => import('../views/ListeView.vue')
    },
    {
      path: '/liste/:amiiboId',
      name: 'amiiboDetails',
      component: () => import('../views/AmiiboDetailsView.vue')
    }
  ]
})

export default router
