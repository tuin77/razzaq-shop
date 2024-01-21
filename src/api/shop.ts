import request from "@/utils/request";
// import { PageData } from "../types";
// import { UserInfo } from "../types";

/**
 * 获得 banner 列表
 * @param {string} position Banner position 1首页 2首页二层 3商品列表页 4关于我们页
 * @returns
 */
export function getBannerList(params: any) {
  return request.get(`/app-api/promotion/banner/list`, params);
}
/**
 * 获得商品分类列表
 * @returns
 */
export function getProductCategoryList(params: any) {
  return request.get(`/app-api/product/category/list`, params);
}
/**
 * 获得商品 SPU 列表
 * @param {string} recommendType 推荐类型 recommendLeading主打 recommendEssential必备
 * @param {string} count 数量
 * @returns
 */
export function getSpuList(params: any) {
  return request.get(`/app-api/product/spu/list`, params);
}
/**
 * 获得商品 SPU 分页
 * @param {string} pageVO 用户 PC H5 - 商品 SPU 分页 Request VO
 * @returns
 */
export function getSpuPage(params: any) {
  return request.get(`/app-api/product/spu/page`, params);
}
/**
 * 获得商品 SPU 列表
 * @param {string} ids 编号列表
 * @returns
 */
export function getSpuList_1(params: any) {
  return request.get(`/app-api/product/spu/list-by-ids`, params);
}

/**
 * 获得商品 SPU 明细
 * @param {string} id 编号
 * @returns
 */
export function getSpuDetail(params: any) {
  return request.get(`/app-api/product/spu/get-detail`, params);
}

// export default userApi;
