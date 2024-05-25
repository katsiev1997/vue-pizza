<script setup lang="ts">
import { useCartStore } from "../stores/cart";
import { ref } from "vue";
import { RouterLink } from "vue-router";
import { storeToRefs } from "pinia";
const cartStore = useCartStore();
const { totalPrice, totalQuantity } = storeToRefs(cartStore);
</script>

<template>
  <header
    class="flex items-center gap-2 flex-wrap md:flex-nowrap justify-between border-b border-gray-300 w-full px-5 pb-5"
  >
    <RouterLink to="/"
      ><div
        class="max-w-[350px] w-full flex gap-5 items-center justify-between cursor-pointer"
      >
        <img src="/pizza_slice.png" alt="pizza_slice" />
        <div>
          <h2 class="text-2xl font-black uppercase">vue pizza</h2>
          <p class="text-lg text-gray-400">самая вкусная пицца во вселенной</p>
        </div>
      </div>
    </RouterLink>
    <RouterLink to="/cart">
      <div
        class="min-w-[140px] bg-orange-500 p-4 text-white flex items-center justify-around gap-3 rounded-full font-semibold cursor-pointer"
      >
        <span>{{ totalPrice }} ₽</span>
        <span>|</span>
        <div class="flex gap-1">
          <img src="/cart.svg" alt="cart" />
          <span>{{ totalQuantity }}</span>
        </div>
      </div>
    </RouterLink>
  </header>
</template>
