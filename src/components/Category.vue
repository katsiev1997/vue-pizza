<script setup>
import { inject } from "vue";

const categories = [
  "Все",
  "Мясные",
  "Вегетарианская",
  "Гриль",
  "Острые",
  "Закрытые",
];

const setCategory = inject('setCategory')

const onClickCategory = (category) => {
  setCategory.value = category;
};
</script>

<template>
  <div class="flex flex-wrap gap-4">
    <div
      v-for="category, i in categories"
      :key="category"
      @click="onClickCategory(i)"
      :class="{
        'rounded-full bg-gray-100 flex justify-center items-center px-4 py-2 cursor-pointer font-semibold': true,
        'bg-gray-900 text-white': category === categories[setCategory],
        'hover:bg-gray-200': category !== categories[setCategory],
      }"
    >
      {{ categories[i] }}
    </div>
  </div>
</template>
