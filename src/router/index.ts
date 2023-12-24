// import { createRouter,createWebHistory} from "vue-router";

// const Index = () => import("../views/Index.vue")
// const Home = () => import("../views/home/index.vue")
// const Shop = () => import("../views/shop/index.vue")

// const route = [
//   { path: "/", redirect: "/home" },
//   {
//     path: "/",
//     name: "",
//     component: Index,
//     children: [
//       {
//       path: '/home',
//       component: Home
//     }, 
//     {
//       path: '/shop',
//       components: Shop
//       // {
//       //   default: UserProfile,
//       //   helper: UserProfilePreview
//       // }
//     }]
//   },
//   // {
//   //   path: "/shop",
//   //   name: "shop",
//   //   component: shop
//   // }
// ]


// const router = createRouter({
//   history: createWebHistory(),
//   routes: route,
// })

import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/about',
      component: () => import('@/views/About.vue'),
    },
    {
      path: '/contact',
      component: () => import('@/views/Contact.vue'),
    },
  ],
})
