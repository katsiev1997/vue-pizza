<script setup lang="ts">
import CartItem from "../components/CartItem.vue";
</script>

<template>
  <div class="w-full max-w-4xl m-auto flex flex-col gap-5">
    <div class="flex justify-between w-full items-center">
      <h1 class="text-2xl font-bold my-5 ml-4">Все пиццы</h1>
      <button class="flex items-center gap-2 cursor-pointer">
        <img src="/container.svg" alt="container" />
        <p class="text-lg text-gray-400 hover:text-black">Очистить корзину</p>
      </button>
    </div>
    <CartItem />
    <CartItem />
    <CartItem />
    <CartItem />
    <CartItem />
    <div class="flex justify-between w-full items-center mt-10">
      <p class="text-2xl">Всего пицц: <span class="font-bold">2 шт.</span></p>
      <p class="text-2xl">
        Сумма заказа: <span class="text-orange-500 font-bold">900 ₽</span>
      </p>
    </div>
    <div class="flex justify-between w-full items-center my-10">
      <button
        class="rounded-full border border-gray-300 transition bg-white text-gray-300 p-5 hover:bg-orange-500 hover:text-white font-bold"
      >
        {{ "< Вернуться назад" }}
      </button>
      <button
        class="rounded-full border border-gray-300 transition bg-orange-500 text-white p-5 hover:bg-white hover:text-orange-500 font-bold"
      >
        Оформить заказ
      </button>
    </div>
  </div>
</template>
