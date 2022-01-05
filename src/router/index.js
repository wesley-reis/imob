import { createRouter, createWebHistory } from "vue-router";
import LayoutDefault from "../layouts/Default.vue";
import LayoutAuth from "../layouts/Auth.vue";
import Home from "../views/web/Home.vue";
import Contact from "../views/web/Contact.vue";
import Rent from "../views/web/Rent.vue";
import Sale from "../views/web/Sale.vue";
import Propertie from "../views/web/Propertie.vue";


import Login from "../views/admin/Login.vue";



const routes = [
  {
    path: "/",
    component: LayoutDefault,
    children: [
      { path: "", name: "index", component: Home },
      { path: "/{propertie}", name: "propertie", component: Propertie },
      { path: "/alugar", name: "rent", component: Rent },
      { path: "/comprar", name: "sale", component: Sale },
      { path: "/contato", name: "contact", component: Contact },

  
  ],
   },

  {
    path: "/admin",
    component: LayoutAuth,

    children: [{ path: "", name: "login", component: Login }],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
