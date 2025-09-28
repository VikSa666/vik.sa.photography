import { createMemoryHistory, createRouter } from "vue-router";

import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import SeriesIndex from "../views/SeriesIndex.vue";
import SeriesView from "../views/SeriesView.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/about", component: AboutView },
  { path: "/series-index", component: SeriesIndex },
  { path: "/series/:slug/", component: SeriesView },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
