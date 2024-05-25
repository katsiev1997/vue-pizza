<script setup>
import Header from "./components/Header.vue";
import HomePage from "./pages/HomePage.vue";
</script>

<template>
  <div class="app">
    <Header />
    <div>
      <router-view v-slot="{ Component }">
        <transition  name="slide-fade" mode="out-in">
          <component :is="Component" :key="$route.path" />
        </transition>
      </router-view>
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

.slide-fade-enter-active {
  transition: all 0.5s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(10%);
  opacity: 0;
}
</style>
