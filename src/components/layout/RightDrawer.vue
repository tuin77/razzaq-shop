<template>
  <SfButton tag="span" class="!text-bold-100 relative" square variant="tertiary" @click="open = true" aria-controls="mobile-menu-2">
    <SfIconMenu /> <SfBadge class="!bg-red-500" :content="content"
  /></SfButton>

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
      @click.stop
    />
  </transition>

  <SfDrawer
    v-model="open"
    placement="right"
    class="bg-white z-1000 h-[100vh] w-[445px] z-30"
    @wheel.prevent
    @mousewheel.prevent
    @touchmove.prevent
    @touchstart.prevent
    @click.stop
  >
    <div class="relative flex flex-col h-full">
      <div href="" class="flex items-center justify-between h-[100px] py-[33px] px-[30px] border-b-[1px] border-gray-100">
        <img src="../../assets/images/logo.svg" class="w-[154px] h-[34px] mr-3 sm:h-9" alt="Flowbite Logo" />

        <SfButton
          square
          variant="tertiary"
          aria-label="Close navigation menu"
          class="!text-bold-100 ml-auto rounded-md hover:bg-positive-200"
          @click="close()"
          @keydown.enter.space="close()"
        >
          <SfIconClose size="base" />
        </SfButton>
      </div>

      <SfListItem class="w-full px-[30px] py-[30px] mt-[38px]">
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
        <template #suffix> <SfCounter size="sm" pill class="text-white !px-1.5 bg-red-500 ring-white"> 2 </SfCounter></template>
      </SfListItem>
      <div class="flex items-center justify-between px-[30px] mt-auto mb-[57px]">
        <span class="text-lg text-gray-200">contact us</span>
        <img src="../../assets/images/home/nav-medium-icons.png" class="w-[196px] h-[40px] cursor-pointer" alt="" srcset="" />
      </div>
    </div>
  </SfDrawer>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";
import { SfDrawer, SfButton, SfIconClose, SfCounter, SfListItem, SfIconMenu, SfBadge } from "@storefront-ui/vue";
import { ref } from "vue";
const content = ref(10);
const router = useRouter();

const open = ref(false);

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
</script>
