<script setup lang="ts">
import { ImageSeries, Image } from "@/types";
import GalleryItem from "./image/GalleryItem.vue";
import FullSize from "./image/FullSize.vue";
import { ref } from "vue";
import { Ref } from "vue";
import { onMounted } from "vue";

const props = defineProps<{
  series: ImageSeries;
  columns: number;
}>();

const lightboxVisible = ref(false);
const selectedImageIndex: Ref<number | undefined> = ref(undefined);

function openLightbox(imageIndex: number) {
  selectedImageIndex.value = imageIndex;
  lightboxVisible.value = true;
  document.body.classList.add("no-scroll");
}

function closeLightbox() {
  selectedImageIndex.value = undefined;
  lightboxVisible.value = false;
  document.body.classList.remove("no-scroll");
}

/**
 * Shuffle algorithm taken from <https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array>
 * @param imageArray Array to be shuffle
 */
function shuffle(imageArray: Image[]) {
  let currentIndex = imageArray.length;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [imageArray[currentIndex], imageArray[randomIndex]] = [
      imageArray[randomIndex],
      imageArray[currentIndex],
    ];
  }
}

onMounted(() => {
  if (props.series.randomize) {
    shuffle(props.series.images);
  }
});
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
    <div v-else class="gallery" :style="{ '--columns': props.columns }">
      <gallery-item
        v-for="(image, index) in props.series.images"
        :image-data="image"
        @open-lightbox="openLightbox(index)"
      />
    </div>
    <full-size
      v-if="lightboxVisible"
      :image-to-start-index="selectedImageIndex"
      :images="props.series.images"
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
  column-count: var(--columns); /* Two columns */
  column-gap: 16px; /* Space between the columns */
}

@media screen and (max-width: 700px) {
  .gallery {
    column-count: 1; /* Wrap into one column */
  }
}
</style>
