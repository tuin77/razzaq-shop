<template>
  <div class="relative max-h-[980px] flex flex-col w-full">
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
      <!-- <div class="relative min-h-[600px]"> -->
      <div class="mx-auto md:flex md:justify-center md:w-full bg-neutral-100 carousel">
        <div class="text-center md:text-left md:pt-[18.3vh] md:w-full md:flex md:flex-col md:items-start md:basis-2/4 carousel-left">
          <!-- <p class="font-bold tracking-widest uppercase typography-text-xs md:typography-text-sm text-neutral-500">Feel the music</p> -->
          <h2 class="text-32 mt-9 md:text-left md:text-48 md:w-[29rem] md:h-44 font-bold">
            <!-- title ||  -->
            {{ "NEW ARRIVALS ‘21 Delicious Snack" }}
          </h2>
          <p class="text-left mb-7 m-5 text-lg text-gray-200 md:h-36 md:leading-loose md:w-[30rem] typography-text-base">
            <!-- description || -->
            {{ "So comfy, you’ll want to take a nap on it. Lounge in style and comfort in this orthopedic dog crate pad." }}
          </p>
          <SfButton
            class="!text-base py-3 px-7 mb-15 md:!text-2xl !font-bold md:py-[28px] md:!px-[52px] bg-primary-950 !rounded-100 md:mt-7 md:mt-14 ml-0 mr-auto"
            @click="toPageProduct"
            >Buy Product</SfButton
          >
          <!-- <h1 class="typography-display-2 md:typography-display-1 md:leading-[67.5px] font-bold mt-2 mb-4">New Wireless Pro</h1> -->
          <!-- <p class="typography-text-base md:typography-text-lg">Spatial audio. Adjustable ear cups. On-device controls. All-day battery.</p> -->
          <!-- <div class="flex flex-col gap-4 mt-6 md:flex-row">
            <SfButton size="lg"> Order now </SfButton>
            <SfButton size="lg" variant="secondary" class="bg-white"> Show more </SfButton>
          </div> -->
        </div>
        <div class="flex md:basis-2/4 md:items-stretch md:overflow-hidden carousel-img">
          <img
            src="http://shopadmin.youyahuyu.com/admin-api/infra/file/4/get/62b04c628dd4abe1ebea90b003fc6411bfb3bb21f7a089813cad6cf2541295f4.png"
            alt="Headphones"
            class="hidden object-cover object-left ml-auto md:block md:visible"
          />
          <img
            src="http://shopadmin.youyahuyu.com/admin-api/infra/file/4/get/ef1d8a40903cafd7dbbf34d5727e6b82de74a119a2f7395b5789b55729b7257c.png"
            alt="Headphones"
            class="object-cover object-left md:hidden"
          />
        </div>
      </div>
      <!-- </div> -->
      <!-- home.bannerList picUrl-->
      <!-- <div
        v-for="{ title, titleClass, image } in displayDetails"
        :key="title"
        :class="['relative flex justify-center basis-full snap-center snap-always shrink-0 grow h-[980px]', 'bg-neutral-100']"
      >
        <div :class="['flex justify-between overflow-hidden grow']" style="padding-left: calc((100% - 1620px) / 2)">
          <div class="flex flex-col pt-[12.25rem] max-w-1/2">
            <h2 :class="['mb-4  text-48 w-[29rem] font-bold typography-display-3', titleClass]">
              {{ title }}
            </h2>
            <p class="mb-4 text-lg text-gray-200 w-[30rem] mt-[40px] typography-text-base">
              {{ description || "So comfy, you’ll want to take a nap on it. Lounge in style and comfort in this orthopedic dog crate pad." }}
            </p>
           
          </div>
          <img :src="image" :alt="title" class="self-end object-contain w-1/2" />
        </div>
      </div> -->
    </SfScrollable>
    <div class="absolute top-[46.3125rem]" style="left: calc((100% - 1620px) / 2)">
      <div class="flex-row w-full ml-0.5 flex gap-0.5 mt [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        <button
          v-for="(_item, index) in displayDetails"
          :key="`${index}-thumbnail`"
          type="button"
          :aria-current="activeIndex === index"
          :class="[
            'w-3.5 h-3.5 relative mt-1 mr-8 rounded-full transition-colors focus-visible:outline focus-visible:outline-offset-0 ',
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
const displayDetails = [
  {
    image: "https://storage.googleapis.com/sfui_docs_artifacts_bucket_public/production/display.png",
    title: "NEW ARRIVALS ‘21 Delicious Snack",
    // subtitle: "Be inspired",
    description: "So comfy, you’ll want to take a nap on it. Lounge in style and comfort in this orthopedic dog crate pad.",
    buttonText: "Buy Product",
    // reverse: false,
    backgroundColor: "bg-neutral-100",
    // titleClass: "md:typography-display-2",
    // subtitleClass: "md:typography-headline-6",
    descriptionClass: "md:typography-text-lg",
  },
  {
    image: "https://storage.googleapis.com/sfui_docs_artifacts_bucket_public/production/display-2.png",
    title: "Pack it Up",
    subtitle: "Be active",
    description: "Explore the great outdoors with our backpacks",
    buttonText: "Discover now",
    reverse: true,
    backgroundColor: "bg-warning-200",
  },
  {
    image: "https://storage.googleapis.com/sfui_docs_artifacts_bucket_public/production/display-3.png",
    title: "Fresh and Bold",
    subtitle: "New collection",
    description: "Add a pop up color to your outfit",
    buttonText: "Discover now",
    reverse: false,
    backgroundColor: "bg-secondary-200",
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
  } else if (event.swipeLeft && activeIndex.value < displayDetails.length - 1) {
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

  if (($event.code === "ArrowRight" || $event.code === "ArrowUp") && index < displayDetails.length - 1) {
    activeIndex.value = index + 1;
    nextElement.focus();
  } else if (($event.code === "ArrowLeft" || $event.code === "ArrowDown") && index > 0) {
    activeIndex.value = index - 1;
    previousElement.focus();
  }
};
const toPageProduct = (item?: any) => {
  router.push({ name: "product", query: { id: item?.id || "643" } });
};
</script>
<style scoped>
@media (min-width: 768px) {
  .carousel {
    height: min(calc(100vh - 100px), 980px);
  }
  .carousel-left {
    padding-left: max(calc(50% - 810px), 24px);
  }
  .carousel-img {
    height: min(calc(100vh - 100px), 980px);
  }
}
</style>
