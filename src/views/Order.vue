<template>
  <div class="w-full md:flex">
    <div class="md:pr-15 md:pt-20 md:w-1/2 order-left">
      <div class="font-bold md:text-2xl text-bold-100">BILLING DETAILS</div>
      <form class="flex flex-wrap gap-[30px] mt-7.5 text-neutral-900" @submit.prevent="onSubmit">
        <label class="w-full md:w-auto flex-grow flex flex-col gap-0.5 mt-4 md:mt-0">
          <SfInput
            v-model="addressInfo.name"
            name="firstName"
            placeholder="name*"
            autocomplete="given-name"
            required
            class="text-lg md:!h-15"
            :invalid="usernameIsInvalid"
            @update:model-value="usernameIsInvalid = !addressInfo.name"
          />

          <p v-if="usernameIsInvalid" class="mt-0.5 text-negative-700 typography-text-sm font-medium">The field cannot be empty</p>
        </label>
        <label class="w-full md:w-auto flex-grow flex flex-col gap-0.5">
          <SfInput
            v-model="addressInfo.surname"
            name="lastName"
            placeholder="surname*"
            autocomplete="family-name"
            class="text-lg md:!h-15"
            required
          />
        </label>
        <label class="w-full flex flex-col gap-0.5">
          <SfInput
            v-model="addressInfo.companyName"
            name="phone"
            type="tel"
            autocomplete="tel"
            placeholder="Company name (optional)"
            required
            class="text-lg md:!h-15"
          />
        </label>
        <label class="w-full flex flex-col gap-0.5">
          <!-- <span class="font-medium typography-text-sm">Country</span> -->
          <SfSelect
            v-model="addressInfo.country"
            name="country"
            placeholder="-- Select Country --"
            autocomplete="country-name"
            required
            class="text-lg md:py-4.5"
          >
            <option v-for="countryName in countries" :key="countryName">{{ countryName }}</option>
          </SfSelect>
        </label>

        <label class="w-full md:w-auto flex-grow flex flex-col gap-0.5 mt-4 md:mt-0">
          <SfInput
            v-model="addressInfo.streetAddress"
            name="firstName"
            placeholder="Street address*"
            autocomplete="given-name"
            required
            class="text-lg md:!h-15"
          />
        </label>
        <label class="w-full md:w-auto flex-grow flex flex-col gap-0.5">
          <SfInput
            v-model="addressInfo.apartment"
            name="lastName"
            placeholder="apartment"
            autocomplete="family-name"
            required
            class="text-lg md:!h-15"
          />
        </label>
        <label class="w-full flex flex-col gap-0.5">
          <SfInput
            v-model="addressInfo.city"
            name="city"
            autocomplete="address-level2"
            required
            placeholder="city address*"
            class="text-lg md:!h-15"
          />
        </label>

        <label class="w-full md:w-auto flex-grow flex flex-col gap-0.5 mt-4 md:mt-0">
          <SfInput
            v-model="addressInfo.postCode"
            name="firstName"
            placeholder="post code*"
            autocomplete="given-name"
            required
            class="text-lg md:!h-15"
          />
        </label>
        <label class="w-full md:w-auto flex-grow flex flex-col gap-0.5">
          <SfInput
            v-model="addressInfo.phone"
            name="lastName"
            placeholder="Telephone*"
            autocomplete="family-name"
            required
            class="text-lg md:!h-15"
          />
        </label>

        <label class="w-full flex flex-col gap-0.5">
          <SfInput
            v-model="addressInfo.email"
            name="phone"
            type="tel"
            autocomplete="tel"
            required
            placeholder="email address*"
            class="text-lg md:!h-15"
          />
        </label>

        <label class="flex items-center w-full gap-2 text-2xl font-blod text-blod-100">
          <SfCheckbox name="useAsShippingAddress" />
          <span> Ship to a different address?</span>
        </label>
        <label class="w-full flex flex-col gap-0.5">
          <SfTextarea
            rows="4"
            ref="textareaRef"
            placeholder="Notes about your order, such as special delivery instructions"
            class="w-full h-max-[500px] text-lg hover:!ring-primary-700"
          />
        </label>
        <!-- <p class="text-lg text-gray-400">Notes about your order, such as special delivery instructions</p> -->

        <!-- <label class="flex w-full">
          <div class="flex-1">
            <SfInput name="city" autocomplete="address-level2" required placeholder="city address*" />
          </div>
          <SfButton type="submit" class="ml-5 px-[67px]">Save</SfButton>
        </label> -->
      </form>
    </div>
    <div class="md:w-1/2 bg-zinc-50 md:pt-20 md:pl-15 order-right">
      <!-- <div class="pt-[27px] pb-[25px]"> -->
      <div class="text-2xl font-bold text-blod-100">YOUR ORDER</div>

      <div v-for="item in cart.effectiveList" :key="item.skuId" class="flex items-center border-b border-gray-100 py-30">
        <img :src="item.picture" alt="" srcset="" class="w-[150px] h-[150px] rounded-20" />
        <p class="w-[320px] ml-30">
          {{ item.name }}<br />
          {{ item.attrsText }}
        </p>
        <span class="ml-auto">×{{ item.count }}</span>
      </div>

      <div class="flex text-lg mt-[26px]">
        <span class="text-gray-666">Subtotal</span>
        <span class="flex-1 text-right text-blod-100">$1,403.95</span>
      </div>

      <div class="flex text-lg mt-[26px]">
        <span class="text-gray-666">Shipping</span> <span class="flex-1 text-right text-blod-100">Free shipping</span>
      </div>
      <div class="flex text-lg mt-[26px]">
        <span class="text-gray-666">Route Shipping Protection</span> <span class="flex-1 text-right text-blod-100">$33.10</span>
      </div>

      <div class="flex border-gray-100 border-y md:text-2xl my-7.5 py-7.5">
        <span class="font-bold text-gray-666">Total</span>
        <span class="flex-1 font-bold text-right text-blod-100">${{ cart.effectiveListPrice }}</span>
      </div>

      <div class="text-2xl text-blod-100 mb-7.5">Payment</div>
      <div class="bg-white border rounded-[10px] border-gray-100">
        <SfAccordionItem v-for="{ id } in accordionItems" :key="id" :model-value="isOpen(id)" @update:model-value="toggle(id, $event)">
          <template #summary>
            <label class="flex items-center pl-7.5 pr-6 py-3.5 border-b border-gray-100">
              <SfRadio v-model="opened" size="sm" class="block" :value="id" :name="id" />
              <span class="ml-4 text-lg text-bold-100">Credit card</span>
              <img src="@/assets/images/order/icon-bank-payment.png" alt="" srcset="" class="h-[53px] w-[368px] ml-auto" />
            </label>
          </template>
          <div class="flex flex-wrap pb-9">
            <label class="flex flex-col w-full mx-30 mt-30">
              <span class="text-lg text-bold-100 mb-2.5">Card number</span>

              <SfInput name="phone" type="tel" autocomplete="tel" required placeholder="123123123123" class="h-15" />
            </label>

            <label class="w-full md:w-auto flex-grow flex flex-col gap-0.5 mx-30 mt-30">
              <span class="text-lg text-bold-100 mb-2.5">Validity period</span>
              <SfInput name="firstName" placeholder="month/year" autocomplete="given-name" required class="h-15" />
            </label>
            <label class="w-full md:w-auto flex-grow flex flex-col gap-0.5 mx-30 mt-30">
              <span class="text-lg text-bold-100 mb-2.5">CVR</span>
              <SfInput name="lastName" placeholder="CVR" autocomplete="family-name" required class="h-15" />
            </label>
          </div>
        </SfAccordionItem>
      </div>

      <button type="submit" class="w-full my-10 text-lg font-bold text-white h-15 rounded-100 bg-primary-700">
        Place an order ${{ cart.effectiveListPrice }}
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { SfSelect, SfInput, SfCheckbox, SfTextarea, SfRadio, SfAccordionItem } from "@storefront-ui/vue";

// Here you should provide a list of countries you want to support
// or use an up-to-date country list like: https://www.npmjs.com/package/country-list
const countries = ["Germany", "Great Britain", "Poland", "United States of America"] as const;
// const states = ["California", "Florida", "New York", "Texas"] as const;

import useStore from "@/stores";
const { cart } = useStore();
// cart.getCartList();

// const streetIsValid = ref(true);

const addressInfo = ref({
  name: "",
  surname: "",
  phone: "",
  companyName: "",
  country: "",
  streetAddress: "",
  apartment: "",
  city: "",
  address: "",
  postCode: "",
  email: "",
});
const usernameIsInvalid = ref(false);
const onSubmit = (e: Event) => {
  /* your submit handler, e.g.: */
  const form = e.target as HTMLFormElement;

  // data can be accessed in form of FormData
  const formData = new FormData(form);
  // or JSON object
  const formJSON = Object.fromEntries(formData.entries());
  console.log(formJSON);
};

// const radioModel = ref("value-1");
// const radioOptions = [{ value: "value-1", name: "radio-1" }];

const opened = ref<string>("acc-1");

const isOpen = (id: string) => id === opened.value;

const toggle = (id: string, open: boolean) => {
  if (open) opened.value = id;
};
const accordionItems = [
  {
    id: "acc-1",
    summary: "Where is my order?",
    details: "We will inform you about the expected delivery time of your order in checkout and in your order confirmation email.",
  },
  // {
  //   id: "acc-2",
  //   summary: "What if an item is out of stock?",
  //   details: "If an item you're interested in is sold out, you can register to be notified when your size is back in stock.",
  // },
  // {
  //   id: "acc-3",
  //   summary: "How do I cancel my order?",
  //   details:
  //     "If you made a mistake or simply changed your mind after placing an order, there's no need to fuss. As long as your parcel has yet to be picked and packed in our warehouse, you'll have the option to cancel.",
  // },
];
</script>
<style scoped>
@media (min-width: 768px) {
  /* .carousel {
    height: min(calc(100vh - 100px), 980px);
  } */
  .order-left label > .h-\[48px\],
  .order-left label > .h-\[64px\],
  .order-right label > .h-\[40px\],
  .order-left label > .h-\[40px\] {
    height: auto;
  }
  .order-left {
    padding-left: max(calc(50% - 810px), 24px);
  }
  .order-right {
    padding-right: max(calc(50% - 810px), 24px);
  }
  .carousel-img {
    height: min(calc(100vh - 100px), 980px);
  }
}
</style>
