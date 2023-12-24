import { createRouter, createWebHistory } from "vue-router";
import Index from "./views/Index.vue";
const Home = () => import("./views/home/Index.vue");
const Shop = () => import("./views/shop/Index.vue");
const Contact = () => import("./views/contact/Index.vue");


export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Index,
      children: [
        {
          path: "/",
          component: Home,
        },
        {
          path: "/shop",
          component: Shop,
        },
        {
          path: "/shop",
          component: Shop,
        },
        {
          path: "/contact",
          component: Contact,
        },
      ],
    },
  ],
});
