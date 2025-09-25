<script setup lang="ts">
import { useScrollAnimation } from "../composables/useScrollAnimation";
import { ImageSeries } from "@/types";
import GalleryItem from "./image/GalleryItem.vue";
import FullSize from "./image/FullSize.vue";
import { ref } from "vue";
import { Ref } from "vue";

const props = defineProps<{
  series: ImageSeries;
}>();

const lightboxVisible = ref(false);
const selectedImageUrl: Ref<string | undefined> = ref(undefined);

function openLightbox(imageUrl: string) {
  selectedImageUrl.value = imageUrl;
  lightboxVisible.value = true;
}

function closeLightbox() {
  selectedImageUrl.value = undefined;
  lightboxVisible.value = false;
}
</script>

<template>
  <div class="image-gallery">
    <div class="header">
      <h1>{{ props.series.name }}</h1>
      <p>{{ props.series.description }}</p>
    </div>
    <div v-if="props.series.images.length === 0">
      No images found in the folder.
    </div>
    <div v-else class="gallery">
      <gallery-item
        v-for="(image, index) in props.series.images"
        :image-data="image"
        @open-lightbox="openLightbox(image.publicUrl)"
      />
    </div>
    <full-size
      v-if="lightboxVisible"
      :image-url="selectedImageUrl"
      @close="closeLightbox"
    />
  </div>
</template>

<style scoped>
@import "../scroll.css"; /* Import the scroll effect CSS */

.image-gallery {
  margin: 5vh 5vw;
}

.header {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
  margin-bottom: 5%;
}

.header h1 {
  font-family: "Lexend Peta", sans-serif;
  font-weight: 100;
}

.header p {
  font-family: "Roboto Mono", monospace;
}

.gallery {
  column-count: 2; /* Two columns */
  column-gap: 16px; /* Space between the columns */
}

@media screen and (max-width: 700px) {
  .gallery {
    column-count: 1; /* Wrap into one column */
  }
}
</style>
