<template>
  <footer class="text-gray-800 bg-neutral-100">
    <div
      class="px-4 py-8 mx-auto max-w-7xl md:flex md:items-center md:justify-between"
    >
      <div class="mb-6 md:mb-0">
        <img src=".././assets/images/logo.svg" alt="" class="mt-5 w-154 h-33" />
        <p class="mt-8 text-sm text-gray-600 max-w-[480px]">
          Join our newsletter to get the latest PetBoutique updates and surprise
          discounts!
        </p>
        <div class="grid grid-cols-2">
          <a
            href="#"
            class="mb-2 mr-4 w-[200px] text-sm text-gray-600 hover:underline"
            >About Us</a
          >
          <a
            href="#"
            class="mb-2 mr-4 w-[200px] text-sm text-gray-600 hover:underline"
            >Terms of Service</a
          >
          <a
            href="#"
            class="mb-2 mr-4 w-[200px] text-sm text-gray-600 hover:underline"
            >Privacy Policy</a
          >
          <a
            href="#"
            class="mb-2 mr-4 w-[200px] text-sm text-gray-600 hover:underline"
            >Refunds</a
          >
          <a href="#" class="text-sm w-[200px] text-gray-600 hover:underline"
            >Shipping Info</a
          >
        </div>
      </div>
      <div class="flex-grow">
        <!-- <div class="flex flex-col sm:flex-row">
          <input
            type="text"
            placeholder="Please enter your email"
            class="w-full p-2 mb-4 text-gray-700 border border-orange-300 sm:mb-0 sm:mr-4 rounded-l-md focus:outline-none focus:ring focus:border-orange-500"
          />
          <button
            class="w-full px-4 py-2 font-bold text-white bg-orange-500 sm:w-auto hover:bg-orange-600 rounded-r-md"
          >
            subscription
          </button>
        </div> -->

        <NewsletterBox></NewsletterBox>

        <div class="mt-4 md:mt-0" style="text-align: right;">
          <span class="text-sm text-gray-600">FOLLOW US</span>

          <div class="flex justify-end py-2 gap-x-4 md:self-start">
            <span
              v-for="{ label, link, icon } in socialMedia"
              :key="label"
              tag="a"
              square
              variant="tertiary"
              class="text-zinc-500 border-stone-200 rounded-full border-solid hover:border-dotted active:text-white hover:text-white hover:!bg-red-300 active:!bg-transparent"
              :href="link"
              :aria-label="`Go to ${label} page`"
            >
              <component :is="icon" />
            </span>
          </div>
        </div>
      </div>
    </div>

    <hr />
    <div
      class="mt-[40px] lg:mt-[18px] lg:mb-[10px] lg:flex lg:flex-nowrap lg:items-center lg:justify-center"
    >
      <p
        class="text-[0.85rem] text-gray-400 text-center relative right-0 mb-[10px]"
      >
        © 2023, PetBoutique All Rights Reserved.
      </p>
    </div>
  </footer>
</template>
<script lang="ts" setup>
import NewsletterBox from "./NewsletterBox.vue";
import {
  SfIconFacebook,
  SfIconInstagram,
  SfIconPinterest,
  SfIconTwitter,
  SfButton,
  SfLink,
  SfListItem,
} from "@storefront-ui/vue";
const categories = [
  {
    label: "How to buy",
    subcategories: [
      {
        subcategoryLabel: "Payment methods",
        link: "#",
      },
      {
        subcategoryLabel: "Order pickup",
        link: "#",
      },
      {
        subcategoryLabel: "Purchase status",
        link: "#",
      },
      {
        subcategoryLabel: "Track orders",
        link: "#",
      },
      {
        subcategoryLabel: "Returns",
        link: "#",
      },
    ],
  },
  {
    label: "Help",
    subcategories: [
      {
        subcategoryLabel: "Help centers",
        link: "#",
      },
      {
        subcategoryLabel: "Security & fraud",
        link: "#",
      },
      {
        subcategoryLabel: "Feedback",
        link: "#",
      },
      {
        subcategoryLabel: "Contact",
        link: "#",
      },
    ],
  },
];
const socialMedia = [
  {
    label: "Facebook",
    link: "#",
    icon: SfIconFacebook,
  },
  {
    label: "Twitter",
    link: "#",
    icon: SfIconTwitter,
  },
  {
    label: "Instagram",
    link: "#",
    icon: SfIconInstagram,
  },
  {
    label: "Pinterest",
    link: "#",
    icon: SfIconPinterest,
  },
];
</script>
