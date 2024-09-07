<template>
  <div class="series">
    <h1>The Aral Sea</h1>
    <image-gallery folder-name="moynaq"></image-gallery>
  </div>
</template>

<script setup lang="ts">
import ImageGallery from "../../components/ImageGallery.vue";
</script>

<style scoped>
.series {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
