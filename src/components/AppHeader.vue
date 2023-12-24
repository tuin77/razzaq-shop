<template>
  <header
    class="relative top-0 z-20 w-full duration-200 ease-linear bg-white shadow-base"
  >
    <div
      class="flex items-center justify-between px-4 py-0 pr-0 xl:px-8 xl:container"
    >
      <div class="flex justify-start py-3 shadow">
        <a
          aria-current="page"
          href="https://vuestorefront.io/"
          class="router-link-active router-link-exact-active"
          ><img
            class="hidden w-154 h-33 lg:flex sm:h-10"
            src="../assets/images/logo.svg"
            alt="vsf_logo.svg"
            height="40"
            width="192"
          />
        </a>
      </div>
      <ul class="hidden xl:flex">
        <li>
          <div class="group">
            <div
              class="relative group-hover:after:content-[&#39;&#39;] group-hover:after:w-full group-hover:after:absolute group-hover:after:bottom-0 group-hover:after:border-b-2 group-hover:after:left-0 group-hover:after:border-primary-600 group-hover:after:focus:border-primary-500"
            >
              <a
                href="https://vuestorefront.io/pricing"
                class="inline-flex justify-center px-4 py-5 text-base text-black group-hover:text-primary-600 group-hover:focus:text-primary-500"
                >Home
              </a>
            </div>
          </div>
        </li>
        <li>
          <div class="group">
            <div class="inline-block text-left">
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

            </div>
          </div>
        </li>
        <li>
          <div class="group">
            <div
              class="relative group-hover:after:content-[&#39;&#39;] group-hover:after:w-full group-hover:after:absolute group-hover:after:bottom-0 group-hover:after:border-b-2 group-hover:after:left-0 group-hover:after:border-primary-600 group-hover:after:focus:border-primary-500"
            >
              <a
                href="https://vuestorefront.io/pricing"
                class="inline-flex justify-center px-4 py-5 text-base font-medium text-black group-hover:text-primary-600 group-hover:focus:text-primary-500"
                data-analytics-type="Click"
                data-analytics-label="Nav card Pricing"
                >Contact us
              </a>
            </div>
          </div>
        </li>
        <li>
          <div class="group">
            <div class="inline-block text-left">
              <div
                class="relative group-hover:after:content-[&#39;&#39;] group-hover:after:w-full group-hover:after:absolute group-hover:after:bottom-0 group-hover:after:border-b-2 group-hover:after:left-0 group-hover:after:border-primary-600 group-hover:after:focus:border-primary-500"
              >
                <button
                  data-analytics-type="Click"
                  data-analytics-label="Solutions"
                  class="inline-flex justify-center px-4 py-5 text-base font-medium text-black group-hover:text-primary-600 group-hover:focus:text-primary-500"
                >
                  <SfIconSearch />
                </button>
              </div>

            </div>
          </div>
        </li>
        <SfButton
          class="hidden text-white bg-transparent md:flex font-body hover:bg-primary-800 hover:text-white active:bg-primary-900 active:text-white"
          :aria-haspopup="true"
          :aria-expanded="isOpen"
          variant="tertiary"
          square
          @click="toggle()"
        >
          <span class="hidden px-2 md:inline-flex whitespace-nowrap">Home</span>
        </SfButton>
        <nav>
          <ul>
            <li role="none">
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
            </li>
          </ul>
        </nav>
      </ul>
      <div class="hidden xl:flex gap-[20px]">
        <div class="items-center justify-center hidden xl:flex">
          <!-- <a
            href="https://github.com/vuestorefront"
            target="_blank"
            data-analytics-type="Click"
            data-analytics-label="Nav github star"
            ><img
              class="h-[20px] w-auto object-contain"
              src="./Frontend as a Service for composable commerce _ Vue Storefront_files/github-star-nav-top.svg"
              alt="github-star-nav-top.svg"
          /></a> -->
          <div
            class="bg-white border-gray-200 p-[20px] inline-flex text-primary-500 hover:text-primary-700 hover:cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              aria-hidden="true"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </div>
        </div>
        <div class="items-center justify-end hidden xl:flex">
          <a
            href="https://vuestorefront.io/request-demo"
            class="font-sans bg-gray-800 border-none hover:bg-primary-600 focus:bg-primary-700 focus:outline-2 text-white font-normalfocus:shadow-sm focus:ring-2 focus:ring-offset-2 focus:ring-offset focus:ring-primary-500 px-3 py-1.5 text-xs button-transition flex items-center justify-center border tracking-wideborder-transparent text-base font-medium rounded-md whitespace-nowrap font-normal !text-[14px]"
            title="REQUEST DEMO"
            data-analytics-type="Click"
            data-analytics-label="Nav request demo"
            target="_self"
            ><!---->
            REQUEST DEMO
            <!----><!----></a
          >
        </div>
      </div>
      <div class="flex xl:hidden gap-[20px]">
        <div class="flex items-center justify-center">
          <a href="https://github.com/vuestorefront" target="_blank"
            ><img
              class="h-[20px] w-auto object-contain"
              src="./Frontend as a Service for composable commerce _ Vue Storefront_files/github-star-nav-top.svg"
              alt="github-star-nav-top.svg"
          /></a>
        </div>
        <div
          class="bg-white border-l-[1px] border-gray-200 p-[20px] inline-flex text-primary-500 hover:text-primary-700 hover:bg-primary-100 hover:cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            aria-hidden="true"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </div>
      </div>
      <!---->
    </div>
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
