<template>
  <div>
    <NuxtLayout :name="'products'">
      <section class="hero">
        <MainHeading :head="'Cart'" :desc="'Checkout and these will all be yours.'" />
      </section>
      <section>
        <div class="flex gap-5">
          <div class="flex-initial w-6/12">
            <SubHeading
              v-if="cartList.products.length > 0"
              :head1="'Products in cart (' + cartProductTotal + ')'"
            />
          </div>
          <div class="flex-initial w-6/12 hidden lg:block">
            <SubHeading v-if="cartList.products.length > 0" :head1="'Checkout & Go'" />
          </div>
        </div>

        <div v-if="cartList.products.length > 0">
          <div class="grid lg:grid-cols-2 gap-5">
            <div>
              <div class="flex" v-for="cartProduct in cartList.products">
                <div class="flex-initial mb-12 w-6/12">
                  <NuxtLink :to="`/products/${cartProduct.id}`">
                    <p class="float-left hover:underline">
                      {{ cartProduct.title }}
                    </p>
                  </NuxtLink>
                  <br />
                  <p class="font-strong text-blue-600">
                    <span
                      v-if="cartProduct.discount?.percentage"
                      class="text-gray-600 line-through mr-2"
                    >
                      €{{
                        calcOriginalPrice(
                          cartProduct.price,
                          cartProduct.discount?.percentage ?? 0
                        )
                      }}</span
                    >€{{ cartProduct.price }}
                  </p>
                </div>

                <div class="w-6/12 float-right">
                  <CounterButton
                    :amount="cartProduct.quantity"
                    @changeQuantity="(n) => updateQuantity(cartProduct, n)"
                  />
                </div>
              </div>
            </div>

            <div>
              <!-- This portion is exclusive to a smaller window -->
              <div class="flex-initial lg:w-6/12 block lg:hidden">
                <SubHeading
                  v-if="cartList.products.length > 0"
                  :head1="'Checkout & Go'"
                />

                <div class="flex mb-4 text-gray-400">
                  <div class="w-6/12">
                    <p>Original price</p>
                    <p>Applying discount</p>
                  </div>
                  <div class="w-6/12">
                    <div class="text-right float-right">
                      <p>€{{ cartTotal[1] }}</p>
                      <p class="text-green-500">-€{{ cartTotal[2] }}</p>
                    </div>
                  </div>
                </div>

                <hr />

                <div class="grid grid-cols-2 gap-5 mt-4 text-3xl">
                  <h1>Total</h1>
                  <h1 class="text-right">€{{ cartTotal[0] }}</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- an else has been placed to catch when the cart is empty -->
        <div v-else>
          <h1
            class="mb-6 text-lg font-light text-center text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400"
          >
            No products are in the cart.
          </h1>
        </div>
      </section>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from "~/store/shoppingCart";
import { useRoute } from "vue-router";
const cartStore = useCartStore();
const { sumQuantity, calcOriginalPrice, sumCart, updateQuantity } = cartStore;
const { cartList } = cartStore;

const cartProductTotal = computed({
  get: () => sumQuantity(),
  set: (cart) => {},
});

const cartTotal = computed({
  get: () => sumCart(),
  set: (cart) => {},
});
</script>
