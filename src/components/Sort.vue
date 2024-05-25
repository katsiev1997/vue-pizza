<script setup lang="ts">
import { ref, inject } from "vue";
const sort = [
  {
    label: "популярности",
    value: "rating",
  },
  {
    label: "цене",
    value: "price",
  },
  {
    label: "алфавиту",
    value: "title",
  },
];
const open = ref(true);
const setSort = inject("setSort");
</script>

<template>
  <div
    @click="() => (open = !open)"
    class="relative flex flex-wrap gap-2 w-[225px] ml-2 cursor-pointer"
  >
    <img
      src="/arrow_up.svg"
      :class="{
        'rotate-180 transition': !open,
      }"
      alt="arrow_up.svg"
    />
    <span class="font-bold text-sm">Сортировка по:</span>
    <span class="text-sm text-orange-500 underline underline-offset-4">
      {{ sort.find((item) => item.value === setSort).label }}
    </span>
    <div
      :class="{
        'absolute top-16 right-4 transition z-10 bg-white w-36 h-32 border rounded-xl shadow flex flex-col justify-around': true,
        hidden: open,
      }"
    >
      <div
        :class="{
          'cursor-pointer w-full hover:bg-gray-100 pl-5 h-full pt-2': true,
          'text-orange-500': item.value === setSort,
        }"
        v-for="item in sort"
        :key="item"
        @click="() => (setSort = item.value)"
      >
        {{ item.label }}
      </div>
    </div>
  </div>
</template>
