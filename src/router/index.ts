import { createMemoryHistory, createRouter } from "vue-router";

import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import SeriesIndex from "../views/SeriesIndex.vue";
import SeriesView from "../views/SeriesView.vue";
import TravelsIndex from "../views/TravelsIndex.vue";
import TravelsView from "../views/TravelsView.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/about", component: AboutView },
  { path: "/series-index", component: SeriesIndex },
  { path: "/series/:slug/", component: SeriesView },
  { path: "/travels-index", component: TravelsIndex },
  { path: "/travels/:slug/", component: TravelsView },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
