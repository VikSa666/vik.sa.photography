import { createMemoryHistory, createRouter } from "vue-router";

import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import MoynaqView from "../views/series/MoynaqView.vue";
import MelillaView from "../views/series/MelillaView.vue";
import BrutalismView from "../views/series/BrutalismView.vue";
import SeriesIndex from "../views/SeriesIndex.vue";
import TravelsIndex from "../views/TravelsIndex.vue";
import NadorView from "../views/travels/NadorView.vue";
import UzbekistanView from "../views/travels/UzbekistanView.vue";
import NYView from "../views/travels/NyView.vue";
import SiemReapView from "../views/travels/SiemreapView.vue";
import InterrailView from "../views/travels/InterrailView.vue";
import MoldovaView from "../views/travels/MoldovaView.vue";
import VietnamView from "../views/travels/VietnamView.vue";
import BangkokView from "../views/travels/BangkokView.vue";
import GeorgiaView from "../views/travels/GeorgiaView.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/about", component: AboutView },
  { path: "/series-index", component: SeriesIndex },
  { path: "/series/moynaq", component: MoynaqView },
  { path: "/series/melilla", component: MelillaView },
  { path: "/series/brutalism", component: BrutalismView },
  { path: "/travel-index", component: TravelsIndex },
  { path: "/travels/nador", component: NadorView },
  { path: "/travels/uzbekistan", component: UzbekistanView },
  { path: "/travels/ny", component: NYView },
  { path: "/travels/siemreap", component: SiemReapView },
  { path: "/travels/interrail", component: InterrailView },
  { path: "/travels/moldavia", component: MoldovaView },
  { path: "/travels/vietnam", component: VietnamView },
  { path: "/travels/interrail", component: InterrailView },
  { path: "/travels/georgia", component: GeorgiaView },
  { path: "/travels/bangkok", component: BangkokView },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
