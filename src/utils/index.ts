// 封装的通用方法

/**
 * 隐藏手机号码部分信息
 * @param phone 手机号码
 */
export const hidePhone = (phone: string) => {
  // 正则写法
  // return phone.replace(/^(\d{3})(\d{4})(\d{4}$)/,'$1****$3')
  // 字符串截取写法
  return phone.slice(0, 3) + "****" + phone.slice(-4);
};
// export const hidePhone = (phone: string) => {
//   // 正则写法
//   // return phone.replace(/^(\d{3})(\d{4})(\d{4}$)/,'$1****$3')
//   // 字符串截取写法
//   return phone.slice(0, 3) + "****" + phone.slice(-4);
// };
export const getPriceRange = (min_amount: string, max_amount: string) => {
  if (min_amount != max_amount) return `$${min_amount} – $${max_amount}`;
  else return `$${min_amount}`;
};
