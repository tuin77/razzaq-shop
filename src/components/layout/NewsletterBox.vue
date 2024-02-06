<template>
  <div class="">
    <!-- relative -->
    <div class="text-right bg-neutral-100">
      <form class="mb-4 flex flex-col sm:flex-row justify-end gap-4 max-w-[720px] ml-auto" @submit.prevent="subscribeNewsletter(inputValue)">
        <SfInput
          v-model="inputValue"
          type="email"
          size="lg"
          wrapper-class="grow !text-sm md:text-lg md:max-w-[500px] sm:w-auto !rounded-100"
          placeholder="Please enter your email"
        />
        <SfButton type="submit" size="lg" class="px-4 py-2 text-lg text-white bg-primary-700 sm:w-auto hover:bg-orange-600 !rounded-100">
          subscription
        </SfButton>
      </form>
    </div>
    <div class="absolute top-0 right-0 mx-2 mt-2 sm:mr-6">
      <div
        v-if="showPositiveAlert"
        role="alert"
        class="flex items-start md:items-center shadow-md max-w-[600px] bg-positive-100 pr-2 pl-4 mb-2 ring-1 ring-positive-200 typography-text-sm md:typography-text-base py-1 rounded-md"
      >
        <SfIconCheckCircle class="my-2 mr-2 text-positive-700" />
        <p class="py-2 mr-2">Your email has been added to the newsletter subscription.</p>
        <button
          type="button"
          class="p-1.5 md:p-2 ml-auto rounded-md text-positive-700 hover:bg-positive-200 active:bg-positive-300 hover:text-positive-800 active:text-positive-900"
          aria-label="Close positive alert"
          @click="showPositiveAlert = false"
        >
          <SfIconClose class="hidden md:block" />
          <SfIconClose size="sm" class="block md:hidden" />
        </button>
      </div>
      <div
        v-if="showErrorAlert"
        role="alert"
        class="flex items-start md:items-center max-w-[720px] shadow-md bg-negative-100 pr-2 pl-4 ring-1 ring-negative-300 typography-text-sm md:typography-text-base py-1 rounded-md"
      >
        <p class="py-2 mr-2">This email is already subscribed for our newsletter.</p>
        <button
          type="button"
          class="p-1.5 md:p-2 ml-auto rounded-md text-negative-700 hover:bg-negative-200 active:bg-negative-300 hover:text-negative-800 active:text-negative-900"
          aria-label="Close error alert"
          @click="showErrorAlert = false"
        >
          <SfIconClose class="hidden md:block" />
          <SfIconClose size="sm" class="block md:hidden" />
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, type Ref } from "vue";
import { SfButton, SfInput, SfIconCheckCircle, SfIconClose } from "@storefront-ui/vue";

const inputValue = ref("");
const showPositiveAlert = ref(false);
const showErrorAlert = ref(false);
const emailDataBase: Ref<string[]> = ref([]);

const checkEmailDataBase = (email: string) => emailDataBase.value.find((element) => element === email);

const subscribeNewsletter = (email: string) => {
  if (!email) return;
  if (checkEmailDataBase(email)) {
    showErrorAlert.value = true;
    setTimeout(() => (showErrorAlert.value = false), 5000);
  } else {
    showPositiveAlert.value = true;
    emailDataBase.value.push(email);
    setTimeout(() => (showPositiveAlert.value = false), 5000);
  }
  console.log(email);
  inputValue.value = "";
};
</script>
