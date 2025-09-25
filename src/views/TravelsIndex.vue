<script setup lang="ts">
import { TRIPS_DESCRIPTIONS } from "../assets/data";
import GalleryIndex from "../components/GalleryIndex.vue";
</script>

<template>
  <gallery-index category="travels" :series-descriptions="TRIPS_DESCRIPTIONS" />
</template>
