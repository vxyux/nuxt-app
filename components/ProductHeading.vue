<template>
  <div>
    <div class="text-left">
      <p class="mb-2 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
        {{ props.category }}
      </p>
      <h1
        class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white"
      >
        {{ props.head }}
      </h1>
      <NuxtLink
        v-if="button"
        :to="props.buttonLink"
        class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
      >
        {{ props.buttonText }}
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
export type HeadingProps = {
  head?: string;
  category?: string;
  button?: boolean;
  buttonText?: string;
  buttonLink?: string;
};

const props = withDefaults(defineProps<HeadingProps>(), {
  buttonText: "Button",
  button: false,
});
</script>

<style scoped></style>
