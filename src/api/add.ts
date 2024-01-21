import request from "../utils/request";
// import { PageData } from "../types";
// import { UserInfo } from "../types";

/**
 * 更新购物车商品选中
 * @param {object} params 用户 PC H5 - 购物车更新是否选中 Request VO
 * @param {array} params.ids 编号列表
 * @param {boolean} params.selected 是否选中
 * @returns
 */
export function updateCartSelected(params: any) {
  return request.put(`/app-api/trade/cart/update-selected`, params);
}
/**
 * 更新购物车商品数量
 * @param {object} params 用户 PC H5 - 购物车更新数量 Request VO
 * @param {number} params.id 编号
 * @param {number} params.count 商品数量
 * @returns
 */
export function updateCartCount(params: any) {
  return request.put(`/app-api/trade/cart/update-count`, params);
}
/**
 * 重置购物车商品
 * @param {object} params 用户 PC H5 - 购物车重置 Request VO
 * @param {number} params.id 编号
 * @param {number} params.skuId 商品 SKU 编号
 * @param {number} params.count 商品数量
 * @returns
 */
export function resetCart(params: any) {
  return request.put(`/app-api/trade/cart/reset`, params);
}
/**
 * 添加购物车商品
 * @param {object} params 用户 PC H5 - 购物车添加购物项 Request VO
 * @param {number} params.skuId 商品 SKU 编号
 * @param {number} params.count 新增商品数量
 * @returns
 */
export function addCart(params: any) {
  return request.post(`/app-api/trade/cart/add`, params);
}
/**
 * 查询用户的购物车列表
 * @returns
 */
export function getCartList(params: any) {
  return request.get(`/app-api/trade/cart/list`, params);
}
/**
 * 查询用户在购物车中的商品数量
 * @returns
 */
export function getCartCount(params: any) {
  return request.get(`/app-api/trade/cart/get-count`, params);
}
/**
 * 删除购物车商品
 * @param {string} ids 购物车商品编号
 * @returns
 */
export function deleteCart(params: any) {
  return request.delete(`/app-api/trade/cart/delete`, params);
}
