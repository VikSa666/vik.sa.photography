<script setup lang="ts">
import { ref, onMounted } from "vue";
import { supabase } from "./supabase/supabaseClient"; // Adjust path if necessary
import NavBar from "./components/NavBar.vue";

// Variables
const images = ref<string[]>([]);
const folderName = "moynaq"; // Change this to the folder you want to access

// Function to fetch images from the folder
const fetchImages = async () => {
  const { data, error } = await supabase.storage
    .from("photography")
    .list(folderName);
  if (error) {
    console.error("Error fetching files:", error.message);
  } else {
    if (data && data.length > 0) {
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
    <nav-bar />
    <div class="main-view"><router-view /></div>
  </div>
</template>

<style scoped>
.main-view {
  margin-top: 50px;
}
</style>
