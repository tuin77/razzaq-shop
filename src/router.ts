import { createRouter, createWebHistory } from "vue-router";
import Index from "./views/Index.vue";
const Home = () => import("./views/home/Index.vue");
const Shop = () => import("./views/shop/Index.vue");
const Contact = () => import("./views/contact/Index.vue");
const Login = () => import("./views/Login.vue");


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
          path: "/login",
          component: Login,
        },
        {
          path: "/shop",
          component: Shop,
        },
        {
          path: "/product",
          component:import("./views/product/Index.vue") ,
        },
        {
          path: "/ProductCard",
          component:import("./views/product/ProductCard.vue") ,
        },
        {
          path: "/contact",
          component: Contact,
        },
        {
          path: "/test",
          component: import("./views/Test.vue"),
        },
      ],
    },
  ],
});
