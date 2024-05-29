<script setup lang="ts">
import { ref, provide, watch } from "vue";
import { useQuery } from "@tanstack/vue-query";
import axios from "axios";
import PizzaCard, { PizzaCardType } from "../components/PizzaCard.vue";
import Sort from "../components/Sort.vue";
import Category from "../components/Category.vue";

const setSort = ref("rating");
const setCategory = ref(0);
provide("setSort", setSort);
provide("setCategory", setCategory);

const fetchPizzas = async () => {
  const category = setCategory.value > 0 ? `category=${setCategory.value}` : "";
  const sort = `sortBy=${setSort.value}`;
  const { data } = await axios.get<PizzaCardType[]>(
    `https://b8163a4eee8414a4.mokky.1dev/pizzas?${category}&${sort}`
  );
  return data;
};

const {
  data: pizzas,
  refetch,
  isLoading,
  isError,
} = useQuery({
  queryKey: ["pizzas", setSort, setCategory],
  queryFn: fetchPizzas,
});

watch([setSort, setCategory], () => {
  refetch();
});
</script>

<template>
  <div v-if="isLoading" class="w-full h-full min-h-96 flex justify-center items-center">
    <div class="loader" />
  </div>
  <div v-else-if="isError" class="w-full h-full min-h-96 flex justify-center items-center">
    <h2 class="text-3xl font-bold text-red-700">Ошибка при загрузке данных с сервера(</h2>
  </div>
  <div v-else>
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
/* HTML: <div class="loader"></div> */
.loader {
  width: 150px;
  --b: 30px;
  aspect-ratio: 1;
  border-radius: 50%;
  padding: 1px;
  background: conic-gradient(#0000 10%, #f0ae33) content-box;
  -webkit-mask: repeating-conic-gradient(
      #0000 0deg,
      #000 1deg 20deg,
      #0000 21deg 36deg
    ),
    radial-gradient(
      farthest-side,
      #0000 calc(100% - var(--b) - 1px),
      #000 calc(100% - var(--b))
    );
  -webkit-mask-composite: destination-in;
  mask-composite: intersect;
  animation: l4 1s infinite steps(10);
}
@keyframes l4 {
  to {
    transform: rotate(1turn);
  }
}
</style>
