<template>
  <header>
    <nav class="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
      <div
        class="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto"
      >
        <a href="https://flowbite.com" class="flex items-center">
          <img
            src="../assets/images/logo.svg"
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
            class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0"
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
          </ul>
        </div>
      </div>
    </nav>

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
                  class="grid grid-cols-1 md:gap-x-6 md:grid-cols-3 bg-white shadow-lg p-0 max-h-screen overflow-y-auto md:!absolute md:!top-[5rem] max-w-[376px] md:max-w-full md:p-6 mr-[50px] md:mr-0"
                >
                  <div
                    class="sticky top-0 flex items-center justify-between py-2 px-4 bg-primary-700 md:hidden w-full max-w-[376px]"
                  >
                    <div
                      class="flex items-center font-medium text-white typography-text-lg"
                    >
                      Browse products
                    </div>
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
                  <div
                    v-for="{ heading, items } in categoriesContent"
                    :key="heading"
                    class="[&:nth-child(2)]:pt-0 pt-6 md:pt-0 border-l-[1px]"
                  >
                    <ul>
                      <li v-for="item in items" :key="item.title">
                        <div class="flex flex-row items-center justify-center">
                          <a
                            href="https://vuestorefront.io/lp/workshop-registration"
                            target="_self"
                            class="text-black typography-text-base md:typography-text-sm py-4 md:py-1.5  hover:underline group-hover:text-500"
                            >{{ item.title }}
                          </a
                          >
                        </div>
                      </li>
                    </ul>
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
</template>

<script lang="ts" setup>
import {
  SfButton,
  SfDrawer,
  SfIconShoppingCart,
  SfIconFavorite,
  SfIconPerson,
  SfIconClose,
  SfIconExpandMore,
  SfListItem,
  useDisclosure,
  useTrapFocus,
  SfIconMenu,
  SfInput,
  SfIconSearch,
} from "@storefront-ui/vue";
import { ref } from "vue";
import { onClickOutside } from "@vueuse/core";
import LangSelect from "./LangSelect.vue";
import LangSelect1 from "./LangSelect1.vue";

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

const inputValue = ref("");

const search = () => {
  alert(`Successfully found 10 results for ${inputValue.value}`);
};

const actionItems = [
  {
    icon: SfIconShoppingCart,
    label: "",
    ariaLabel: "Cart",
    role: "button",
  },
  {
    icon: SfIconFavorite,
    label: "",
    ariaLabel: "Wishlist",
    role: "button",
  },
  {
    icon: SfIconPerson,
    label: "Log in",
    ariaLabel: "Log in",
    role: "login",
  },
];
const bannerDetails = {
  image:
    "https://storage.googleapis.com/sfui_docs_artifacts_bucket_public/production/watch.png",
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
