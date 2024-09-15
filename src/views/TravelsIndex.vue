<template>
  <div class="series-page">
    <div class="series-container">
      <div
        v-for="(series, index) in seriesList"
        :key="series.name"
        class="series-item"
      >
        <div class="image-container">
          <img
            :src="imageToShowURL[index]"
            alt="series.name"
            class="series-image"
          />
          <div class="overlay">
            <div class="text-container">
              <h2 class="series-title">{{ series.name }}</h2>
              <p class="series-description">{{ series.description }}</p>
              <router-link class="see-more" :to="`travels/${series.folder}`"
                >See more →</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { supabase } from "../supabase/supabaseClient";
import { SeriesDescription } from "../types";
import { onMounted, ref } from "vue";

const seriesList: SeriesDescription[] = [
  {
    name: "Georgia",
    description: "My first travel with a camera.",
    folder: "georgia",
    image: "travel/georgia/main-horizontal.jpeg",
  },
  {
    name: "Moldova and Transnistria",
    description: "A photo series of the least visited country in Europe.",
    folder: "moldavia",
    image: "travel/moldova/main-horizontal.jpeg",
  },
  {
    name: "New York City",
    description: "A collection of photos from the Big Apple.",
    folder: "ny",
    image: "travel/ny/main-horizontal.jpeg",
  },
  {
    name: "Nador, Melilla and Oujda",
    description: "Discover the unknown cities of Morocco.",
    folder: "nador",
    image: "travel/nador/main-horizontal.jpeg",
  },
  {
    name: "Uzbekistan",
    description: "Discover the remains of the Silk Road.",
    folder: "uzbekistan",
    image: "travel/uzbekistan/main-horizontal.jpeg",
  },
  {
    name: "Central Europe",
    description:
      "A journey through the cities of Berlin, Dresden, Prague, Krakow and Warsaw.",
    folder: "interrail",
    image: "travel/interrail/main-horizontal.jpeg",
  },
  {
    name: "Temples of Siem Reap",
    description: "A photo series of the temples of Angkor.",
    folder: "siemreap",
    image: "travel/siemreap/main-horizontal.jpeg",
  },
  {
    name: "Vietnam",
    description: "A trip through the country of the ascending dragon.",
    folder: "vietnam",
    image: "travel/vietnam/main-horizontal.jpeg",
  },
  {
    name: "Bangkok",
    description: "A photo series of the capital of Thailand.",
    folder: "bangkok",
    image: "travel/bangkok/main-horizontal.jpeg",
  },
];

const imageToShowURL = ref<string[]>([]);

const fetchSeriesImages = async () => {
  seriesList.forEach(async (series) => {
    const data = await supabase.storage
      .from("photography")
      .getPublicUrl(series.image);

    if (data) {
      imageToShowURL.value.push(data.data.publicUrl);
    } else {
      console.log("No files found in the folder.");
    }
  });
};

onMounted(() => {
  fetchSeriesImages();
});
</script>

<style scoped>
.series-page {
  text-align: center;
}

.series-container {
  display: flex;
  flex-direction: column;
  justify-items: center;
}

.series-item {
  position: relative;
  width: 100%;
  transition: transform 0.3s ease;
}

.image-container {
  position: relative;
  height: 50vh;
  overflow: hidden;
}

.series-image {
  width: 110%; /* Slightly wider than the container */
  position: relative;
  top: 50%; /* Moves the image down by 50% of its height */
  left: 50%; /* Moves the image right by 50% of its width */
  transform: translate(
    -50%,
    -50%
  ); /* Ensures the center of the image is aligned to the center of the container */
}

.overlay {
  position: absolute;
  top: 0;
  right: 0;
  width: 50%; /* Takes up the right half of the image */
  height: 100%;
  background: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 40px 20px;
  box-sizing: border-box;
  opacity: 0; /* Initially hidden */
  transition: opacity 0.3s ease;
}

.text-container {
  text-align: right;
  color: white;
}

.series-title {
  font-size: 2.5rem;
  font-weight: bold;
  margin: 0;
}

.series-description {
  font-size: 1.2rem;
  margin-top: 10px;
}

.see-more {
  color: white;
  font-size: 1.2rem;
}

.see-more:hover {
  cursor: pointer;
  border-bottom: 2px white solid;
  font-weight: 600;
}

.image-container:hover .overlay {
  opacity: 1;
}
</style>
