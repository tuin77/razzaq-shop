const messages = {
  en: {
    nav: {
      Home: "Home",
      Shop: "Shop",
      "Contact us": "Contact us",
      "Log In": "Log In",
      cart: "cart",
      Information: "Information",
      Finish: "Finish",
    },
    msg: {
      test: "hello world",
    },
  },
  fr: {
    nav: {
      Home: "Accueil",
      Shop: "Boutique",
      "Contact us": "Contactez-Nous",
      "Log In": "Connexion",
    },
  },
  de: {
    nav: {
      Home: "Startseite",
      Shop: "Shop",
      "Contact us": "Kontaktieren Sie Uns",
      "Log In": "Anmelden",
    },
  },
  zh: {
    nav: {
      Home: "首页",
      Shop: "购物",
      "Contact Us": "联系我们",
      "Log In": "登录",
    },
    home: {
      home: "home",
    },
    msg: {
      test: "你好世界",
    },
  },
};

// import useStore from "@/stores";
// const { home } = useStore();
const appConf = JSON.parse(localStorage.getItem("razzaq-shop-home") || "{}");

import { createI18n } from "vue-i18n";

const i18n = createI18n({
  // 使用 Composition API 模式，则需要将其设置为false
  legacy: false,
  // 全局注入 $t 函数
  globalInjection: true,
  locale: appConf.language || "en",
  messages,
});

export default i18n;
