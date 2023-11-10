import { defineStore } from 'pinia';
import { type Cart, type Product } from '@/types';

export const useCartStore = defineStore('cartStore', () => {
  /*
    First we have defined our main object that is responsible for storing products in it's own cart.

    The constant has been made reactive with it's implicit type set to Cart (which is imported from another file). In it's
    first stage it will only contain an 'ID' key and a 'products' empty array.
  */
  const cartList: Ref<Cart> = ref({
    id: 1,
    products: new Array(),
  });

  /*
    This function can be called on when a product is to be added to the cart (cartList), as it's param we will use the entirety
    of the Product object that is linked to it's corresponding type.

    Inside there's a check for if the product is already added in the cart (func productInCart()), if it isn't: it will push
    the product object into the cartList 'products' array. If it is: it will simply refer to another function (func editProductQuantity()).

    This function is used in the products/[id].vue file that activates on-click on the 'add to cart' button, which is also responsible
    for incrementing the stock number when in cart.
  */
  function updateQuantity(prod: Product, newQuantity: number) {
    // if the product is not in the current cart
    if (!productInCart(prod.id)) {
      cartList.value.products.push(prod);
    } else {
      for (let object of cartList.value.products) {
        if (object.id == prod.id) {
          if (newQuantity <= 0) {
            cartList.value.products = cartList.value.products.filter(
              (x) => x.id != prod.id
            );
          } else {
            object.quantity = newQuantity;
          }
        }
      }
    }
  }

  /*
    This function will simply return a product object when id has been found in the array.
  */
  function productInCart(id: number) {
    return cartList.value.products.find((item) => item.id === id);
  }

  /*
    editProductQuantity() allows for the quantity to decrement or increment based on the 'increase' boolean.

    In this function I have used the 'non-null assertion operator (!)' that is used to hide the error, it
    signifies that it isn't either null or undefined.

    Source: https://stackoverflow.com/a/40350534
  */
  function editProductQuantity(id: number, increase: boolean) {
    for (let object of cartList.value.products) {
      if (object.id == id) {
        if (increase == true) {
          object.quantity = ++object.quantity!;
        } else {
          object.quantity = --object.quantity!;
        }
      }
    }
  }

  /*
    This function is responsible for calculating the orginal price when there's a discount running for the product.
  */
  function calcOriginalPrice(price: number, percentage: number) {
    const discountPrice = price * (percentage / 100);
    const priceOriginal = price + discountPrice;
    //console.log(roundPrice(priceOriginal));
    return priceOriginal;
  }

  /*
    This function is responsible for calculating the orginal price when there's a discount running for the product.
  */
  function sumQuantity() {
    let sum = 0;
    for (let prod of cartList.value.products) {
      sum += prod?.quantity ?? 0;
    }
    return sum;
  }

  function roundPrice(price: number) {
    const num = new Intl.NumberFormat('de-DE', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(price);
    return num;
  }

  function sumPrice(price: number, amount: number) {
    return price * amount;
  }

  function sumCart() {
    let cartTotal = 0,
      cartRaw = 0,
      cartDiscount = 0;
    for (let prod of cartList.value.products) {
      cartTotal += sumPrice(prod.price, prod.quantity);
      cartRaw += sumPrice(
        calcOriginalPrice(prod.price, prod.discount?.percentage ?? 0),
        prod.quantity
      );
      cartDiscount += cartRaw - cartTotal;
    }
    return [
      roundPrice(cartTotal),
      roundPrice(cartRaw),
      roundPrice(cartDiscount),
    ];
  }

  return {
    editProductQuantity,
    calcOriginalPrice,
    updateQuantity,
    productInCart,
    sumQuantity,
    roundPrice,
    cartList,
    sumCart,
  };
});

// https://codybontecou.com/nuxt3-and-pinia.html
