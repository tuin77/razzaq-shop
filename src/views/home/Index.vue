<template>
  <SfScrollable
    class="m-auto py-4 items-center w-full [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
    buttons-placement="floating"
    drag
  >
    <template #previousButton="defaultProps">
      <SfButton
        v-bind="defaultProps"
        class="absolute !rounded-full z-10 left-4 bg-white hidden md:block"
        :class="{ '!hidden': defaultProps.disabled }"
        variant="secondary"
        size="lg"
        square
      >
        <SfIconChevronLeft />
      </SfButton>
    </template>
    <div
      v-for="{ id, name, price, img } in products"
      :key="id"
      class="first:ms-auto last:me-auto border border-neutral-200 shrink-0 rounded-md hover:shadow-lg w-[383px] lg:w-[383px]"
    >
      <div class="relative">
        <SfLink href="#" class="block">
          <img
            :src="img.src"
            :alt="img.alt"
            class="block object-cover h-auto rounded-md aspect-square lg:w-[190px] lg:h-[190px]"
            width="146"
            height="146"
          />
        </SfLink>
        <SfButton
          variant="tertiary"
          size="sm"
          square
          class="absolute bottom-0 right-0 mr-2 mb-2 bg-white ring-1 ring-inset ring-neutral-200 !rounded-full"
          aria-label="Add to wishlist"
        >
          <SfIconFavorite size="sm" />
        </SfButton>
      </div>
      <div class="p-2 border-t border-neutral-200 typography-text-sm">
        <SfLink href="#" variant="secondary" class="no-underline">{{ name }}</SfLink>
        <span class="block mt-2 font-bold">{{ price }}</span>
      </div>
    </div>
    <template #nextButton="defaultProps">
      <SfButton
        v-bind="defaultProps"
        class="absolute !rounded-full z-10 right-4 bg-white hidden md:block"
        :class="{ '!hidden': defaultProps.disabled }"
        variant="secondary"
        size="lg"
        square
      >
        <SfIconChevronRight />
      </SfButton>
    </template>
  </SfScrollable>

  <div class="bg-white">
    <div class="max-w-2xl px-4 py-16 mx-auto sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <h2 class="sr-only">Products</h2>

      <div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        <a href="#" class="group">
          <div class="w-full overflow-hidden bg-gray-200 rounded-lg aspect-h-1 aspect-w-1 xl:aspect-h-8 xl:aspect-w-7">
            <img
              src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg"
              alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
              class="object-cover object-center w-full h-full group-hover:opacity-75"
            />
          </div>
          <h3 class="mt-4 text-sm text-gray-700">Earthen Bottle</h3>
          <p class="mt-1 text-lg font-medium text-gray-900">$48</p>
        </a>
        <a href="#" class="group">
          <div class="w-full overflow-hidden bg-gray-200 rounded-lg aspect-h-1 aspect-w-1 xl:aspect-h-8 xl:aspect-w-7">
            <img
              src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg"
              alt="Olive drab green insulated bottle with flared screw lid and flat top."
              class="object-cover object-center w-full h-full group-hover:opacity-75"
            />
          </div>
          <h3 class="mt-4 text-sm text-gray-700">Nomad Tumbler</h3>
          <p class="mt-1 text-lg font-medium text-gray-900">$35</p>
        </a>
        <a href="#" class="group">
          <div class="w-full overflow-hidden bg-gray-200 rounded-lg aspect-h-1 aspect-w-1 xl:aspect-h-8 xl:aspect-w-7">
            <img
              src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg"
              alt="Person using a pen to cross a task off a productivity paper card."
              class="object-cover object-center w-full h-full group-hover:opacity-75"
            />
          </div>
          <h3 class="mt-4 text-sm text-gray-700">Focus Paper Refill</h3>
          <p class="mt-1 text-lg font-medium text-gray-900">$89</p>
        </a>
        <a href="#" class="group">
          <div class="w-full overflow-hidden bg-gray-200 rounded-lg aspect-h-1 aspect-w-1 xl:aspect-h-8 xl:aspect-w-7">
            <img
              src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg"
              alt="Hand holding black machined steel mechanical pencil with brass tip and top."
              class="object-cover object-center w-full h-full group-hover:opacity-75"
            />
          </div>
          <h3 class="mt-4 text-sm text-gray-700">Machined Mechanical Pencil</h3>
          <p class="mt-1 text-lg font-medium text-gray-900">$35</p>
        </a>

        <!-- More products... -->
      </div>
    </div>
  </div>

  <div class="p-8 bg-gray-100">
    <h2 class="mb-6 text-2xl font-bold">Must-have Products</h2>
    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <!-- First item -->
      <div class="relative group">
        <img src="../assets/images/home/Rectangle1.png" alt="Automatic Feeders" class="object-cover w-full h-full rounded-lg" />
        <div class="absolute bottom-0 left-0 w-full p-4 text-white transition bg-gray-900 bg-opacity-50 rounded-lg opacity-0 group-hover:opacity-100">
          <span class="text-lg font-bold">Automatic Feeders</span>
        </div>
      </div>

      <!-- Second item -->
      <div class="relative group">
        <img src="../assets/images/home/Rectangle2.png" alt="Pet accessories" class="object-cover w-full h-full rounded-lg" />
        <div class="absolute bottom-0 left-0 w-full p-4 text-white transition bg-gray-900 bg-opacity-50 rounded-lg opacity-0 group-hover:opacity-100">
          <span class="text-lg font-bold">Pet accessories</span>
        </div>
      </div>

      <!-- Third item -->
      <div class="relative group">
        <img src="../assets/images/home/Rectangle1.png" alt="Cats Beds" class="object-cover w-full h-full rounded-lg" />
        <div class="absolute bottom-0 left-0 w-full p-4 text-white transition bg-gray-900 bg-opacity-50 rounded-lg opacity-0 group-hover:opacity-100">
          <span class="text-lg font-bold">Cats Beds</span>
        </div>
      </div>

      <!-- More items... -->
    </div>
  </div>
</template>

<script lang="ts" setup>
import { SfLink, SfButton, SfIconFavorite, SfIconChevronLeft, SfIconChevronRight, SfScrollable } from "@storefront-ui/vue";

const products = Array.from(Array(4), (_, i) => ({
  id: i.toString(),
  name: "Athletic mens walking sneakers",
  price: "$2,345.99 - $2,365.99 ",
  img: {
    src: "https://storage.googleapis.com/sfui_docs_artifacts_bucket_public/production/sneakers.png",
    alt: "White sneaker shoe",
  },
}));
</script>
