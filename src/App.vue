<script setup>
import Header from "./components/Header.vue";
import Category from "./components/Category.vue";
import Sort from "./components/Sort.vue";
import PizzaCard from "./components/PizzaCard.vue";
</script>

<template>
  <div class="app">
    <Header />
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
  </div>
</template>

<style scoped>
.app {
  border-radius: 10px;
  margin: auto;
  max-width: 1440px;
  width: 100%;
  height: 100%;
  box-shadow: 0 15px 20px 0 rgba(0, 0, 0, 0.03);
  background: #fff;
  padding: 20px;
}
</style>
