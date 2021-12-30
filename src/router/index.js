import { createRouter, createWebHistory } from "vue-router";
import LayoutDefault from "../layouts/Default.vue";
import LayoutAuth from "../layouts/Auth.vue";
import Home from "../views/Home.vue";
import Contact from "../views/Contact.vue";
import Login from "../views/Login.vue";

const routes = [
  {
    path: "/",
    component: LayoutDefault,
    children: [
      { path: "", name: "index", component: Home },
      { path: "/contato", name: "contact", component: Contact }
  
  ],
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
