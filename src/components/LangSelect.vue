
<template>
    <SfSelect placeholder="" @input="handleSetLanguage" v-model="state.lang">
      <template #chevron>
        <SfIconUnfoldMore class="absolute pointer-events-none top-2 right-4 text-neutral-500" />
      </template>
      <option v-for="{ value, label } in options" :key="value" :value="value">
        {{ label }}
      </option>
    </SfSelect>
</template>

<script lang="ts" setup>
import { useConfigStore } from '../stores'
import { SfSelect, SfIconUnfoldMore } from '@storefront-ui/vue';
import { reactive ,computed} from 'vue';
const appConfig = useConfigStore()
const language = computed(() => appConfig.getLanguage);
const state = reactive({
  lang:language.value
})

const options = [
  { label: 'zh', value: 'zh' },
  { label: 'fr', value: 'fr' },
  { label: 'de', value: 'de' },
  { label: 'en', value: 'en' },
];

import { useI18n } from "vue-i18n";
// import { defineProps, computed } from "vue";
// import { useStore } from "vuex";
// import { ElMessage } from "element-plus";



// const store = useStore();
// const language = computed(() => store.getters.language);

// 切换语言的方法
const i18n = useI18n();
const handleSetLanguage = () => {
  
  i18n.locale.value = state.lang;
  // store.commit("setLanguage", lang);
  // ElMessage.success(`语言成功切换为${lang === "zh" ? "中文" : "英文"}`);
};
</script>





