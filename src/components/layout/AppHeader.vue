<template>
  <header ref="referenceRef">
    <nav :class="['relative bg-white pl-4 lg:px-6 z-30']" ref="floatingRef">
      <div class="flex flex-wrap items-center justify-between mx-auto max-w-1620">
        <RouterLink :to="{ name: 'home' }">
          <img src="../../assets/images/logo.svg" class="w-20 h-4 md:w-[9.625rem] md:h-[2.125rem]" alt="Flowbite Logo" />
        </RouterLink>
        <div class="flex items-center lg:order-2">
          <RouterLink to="/login" v-if="!member.isLogin">
            <span href="#" class="hidden md:block text-2xl font-light text-black px-4 lg:px-5 py-2 lg:py-2.5 mr-2"> Sign in </span>
          </RouterLink>
          <LangSelect></LangSelect>

          <RightDrawer></RightDrawer>
        </div>
        <div class="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
          <nav ref="floatingRef">
            <ul
              class="hidden px-6 text-2xl font-light text-black bg-white md:flex"
              @blur="
                (event) => {
                  if (!(event.currentTarget as Element).contains(event.relatedTarget as Element)) {
                    close();
                  }
                }
              "
            >
              <li v-for="menuNode in menus" :key="menuNode.key" class="relative mx-4 group">
                <button
                  v-if="menuNode.key !== 'search'"
                  ref="triggerRefs"
                  variant="tertiary"
                  @mouseenter="openMenu(menuNode.key)"
                  :class="[
                    'inline-flex justify-center items-center py-34px group-hover:text-primary-600 group-hover:focus:text-primary-500 group-hover:after:w-full group-hover:after:absolute group-hover:after:bottom-8 group-hover:after:border-b group-hover:after:left-0 group-hover:after:border-primary-600 group-hover:after:focus:border-primary-500',
                    isActiveClass(menuNode.key),
                  ]"
                  @click="handleMenuClick(menuNode.key)"
                >
                  {{ $t(`nav.${menuNode.label}`) }}
                  <svg
                    v-if="menuNode.key === 'shop'"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    :class="[
                      'w-5 h-6 ml-2 -mr-1 duration-500 group-hover:transform  group-hover:text-primary-600 group-hover:focus:text-primary-500',
                      isOpen ? 'rotate-180' : '',
                    ]"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
                <div v-else class="relative flex justify-center mx-4 py-34px mt-1.5" @click="openMenu(menuNode.key)">
                  <img src="../../assets/images/home/icon-nav-search.svg" class="w-5 h-5 cursor-pointer" />
                </div>
              </li>
            </ul>
          </nav>
          <div
            key="Shop"
            v-if="isOpen && activeNode === 'shop'"
            ref="megaMenuRef"
            :style="style"
            class="left-0 right-0 hidden bg-white border-t border-gray-100 shadow-lg outline-none md:block"
            tabindex="0"
            @mouseleave="close()"
            @keydown.esc="focusTrigger(1)"
          >
            <div class="grid grid-cols-3 px-6 pt-[78px] mx-auto pb-[108px] max-w-1620">
              <ul v-for="node in home.categoryList" :key="node.id" class="mt-2 border-l-[1px] border-gray-100 first:border-none">
                <li v-for="item in node.children" :key="item.id" class="flex items-center justify-center pb-34px last:pb-0">
                  <span
                    class="text-lg cursor-pointer text-bold-100 hover:underline hover:font-bold hover:decoration-primary-700"
                    @click="toPageShop(item)"
                    >{{ item.name }}
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div
            v-if="isOpen && activeNode === 'search'"
            key="Search"
            ref="megaMenuRef"
            class="absolute h-[700px] left-0 top-0 w-full z-40 flex flex-col bg-white shadow-lg outline-none"
            tabindex="0"
            @mouseleave="close()"
            @keydown.esc="focusTrigger(3)"
          >
            <div class="flex items-center h-[100px] w-full border-b border-gray-100" style="padding: 0 calc(50% - 810px)">
              <SfInput
                wrapper-class="!ring-0 flex-1 w-full"
                size="lg"
                ref="inputRef"
                v-model="inputModel"
                aria-label="Search"
                placeholder="please enter"
                @focus="open"
              >
                <template #prefix><SfIconSearch /> </template
              ></SfInput>
              <SfButton
                square
                variant="tertiary"
                aria-label="Close navigation menu"
                class="ml-2 text-block"
                @click="close()"
                @keydown.enter.space="close()"
              >
                <SfIconClose />
              </SfButton>
            </div>
            <div class="flex-1 h-[600px] flex" style="padding: 0 calc(50% - 810px)">
              <ul class="overflow-y-auto max-h-[600px] h-[600px] w-[357px]">
                <li class="pt-[72px] mb-34px">MOST POPULAR SEARCHES</li>
                <template v-for="{ children } in categoriesContent">
                  <li
                    v-for="{ value } in children"
                    :key="value.label"
                    class="text-lg mb-34px hover:underline hover:decoration-primary-700 group-hover:font-bold"
                  >
                    {{ `${value.label}` }}
                  </li>
                </template>
              </ul>
              <div class="pt-72px">
                <p class="text-lg font-bold text-bold-100">MOST POPULAR SEARCHES</p>

                <div class="mt-10 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-[130px] lg:space-y-0">
                  <div class="relative group">
                    <div class="relative w-[333px] h-[348px] overflow-hidden rounded-20">
                      <img
                        src="https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg"
                        alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug."
                        class="object-cover object-center w-full h-full group-hover:opacity-75"
                      />
                      <img
                        src="../../assets/images/shop/collect-icon.svg"
                        class="group-hover:visible invisible w-[28px] h-[24px] absolute right-5 top-5"
                        alt=""
                        srcset=""
                      />
                      <div class="absolute bottom-0 left-0 invisible w-full py-4 text-lg text-center group-hover:visible">
                        <button class="text-2xl text-white px-[62px] py-[9px] bg-primary-600 rounded-100">Buy</button>
                      </div>
                    </div>
                    <p class="text-lg mt-30px text-blod-100">Colorful Sunflower Plush Comfy</p>
                  </div>
                  <div class="relative group">
                    <div class="relative w-[333px] h-[348px] overflow-hidden rounded-20 group-hover:opacity-75">
                      <img
                        src="https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg"
                        alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug."
                        class="object-cover object-center w-full h-full"
                      />
                    </div>
                    <p class="text-lg mt-30px text-blod-100">Colorful Sunflower Plush Comfy</p>
                  </div>
                  <div class="relative group">
                    <div class="relative w-[333px] h-[348px] overflow-hidden rounded-20 group-hover:opacity-75">
                      <img
                        src="https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg"
                        alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug."
                        class="object-cover object-center w-full h-full"
                      />
                    </div>
                    <p class="text-lg mt-30px text-blod-100">Colorful Sunflower Plush Comfy</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
  <!-- -->
  <div
    v-if="isOpen"
    class="fixed inset-0 z-10 bg-opacity-50 bg-neutral-500"
    @wheel.prevent
    @mousewheel.prevent
    @touchmove.prevent
    @touchstart.prevent
    @click.stop
  ></div>
</template>

<script lang="ts" setup>
import LangSelect from "./LangSelect.vue";
import RightDrawer from "./RightDrawer.vue";

import { useDisclosure, useTrapFocus, useDropdown, SfIconSearch, SfInput, SfIconClose } from "@storefront-ui/vue";
import { ref, computed } from "vue";
import { unrefElement } from "@vueuse/core";
import useStore from "@/stores";
const { member, home } = useStore();
import { Category } from "@/types";

const { close, open, isOpen } = useDisclosure();
const { referenceRef, floatingRef, style } = useDropdown({
  isOpen,
  onClose: close,
  placement: "bottom-start",
  middleware: [],
});

const inputModel = ref("");

const drawerRef = ref();
const megaMenuRef = ref();
const triggerRefs = ref();
const activeNode = ref<string>("");

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
const handleMenuClick = (menuType: string) => {
  if (menuType === "home") router.push("/");
  if (menuType === "shop") router.push("/shop");
  if (menuType === "contact") router.push("/contact");
  openMenu(menuType);
};
const openMenu = (menuType: string) => {
  activeNode.value = menuType;

  if (menuType === "search" || menuType === "shop") {
    open();
  } else {
    close();
  }
};

const focusTrigger = (index: number) => {
  unrefElement(triggerRefs.value[index]).focus();
};

const menus = [
  { key: "home", label: "Home" },
  { key: "shop", label: "Shop" },
  { key: "contact", label: "Contact us" },
  { key: "search", label: "Search" },
];

import { toRaw } from "vue";
import { useRouter } from "vue-router";
const _activeClass = "text-primary-600 after:w-full after:absolute after:bottom-8 after:border-b after:left-0 after:border-primary-600";

let router = useRouter();
const currentRouteName = computed(() => toRaw(router).currentRoute.value.name);
console.log(currentRouteName.value);

const isActiveClass = computed(() => (tab: string) => (currentRouteName.value === tab.toLocaleLowerCase() ? _activeClass : ""));
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

home.getAllCategory();
// home.getHomeBannerList();
const toPageShop = (item: Category) => {
  router.push({ name: `shop`, query: { id: item.id, category: item.name } });
};
</script>
