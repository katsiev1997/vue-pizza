import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import { VueQueryPlugin } from "@tanstack/vue-query";
import { createPinia } from "pinia";

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

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(VueQueryPlugin);
app.use(router);
app.mount("#app");
