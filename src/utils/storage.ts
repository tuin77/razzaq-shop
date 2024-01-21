// 用户信息持久化存储
import type { UserInfo } from "@/types";

const PROFILE_KEY = "rabbit-shop-profile";
// 存储用户信息
export const saveStorageProfile = (profile: UserInfo) => {
  localStorage.setItem(PROFILE_KEY, JSON.stringify(profile));
};
// 获取用户信息
export const getStorageProfile = (): UserInfo => {
  return JSON.parse(localStorage.getItem(PROFILE_KEY) || "{}") as UserInfo;
};
// 清空用户信息
export const clearStorageProfile = () => {
  localStorage.removeItem(PROFILE_KEY);
};
