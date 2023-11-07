<template>
  <NuxtLayout :name="'products'">
    <section class="hero">
      <MainHeading :head="'Cart'" :desc="'Checkout and these will all be yours.'" />
    </section>
    <section>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"></div>
    </section>
  </NuxtLayout>
</template>

<script setup lang="ts">
import discounts from "../../assets/discounts.json";
import { useCartStore } from "~/store/cart";
import { storeToRefs } from "pinia";
import { useRoute } from "vue-router";
const cartStore = useCartStore();
const { addProductToCart, productInCart } = cartStore;
const { cartList } = storeToRefs(cartStore);

const { id } = useRoute().params;
</script>

<style scoped></style>
