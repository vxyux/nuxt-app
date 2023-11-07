<template>
  <NuxtLayout :name="'products'">
    <section class="hero">
      <MainHeading
        :head="'Products'"
        :desc="'This is all the products that you can buy off of our website.'"
      />
    </section>
    <section>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        <div v-for="product in products">
          <ProductCard
            :id="product.id"
            :title="product.title"
            :category="product.category"
            :image="product.image"
            :price="product.price"
            :discount="discounts"
          ></ProductCard>
        </div>
      </div>
    </section>
  </NuxtLayout>
</template>

<script setup lang="ts">
import discounts from "../../assets/discounts.json";
// fetch all the products from the API
const { data: products } = await useFetch("https://fakestoreapi.com/products");
</script>

<style scoped></style>
