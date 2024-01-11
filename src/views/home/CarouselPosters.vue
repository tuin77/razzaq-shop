<template>
  <div class="relative max-h-[980px] flex flex-col w-full">
    <SfScrollable
      class="w-full h-full snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
      :active-index="activeIndex"
      wrapper-class="h-full min-h-0"
      buttons-placement="none"
      :drag="{ containerWidth: true }"
      is-active-index-centered
      @on-drag-end="onDragged"
      @on-scroll="onScroll"
    >
      <div
        v-for="{ image, title, description, buttonText, backgroundColor, titleClass } in displayDetails"
        :key="title"
        :class="['relative flex justify-center basis-full snap-center snap-always shrink-0 grow h-[980px]', backgroundColor]"
      >
        <div :class="['flex justify-between overflow-hidden grow']" style="padding-left: calc((100% - 1620px) / 2)">
          <div class="flex flex-col pt-[12.25rem] max-w-1/2">
            <h2 :class="['mb-4  text-48 w-[29rem] font-bold typography-display-3', titleClass]">
              {{ title }}
            </h2>
            <p class="mb-4 text-lg text-gray-200 w-[30rem] mt-[40px] typography-text-base">
              {{ description }}
            </p>
            <SfButton class="!text-2xl !font-bold py-[28px] !px-[52px] bg-primary-950 !rounded-100 mt-[4.625rem] ml-0 mr-auto">{{
              buttonText
            }}</SfButton>
          </div>
          <img :src="image" :alt="title" class="self-end object-contain w-1/2" />
        </div>
      </div>
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
import { SfScrollable, SfButton, type SfScrollableOnDragEndData } from "@storefront-ui/vue";
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
    titleClass: "md:typography-display-2",
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
</script>
