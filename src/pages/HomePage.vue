<script setup>
import PizzaCard from "../components/PizzaCard.vue";
import Sort from "../components/Sort.vue";
import Category from "../components/Category.vue";
import { ref, onMounted, provide, watch } from "vue";
import axios from "axios";

const pizzas = ref([]);
const setSort = ref("rating");
const setCategory = ref(0);
provide("setSort", setSort);
provide("setCategory", setCategory);

const getPizzas = async () => {
  try {
    const category = setCategory.value > 0 ? `category=${setCategory.value}` : "";
    const sort = `sortBy=${setSort.value}`;
    const { data } = await axios.get(
      `https://b8163a4eee8414a4.mokky.dev/pizzas?${category}&${sort}`
    );
    pizzas.value = data;
  } catch (error) {
    console.log(error);
  }
};

onMounted(() => getPizzas());
watch([setSort, setCategory], getPizzas);
</script>

<template>
  <div>
    <div class="mt-4 flex justify-between items-center">
      <Category />
      <Sort />
    </div>
    <h1 class="text-3xl font-bold my-5 ml-4">Все пиццы</h1>
    <div
      class="w-full grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-5"
    >
      <TransitionGroup name="list">
        <PizzaCard v-for="pizza in pizzas" :key="pizza.id" :pizza="pizza" />
      </TransitionGroup>
    </div>
  </div>
</template>

<style scoped>
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(50px);
}
</style>
