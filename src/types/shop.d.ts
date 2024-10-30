// export interface ShopGoods {
//   /*商品 SPU 编号 */
//   id: number;

//   /*商品名称 */
//   name: string;

//   /*商品简介 */
//   introduction: string;

//   /*分类编号 */
//   categoryId: number;

//   /*商品封面图 */
//   picUrl: string;

//   /*商品轮播图 */
//   sliderPicUrls: Record<string, unknown>[];

//   /*单位名 */
//   unitName: string;

//   /*规格类型 */
//   specType: boolean;

//   /*商品价格，单位使用：分 */
//   price: number;

//   /*市场价，单位使用：分 */
//   marketPrice: number;

//   /*库存 */
//   stock: number;

//   /*商品销量 */
//   salesCount: number;
// }

export interface SKU {
  /*商品 SKU 编号 */
  id: string;

  /* */
  // properties: {
  //   /*属性的编号 */
  //   propertyId: number;

  //   /*属性的名称 */
  //   propertyName: string;

  //   /*属性值的编号 */
  //   valueId: number;

  //   /*属性值的名称 */
  //   valueName: string;
  // }[];

  /*销售价格，单位：分 */
  price: string;

  oldPrice: string;

  skuCode: string;



  /*市场价，单位使用：分 */
  // marketPrice?: number;

  /*图片地址 */
  picture: string;

  /*库存 */
  inventory: number;

  /*商品重量 */
  weight?: number;

  // /*商品体积 */
  volume?: number;
  specs: { name: string; valueName: string }[];
}
interface PropertyValue {
  name: string;
  picture?: string | null;
  selected?: boolean;
  disabled?: boolean;
}
export interface PropertyVo {
  /*属性名称 */
  name: string;

  /*属性值集合 */
  spec_values: PropertyValue[];
}
export interface ShopGoods {
  /*商品 SPU 编号 */
  id: string;

  /*商品名称 */
  name: string;

  /*商品简介 */
  short_description: string;

  /*商品详情 */
  description: string;

  /*商品分类编号 */
  // categoryId: number;

  /*商品封面图 */
  // picUrl: string;

  /*商品轮播图 */
  mainPictures: string[];

  /*商品视频 */
  // videoUrl: string;

  /*单位名 */
  // unitName: string;

  /*规格类型 */
  // specType: boolean;

  /*商品价格，单位使用：分 */
  price: string;

  /*市场价，单位使用：分 */
  // marketPrice: number;

  /*库存 */
  // stock: number;

  /*商品销量 */
  salesCount: number;

  /*属性列表 */
  specs_list: PropertyVo[];

  /* */
  skus: SKU[];
}
