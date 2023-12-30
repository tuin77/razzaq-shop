<template>
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
        <svg class="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path
            fill-rule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
    </div>

    <!--
    Dropdown menu, show/hide based on menu state.

    Entering: "transition ease-out duration-100"
      From: "transform opacity-0 scale-95"
      To: "transform opacity-100 scale-100"
    Leaving: "transition ease-in duration-75"
      From: "transform opacity-100 scale-100"
      To: "transform opacity-0 scale-95"
  -->

    <div
      v-show="state.visible"
      class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
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
</script>
