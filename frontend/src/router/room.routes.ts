import { RouteRecordRaw } from 'vue-router';

export const roomRoutes: RouteRecordRaw[] = [
  {
    path: 'rooms',
    component: () => import('@/presentation/views/rooms/RoomPage.vue'),
  },
  {
    path: 'rooms/new',
    component: () => import('@/presentation/views/rooms/RoomFormPage.vue'),
  },
  {
    path: 'rooms/:id',
    component: () => import('@/presentation/views/rooms/RoomAboutPage.vue'),
  },
  {
    path: 'rooms/:id/edit',
    component: () => import('@/presentation/views/rooms/RoomFormPage.vue'),
  },
];