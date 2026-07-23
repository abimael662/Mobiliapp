import { RouteRecordRaw } from "vue-router";

export const furnitureRoutes: RouteRecordRaw[] = [
  {
    path: "/furniture",
    component: () =>
      import("@/presentation/views/furniture/FurnituresPage.vue"),
  },
  {
    path: "/furniture/new",
    component: () =>
      import("@/presentation/views/furniture/FurnitureFormPage.vue"),
  },
  {
    path: "/furniture/:id",
    component: () =>
      import("@/presentation/views/furniture/FurnitureAboutPage.vue"),
  },
  {
    path: "/furniture/:id/edit",
    component: () =>
      import("@/presentation/views/furniture/FurnitureFormPage.vue"),
  },
];
