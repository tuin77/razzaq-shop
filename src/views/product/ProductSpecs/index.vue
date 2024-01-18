<template>
  <div>
    <section aria-labelledby="information-heading " class="sm:pr-12">
      <h2 class="text-[2rem] text-bold-100">{{ goods?.name }}</h2>
      <p v-if="goods.price_range" class="text-[2rem] font-bold-100 font-bold mt-4">
        {{ getPriceRange(goods.price_range.min_amount, goods.price_range.max_amount) }}
      </p>
      <p class="text-lg text-gray-500 mt-7">{{ goods?.short_description }}</p>
    </section>

    <section aria-labelledby="options-heading" class="mt-8">
      <template v-for="item in goods?.specs_list" :key="item.id">
        <div class="mt-7">
          <h4 class="text-lg text-blod-100">{{ item.name }}：</h4>
          <fieldset class="mt-5">
            <span v-if="item.name === 'Color'" class="flex items-center space-x-3">
              <button
                v-for="(spec_value, index) in item.spec_values"
                :key="`${index}-thumbnail`"
                :ref="(el) => assignRef(el, index)"
                type="button"
                :aria-current="spec_value.selected"
                :class="`w-[100px] h-[100px] mr-3 last:mr-0  relative shrink-0 border border-2 rounded-[1.25rem]  snap-start cursor-pointer focus-visible:outline focus-visible:outline-offset transition-colors flex-grow md:flex-grow-0  ${
                  spec_value.selected ? 'border-primary-700' : 'border-transparent'
                }`"
                @click="clickSpecs(item, spec_value)"
              >
                <!-- @mouseover="clickSpecs(item, spec_value)"
                @focus="clickSpecs(item, spec_value)" -->
                <img class="rounded-[1.25rem]" width="150" height="150" :src="spec_value.picture || ''" />
              </button>
            </span>
            <div v-else class="grid grid-cols-2 gap-2 gap-x-[30px] gap-7-[15px] pr-[80px]">
              <label
                v-for="(spec_value, index) in item.spec_values"
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
        @click="$emit('add')"
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
import getPowerSet from "./power-set";
import { type ComponentPublicInstance, ref } from "vue";

import useStore from "@/store";
import { useCounter } from "@vueuse/core";
import { SfButton, SfIconAdd, SfIconRemove, useId, SfIconFavorite } from "@storefront-ui/vue";
import type { PropType } from "vue";
import type { Sku } from "./goods";
import type { GoodsDetail, SpecValue, Spec, SKU } from "@/types";
import { getPriceRange } from "@/utils/index";
import { clamp } from "@storefront-ui/shared";

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
}
const firstThumbRef = ref<HTMLButtonElement>();
const lastThumbRef = ref<HTMLButtonElement>();
const withBase = (filepath: string) => `https://storage.googleapis.com/sfui_docs_artifacts_bucket_public/production/gallery/${filepath}`;

const images = [
  { imageSrc: withBase("gallery_9.png"), imageThumbSrc: withBase("gallery_1_thumb.png"), alt: "backpack1" },
  { imageSrc: withBase("gallery_2.png"), imageThumbSrc: withBase("gallery_2_thumb.png"), alt: "backpack2" },
  { imageSrc: withBase("gallery_3.png"), imageThumbSrc: withBase("gallery_3_thumb.png"), alt: "backpack3" },
  { imageSrc: withBase("gallery_4.png"), imageThumbSrc: withBase("gallery_4_thumb.png"), alt: "backpack4" },
  { imageSrc: withBase("gallery_5.png"), imageThumbSrc: withBase("gallery_5_thumb.png"), alt: "backpack5" },
  { imageSrc: withBase("gallery_6.png"), imageThumbSrc: withBase("gallery_6_thumb.png"), alt: "backpack6" },
  { imageSrc: withBase("gallery_7.png"), imageThumbSrc: withBase("gallery_7_thumb.png"), alt: "backpack7" },
  { imageSrc: withBase("gallery_8.png"), imageThumbSrc: withBase("gallery_8_thumb.png"), alt: "backpack8" },
  { imageSrc: withBase("gallery_9.png"), imageThumbSrc: withBase("gallery_9_thumb.png"), alt: "backpack9" },
  { imageSrc: withBase("gallery_10.png"), imageThumbSrc: withBase("gallery_10_thumb.png"), alt: "backpack10" },
  { imageSrc: withBase("gallery_11.png"), imageThumbSrc: withBase("gallery_11_thumb.png"), alt: "backpack11" },
];
const assignRef = (el: Element | ComponentPublicInstance | null, index: number) => {
  if (!el) return;
  if (index === images.length - 1) {
    lastThumbRef.value = el as HTMLButtonElement;
  } else if (index === 0) {
    firstThumbRef.value = el as HTMLButtonElement;
  }
};
export interface SkuEmit {
  skuId: string;
  price: string;
  oldPrice: string;
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
    // console.log("sku", JSON.parse(JSON.stringify(sku)));
    // console.log("sku.inventory", sku.inventory);
    // console.log("sku.inventory", sku.inventory);

    if (!sku.inventory) return;
    // 2. 得到sku属性值数组
    const specs = sku.specs.map((spec) => spec.valueName);
    // 3. 得到sku属性值数组的子集
    const powerSet = getPowerSet(specs);
    // console.log("powerSet", powerSet);

    // 4. 设置给路径字典对象
    powerSet.forEach((set) => {
      const key = set.join(spliter);
      // 如果没有就先初始化一个空数组
      if (!pathMap[key]) {
        pathMap[key] = [];
      }
      pathMap[key].push(sku.id);
    });
  });
  console.log("🔔根据后端返回的skus集合得到用于查询路径字典", pathMap);
  return pathMap;
};

// // 初始化禁用状态
function initDisabledStatus(specs: Spec[], pathMap: PathMap) {
  console.log("initDisabledStatus", specs);

  specs.forEach((spec: Spec) => {
    spec.spec_values.forEach((val: SpecValue) => {
      // 设置禁用状态
      val.disabled = !pathMap[val.name];
    });
  });
}

// // 得到当前选中规格集合
const getSelectedArr = (specs: Spec[]) => {
  const selectedArr: (string | undefined)[] = [];

  specs.forEach((spec, index) => {
    const selectedVal = spec.spec_values.find((val) => val.selected);
    if (selectedVal) {
      selectedArr[index] = selectedVal.name;
    } else {
      selectedArr[index] = undefined;
    }
  });
  return selectedArr;
};

// // 🔔 更新按钮的禁用状态
// // 🔔 更新禁用状态核心：获取当前用户选中的规格，再模拟用户下一次的规格选择，去字典中查询，查询不到设置为禁用状态
const updateDisabledStatus = (specs: Spec[], pathMap: PathMap) => {
  // 遍历每一种规格
  specs.forEach((item, i) => {
    // 拿到当前选择的项目
    const selectedArr = getSelectedArr(specs);
    // 遍历每一个按钮
    item.spec_values.forEach((val) => {
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
const initSelectedStatus = (goods: GoodsDetail, skuId: string) => {
  // 找到当前的sku对象
  const sku = goods.skus.find((sku) => sku.id === skuId);
  if (sku) {
    goods.specs_list.forEach((item: Spec, i) => {
      const val = item.spec_values.find((val: SpecValue) => val.name === sku.specs[i].valueName);
      if (val) val.selected = true;
    });
  }
};

// // 使用组件 <XtxGoodSku :goods="xxx" :skuId="xxx"  @change="xxx"  />
const props = defineProps({
  // specs:所有的规格信息  skus:所有的sku组合
  goods: {
    type: Object as PropType<GoodsDetail>,
    default: () => ({ specs: [], skus: [] }),
  },
  // 当前所有商品规格组成的有效skuId(唯一标识)
  skuId: {
    type: String,
    default: "",
  },
});

interface Emit {
  (e: "change", value: SkuEmit): void;
  (e: "add"): void;
  // addCart
}
const emit = defineEmits<Emit>();

// // 🔔 得到所有字典集合
console.log("skus", props.goods.skus);

const pathMap = getPathMap(props.goods.skus);
// // 组件初始化的时候更新禁用状态
initDisabledStatus(props.goods.specs_list, pathMap);
// // 根据传入的skuId默认选中规格按钮
if (props.skuId) {
  initSelectedStatus(props.goods, props.skuId);
}
// 🔔 用户点击选择规格 - 模拟下次点击
const clickSpecs = (item: Spec, val: SpecValue) => {
  console.log("val.disabled", val.disabled);

  if (val.disabled) return false;
  // 选中与取消选中逻辑
  if (val.selected) {
    val.selected = false;
  } else {
    item.spec_values.forEach((bv) => {
      bv.selected = false;
    });
    val.selected = true;
  }
  console.log("val.selected", val.selected);
  // 🔔 点击之后再次更新选中状态
  updateDisabledStatus(props.goods.specs_list, pathMap);
  // 把选择的sku信息传出去给父组件
  // 触发change事件将sku数据传递出去
  const selectedArr = getSelectedArr(props.goods.specs_list).filter((value) => value);
  // 如果选中得规格数量和传入得规格总数相等则传出完整信息(都选择了)
  // 否则传出空对象
  if (selectedArr.length === props.goods.specs_list.length) {
    // 从路径字典中得到skuId
    const skuId = pathMap[selectedArr.join(spliter)][0];
    const sku = props.goods.skus.find((sku) => sku.id === skuId) as Sku;
    console.log("sku", sku);

    // 传递数据给父组件
    emit("change", {
      skuId: sku.id,
      price: sku.price,
      oldPrice: sku.oldPrice,
      inventory: sku.inventory,
      specsText: sku.specs.reduce((p, n) => `${p} ${n.name}：${n.valueName}`, "").trim(),
    });
  } else {
    emit("change", {} as SkuEmit);
  }
};
const addToBag = () => {};
</script>

<!-- <style scoped lang="less">
.sku-state-mixin() {
  border: 1px solid #e4e4e4;
  margin-right: 10px;
  cursor: pointer;
  &.selected {
    border-color: @xtxColor;
  }
  &.disabled {
    opacity: 0.6;
    border-style: dashed;
    cursor: not-allowed;
  }
}
.goods-sku {
  padding-left: 10px;
  padding-top: 20px;
  dl {
    display: flex;
    padding-bottom: 20px;
    align-items: center;
    dt {
      width: 50px;
      color: #999;
    }
    dd {
      flex: 1;
      color: #666;
      > img {
        width: 50px;
        height: 50px;
        .sku-state-mixin();
      }
      > span {
        display: inline-block;
        height: 30px;
        line-height: 28px;
        padding: 0 20px;
        .sku-state-mixin();
      }
    }
  }
}
</style> -->
