<template>
  <!--  -->
  <!-- <div class="mx-auto max-w-1620 mb-[5rem]">
    <div class="px-6 mx-auto max-w-7xl lg:px-8">
      <dl class="grid grid-cols-1 text-center gap-x-8 gap-y-16 lg:grid-cols-3">
        <div class="flex flex-col max-w-xs mx-auto gap-y-4">
          <dt class="text-base leading-7 text-gray-600">Transactions every 24 hours</dt>
          <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">44 million</dd>
        </div>
        <div class="flex flex-col max-w-xs mx-auto gap-y-4">
          <dt class="text-base leading-7 text-gray-600">Assets under holding</dt>
          <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">$119 trillion</dd>
        </div>
        <div class="flex flex-col max-w-xs mx-auto gap-y-4">
          <dt class="text-base leading-7 text-gray-600">New users annually</dt>
          <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">46,000</dd>
        </div>
      </dl>
    </div>
  </div> -->

  <div class="relative max-w-1620 max-h-[600px] flex flex-col w-full mx-auto aspect-[4/3] gap-1">
    <SfScrollable
      class="w-full h-full snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
      :active-index="activeIndex"
      wrapper-class="h-full group/scrollable"
      is-active-index-centered
      :previous-disabled="activeIndex === 0"
      :next-disabled="activeIndex === images.length - 1"
      buttons-placement="block"
      @on-prev="activeIndex -= 1"
      @on-next="activeIndex += 1"
    >
      <template #previousButton="defaultProps">
        <SfButton
          v-bind="defaultProps"
          :disabled="activeIndex === 0"
          class="absolute hidden group-hover/scrollable:block disabled:!hidden !rounded-full !p-3 z-10 top-1/2 left-4 bg-white"
          variant="secondary"
          size="lg"
          square
        >
          <SfIconChevronLeft />
        </SfButton>
      </template>
      <div
        v-for="({ imageSrc, alt }, index) in images"
        :key="`${alt}-${index}`"
        class="relative flex justify-center basis-full snap-center snap-always shrink-0 grow"
      >
        <img
          class="object-cover w-auto h-full"
          :aria-label="alt"
          :aria-hidden="activeIndex !== index"
          :alt="alt"
          :src="imageSrc"
          draggable="false"
        />
      </div>
      <template #nextButton="defaultProps">
        <SfButton
          v-bind="defaultProps"
          :disabled="activeIndex === images.length - 1"
          class="absolute hidden group-hover/scrollable:block disabled:!hidden !rounded-full !p-3 z-10 top-1/2 right-4 bg-white"
          variant="secondary"
          size="lg"
          square
        >
          <SfIconChevronRight />
        </SfButton>
      </template>
    </SfScrollable>
    <div class="flex-shrink-0 basis-auto">
      <div
        class="flex-row w-full ml-0.5 flex gap-0.5 mt [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
      >
        <button
          v-for="({ alt }, index) in images"
          :key="`${index}-bullet`"
          :aria-current="activeIndex === index"
          :aria-label="alt"
          :class="[
            'w-3.5 h-3.5 relative mt-1 mr-8 rounded-full transition-colors focus-visible:outline focus-visible:outline-offset-0 pointer-events-none',
            activeIndex === index ? 'bg-primary-700' : 'bg-gray-200',
          ]"
          @click="activeIndex = index"
        />
      </div>
    </div>
  </div>



  <div class="mx-auto max-w-1620 my-[5rem]">
    <div class="grid grid-cols-1  gap-x-[75px] gap-y-16 lg:grid-cols-3">
      <div class="flex items-center border border-gray-100 rounded-[20px] gap-y-4 py-10 pl-14 pr-8 ">
        <img class="flex-none w-[57px] h-[45px]" src="../../assets/images/home/icon-delivery.svg" alt="" />
        <!-- <img class="flex-none w-12 h-12 bg-gray-50" src="../../assets/images/home/icon-gifts.svg" alt="" /> -->
        <div class="flex-auto min-w-0 pl-[1.875rem]">
          <div class="text-lg font-bold text-primary-700">Free Shipping Worldwide</div>
          <div class="mt-5 ml-1 text-base text-bold-900" >Our products are free in delivery after shopping on $999</div>
        </div>
      </div>
      <div class="flex items-center border border-gray-100 rounded-[20px] gap-y-4 py-10 pl-14 pr-8 ">
        <img class="flex-none w-12 h-12" src="../../assets/images/home/icon-gifts.svg" alt="" />
        <!-- <img class="flex-none w-12 h-12 bg-gray-50" src="../../assets/images/home/icon-gifts.svg" alt="" /> -->
        <div class="flex-auto min-w-0 pl-9">
          <div class="text-lg font-bold text-primary-700">Weekly Gifts Members</div>
          <div class="mt-5 ml-1 text-base text-bold-900" >We are your one-stop shop for nationwide online store.</div>
        </div>
      </div>

      <div class="flex items-center border border-gray-100 rounded-[20px] gap-y-4 py-10 pl-14 pr-8 ">
        <img class="flex-none w-[2.75rem] h-[2.75rem]" src="../../assets/images/home/icon-money-back.svg" alt="" />
        <div class="flex-auto min-w-0 pl-[2.625rem]">
          <div class="text-lg font-bold text-primary-700">Weekly Gifts Members</div>
          <div class="mt-5 ml-1 text-base text-bold-900" >We are your one-stop shop for nationwide online store.</div>
        </div>
      </div>
    </div>
  </div>

  <div class="mx-auto max-w-1620 mb-[5rem]">
    <h2 class=" font-bold text-black mb-[7.5rem] text-48">Featured products</h2>
    <div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 product-list">
      <div v-for="i in 4" :key="i" href="#" class="group rounded-[1.25rem]">
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
    <h2 class="text-2xl font-bold text-black mb-[7.5rem] text-48">Must-have Products</h2>
    <div class="grid grid-cols-1 gap-x-[30px] gap-y-[30px] gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <!-- First item -->
      <div class="relative group" v-for="i in 6" :key="i">
        <img
          src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg"
          alt="Automatic Feeders"
          class="object-cover w-full h-full rounded-lg"
        />
        <div
          class="absolute bottom-0 left-0 flex items-center justify-center w-full h-full p-4 text-white transition bg-gray-900 bg-opacity-50 rounded-lg opacity-100"
        >
          <!-- opacity-0  group-hover:opacity-100-->
          <span class="font-bold text-32">Automatic Feeders</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";
// import { reactive } from "vue";
const router = useRouter();



import { SfScrollable, SfButton, SfIconChevronLeft, SfIconChevronRight } from '@storefront-ui/vue';
import { ref } from 'vue';

const withBase = (filepath: string) => `https://storage.googleapis.com/sfui_docs_artifacts_bucket_public/production/gallery/${filepath}`;

const images = [
  { imageSrc: withBase('gallery_8.png'), alt: 'backpack8' },
  { imageSrc: withBase('gallery_9.png'), alt: 'backpack9' },
  { imageSrc: withBase('gallery_10.png'), alt: 'backpack10' },
  { imageSrc: withBase('gallery_11.png'), alt: 'backpack11' },
];

const activeIndex = ref(0);
// const state = reactive({
//   sort: "default",
// });
const handleClick = () => {
  console.log("handleClick");

  router.push({
    path: "/product",
    query: {
      mode: "edit",
    },
  });
};
const products = Array.from(Array(4), (_, i) => ({
  id: i.toString(),
  name: "Athletic mens walking sneakers",
  price: "$2,345.99 - $2,365.99 ",
  img: {
    src: "https://storage.googleapis.com/sfui_docs_artifacts_bucket_public/production/sneakers.png",
    alt: "White sneaker shoe",
  },
}));
console.log(products);
</script>
