<template>
  <div ref="referenceRef" class="relative z-30">
    <div
      :id="id"
      ref="selectTriggerRef"
      role="combobox"
      :aria-controls="listboxId"
      :aria-expanded="isOpen"
      aria-label="Select one option"
      :aria-activedescendant="selectedOption ? `${listboxId}-${selectedOption.value}` : undefined"
      class="text-lg mt-0.5 flex items-center gap-1 relative md:text-2xl font-normal typography-text-base py-2 px-1 cursor-pointer z-30"
      tabindex="0"
      @keydown.space="toggle()"
      @click="toggle()"
    >
      <template v-if="selectedOption">{{ selectedOption.name }}</template>
      <span v-else class="text-neutral-500">Choose Language</span>
      <SfIconExpandMore class="ml-auto transition-transform duration-300 ease-in-out text-neutral-500" :class="{ 'rotate-180': isOpen }" />
    </div>
    <span
      class="absolute hidden group-hover:flex -top-2 -right-3 translate-x-full w-48 px-2 py-1 bg-gray-700 rounded-lg text-center text-white text-sm before:content-[''] before:absolute before:top-1/2 before:right-[100%] before:-translate-y-1/2 before:border-8 before:border-y-transparent before:border-l-transparent before:border-r-gray-700"
      >This is some extra useful information</span
    >

    <ul
      v-show="isOpen"
      :id="listboxId"
      ref="floatingRef"
      role="listbox"
      aria-label="Select one option"
      class="z-10 w-[250px] py-2 bg-white border rounded-md shadow-md border-neutral-100 before:content-[''] before:absolute before:top-[-7px] before:right-[10px] before:-translate-x-1/2 before:rotate-45 before:h-3 before:w-3 before:bg-white"
      :style="{ position: 'absolute', right: 0, top: '68px' }"
    >
      <SfListItem
        v-for="option in options"
        :id="`${listboxId}-${option.value}`"
        :key="option.value"
        role="option"
        tabindex="0"
        :aria-selected="option.value === selectedOption?.value"
        class="block"
        :class="{ 'font-medium text-primary-700': option.value === selectedOption?.value }"
        @click="selectOption(option)"
        @keydown.enter="selectOption(option)"
        @keydown.space="selectOption(option)"
      >
        {{ option.label }}
      </SfListItem>
    </ul>
  </div>

  <transition
    enter-active-class="transition duration-200 ease-out"
    leave-active-class="transition duration-200 ease-out"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div
      v-if="isOpen"
      class="fixed inset-0 z-20 bg-opacity-50 bg-neutral-700"
      @wheel.prevent
      @mousewheel.prevent
      @touchmove.prevent
      @touchstart.prevent
      @click.stop
    />
  </transition>
</template>

<script lang="ts" setup>
import useStore from "@/stores";
const { home } = useStore();

// import { SfSelect, SfIconUnfoldMore } from '@storefront-ui/vue';
import { reactive, computed } from "vue";
// const appConfig = useConfigStore();
// const language = computed(() => home.getLanguage);
const state = reactive({
  lang: home.getLanguage || "en",
  visible: false,
});

import { useI18n } from "vue-i18n";

// 切换语言的方法
const i18n = useI18n();

import { ref, type Ref } from "vue";
import { unrefElement } from "@vueuse/core";
import { useDropdown, useDisclosure, SfIconExpandMore, SfListItem, useId, useTrapFocus } from "@storefront-ui/vue";

type SelectOption = {
  label: string;
  value: string;
  name: string;
};
const options: SelectOption[] = [
  { label: "English", name: "En", value: "en" },
  { label: "French", name: "Fr", value: "fr" },
  { label: "German", name: "De", value: "de" },
];
// console.log("state.lang", state.lang);

const selectedOption = computed(() => options.find((option) => option.value === state.lang));

const { close, toggle, isOpen } = useDisclosure({ initialValue: false });
const id = useId();
const listboxId = `select-dropdown-${id}`;
const selectTriggerRef = ref<HTMLDivElement>();

const { referenceRef, floatingRef } = useDropdown({
  isOpen,
  onClose: close,
});

useTrapFocus(floatingRef as Ref<HTMLUListElement>, {
  arrowKeysUpDown: true,
  activeState: isOpen,
  initialFocusContainerFallback: true,
});
// const handleSetLanguage = (value: string) => {
//   state.lang = value;
//   i18n.locale.value = value;
//   state.visible = false;
//   // ElMessage.success(`语言成功切换为${lang === "zh" ? "中文" : "英文"}`);
// };
const selectOption = (option: SelectOption) => {
  state.lang = option.value;
  i18n.locale.value = option.value;
  home.setLanguage(option.value);
  close();
  unrefElement(selectTriggerRef as Ref<HTMLDivElement>)?.focus();
};
</script>
