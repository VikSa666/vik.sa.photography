import { SeriesDescription, type ImageSeries } from "../../types";
import { MOYNAQ_SERIES } from "./series/moynaq";
import { MELILLA_SERIES } from "./series/melilla";
import { POST_URSS_SERIES } from "./series/post-urss";

export const SERIES_DATA: ImageSeries[] = [
  MOYNAQ_SERIES,
  MELILLA_SERIES,
  POST_URSS_SERIES,
];

export const SERIES_DESCRIPTIONS: SeriesDescription[] = SERIES_DATA.map(
  (series: ImageSeries) => {
    return {
      title: series.name,
      description: series.description,
      slug: series.slug,
      coverImage: series.coverImageIndex
        ? series.images[series.coverImageIndex]
        : series.images[0],
    };
  }
);

export const TRIPS_DATA: ImageSeries[] = [];

export const TRIPS_DESCRIPTIONS: SeriesDescription[] = TRIPS_DATA.map(
  (series: ImageSeries) => {
    return {
      title: series.name,
      description: series.description,
      slug: series.slug,
      coverImage: series.coverImageIndex
        ? series.images[series.coverImageIndex]
        : series.images[0],
    };
  }
);
