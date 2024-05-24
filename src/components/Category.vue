<script setup>
import { ref } from "vue";

const categories = [
  "Все",
  "Мясные",
  "Вегетарианская",
  "Гриль",
  "Острые",
  "Закрытые",
];

const setCategory = ref("Все");

const onClickCategory = (category) => {
  setCategory.value = category;
};
</script>

<template>
  <div class="flex flex-wrap gap-4">
    <div
      v-for="category in categories"
      :key="category"
      @click="onClickCategory(category)"
      :class="{
        'rounded-full bg-gray-100 flex justify-center items-center px-4 py-2 cursor-pointer font-semibold': true,
        'bg-gray-900 text-white': category === setCategory,
        'hover:bg-gray-200': category !== setCategory,
      }"
    >
      {{ category }}
    </div>
  </div>
</template>
