<template>
  <div class="flex w-full">
    <div class="w-1/2" style="padding-left: calc((100% - 1620px) / 2)">
      <form class="flex flex-wrap gap-4 p-4 text-neutral-900" @submit.prevent="onSubmit">
        <h2 class="w-full font-bold typography-headline-4 md:typography-headline-3">BILLING DETAILS</h2>
        <label class="w-full md:w-auto flex-grow flex flex-col gap-0.5 mt-4 md:mt-0">
          <SfInput name="firstName" placeholder="name*" autocomplete="given-name" required />
        </label>
        <label class="w-full md:w-auto flex-grow flex flex-col gap-0.5">
          <SfInput name="lastName" placeholder="surname*" autocomplete="family-name" required />
        </label>
        <label class="w-full flex flex-col gap-0.5">
          <SfInput name="phone" type="tel" autocomplete="tel" placeholder="Company name (optional)" required />
        </label>
        <label class="w-full flex flex-col gap-0.5">
          <span class="font-medium typography-text-sm">Country</span>
          <SfSelect name="country" placeholder="-- Select --" autocomplete="country-name" required>
            <option v-for="countryName in countries" :key="countryName">{{ countryName }}</option>
          </SfSelect>
        </label>

        <label class="w-full md:w-auto flex-grow flex flex-col gap-0.5 mt-4 md:mt-0">
          <SfInput name="firstName" placeholder="Street address*" autocomplete="given-name" required />
        </label>
        <label class="w-full md:w-auto flex-grow flex flex-col gap-0.5">
          <SfInput name="lastName" placeholder="apartment" autocomplete="family-name" required />
        </label>
        <label class="w-full flex flex-col gap-0.5">
          <SfInput name="city" autocomplete="address-level2" required placeholder="city address*" />
        </label>

        <label class="w-full md:w-auto flex-grow flex flex-col gap-0.5 mt-4 md:mt-0">
          <SfInput name="firstName" placeholder="post code*" autocomplete="given-name" required />
        </label>
        <label class="w-full md:w-auto flex-grow flex flex-col gap-0.5">
          <SfInput name="lastName" placeholder="Telephone*" autocomplete="family-name" required />
        </label>

        <label class="w-full flex flex-col gap-0.5">
          <SfInput name="phone" type="tel" autocomplete="tel" required placeholder="email address*" />
        </label>

        <label class="flex items-center w-full gap-2">
          <SfCheckbox name="useAsShippingAddress" />
          Ship to a different address?
        </label>
        <label class="w-full flex flex-col gap-0.5">
          <SfTextarea
            ref="textareaRef"
            placeholder="Notes about your order, such as special delivery instructions"
            class="w-full h-max-[500px] block"
          />
        </label>
        <p class="text-lg text-gray-400">Notes about your order, such as special delivery instructions</p>

        <label class="flex w-full">
          <div class="flex-1">
            <SfInput name="city" autocomplete="address-level2" required placeholder="city address*" />
          </div>
          <SfButton type="submit" class="ml-5 px-[67px]">Save</SfButton>
        </label>
      </form>
    </div>
    <div class="w-1/2 bg-zinc-50 pt-[80px] pl-[60px]" style="padding-right: calc((100% - 1620px) / 2)">
      <div class="pt-[27px] pb-[25px]">
        <div class="text-2xl text-blod-100">YOUR ORDER</div>

        <div class="flex items-center border-b border-gray-100 py-30">
          <img src="../../assets/images/shop/product-img1.png" alt="" srcset="" class="w-[150px] h-[150px] rounded-20" />
          <span class="w-[320px] ml-30">Wall Suction Soft Durable Bath Massage Brush – BlueFrom wishlist:Default wishlist</span>
          <span class="ml-auto">×1</span>
        </div>

        <div class="flex text-lg mt-[26px]">
          <span class="text-gray-666">Subtotal</span>
          <span class="flex-1 text-right text-blod-100">HK$1,403.95</span>
        </div>

        <div class="flex text-lg mt-[26px]">
          <span class="text-gray-666">Shipping</span> <span class="flex-1 text-right text-blod-100">Free shipping</span>
        </div>
        <div class="flex text-lg mt-[26px]">
          <span class="text-gray-666">Route Shipping Protection</span> <span class="flex-1 text-right text-blod-100">$33.10</span>
        </div>

        <div class="flex text-lg mt-[26px] border-b border-gray-100 py-30">
          <span class="text-gray-666">Total</span> <span class="flex-1 text-right text-blod-100">$1,537.85</span>
        </div>

        <div class="text-2xl text-blod-100">Payment</div>

        <div class="bg-white border rounded-[10px] border-gray-100">
          <div class="flex border-b border-gray-100 py-[14px] pl-30 pr-[24px]">
            <SfRadio v-for="{ name, value } in radioOptions" :key="value" v-model="radioModel" class="block mt-4" :value="value" :name="name" />
            <img src="../../assets/images/order/icon-bank-payment.png" alt="" srcset="" class="h-[53px] w-[368px] ml-auto" />
          </div>
          <label class="flex flex-col mx-30 mt-30">
            <span class="font-medium typography-text-sm">Card number</span>

            <SfInput name="phone" type="tel" autocomplete="tel" required placeholder="email address*" />
          </label>

          <label class="w-full md:w-auto flex-grow flex flex-col gap-0.5 mx-30 mt-30">
            <span class="font-medium typography-text-sm">Validity period</span>
            <SfInput name="firstName" placeholder="name*" autocomplete="given-name" required />
          </label>
          <label class="w-full md:w-auto flex-grow flex flex-col gap-0.5 mx-30 mt-30 mb-[37px]">
            <span class="font-medium typography-text-sm">CVR</span>
            <SfInput name="lastName" placeholder="surname*" autocomplete="family-name" required />
          </label>
        </div>

        <button class="mt-[77px] w-full py-[13px] text-lg text-white rounded-100 bg-primary-700" @click="open">Place an order $1,537.85</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { SfSelect, SfInput, SfCheckbox, SfButton, SfTextarea, SfRadio } from "@storefront-ui/vue";

// Here you should provide a list of countries you want to support
// or use an up-to-date country list like: https://www.npmjs.com/package/country-list
const countries = ["Germany", "Great Britain", "Poland", "United States of America"] as const;
const states = ["California", "Florida", "New York", "Texas"] as const;

const streetIsValid = ref(true);

const onSubmit = (e: Event) => {
  /* your submit handler, e.g.: */
  const form = e.target as HTMLFormElement;

  // data can be accessed in form of FormData
  const formData = new FormData(form);
  // or JSON object
  const formJSON = Object.fromEntries(formData.entries());
  console.log(formJSON);
};

const radioModel = ref("value-1");
const radioOptions = [{ value: "value-1", name: "radio-1" }];
</script>
