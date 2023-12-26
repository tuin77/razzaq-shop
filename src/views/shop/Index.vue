<template><!--
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
-->
<div class="bg-white">
  <div class="max-w-2xl px-4 py-16 mx-auto sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
    <h2 class="text-lg font-medium text-gray-900">AutomaticFeeders</h2>

    <div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 product-list">
      <div v-for="i in 12" :key="i" href="#" class="group">
        <div class="w-full overflow-hidden bg-gray-200 rounded-lg aspect-h-1 aspect-w-1 xl:aspect-h-8 xl:aspect-w-7">
          <img src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg" alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." class="object-cover object-center w-full h-full group-hover:opacity-75">
        </div>
        <h3 class="mt-4 text-sm text-gray-700">Colorful Sunflower Plush Comfy</h3>
        <p class="mt-1 text-lg font-medium text-gray-900">$22.95 – $42.95</p>
        <button type="button" class="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-primary-800 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-primary-800 hover:text-white">buy</button>
      </div>
      <!-- More products... -->
    </div>
    <Pagination></Pagination>
  </div>
</div>
</template>

<script lang="ts" setup>
import Pagination from "../../components/Pagination.vue";
</script>
<style>
.product-list .group{
  padding: 25px;
  overflow: hidden;
  text-align: center;
  border: 1px solid #E6E6E6;
  border-radius: 20px;
  /* border */
  
}
</style>