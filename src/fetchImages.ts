import { Series } from "./types";

// Function to fetch images from the folder
const fetchImages = async (path: string): Promise<string[]> => {
  const data = [];

  console.warn("No images to fetch, fetching default image");
  data.push(
    "https://res.cloudinary.com/dyyvaakw8/image/upload/v1758554957/2_j2p7ga.jpg"
  );
  return data;
};

export { fetchImages };
