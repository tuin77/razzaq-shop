export interface ShopGoods {
  /*商品 SPU 编号 */
  id: number;

  /*商品名称 */
  name: string;

  /*商品简介 */
  introduction: string;

  /*分类编号 */
  categoryId: number;

  /*商品封面图 */
  picUrl: string;

  /*商品轮播图 */
  sliderPicUrls: Record<string, unknown>[];

  /*单位名 */
  unitName: string;

  /*规格类型 */
  specType: boolean;

  /*商品价格，单位使用：分 */
  price: number;

  /*市场价，单位使用：分 */
  marketPrice: number;

  /*库存 */
  stock: number;

  /*商品销量 */
  salesCount: number;
}
