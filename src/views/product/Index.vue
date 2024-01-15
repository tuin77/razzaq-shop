<template>
  <div class="mx-auto mb-7 max-w-1620">
    <div class="grid grid-cols-1 mt-[3.75rem] mb-[7.5rem] mx-auto gap-x-[109px] gap-y-16 lg:grid-cols-2" style="grid-template-columns: 800px 710px">
      <div class="relative flex flex-col w-full max-h-[1180px]">
        <SfScrollable
          class="w-full h-full snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          :active-index="activeIndex"
          direction="horizontal"
          wrapper-class="h-full min-h-0"
          is-active-index-centered
          buttons-placement="none"
          :drag="{ containerWidth: true }"
          @on-drag-end="onDragged"
        >
          <div
            v-for="({ imageSrc, alt }, index) in images"
            :key="`${alt}-${index}`"
            class="flex justify-center h-[800px] basis-full shrink-0 grow snap-center"
          >
            <img
              :aria-label="alt"
              :aria-hidden="activeIndex !== index"
              class="rounded-[1.25rem] object-cover w-auto h-full"
              :alt="alt"
              :src="imageSrc"
            />
          </div>
        </SfScrollable>
        <SfScrollable
          ref="thumbsRef"
          class="items-center w-full mt-[1.875rem] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          direction="horizontal"
          :active-index="activeIndex"
          :previous-disabled="activeIndex === 0"
          :next-disabled="activeIndex === images.length - 1"
          buttons-placement="floating"
        >
          <template #previousButton="defaultProps">
            <SfButton
              v-if="!firstThumbVisible"
              v-bind="defaultProps"
              :disabled="activeIndex === 0"
              class="absolute !rounded-full z-10 left-0 bottom-[60px] bg-white"
              variant="secondary"
              size="sm"
              square
            >
              <SfIconChevronLeft size="sm" />
            </SfButton>
          </template>
          <button
            v-for="({ imageThumbSrc, alt }, index) in images"
            :key="`${alt}-${index}-thumbnail`"
            :ref="(el) => assignRef(el, index)"
            type="button"
            :aria-label="alt"
            :aria-current="activeIndex === index"
            :class="`w-[150px] h-[150px] mr-3 last:mr-0  relative shrink-0 border border-2 rounded-[1.25rem]  snap-start cursor-pointer focus-visible:outline focus-visible:outline-offset transition-colors flex-grow md:flex-grow-0  ${
              activeIndex === index ? 'border-primary-700' : 'border-transparent'
            }`"
            @mouseover="activeIndex = index"
            @focus="activeIndex = index"
          >
            <img :alt="alt" class="rounded-[1.25rem]" width="150" height="150" :src="imageThumbSrc" />
          </button>
          <template #nextButton="defaultProps">
            <SfButton
              v-if="!lastThumbVisible"
              v-bind="defaultProps"
              :disabled="activeIndex === images.length"
              class="absolute !rounded-full z-10 right-0 bottom-[60px] rotate-270 bg-white"
              variant="secondary"
              square
            >
              <SfIconChevronRight size="sm" />
            </SfButton>
          </template>
        </SfScrollable>
      </div>
      <div class="">
        <section aria-labelledby="information-heading " class="sm:pr-12">
          <h2 class="text-[2rem] text-bold-100">{{ goods?.name }}</h2>
          <p class="text-[2rem] font-bold-100 font-bold mt-4">$29.95 – $90.95</p>
          <p class="text-lg text-gray-500 mt-7">{{ goods?.short_description }}</p>
        </section>

        <section aria-labelledby="options-heading" class="mt-8">
          <template v-for="spec in goods?.specs" :key="spec.id">
            <!-- Colors -->
            <div class="mt-7" v-if="spec.name === 'Color'">
              <h4 class="text-lg text-blod-100">Color：</h4>
              <fieldset class="mt-5">
                <span class="flex items-center space-x-3">
                  <button
                    v-for="({ imageThumbSrc, alt }, index) in images.slice(0, 3)"
                    :key="`${alt}-${index}-thumbnail`"
                    :ref="(el) => assignRef(el, index)"
                    type="button"
                    :aria-label="alt"
                    :aria-current="activeIndex === index"
                    :class="`w-[100px] h-[100px] mr-3 last:mr-0  relative shrink-0 border border-2 rounded-[1.25rem]  snap-start cursor-pointer focus-visible:outline focus-visible:outline-offset transition-colors flex-grow md:flex-grow-0  ${
                      activeIndex === index ? 'border-primary-700' : 'border-transparent'
                    }`"
                    @mouseover="activeIndex = index"
                    @focus="activeIndex = index"
                  >
                    <img :alt="alt" class="rounded-[1.25rem]" width="150" height="150" :src="imageThumbSrc" />
                  </button>
                </span>
              </fieldset>
            </div>
            <div class="mt-7" v-if="spec.name === 'Size'">
              <h4 class="text-lg text-blod-100">Size：</h4>
              <fieldset class="mt-5">
                <div class="grid grid-cols-2 gap-2 gap-x-[30px] gap-7-[15px] pr-[80px]">
                  <!-- Active: "ring-2 ring-indigo-500" -->
                  <label
                    class="relative flex items-center justify-center px-4 py-3 text-sm border-gray-100 text-blod-100 uppercase bg-white border rounded-[100px] shadow-sm cursor-pointer group hover:border-primary-700 focus:outline-none sm:flex-1"
                  >
                    <input type="radio" name="size-choice" value="XXS" class="sr-only" aria-labelledby="size-choice-0-label" />
                    <span id="size-choice-0-label">28.0L x 210W x 7.0Th</span>
                    <!--
                            Active: "border", Not Active: "border-2"
                            Checked: "border-indigo-500", Not Checked: "border-transparent"
                          -->
                    <span class="absolute rounded-[100px] pointer-events-none -inset-px" aria-hidden="true"></span>
                  </label>
                  <!-- Active: "ring-2 ring-indigo-500" -->
                  <label
                    class="relative flex items-center justify-center px-4 py-3 text-sm border-gray-100 text-blod-100 uppercase bg-white border rounded-[100px] shadow-sm cursor-pointer group hover:border-primary-700 focus:outline-none sm:flex-1"
                  >
                    <input type="radio" name="size-choice" value="M" class="sr-only" aria-labelledby="size-choice-3-label" />
                    <span id="size-choice-3-label">28.0L x 210W x 7.0Th</span>
                    <!--
                            Active: "border", Not Active: "border-2"
                            Checked: "border-indigo-500", Not Checked: "border-transparent"
                          -->
                    <span class="absolute rounded-[100px] pointer-events-none -inset-px" aria-hidden="true"></span>
                  </label>
                  <!-- Active: "ring-2 ring-indigo-500" -->
                  <label
                    class="relative flex items-center justify-center px-4 py-3 text-sm font-medium text-gray-900 uppercase bg-white border rounded-[100px] shadow-sm cursor-pointer group hover:bg-gray-50 focus:outline-none sm:flex-1"
                  >
                    <input type="radio" name="size-choice" value="L" class="sr-only" aria-labelledby="size-choice-4-label" />
                    <span id="size-choice-4-label">L</span>
                    <!--
                            Active: "border", Not Active: "border-2"
                            Checked: "border-indigo-500", Not Checked: "border-transparent"
                          -->
                    <span class="absolute rounded-[100px] pointer-events-none -inset-px" aria-hidden="true"></span>
                  </label>
                  <!-- Active: "ring-2 ring-indigo-500" -->
                  <label
                    class="relative flex items-center justify-center px-4 py-3 text-sm font-medium text-gray-900 uppercase bg-white border rounded-[100px] shadow-sm cursor-pointer group hover:bg-gray-50 focus:outline-none sm:flex-1"
                  >
                    <input type="radio" name="size-choice" value="XL" class="sr-only" aria-labelledby="size-choice-5-label" />
                    <span id="size-choice-5-label">XL</span>
                    <!--
                            Active: "border", Not Active: "border-2"
                            Checked: "border-indigo-500", Not Checked: "border-transparent"
                          -->
                    <span class="absolute rounded-[100px] pointer-events-none -inset-px" aria-hidden="true"></span>
                  </label>
                  <!-- Active: "ring-2 ring-indigo-500" -->
                  <label
                    class="relative flex items-center justify-center px-4 py-3 text-sm font-medium text-gray-900 uppercase bg-white border rounded-[100px] shadow-sm cursor-pointer group hover:bg-gray-50 focus:outline-none sm:flex-1"
                  >
                    <input type="radio" name="size-choice" value="XXL" class="sr-only" aria-labelledby="size-choice-6-label" />
                    <span id="size-choice-6-label">XXL</span>
                    <!--
                            Active: "border", Not Active: "border-2"
                            Checked: "border-indigo-500", Not Checked: "border-transparent"
                          -->
                    <span class="absolute rounded-[100px] pointer-events-none -inset-px" aria-hidden="true"></span>
                  </label>
                  <!-- Active: "ring-2 ring-indigo-500" -->
                  <label
                    class="relative flex items-center justify-center px-4 py-3 text-sm font-medium text-gray-200 uppercase border rounded-[100px] cursor-not-allowed group hover:bg-gray-50 focus:outline-none sm:flex-1 bg-gray-50"
                  >
                    <input type="radio" name="size-choice" value="XXXL" disabled class="sr-only" aria-labelledby="size-choice-7-label" />
                    <span id="size-choice-7-label">XXXL</span>
                    <span aria-hidden="true" class="absolute border-2 border-gray-200 rounded-[100px] pointer-events-none -inset-px">
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
          </template>

          <!-- <div>
              <h4 class="text-lg text-blod-100">Color：</h4>
              <fieldset class="mt-5">
                <legend class="sr-only">Choose a color</legend>
                <span class="flex items-center space-x-3">
                  
                          Active and Checked: "ring ring-offset-1"
                          Not Active and Checked: "ring-2"
                       
                  <label class="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none ring-gray-400">
                    <input type="radio" name="color-choice" value="White" class="sr-only" aria-labelledby="color-choice-0-label" />
                    <span id="color-choice-0-label" class="sr-only">White</span>
                    <span aria-hidden="true" class="w-8 h-8 bg-white border border-black rounded-full border-opacity-10"></span>
                  </label>
                  
                          Active and Checked: "ring ring-offset-1"
                          Not Active and Checked: "ring-2"
                       
                  <label class="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none ring-gray-400">
                    <input type="radio" name="color-choice" value="Gray" class="sr-only" aria-labelledby="color-choice-1-label" />
                    <span id="color-choice-1-label" class="sr-only">Gray</span>
                    <span aria-hidden="true" class="w-8 h-8 bg-gray-200 border border-black rounded-full border-opacity-10"></span>
                  </label>
                  
                          Active and Checked: "ring ring-offset-1"
                          Not Active and Checked: "ring-2"
                       
                  <label class="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none ring-gray-900">
                    <input type="radio" name="color-choice" value="Black" class="sr-only" aria-labelledby="color-choice-2-label" />
                    <span id="color-choice-2-label" class="sr-only">Black</span>
                    <span aria-hidden="true" class="w-8 h-8 bg-gray-900 border border-black rounded-full border-opacity-10"></span>
                  </label>
                </span>
              </fieldset>
            </div> -->

          <!-- Sizes -->
          <!-- Quantity -->
          <div class="mt-7">
            <div class="flex items-center justify-between">
              <h4 class="text-sm font-medium text-gray-900">Quantity：</h4>
            </div>

            <fieldset class="mt-5">
              <div class="grid gap-4">
                <div class="flex">
                  <!-- <input
                      :id="inputId"
                      v-model="count"
                      type="number"
                      class="flex-1 appearance-none px-2 mx-2 font-medium text-gray-900 w-12 bg-transparent [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-inner-spin-button]:display-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-outer-spin-button]:display-none [&::-webkit-outer-spin-button]:m-0 [-moz-appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none disabled:placeholder-disabled-900 focus-visible:outline focus-visible:outline-offset focus-visible:rounded-sm"
                      :min="min"
                      :max="max"
                      @input="handleOnChange"
                    /> -->

                  <input
                    :id="inputId"
                    v-model="count"
                    type="number"
                    class="flex-1 w-12 px-6 mr-2.5 text-lg py-4 text-gray-900 bg-transparent border rounded-100 appearance-none disabled:placeholder-disabled-900 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-inner-spin-button]:display-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-outer-spin-button]:display-none [&::-webkit-outer-spin-button]:m-0 [-moz-appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none"
                    :min="min"
                    :max="max"
                    @input="handleOnChange"
                  />
                  <SfButton
                    square
                    size="lg"
                    class="!rounded-full mr-2.5"
                    :disabled="count <= min"
                    :aria-controls="inputId"
                    aria-label="Decrease value"
                    @click="dec()"
                  >
                    <SfIconRemove />
                  </SfButton>
                  <SfButton
                    square
                    size="lg"
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
            class="flex items-center justify-center w-full py-[18px] text-lg text-white bg-primary-700 border border-transparent rounded-[100px] mt-7 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Buy it now
          </button>

          <button
            type="submit"
            class="flex items-center justify-center w-full py-3 text-base text-white bg-black border border-transparent rounded-[100px] mt-7 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Add to bag
          </button>
          <div class="flex mt-10">
            <SfButton variant="tertiary" size="sm" square class="mr-6 !p-0 !text-bold-100 !bg-transparent" aria-label="Add to wishlist">
              <SfIconFavorite size="sm" />
              <!-- bg-white ring-1 ring-inset ring-neutral-200 !rounded-full -->
            </SfButton>
            <span class="text-lg text-blod-100">Add to wishlist</span>
          </div>
        </section>
      </div>
    </div>
    <div class="">
      <h3 class="mb-12 text-5xl font-bold text-black">About Products</h3>

      <div class="grid grid-cols-1 mb-36 mx-auto gap-x-[20px] gap-y-36 lg:grid-cols-2">
        <div class="flex pr-[23px]">
          <p class="m-auto text-lg leading-10 text-black">
            Introducing the original DeepSleep Calming Bed™ - one of the highest quality pet beds ever produced. Crafted with premium nylon fabric
            and finished with a luxurious faux fur exterior, our soothing bed is designed to mimic the cozy comfort of a mother's fur coat aiming to
            provide your pet with the most comfortable sleeping experience imaginable. Did You Know? 1 in 4 dogs experience anxiety on a daily basis.
            When left untreated, built-up stress can lead to a severe loss of appetite, destructive behavioral problems, and a shorter life span. The
            Solution? Most of the time anxiety in pets can simply be solved with a better night's rest. That's where our bed comes in. The DeepSleep
            Calming Bed™ blends coziness and extravagance all into one pleasurable sleeping experience for your beloved pets.
          </p>
        </div>
        <img src="../../assets/images/shop/product-img.png" class="rounded-[1.25rem] object-cover w-auto" alt="" srcset="" />

        <img src="../../assets/images/shop/product-img.png" class="rounded-[1.25rem] object-cover w-auto" alt="" srcset="" />
        <div class="flex flex-col items-center justify-center text-lg leading-10 text-black pl-[23px]">
          <p class="m-auto text-lg leading-10 text-black">
            <span class="mt-auto text-2xl text-black">Specifications</span><br />
            Material: 100% CottonWash Style: Mechanical WashType: DogsFeatures: Detachable, Comfortable, Breathable
          </p>
        </div>
      </div>
    </div>
    <div>
      <h3 class="text-5xl font-bold text-black mb-[80px]">Products you might like..</h3>
      <div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 product-list">
        <div v-for="i in 4" :key="i" href="#" class="group rounded-[1.25rem]">
          <div class="w-full relative overflow-hidden bg-gray-200 rounded-[1.25rem] aspect-h-1 aspect-w-1 xl:aspect-h-8 xl:aspect-w-7">
            <img
              src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg"
              alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
              class="object-cover object-center w-full h-full"
            />
            <img
              src="../../assets/images/shop/collect-icon.svg"
              class="invisible group-hover:visible w-[28px] h-[24px] absolute right-5 top-5"
              alt=""
              srcset=""
            />
            <div class="absolute bottom-0 left-0 invisible w-full py-4 text-lg text-white bg-black opacity-45 group-hover:visible">
              Select options
            </div>
          </div>
          <h3 class="mt-5 text-lg text-gray-400">Colorful Sunflower Plush Comfy</h3>
          <p class="mt-6 text-2xl text-black">$22.95 – $42.95</p>
          <button
            type="button"
            class="rounded-md bg-white py-3 mt-6 text-lg px-[4.25rem] font-semibold text-primary-700 shadow-sm ring-1 ring-inset ring-primary-700 hover:bg-primary-700 hover:ring-primary-700 hover:text-white"
            @click="handleClick"
          >
            Buy
          </button>
        </div>
        <!-- More products... -->
      </div>
    </div>
    <!-- <SfScrollable class="items-center w-full [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]" drag>
      <div
        v-for="(_, index) in Array.from({ length: 20 })"
        :key="index"
        class="flex items-center justify-center text-gray-500 border border-dashed w-36 h-36 shrink-0 bg-neutral-100 border-negative-300 snap-center"
      >
        {{ index + 1 }}
      </div>
      <div v-for="i in 12" :key="i" href="#" class="group rounded-[1.25rem]">
        <div class="w-full relative overflow-hidden bg-gray-200 rounded-[1.25rem] aspect-h-1 aspect-w-1 xl:aspect-h-8 xl:aspect-w-7">
          <img
            src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg"
            alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
            class="object-cover object-center w-full h-full"
          />
          <img
            src="../../assets/images/shop/collect-icon.svg"
            class="invisible group-hover:visible w-[28px] h-[24px] absolute right-5 top-5"
            alt=""
            srcset=""
          />
          <div class="absolute bottom-0 left-0 invisible w-full py-4 text-lg text-white bg-black opacity-45 group-hover:visible">Select options</div>
        </div>
        <h3 class="mt-5 text-lg text-gray-400">Colorful Sunflower Plush Comfy</h3>
        <p class="mt-6 text-2xl text-black">$22.95 – $42.95</p>
        <button
          type="button"
          class="rounded-md bg-white py-3 mt-6 text-lg px-[4.25rem] font-semibold text-primary-700 shadow-sm ring-1 ring-inset ring-primary-700 hover:bg-primary-700 hover:ring-primary-700 hover:text-white"
          @click="handleClick"
        >
          Buy
        </button>
      </div>
    </SfScrollable> -->
  </div>
</template>
<script lang="ts" setup>
import { SfScrollable } from "@storefront-ui/vue";
import { ref, onMounted } from "vue";
import { SfButton, SfIconAdd, SfIconRemove, useId, SfIconFavorite } from "@storefront-ui/vue";
import { clamp } from "@storefront-ui/shared";
import { useCounter } from "@vueuse/core";
import { goods as _product } from "../../assets/json/goods";

import { useRouter } from "vue-router";
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

const router = useRouter();
const handleClick = () => {
  console.log("handleClick");

  router.push({
    path: "/product",
    query: {
      mode: "edit",
    },
  });
};
import { SfIconChevronLeft, SfIconChevronRight, type SfScrollableOnDragEndData } from "@storefront-ui/vue";
import { unrefElement, useIntersectionObserver } from "@vueuse/core";
import { watch, type ComponentPublicInstance } from "vue";

const withBase = (filepath: string) => `https://storage.googleapis.com/sfui_docs_artifacts_bucket_public/production/gallery/${filepath}`;

const images = [
  { imageSrc: withBase("gallery_9.png"), imageThumbSrc: withBase("gallery_1_thumb.png"), alt: "backpack1" },
  { imageSrc: withBase("gallery_2.png"), imageThumbSrc: withBase("gallery_2_thumb.png"), alt: "backpack2" },
  { imageSrc: withBase("gallery_3.png"), imageThumbSrc: withBase("gallery_3_thumb.png"), alt: "backpack3" },
  { imageSrc: withBase("gallery_4.png"), imageThumbSrc: withBase("gallery_4_thumb.png"), alt: "backpack4" },
  { imageSrc: withBase("gallery_5.png"), imageThumbSrc: withBase("gallery_5_thumb.png"), alt: "backpack5" },
  { imageSrc: withBase("gallery_6.png"), imageThumbSrc: withBase("gallery_6_thumb.png"), alt: "backpack6" },
  { imageSrc: withBase("gallery_7.png"), imageThumbSrc: withBase("gallery_7_thumb.png"), alt: "backpack7" },
  { imageSrc: withBase("gallery_8.png"), imageThumbSrc: withBase("gallery_8_thumb.png"), alt: "backpack8" },
  { imageSrc: withBase("gallery_9.png"), imageThumbSrc: withBase("gallery_9_thumb.png"), alt: "backpack9" },
  { imageSrc: withBase("gallery_10.png"), imageThumbSrc: withBase("gallery_10_thumb.png"), alt: "backpack10" },
  { imageSrc: withBase("gallery_11.png"), imageThumbSrc: withBase("gallery_11_thumb.png"), alt: "backpack11" },
];
const thumbsRef = ref<HTMLElement>();
const firstThumbRef = ref<HTMLButtonElement>();
const lastThumbRef = ref<HTMLButtonElement>();
const firstThumbVisible = ref(false);
const lastThumbVisible = ref(false);
const activeIndex = ref(0);

watch(
  thumbsRef,
  (thumbsRef) => {
    if (thumbsRef) {
      useIntersectionObserver(
        firstThumbRef,
        ([{ isIntersecting }]) => {
          firstThumbVisible.value = isIntersecting;
        },
        {
          root: unrefElement(thumbsRef),
          rootMargin: "0px",
          threshold: 1,
        },
      );
    }
  },
  { immediate: true },
);

watch(
  thumbsRef,
  (thumbsRef) => {
    if (thumbsRef) {
      useIntersectionObserver(
        lastThumbRef,
        ([{ isIntersecting }]) => {
          lastThumbVisible.value = isIntersecting;
        },
        {
          root: unrefElement(thumbsRef),
          rootMargin: "0px",
          threshold: 1,
        },
      );
    }
  },
  { immediate: true },
);

const onDragged = (event: SfScrollableOnDragEndData) => {
  if (event.swipeRight && activeIndex.value > 0) {
    activeIndex.value -= 1;
  } else if (event.swipeLeft && activeIndex.value < images.length - 1) {
    activeIndex.value += 1;
  }
};

const assignRef = (el: Element | ComponentPublicInstance | null, index: number) => {
  if (!el) return;
  if (index === images.length - 1) {
    lastThumbRef.value = el as HTMLButtonElement;
  } else if (index === 0) {
    firstThumbRef.value = el as HTMLButtonElement;
  }
};

import type { GoodsDetail } from "../../types/goods";
const goods = ref<GoodsDetail>();
onMounted(async () => {
  console.log(JSON.stringify(_product));

  // const res = await http<GoodsDetail>("GET", "/goods", { id: id });
  // console.log("/goods", res.data.result);
  goods.value = _product;
});
</script>
