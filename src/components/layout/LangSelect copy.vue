<!-- <template>
  <div class="relative inline-block text-left">
    <div>
      <button
        type="button"
        class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        id="menu-button"
        aria-expanded="true"
        aria-haspopup="true"
        @click="state.visible = true"
      >
        {{ state.lang }}
        <svg class="w-5 h-5 -mr-1 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path
            fill-rule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
    </div> -->

<!--
    Dropdown menu, show/hide based on menu state.

    Entering: "transition ease-out duration-100"
      From: "transform opacity-0 scale-95"
      To: "transform opacity-100 scale-100"
    Leaving: "transition ease-in duration-75"
      From: "transform opacity-100 scale-100"
      To: "transform opacity-0 scale-95"
  -->

<!-- <div
      v-show="state.visible"
      class="absolute right-0 z-10 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="menu-button"
      tabindex="-1"
    >
      <div class="py-1" role="none">
        <a
          v-for="{ value, label } in options"
          :key="value"
          href="#"
          :class="[
            'text-gray-700',
            'block',
            'px-4',
            'py-2',
            'text-sm',
            state.lang === value ? 'bg-gray-100' : '',
            state.lang === value ? 'text-gray-900' : '',
          ]"
          role="menuitem"
          tabindex="-1"
          id="menu-item-0"
          @click="handleSetLanguage(value)"
          >{{ label }}</a
        >
      </div>
    </div>
  </div>
</template> -->
<template>
  <label class="font-medium typography-label-sm" :for="id">Product</label>
  <div ref="referenceRef" class="relative">
    <div
      :id="id"
      ref="selectTriggerRef"
      role="combobox"
      :aria-controls="listboxId"
      :aria-expanded="isOpen"
      aria-label="Select one option"
      :aria-activedescendant="selectedOption ? `${listboxId}-${selectedOption.value}` : undefined"
      class="mt-0.5 flex items-center gap-8 relative font-normal typography-text-base ring-1 ring-neutral-300 ring-inset rounded-md py-2 px-4 hover:ring-primary-700 active:ring-primary-700 active:ring-2 focus:ring-primary-700 focus:ring-2 focus-visible:outline focus-visible:outline-offset cursor-pointer"
      tabindex="0"
      @keydown.space="toggle()"
      @click="toggle()"
    >
      <template v-if="selectedOption">{{ selectedOption.label }}</template>
      <span v-else class="text-neutral-500">Choose from the list</span>
      <SfIconExpandMore class="ml-auto transition-transform duration-300 ease-in-out text-neutral-500" :class="{ 'rotate-180': isOpen }" />
    </div>
    <ul
      v-show="isOpen"
      :id="listboxId"
      ref="floatingRef"
      role="listbox"
      aria-label="Select one option"
      class="z-10 w-full py-2 bg-white border rounded-md shadow-md border-neutral-100"
      :style="dropdownStyle"
    >
      <SfListItem
        v-for="option in options"
        :id="`${listboxId}-${option.value}`"
        :key="option.value"
        role="option"
        tabindex="0"
        :aria-selected="option.value === selectedOption?.value"
        class="block"
        :class="{ 'font-medium': option.value === selectedOption?.value }"
        @click="selectOption(option)"
        @keydown.enter="selectOption(option)"
        @keydown.space="selectOption(option)"
      >
        {{ option.label }}
        <template #suffix>
          <SfIconCheck v-if="option.value === selectedOption?.value" class="text-primary-700" />
        </template>
      </SfListItem>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { useConfigStore } from "../../stores";
// import { SfSelect, SfIconUnfoldMore } from '@storefront-ui/vue';
import { reactive, computed } from "vue";
const appConfig = useConfigStore();
const language = computed(() => appConfig.getLanguage);
const state = reactive({
  lang: language.value,
  visible: false,
});
// const defalutClass = ["text-gray-700", "block", "px-4", "py-2", "text-sm"];

const options = [
  { label: "zh", value: "zh" },
  { label: "fr", value: "fr" },
  { label: "de", value: "de" },
  { label: "en", value: "en" },
];

import { useI18n } from "vue-i18n";
// import { defineProps, computed } from "vue";
// import { useStore } from "vuex";
// import { ElMessage } from "element-plus";

// const store = useStore();
// const language = computed(() => store.getters.language);

// 切换语言的方法
const i18n = useI18n();
const handleSetLanguage = (value: string) => {
  state.lang = value;
  i18n.locale.value = value;
  state.visible = false;
  // store.commit("setLanguage", lang);
  // ElMessage.success(`语言成功切换为${lang === "zh" ? "中文" : "英文"}`);
};

import { ref, type Ref } from "vue";
import { unrefElement } from "@vueuse/core";
import { useDropdown, useDisclosure, SfIconExpandMore, SfListItem, SfIconCheck, useId, useTrapFocus } from "@storefront-ui/vue";

type SelectOption = {
  label: string;
  value: string;
};

const options: SelectOption[] = [
  {
    label: "Startup",
    value: "startup",
  },
  {
    label: "Business",
    value: "business",
  },
  {
    label: "Enterprise",
    value: "enterprise",
  },
];
const { close, toggle, isOpen } = useDisclosure({ initialValue: false });
const selectedOption = ref<SelectOption>(options[0]);
const id = useId();
const listboxId = `select-dropdown-${id}`;
const selectTriggerRef = ref<HTMLDivElement>();

const {
  referenceRef,
  floatingRef,
  style: dropdownStyle,
} = useDropdown({
  isOpen,
  onClose: close,
});

useTrapFocus(floatingRef as Ref<HTMLUListElement>, {
  arrowKeysUpDown: true,
  activeState: isOpen,
  initialFocusContainerFallback: true,
});

const selectOption = (option: SelectOption) => {
  selectedOption.value = option;
  close();
  unrefElement(selectTriggerRef as Ref<HTMLDivElement>)?.focus();
};
</script>
