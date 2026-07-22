import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../presentation/views/TabsPage.vue';

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
        component: () => import('@/presentation/views/home/HomePage.vue')
      },
      {
        path: 'notification',
        component: () => import('@/presentation/views/notifications/NotificationPage.vue')
      },
      {
        path: 'chat',
        component: () => import('@/presentation/views/chat/ChatPage.vue')
      },
      {
        path: 'room',
        component: () => import('@/presentation/views/rooms/RoomPage.vue')
      },
      {
        path: 'profile',
        component: () => import('@/presentation/views/profile/ProfilePage.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
