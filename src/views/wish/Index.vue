<template>
  <div class="flex items-start mx-auto mt-20 table-fixed mb-36 max-w-1620">
    <table class="">
      <thead>
        <tr class="border-b border-gray-100">
          <th class="flex items-center font-normal text-left pb-7"><SfCheckbox v-model="modelValue" value="value" class="mr-7" /> PRODUCT</th>
          <th class="font-normal text-left pb-7">PRICE</th>
          <th class="font-normal pb-7">QUANTITY</th>
          <th class="font-normal text-right pb-7">STOCK STATUS</th>
          <th class="font-normal text-right pb-7"></th>
        </tr>
      </thead>
      <tbody>
        <tr class="py-10 border-b border-gray-100">
          <td class="pr-[47px] py-10 flex items-center">
            <SfCheckbox v-model="modelValue" value="value" class="mr-7" />
            <button>
              <SfIconClose size="lg" class="text-gray-200 mr-30"></SfIconClose>
            </button>
            <img src="../../assets/images/shop/product-img1.png" class="w-[208px] h-[208px]" alt="" srcset="" />
            <p class="w-[320px] ml-30 text-bold-100">Wall Suction Soft Durable Bath Massage Brush – BlueFrom wishlist:Default wishlist</p>
          </td>
          <td class="pr-[83px]">HK$272.95</td>
          <td>
            <input v-model="count" type="number" min="0" class="w-[150px] h-[60px] border border-gray-100 rounded-100 px-30 text-lg text-bold-100" />
          </td>
          <td class="text-right pl-[70px] text-bold-100">1000 in stock</td>
          <td class="pl-28">
            <button class="py-[18px] px-4 text-lg text-blod-100 rounded-100 bg-neutral-100" @click="open">Add to cart</button>
          </td>
        </tr>
        <tr class="py-10 border-b border-gray-100">
          <td class="pr-[47px] py-10 flex items-center">
            <SfCheckbox v-model="modelValue" value="value" class="mr-7" />
            <button>
              <SfIconClose size="lg" class="text-gray-200 mr-30"></SfIconClose>
            </button>
            <img src="../../assets/images/shop/product-img1.png" class="w-[208px] h-[208px]" alt="" srcset="" />
            <p class="w-[320px] ml-30 text-bold-100">Wall Suction Soft Durable Bath Massage Brush – BlueFrom wishlist:Default wishlist</p>
          </td>
          <td class="pr-[83px]">HK$272.95</td>
          <td>
            <input v-model="count" type="number" min="0" class="w-[150px] h-[60px] border border-gray-100 rounded-100 px-30 text-lg text-bold-100" />
          </td>
          <td class="text-right pl-[70px] text-bold-100">1000 in stock</td>
          <td class="pl-28">
            <button class="py-[18px] px-4 text-lg text-blod-100 rounded-100 bg-neutral-100" @click="open">Add to cart</button>
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td class="relative py-10">
            <SelectDropdown class="w-[346px] inline-block"></SelectDropdown>
            <button class="ml-30 py-[18px] px-4 text-lg text-blod-100 rounded-100 bg-neutral-100" @click="open">Apply for action</button>
          </td>
          <td class="py-10 text-right" colspan="4">
            <button class="py-[18px] px-4 text-lg text-blod-100 rounded-100 bg-neutral-100" @click="open">Update wish list</button>
            <button class="ml-30 py-[18px] px-4 text-lg text-blod-100 rounded-100 bg-neutral-100 hover:bg-primary-700 hover:text-white" @click="open">
              Add all to cart
            </button>
          </td>
        </tr>
      </tfoot>
      <div class="flex justify-between"></div>
    </table>
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
      <img class="w-[77px] h-[66px] mx-auto" src="../../assets/images/shop/icon-collected.svg" alt="" srcset="" />
      <p id="promoModalDesc" class="mt-6 text-lg text-center">
        Stainless Steel Sink Dish Storage Countertop Organizer - Basic Set Silver added to Wishlist
      </p>
      <button class="w-full text-lg py-[13px] rounded-100 text-bold-100 mt-30 bg-neutral-100">View wish list</button>
      <button class="w-full text-lg py-[13px] rounded-100 text-bold-100 mt-5 bg-neutral-100">closure</button>
    </SfModal>
  </transition>
</template>

<script lang="ts" setup>
import { SfModal, SfIconClose, useDisclosure, SfCheckbox } from "@storefront-ui/vue";
import SelectDropdown from "./SelectDropdown.vue";

const { isOpen, open, close } = useDisclosure({ initialValue: false });

const modelValue = ref([]);
import { SfIconFavorite } from "@storefront-ui/vue";
import { ref } from "vue";
// https://tailwind.nodejs.cn/docs/table-layout
const count = ref(1);
</script>
