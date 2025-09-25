export const FALLBACK_IMAGE_URL: string = "assets/1.jpg";

export interface ImageInfo {
  title: string;
  description: string;
  location: string;
  camera: string; // TODO: define enum with cameras
  filmRoll: string; // TODO: define enum with filmroll
  developer: string; // TODO: Type better
  scanner: string; // TODO: Type better
  date: string; // TODO: Type better
}

export interface Image {
  publicUrl: string;
  info?: ImageInfo;
}

export interface ImageSeries {
  name: string;
  description: string;
  slug: Series;
  images: Image[];
  coverImageIndex?: number;
}

export interface SeriesDescription {
  title: string;
  description: string;
  slug: Series;
  coverImage: Image;
}

export type Series = "moynaq" | "melilla" | "brutalism" | "none";
