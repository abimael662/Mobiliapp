import { RouteRecordRaw } from 'vue-router';

export const homeRoutes: RouteRecordRaw[] = [
  {
    path: 'home',
    component: () => import('@/presentation/views/home/HomePage.vue'),
  },
];