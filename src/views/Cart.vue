<template>
  <hr class="border-gray-100" />
  <div class="items-start justify-between px-4 mx-auto mb-10 table-fixed md:px-0 md:mt-20 md:flex md:mb-36 max-w-1620">
    <table>
      <thead class="hidden border-b border-gray-100 md:table-header-group">
        <tr class="border-b border-gray-100">
          <th class="font-normal text-left pb-7">PRODUCT</th>
          <th class="font-normal text-left pb-7">PRICE</th>
          <th class="font-normal pb-7">QUANTITY</th>
          <th class="font-normal text-right pb-7">SUBTOTAL</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in cart.effectiveList" :key="item.skuId" class="py-10 border-b border-gray-100">
          <td class="md:pr-[47px] md:py-10 pb-10 pt-7.5">
            <div class="flex md:items-center">
              <SfIconClose
                class="w-4 h-4 mt-10 mr-3 text-gray-200 cursor-pointer md:mt-0 md:mr-30"
                @click="cart.deleteCart({ skuId: item.skuId, cartId: item.cartId })"
              ></SfIconClose>
              <img
                :src="item.picture"
                class="w-24 h-24 md:w-[208px] md:h-[208px] rounded-[20px] cursor-pointer"
                alt=""
                srcset=""
                @click="goPageShopping(item)"
              />
              <div class="ml-4 text-xs md:text-lg">
                <p class="md:w-[320px] md:ml-30 text-bold-100">
                  {{ item.name }}
                  <br />
                  {{ item.attrsText }}
                </p>
                <div class="flex mt-4 md:hidden">
                  <span class="text-gray-666">PRICE：</span> <span class="flex-1 text-right text-blod-100">${{ item.price }}</span>
                </div>
                <div class="flex mt-4 md:hidden">
                  <span class="text-gray-666">QUANTITY：</span>
                  <span class="flex-1 text-right text-blod-100">
                    <SfButton
                      variant="secondary"
                      :disabled="count <= min"
                      square
                      class="!rounded-100 w-6 h-6 mr-4.5"
                      :aria-controls="inputId"
                      aria-label="Decrease value"
                      @click="dec()"
                    >
                      -
                    </SfButton>
                    <span class="text-sm">{{ item.count }}</span>
                    <SfButton
                      variant="secondary"
                      :disabled="count >= max"
                      square
                      class="!rounded-100 w-6 h-6 ml-4.5"
                      :aria-controls="inputId"
                      aria-label="Increase value"
                      @click="inc()"
                    >
                      +
                    </SfButton>
                  </span>
                </div>
                <div class="flex mt-4 md:hidden">
                  <span class="text-gray-666">SUBTOTAL：</span>
                  <span class="flex-1 text-right text-blod-100">${{ (item.count * Number(item.price)).toFixed(2) }}</span>
                </div>
                <div class="mt-4 mb-5 mb-10 md:hidden">
                  <button
                    type="button"
                    class="flex items-center justify-center py-1 text-sm text-gray-200 transition-colors duration-200 bg-white gap-x-2"
                  >
                    <SfIconFavorite size="sm" />
                    <span>Save for later</span>
                  </button>
                </div>
              </div>
            </div>
          </td>
          <td class="pr-[83px] hidden md:table-cell">${{ item.price }}</td>
          <td class="hidden md:table-cell">
            <input
              v-model="item.count"
              type="number"
              min="1"
              class="w-[150px] h-[60px] border border-gray-100 rounded-100 px-30 text-bold-100"
              @input="cart.updateCart(item)"
            />
          </td>
          <td class="text-right pl-[70px] hidden md:table-cell">
            <div class="text-lg text-bold-100">${{ (item.count * Number(item.price)).toFixed(2) }}</div>
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
      <tfoot class="hidden md:table-footer-group">
        <tr>
          <td>
            <button
              type="button"
              class="flex items-center justify-center py-1 mt-6 text-2xl text-gray-200 transition-colors duration-200 bg-white sm:w-auto"
              @click="goBack"
            >
              <img
                class="flex-shrink-0 h-3.5 text-gray-400 transition duration-75 w-7"
                src="@/assets/images/login/icon-left-arrow.svg"
                alt="Your Company"
              />
              <span class="ml-5 text-bold-100">continue shopping</span>
            </button>
          </td>
          <td class="text-right" colspan="4">
            <button
              type="button"
              class="flex items-center justify-center py-1 mt-6 ml-auto text-2xl text-gray-200 transition-colors duration-200 bg-white sm:w-auto"
              @click="refreshCart"
            >
              <img
                :class="['flex-shrink-0 w-[22px] h-[22px] text-gray-400 transition duration-75', refreshBtnClass]"
                src="@/assets/images/shop/icon-loading.svg"
                alt="Your Company"
              />
              <!-- animate-spin-slow -->
              <span class="ml-5 text-bold-100">refresh package</span>
            </button>
          </td>
        </tr>
      </tfoot>
      <div class="flex justify-between"></div>
    </table>
    <div class="bg-neutral-100 border mt-10 md:mt-0 rounded-20 border-gray-100 pt-[27px] pb-[25px] px-[25px]">
      <span class="text-2xl text-blod-100">Cart totals</span>

      <div class="flex text-lg mt-[26px]">
        <span class="text-gray-666">Subtotal</span>
        <span class="flex-1 text-right text-blod-100">${{ cart.effectiveListPrice }}</span>
      </div>

      <div class="flex text-lg mt-[26px]">
        <span class="text-gray-666">Shipping</span> <span class="flex-1 text-right text-blod-100">Free shipping</span>
      </div>

      <div class="text-sm mt-9 text-gary-666">*All orders are processed in USD</div>
      <button class="mt-[77px] w-full py-[13px] text-lg text-white rounded-100 bg-primary-700" @click="toPageOrder">proceed to checkout</button>
    </div>
  </div>
  <!-- @click="open" -->
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
      <img class="w-[77px] h-[66px] mx-auto" src="@/assets/images/shop/icon-collect.svg" alt="" srcset="" />
      <p id="promoModalDesc" class="mt-6 text-lg text-center">
        “Stainless Steel Sink Dish Storage Countertop Organizer - Basic Set Silver” has been added to your cart.
      </p>
      <button class="w-full text-lg py-[13px] rounded-100 text-bold-100 mt-30 bg-neutral-100">closure</button>
    </SfModal>
  </transition>
</template>

<script lang="ts" setup>
import { SfModal, SfIconClose, useDisclosure } from "@storefront-ui/vue";

const { isOpen } = useDisclosure({ initialValue: false });

import { SfIconFavorite } from "@storefront-ui/vue";
// import { ref } from "vue";
// https://tailwind.nodejs.cn/docs/table-layout
// const count = ref(1);

import router from "@/router";

import useStore from "@/stores";
const { cart } = useStore();
cart.getCartList();

const goBack = () => router.go(-1);
const goPageShopping = (item: any) => {
  console.log("item", item);

  router.push({ name: `product`, query: { id: item.id, skuId: item.skuId } });
};
const toPageOrder = () => {
  router.push({ path: `/order` });
};
// const changeCount = (skuId: string, count: number) => {
//   // console.log({ skuId, count });
//   cart.updateCart(skuId, { count: count });
// };

import { ref } from "vue";
import { SfButton, useId } from "@storefront-ui/vue";
// import { clamp } from "@storefront-ui/shared";
import { useCounter } from "@vueuse/core";

const min = ref(1);
const max = ref(10);
const inputId = useId();
const { count, inc, dec } = useCounter(1, { min: min.value, max: max.value });
// function handleOnChange(event: Event) {
//   const currentValue = (event.target as HTMLInputElement)?.value;
//   const nextValue = parseFloat(currentValue);
//   set(clamp(nextValue, min.value, max.value));
// }
const refreshBtnClass = ref("");
const refreshCart = () => {
  refreshBtnClass.value = "animate-spin";
  cart.getCartList();
  setTimeout(() => (refreshBtnClass.value = ""), 800);
};
</script>
