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
</script>

<template>
  <div class="flex flex-wrap gap-4">
    <div
      v-for="category in categories"
      :key="category"
      class="rounded-full bg-gray-100 hover:bg-gray-200 flex justify-center items-center px-4 py-2 cursor-pointer font-semibold"
    >
      {{ category }}
    </div>
  </div>
</template>
