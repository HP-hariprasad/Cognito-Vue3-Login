import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Example",
    component: () => import("../modules/example/pages/ExampleView.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../modules/example/pages/AboutView.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/components/LoginView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
