import { type ImageSeries } from "../../../../types";
import SelfPortraitsImages from "./self-portraits.json";

export const SELF_PORTRAITS_SERIES: ImageSeries = {
  name: "USSR Legacy",
  description:
    "Burtalist landmarks, abandoned research laboratories, abandoned resorts, housing projects, blok architecture... the USSR left us many interesting places",
  slug: "post-urss",
  images: SelfPortraitsImages,
  randomize: false,
  coverImageIndex: 0,
};
