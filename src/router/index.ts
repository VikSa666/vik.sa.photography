import { createMemoryHistory, createRouter } from "vue-router";

import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import SeriesIndex from "../views/SeriesIndex.vue";
import TravelsIndex from "../views/TravelsIndex.vue";
import SeriesView from "../views/SeriesView.vue";
import TravelsView from "../views/travelsView.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/about", component: AboutView },
  { path: "/series-index", component: SeriesIndex },
  { path: "/series/:folder/:title", component: SeriesView },
  { path: "/travel-index", component: TravelsIndex },
  { path: "/travels/:folder/:title", component: TravelsView },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
