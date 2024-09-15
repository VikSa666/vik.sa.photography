<template>
  <h1>{{ $props.title }}</h1>
  <image-gallery :folder-name="props.folderName"></image-gallery>
</template>

<script setup lang="ts">
import ImageGallery from "../components/ImageGallery.vue";

const props = defineProps<{
  title: string;
  folderName: String;
}>();
</script>
