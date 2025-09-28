<script setup lang="ts">
import { onMounted, ref } from "vue";
import { Image, SeriesDescription } from "../types";
import { useScrollAnimation } from "../composables/useScrollAnimation";

const { elementsRefs } = useScrollAnimation();

const props = defineProps<{
  seriesDescriptions: SeriesDescription[];
  category: string;
}>();

const imageToShowURL = ref<(string | undefined)[]>([]);

const fetchSeriesImages = () => {
  props.seriesDescriptions.forEach((series) => {
    imageToShowURL.value.push(series.coverImage.publicUrl);
  });
};

onMounted(() => {
  fetchSeriesImages();
});
</script>

<template>
  <div class="series-page">
    <div class="series-container">
      <div
        v-for="(series, index) in props.seriesDescriptions"
        :key="series.title"
        class="series-item"
      >
        <div
          class="image-container scroll-effect"
          :ref="(el) => (elementsRefs[index] = el as HTMLDivElement)"
        >
          <img
            :src="imageToShowURL[index]"
            alt="series.name"
            class="series-image"
          />
          <div class="overlay">
            <div class="text-container">
              <h2>{{ series.title }}</h2>
              <p class="series-description">{{ series.description }}</p>
              <router-link class="see-more" :to="`${category}/${series.slug}`"
                >See more →</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import "../scroll.css"; /* Import the scroll effect CSS */

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
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
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
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  h2 {
    font-family: "Lexend Peta", sans-serif;
    font-weight: 400;
    font-size: 3.5rem;
    /* font-weight: bold; */
    margin: 0;
  }
}

.series-description {
  font-size: 1rem;
  margin-top: 10px;
  max-width: 45%;
}

.see-more {
  color: white;
  font-size: 1.2rem;
  font-family: "Roboto Mono", monospace;
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
