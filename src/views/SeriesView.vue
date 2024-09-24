<script setup lang="ts">
import { useRoute } from "vue-router";
import ImageGallery from "../components/ImageGallery.vue";

const route = useRoute();
const folder = route.params.folder;
console.log(folder);
const title = route.params.title;
</script>
<template>
  <div>
    <image-gallery :folder="`series/${folder}`" :title="title"></image-gallery>
  </div>
</template>
