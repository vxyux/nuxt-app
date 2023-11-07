<template>
  <div>
    <!-- component -->
    <NuxtLink :to="`/products/${props.id}`">
      <div
        class="mt-10 w-auto transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg"
      >
        <img class="h-64 w-full object-contain" :src="props.image" alt="Product Image" />
        <div class="p-4">
          <h2 class="mb-2 text-lg font-medium dark:text-white text-gray-900">
            {{ props.title }}
          </h2>
          <p class="mb-3 text-base dark:text-gray-300 text-gray-700">
            {{ categoryName }}
          </p>
          <div class="flex items-center">
            <mark
              v-if="discount"
              class="px-2 text-white bg-blue-600 rounded dark:bg-blue-500"
              >€{{ props.price }}</mark
            >
            <p v-else class="mr-2 text-lg font-semibold text-gray-900 dark:text-white">
              €{{ props.price }}
            </p>
            <p
              v-if="discount"
              class="ml-1 text-base font-medium text-gray-500 line-through dark:text-gray-300"
            >
              €{{
                Math.floor((props.price / (1 - discount.percentage / 100)) * 100) / 100
              }}
            </p>
            <p v-if="discount" class="ml-2 text-base font-bold text-green-500">
              {{ discount.percentage }}% off
            </p>
          </div>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
export type ProductCardProps = {
  discount?: object | boolean;
  id: number;
  title: string;
  category: string;
  image: string;
  price: number;
};

const props = withDefaults(defineProps<ProductCardProps>(), {
  discount: false,
});

const discount = props.discount.find((obj: object) => obj.id === props.id);

const categoryName = props.category.charAt(0).toUpperCase() + props.category.slice(1);
</script>

<style scoped></style>
