import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import FeatureView from '@/views/FeatureView.vue'
import AboutView from '@/views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/feature',
      name: 'feature',
      component: () => FeatureView
    },
    {
      path: '/about',
      name: 'about',
      component: () => AboutView
    }
  ]
})

export default router
