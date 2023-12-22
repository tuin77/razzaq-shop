<template>
  <footer class="pt-10 bg-neutral-100">
    <div
      class="grid justify-center grid-cols-[1fr_1fr] md:grid-cols-[repeat(2,1fr)] px-2 md:px-6 pb-10 max-w-[1536px] mx-auto"
    >
      <div>
        <div class="typography-text-xs text-neutral-600">
          Join our newsletter to get the latest PetBoutique updates and surprise
          discounts!
        </div>
        <ul
          v-for="{ label, subcategories } in categories"
          :key="label"
          class="grid grid-cols xs:pb-4"
        >
          <SfListItem
            v-for="{ subcategoryLabel, link } in subcategories"
            :key="subcategoryLabel"
            class="py-2 !bg-transparent typography-text-sm font-body"
          >
            <SfLink
              class="no-underline text-neutral-600 hover:underline hover:!text-neutral-900 active:underline active:!text-neutral-900"
              variant="secondary"
              :href="link"
            >
              {{ subcategoryLabel }}
            </SfLink>
          </SfListItem>
        </ul>
      </div>
      <NewsletterBox></NewsletterBox>
    </div>
    <hr />

    <div class="justify-end px-4 py-10 md:flex md:py-6 max-w-[1536px] mx-auto">
      <div class="flex justify-center py-2 gap-x-4 md:self-start">
        <SfButton
          v-for="{ label, link, icon } in socialMedia"
          :key="label"
          tag="a"
          square
          variant="tertiary"
          class="text-white active:text-white hover:text-white hover:!bg-neutral-500 active:!bg-transparent"
          :href="link"
          :aria-label="`Go to ${label} page`"
        >
          <component :is="icon" />
        </SfButton>
      </div>
    </div>
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
  SfIconYoutube,
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
  {
    label: "Youtube",
    link: "#",
    icon: SfIconYoutube,
  },
];
</script>
