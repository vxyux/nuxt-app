<template>
  <div>
    <p>Product details for {{ id.params }}</p>
    <p>Cillum pariatur adipisicing sint consectetur.</p>
  </div>
</template>

<script setup lang="ts">
const {id} = useRoute();
</script>

<style scoped>

</style>