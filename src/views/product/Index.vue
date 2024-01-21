<template>
  <div class="mx-auto mb-7 max-w-1620">
    <div class="mt-[3.75rem] mb-[7.5rem] mx-auto gap-x-[109px] gap-y-16 lg:flex" style="grid-template-columns: 800px 710px">
      <div class="relative flex flex-col w-[800px] max-h-[1180px]">
        <SfScrollable
          class="w-full h-full snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          :active-index="activeIndex"
          direction="horizontal"
          wrapper-class="h-full min-h-0"
          is-active-index-centered
          buttons-placement="none"
          :drag="{ containerWidth: true }"
          @on-drag-end="onDragged"
        >
          <div
            v-for="({ imageSrc, alt }, index) in images"
            :key="`${alt}-${index}`"
            class="flex justify-center h-[800px] basis-full shrink-0 grow snap-center"
          >
            <img
              :aria-label="alt"
              :aria-hidden="activeIndex !== index"
              class="rounded-[1.25rem] object-cover w-auto h-full"
              :alt="alt"
              :src="imageSrc"
            />
          </div>
        </SfScrollable>
        <SfScrollable
          ref="thumbsRef"
          class="items-center w-full mt-[1.875rem] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          direction="horizontal"
          :active-index="activeIndex"
          :previous-disabled="activeIndex === 0"
          :next-disabled="activeIndex === images.length - 1"
          buttons-placement="floating"
        >
          <template #previousButton="defaultProps">
            <SfButton
              v-if="!firstThumbVisible"
              v-bind="defaultProps"
              :disabled="activeIndex === 0"
              class="absolute !rounded-full z-10 left-0 bottom-[60px] bg-white"
              variant="secondary"
              size="sm"
              square
            >
              <SfIconChevronLeft size="sm" />
            </SfButton>
          </template>
          <button
            v-for="({ imageThumbSrc, alt }, index) in images"
            :key="`${alt}-${index}-thumbnail`"
            :ref="(el) => assignRef(el, index)"
            type="button"
            :aria-label="alt"
            :aria-current="activeIndex === index"
            :class="`w-[150px] h-[150px] mr-3 last:mr-0  relative shrink-0 border border-2 rounded-[1.25rem]  snap-start cursor-pointer focus-visible:outline focus-visible:outline-offset transition-colors flex-grow md:flex-grow-0  ${
              activeIndex === index ? 'border-primary-700' : 'border-transparent'
            }`"
            @mouseover="activeIndex = index"
            @focus="activeIndex = index"
          >
            <img :alt="alt" class="rounded-[1.25rem]" width="150" height="150" :src="imageThumbSrc" />
          </button>
          <template #nextButton="defaultProps">
            <SfButton
              v-if="!lastThumbVisible"
              v-bind="defaultProps"
              :disabled="activeIndex === images.length"
              class="absolute !rounded-full z-10 right-0 bottom-[60px] rotate-270 bg-white"
              variant="secondary"
              square
            >
              <SfIconChevronRight size="sm" />
            </SfButton>
          </template>
        </SfScrollable>
      </div>
      <ProductSpecs v-if="goods?.id" :goods="goods" @change="changeSku" class="w-[710px]" @add="addCart"></ProductSpecs>
    </div>
    <div class="">
      <h3 class="mb-12 text-5xl font-bold text-black">About Products</h3>

      <div class="grid grid-cols-1 mb-36 mx-auto gap-x-[20px] gap-y-36 lg:grid-cols-2">
        <div class="flex pr-[23px]">
          <p class="m-auto text-lg leading-10 text-black">
            Introducing the original DeepSleep Calming Bed™ - one of the highest quality pet beds ever produced. Crafted with premium nylon fabric
            and finished with a luxurious faux fur exterior, our soothing bed is designed to mimic the cozy comfort of a mother's fur coat aiming to
            provide your pet with the most comfortable sleeping experience imaginable. Did You Know? 1 in 4 dogs experience anxiety on a daily basis.
            When left untreated, built-up stress can lead to a severe loss of appetite, destructive behavioral problems, and a shorter life span. The
            Solution? Most of the time anxiety in pets can simply be solved with a better night's rest. That's where our bed comes in. The DeepSleep
            Calming Bed™ blends coziness and extravagance all into one pleasurable sleeping experience for your beloved pets.
          </p>
        </div>
        <img src="../../assets/images/shop/product-img.png" class="rounded-[1.25rem] object-cover w-auto" alt="" srcset="" />

        <img src="../../assets/images/shop/product-img.png" class="rounded-[1.25rem] object-cover w-auto" alt="" srcset="" />
        <div class="flex flex-col items-center justify-center text-lg leading-10 text-black pl-[23px]">
          <p class="m-auto text-lg leading-10 text-black">
            <span class="mt-auto text-2xl text-black">Specifications</span><br />
            Material: 100% CottonWash Style: Mechanical WashType: DogsFeatures: Detachable, Comfortable, Breathable
          </p>
        </div>
      </div>
    </div>
    <div>
      <h3 class="text-5xl font-bold text-black mb-[80px]">Products you might like..</h3>
      <div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 product-list">
        <div v-for="i in 4" :key="i" href="#" class="group rounded-[1.25rem]">
          <div class="w-full relative overflow-hidden bg-gray-200 rounded-[1.25rem] aspect-h-1 aspect-w-1 xl:aspect-h-8 xl:aspect-w-7">
            <img
              src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg"
              alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
              class="object-cover object-center w-full h-full"
            />
            <img
              src="../../assets/images/shop/collect-icon.svg"
              class="invisible group-hover:visible w-[28px] h-[24px] absolute right-5 top-5"
              alt=""
              srcset=""
            />
            <div class="absolute bottom-0 left-0 invisible w-full py-4 text-lg text-white bg-black opacity-45 group-hover:visible">
              Select options
            </div>
          </div>
          <h3 class="mt-5 text-lg text-gray-400">Colorful Sunflower Plush Comfy</h3>
          <p class="mt-6 text-2xl text-black">$22.95 – $42.95</p>
          <button
            type="button"
            class="rounded-md bg-white py-3 mt-6 text-lg px-[4.25rem] font-semibold text-primary-700 shadow-sm ring-1 ring-inset ring-primary-700 hover:bg-primary-700 hover:ring-primary-700 hover:text-white"
            @click="handleClick"
          >
            Buy
          </button>
        </div>
        <!-- More products... -->
      </div>
    </div>
    <!-- <SfScrollable class="items-center w-full [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]" drag>
      <div
        v-for="(_, index) in Array.from({ length: 20 })"
        :key="index"
        class="flex items-center justify-center text-gray-500 border border-dashed w-36 h-36 shrink-0 bg-neutral-100 border-negative-300 snap-center"
      >
        {{ index + 1 }}
      </div>
      <div v-for="i in 12" :key="i" href="#" class="group rounded-[1.25rem]">
        <div class="w-full relative overflow-hidden bg-gray-200 rounded-[1.25rem] aspect-h-1 aspect-w-1 xl:aspect-h-8 xl:aspect-w-7">
          <img
            src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg"
            alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
            class="object-cover object-center w-full h-full"
          />
          <img
            src="../../assets/images/shop/collect-icon.svg"
            class="invisible group-hover:visible w-[28px] h-[24px] absolute right-5 top-5"
            alt=""
            srcset=""
          />
          <div class="absolute bottom-0 left-0 invisible w-full py-4 text-lg text-white bg-black opacity-45 group-hover:visible">Select options</div>
        </div>
        <h3 class="mt-5 text-lg text-gray-400">Colorful Sunflower Plush Comfy</h3>
        <p class="mt-6 text-2xl text-black">$22.95 – $42.95</p>
        <button
          type="button"
          class="rounded-md bg-white py-3 mt-6 text-lg px-[4.25rem] font-semibold text-primary-700 shadow-sm ring-1 ring-inset ring-primary-700 hover:bg-primary-700 hover:ring-primary-700 hover:text-white"
          @click="handleClick"
        >
          Buy
        </button>
      </div>
    </SfScrollable> -->
  </div>
</template>
<script lang="ts" setup>
import { SfScrollable } from "@storefront-ui/vue";
import { ref, onMounted } from "vue";
import {
  SfButton,
  //  useId
} from "@storefront-ui/vue";
// import { clamp } from "@storefront-ui/shared";
// import { useCounter } from "@vueuse/core";
import { goods as _product } from "../../assets/json/goods1";
import ProductSpecs from "./ProductSpecs/index.vue";
import { useRouter } from "vue-router";
import useStore from "@/stores";
import type { GoodsDetail, CartItem } from "@/types";
import Message from "@/components/message/index";
// const min = ref(1);
// const max = ref(10);
// const {
//   // count,
//   // inc, dec, set
// } = useCounter(1, {
//   min: min.value,
//   max: max.value,
// });
// function handleOnChange(event: Event) {
//   const currentValue = (event.target as HTMLInputElement)?.value;
//   const nextValue = parseFloat(currentValue);
//   set(clamp(nextValue, min.value, max.value));
// }

const router = useRouter();
const handleClick = () => {
  Message.text("这是一条文本类型的消息提示");
  // console.log("handleClick");

  const slug = "warm-winter-cozy-washable-dog-house";
  router.push({ path: `/product/${slug}` });
};
import { SfIconChevronLeft, SfIconChevronRight, type SfScrollableOnDragEndData } from "@storefront-ui/vue";
import { unrefElement, useIntersectionObserver } from "@vueuse/core";
import { watch, type ComponentPublicInstance } from "vue";

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
const thumbsRef = ref<HTMLElement>();
const firstThumbRef = ref<HTMLButtonElement>();
const lastThumbRef = ref<HTMLButtonElement>();
const firstThumbVisible = ref(false);
const lastThumbVisible = ref(false);
const activeIndex = ref(0);

watch(
  thumbsRef,
  (thumbsRef) => {
    if (thumbsRef) {
      useIntersectionObserver(
        firstThumbRef,
        ([{ isIntersecting }]) => {
          firstThumbVisible.value = isIntersecting;
        },
        {
          root: unrefElement(thumbsRef),
          rootMargin: "0px",
          threshold: 1,
        },
      );
    }
  },
  { immediate: true },
);

watch(
  thumbsRef,
  (thumbsRef) => {
    if (thumbsRef) {
      useIntersectionObserver(
        lastThumbRef,
        ([{ isIntersecting }]) => {
          lastThumbVisible.value = isIntersecting;
        },
        {
          root: unrefElement(thumbsRef),
          rootMargin: "0px",
          threshold: 1,
        },
      );
    }
  },
  { immediate: true },
);

const onDragged = (event: SfScrollableOnDragEndData) => {
  if (event.swipeRight && activeIndex.value > 0) {
    activeIndex.value -= 1;
  } else if (event.swipeLeft && activeIndex.value < images.length - 1) {
    activeIndex.value += 1;
  }
};

const assignRef = (el: Element | ComponentPublicInstance | null, index: number) => {
  if (!el) return;
  if (index === images.length - 1) {
    lastThumbRef.value = el as HTMLButtonElement;
  } else if (index === 0) {
    firstThumbRef.value = el as HTMLButtonElement;
  }
};

const goods = ref<GoodsDetail>();
onMounted(async () => {
  // console.log(JSON.stringify(_product));

  // const res = await http<GoodsDetail>("GET", "/goods", { id: id });
  goods.value = _product;
});

// 获取 XtxSku 组件选中的商品信息
const skuId = ref("");
const attrsText = ref("");
// const addToBag = () => {};
const changeSku = (value: any) => {
  // 🔔存储 skuId 用于加入购物车
  skuId.value = value.skuId || "";
  // 存储选中规格文本
  attrsText.value = value.specsText;
  // console.log("当前选择的SKU为信息为", value);
  if (goods.value && value.skuId) {
    // 根据选中规格，更新商品库存，销售价格，原始价格
    goods.value.inventory = value.inventory;
    goods.value.price = value.price;
    goods.value.count = value.count;
    // goods.value.oldPrice = value.oldPrice;
  }
};
const { cart } = useStore();
// 加入购物按钮点击
const addCart = (count: number) => {
  // 没有 skuId，提醒用户并退出函数
  if (!skuId.value) {
    // return message({ type: "warn", text: "请选择完整商品规则~" });
  }
  if (!goods.value) return;
  // Partial   泛型工具类型 全部 转可选
  const cartItem: CartItem = {
    // 🚨🚨 注意数据收集字段名很多坑，小心操作
    // 第一部分：商品详情中有的
    id: goods.value.id, // 商品id
    name: goods.value.name, // 商品名称
    picture: goods.value.mainPictures[0], // 图片
    price: goods.value.price, // 旧价格
    // nowPrice: goods.value.price, // 新价格
    stock: goods.value.inventory, // 库存
    // 第二部分：商品详情中没有的，自己通过响应式数据收集
    count: count, // 商品数量
    skuId: skuId.value, // skuId
    attrsText: attrsText.value, // 商品规格文本
    // 第三部分：设置默认值即可
    selected: true, // 默认商品选中
    isEffective: true, // 默认商品有效
  } as CartItem;
  console.log("😭 cartItem 数据终于准备完毕了", cartItem);
  // 调用加入购物车接口
  cart.addCart(cartItem);
};
</script>
