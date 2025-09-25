<script setup lang="ts">
import { SERIES_DESCRIPTIONS } from "../assets/data";
import GalleryIndex from "../components/GalleryIndex.vue";
</script>

<template>
  <gallery-index category="series" :series-descriptions="SERIES_DESCRIPTIONS" />
</template>
