<template>
  <div class="mx-auto mb-7 max-w-1620">
    <img src="@/assets/images/shop/shop-list-bg.png" alt="" srcset="" />
    <div class="flex flex-wrap">
      <a v-for="item in categories" :key="item.label" href="#" class="mr-12 text-lg text-gray-200 mt-7 hover:text-bold-100">{{ item.label }}</a>
    </div>
  </div>
  <hr />
  <div class="mx-auto max-w-1620">
    <div class="flex justify-between pb-10 pt-9">
      <h2 class="text-lg font-medium text-gray-900">AutomaticFeeders</h2>
      <SfSelect placeholder="" v-model="state.sort" class="w-60" size="base">
        <option v-for="{ value, label } in options" :key="value" :value="value">
          {{ label }}
        </option>
      </SfSelect>
    </div>

    <div class="grid grid-cols-1 gap-x-6 gap-y-10 rounded-[1.25rem] sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 product-list">
      <div v-for="i in 12" :key="i" href="#" class="group">
        <div class="w-full overflow-hidden bg-gray-200 rounded-[1.25rem] aspect-h-1 aspect-w-1 xl:aspect-h-8 xl:aspect-w-7">
          <img
            src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg"
            alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
            class="object-cover object-center w-full h-full group-hover:opacity-75"
          />
        </div>
        <h3 class="mt-4 text-lg text-gray-400">Colorful Sunflower Plush Comfy</h3>
        <p class="mt-1 text-lg text-2xl text-black">$22.95 – $42.95</p>
        <button
          type="button"
          class="rounded-md bg-white py-1.5 text-lg px-[4.25rem] font-semibold text-primary-700 shadow-sm ring-1 ring-inset ring-primary-700 hover:bg-primary-700 hover:ring-primary-700 hover:text-white"
          @click="handleClick"
        >
          Buy
        </button>
      </div>
      <!-- More products... -->
    </div>
    <div class="mt-[4.375rem] mb-[6.5rem]">
      <Pagination></Pagination>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";
import Pagination from "../../components/Pagination.vue";
import { SfSelect } from "@storefront-ui/vue";
import { reactive } from "vue";

const router = useRouter();

const state = reactive({
  sort: "default",
});

const options = [
  { label: "Default sort", value: "default" },
  { label: "blue", value: "blue" },
  { label: "yellow", value: "yellow" },
  { label: "green", value: "green" },
  { label: "gray", value: "gray" },
  { label: "black", value: "black" },
  { label: "brown", value: "brown" },
];
// https://bookix.madrasthemes.com/product-category/hot-deals/
const categories = [
  { label: "AutomaticFeeders", value: "" },
  { label: "Cats", value: "" },
  { label: "Cats Beds", value: "" },
  { label: "Cats Carriers", value: "" },
  { label: "Cats Food", value: "" },
  { label: "Cats Toys", value: "" },
  { label: "Dogs", value: "" },
  { label: "Dogs Backpacks", value: "" },
  { label: "Dogs Beds", value: "" },
  { label: "Dogs Food", value: "" },
  { label: "Dogs Toys", value: "" },
  { label: "Feeding&WateringSupplies", value: "" },
  { label: "Grooming", value: "" },
  { label: "Litter&Housebreaking", value: "" },
  { label: "LitterMats", value: "" },
  { label: "PetSupplies", value: "" },
  { label: "Uncategorized", value: "" },
];

const handleClick = () => {
  console.log("handleClick");

  router.push({
    path: "/product",
    query: {
      mode: "edit",
    },
  });
};
</script>
<style>
.product-list .group {
  padding: 25px;
  overflow: hidden;
  text-align: center;
  border: 1px solid #e6e6e6;
}
</style>
