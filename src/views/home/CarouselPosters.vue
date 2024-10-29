<template>
  <div class="relative max-h-[1013px] flex flex-col w-full">
    <SfScrollable
      class="w-full h-full snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
      :active-index="activeIndex"
      wrapper-class="h-full"
      buttons-placement="none"
      :drag="{ containerWidth: true }"
      is-active-index-centered
      @on-drag-end="onDragged"
      @on-scroll="onScroll"
    >
      <div v-for="(item, index) in carouselImages" :key="index" class="flex justify-center h-full basis-full shrink-0 grow snap-center">
        <div class="mx-auto md:flex md:justify-center md:w-full bg-neutral-100 carousel">
          <div class="text-center md:text-left md:pt-[18.3vh] md:w-full md:flex md:flex-col md:items-start md:basis-2/4 carousel-left">
            <h2 class="text-32 mt-9 md:text-left md:text-48 md:w-[29rem] md:h-44 font-bold">
              {{ item.title }}
            </h2>
            <p class="text-left mb-7 m-5 text-sm md:m-0 md:text-lg text-gray-200 md:h-36 md:leading-loose md:w-[30rem] typography-text-base">
              {{ item.description }}
            </p>
            <SfButton
              class="!text-base py-3 px-7 mb-15 md:!text-2xl !font-bold md:py-[28px] md:!px-[52px] bg-primary-950 !rounded-100 md:mt-7 md:mt-14 ml-0 mr-auto"
              @click="toPageProduct(item)"
              >Buy Product
            </SfButton>
          </div>
          <div class="flex md:basis-2/4 md:items-stretch md:overflow-hidden carousel-img">
            <img :src="item.image" alt="Headphones" class="hidden object-cover object-left ml-auto md:block md:visible" />
            <img :src="item.image_h5 || item.image" alt="Headphones" class="object-cover object-left w-full h-auto md:hidden" />
          </div>
        </div>
      </div>
    </SfScrollable>
    <div class="absolute top-[308px] w-full md:top-[46.3125rem] carousel-left">
      <div
        class="flex-row justify-center md:justify-start w-full md:w-auto md:ml-0.5 flex gap-0.5 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
      >
        <button
          v-for="(_item, index) in carouselImages"
          :key="`${index}-thumbnail`"
          type="button"
          :aria-current="activeIndex === index"
          :class="[
            'w-3.5 h-3.5 relative mt-1 mr-8 rounded-full transition-colors focus-visible:outline focus-visible:outline-offset-0 last:mr-0',
            activeIndex === index ? 'bg-primary-700' : 'bg-gray-200',
          ]"
          @keydown.right.prevent="activeArrowNavigation($event, index)"
          @keydown.up.prevent="activeArrowNavigation($event, index)"
          @keydown.left.prevent="activeArrowNavigation($event, index)"
          @keydown.down.prevent="activeArrowNavigation($event, index)"
          @click="activeIndex = index"
        ></button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

// import useStore from "@/stores";
// const { home } = useStore();
import { SfScrollable, SfButton, type SfScrollableOnDragEndData } from "@storefront-ui/vue";
import router from "@/router";
// type SfScrollableOnScrollData,

const publicPath = new URL(import.meta.url);
console.log("publicPath", publicPath.origin);
const imagesURL = `${publicPath.origin}/public/images/`;
console.log("displayImg", `${imagesURL}display.png`);

const carouselImages = [
  {
    image: `${imagesURL}/home/carousel1.png`,
    image_h5: "http://shopadmin.youyahuyu.com/admin-api/infra/file/4/get/ef1d8a40903cafd7dbbf34d5727e6b82de74a119a2f7395b5789b55729b7257c.png",
    title: "NEW ARRIVALS ‘21 Delicious Snack",
    product_id: "643",
    description: "So comfy, you’ll want to take a nap on it. Lounge in style and comfort in this orthopedic dog crate pad.",
  },
  {
    image: `${imagesURL}/home/display.png`,
    title: "Pack it Up",
    subtitle: "Be active",
    product_id: "643",
    description: "Explore the great outdoors with our backpacks",
  },
  {
    image: `${imagesURL}/home/display-2.png`,
    // "https://storage.googleapis.com/sfui_docs_artifacts_bucket_public/production/display-3.png",
    title: "Fresh and Bold",
    subtitle: "New collection",
    product_id: "643",
    description: "Add a pop up color to your outfit",
  },
];
const activeIndex = ref(0);
/**
 * 非立即执行防抖函数
 * @param {Function} func
 * @param {number} delay
 * @returns
 */
function debounce<F extends (...args: unknown[]) => unknown>(func: F, waitFor: number): (...args: Parameters<F>) => void {
  let timeoutId: number | null = null;

  return function (...args: Parameters<F>) {
    if (timeoutId !== null) {
      clearTimeout(timeoutId);
    }
    timeoutId = window.setTimeout(() => {
      func(...args);
    }, waitFor);
  };
}

const onDragged = (event: SfScrollableOnDragEndData) => {
  if (event.swipeRight && activeIndex.value > 0) {
    activeIndex.value -= 1;
  } else if (event.swipeLeft && activeIndex.value < carouselImages.length - 1) {
    activeIndex.value += 1;
  }
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const onScroll = debounce((event: any) => {
  const { width, left } = event;
  console.log(width, left);
  let index = 0;
  if (left < width && activeIndex.value !== 0) {
    index = 0;
  } else if (left > width && left < width * 2) {
    index = 1;
  } else if (left > width * 2) {
    index = 2;
  }
  if (activeIndex.value !== index) activeIndex.value = index;
}, 800);
const activeArrowNavigation = ($event: KeyboardEvent, index: number) => {
  const currentElement = $event?.target as HTMLElement;
  const nextElement = currentElement.nextElementSibling as HTMLElement;
  const previousElement = currentElement.previousElementSibling as HTMLElement;

  if (($event.code === "ArrowRight" || $event.code === "ArrowUp") && index < carouselImages.length - 1) {
    activeIndex.value = index + 1;
    nextElement.focus();
  } else if (($event.code === "ArrowLeft" || $event.code === "ArrowDown") && index > 0) {
    activeIndex.value = index - 1;
    previousElement.focus();
  }
};
const toPageProduct = (item?: any) => {
  router.push({ name: "product", query: { id: item?.product_id || "643" } });
};
</script>
<style scoped>
@media (min-width: 768px) {
  .carousel {
    height: min(calc(100vh - 100px), 1013px);
  }
  .carousel-left {
    padding-left: max(calc(50% - 810px), 24px);
  }
  .carousel-img {
    height: min(calc(100vh - 100px), 1013px);
  }
}
</style>
