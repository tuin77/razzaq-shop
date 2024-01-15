interface PriceRange {
  min_amount: string;
  max_amount: string;
}

interface SpecValue {
  name: string;
  picture: string | null;
  desc: string;
}

interface Spec {
  name: string;
  id: string;
  spec_values: SpecValue[];
}

interface SKU {
  id: string;
  skuCode: string;
  price: string;
  oldPrice: string;
  inventory: number;
  picture: string;
  specs: { name: string; valueName: string }[];
}

interface ProductProperty {
  name: string;
  value: string;
}

interface SimilarProduct {
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
  price_range: PriceRange;
  discount: number;
  inventory: number;
  salesCount: number;
  commentCount: number;
  collectCount: number;
  mainVideos: string[];
  videoScale: number;
  mainPictures: string[];
  specs_list: Spec[];
  skus: SKU[];
  details: {
    pictures: string[];
    properties: ProductProperty[];
  };
  isPreSale: boolean;
  isCollect: boolean;
  recommends: SimilarProduct[] | null;
  // userAddresses: any[] | null; // 这里可以根据具体地址对象的结构进一步定义类型
  similarProducts: SimilarProduct[];
  hotByDay: SimilarProduct[];
  // evaluationInfo: any | null; // 根据具体评估信息的结构定义类型
  description: string;
}
