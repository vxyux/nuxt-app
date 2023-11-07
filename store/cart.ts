import { defineStore } from 'pinia';

export const useCartStore = defineStore('cartStore', () => {
  const cartList = ref(Array());

  function addProductToCart(id: number) {
    if (!productInCart(id)) {
      cartList.value.push(id);
    }
    return id;
  }

  function productInCart(id: number) {
    return cartList.value.find((element) => element == id);
  }

  return { addProductToCart, productInCart, cartList };
});

// https://codybontecou.com/nuxt3-and-pinia.html
