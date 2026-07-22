import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import { roomRoutes } from './room.routes';
import TabsPage from '../presentation/views/TabsPage.vue';
import { homeRoutes } from './home.routes';
import { notificationRoutes } from './notification.routes';
import { chatRoutes } from './chat.routes';
import { furnitureRoutes } from './furniture.routes';
import { profileRoutes } from './profile.routes';

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
      ...homeRoutes,
      ...notificationRoutes,
      ...chatRoutes,
      ...furnitureRoutes,
      ...roomRoutes,
      ...profileRoutes,
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
