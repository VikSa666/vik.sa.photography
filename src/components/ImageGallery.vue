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
    if (data) images.value = data;
    else console.log("No images found in the folder ", props.folderName);
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
