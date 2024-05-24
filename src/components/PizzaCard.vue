<template>
  <div class="flex justify-center w-full">
    <div class="h-[460px] flex flex-col justify-between items-center">
      <img src="/pizza.png" alt="pizza" />
      <h4 class="font-semibold text-2xl">Чизбургер-пицца</h4>
      <div class="bg-gray-200 w-full rounded-lg text-center flex flex-col gap-2 p-2">
        <div class="grid grid-cols-2 w-full">
          <div class="bg-white rounded p-1">тонкое</div>
          <div>традиционное</div>
        </div>
        <div class="grid grid-cols-3 w-full text-center">
          <div class="bg-white rounded p-1">26 см.</div>
          <div>30 см.</div>
          <div>40 см.</div>
        </div>
      </div>
      <div class="w-full flex justify-between items-center">
        <h3 class="text-xl font-bold">от 395 ₽</h3>
        <div
          class="bg-white rounded-full border border-orange-500 flex gap-2 px-3 font-bold items-center h-12 text-orange-500"
        >
          <span class="text-lg">+</span>
          <span class="text-lg">Добавить</span>
          <div class="bg-orange-500 rounded-full w-6 text-center text-white">2</div>
        </div>
      </div>
    </div>
  </div>
</template>
