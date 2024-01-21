import request from "../utils/request";
/**
 * 添加商品收藏
 * @param {object} params 用户 PC H5 - 商品收藏的单个 Request VO
 * @param {number} params.spuId 商品 SPU 编号
 * @returns
 */
export function createFavorite(params: any) {
  return request.post(`/app-api/product/favorite/create`, params);
}

/**
 * 添加多个商品收藏
 * @param {object} params 用户 PC H5 - 商品收藏的批量 Request VO
 * @param {array} params.spuIds 商品 SPU 编号数组
 * @returns
 */
export function createFavoriteList(params: any) {
  return request.post(`/app-api/product/favorite/create-list`, params);
}
/**
 * 获得商品收藏数量
 * @returns
 */
export function getFavoriteCount(params: any) {
  return request.get(`/app-api/product/favorite/get-count`, params);
}
/**
 * 检查是否收藏过商品
 * @param {string} spuId 商品 SPU 编号
 * @returns
 */
export function isFavoriteExists(params: any) {
  return request.get(`/app-api/product/favorite/exits`, params);
}
/**
 * 取消单个商品收藏
 * @param {object} params 用户 PC H5 - 商品收藏的单个 Request VO
 * @param {number} params.spuId 商品 SPU 编号
 * @returns
 */
export function deleteFavorite(params: any) {
  return request.delete(`/app-api/product/favorite/delete`, params);
}
/**
 * 取消多个商品收藏
 * @param {object} params 用户 PC H5 - 商品收藏的批量 Request VO
 * @param {array} params.spuIds 商品 SPU 编号数组
 * @returns
 */
export function deleteFavoriteList(params: any) {
  return request.delete(`/app-api/product/favorite/delete-list`, params);
}
