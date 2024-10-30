import { createApp } from "vue";
import "./style.css";
import "./components/message/src/style/message.css";
import App from "./App.vue";
import { createPinia } from "pinia";

const appConf = JSON.parse(localStorage.getItem("razzaq-shop-home") || "{}");
// console.log("appConf", appConf);
if (!appConf?.language) localStorage.setItem("razzaq-shop-home", JSON.stringify({ language: "en" }));
import i18n from "./i18n";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import router from "./router";
const pinia = createPinia();

pinia.use(piniaPluginPersistedstate);

createApp(App).use(pinia).use(i18n).use(router).mount("#app");
