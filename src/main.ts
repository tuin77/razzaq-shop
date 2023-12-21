import { createApp } from 'vue'
import i18n from "./i18n";
import './style.css'
import App from './App.vue'
import { createPinia } from "pinia";
const pinia = createPinia();

createApp(App).use(pinia).use(i18n).mount('#app')
