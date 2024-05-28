<script setup lang="ts">
import { Pizza, type CartItem } from "../stores/cart";
import { useCartStore } from "../stores/cart";

const typeNames = ["традиционное", "тонкое"];
const { item } = defineProps<{ item: CartItem }>();
const pizza: Pizza = {
  id: item.id,
  title: item.title,
  imageUrl: item.imageUrl,
  size: item.size,
  type: item.type,
  price: item.price,
};
const cartStore = useCartStore();
const addToCart = cartStore.addToCart
const decreaseItem = cartStore.decreaseItem
const removeFromCart = cartStore.removeFromCart

</script>

<template>
  <div class="w-full flex justify-between items-center">
    <img class="w-16 h-16" :src="item.imageUrl" :alt="item.title" />
    <div>
      <h3 class="text-xl font-bold">{{ item.title }}</h3>
      <p class="text-lg text-gray-400">
        {{ typeNames[item.type] }} тесто, {{ item.size }} см.
      </p>
    </div>
    <div class="flex gap-3 flex-wrap">
      <button
        @click="() => decreaseItem(pizza)"
        :disabled="item.quantity === 1"
        class="rounded-full text-center text-xl font-bold border border-orange-500 w-8 h-8"
      >
        -
      </button>
      <span class="text-xl font-bold">{{ item.quantity }}</span>
      <button
        @click="() => addToCart(pizza)"
        class="rounded-full text-center text-xl font-bold border border-orange-500 w-8 h-8"
      >
        +
      </button>
    </div>
    <h3 class="text-xl font-bold">{{ item.price * item.quantity }} ₽</h3>
    <button @click="removeFromCart(pizza)">
      <img class="w-8 h-8" src="/delete.png" alt="x" />
    </button>
  </div>
</template>
