import { defineStore } from 'pinia';
import { LANG } from "../constant";

interface ConfigState {
  language: string
}

export const useConfigStore = defineStore('razzaqConfig', {
  state: (): ConfigState => ({
    language: localStorage.getItem(LANG) || "zh",
  }),
  getters: {
    getLanguage: (state) => state.language ,
  },
  actions: {
    setLanguage( lang:string) {
      // 设置缓存
      localStorage.setItem(LANG, lang);
      // 修改状态
      this.language = lang;
    },
  }
})


