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

          <ProductPricing
            class="hidden lg:block"
            :price="product.price"
            :discount="discount"
          />

          <div class="sm:mt-10 mb-20 lg:mt-0 lg:mb-0">
            <p>{{ product.description }}.</p>
          </div>

          <ProductPricing
            class="block lg:hidden"
            :price="product.price"
            :discount="discount"
          />

          <button
            v-if="productInCart(product.id)"
            type="button"
            class="px-6 py-6 text-white bg-gray-700 hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <h1 text-lg>Added To Cart</h1>
          </button>

          <button
            v-else
            type="button"
            @click="addProductToCart(product.id)"
            class="px-6 py-6 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <h1 text-lg>Add To Cart</h1>
          </button>
        </div>
      </section>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import { type Product } from "@/types";
import { useCartStore } from "~/store/cart";
import { storeToRefs } from "pinia";
const cartStore = useCartStore();
const { addProductToCart, productInCart } = cartStore;
const { cartList } = storeToRefs(cartStore);

import discounts from "../../assets/discounts.json";

const { id } = useRoute().params;

// fetch all the products from the API
const { data: product } = await useFetch<Product>(
  "https://fakestoreapi.com/products/" + id
);

const discount = discounts.find((obj: object) => obj.id == id) || {};
</script>

<style></style>
