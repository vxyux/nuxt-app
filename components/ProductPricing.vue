<template>
  <div>
    <div class="radial-gradient">
      <div v-if="Object.keys(props.discount).length >= 1">
        <h1
          class="line-through mt-42 lg:mt-28 lg:mt-28 text-center text-5xl font-extrabold leading-none tracking-tight text-gray-400 lg:text-6xl dark:text-white"
        >
          €{{
            Math.floor((props.price / (1 - props.discount.percentage / 100)) * 100) / 100
          }}
        </h1>
        <h1
          class="text-center text-7xl font-extrabold leading-none tracking-tight text-white lg:text-8xl dark:text-white"
        >
          €{{ props.price }}
        </h1>
      </div>
      <div v-else>
        <h1 class="mt-42 lg:mt-28 lg:mt-28 text-center text-5xl font-extrabold">
          &ensp;
        </h1>
        <h1
          class="price text-center text-7xl font-extrabold leading-none tracking-tight text-white lg:text-8xl mt-48 dark:text-white"
        >
          €{{ props.price }}
        </h1>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
export type ProductPricingProps = {
  price: number;
  discount?: object | null;
};

const props = defineProps<ProductPricingProps>();
</script>

<style scoped></style>
