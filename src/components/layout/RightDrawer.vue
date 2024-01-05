<template>
  <SfButton tag="span" class="!text-bold-100 relative" square variant="tertiary" @click="open = true" aria-controls="mobile-menu-2">
    <SfIconMenu /> <SfBadge class="!bg-primary-700" :content="content"
  /></SfButton>

  <transition
    enter-active-class="transition duration-200 ease-out"
    leave-active-class="transition duration-200 ease-out"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div v-if="open" class="fixed inset-0 z-20 bg-opacity-50 bg-neutral-700" @touchmove.prevent @touchstart.prevent @click.stop />
  </transition>

  <SfDrawer v-model="open" placement="right" class="bg-white z-1000 h-[100vh] w-[445px] z-30">
    <div class="relative h-full">
      <div href="" class="flex items-center justify-between h-[100px] py-[33px] px-[30px] border-b-[1px] border-gray-100">
        <img src="../../assets/images/logo.svg" class="w-[154px] h-[34px] mr-3 sm:h-9" alt="Flowbite Logo" />

        <SfButton
          square
          variant="tertiary"
          aria-label="Close navigation menu"
          class="ml-2 !text-bold-100 ml-auto rounded-md text-positive-700 hover:bg-positive-200"
          @click="close()"
          @keydown.enter.space="close()"
        >
          <SfIconClose size="base" />
        </SfButton>
      </div>

      <SfListItem class="w-full px-[30px]">
        <template #prefix>
          <img src="../../assets/images/home/icon-nav-account.svg" class="object-contain w-[21px] h-[21px] text-blod" />
        </template>
        <span class="text-lg text-blod text-bold-100 ml-[24px]"> my account </span>
        <template #suffix> <SfCounter size="lg" pill class="text-white bg-secondary-700 ring-white"> 123 </SfCounter></template>
      </SfListItem>
      <div class="flex items-center justify-between b-0 l-0">
        <span>contact us</span>
        <div></div>
      </div>
    </div>
  </SfDrawer>
</template>

<script lang="ts" setup>
import { SfDrawer, SfButton, SfIconClose, SfCounter, SfListItem, SfIconMenu, SfBadge } from "@storefront-ui/vue";
import { ref } from "vue";
const content = ref(10);

const open = ref(false);

const close = () => {
  open.value = false;
};
</script>
