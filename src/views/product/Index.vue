<template>
  <div class="max-w-2xl py-16 mx-auto sm:py-24 lg:max-w-7xl">
    <div class="grid items-center max-w-2xl grid-cols-1 px-4 mx-auto gap-x-8 gap-y-16 sm:px-6 lg:max-w-7xl lg:grid-cols-2">
      <div class="">
        <img
          src="https://tailwindui.com/img/ecommerce-images/product-quick-preview-02-detail.jpg"
          alt="Two each of gray, white, and black shirts arranged on table."
          class="object-cover object-center"
        />
      </div>
      <div class="">
        <h2 class="text-2xl font-bold text-gray-900 sm:pr-12">Warm Winter Cozy Washable Dog House</h2>

        <section aria-labelledby="information-heading" class="mt-2">
          <h3 id="information-heading" class="sr-only">Product information</h3>

          <p class="text-2xl text-gray-900">$29.95 – $90.95</p>
          <p class="py-3 text-gray-500 text-l">Give your pet a snug retreat with this warm, washable dog house.</p>
        </section>

        <section aria-labelledby="options-heading" class="mt-10">
          <h3 id="options-heading" class="sr-only">Product options</h3>

          <form>
            <!-- Colors -->
            <div>
              <h4 class="text-sm font-medium text-gray-900">Color：</h4>

              <fieldset class="mt-4">
                <legend class="sr-only">Choose a color</legend>
                <span class="flex items-center space-x-3">
                  <!--
                          Active and Checked: "ring ring-offset-1"
                          Not Active and Checked: "ring-2"
                        -->
                  <label class="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none ring-gray-400">
                    <input type="radio" name="color-choice" value="White" class="sr-only" aria-labelledby="color-choice-0-label" />
                    <span id="color-choice-0-label" class="sr-only">White</span>
                    <span aria-hidden="true" class="w-8 h-8 bg-white border border-black rounded-full border-opacity-10"></span>
                  </label>
                  <!--
                          Active and Checked: "ring ring-offset-1"
                          Not Active and Checked: "ring-2"
                        -->
                  <label class="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none ring-gray-400">
                    <input type="radio" name="color-choice" value="Gray" class="sr-only" aria-labelledby="color-choice-1-label" />
                    <span id="color-choice-1-label" class="sr-only">Gray</span>
                    <span aria-hidden="true" class="w-8 h-8 bg-gray-200 border border-black rounded-full border-opacity-10"></span>
                  </label>
                  <!--
                          Active and Checked: "ring ring-offset-1"
                          Not Active and Checked: "ring-2"
                        -->
                  <label class="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none ring-gray-900">
                    <input type="radio" name="color-choice" value="Black" class="sr-only" aria-labelledby="color-choice-2-label" />
                    <span id="color-choice-2-label" class="sr-only">Black</span>
                    <span aria-hidden="true" class="w-8 h-8 bg-gray-900 border border-black rounded-full border-opacity-10"></span>
                  </label>
                </span>
              </fieldset>
            </div>

            <!-- Sizes -->
            <div class="mt-10">
              <div class="flex items-center justify-between">
                <h4 class="text-sm font-medium text-gray-900">Size：</h4>
              </div>

              <fieldset class="mt-4">
                <legend class="sr-only">Choose a size</legend>
                <div class="grid grid-cols-4 gap-4">
                  <!-- Active: "ring-2 ring-indigo-500" -->
                  <label
                    class="relative flex items-center justify-center px-4 py-3 text-sm font-medium text-gray-900 uppercase bg-white border rounded-md shadow-sm cursor-pointer group hover:bg-gray-50 focus:outline-none sm:flex-1"
                  >
                    <input type="radio" name="size-choice" value="XXS" class="sr-only" aria-labelledby="size-choice-0-label" />
                    <span id="size-choice-0-label">XXS</span>
                    <!--
                            Active: "border", Not Active: "border-2"
                            Checked: "border-indigo-500", Not Checked: "border-transparent"
                          -->
                    <span class="absolute rounded-md pointer-events-none -inset-px" aria-hidden="true"></span>
                  </label>
                  <!-- Active: "ring-2 ring-indigo-500" -->
                  <label
                    class="relative flex items-center justify-center px-4 py-3 text-sm font-medium text-gray-900 uppercase bg-white border rounded-md shadow-sm cursor-pointer group hover:bg-gray-50 focus:outline-none sm:flex-1"
                  >
                    <input type="radio" name="size-choice" value="XS" class="sr-only" aria-labelledby="size-choice-1-label" />
                    <span id="size-choice-1-label">XS</span>
                    <!--
                            Active: "border", Not Active: "border-2"
                            Checked: "border-indigo-500", Not Checked: "border-transparent"
                          -->
                    <span class="absolute rounded-md pointer-events-none -inset-px" aria-hidden="true"></span>
                  </label>
                  <!-- Active: "ring-2 ring-indigo-500" -->
                  <label
                    class="relative flex items-center justify-center px-4 py-3 text-sm font-medium text-gray-900 uppercase bg-white border rounded-md shadow-sm cursor-pointer group hover:bg-gray-50 focus:outline-none sm:flex-1"
                  >
                    <input type="radio" name="size-choice" value="S" class="sr-only" aria-labelledby="size-choice-2-label" />
                    <span id="size-choice-2-label">S</span>
                    <!--
                            Active: "border", Not Active: "border-2"
                            Checked: "border-indigo-500", Not Checked: "border-transparent"
                          -->
                    <span class="absolute rounded-md pointer-events-none -inset-px" aria-hidden="true"></span>
                  </label>
                  <!-- Active: "ring-2 ring-indigo-500" -->
                  <label
                    class="relative flex items-center justify-center px-4 py-3 text-sm font-medium text-gray-900 uppercase bg-white border rounded-md shadow-sm cursor-pointer group hover:bg-gray-50 focus:outline-none sm:flex-1"
                  >
                    <input type="radio" name="size-choice" value="M" class="sr-only" aria-labelledby="size-choice-3-label" />
                    <span id="size-choice-3-label">M</span>
                    <!--
                            Active: "border", Not Active: "border-2"
                            Checked: "border-indigo-500", Not Checked: "border-transparent"
                          -->
                    <span class="absolute rounded-md pointer-events-none -inset-px" aria-hidden="true"></span>
                  </label>
                  <!-- Active: "ring-2 ring-indigo-500" -->
                  <label
                    class="relative flex items-center justify-center px-4 py-3 text-sm font-medium text-gray-900 uppercase bg-white border rounded-md shadow-sm cursor-pointer group hover:bg-gray-50 focus:outline-none sm:flex-1"
                  >
                    <input type="radio" name="size-choice" value="L" class="sr-only" aria-labelledby="size-choice-4-label" />
                    <span id="size-choice-4-label">L</span>
                    <!--
                            Active: "border", Not Active: "border-2"
                            Checked: "border-indigo-500", Not Checked: "border-transparent"
                          -->
                    <span class="absolute rounded-md pointer-events-none -inset-px" aria-hidden="true"></span>
                  </label>
                  <!-- Active: "ring-2 ring-indigo-500" -->
                  <label
                    class="relative flex items-center justify-center px-4 py-3 text-sm font-medium text-gray-900 uppercase bg-white border rounded-md shadow-sm cursor-pointer group hover:bg-gray-50 focus:outline-none sm:flex-1"
                  >
                    <input type="radio" name="size-choice" value="XL" class="sr-only" aria-labelledby="size-choice-5-label" />
                    <span id="size-choice-5-label">XL</span>
                    <!--
                            Active: "border", Not Active: "border-2"
                            Checked: "border-indigo-500", Not Checked: "border-transparent"
                          -->
                    <span class="absolute rounded-md pointer-events-none -inset-px" aria-hidden="true"></span>
                  </label>
                  <!-- Active: "ring-2 ring-indigo-500" -->
                  <label
                    class="relative flex items-center justify-center px-4 py-3 text-sm font-medium text-gray-900 uppercase bg-white border rounded-md shadow-sm cursor-pointer group hover:bg-gray-50 focus:outline-none sm:flex-1"
                  >
                    <input type="radio" name="size-choice" value="XXL" class="sr-only" aria-labelledby="size-choice-6-label" />
                    <span id="size-choice-6-label">XXL</span>
                    <!--
                            Active: "border", Not Active: "border-2"
                            Checked: "border-indigo-500", Not Checked: "border-transparent"
                          -->
                    <span class="absolute rounded-md pointer-events-none -inset-px" aria-hidden="true"></span>
                  </label>
                  <!-- Active: "ring-2 ring-indigo-500" -->
                  <label
                    class="relative flex items-center justify-center px-4 py-3 text-sm font-medium text-gray-200 uppercase border rounded-md cursor-not-allowed group hover:bg-gray-50 focus:outline-none sm:flex-1 bg-gray-50"
                  >
                    <input type="radio" name="size-choice" value="XXXL" disabled class="sr-only" aria-labelledby="size-choice-7-label" />
                    <span id="size-choice-7-label">XXXL</span>
                    <span aria-hidden="true" class="absolute border-2 border-gray-200 rounded-md pointer-events-none -inset-px">
                      <svg
                        class="absolute inset-0 w-full h-full text-gray-200 stroke-2"
                        viewBox="0 0 100 100"
                        preserveAspectRatio="none"
                        stroke="currentColor"
                      >
                        <line x1="0" y1="100" x2="100" y2="0" vector-effect="non-scaling-stroke" />
                      </svg>
                    </span>
                  </label>
                </div>
              </fieldset>
            </div>
            <!-- Quantity -->
            <div class="mt-10">
              <div class="flex items-center justify-between">
                <h4 class="text-sm font-medium text-gray-900">Quantity：</h4>
              </div>

              <fieldset class="mt-4">
                <legend class="sr-only">Choose a size</legend>
                <div class="grid gap-4">
                  <div class="flex">
                    <input
                      :id="inputId"
                      v-model="count"
                      type="number"
                      class="flex-1 appearance-none px-2 mx-2 font-medium text-gray-900 w-12 bg-transparent [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-inner-spin-button]:display-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-outer-spin-button]:display-none [&::-webkit-outer-spin-button]:m-0 [-moz-appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none disabled:placeholder-disabled-900 focus-visible:outline focus-visible:outline-offset focus-visible:rounded-sm"
                      :min="min"
                      :max="max"
                      @input="handleOnChange"
                    />
                    <SfButton
                      square
                      class="!rounded-full"
                      :disabled="count <= min"
                      :aria-controls="inputId"
                      aria-label="Decrease value"
                      @click="dec()"
                    >
                      <SfIconRemove />
                    </SfButton>
                    <SfButton
                      square
                      class="!rounded-full"
                      :disabled="count >= max"
                      :aria-controls="inputId"
                      aria-label="Increase value"
                      @click="inc()"
                    >
                      <SfIconAdd />
                    </SfButton>
                  </div>
                </div>
              </fieldset>
            </div>
            <button
              type="submit"
              class="flex items-center justify-center w-full px-8 py-3 mt-6 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Buy it now
            </button>

            <button
              type="submit"
              class="flex items-center justify-center w-full px-8 py-3 mt-6 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Add to bag
            </button>
            <div class="mt-10">
              <span>Add to wishlist</span>
            </div>
          </form>
        </section>
      </div>
    </div>
    <SfScrollable class="items-center w-full snap-x snap-mandatory" drag>
      <div
        v-for="(_, index) in Array.from({ length: 20 })"
        :key="index"
        class="flex items-center justify-center text-gray-500 border border-dashed w-36 h-36 shrink-0 bg-neutral-100 border-negative-300 snap-center"
      >
        {{ index + 1 }}
      </div>
    </SfScrollable>
  </div>
</template>
<script lang="ts" setup>
import { SfScrollable } from "@storefront-ui/vue";
import { ref } from "vue";
import { SfButton, SfIconAdd, SfIconRemove, useId } from "@storefront-ui/vue";
import { clamp } from "@storefront-ui/shared";
import { useCounter } from "@vueuse/core";

const min = ref(1);
const max = ref(10);
const inputId = useId();
const { count, inc, dec, set } = useCounter(1, {
  min: min.value,
  max: max.value,
});
function handleOnChange(event: Event) {
  const currentValue = (event.target as HTMLInputElement)?.value;
  const nextValue = parseFloat(currentValue);
  set(clamp(nextValue, min.value, max.value));
}
</script>
