<script setup>
import Header from "./components/Header.vue";
import HomePage from "./pages/HomePage.vue";
</script>

<template>
  <div class="app">
    <Header />
    
    <HomePage />
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
