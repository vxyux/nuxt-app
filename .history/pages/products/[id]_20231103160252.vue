<template>
  <div>
    <p>Product details for {{ id }}</p>
    <p>Cillum pariatur adipisicing sint consectetur.</p>
  </div>
</template>

<script setup lang="ts">
const { id } = useRoute().params;
definePageMeta({
  layout: "products",
});
</script>

<style scoped></style>
