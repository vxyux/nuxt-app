<template>
  <div>
    <div class="grid lg:grid-cols-2 gap-5">
      <h1 class="mb-6 text-xl lg:text-2xl font-light text-gray-500 dark:text-gray-400">
        {{ head1 }}
      </h1>
    </div>
  </div>
</template>

<script setup lang="ts">
export type SubHeadingProps = {
  head1?: string;
};

const props = withDefaults(defineProps<SubHeadingProps>(), {
  head1: "title",
});
</script>

<style scoped></style>
