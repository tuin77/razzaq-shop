<template>
  <nav
    v-if="props.maxPages && props.maxPages > 1"
    class="flex justify-center border-neutral-200 pagination"
    role="navigation"
    aria-label="pagination"
  >
    <SfButton
      size="lg"
      aria-label="Go to previous page"
      :disabled="selectedPage <= 1"
      variant="tertiary"
      class="w-[3.75rem] h-[3.75rem] !p-0 !rounded-full border border-solid border-gray-100 !text-bold-100 !hover:text-white"
      @click="prev"
    >
      <template #prefix>
        <SfIconChevronLeft />
      </template>
    </SfButton>
    <ul class="flex justify-center text-2xl text-bold-100">
      <li v-if="!pages.includes(1)" :class="['flex border-transparent', { 'font-medium  !border-primary-500': selectedPage === 1 }]">
        <button
          type="button"
          class="min-w-[38px] px-3 sm:px-4 py-3 md:w-12 rounded-md hover:bg-primary-100 hover:text-primary-800 active:bg-primary-200 active:text-primary-900"
          :aria-current="selectedPage === 1"
          @click="setPage(1)"
        >
          1
        </button>
      </li>
      <li v-if="startPage > 2">
        <button type="button" disabled aria-hidden="true" class="pb-2 rounded-md md:w-12">...</button>
      </li>
      <li v-if="maxVisiblePages === 1 && selectedPage === totalPages">
        <button
          type="button"
          class="min-w-[38px] px-3 sm:px-4 py-3 md:w-12 rounded-md hover:bg-primary-100 hover:text-primary-800 active:bg-primary-200 active:text-primary-900"
          :aria-current="endPage - 1 === selectedPage"
          @click="setPage(endPage - 1)"
        >
          {{ endPage - 1 }}
        </button>
      </li>
      <li
        v-for="page in pages"
        :key="`page-${page}`"
        :class="['flex  border-transparent', { 'font-medium  !border-primary-700': selectedPage === page }]"
      >
        <button
          type="button"
          :class="[
            'min-w-[38px] px-3 sm:px-4 py-3 md:w-12  rounded-md hover:bg-primary-100 hover:text-primary-800 active:bg-primary-200 active:text-primary-900',
            { '!text-neutral-900 hover:!text-primary-800 active:!text-primary-900': selectedPage === page },
          ]"
          :aria-label="`Page ${page} of ${totalPages}`"
          :aria-current="selectedPage === page"
          @click="setPage(page)"
        >
          {{ page }}
        </button>
      </li>
      <li v-if="maxVisiblePages === 1 && selectedPage === 1">
        <button type="button" class="rounded-md" :aria-label="`Page 2 of ${totalPages}`" @click="setPage(2)">2</button>
      </li>
      <li v-if="endPage < totalPages - 1">
        <button type="button" disabled aria-hidden="true" class="pb-2 rounded-md md:w-12">...</button>
      </li>
      <li
        v-if="!pages.includes(totalPages)"
        :class="['flex  border-transparent', { 'font-medium  !border-primary-500': selectedPage === totalPages }]"
      >
        <button
          type="button"
          class="min-w-[38px] px-3 sm:px-4 py-3 md:w-12 rounded-md hover:bg-primary-100 hover:text-primary-800 active:bg-primary-200 active:text-primary-900"
          :aria-current="totalPages === selectedPage"
          @click="setPage(totalPages)"
        >
          {{ totalPages }}
        </button>
      </li>
    </ul>
    <SfButton
      size="lg"
      aria-label="Go to next page"
      :disabled="selectedPage >= totalPages"
      variant="tertiary"
      class="w-[3.75rem] h-[3.75rem] !p-0 ml-[1.875rem] !rounded-full border border-solid border-gray-100 !text-bold-100 !hover:text-white"
      @click="next"
    >
      <template #suffix>
        <SfIconChevronRight />
      </template>
    </SfButton>
  </nav>
</template>

<script lang="ts" setup>
import { SfButton, SfIconChevronLeft, SfIconChevronRight, usePagination } from "@storefront-ui/vue";
const props = defineProps({
  // specs:所有的规格信息  skus:所有的sku组合
  totalItems: Number,
  currentPage: Number,
  pageSize: Number,
  maxPages: Number,
});
const { totalPages, pages, selectedPage, startPage, endPage, next, prev, setPage, maxVisiblePages } = usePagination({
  totalItems: props.totalItems || 0,
  currentPage: props.currentPage || 0,
  pageSize: props.pageSize || 0,
  maxPages: props.maxPages || 0,
});
</script>

<style>
.pagination ul li button {
  width: 3.75rem;
  height: 3.75rem;
  border-radius: 50%;
  border: 1px solid #e6e6e6;
}

.pagination ul li button:hover {
  color: white;
  border: 1px solid #fca500;
  background-color: #fca500;
}

.pagination ul li {
  margin-left: 1.875rem;
}
</style>
