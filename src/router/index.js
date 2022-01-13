import { createRouter, createWebHistory } from "vue-router";
import LayoutDefault from "../layouts/Default.vue";
import LayoutAuth from "../layouts/Auth.vue";
import LayoutAdmin from "../layouts/Admin.vue";
import Home from "../views/web/Home.vue";
import Contact from "../views/web/Contact.vue";
import Rent from "../views/web/Rent.vue";
import Sale from "../views/web/Sale.vue";
import Propertie from "../views/web/Propertie.vue";
import Dash from "../views/admin/Dashboard.vue";


import Login from "../views/admin/Login.vue";



const routes = [
  {
    // Rotas Web
    path: "/",
    component: LayoutDefault,
    children: [
      { path: "", name: "index", component: Home },
      { path: "/imovel/:name", name: "propertie", component: Propertie },
      { path: "/alugar", name: "rent", component: Rent },
      { path: "/comprar", name: "sale", component: Sale },
      { path: "/contato", name: "contact", component: Contact },

  
  ],
   },

  //  Rotas Admin
  {
    path: "/admin/login",
    component: LayoutAuth,
    children: [{ path: "", name: "login", component: Login }],
  },

  {
    path:"/admin",
    component: LayoutAdmin,
    children:[
      { path: "", name: "dash", component: Dash},
    ]
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
