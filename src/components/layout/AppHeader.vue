<template>
  <header ref="referenceRef">
    <nav class="bg-white px-4 lg:px-6 py-2.5 border-b-[1px] border-gray-100" ref="floatingRef">
      <div class="flex flex-wrap items-center justify-between mx-auto max-w-1620">
        <a href="" class="flex items-center">
          <img src="../../assets/images/logo.svg" class="h-6 mr-3 sm:h-9" alt="Flowbite Logo" />
        </a>
        <div class="flex items-center lg:order-2">
          <a
            href="#"
            class="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            ><RouterLink to="/login">Log in</RouterLink>
          </a>
          <LangSelect1></LangSelect1>

          <button
            data-collapse-toggle="mobile-menu-2"
            type="button"
            class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="mobile-menu-2"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div class="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
          <ul
            class="flex flex-col hidden mt-4 font-medium bg-white lg:flex-row lg:space-x-8 lg:mt-0 md:flex"
            @blur="
              (event) => {
                if (!(event.currentTarget as Element).contains(event.relatedTarget as Element)) {
                  close();
                }
              }
            "
          >
            <li class="group">
              <div
                class="relative group-hover:after:content-[&#39;&#39;] group-hover:after:w-full group-hover:after:absolute group-hover:after:bottom-0 group-hover:after:border-b-2 group-hover:after:left-0 group-hover:after:border-primary-600 group-hover:after:focus:border-primary-500"
              >
                <a
                  href=""
                  class="inline-flex justify-center px-4 py-5 text-base text-black group-hover:text-primary-600 group-hover:focus:text-primary-500"
                  ><router-link to="/">{{ $t("nav.Home") }}</router-link>
                </a>
              </div>
            </li>
            <li class="group">
              <router-link to="/shop">
                <div
                  class="relative group-hover:after:content-[&#39;&#39;] group-hover:after:w-full group-hover:after:absolute group-hover:after:bottom-0 group-hover:after:border-b-2 group-hover:after:left-0 group-hover:after:border-primary-600 group-hover:after:focus:border-primary-500"
                >
                  <button
                    class="inline-flex justify-center px-4 py-5 text-base font-medium text-black group-hover:text-primary-600 group-hover:focus:text-primary-500"
                    @mouseenter="open"
                    @click="open"
                  >
                    Shop
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      class="w-5 h-6 ml-2 -mr-1 duration-500 group-hover:transform group-hover:rotate-180 group-hover:text-primary-600 group-hover:focus:text-primary-500"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </div>
              </router-link>
            </li>
            <li class="group">
              <div
                class="relative group-hover:after:content-[&#39;&#39;] group-hover:after:w-full group-hover:after:absolute group-hover:after:bottom-0 group-hover:after:border-b-2 group-hover:after:left-0 group-hover:after:border-primary-600 group-hover:after:focus:border-primary-500"
              >
                <a
                  href=""
                  class="inline-flex justify-center px-4 py-5 text-base text-black group-hover:text-primary-600 group-hover:focus:text-primary-500"
                  ><router-link to="/contact">Contact us</router-link>
                </a>
              </div>
            </li>
            <li class="group">
              <div
                class="relative group-hover:after:content-[&#39;&#39;] group-hover:after:w-full group-hover:after:absolute group-hover:after:bottom-0 group-hover:after:border-b-2 group-hover:after:left-0 group-hover:after:border-primary-600 group-hover:after:focus:border-primary-500"
              >
                <a
                  href=""
                  class="inline-flex justify-center px-4 py-5 text-base text-black group-hover:text-primary-600 group-hover:focus:text-primary-500"
                >
                  <SfIconSearch />
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <!-- shop 底部弹窗 -->
    <div
      v-if="isOpen"
      ref="megaMenuRef"
      :style="style"
      class="left-0 right-0 hidden grid-cols-3 p-6 bg-white shadow-lg outline-none md:grid gap-x-6"
      tabindex="0"
      @mouseleave="close"
      @keydown.esc="focusTrigger"
    >
      <template v-for="node in categoriesContent" :key="node.key">
        <ul class="mt-2 border-l-[1px] first:border-none">
          <li v-for="child in node.children" :key="child.key">
            <div class="flex flex-row items-center justify-center">
              <a
                href=""
                target="_self"
                class="text-black typography-text-base md:typography-text-sm py-4 md:py-1.5 hover:underline group-hover:text-500"
              >
                {{ child.value.label }}
              </a>
            </div>
          </li>
        </ul>
      </template>
    </div>
  </header>
</template>

<script lang="ts" setup>
import LangSelect1 from "./LangSelect.vue";

import {
  // SfIconShoppingCart,
  // SfIconFavorite,
  // SfIconPerson,
  // SfIconClose,
  // SfDrawer,
  // SfListItem,
  useDisclosure,
  useTrapFocus,
  useDropdown,
  // SfInput,
  SfIconSearch,
} from "@storefront-ui/vue";
import { ref, computed } from "vue";
import { unrefElement } from "@vueuse/core";

const { close, open, isOpen } = useDisclosure();
const { referenceRef, floatingRef, style } = useDropdown({
  isOpen,
  onClose: close,
  placement: "bottom-start",
  middleware: [],
});

const drawerRef = ref();
const megaMenuRef = ref();
const triggerRefs = ref();

const trapFocusOptions = {
  activeState: isOpen,
  arrowKeysUpDown: true,
  initialFocus: "container",
} as const;
useTrapFocus(
  computed(() => megaMenuRef.value?.[0]),
  trapFocusOptions,
);
useTrapFocus(drawerRef, trapFocusOptions);

const focusTrigger = () => {
  unrefElement(triggerRefs.value[0]).focus();
};

// const inputValue = ref("");

// const search = () => {
//   alert(`Successfully found 10 results for ${inputValue.value}`);
// };

const categoriesContent = [
  {
    key: "CATEGORIES",
    value: { label: "Categories", counter: 178 },
    isLeaf: false,
    children: [
      {
        key: "ALL_CATEGORIES",
        value: { label: "All Categories", counter: 178, link: "#" },
        isLeaf: true,
      },
      {
        key: "CLOTHING",
        value: { label: "Clothing", counter: 30, link: "#" },
        isLeaf: true,
      },
      {
        key: "SHOES",
        value: { label: "Shoes", counter: 28, link: "#" },
        isLeaf: true,
      },
      {
        key: "ACCESSORIES",
        value: { label: "Accessories", counter: 56, link: "#" },
        isLeaf: true,
      },
      {
        key: "WEARABLES",
        value: { label: "Wearables", counter: 12, link: "#" },
        isLeaf: true,
      },
      {
        key: "FOOD_DRINKS",
        value: { label: "Food & Drinks", counter: 52, link: "#" },
        isLeaf: true,
      },
    ],
  },
  {
    key: "ACTIVITIES",
    value: { label: "Activities", counter: 239 },
    isLeaf: false,
    children: [
      {
        key: "ALL_ACTIVITIES",
        value: { label: "All Activities", counter: 239, link: "#" },
        isLeaf: true,
      },
      {
        key: "FITNESS",
        value: { label: "Fitness", counter: 83, link: "#" },
        isLeaf: true,
      },
      {
        key: "PILATES",
        value: { label: "Pilates", counter: 65, link: "#" },
        isLeaf: true,
      },
      {
        key: "TRAINING",
        value: { label: "Training", counter: 21, link: "#" },
        isLeaf: true,
      },
      {
        key: "CARDIO_WORKOUT",
        value: { label: "Cardio Workout", counter: 50, link: "#" },
        isLeaf: true,
      },
      {
        key: "YOGA",
        value: { label: "Yoga", counter: 20, link: "#" },
        isLeaf: true,
      },
    ],
  },
  {
    key: "DEALS",
    value: { label: "Deals", counter: 98 },
    isLeaf: false,
    children: [
      {
        key: "ALL_DEALS",
        value: { label: "All Deals", counter: 98, link: "#" },
        isLeaf: true,
      },
      {
        key: "OUTLET",
        value: { label: "Outlet", counter: 98, link: "#" },
        isLeaf: true,
      },
    ],
  },
];
</script>
