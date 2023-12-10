import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",

    name: "home",
    component: Home,
  },
  {
    path: "/admin",
    name: "admin",
    component: () => import("../views/Admin.vue"),
  },
  {
    path: "/cart",
    name: "cart",
    component: () => import("../views/Cart.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
