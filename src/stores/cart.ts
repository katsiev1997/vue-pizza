// src/stores/cart.js
import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useCartStore = defineStore("cart", () => {
  const items = ref([]);

  const addToCart = (pizza) => {
    const existingItem = items.value.find((item) => item === pizza);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      items.value.push({ ...pizza, quantity: 1 });
    }
  };

  const removeFromCart = (pizzaId) => {
    items.value = items.value.filter((item) => item.id !== pizzaId);
  };

  const clearCart = () => {
    items.value = [];
  };

  const totalQuantity = computed(() => {
    return items.value.reduce((acc, item) => acc + item.quantity, 0);
  });

  const totalPrice = computed(() => {
    return items.value.reduce((acc, item) => acc + item.quantity * item.price, 0);
  });

  return {
    items,
    addToCart,
    removeFromCart,
    clearCart,
    totalQuantity,
    totalPrice,
  };
});
