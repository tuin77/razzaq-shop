<template>
  <SfButton tag="span" class="!text-bold-100 relative m-1.5 mr-2" square variant="tertiary" @click="open = true" aria-controls="mobile-menu-2">
    <SfIconMenu size="lg" />
    <SfBadge
      v-if="cart.effectiveListCounts"
      class="!bg-red-500 !py-0 top-1 right-1 !text-xs md:!text-base md:top-[-8px] md:right-[-8px] md:px-2 md:py-0.5"
      :content="9"
    />
    <!-- cart.effectiveListCounts -->
  </SfButton>

  <transition
    enter-active-class="transition duration-200 ease-out"
    leave-active-class="transition duration-200 ease-out"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div
      v-if="open"
      class="fixed inset-0 z-20 bg-opacity-50 bg-neutral-700"
      @wheel.prevent
      @mousewheel.prevent
      @touchmove.prevent
      @touchstart.prevent
    />
  </transition>
  <SfDrawer v-model="open" placement="right" class="md:right-0 w-[300px] md:w-[445px] bg-white z-1000 h-[100vh] z-30" @wheel.prevent>
    <div class="relative flex flex-col h-full">
      <div href="" class="flex items-center justify-between py-[18px] md:py-[33px] px-5 border-b-[1px] border-gray-100">
        <img src="../../assets/images/logo.svg" class="w-20 h-4 md:w-[154px] md:h-[34px] mr-3 sm:h-9" alt="Flowbite Logo" />

        <SfButton
          square
          variant="tertiary"
          aria-label="Close navigation menu"
          class="!p-0 !text-base !text-2xl !text-bold-100 ml-auto rounded-md hover:bg-positive-200"
          @click="close()"
          @keydown.enter.space="close()"
        >
          <SfIconClose class="!text-base" />
        </SfButton>
      </div>
      <div class="flex items-center p-4 md:hidden">
        <SfInput
          wrapper-class="!ring-0 !rounded-10 flex-1 w-full !bg-neutral-100 drawer-search"
          size="lg"
          ref="inputRef"
          v-model="inputModel"
          aria-label="Search"
          placeholder="please enter"
          @focus="open"
        >
          <template #prefix><SfIconSearch /> </template
        ></SfInput>
      </div>

      <div class="flex justify-center px-4 md:hidden">
        <div
          v-for="page in pages"
          :key="page"
          :class="['text-center flex-1 pt-1 border-b-4 border-transparent', { 'font-medium border-b-4 !border-primary-700': selectedPage === page }]"
        >
          <button
            type="button"
            :class="[
              'min-w-[38px] px-3 px-4 py-3  text-neutral-500 rounded-md  hover:text-primary-800  active:text-primary-900',
              { '!text-neutral-900 hover:!text-primary-800 active:!text-primary-900': selectedPage === page },
            ]"
            :aria-current="selectedPage === page"
            @click="selectedPage = page"
          >
            {{ page }}
          </button>
        </div>
      </div>
      <template v-if="selectedPage === 'Menu'">
        <SfListItem class="w-full px-[30px] py-[30px] mt-7">
          <template #prefix>
            <img src="../../assets/images/home/icon-nav-account.svg" class="object-contain w-[21px] h-[21px] text-blod" />
          </template>
          <span class="text-lg font-bold text-bold-100 ml-[24px]"> my account </span>
        </SfListItem>
        <SfListItem class="w-full px-[30px] py-[30px] mt-[4px]" @click="toPageCart">
          <template #prefix>
            <img src="../../assets/images/home/icon-nav-cart.svg" class="object-contain w-[21px] h-[21px] text-blod" />
          </template>
          <span class="text-lg font-bold text-bold-100 ml-[24px]"> wishlist </span>
          <template #suffix> <SfCounter size="sm" pill class="text-white !px-1.5 bg-red-500 ring-white"> 32 </SfCounter></template>
        </SfListItem>
        <SfListItem class="w-full px-[30px] py-[30px] mt-[4px]" @click="toPageWishlist">
          <template #prefix>
            <img src="../../assets/images/home/icon-nav-wishlist.svg" class="object-contain w-[21px] h-[21px] text-blod" />
          </template>
          <span class="text-lg font-bold text-bold-100 ml-[24px]"> shopping cart </span>
          <template #suffix>
            <SfCounter size="sm" pill class="text-white !px-1.5 bg-red-500 ring-white"> {{ cart.effectiveListCounts }} </SfCounter>
          </template>
        </SfListItem>
        <div v-if="member.isLogin" class="p-4 mt-20">
          <span href="#" class="p-5 px-4 py-2 cursor-pointer" @click="handleSignOut"> Sign out </span>
        </div>
        <div class="md:flex items-center md:justify-between pl-5 md:px-[30px] mt-auto mb-10 md:mb-[57px]">
          <div class="mb-5 text-sm text-gray-200 md:mb-0 md:text-lg">contact us</div>
          <img src="../../assets/images/home/nav-medium-icons.png" class="w-[196px] h-[40px] cursor-pointer" alt="" srcset="" />
        </div>
      </template>
      <template v-else-if="selectedPage === 'Category'">
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
      </template>
    </div>
  </SfDrawer>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";
import { SfDrawer, SfButton, SfIconClose, SfIconSearch, SfCounter, SfListItem, SfIconMenu, SfBadge, SfInput } from "@storefront-ui/vue";
import { ref } from "vue";
const router = useRouter();

const open = ref(false);

const inputModel = ref("");
const close = () => {
  open.value = false;
};
const toPageWishlist = () => {
  console.log("handleClick");
  router.push({
    path: "/cart",
    query: { mode: "edit" },
  });
  open.value = false;
};
const toPageCart = () => {
  console.log("handleClick");
  router.push({
    path: "/wish",
    query: { mode: "edit" },
  });
  open.value = false;
};

import useStore from "@/stores";

const { cart, member } = useStore();
cart.getCartList();

const selectedPage = ref("Menu");
const pages = ["Menu", "Category"];
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
const handleSignOut = () => {
  const accessInfo = { accessToken: "", refreshToken: "", expiresTime: "" };
  member.setAccessInfo(accessInfo);
  open.value = false;
  router.push({ name: "home" });
};
</script>
<style scoped></style>
