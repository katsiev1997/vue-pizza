<script setup lang="ts"></script>

<template>
  <div class="w-full flex justify-between items-center">
    <img src="" alt="" />
    <div>
      <h3 class="text-xl font-bold">Сырный цыпленок</h3>
      <p class="text-lg text-gray-400">тонкое тесто, 26 см</p>
    </div>
    <div class="flex gap-3 flex-wrap">
      <button
        class="rounded-full text-center text-xl font-bold border border-orange-500 w-8 h-8"
      >
        -
      </button>
      <span class="text-xl font-bold">2</span>
      <button
        class="rounded-full text-center text-xl font-bold border border-orange-500 w-8 h-8"
      >
        +
      </button>
    </div>
    <h3 class="text-xl font-bold">770 ₽</h3>
    <button>
      <img class="w-8 h-8" src="/delete.png" alt="x" />
    </button>
  </div>
</template>
