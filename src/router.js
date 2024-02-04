import { createRouter, createWebHistory } from "vue-router";
import Home from "./components/Home.vue";
import Inner from "./components/Inner.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/home" },
    { path: "/home", component: Home },
    { path: "/inner", component: Inner },
  ],
});

export default router;
