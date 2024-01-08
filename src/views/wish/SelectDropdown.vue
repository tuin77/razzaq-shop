<template>
  <div ref="referenceRef" class="relative">
    <div
      :id="id"
      ref="selectTriggerRef"
      role="combobox"
      :aria-controls="listboxId"
      :aria-expanded="isOpen"
      aria-label="Select one option"
      :aria-activedescendant="selectedOption ? `${listboxId}-${selectedOption.value}` : undefined"
      class="flex items-center relative font-normal rounded-100 border border-gray-100 ring-inset py-[18px] px-4 focus-visible:outline focus-visible:outline-offset cursor-pointer"
      tabindex="0"
      @keydown.space="toggle()"
      @click="toggle()"
    >
      <template v-if="selectedOption">{{ selectedOption.label }}</template>
      <span v-else class="text-neutral-500">Choose from the list</span>
      <SfIconExpandMore class="ml-auto transition-transform duration-300 ease-in-out text-neutral-500" :class="{ 'rotate-180': isOpen }" />
    </div>
    <ul
      v-show="isOpen"
      :id="listboxId"
      ref="floatingRef"
      role="listbox"
      aria-label="Select one option"
      class="z-10 w-full py-2 bg-white border rounded-md shadow-md border-neutral-100"
      :style="dropdownStyle"
    >
      <SfListItem
        v-for="option in options"
        :id="`${listboxId}-${option.value}`"
        :key="option.value"
        role="option"
        tabindex="0"
        :aria-selected="option.value === selectedOption?.value"
        class="block"
        :class="{ 'font-medium': option.value === selectedOption?.value }"
        @click="selectOption(option)"
        @keydown.enter="selectOption(option)"
        @keydown.space="selectOption(option)"
      >
        {{ option.label }}
        <template #suffix>
          <SfIconCheck v-if="option.value === selectedOption?.value" class="text-primary-700" />
        </template>
      </SfListItem>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { ref, type Ref } from "vue";
import { unrefElement } from "@vueuse/core";
import { useDropdown, useDisclosure, SfIconExpandMore, SfListItem, SfIconCheck, useId, useTrapFocus } from "@storefront-ui/vue";

type SelectOption = {
  label: string;
  value: string;
};

const options: SelectOption[] = [
  {
    label: "Add to Cart",
    value: "startup",
  },
  {
    label: "Business",
    value: "business",
  },
  {
    label: "Enterprise",
    value: "enterprise",
  },
];

const { close, toggle, isOpen } = useDisclosure({ initialValue: false });
const selectedOption = ref<SelectOption>(options[0]);
const id = useId();
const listboxId = `select-dropdown-${id}`;
const selectTriggerRef = ref<HTMLDivElement>();

const {
  referenceRef,
  floatingRef,
  style: dropdownStyle,
} = useDropdown({
  isOpen,
  onClose: close,
});

useTrapFocus(floatingRef as Ref<HTMLUListElement>, {
  arrowKeysUpDown: true,
  activeState: isOpen,
  initialFocusContainerFallback: true,
});

const selectOption = (option: SelectOption) => {
  selectedOption.value = option;
  close();
  unrefElement(selectTriggerRef as Ref<HTMLDivElement>)?.focus();
};
</script>
