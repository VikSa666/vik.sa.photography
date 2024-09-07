<script setup lang="ts">
import { ref, onMounted } from "vue";
import { fetchImages } from "../fetchImages";

const props = defineProps<{
  folderName: string;
}>();

// Variables
const images = ref<string[]>([]);

// Fetch images on mount
onMounted(() => {
  console.log(props.folderName);
  fetchImages(props.folderName).then((data) => {
    images.value = data;
  });
});
</script>

<template>
  <div v-if="images.length === 0">No images found in the folder.</div>
  <div v-else class="gallery">
    <div class="gallery-item" v-for="(image, index) in images" :key="index">
      <img :src="image" alt="Image" />
    </div>
  </div>
</template>

<style scoped>
.gallery {
  column-count: 2; /* Two columns */
  column-gap: 16px; /* Space between the columns */
  padding: 16px; /* Optional padding around the gallery */
}

.gallery-item {
  margin-bottom: 16px; /* Space between items vertically */
  break-inside: avoid; /* Prevent images from being split across columns */
}

.gallery-item img {
  width: 100%;
  display: block;
}

@media screen and (max-width: 600px) {
  .gallery {
    column-count: 1; /* Wrap into one column */
  }
}
</style>
