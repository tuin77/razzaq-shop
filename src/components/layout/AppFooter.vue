<template>
  <footer class="relative text-gray-800 bg-neutral-100">
    <div class="px-4 mx-auto lg:px-6 xxl:px-0 md:py-14 max-w-1620 md:flex md:justify-between">
      <div class="p-10 md:mb-0">
        <img src="../.././assets/images/logo.svg" alt="" class="w-[100px] h-[21px] md:w-[154px] md:h-[33px] mx-auto md:ml-0" />
        <p class="mt-5 text-center md:text-left text-xs md:text-base text-gray-400 max-w-[30rem]">
          Join our newsletter to get the latest PetBoutique updates and surprise discounts!
        </p>
        <div class="pt-10 text-center md:text-left md:text-lg md:grid md:grid-cols-2 text-bold-100">
          <a href="#" class="block mb-7 hover:underline hover:text-primary-700">About Us</a>
          <a href="#" class="block mb-7 hover:underline hover:text-primary-700">Terms of Service</a>
          <a href="#" class="block mb-7 hover:underline hover:text-primary-700">Contact Us</a>
          <a href="#" class="block mb-7 hover:underline hover:text-primary-700">Privacy Policy</a>
          <a href="#" class="block col-span-2 mb-7 hover:underline hover:text-primary-700">Refunds</a>
          <a href="#" class="block col-span-2 mb-10 hover:underline hover:text-primary-700">Shipping Info</a>
        </div>
      </div>
      <div class="flex-1 pt-3">
        <NewsletterBox></NewsletterBox>

        <div class="my-9 md:mt-[5.625rem] text-right">
          <span class="hidden text-2xl text-bold-100 md:block">FOLLOW US</span>

          <div class="flex justify-center md:justify-end gap-x-4 md:self-start">
            <span
              v-for="{ label, link, icon } in socialMedia"
              :key="label"
              tag="a"
              square
              variant="tertiary"
              class="w-10 rounded-full border border-solid border-gray-100 cursor-pointer hover:border-dotted active:text-white hover:text-white hover:!bg-primary-700 active:!bg-primary-700"
              :href="link"
              :aria-label="`Go to ${label} page`"
            >
              <component :is="icon" size="xl" />
            </span>
          </div>
        </div>
      </div>
    </div>

    <hr class="border-gray-100" />
    <div class="relative py-[17px] md:py-6 lg:flex lg:flex-nowrap lg:items-center lg:justify-center">
      <p class="text-xs text-center text-gray-400 md:text-sm">© 2023, PetBoutique All Rights Reserved.</p>
    </div>
  </footer>
</template>
<script lang="ts" setup>
import NewsletterBox from "./NewsletterBox.vue";
import { SfIconFacebook, SfIconInstagram, SfIconPinterest, SfIconTwitter } from "@storefront-ui/vue";

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
