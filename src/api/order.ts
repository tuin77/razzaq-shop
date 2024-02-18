import request from "../utils/request";
// import { PageData } from "../types";
// import { UserInfo } from "../types";

/**
 * 创建订单
 * @param {object} params 用户 PC H5 - 交易订单创建 Request VO
 * @param {array} params.items 用户 PC H5 - 商品项
 * @param {number} params.addressId 收件地址编号
 * @param {string} params.receiverName 收件人名称
 * @param {string} params.receiverMobile 收件人手机
 * @param {string} params.remark 备注
 * @returns
 */
export function createOrder(params: any) {
  return request.post(`/app-api/trade/order/create`, params);
}
