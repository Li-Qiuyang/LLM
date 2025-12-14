import { createRouter, createWebHistory } from "vue-router";

let router = createRouter({
  history: createWebHistory(),

  routes: [
    {
      path: "/",
      component: () => import("@/views/Home.vue"),
      name: "Home",
    },
    {
      path: "/chat",
      component: () => import("@/views/Chat.vue"),
      name: "Chat",
    },
  ],
  scrollBehavior() {
    return {
      top: 0,
      left: 0,
    };
  },
});

export default router;
