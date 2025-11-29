import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Categories from "../views/Categories.vue";
import Country from "../views/Country.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  {path:"/categories/:name", name:"Categories", component:Categories,props: true},
  {path:"/country/:name", name:"Country", component:Country,props: true}
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  }
});

export default router;
