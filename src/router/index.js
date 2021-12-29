import { createRouter, createWebHistory } from "vue-router";
import LayoutTheme from "../layouts/Theme.vue";
import LayoutAuth from "../layouts/Auth.vue";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";

const routes = [
  {
    path: "/",
    component: LayoutTheme,

    children: [{ path: "", name: "index", component: Home }],
  },

  {
    path: "/admin",
    component: LayoutAuth,

    children: [{ path: "login", name: "login", component: Login }],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
