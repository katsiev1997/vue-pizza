<script setup>
import { ref } from "vue";
const { pizza } = defineProps({
  pizza: {
    type: Object,
    required: true,
    validator(value) {
      return (
        typeof value.id === "string" &&
        typeof value.imageUrl === "string" &&
        typeof value.title === "string" &&
        Array.isArray(value.types) &&
        Array.isArray(value.sizes) &&
        typeof value.price === "number" &&
        typeof value.category === "number" &&
        typeof value.rating === "number"
      );
    },
  },
});

// Деструктуризация свойств пиццы
const { imageUrl, title, types, sizes, price } = pizza;

const typeNames = ["традиционное", "тонкое"];
const setType = ref(types[0]);
const setSize = ref(sizes[0]);
const count = ref(0);
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
        <h3 class="text-xl font-bold">от {{ price }} ₽</h3>
        <button
          @click="() => count++"
          class="bg-white hover:bg-gray-50 cursor-pointer rounded-full border border-orange-500 flex gap-2 px-2 font-bold items-center h-12 text-orange-500"
        >
          <span class="text-2xl">+</span>
          <span class="text-lg">Добавить</span>
          <div class="bg-orange-500 rounded-full w-6 text-center text-white">
            {{ count }}
          </div>
        </button>
      </div>
    </div>
  </div>
</template>
