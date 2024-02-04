<template>
  <div>
    <section aria-labelledby="information-heading " class="sm:pr-12">
      <h2 class="text-[2rem] text-bold-100">{{ goods?.name }}</h2>
      <p v-if="goods.price" class="text-[2rem] font-bold-100 font-bold mt-4">
        <!-- {{ getPriceRange(goods.price, goods.price_range.max_amount) }} -->
        ${{ goods.price }}
      </p>
      <p class="text-lg text-gray-500 mt-7">{{ goods?.introduction }}</p>
    </section>

    <section aria-labelledby="options-heading" class="mt-8">
      <template v-for="item in goods?.propertyVos" :key="item.propertyName">
        <div class="mt-7">
          <h4 class="text-lg text-blod-100">{{ item.propertyName }}：</h4>
          <fieldset class="mt-5">
            <span v-if="item.propertyName === 'Color'" class="flex items-center space-x-3">
              <button
                v-for="(spec_value, index) in item.valueNames"
                :key="`${index}-thumbnail`"
                type="button"
                :aria-current="spec_value.selected"
                :class="`w-[100px] h-[100px] mr-3 last:mr-0  relative shrink-0 border  rounded-[1.25rem]  snap-start cursor-pointer focus-visible:outline focus-visible:outline-offset transition-colors flex-grow md:flex-grow-0  ${
                  spec_value.selected ? 'border-primary-700' : 'border-transparent'
                }`"
                @click="clickSpecs(item, spec_value)"
              >
                <!-- :ref="(el) => assignRef(el, index)" -->
                <!-- @mouseover="clickSpecs(item, spec_value)"
                @focus="clickSpecs(item, spec_value)" -->
                <img class="rounded-[1.25rem]" width="150" height="150" :src="spec_value.picture || ''" />
              </button>
            </span>
            <div v-else class="grid grid-cols-2 gap-2 gap-x-[30px] gap-7-[15px] pr-[80px]">
              <label
                v-for="(spec_value, index) in item.valueNames"
                :key="`${index}-thumbnail`"
                :class="[
                  'relative flex items-center justify-center px-4 py-3 text-sm  border-gray-100 text-blod-100 uppercase bg-white border rounded-[100px] shadow-sm cursor-pointer group hover:border-primary-700 focus:outline-none sm:flex-1',
                  spec_value.selected ? 'border-primary-700 ' : '',
                  spec_value.disabled ? '!cursor-not-allowed !border-gray-200' : '',
                ]"
              >
                <input name="size-choice" :value="spec_value.name" class="sr-only" @click="clickSpecs(item, spec_value)" />
                <span>{{ spec_value.name }}</span>
                <span v-show="spec_value.disabled" class="absolute mx-4 pointer-events-none -inset-px">
                  <svg
                    class="absolute inset-0 w-full h-full text-gray-200 stroke-2"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                    stroke="currentColor"
                  >
                    <line x1="0" y1="100" x2="100" y2="0" vector-effect="non-scaling-stroke" />
                  </svg>
                </span>
              </label>
            </div>
          </fieldset>
        </div>
      </template>

      <!-- Sizes -->
      <!-- Quantity -->
      <div class="mt-7">
        <div class="flex items-center justify-between">
          <h4 class="text-sm font-medium text-gray-900">Quantity：</h4>
        </div>

        <fieldset class="mt-5">
          <div class="grid gap-4">
            <div class="flex">
              <input
                :id="inputId"
                v-model="count"
                type="number"
                class="flex-1 w-12 px-6 mr-2.5 text-lg py-4 text-gray-900 bg-transparent border rounded-100 appearance-none disabled:placeholder-disabled-900 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-inner-spin-button]:display-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-outer-spin-button]:display-none [&::-webkit-outer-spin-button]:m-0 [-moz-appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none"
                :min="min"
                :max="max"
                @input="handleOnChange"
              />
              <SfButton
                square
                size="lg"
                class="!rounded-full mr-2.5"
                :disabled="count <= min"
                :aria-controls="inputId"
                aria-label="Decrease value"
                @click="dec()"
              >
                <SfIconRemove />
              </SfButton>
              <SfButton
                square
                size="lg"
                class="!rounded-full"
                :disabled="count >= max"
                :aria-controls="inputId"
                aria-label="Increase value"
                @click="inc()"
              >
                <SfIconAdd />
              </SfButton>
            </div>
          </div>
        </fieldset>
      </div>
      <button
        type="submit"
        class="flex items-center justify-center w-full py-[18px] text-lg text-white bg-primary-700 border border-transparent rounded-[100px] mt-7 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        Buy it now
      </button>

      <button
        type="submit"
        class="flex items-center justify-center w-full py-3 text-base text-white bg-black border border-transparent rounded-[100px] mt-7 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        @click="addCart"
      >
        Add to bag
      </button>
      <div class="flex mt-10">
        <SfButton variant="tertiary" size="sm" square class="mr-6 !p-0 !text-bold-100 !bg-transparent" aria-label="Add to wishlist">
          <SfIconFavorite size="sm" />
          <!-- bg-white ring-1 ring-inset ring-neutral-200 !rounded-full -->
        </SfButton>
        <span class="text-lg text-blod-100">Add to wishlist</span>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
defineOptions({ name: "ProductSpecs" });
import Message from "@/components/message/index";
import useStore from "@/stores";
import getPowerSet from "./power-set";
import { ref } from "vue";

import { useCounter } from "@vueuse/core";
import { SfButton, SfIconAdd, SfIconRemove, useId, SfIconFavorite } from "@storefront-ui/vue";
import type { PropType } from "vue";
import type { SKU, ShopGoods, PropertyVo, PropertyValue } from "@/types/shop";
import type { CartItem } from "@/types";
// import { getPriceRange } from "@/utils/index";
import { clamp } from "@storefront-ui/shared";
// const router = useRouter();
import { useRoute } from "vue-router";
// 从路由中获取商品 id
const { params } = useRoute();
const min = ref(1);
const max = ref(10);
const inputId = useId();
const { count, inc, dec, set } = useCounter(1, {
  min: min.value,
  max: max.value,
});
function handleOnChange(event: Event) {
  const currentValue = (event.target as HTMLInputElement)?.value;
  const nextValue = parseFloat(currentValue);
  set(clamp(nextValue, min.value, max.value));
  emit("add", count.value);
}
// const firstThumbRef = ref<HTMLButtonElement>();
// const lastThumbRef = ref<HTMLButtonElement>();

// const assignRef = (el: Element | ComponentPublicInstance | null, index: number) => {
//   if (!el) return;
//   if (index === images.length - 1) {
//     lastThumbRef.value = el as HTMLButtonElement;
//   } else if (index === 0) {
//     firstThumbRef.value = el as HTMLButtonElement;
//   }
// };
export interface SkuEmit {
  skuId: string;
  price: string;
  // oldPrice: string;
  count: number;
  inventory: number;
  specsText: string;
}

type PathMap = { [key: string]: string[] };

const spliter = "★";
// // 根据skus数据得到路径字典对象
const getPathMap = (skus: SKU[]) => {
  // debugger;
  console.log("getPathMap", skus);

  const pathMap = {} as PathMap;
  skus.forEach((sku: SKU) => {
    // console.log(2323);

    // 1. 过滤出有库存有效的sku

    if (!sku.stock) return;
    // 2. 得到sku属性值数组
    const specs = sku.properties.map((spec) => spec.valueName);
    // 3. 得到sku属性值数组的子集
    const powerSet = getPowerSet(specs);
    console.log("powerSet", powerSet);

    // 4. 设置给路径字典对象
    powerSet.forEach((set) => {
      const key = set.join(spliter);
      // 如果没有就先初始化一个空数组
      if (!pathMap[key]) {
        pathMap[key] = [];
      }
      pathMap[key].push(String(sku.id));
    });

    console.log("pathMap", JSON.parse(JSON.stringify(pathMap)));
  });
  console.log("🔔根据后端返回的skus集合得到用于查询路径字典", pathMap);
  return pathMap;
};

// // 初始化禁用状态
function initDisabledStatus(specs: PropertyVo[], pathMap: PathMap) {
  specs.forEach((spec: PropertyVo) => {
    spec.valueNames.forEach((val: PropertyValue) => {
      // 设置禁用状态
      val.disabled = !pathMap[val.name];
    });
  });
}

// // 得到当前选中规格集合
const getSelectedArr = (specs: PropertyVo[]) => {
  const selectedArr: (string | undefined)[] = [];
  specs.forEach((spec, index) => {
    const selectedVal = spec.valueNames.find((val) => val.selected);
    if (selectedVal) {
      selectedArr[index] = selectedVal.name;
    } else {
      selectedArr[index] = undefined;
    }
  });
  return selectedArr;
};

// 更新按钮的禁用状态
// 更新禁用状态核心：获取当前用户选中的规格，再模拟用户下一次的规格选择，去字典中查询，查询不到设置为禁用状态
const updateDisabledStatus = (specs: PropertyVo[], pathMap: PathMap) => {
  // 遍历每一种规格
  specs.forEach((item, i) => {
    // 拿到当前选择的项目
    const selectedArr = getSelectedArr(specs);
    // 遍历每一个按钮
    item.valueNames.forEach((val) => {
      if (!val.selected) {
        selectedArr[i] = val.name;
        // 去掉undefined之后组合成key
        const key = selectedArr.filter((value) => value).join(spliter);
        val.disabled = !pathMap[key];
      }
    });
  });
};

// // 初始化选中状态
const initSelectedStatus = (goods: ShopGoods, skuId: string) => {
  // 找到当前的sku对象
  const sku = goods.skus.find((sku) => String(sku.id) === skuId);

  if (sku) {
    goods.propertyVos.forEach((item: PropertyVo, i) => {
      const val = item.valueNames.find((val: PropertyValue) => val.name === sku.properties[i].valueName);
      if (val) val.selected = true;
    });
  }
};

// // 使用组件 <XtxGoodSku :goods="xxx" :skuId="xxx"  @change="xxx"  />
const props = defineProps({
  // specs:所有的规格信息  skus:所有的sku组合
  goods: {
    type: Object as PropType<ShopGoods>,
    default: () => ({ propertyVos: [], skus: [] }),
  },
  skuId: String,
});

interface Emit {
  (e: "change", value: SkuEmit): void;
}
// const skuId = params.id;
const emit = defineEmits<Emit>();

// 得到所有字典集合

const pathMap = getPathMap(props.goods.skus);
// // 组件初始化的时候更新禁用状态
initDisabledStatus(props.goods.propertyVos, pathMap);
console.log("props.skuId", props.skuId);

const cartItem = ref<CartItem>();
// // 根据传入的skuId默认选中规格按钮
if (props.skuId) {
  initSelectedStatus(props.goods, String(props.skuId));
  if (cartItem.value) cartItem.value.skuId = props.skuId;
}
// 用户点击选择规格 - 模拟下次点击
const clickSpecs = (item: PropertyVo, val: PropertyValue) => {
  if (val.disabled) return false;
  // 选中与取消选中逻辑
  if (val.selected) {
    val.selected = false;
  } else {
    item.valueNames.forEach((bv) => {
      bv.selected = false;
    });
    val.selected = true;
  }
  console.log("val.selected", val.selected);
  // 🔔 点击之后再次更新选中状态
  updateDisabledStatus(props.goods.propertyVos, pathMap);
  // 把选择的sku信息传出去给父组件
  // 触发change事件将sku数据传递出去
  const selectedArr = getSelectedArr(props.goods.propertyVos).filter((value) => value);
  // 如果选中得规格数量和传入得规格总数相等则传出完整信息(都选择了)
  // 否则传出空对象
  if (selectedArr.length === props.goods.propertyVos.length) {
    // 从路径字典中得到skuId
    const skuId = pathMap[selectedArr.join(spliter)][0];
    const sku = props.goods.skus.find((sku) => String(sku.id) === skuId) as SKU;
    console.log("sku", sku, count.value);

    cartItem.value = {
      id: String(props.goods.id),
      name: props.goods.name,
      isEffective: true,
      picture: sku.picUrl || props.goods.picUrl,
      skuId: String(sku.id),
      price: sku.price,
      stock: sku.stock,
      count: count.value,
      attrsText: sku.properties.reduce((p: any, n: any) => `${p} ${n.propertyName}：${n.valueName}`, "").trim(),
    };
  }
};

const { cart } = useStore();

// 加入购物按钮点击
const addCart = () => {
  // 没有 skuId，提醒用户并退出函数
  if (!cartItem.value?.skuId) {
    Message.text("请选择完整商品规则");
    return;
    // return message({ type: "warn", text: "请选择完整商品规则~" });
  }
  if (!count.value) {
    Message.text("请输入商品数量");
    return;
  }
  cartItem.value.count = count.value;

  console.log("😭 cartItem 数据终于准备完毕了", cartItem);
  // 调用加入购物车接口
  cart.addCart(cartItem.value);
};
</script>
