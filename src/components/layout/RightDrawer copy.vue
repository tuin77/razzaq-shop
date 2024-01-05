<template>
  <SfButton @click="open = true"> Open Drawer </SfButton>
  <transition
    enter-active-class="transition duration-200 ease-out"
    leave-active-class="transition duration-200 ease-out"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div v-if="open" class="fixed inset-0 bg-opacity-50 bg-neutral-700" />
  </transition>
  <transition
    enter-active-class="transition duration-200 ease-out"
    leave-active-class="transition duration-200 ease-out"
    enter-from-class="translate-y-10 opacity-0"
    enter-to-class="translate-y-0 opacity-100"
    leave-from-class="translate-y-0 opacity-100"
    leave-to-class="translate-y-10 opacity-0"
  >
    <SfDrawer v-model="open" placement="right" class="bg-neutral-50 z-1000 h-[100vh] p-3 border border-primary-300 max-w-[370px] z-30">
      <div class="h-full">
        <a href="" class="flex items-center">
          <img src="../../assets/images/logo.svg" class="h-6 mr-3 sm:h-9" alt="Flowbite Logo" />
        </a>
        <p class="mb-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam consequatur repellat, odit voluptatibus deserunt eligendi nemo
          perspiciatis tenetur vero repellendus facere? Dolores sit maiores ut labore facilis minima debitis dolore.
        </p>
        <strong>You can close Drawer by clicking outside or focus and use ESC button</strong>
      </div>
    </SfDrawer>
  </transition>
</template>

<script lang="ts" setup>
import { SfDrawer, SfButton } from "@storefront-ui/vue";
import { ref } from "vue";

const open = ref(false);
</script>
