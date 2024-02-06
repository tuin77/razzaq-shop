import { login } from "@/api";
import { defineStore } from "pinia";
import type { AccessInfo } from "@/types";
// import { message } from "@/components/XtxUI";
// 📌在非 .vue 组件文件中，可通过导入 router 直接获取路由实例
import router from "@/router";
import {
  clearStorageProfile,
  getStorageProfile,
  // saveStorageProfile
} from "@/utils/storage";
import { saveStorageAccessInfo, getStorageAccessInfo } from "@/utils/storage";
import useStore from "..";

const useMemberStore = defineStore({
  id: "member",
  // 🚨使用插件遇到小问题，自己手写本地存储
  // persist: true,
  // 状态
  state: () => ({
    // 用户资料
    profile: getStorageProfile(),
    accessInfo: getStorageAccessInfo(),
  }),
  // 计算
  getters: {
    // getters 封装用户是否登录，语义更强
    isLogin(): boolean {
      return Boolean(this.accessInfo.accessToken);
    },
  },
  // 方法
  actions: {
    // 登录成功后的复用逻辑封装
    loginSuccess() {
      // 存储到本地
      // saveStorageProfile(this.profile);
      // 📌主动合并本地购物车
      const { cart } = useStore();
      cart.mergeLocalCart();
      // 登录成功提示
      // message({ type: "success", text: "登录成功" });
      // console.log(router);
      // 🐛 在非 .vue 组件中 useRoute() 返回 undefined，没法使用
      // const route = useRoute()
      // 📌 解决方案，通过 router 路由实例 currentRoute 获取
      const route = router.currentRoute.value;
      // console.log(route.path);
      if (route.query.target) {
        // 跳转到指定地址
        router.push(decodeURIComponent(route.query.target as string));
      } else {
        // 跳转到首页
        router.push("/");
      }
    },
    setAccessInfo(accessInfo: AccessInfo) {
      this.accessInfo = accessInfo;
      saveStorageAccessInfo(accessInfo);
    },
    // 用户名密码登录
    async login(data: any) {
      console.log(data);
      // 发送请求
      const res = await login(data);
      // 存储到 Pinia 中
      this.accessInfo = res.data;
      saveStorageAccessInfo(res.data);
      // 调用登录成功后的逻辑
      this.loginSuccess();
    },
    // 退出登录
    async logout() {
      // 清空 Pinia 用户信息
      // this.profile = {} as Profile;
      // 清空 本地 用户信息
      clearStorageProfile();
      // 跳转到登录页
      router.push("/login");
      // 退出登录-主动清空购物车数据
      const { cart } = useStore();
      cart.clearCart();
    },
  },
});

export default useMemberStore;
