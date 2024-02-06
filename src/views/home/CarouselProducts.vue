<template>
  <!-- v-for="{ title, price, description, buttonText, titleClass } in displayDetails"
    :key="title" -->
  <div class="grid grid-cols-1 my-[3.75rem] max-w-1620 md:my-[5rem] md:mb-[7.5rem] mx-auto gap-x-[109px] gap-y-16 lg:grid-cols-2">
    <img :src="currentProduct.image" :alt="currentProduct.title" class="object-contain w-[796px] h-[732px] hidden md:block" />
    <div class="relative flex flex-col items-center md:items-start">
      <h2 :class="['mb-4 md:mt-[78px] text-xl md:text-32 font-bold text-bold-100', currentProduct.titleClass]">
        {{ currentProduct.title }}
      </h2>
      <p class="md:mb-4 text-2xl text-black md:w-[30rem] md:mt-[40px] typography-text-base">
        {{ currentProduct.price }}
      </p>
      <p class="m-4 md:ml-0 text-xs md:text-lg text-gray-200 md:max-w-[40rem] md:mt-[40px] whitespace-pre-line">
        {{ currentProduct.description }}
      </p>
      <div class="px-4 mb-5 md:hidden">
        <img :src="currentProduct.image" :alt="currentProduct.title" class="object-contain w-full rounded-20" />
      </div>
      <SfButton class="!text-2xl mx-auto !font-normal py-[9px] !px-[62px] bg-primary-950 !rounded-100 md:mt-[54px] md:ml-0" @click="handleClick">{{
        currentProduct.buttonText
      }}</SfButton>
      <div class="flex justify-between mt-5 md:mt-[85px]">
        <div class="flex-row w-full ml-0.5 flex gap-0.5 mt [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          <button
            v-for="(_item, index) in displayDetails"
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
        <div class="flex hidden">
          <SfButton
            class="w-[60px] h-[60px] group-hover/scrollable:block !rounded-full !p-3 z-10 top-1/2 left-4 bg-white"
            variant="secondary"
            size="lg"
            square
            :disabled="activeIndex === 0"
            @click="activeIndex -= 1"
          >
            <SfIconChevronLeft size="xl" />
          </SfButton>
          <SfButton
            class="w-[60px] h-[60px] ml-[58px] group-hover/scrollable:block !rounded-full !p-3 z-10 top-1/2 right-4 bg-block"
            variant="secondary"
            size="lg"
            square
            :disabled="activeIndex === displayDetails.length - 1"
            @click="activeIndex += 1"
          >
            <SfIconChevronRight size="xl" />
          </SfButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from "vue";
import { SfIconChevronLeft, SfIconChevronRight, SfButton } from "@storefront-ui/vue";

import { useRouter } from "vue-router";
const router = useRouter();
const displayDetails = [
  {
    image: "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",
    title: "DeepSleep Calming Bed™",
    price: "HK$585.95",
    description:
      "Did You Know? 1 in 4 dogs experience anxiety on a daily basis. When left untreated, built-up stress can lead to a severe loss of appetite, destructive behavioral problems, and a shorter life span.\n The Solution? Most of the time anxiety in pets can simply be solved with a better night's rest. That's where our bed comes in. The DeepSleep Calming Bed™ blends coziness and extravagance all into one pleasurable sleeping experience for your beloved pets.",
    buttonText: "Buy",
    titleClass: "md:typography-display-2",
    descriptionClass: "md:typography-text-lg",
  },
  {
    image: "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg",
    title: "DeepSleep Calming Bed™222",
    price: "HK$585.95",
    description:
      "Did You Know? 1 in 4 dogs experience anxiety on a daily basis. When left untreated, built-up stress can lead to a severe loss of appetite, destructive behavioral problems, and a shorter life span./n The Solution? Most of the time anxiety in pets can simply be solved with a better night's rest. That's where our bed comes in. The DeepSleep Calming Bed™ blends coziness and extravagance all into one pleasurable sleeping experience for your beloved pets.",
    buttonText: "Buy",
    titleClass: "md:typography-display-2",
    descriptionClass: "md:typography-text-lg",
  },
  {
    image: "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg",
    title: "Fresh and Bold232",
    price: "HK$585.00",
    description:
      "Did You Know? 1 in 4 dogs experience anxiety on a daily basis. When left untreated, built-up stress can lead to a severe loss of appetite, destructive behavioral problems, and a shorter life span./n The Solution? Most of the time anxiety in pets can simply be solved with a better night's rest. That's where our bed comes in. The DeepSleep Calming Bed™ blends coziness and extravagance all into one pleasurable sleeping experience for your beloved pets.",
    buttonText: "Buy",
    titleClass: "md:typography-display-2",
    descriptionClass: "md:typography-text-lg",
  },
];
const activeIndex = ref(0);
const currentProduct = computed(() => displayDetails[activeIndex.value] || {});

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
const handleClick = () => {
  console.log("handleClick");

  const slug = "warm-winter-cozy-washable-dog-house";
  router.push({ path: `/product/${slug}` });
};
</script>
