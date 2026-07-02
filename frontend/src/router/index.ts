import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../presentation/views/TabsPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tabs/home'
  },
  {
    path: '/tabs/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/tabs/home'
      },
      {
        path: 'home',
        component: () => import('@/presentation/views/Tab1Page.vue')
      },
      {
        path: 'notification',
        component: () => import('@/presentation/views/Tab2Page.vue')
      },
      {
        path: 'more',
        component: () => import('@/presentation/views/Tab3Page.vue')
      },
      {
        path: 'room',
        component: () => import('@/presentation/views/Tab2Page.vue')
      },
      {
        path: 'profile',
        component: () => import('@/presentation/views/Tab1Page.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
