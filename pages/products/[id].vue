<template>
  <div>
    <NuxtLayout :name="'products'">
      <section class="hero">
        <ProductHeading
          :head="product.title"
          :category="product.category.charAt(0).toUpperCase() + product.category.slice(1)"
        />
        <RatingBlock
          :rating="product?.rating?.rate"
          :amount="product?.rating?.count"
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
            :price="product?.price"
            :discount="product?.discount"
          />

          <div class="sm:mt-10 mb-20 lg:mt-0 lg:mb-0">
            <p>{{ product.description }}.</p>
          </div>

          <ProductPricing
            class="block lg:hidden"
            :price="product?.price"
            :discount="product?.discount"
          />

          <div v-if="productInCart(product.id)">
            <div class="grid grid-cols-2 gap-5">
              <button
                type="button"
                class="py-9 w-full text-white bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <h1>Added To Cart</h1>
              </button>

              <button
                @click="updateQuantity(product, product?.quantity! + 1)"
                type="button"
                class="py-9 w-full text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full px-5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <h1>{{ product.quantity }}</h1>
              </button>
              <p></p>
              <p class="text-sm text-center">
                <u>Click me</u> to increment the amount you want to buy!
              </p>
            </div>
          </div>

          <div v-else>
            <button
              @click="updateQuantity(product, product?.quantity! + 1)"
              type="button"
              class="py-9 w-full text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <h1 text-lg>Add To Cart</h1>
            </button>
          </div>
        </div>
      </section>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { type Product, type ProductDiscount } from "@/types";
import { useCartStore } from "~/store/shoppingCart";
const cartStore = useCartStore();
const { updateQuantity, productInCart, roundPrice } = cartStore;
const { cartList } = storeToRefs(cartStore);

// find product by id to prevent it from going to amount 1

import discounts from "../../assets/discounts.json";

const { id } = useRoute().params

// fetch all the products from the API and insert them into 'product'
const response = await useFetch<Product>(
  "https://fakestoreapi.com/products/" + id
);

const product: Ref<Partial<Product | null>> = ref({});
product.value = response.data.value;
product.value.discount = discounts.find((obj: object) => obj.id == id) || {};

/* https://stackoverflow.com/a/74952600
  Define a new constant that fetches the quantity key from this product that is already present in the cart
*/
const quantity = computed({
  get: () => cartList.value.products.find((item) => item.id === Number(id))?.quantity,
  set: (product) => updateQuantity(product),
})
product.value.quantity = productInCart(Number(id)) ? quantity : 1;


const discount = discounts.find((obj: object) => obj.id == id) || {};
</script>

<style></style>
