import { RouteRecordRaw } from 'vue-router';

export const chatRoutes: RouteRecordRaw[] = [
  {
    path: 'chat',
    component: () => import('@/presentation/views/chat/ChatPage.vue'),
  },
  {
    path: 'chat/new',
    component: () => import('@/presentation/views/chat/ChatConversationPage.vue'),
  },
  {
    path: 'chat/:id',
    component: () => import('@/presentation/views/chat/ChatConversationPage.vue'),
  },
  {
    path: 'chat/:id/edit',
    component: () => import('@/presentation/views/chat/ChatConversationPage.vue'),
  },
];