<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import ProductCard from './components/ProductCard.vue'
import NavbarTop from './components/NavbarTop.vue'
</script>

<template>
  <NavbarTop></NavbarTop>
  <HelloWorld  />
  <ProductCard/>
</template>
<!-- https://docs.storefrontui.io/v2/vue/blocks/NavbarTop.html -->
<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
