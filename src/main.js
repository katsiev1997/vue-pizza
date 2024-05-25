import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import "./style.css";
import App from "./App.vue";
import HomePage from "./pages/HomePage.vue";
import CartPage from "./pages/CartPage.vue";

const routes = [
  { path: "/", component: HomePage },
  { path: "/cart", component: CartPage },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount("#app");
