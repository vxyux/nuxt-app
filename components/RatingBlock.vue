<template>
  <div>
    <div class="flex items-center">
      <svg
        class="w-6 h-6 text-yellow-300 mr-1"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 22 20"
      >
        <path
          d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
        />
      </svg>
      <p class="ml-2 text-2xl font-bold text-gray-900 dark:text-white">
        {{ props.rating }}
      </p>
      <span class="w-1 h-1 mx-2 bg-gray-500 rounded-full dark:bg-gray-400"></span>
      <a
        href="#"
        class="text-xl font-medium text-gray-900 underline hover:no-underline dark:text-white"
        >{{ props.amount }} reviews</a
      >
    </div>
  </div>
</template>

<script setup lang="ts">
export type RatingBlock = {
  rating?: number | string;
  amount?: number;
};

const props = withDefaults(defineProps<RatingBlock>(), {
  rating: "Be the first to review",
  amount: 0,
});
</script>

<style scoped></style>
