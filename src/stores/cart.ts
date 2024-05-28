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
    console.log(pizza);
    const existingItem = items.value.find(
      (item) =>
        item.id === pizza.id && item.type === pizza.type && item.size === pizza.size
    );
    if (existingItem) {
      existingItem.quantity += 1;
      items.value = [...items.value]; // force update
    } else {
      items.value = [...items.value, { ...pizza, quantity: 1 }];
    }
  };

  const decreaseItem = (pizza: Pizza) => {
    const itemIndex = items.value.findIndex(
      (item) =>
        item.id === pizza.id && item.type === pizza.type && item.size === pizza.size
    );
    if (itemIndex !== -1) {
      const item = items.value[itemIndex];
      item.quantity -= 1;
      items.value = [...items.value]; // force update
    }
  };

  const removeFromCart = (pizza: Pizza) => {
    const index = items.value.findIndex(
      (item) =>
        item.id === pizza.id && item.type === pizza.type && item.size === pizza.size
    );
    if (index !== -1) {
      const newItems = [...items.value];
      newItems.splice(index, 1);
      items.value = newItems; // force update
    }
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
