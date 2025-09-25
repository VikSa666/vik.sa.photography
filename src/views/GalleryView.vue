<template>
  <h1>{{ $props.title }}</h1>
  <image-gallery :series="props.series"></image-gallery>
</template>

<script setup lang="ts">
import { ImageSeries } from "@/types";
import ImageGallery from "../components/ImageGallery.vue";

const props = defineProps<{
  title: string;
  series: ImageSeries;
}>();
</script>
