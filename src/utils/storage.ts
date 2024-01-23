// 用户信息持久化存储
import type { UserInfo, AccessInfo } from "@/types";

const PROFILE_KEY = "rabbit-shop-profile";
const ACCESSINFO_KEY = "rabbit-shop-profile";
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
// 存储用户信息
export const saveStorageAccessInfo = (accessInfo: AccessInfo) => {
  localStorage.setItem(ACCESSINFO_KEY, JSON.stringify(accessInfo));
};
// 获取用户信息
export const getStorageAccessInfo = (): AccessInfo => {
  return JSON.parse(localStorage.getItem(ACCESSINFO_KEY) || "{}") as AccessInfo;
};
// 清空用户信息
// export const clearStorageProfile = () => {
//   localStorage.removeItem(PROFILE_KEY);
// };
