<script setup lang="ts">
import AppHeader from "../components/layout/AppHeader.vue";
import AppFooter from "../components/layout/AppFooter.vue";
</script>

<template>
  <AppHeader></AppHeader>
  <RouterView></RouterView>
  <AppFooter></AppFooter>
</template>
<style scoped></style>
