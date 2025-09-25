<script setup lang="ts">
import { useRoute } from "vue-router";
import ImageGallery from "../components/ImageGallery.vue";
import { computed } from "vue";
import { SERIES_DATA } from "../assets/data";

const route = useRoute();
const slug = route.params.slug;
const series = computed(() =>
  SERIES_DATA.find((series) => series.slug == slug)
);
</script>
<template>
  <div>
    <image-gallery v-if="series" :series="series"></image-gallery>
  </div>
</template>
