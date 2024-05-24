<script setup>
import PizzaCard from "../components/PizzaCard.vue";
import Sort from "../components/Sort.vue";
import Category from "../components/Category.vue";
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
    <PizzaCard />
    <PizzaCard />
    <PizzaCard />
    <PizzaCard />
    <PizzaCard />
    <PizzaCard />
  </div>
</template>
