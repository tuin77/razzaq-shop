<template>
  <div class="mx-auto mb-7 max-w-1620">
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
