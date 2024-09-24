<script setup lang="ts">
import GalleryIndex from "../components/GalleryIndex.vue";
const seriesList = [
  {
    name: "The Aral Sea",
    description: "An expedition to the disappearing Aral Sea in Uzbekistan.",
    folder: "moynaq",
    image: "series/moynaq/main-horizontal.jpeg",
  },
  {
    name: "The Fence",
    description: "A photo series about the fence in Melilla, Spain.",
    folder: "melilla",
    image: "series/melilla/main-horizontal.jpeg",
  },
  {
    name: "Brutalism Architecture",
    description: "A collection of brutalist architecture photos.",
    folder: "brutalism",
    image: "series/brutalism/main-horizontal.jpeg",
  },
  // Add more series here if needed
];
</script>

<template>
  <gallery-index category="series" :series-list="seriesList" />
</template>
