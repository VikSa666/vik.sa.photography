import { Image, type ImageSeries } from "../../../../types";
import PostUrssImages from "./post-urss.json";

const coverImageIndex = PostUrssImages.findIndex(
  (im: Image) =>
    im.publicUrl ===
    "https://res.cloudinary.com/dyyvaakw8/image/upload/v1758877492/9A805811-320A-4443-8BD0-F103E70EF62E_1_105_c_p1bfiz.jpg"
);

export const POST_URSS_SERIES: ImageSeries = {
  name: "USSR Legacy",
  description:
    "Burtalist landmarks, abandoned research laboratories, abandoned resorts, housing projects, blok architecture... the USSR left us many interesting places",
  slug: "post-urss",
  images: PostUrssImages,
  randomize: true,
  coverImageIndex: coverImageIndex ?? 0,
};
