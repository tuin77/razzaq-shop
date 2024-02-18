<template>
  <CarouselPosters></CarouselPosters>

  <div class="mx-auto max-w-1620 my-10 md:my-[5rem]">
    <div class="px-4 md:px-0 grid grid-cols-1 gap-x-[75px] gap-y-10 lg:grid-cols-3">
      <div class="flex flex-col md:flex-row items-center border border-gray-100 rounded-[20px] gap-y-4 py-7 md:py-10 md:pl-14 md:pr-8">
        <img class="flex-none w-[57px] h-[45px]" src="../../assets/images/home/icon-delivery.svg" alt="" />
        <div class="flex-auto px-4 md:px-0 min-w-0 md:pl-[1.875rem] text-center md:text-left">
          <div class="text-lg font-bold text-primary-700">Free Shipping Worldwide</div>
          <div class="mt-5 ml-1 text-sm md:text-base text-bold-900">Our products are free in delivery after shopping on $999</div>
        </div>
      </div>
      <div class="flex flex-col md:flex-row items-center border border-gray-100 rounded-[20px] gap-y-4 py-7 md:py-10 md:pl-14 md:pr-8">
        <img class="flex-none w-12 h-12" src="../../assets/images/home/icon-gifts.svg" alt="" />
        <div class="flex-auto min-w-0 px-4 text-center md:px-0 md:pl-9 md:text-left">
          <div class="text-lg font-bold text-primary-700">Weekly Gifts Members</div>
          <div class="mt-5 ml-1 text-sm md:text-base text-bold-900">We are your one-stop shop for nationwide online store.</div>
        </div>
      </div>

      <div class="flex flex-col md:flex-row items-center border border-gray-100 rounded-[20px] gap-y-4 py-7 md:py-10 md:pl-14 md:pr-8">
        <img class="flex-none w-[2.75rem] h-[2.75rem]" src="../../assets/images/home/icon-money-back.svg" alt="" />
        <div class="flex-auto text-center px-4 md:px-0 md:text-left min-w-0 md:pl-[2.625rem]">
          <div class="text-lg font-bold text-primary-700">Money Back Guarantee</div>
          <div class="mt-5 ml-1 text-sm md:text-base text-bold-900">Start saving straight away with discount offer on items.</div>
        </div>
      </div>
    </div>
  </div>

  <CarouselProducts></CarouselProducts>

  <div class="mx-auto max-w-1620 my-10 md:mb-[5rem]">
    <h2 class="font-bold text-center md:text-left text-black mb-10 md:mb-[7.5rem] text-2xl md:text-48">Featured products</h2>
    <div class="grid grid-cols-1 px-4 md:px-0 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 product-list md:px0">
      <div v-for="i in 4" :key="i" href="#" class="group rounded-[1.25rem] text-center">
        <div class="w-full relative overflow-hidden bg-gray-200 rounded-[1.25rem] aspect-h-1 aspect-w-1 xl:aspect-h-8 xl:aspect-w-7">
          <img
            src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg"
            alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
            class="object-cover object-center w-full h-full"
          />
          <img
            src="../../assets/images/shop/collect-icon.svg"
            class="invisible group-hover:visible w-[28px] h-[24px] absolute right-5 top-5"
            alt=""
            srcset=""
          />
          <div class="absolute bottom-0 left-0 invisible w-full py-4 text-lg text-center text-white bg-black opacity-45 group-hover:visible">
            Select options
          </div>
        </div>
        <h3 class="mt-5 text-lg text-gray-400">Colorful Sunflower Plush Comfy</h3>
        <p class="mt-6 text-2xl text-black">$22.95 – $42.95</p>
        <button
          type="button"
          class="rounded-md bg-white py-3 mt-6 text-lg px-[4.25rem] font-semibold text-primary-700 shadow-sm ring-1 ring-inset ring-primary-700 hover:bg-primary-700 hover:ring-primary-700 hover:text-white"
          @click="handleClick"
        >
          Buy
        </button>
      </div>
    </div>
  </div>

  <div class="mx-auto max-w-1620">
    <h2 class="font-bold text-center md:text-left text-black mb-10 md:mb-[7.5rem] text-2xl md:text-48">Must-have Products</h2>
    <div class="grid grid-cols-1 px-4 pb-10 md:px-0 gap-x-[30px] gap-y-10 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <!-- First item -->
      <div class="relative overflow-hidden group" v-for="i in 6" :key="i">
        <img
          src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg"
          alt="Automatic Feeders"
          class="object-cover w-full h-full rounded-20 md:rounded-lg group-hover:scale-125"
        />
        <div
          class="absolute bottom-0 left-0 flex items-center justify-center w-full h-full p-4 text-white transition bg-gray-900 bg-opacity-50 opacity-100 rounded-20 md:rounded-lg"
        >
          <!-- opacity-0  group-hover:opacity-100-->
          <span class="text-xl font-bold md:text-32">Automatic Feeders</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import CarouselPosters from "./CarouselPosters.vue";
import CarouselProducts from "./CarouselProducts.vue";

import { getBannerList } from "@/api";
import { ref } from "vue";
import { useRouter } from "vue-router";
// import { reactive } from "vue";
const router = useRouter();

const handleClick = () => {
  console.log("handleClick");

  const slug = "warm-winter-cozy-washable-dog-house";
  router.push({ path: `/product/${slug}` });
};
const bannerList = ref([]);
const fetchBannerList = async () => {
  // 1首页 2首页二层 3商品列表页 4关于我们页
  const params = { position: 1 };
  const res = await getBannerList(params);
  console.log(233, res.data);
  bannerList.value = res.data;
  // if (res.data?.length) {
  // this.categoryList = groupCategoriesByParentId(res.data);
  // this.categoryList = res.data.result;
  // }
};
fetchBannerList();
</script>

<style>
.product-list .group {
  padding: 25px 25px 33px;
  overflow: hidden;
  text-align: center;
  border: 1px solid #e6e6e6;
}
</style>
