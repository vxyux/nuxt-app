<template>
  <div>
    <h1 class="text-3xl font-bold">{{ props.title }}</h1>
    <p class="mt-4">
      <slot></slot>
    </p>
  </div>
</template>

<script setup lang="ts">
export type ParagraphProps = {
  title?: string;
};

const props = withDefaults(defineProps<ParagraphProps>(), {
  title: "Title",
});
</script>

<style scoped></style>
