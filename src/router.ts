import { createRouter, createWebHistory } from "vue-router";
import Index from "./views/Index.vue";
const Home = () => import("./views/home/Index.vue");
const Shop = () => import("./views/shop/Index.vue");
const Contact = () => import("./views/contact/Index.vue");
const Order = () => import("./views/order/index.vue");
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
          name: "home",
          component: Home,
        },
        {
          path: "/login",
          name: "login",
          component: Login,
        },
        {
          path: "/signup",
          name: "signup",
          component: () => import("./views/SignUp.vue"),
        },
        {
          path: "/shop",
          name: "shop",
          component: Shop,
        },
        {
          path: "/product/:id",
          name: "product",
          component: () => import("./views/product/Index.vue"),
        },
        {
          path: "/cart",
          component: () => import("./views/cart/Index.vue"),
        },
        {
          path: "/wish",
          component: () => import("./views/wish/Index.vue"),
        },
        {
          path: "/ProductCard",
          component: () => import("./views/product/ProductCard.vue"),
        },
        {
          path: "/contact",
          name: "contact",
          component: Contact,
        },
        {
          path: "/order",
          name: "order",
          component: Order,
        },
        {
          path: "/test",
          component: () => import("./views/Test.vue"),
        },
      ],
    },
  ],
  scrollBehavior: () => ({ left: 0, top: 0 }),
});

// https://juejin.cn/post/6931318429420879879
