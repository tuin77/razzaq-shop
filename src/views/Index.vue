<script setup lang="ts">
import AppHeader from "../components/layout/AppHeader.vue";
import OrderHeader from "../components/layout/OrderHeader.vue";
import AppFooter from "../components/layout/AppFooter.vue";
import { computed, toRaw } from "vue";
import { useRouter } from "vue-router";
let router = useRouter();
import useStore from "@/stores";
const { member } = useStore();
const currentRouteName = computed(() => toRaw(router).currentRoute.value.name);
console.log(currentRouteName.value);

const { cart } = useStore();
if (member.isLogin) cart.getCartList();

// const isActiveClass = computed(() => (tab: string) => (currentRouteName.value === tab.toLocaleLowerCase() ? _activeClass : ""));
</script>

<template>
  <OrderHeader v-if="currentRouteName === 'order'"></OrderHeader>
  <AppHeader v-else></AppHeader>
  <RouterView></RouterView>
  <AppFooter></AppFooter>
</template>
<style scoped></style>
