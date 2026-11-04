import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

// 新增路由时同步修改 scripts/spa-fallback.mjs 的 ROUTES
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // 切换页面时回到顶部，浏览器前进后退时恢复原位置
  scrollBehavior: (_to, _from, saved) => saved ?? { top: 0 },
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { titleKey: 'menu.home' }
    },
    {
      path: '/feature',
      name: 'feature',
      component: () => import('@/views/FeatureView.vue'),
      meta: { titleKey: 'menu.feature' }
    },
    {
      path: '/docs/:id?',
      name: 'docs',
      component: () => import('@/views/DocsView.vue'),
      meta: { titleKey: 'menu.docs' }
    },
    {
      path: '/download',
      name: 'download',
      component: () => import('@/views/DownloadView.vue'),
      meta: { titleKey: 'menu.download' }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/AboutView.vue'),
      meta: { titleKey: 'menu.about' }
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/'
    }
  ]
})

export default router
