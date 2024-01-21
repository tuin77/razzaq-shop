<template>
  <div class="mx-auto mb-7 max-w-1620">
    <img src="@/assets/images/shop/shop-list-bg.png" alt="" srcset="" />
    <div class="flex flex-wrap">
      <a v-for="item in categories" :key="item.label" href="#" class="mr-12 text-lg text-gray-200 mt-7 hover:text-bold-100">{{ item.label }}</a>
    </div>
  </div>
  <hr class="border-gray-100" />
  <div class="mx-auto max-w-1620">
    <div class="flex justify-between pb-10 pt-9">
      <h2 class="text-lg font-medium text-gray-900 text-[2rem]">AutomaticFeeders</h2>
      <SfSelect placeholder="" v-model="sort" class="w-60" size="base" @change="queryProducts">
        <option v-for="{ value, label } in options" :key="value" :value="value">
          {{ label }}
        </option>
      </SfSelect>
    </div>

    <div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 product-list">
      <div v-for="product in products" :key="product.id" href="#" class="group rounded-[1.25rem] cursor-pointer" @click="handleClick">
        <div class="w-full relative overflow-hidden bg-gray-200 rounded-[1.25rem] aspect-h-1 aspect-w-1 xl:aspect-h-8 xl:aspect-w-7">
          <!-- https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg -->
          <img
            :src="product.picUrl"
            alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
            class="object-cover object-center w-full h-full"
          />
          <img
            src="../../assets/images/shop/collect-icon.svg"
            class="invisible group-hover:visible w-[28px] h-[24px] absolute right-5 top-5"
            alt=""
            srcset=""
          />
          <!-- group-hover:visible -->
          <div class="absolute bottom-0 left-0 invisible w-full py-4 text-lg text-white bg-black opacity-45">Select options</div>
        </div>
        <h3 class="mt-5 text-lg text-gray-400 truncate">{{ product.name }}</h3>
        <p class="mt-6 text-2xl text-black">${{ product.price }}</p>
        <!-- $22.95 – $42.95 -->
        <button
          type="button"
          class="rounded-md bg-white py-3 mt-6 text-lg px-[4.25rem] font-semibold text-primary-700 shadow-sm ring-1 ring-inset ring-primary-700 hover:bg-primary-700 hover:ring-primary-700 hover:text-white"
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
// import { userApi } from "@/api/user";
import { ShopGoods } from "@/types";
import { getProductCategoryList, getSpuList } from "@/api/shop";
import { useRouter } from "vue-router";
import Pagination from "../../components/Pagination.vue";
import { SfSelect } from "@storefront-ui/vue";
import { ref } from "vue";

const router = useRouter();

const sort = ref("");
const products = ref<ShopGoods[]>();

const options = [
  { label: "Default sort", value: "" },
  { label: "Recommend Leading", value: "recommendLeading" },
  { label: "Recommend Essential", value: "recommendEssential" },
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
  const slug = "warm-winter-cozy-washable-dog-house";
  router.push({ path: `/product/${slug}` });
};
const queryData = async () => {
  const params = {};
  const res = await getProductCategoryList(params);
  console.log("res", res);
};
const queryProducts = async () => {
  // 推荐类型 recommendLeading主打 recommendEssential必备
  const params = {
    count: 16,
    recommendType: sort.value,
  };
  const res = await getSpuList(params);
  if (res.code === 0) {
    products.value = res.data;
    // console.log(res);
  }
};
queryProducts();
queryData();
</script>
<style>
.product-list .group {
  padding: 25px 25px 33px;
  overflow: hidden;
  text-align: center;
  border: 1px solid #e6e6e6;
}
</style>
