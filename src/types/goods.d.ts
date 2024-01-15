export interface Price_range {
  min_amount: string;
  max_amount: string;
}

export interface Value {
  name: string;
  picture: string;
  desc: string;
}

export interface Spec {
  name: string;
  id: string;
  values: Value[];
}

export interface SkuSpec {
  name: string;
  valueName: string;
}

export interface Sku {
  id: string;
  skuCode: string;
  price: string;
  oldPrice: string;
  inventory: number;
  picture: string;
  specs: SkuSpec[];
}

export interface Property {
  name: string;
  value: string;
}

export interface Detail {
  pictures: string[];
  properties: Property[];
}

export interface SimilarProduct {
  id: string;
  name: string;
  desc: string;
  price: string;
  picture: string;
  orderNum: number;
}

export interface HotByDay {
  id: string;
  name: string;
  desc: string;
  price: string;
  picture: string;
  orderNum: number;
}

export interface GoodsDetail {
  id: string;
  name: string;
  slug: string;
  spuCode: string;
  short_description: string;
  currency_symbol: string;
  price_range: Price_range;
  discount: number;
  inventory: number;
  salesCount: number;
  commentCount: number;
  collectCount: number;
  // mainVideos: any[];
  videoScale: number;
  mainPictures: string[];
  specs: Spec[];
  skus: Sku[];
  details: Detail;
  isPreSale: boolean;
  isCollect: boolean;
  // recommends?: any;
  // userAddresses?: any;
  similarProducts: SimilarProduct[];
  hotByDay: HotByDay[];
  // evaluationInfo?: any;
  description: string;
}
