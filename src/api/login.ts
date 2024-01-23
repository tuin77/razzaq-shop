import request from "../utils/request";
// import { PageData } from "@/types";
// import { UserInfo } from "@/types";

/**
 * 使用账号 + 密码注册
 * @param {object} params 用户 PC H5 - 账号 + 密码登录
 * @param {string} params.mobile 账号
 * @param {string} params.password 密码
 * @returns
 */
export function register(data: any) {
  return request.post(`/app-api/member/auth/register`, data);
}
/**
 * 登出系统
 * @returns
 */
export function logout(params: any) {
  return request.post(`/app-api/member/auth/logout`, params);
}
/**
 * 使用账号 + 密码登录
 * @param {object} params 用户 PC H5 - 账号 + 密码登录
 * @param {string} params.mobile 账号
 * @param {string} params.password 密码
 * @returns
 */
export function login(params: any) {
  return request.post(`/app-api/member/auth/login`, params);
}
