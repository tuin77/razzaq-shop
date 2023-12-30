<template>
  <footer class="text-gray-800 bg-neutral-100 px-4 lg:px-6">
    <div class="mx-auto py-14 max-w-1620 md:flex md:justify-between">
      <div class="mb-6 md:mb-0">
        <img src="../.././assets/images/logo.svg" alt="" class="w-154 h-33" />
        <p class="mt-8 text-base text-gray-400 max-w-[30rem]">Join our newsletter to get the latest PetBoutique updates and surprise discounts!</p>
        <div class="grid grid-cols-2 pt-10 text-lg text-bold-100">
          <a href="#" class="mb-4 w-[200px] hover:underline hover:text-primary-700">About Us</a>
          <a href="#" class="mb-4 w-[200px] hover:underline hover:text-primary-700">Terms of Service</a>
          <a href="#" class="mb-4 w-[200px] hover:underline hover:text-primary-700">Contact Us</a>
          <a href="#" class="mb-4 w-[200px] hover:underline hover:text-primary-700">Privacy Policy</a>
          <a href="#" class="mb-4 w-[200px] hover:underline col-span-2 hover:text-primary-700">Refunds</a>
          <a href="#" class="w-[200px] hover:underline col-span-2 hover:text-primary-700">Shipping Info</a>
        </div>
      </div>
      <div class="flex-1 pt-3">
        <NewsletterBox></NewsletterBox>

        <div class="mt-[5.625rem] text-right">
          <span class="text-2xl text-bold-100">FOLLOW US</span>

          <div class="flex justify-end py-5 gap-x-4 md:self-start">
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

    <hr />
    <div class="py-6 lg:flex lg:flex-nowrap lg:items-center lg:justify-center">
      <p class="text-sm text-gray-400 text-center relative">© 2023, PetBoutique All Rights Reserved.</p>
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
