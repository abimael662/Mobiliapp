import { RouteRecordRaw } from 'vue-router';

export const notificationRoutes: RouteRecordRaw[] = [
  {
    path: 'notification',
    component: () => import('@/presentation/views/notifications/NotificationPage.vue'),
  },
];