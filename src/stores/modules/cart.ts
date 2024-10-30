// import { message } from "@/components/XtxUI";
import type { CartItem, CartList } from "@/types";
// import { http } from "@/utils/request";
import { addCart, getCartList, deleteCart, updateCartCount } from "@/api";
import { defineStore } from "pinia";
import Message from "@/components/message";
import useStore from "..";

const useCartStore = defineStore("cart", {
  // 🔔购物车开启持久化
  persist: {
    key: "rabbit-shop-cart",
  },
  // 状态
  state: () => ({
    // 购物车列表
    list: [] as CartList,
  }),
  // 计算
  getters: {
    // 登录状态
    isLogin(): boolean {
      // 获取 member 模块
      const { member } = useStore();
      // 基于 member 模块的 isLogin 获取登录状态
      return member.isLogin;
    },
    // 计算有效商品列表 isEffective = true  filter
    effectiveList(): CartList {
      console.log("effectiveList", JSON.parse(JSON.stringify(this.list)));

      return this.list?.filter((v) => v.stock > 0 && v.isEffective);
    },
    // 有效商品总数量 把 effctiveList 中的每一项的 count 叠加起来
    effectiveListCounts(): number {
      // 传统遍历写法
      // let sum = 0;
      // this.effectiveList.forEach((item) => {
      //   sum += item.count;
      // });
      // return sum;
      // ✨进阶 reduce 写法
      const list = this.list?.filter((v) => v.stock > 0 && v.isEffective);
      // console.log("list", list);

      return list.reduce((sum, item) => sum + item.count, 0);
    },
    // 总钱数  = 所有单项的钱数累加  单项的钱数 = 数量 * 单价
    effectiveListPrice(): string {
      return (
        this.effectiveList
          // 叠加 单价 * 数量
          .reduce((sum, item) => sum + item.count * Number(item.price), 0)
          // 转换成字符串并保留两位小数
          .toFixed(2)
      );
    },
    // 计算全选状态
    isAllSelected(): boolean {
      return this.effectiveList.length !== 0 && this.effectiveList.every((item) => item.selected);
    },
    // 计算选中商品列表
    selectedList(): CartList {
      return this.effectiveList.filter((item) => item.selected);
    },
    // 计算选中商品总件数
    selectedListCounts(): number {
      return this.selectedList.reduce((sum, item) => sum + item.count, 0);
    },
    // 计算选中商品总钱数
    selectedListPrice(): string {
      return this.selectedList.reduce((sum, item) => sum + item.count * Number(item.price), 0).toFixed(2);
    },
  },
  // 方法
  actions: {
    // 加入购物车
    async addCart(cartItem: CartItem) {
      if (this.isLogin) {
        const { skuId, count } = cartItem;
        const res = await addCart({ skuId, count });
        // console.log("POST", "/member/cart", res.data.result);
        if (res.code === 0) {
          Message.text({ type: "success", text: "添加成功~" });
          this.getCartList();
        } else {
          console.log(res);
        }
        // 🐛获取最新购物车列表
      } else {
        // console.log("未登录-本地操作", data);
        // 添加商品分两种情况：
        const { skuId, count } = cartItem;
        const goodsItem = this.list.find((item) => item.skuId === skuId);
        if (!goodsItem) {
          // 情况1：新添加的商品，前添加到数组中
          this.list.unshift(cartItem);
        } else {
          // 情况2：已添加过的的商品，累加数量即可
          goodsItem.count += count;
        }
      }
    },
    // 获取购物车列表
    async getCartList() {
      if (!this.isLogin) return;
      const res = await getCartList({});
      if (!res.data) return;
      const { invalidList, validList } = res.data;
      this.list = [
        ...validList.map((i: any) => ({
          ...i.spu,
          ...i.sku,
          picture: i.spu.picUrl || i.sku.picUrl,
          count: i.count,
          cartId: i.id,
          spuId: i.spu.id,
          isEffective: true,
          attrsText: i.sku.properties.reduce((p: any, n: any) => `${p} ${n.propertyName}：${n.valueName}`, "").trim(),
        })),
        ...invalidList,
      ];
    },
    // 删除/清空购物车商品
    async deleteCart(item: any) {
      if (!this.isLogin) return;

      const params = { ids: item.cartId };
      const { code } = await deleteCart(params);
      // console.log("DELETE", "/member/cart", res.data);
      if (code === 0) {
        Message.success("删除成功~");
        // 获取购物车列表
        this.getCartList();
      } else {
        Message.warn("删除失败~");
      }
      // } else {
      //   // console.log("未登录-本地操作", skuIds);
      //   this.list = this.list.filter((product) => product.skuId != item.skuId);
      // }
    },
    // 修改购物车商品-修改选中-修改数量
    async updateCart(item: any) {
      // if (this.isLogin) {
      const { cartId, count } = item;
      const params = { id: cartId, count };
      const { code } = await updateCartCount(params);
      if (code === 0) {
        // this.getCartList();
      } else {
        Message.warning("更新失败");
        this.getCartList();
      }
      // console.log("PUT", `/member/cart/${skuId}`, res.data.result);
      // 获取购物车列表

      // } else {
      //   // console.log("未登录-本地操作");
      //   const { selected, count } = data;
      //   // 根据 skuId 查找要进行修改的商品
      //   const cartItem = this.list.find((item) => item.skuId === skuId);
      //   if (cartItem) {
      //     // 如果有 count 才更新 count
      //     if (count !== undefined) cartItem.count = count;
      //     // 🐛 注意 false 也是假值，判断的时候要小心
      //     if (selected !== undefined) cartItem.selected = selected;
      //   }
      // }
    },
    // 购物车全选/取消全选
    async updateCartAllSelected(data: { selected: boolean; ids: string[] }) {
      if (this.isLogin) {
        // const res = await http("PUT", "/member/cart/selected", data);
        // console.log("PUT", "/member/cart/selected", res.data.result);
        // 获取购物车列表
        this.getCartList();
      } else {
        // console.log("未登录-本地操作");
        const { selected } = data;
        this.list.forEach((item) => {
          item.selected = selected;
        });
      }
    },
    // 清空购物车
    clearCart() {
      this.list = [];
    },
    // 合并本地购物车
    async mergeLocalCart() {
      // 准备后端所需的参数格式
      const data = this.list.map(({ skuId, selected, count }) => ({
        skuId,
        selected,
        count,
      }));
      console.log(data);

      // 合并本地购物车到服务器
      // const res = await http("POST", "/member/cart/merge", data);
      // console.log("POST", "/member/cart/merge", res.data.result);
      // 主动更新购物车列表
      this.getCartList();
    },
  },
});

export default useCartStore;
