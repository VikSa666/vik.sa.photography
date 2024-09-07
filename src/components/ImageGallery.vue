<script setup lang="ts">
import { ref, onMounted } from "vue";
import { supabase } from "../supabase/supabaseClient"; // Adjust path if necessary

const props = defineProps<{
  folderName: string;
}>();

// Variables
const images = ref<string[]>([]);

// Function to fetch images from the folder
const fetchImages = async () => {
  const { data, error } = await supabase.storage
    .from("photography")
    .list(props.folderName);
  if (error) {
    console.error("Error fetching files:", error.message);
  } else {
    if (data && data.length > 0) {
      console.log(data);
      images.value = data.map((file: any) => {
        console.log(file);
        const publicUrl = supabase.storage
          .from("photography")
          .getPublicUrl(`${props.folderName}/${file.name}`).data.publicUrl;
        console.log("Public URL:", publicUrl); // Log the URLs
        return publicUrl!;
      });
    } else {
      console.log("No files found in the folder.");
    }
  }
};

// Fetch images on mount
onMounted(() => {
  fetchImages();
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
</style>
