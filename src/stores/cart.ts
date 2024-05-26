import { defineStore } from "pinia";
import { ref, computed } from "vue";

export type Pizza = {
  id: number;
  title: string;
  imageUrl: string;
  price: number;
  type: string;
  size: number;
};

export interface CartItem extends Pizza {
  quantity: number;
}

export const useCartStore = defineStore("cart", () => {
  const items = ref<CartItem[]>([]);

  const addToCart = (pizza: Pizza) => {
    const existingItem: CartItem = items.value.find(
      (item) =>
        item.id === pizza.id && item.type === pizza.type && item.size === pizza.size
    );
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      items.value.push({ ...pizza, quantity: 1 });
    }
  };

  const decreaseItem = (pizza: Pizza) => {
    const item = items.value.find(
      (item) =>
        item.id === pizza.id && item.type === pizza.type && item.size === pizza.size
    );
    item.quantity -= 1;
  };

  const removeFromCart = (pizza: Pizza) => {
    const index = items.value.findIndex(
      (item) =>
        item.id === pizza.id && item.type === pizza.type && item.size === pizza.size
    );
    items.value.splice(index, 1);
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
    decreaseItem,
    addToCart,
    removeFromCart,
    clearCart,
    totalQuantity,
    totalPrice,
  };
});
