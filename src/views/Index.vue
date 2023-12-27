<script setup lang="ts">

// import AppHeader1 from '../components/AppHeader1.vue'
import AppHeader from '../components/layout/AppHeader.vue'
import AppFooter from '../components/layout/AppFooter.vue'


// AppHeader1
// import LangSelect from './components/LangSelect.vue'
// import Home from '../Home/'
// import ProductCard from './components/ProductCard.vue'
// import NavbarTop from './components/NavbarTop.vue'
</script>

<template>

  <!-- <h2>{{ $t("msg.test") }}</h2> -->
  <AppHeader></AppHeader>
  <!-- <AppHeader1></AppHeader1> -->
  <!-- <NewsletterBox></NewsletterBox> -->
  <!-- <AppFooter></AppFooter> -->
  <!-- <Home  /> -->
  <RouterView></RouterView>
  <AppFooter></AppFooter>
  
  <!-- <LangSelect></LangSelect> -->
  <!-- <NavbarTop></NavbarTop> -->
  <!-- <ProductCard/> -->
</template>
<!-- https://docs.storefrontui.io/v2/vue/blocks/NavbarTop.html -->
<style scoped>

</style>
