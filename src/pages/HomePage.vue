<script setup>
import PizzaCard from "../components/PizzaCard.vue";
import Sort from "../components/Sort.vue";
import Category from "../components/Category.vue";
import { ref, onMounted } from "vue";
import axios from "axios";

const pizzas = ref([]);
onMounted(async () => {
  try {
    const { data } = await axios.get("https://b8163a4eee8414a4.mokky.dev/pizzas");
    pizzas.value = data;
  } catch (error) {
    console.log(error);
  }
});
</script>

<template>
  <div class="mt-4 flex justify-between items-center">
    <Category />
    <Sort />
  </div>
  <h1 class="text-3xl font-bold my-5 ml-4">Все пиццы</h1>
  <div
    class="w-full grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-5"
  >
    <PizzaCard v-for="pizza in pizzas" :pizza="pizza" />
  </div>
</template>
