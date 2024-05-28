<script setup lang="ts">
import { computed, ref } from "vue";
import { useCartStore } from "../stores/cart";

const cartStore = useCartStore();
const { addToCart } = cartStore;

export type PizzaCardType = {
  id: number;
  imageUrl: string;
  title: string;
  types: string[];
  sizes: number[];
  price: number;
  category: number;
  rating: number;
};

const { pizza } = defineProps<{ pizza: PizzaCardType }>();

const { id, imageUrl, title, types, sizes, price } = pizza;

const typeNames = ["традиционное", "тонкое"];
const setType = ref(types[0]);
const setSize = ref(sizes[0]);
const setPrice = computed(() => Math.ceil((price * setSize.value) / 26));

const onClickAddPizza = () => {
  addToCart({
    id,
    title,
    imageUrl,
    price: setPrice.value,
    type: setType.value,
    size: setSize.value,
  });
};
</script>

<template>
  <div class="flex justify-center w-full">
    <div
      class="h-[460px] w-full max-w-[300px] flex flex-col justify-between items-center"
    >
      <img :src="imageUrl" :alt="title" />
      <h4 class="font-semibold text-2xl">{{ title }}</h4>
      <div class="bg-gray-200 w-full rounded-lg text-center flex flex-col gap-2 p-2">
        <div class="flex w-full">
          <button
            v-for="item in types"
            :key="item"
            @click="() => (setType = item)"
            :class="{
              'rounded p-1 cursor-pointer w-full text-center transition': true,
              'bg-white ': setType === item,
            }"
          >
            {{ typeNames[item] }}
          </button>
        </div>
        <div class="flex text-center">
          <button
            v-for="size in sizes"
            :key="size"
            @click="() => (setSize = size)"
            :class="{
              'w-full rounded p-1 cursor-pointer': true,
              'bg-white ': setSize === size,
            }"
          >
            {{ size }} см.
          </button>
        </div>
      </div>
      <div class="flex justify-between items-center w-full">
        <h3 class="text-xl font-bold">Цена {{ setPrice }} ₽</h3>
        <button
          @click="onClickAddPizza"
          class="bg-white active:bg-gray-200 hover:bg-gray-50 cursor-pointer rounded-full border border-orange-500 flex gap-2 px-2 font-bold items-center h-12 text-orange-500"
        >
          <span class="text-xl">+</span>
          <span class="text-lg">Добавить</span>
        </button>
      </div>
    </div>
  </div>
</template>
