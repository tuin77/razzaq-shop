<template>
  <div class="grid w-full grid-cols-1 lg:grid-cols-2">
    <div style="padding-left: calc((100% - 1620px) / 2)">
      <form class="flex flex-wrap gap-4 p-4 text-neutral-900" @submit.prevent="onSubmit">
        <h2 class="w-full font-bold typography-headline-4 md:typography-headline-3">BILLING DETAILS</h2>
        <label class="w-full md:w-auto flex-grow flex flex-col gap-0.5 mt-4 md:mt-0">
          <SfInput name="firstName" placeholder="name*" autocomplete="given-name" required />
        </label>
        <label class="w-full md:w-auto flex-grow flex flex-col gap-0.5">
          <SfInput name="lastName" placeholder="surname*" autocomplete="family-name" required />
        </label>
        <label class="w-full flex flex-col gap-0.5">
          <span class="font-medium typography-text-sm">Phone</span>
          <SfInput name="phone" type="tel" autocomplete="tel" required />
        </label>
        <label class="w-full flex flex-col gap-0.5 flex flex-col gap-0.5">
          <span class="font-medium typography-text-sm">Country</span>
          <SfSelect name="country" placeholder="-- Select --" autocomplete="country-name" required>
            <option v-for="countryName in countries" :key="countryName">{{ countryName }}</option>
          </SfSelect>
        </label>
        <div class="w-full md:w-auto flex-grow flex flex-col gap-0.5">
          <label>
            <span class="font-medium typography-text-sm">Street</span>
            <SfInput
              name="street"
              autocomplete="address-line1"
              class="mt-0.5"
              required
              :invalid="!streetIsValid"
              @blur="streetIsValid = !!$event.target.value"
              @update:model-value="streetIsValid = !!$event"
            />
          </label>
          <div class="flex flex-colr mt-0.5">
            <strong v-if="!streetIsValid" class="font-medium typography-error-sm text-negative-700"> Please provide a valid street name </strong>
            <small class="typography-hint-xs text-neutral-500">Street address or P.O. Box</small>
          </div>
        </div>
        <div class="w-full flex flex-col gap-0.5 md:w-[120px]">
          <label>
            <span class="font-medium typography-text-sm">Apt#, Suite, etc</span>
            <SfInput name="aptNo" class="mt-0.5" />
          </label>
          <small class="typography-hint-xs text-neutral-500 mt-0.5">Optional</small>
        </div>
        <label class="w-full flex flex-col gap-0.5">
          <span class="font-medium typography-text-sm">City</span>
          <SfInput name="city" autocomplete="address-level2" required />
        </label>
        <label class="w-full md:w-auto flex flex-col gap-0.5 flex-grow">
          <span class="font-medium typography-text-sm">State</span>
          <SfSelect name="state" placeholder="-- Select --" autocomplete="address-level1" required>
            <option v-for="stateName in states" :key="stateName">{{ stateName }}</option>
          </SfSelect>
        </label>
        <label class="w-full flex flex-col gap-0.5 md:w-[120px]">
          <span class="font-medium typography-text-sm">ZIP Code</span>
          <SfInput name="zipCode" placeholder="eg. 12345" autocomplete="postal-code" required />
        </label>

        <label class="flex items-center w-full gap-2">
          <SfCheckbox name="useAsShippingAddress" />
          Use as shipping address
        </label>

        <div class="flex w-full gap-4 mt-4 md:mt-0 md:justify-end">
          <SfButton type="reset" variant="secondary" class="w-full md:w-auto">Clear all</SfButton>
          <SfButton type="submit" class="w-full md:w-auto">Save</SfButton>
        </div>
      </form>
    </div>
    <div></div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { SfSelect, SfInput, SfCheckbox, SfButton } from "@storefront-ui/vue";

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
</script>
