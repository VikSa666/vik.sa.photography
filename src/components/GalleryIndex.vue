<script setup lang="ts">
import { supabase } from "../supabase/supabaseClient";
import { onMounted, ref } from "vue";
import { SeriesDescription } from "../types";
import { useScrollAnimation } from "../composables/useScrollAnimation";

const { elementsRefs } = useScrollAnimation();

const props = defineProps<{
  seriesList: SeriesDescription[];
  category: string;
}>();

const imageToShowURL = ref<string[]>([]);

const fetchSeriesImages = async () => {
  props.seriesList.forEach(async (series) => {
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

<template>
  <div class="series-page">
    <div class="series-container">
      <div
        v-for="(series, index) in seriesList"
        :key="series.name"
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
              <h2 class="series-title">{{ series.name }}</h2>
              <p class="series-description">{{ series.description }}</p>
              <router-link
                class="see-more"
                :to="`${category}/${series.folder}/${series.name}`"
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
