<template>
  <div class="w-full h-full">
    <div v-if="isOpen" class="fixed inset-0 w-screen h-screen transition-opacity bg-opacity-50 bg-neutral-500" />
    <header
      ref="menuRef"
      class="flex flex-wrap w-full py-2 border-0 md:flex-nowrap md:py-5 bg-primary-700 border-neutral-200 md:relative md:h-20 md:z-10"
    >
      <SfButton
        class="block text-white bg-transparent md:hidden font-body hover:bg-primary-800 hover:text-white active:bg-primary-900 active:text-white"
        :aria-haspopup="true"
        :aria-expanded="isOpen"
        variant="tertiary"
        square
        @click="toggle()"
      >
        <SfIconMenu class="text-white" />
      </SfButton>
      <transition
        enter-active-class="transition duration-500 ease-in-out transform"
        leave-active-class="transition duration-500 ease-in-out transform"
        enter-from-class="-translate-x-full md:translate-x-0 md:opacity-0"
        enter-to-class="translate-x-0 md:translate-x-0 md:opacity-100"
        leave-from-class="translate-x-0 md:opacity-100"
        leave-to-class="-translate-x-full md:translate-x-0 md:opacity-0"
      >
        <SfDrawer
          ref="drawerRef"
          v-model="isOpen"
          disable-click-away
          placement="top"
          class="grid grid-cols-1 md:gap-x-6 md:grid-cols-4 bg-white shadow-lg p-0 max-h-screen overflow-y-auto md:!absolute md:!top-[5rem] max-w-[376px] md:max-w-full md:p-6 mr-[50px] md:mr-0"
        >
          <div class="sticky top-0 flex items-center justify-between py-2 px-4 bg-primary-700 md:hidden w-full max-w-[376px]">
            <div class="flex items-center font-medium text-white typography-text-lg">Browse products</div>
            <SfButton
              square
              variant="tertiary"
              aria-label="Close navigation menu"
              class="ml-2 text-white"
              @click="close()"
              @keydown.enter.space="close()"
            >
              <SfIconClose />
            </SfButton>
          </div>
          <div v-for="{ heading, items } in categoriesContent" :key="heading" class="[&:nth-child(2)]:pt-0 pt-6 md:pt-0">
            <h2 role="presentation" class="typography-text-base font-medium text-neutral-900 whitespace-nowrap p-4 md:py-1.5">
              {{ heading }}
            </h2>
            <hr class="mb-3.5" />
            <ul>
              <li v-for="item in items" :key="item.title">
                <SfListItem tag="a" :href="item.link" size="sm" role="none" class="typography-text-base md:typography-text-sm py-4 md:py-1.5">
                  {{ item.title }}
                </SfListItem>
              </li>
            </ul>
          </div>
          <div class="flex flex-col items-center justify-center overflow-hidden bg-neutral-100 md:rounded-md border-neutral-300 grow">
            <img :src="bannerDetails.image" :alt="bannerDetails.title" class="object-contain" />
            <p class="px-4 mt-4 mb-4 font-medium text-center typography-text-base">{{ bannerDetails.title }}</p>
          </div>
          <SfButton
            square
            size="sm"
            variant="tertiary"
            aria-label="Close navigation menu"
            class="hidden md:block md:absolute md:right-0 hover:bg-white active:bg-white"
            @click="close()"
          >
            <SfIconClose class="text-neutral-500" />
          </SfButton>
        </SfDrawer>
      </transition>
    </header>
  </div>
</template>
<script lang="ts" setup>
import { SfButton, SfDrawer, SfIconClose, SfListItem, useDisclosure, useTrapFocus, SfIconMenu } from "@storefront-ui/vue";
import { ref } from "vue";
import { onClickOutside } from "@vueuse/core";

const { isOpen, toggle, close } = useDisclosure();
const menuRef = ref();
const drawerRef = ref();

useTrapFocus(drawerRef, {
  activeState: isOpen,
  arrowKeysUpDown: true,
  initialFocus: "container",
});
onClickOutside(menuRef, () => {
  close();
});

const bannerDetails = {
  image: "https://storage.googleapis.com/sfui_docs_artifacts_bucket_public/production/watch.png",
  title: "New in designer watches",
};

const categoriesContent = [
  {
    heading: "Women",
    items: [
      {
        title: "All Women's",
        link: "#",
      },
      {
        title: "Clothing",
        link: "#",
      },
      {
        title: "Shoes",
        link: "#",
      },
      {
        title: "Accessories",
        link: "#",
      },
      {
        title: "Wearables",
        link: "#",
      },
      {
        title: "Food & Drinks",
        link: "#",
      },
    ],
  },
  {
    heading: "Men",
    items: [
      {
        title: "All Men’s",
        link: "#",
      },
      {
        title: "Clothing",
        link: "#",
      },
      {
        title: "Shoes",
        link: "#",
      },
      {
        title: "Accessories",
        link: "#",
      },
      {
        title: "Wearables",
        link: "#",
      },
      {
        title: "Food & Drinks",
        link: "#",
      },
    ],
  },
  {
    heading: "Kids",
    items: [
      {
        title: "All Kids",
        link: "#",
      },
      {
        title: "Clothing",
        link: "#",
      },
      {
        title: "Shoes",
        link: "#",
      },
      {
        title: "Accessories",
        link: "#",
      },
      {
        title: "Wearables",
        link: "#",
      },
      {
        title: "Food & Drinks",
        link: "#",
      },
    ],
  },
];
</script>
