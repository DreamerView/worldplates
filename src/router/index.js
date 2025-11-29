import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Categories from "../views/Categories.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  {path:"/categories/:name", name:"Categories", component:Categories,props: true,}
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
