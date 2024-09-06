<script setup lang="ts">
import { ref, onMounted } from "vue";
import { supabase } from "./supabase/supabaseClient"; // Adjust path if necessary

// Variables
const images = ref<string[]>([]);
const folderName = "moynaq"; // Change this to the folder you want to access

// Function to fetch images from the folder
const fetchImages = async () => {
  const { data, error } = await supabase.storage
    .from("photography")
    .list(folderName, { limit: 100 });
  if (error) {
    console.error("Error fetching files:", error.message);
  } else {
    if (data && data.length > 0) {
      console.log(data);
      images.value = data.map((file: any) => {
        console.log(file);
        const publicUrl = supabase.storage
          .from("photography")
          .getPublicUrl(`${folderName}/${file.name}`).data.publicUrl;
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
  <div>
    <h1>Image Gallery</h1>
    <div v-if="images.length === 0">No images found in the folder.</div>
    <div v-else>
      <div v-for="(image, index) in images" :key="index">
        <h3>Image {{ index + 1 }}</h3>
        <img
          :src="image"
          alt="Image"
          style="max-width: 300px; margin-bottom: 10px"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Add styles here if needed */
</style>
