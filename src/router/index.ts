import { createMemoryHistory, createRouter } from "vue-router";

import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import MoynaqView from "../views/series/MoynaqView.vue";
import MelillaView from "../views/series/MelillaView.vue";
import BrutalismView from "../views/series/BrutalismView.vue";
import SeriesIndex from "../views/SeriesIndex.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/about", component: AboutView },
  { path: "/series-index", component: SeriesIndex },
  { path: "/series/moynaq", component: MoynaqView },
  { path: "/series/melilla", component: MelillaView },
  { path: "/series/brutalism", component: BrutalismView },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
