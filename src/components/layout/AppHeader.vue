<template>
  <header ref="referenceRef">
    <nav class="bg-white border-gray-200 px-4 lg:px-6 py-2.5" ref="floatingRef">
      <div
        class="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto"
      >
        <a href="https://flowbite.com" class="flex items-center">
          <img
            src="../../assets/images/logo.svg"
            class="h-6 mr-3 sm:h-9"
            alt="Flowbite Logo"
          />
        </a>
        <div class="flex items-center lg:order-2">
          <a
            href="#"
            class="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            ><RouterLink to="/login" tag="span">Log in</RouterLink>
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
            <svg
              class="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <svg
              class="hidden w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div
          class="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1"
          id="mobile-menu-2"
        >
          <ul
            class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 hidden md:flex  bg-white border-b border-b-neutral-200 border-b-solid" 
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
                  ><router-link tag="span" to="/">Home</router-link>
                </a>
              </div>
            </li>
            <li class="group">
              <router-link tag="span" to="/shop">
                <div
                  class="relative group-hover:after:content-[&#39;&#39;] group-hover:after:w-full group-hover:after:absolute group-hover:after:bottom-0 group-hover:after:border-b-2 group-hover:after:left-0 group-hover:after:border-primary-600 group-hover:after:focus:border-primary-500"
                >
                  <button
                    class="inline-flex justify-center px-4 py-5 text-base font-medium text-black group-hover:text-primary-600 group-hover:focus:text-primary-500"
                    @click="toggle()"
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
                  ><router-link tag="span" to="/contact"
                    >Contact us</router-link
                  >
                </a>
              </div>
            </li>
            <li class="group">
              <div
                class="relative group-hover:after:content-[&#39;&#39;] group-hover:after:w-full group-hover:after:absolute group-hover:after:bottom-0 group-hover:after:border-b-2 group-hover:after:left-0 group-hover:after:border-primary-600 group-hover:after:focus:border-primary-500"
              >
                <a
                  href="https://vuestorefront.io/pricing"
                  class="inline-flex justify-center px-4 py-5 text-base text-black group-hover:text-primary-600 group-hover:focus:text-primary-500"
                >
                  <SfIconSearch />
                </a>
              </div>
            </li>
          <li v-for="(menuNode, index) in content.children" :key="menuNode.key">
            <SfButton
              ref="triggerRefs"
              variant="tertiary"
              class="group mr-2 !text-neutral-900 hover:!bg-white hover:!text-neutral-700 active:!bg-white active:!text-neutral-900"
              @mouseenter="openMenu([menuNode.key])"
              @click="openMenu([menuNode.key])"
            >
              <span>{{ menuNode.value.label }}</span>
              <SfIconChevronRight
                class="rotate-90 text-neutral-500 group-hover:text-neutral-700 group-active:text-neutral-900"
              />
            </SfButton>

            <div
              v-if="isOpen && activeNode.length === 1 && activeNode[0] === menuNode.key"
              :key="activeMenu.key"
              ref="megaMenuRef"
              :style="style"
              class="hidden md:grid gap-x-6 grid-cols-4 bg-white shadow-lg p-6 left-0 right-0 outline-none"
              tabindex="0"
              @mouseleave="close()"
              @keydown.esc="focusTrigger(index)"
            >
              <template v-for="node in activeMenu.children" :key="node.key">
                <template v-if="node.isLeaf">
                  <SfListItem tag="a" size="sm" :href="node.value.link" class="typography-text-sm mb-2">
                    {{ node.value.label }}
                  </SfListItem>
                  <div class="col-start-2 col-end-5" />
                </template>
                <div v-else>
                  <p
                    class="typography-text-base font-medium text-neutral-900 whitespace-nowrap px-4 py-1.5 border-b border-b-neutral-200 border-b-solid"
                  >
                    {{ node.value.label }}
                  </p>
                  <ul class="mt-2">
                    <li v-for="child in node.children" :key="child.key">
                      <SfListItem tag="a" size="sm" :href="child.value.link" class="typography-text-sm py-1.5">
                        {{ child.value.label }}
                      </SfListItem>
                    </li>
                  </ul>
                </div>
              </template>
              <div
                class="flex flex-col items-center justify-center overflow-hidden rounded-md bg-neutral-100 border-neutral-300 grow"
              >
                <img :src="bannerNode.value.banner" :alt="bannerNode.value.bannerTitle" class="object-contain" />
                <p class="px-4 mt-4 mb-4 font-medium text-center typography-text-base">
                  {{ bannerNode.value.bannerTitle }}
                </p>
              </div>
            </div>
          </li>
          </ul>
  
        </div>
      </div>
    </nav>

 
  </header>
</template>

<script lang="ts" setup>

import LangSelect1 from "./LangSelect.vue";





import {
  SfIconShoppingCart,
  SfIconFavorite,
  SfIconPerson,
  SfIconClose,
  SfButton,
  SfDrawer,
  SfListItem,
  SfIconChevronRight,
  SfIconMenu,
  SfCounter,
  SfIconArrowBack,
  useDisclosure,
  useTrapFocus,
  useDropdown,
  SfInput,
  SfIconSearch,
} from '@storefront-ui/vue';
import { ref, computed } from 'vue';
import { unrefElement } from '@vueuse/core';

const findNode = (keys: string[], node: Node): Node => {
  if (keys.length > 1) {
    const [currentKey, ...restKeys] = keys;
    return findNode(restKeys, node.children?.find((child) => child.key === currentKey) || node);
  } else {
    return node.children?.find((child) => child.key === keys[0]) || node;
  }
};

const { close, open, isOpen } = useDisclosure();
const { referenceRef, floatingRef, style } = useDropdown({
  isOpen,
  onClose: close,
  placement: 'bottom-start',
  middleware: [],
});

const drawerRef = ref();
const megaMenuRef = ref();
const triggerRefs = ref();
const activeNode = ref<string[]>([]);

const activeMenu = computed(() => findNode(activeNode.value, content));
const bannerNode = computed(() => findNode(activeNode.value.slice(0, 1), content));

const trapFocusOptions = {
  activeState: isOpen,
  arrowKeysUpDown: true,
  initialFocus: 'container',
} as const;
useTrapFocus(
  computed(() => megaMenuRef.value?.[0]),
  trapFocusOptions,
);
useTrapFocus(drawerRef, trapFocusOptions);

const openMenu = (menuType: string[]) => {
  activeNode.value = menuType;
  open();
};

const goBack = () => {
  activeNode.value = activeNode.value.slice(0, activeNode.value.length - 1);
};

const goNext = (key: string) => {
  activeNode.value = [...activeNode.value, key];
};

const focusTrigger = (index: number) => {
  unrefElement(triggerRefs.value[index]).focus();
};

const inputValue = ref('');

const search = () => {
  alert(`Successfully found 10 results for ${inputValue.value}`);
};

const actionItems = [
  {
    icon: SfIconShoppingCart,
    label: '',
    ariaLabel: 'Cart',
    role: 'button',
  },
  {
    icon: SfIconFavorite,
    label: '',
    ariaLabel: 'Wishlist',
    role: 'button',
  },
  {
    icon: SfIconPerson,
    label: 'Log in',
    ariaLabel: 'Log in',
    role: 'login',
  },
];

type Node = {
  key: string;
  value: {
    label: string;
    counter: number;
    link?: string;
    banner?: string;
    bannerTitle?: string;
  };
  children?: Node[];
  isLeaf: boolean;
};

const content: Node = {
  key: 'root',
  value: { label: '', counter: 0 },
  isLeaf: false,
  children: [
    {
      key: 'WOMEN',
      value: {
        label: 'Women',
        counter: 515,
        banner: 'https://storage.googleapis.com/sfui_docs_artifacts_bucket_public/production/glasses.png',
        bannerTitle: 'The world in a new light',
      },
      isLeaf: false,
      children: [
        {
          key: 'ALL_WOMEN',
          value: { label: "All Women's", counter: 515, link: '#' },
          isLeaf: true,
        },
        {
          key: 'CATEGORIES',
          value: { label: 'Categories', counter: 178 },
          isLeaf: false,
          children: [
            {
              key: 'ALL_CATEGORIES',
              value: { label: 'All Categories', counter: 178, link: '#' },
              isLeaf: true,
            },
            {
              key: 'CLOTHING',
              value: { label: 'Clothing', counter: 30, link: '#' },
              isLeaf: true,
            },
            {
              key: 'SHOES',
              value: { label: 'Shoes', counter: 28, link: '#' },
              isLeaf: true,
            },
            {
              key: 'ACCESSORIES',
              value: { label: 'Accessories', counter: 56, link: '#' },
              isLeaf: true,
            },
            {
              key: 'WEARABLES',
              value: { label: 'Wearables', counter: 12, link: '#' },
              isLeaf: true,
            },
            {
              key: 'FOOD_DRINKS',
              value: { label: 'Food & Drinks', counter: 52, link: '#' },
              isLeaf: true,
            },
          ],
        },
        {
          key: 'ACTIVITIES',
          value: { label: 'Activities', counter: 239 },
          isLeaf: false,
          children: [
            {
              key: 'ALL_ACTIVITIES',
              value: { label: 'All Activities', counter: 239, link: '#' },
              isLeaf: true,
            },
            {
              key: 'FITNESS',
              value: { label: 'Fitness', counter: 83, link: '#' },
              isLeaf: true,
            },
            {
              key: 'PILATES',
              value: { label: 'Pilates', counter: 65, link: '#' },
              isLeaf: true,
            },
            {
              key: 'TRAINING',
              value: { label: 'Training', counter: 21, link: '#' },
              isLeaf: true,
            },
            {
              key: 'CARDIO_WORKOUT',
              value: { label: 'Cardio Workout', counter: 50, link: '#' },
              isLeaf: true,
            },
            {
              key: 'YOGA',
              value: { label: 'Yoga', counter: 20, link: '#' },
              isLeaf: true,
            },
          ],
        },
        {
          key: 'DEALS',
          value: { label: 'Deals', counter: 98 },
          isLeaf: false,
          children: [
            {
              key: 'ALL_DEALS',
              value: { label: 'All Deals', counter: 98, link: '#' },
              isLeaf: true,
            },
            {
              key: 'OUTLET',
              value: { label: 'Outlet', counter: 98, link: '#' },
              isLeaf: true,
            },
          ],
        },
      ],
    },
  ],
};
</script>
