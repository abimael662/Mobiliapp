import { RouteRecordRaw } from 'vue-router';

export const profileRoutes: RouteRecordRaw[] = [
  {
    path: 'profile',
    component: () => import('@/presentation/views/profile/ProfilePage.vue'),
  },
  {
    path: 'profile/about',
    component: () => import('@/presentation/views/profile/AboutPage.vue'),
  },
  {
    path: 'profile/preferences',
    component: () => import('@/presentation/views/profile/PreferencesPage.vue'),
  },
  {
    path: 'profile/information',
    component: () => import('@/presentation/views/profile/ProfileFormPage.vue'),
  },
];