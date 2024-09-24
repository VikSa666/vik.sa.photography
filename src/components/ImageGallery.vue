<script setup lang="ts">
import { ref, onMounted } from "vue";
import { fetchImages } from "../fetchImages";
import { useScrollAnimation } from "../composables/useScrollAnimation";

const props = defineProps<{
  title: string;
  folder: string;
}>();

// Variables
const images = ref<string[]>([]);
const loaded = ref(false);
const loadedImages = ref(0);
const loadedPercentage = ref(0);

const onImageLoad = () => {
  loadedImages.value++;
  loadedPercentage.value = Math.floor(
    (loadedImages.value / images.value.length) * 100
  );
  if (loadedImages.value === images.value.length - 1) {
    loaded.value = true;
  }
};

const { elementsRefs } = useScrollAnimation();

// Fetch images on mount
onMounted(() => {
  fetchImages(props.folder).then((data) => {
    if (data) images.value = data;
    else console.log("No images found in the folder ", props.folder);
  });
});
</script>

<template>
  <h1 class="title">{{ props.title }}</h1>
  <div class="loading-page" v-if="!loaded">
    <div class="spinner"></div>
    <div class="loading-percentage">{{ loadedPercentage }}%</div>
  </div>
  <div v-if="images.length === 0">No images found in the folder.</div>
  <div v-else class="gallery">
    <div class="gallery-item" v-for="(image, index) in images" :key="index">
      <img
        class="scroll-effect"
        :src="image"
        :ref="(el) => (elementsRefs[index] = el as HTMLImageElement)"
        alt="Image"
        @load="onImageLoad"
      />
    </div>
  </div>
</template>

<style scoped>
@import "../scroll.css"; /* Import the scroll effect CSS */

.title {
  margin-top: 6rem;
  margin-bottom: 2rem;
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--text-color);
}

.loading-page {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  z-index: 999;
}

.spinner {
  width: 50px;
  height: 50px;
  border: 5px solid rgba(0, 0, 0, 0.1);
  border-top-color: #000000; /* Black color for the spinner */
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.loading-percentage {
  margin-top: 20px;
  font-size: 18px;
  color: #000000; /* Black text color */
}

.gallery {
  column-count: 2; /* Two columns */
  column-gap: 16px; /* Space between the columns */
  padding: 16px; /* Optional padding around the gallery */
}

.gallery-item {
  break-inside: avoid; /* Prevent images from being split across columns */
}

.gallery-item img {
  width: 100%;
  display: block;
  margin-bottom: 16px;
}

@media screen and (max-width: 700px) {
  .gallery {
    column-count: 1; /* Wrap into one column */
  }
}
</style>
