<template>
  <div class="flex items-start justify-between mx-auto mt-20 table-fixed mb-36 max-w-1620">
    <table class="">
      <thead>
        <tr class="border-b border-gray-100">
          <th class="font-normal text-left pb-7">PRODUCT</th>
          <th class="font-normal text-left pb-7">PRICE</th>
          <th class="font-normal pb-7">QUANTITY</th>
          <th class="font-normal text-right pb-7">SUBTOTAL</th>
        </tr>
      </thead>
      <tbody>
        <tr class="py-10 border-b border-gray-100">
          <td class="pr-[47px] py-10">
            <div class="flex items-center">
              <button>
                <SfIconClose size="lg" class="text-gray-200 mr-30"></SfIconClose>
              </button>
              <img src="../../assets/images/shop/product-img1.png" class="w-[208px] h-[208px]" alt="" srcset="" />
              <p class="w-[320px] ml-30 text-bold-100">Wall Suction Soft Durable Bath Massage Brush – BlueFrom wishlist:Default wishlist</p>
            </div>
          </td>
          <td class="pr-[83px]">HK$272.95</td>
          <td>
            <input v-model="count" type="number" min="0" class="w-[150px] h-[60px] border border-gray-100 rounded-100 px-30 text-lg text-bold-100" />
          </td>
          <td class="text-right pl-[70px]">
            <div class="text-lg text-bold-100">HK$272.95</div>
            <button
              type="button"
              class="flex items-center justify-center w-full py-1 mt-6 text-sm text-gray-200 transition-colors duration-200 bg-white gap-x-2 sm:w-auto"
            >
              <SfIconFavorite size="sm" />
              <span>Save for later</span>
            </button>
          </td>
        </tr>
        <tr class="py-10 border-b border-gray-100">
          <td class="pr-[47px] py-10">
            <div class="flex items-center">
              <button>
                <SfIconClose size="lg" class="text-gray-200 mr-30"></SfIconClose>
              </button>
              <img src="../../assets/images/shop/product-img1.png" class="w-[208px] h-[208px]" alt="" srcset="" />
              <p class="w-[320px] ml-30 text-bold-100">Wall Suction Soft Durable Bath Massage Brush – BlueFrom wishlist:Default wishlist</p>
            </div>
          </td>
          <td class="pr-[83px]">HK$272.95</td>
          <td>
            <input v-model="count" type="number" min="0" class="w-[150px] h-[60px] border border-gray-100 rounded-100 px-30 text-lg text-bold-100" />
          </td>
          <td class="text-right pl-[70px]">
            <div class="text-lg text-bold-100">HK$272.95</div>
            <button
              type="button"
              class="flex items-center justify-center w-full py-1 mt-6 text-sm text-gray-200 transition-colors duration-200 bg-white gap-x-2 sm:w-auto"
            >
              <SfIconFavorite size="sm" />
              <span>Save for later</span>
            </button>
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td>
            <button
              type="button"
              class="flex items-center justify-center py-1 mt-6 text-2xl text-gray-200 transition-colors duration-200 bg-white sm:w-auto"
            >
              <img
                class="flex-shrink-0 h-3.5 text-gray-400 transition duration-75 w-7"
                src="../../assets/images/login/icon-left-arrow.svg"
                alt="Your Company"
              />
              <span class="ml-5 text-bold-100">continue shopping</span>
            </button>
          </td>
          <td class="text-right" colspan="4">
            <button
              type="button"
              class="flex items-center justify-center py-1 mt-6 ml-auto text-2xl text-gray-200 transition-colors duration-200 bg-white sm:w-auto"
            >
              <img
                class="flex-shrink-0 w-[22px] h-[22px] text-gray-400 transition duration-75"
                src="../../assets/images/shop/icon-loading.svg"
                alt="Your Company"
              />
              <span class="ml-5 text-bold-100">refresh package</span>
            </button>
          </td>
        </tr>
      </tfoot>
      <div class="flex justify-between"></div>
    </table>
    <div class="bg-neutral-100 border rounded-20 border-gray-100 pt-[27px] pb-[25px] px-[25px]">
      <span class="text-2xl text-blod-100">Cart totals</span>

      <div class="flex text-lg mt-[26px]">
        <span class="text-gray-666">Subtotal</span>
        <span class="flex-1 text-right text-blod-100">HK$1,403.95</span>
      </div>

      <div class="flex text-lg mt-[26px]">
        <span class="text-gray-666">Shipping</span> <span class="flex-1 text-right text-blod-100">Free shipping</span>
      </div>

      <div class="text-sm mt-9 text-gary-666">*All orders are processed in USD</div>
      <button class="mt-[77px] w-full py-[13px] text-lg text-white rounded-100 bg-primary-700" @click="open">proceed to checkout</button>
    </div>
  </div>

  <!-- Backdrop -->
  <transition
    enter-active-class="transition duration-200 ease-out"
    leave-active-class="transition duration-200 ease-out"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div v-if="isOpen" class="fixed inset-0 bg-opacity-50 bg-neutral-700" />
  </transition>

  <!-- Modal -->
  <transition
    enter-active-class="transition duration-200 ease-out"
    leave-active-class="transition duration-200 ease-out"
    enter-from-class="translate-y-10 opacity-0"
    enter-to-class="translate-y-0 opacity-100"
    leave-from-class="translate-y-0 opacity-100"
    leave-to-class="translate-y-10 opacity-0"
  >
    <SfModal
      v-model="isOpen"
      class="w-[28.5rem] !py-30 !px-[52px] text-center"
      tag="section"
      role="alertdialog"
      aria-labelledby="promoModalTitle"
      aria-describedby="promoModalDesc"
    >
      <img class="w-[77px] h-[66px] mx-auto" src="../../assets/images/shop/icon-collect.svg" alt="" srcset="" />
      <p id="promoModalDesc" class="mt-6 text-lg text-center">
        “Stainless Steel Sink Dish Storage Countertop Organizer - Basic Set Silver” has been added to your cart.
      </p>
      <button class="w-full text-lg py-[13px] rounded-100 text-bold-100 mt-30 bg-neutral-100">closure</button>
    </SfModal>
  </transition>
</template>

<script lang="ts" setup>
import { SfModal, SfIconClose, useDisclosure } from "@storefront-ui/vue";

const { isOpen, open } = useDisclosure({ initialValue: false });

import { SfIconFavorite } from "@storefront-ui/vue";
import { ref } from "vue";
// https://tailwind.nodejs.cn/docs/table-layout
const count = ref(1);
</script>
