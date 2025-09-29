<script setup lang="ts">
import { useRoute } from "vue-router";
import ImageGallery from "../components/ImageGallery.vue";
import { computed } from "vue";
import { TRIPS_DATA } from "../assets/data";

const route = useRoute();
const slug = route.params.slug;
const travels = computed(() =>
  TRIPS_DATA.find((series) => series.slug == slug)
);
</script>
<template>
  <div>
    <image-gallery
      v-if="travels"
      :series="travels"
      :columns="3"
    ></image-gallery>
  </div>
</template>
