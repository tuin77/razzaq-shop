<script setup lang="ts">
import useStore from "@/stores";

const { cart } = useStore();
cart.getCartList();
</script>

<template>
  <RouterView></RouterView>
</template>
<style scoped></style>
