<template>
  <header ref="referenceRef">
    <nav class="relative z-30 px-4 bg-white border border-gray-100 border-solid lg:px-6" ref="floatingRef">
      <div class="flex flex-wrap items-center justify-between mx-auto max-w-1620">
        <a href="" class="flex items-center">
          <img src="../../assets/images/logo.svg" class="w-[9.625rem] h-[2.125rem] sm:h-9" alt="Flowbite Logo" />
        </a>
        <div class="flex items-center lg:order-2">
          <LangSelect></LangSelect>
        </div>
        <div class="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
          <nav ref="floatingRef">
            <ul class="hidden px-6 text-2xl font-light text-black bg-white md:flex">
              <li v-for="menuNode in menus" :key="menuNode.key" class="relative flex items-center justify-center mx-4 py-34px">
                <SfRadio
                  :modelValue="radioGroupModelValue"
                  :value="menuNode.key"
                  :name="menuNode.key"
                  @click.prevent
                  class="!cursor-default hover:border-neutral-500"
                />
                <span class="pl-2 text-xl font-light text-bold-100"> {{ $t(`nav.${menuNode.label}`) }}</span>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </nav>
  </header>
</template>

<script lang="ts" setup>
import { SfRadio } from "@storefront-ui/vue";
import LangSelect from "./LangSelect.vue";

import { useDisclosure, useTrapFocus, useDropdown } from "@storefront-ui/vue";
import { ref, computed } from "vue";
import { unrefElement } from "@vueuse/core";

const { close, isOpen } = useDisclosure();

const radioGroupModelValue = ref("order");

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

const menus = [
  { key: "home", label: "cart" },
  { key: "order", label: "Information" },
  { key: "finish", label: "Finish" },
];

import { toRaw } from "vue";
import { useRouter } from "vue-router";
const _activeClass = "text-primary-600 after:w-full after:absolute after:bottom-8 after:border-b after:left-0 after:border-primary-600";

let router = useRouter();
const currentRouteName = computed(() => toRaw(router).currentRoute.value.name);
console.log(currentRouteName.value);

const isActiveClass = computed(() => (tab: string) => (currentRouteName.value === tab.toLocaleLowerCase() ? _activeClass : ""));
</script>
