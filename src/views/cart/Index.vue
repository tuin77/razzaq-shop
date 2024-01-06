<template>
  <table class="mx-auto table-fixed mb-7 max-w-1620">
    <thead>
      <tr>
        <th class="text-left">PRODUCT</th>
        <th>PRICE</th>
        <th>QUANTITY</th>
        <th>SUBTOTAL</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <div class="flex items-center">
            <img src="../../assets/images/shop/product-img1.png" class="w-[208px] h-[208px]" alt="" srcset="" />
            <p class="w-[320px] ml-[30px]">Wall Suction Soft Durable Bath Massage Brush – BlueFrom wishlist:Default wishlist</p>
          </div>
        </td>
        <td>HK$272.95</td>
        <td>
          <div>HK$272.95</div>
          <div>
            <SfThumbnail size="xl" class="flex items-center justify-center bg-gray-100">
              <SfIconFavorite />
            </SfThumbnail>
            Save for later
          </div>
        </td>
      </tr>
      <tr>
        <td>Witchy Woman</td>
        <td>The Eagles</td>
        <td>1972</td>
      </tr>
      <tr>
        <td>Shining Star</td>
        <td>Earth, Wind, and Fire</td>
        <td>1975</td>
      </tr>
    </tbody>
  </table>
  <div class="flex">
    <div class="sm:mx-auto sm:w-full sm:max-w-[750px] flex mt-10 text-sm text-gray-500">
      <img
        class="flex-shrink-0 w-6 h-6 text-gray-400 transition duration-75"
        src="../../assets/images/login/icon-left-arrow.svg"
        alt="Your Company"
      />
      <span href="#" class="pl-5 font-semibold leading-6 text-gray-400 group-hover:text-gray-900">continue shopping</span>
    </div>

    <div class="sm:mx-auto sm:w-full sm:max-w-[750px] flex mt-10 text-sm text-gray-500">
      <img
        class="flex-shrink-0 w-6 h-6 text-gray-400 transition duration-75"
        src="../../assets/images/login/icon-left-arrow.svg"
        alt="Your Company"
      />
      <span href="#" class="pl-5 font-semibold leading-6 text-gray-400 group-hover:text-gray-900">refresh package</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { SfThumbnail, SfIconFavorite } from "@storefront-ui/vue";
import { ref } from "vue";
// https://tailwind.nodejs.cn/docs/table-layout
</script>
