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

/**
 * 找出数组里是否含有某个属性值
 * @param arr
 * @param field
 * @param fieldValue
 * @returns number
 */
export function arrayIndexOf(arr: unknown[], field: string, fieldValue: unknown) {
  for (let i = 0; i < arr.length; i++) {
    const element: any = arr[i];
    if (element[field] === fieldValue) return i;
  }

  return -1;
}
/**
 * 对象深拷贝
 * @param tSource
 * @returns
 */
export function deepClone<T>(tSource: T, tTarget?: Record<string, any> | T): T {
  if (isArray(tSource)) {
    tTarget = tTarget || [];
  } else {
    tTarget = tTarget || {};
  }
  for (const key in tSource) {
    if (Object.prototype.hasOwnProperty.call(tSource, key)) {
      // eslint-disable-next-line valid-typeof
      if (typeof tSource[key] === "object" && typeof tSource[key] !== null) {
        tTarget[key] = isArray(tSource[key]) ? [] : ({} as any);
        deepClone(tSource[key], tTarget[key]);
      } else {
        tTarget[key] = tSource[key];
      }
    }
  }
  return tTarget as T;
}

/**
 * 判断对象是否为数组
 * @param obj
 * @returns
 */
export const isArray = (obj: any) => {
  return obj && typeof obj == "object" && obj instanceof Array;
};
