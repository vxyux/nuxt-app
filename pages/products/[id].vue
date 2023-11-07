<template>
  <div>
    <NuxtLayout :name="'products'">
      <section class="hero">
        <ProductHeading
          :head="product.title"
          :category="product.category.charAt(0).toUpperCase() + product.category.slice(1)"
        />
        <RatingBlock
          :rating="product.rating.rate"
          :amount="product.rating.count"
        ></RatingBlock>
      </section>
      <section>
        <div class="grid lg:grid-cols-2 gap-5">
          <figure>
            <img
              class="sm:max-h-96 w-auto rounded-lg mx-auto"
              :src="product.image"
              alt="image description"
            />
            <figcaption class="mt-5 text-sm text-center text-gray-500 dark:text-gray-400">
              An image of a {{ product.title }}
            </figcaption>
          </figure>
          <div class="radial-gradient">
            <div v-if="Object.keys(discount).length >= 1">
              <h1
                class="line-through mb-4 mt-36 lg:mt-28 lg:mt-0 text-center text-5xl font-extrabold leading-none tracking-tight text-gray-500 md:text-5xl lg:text-6xl dark:text-white"
              >
                €{{
                  Math.floor((product.price / (1 - discount.percentage / 100)) * 100) /
                  100
                }}
              </h1>
              <h1
                class="text-center text-6xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-7xl dark:text-white"
              >
                €{{ product.price }}
              </h1>
            </div>
            <div v-else>
              <h1
                class="text-center text-6xl mt-44 font-extrabold leading-none tracking-tight text-black md:text-5xl lg:text-7xl dark:text-white"
              >
                €{{ product.price }}
              </h1>
            </div>
          </div>
        </div>
      </section>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import discounts from "../../assets/discounts.json";
const { id } = useRoute().params;
// fetch all the products from the API
const { data: product } = await useFetch("https://fakestoreapi.com/products/" + id);

const discount = discounts.find((obj: object) => obj.id == id) || {};

console.log(Object.keys(discount).length);
</script>

<style>
.radial-gradient {
  height: 30rem;
  background: rgb(14, 143, 193);
  background: radial-gradient(
    circle,
    rgba(14, 143, 193, 1) 0%,
    rgba(255, 255, 255, 1) 55%,
    rgba(255, 255, 255, 1) 100%
  );
}
</style>
