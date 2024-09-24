<script setup lang="ts">
import GalleryIndex from "../components/GalleryIndex.vue";

const seriesList = [
  {
    name: "Georgia",
    description: "My first travel with a camera.",
    folder: "georgia",
    image: "travel/georgia/main-horizontal.jpeg",
  },
  {
    name: "Moldova and Transnistria",
    description: "A photo series of the least visited country in Europe.",
    folder: "moldavia",
    image: "travel/moldova/main-horizontal.jpeg",
  },
  {
    name: "New York City",
    description: "A collection of photos from the Big Apple.",
    folder: "ny",
    image: "travel/ny/main-horizontal.jpeg",
  },
  {
    name: "Nador, Melilla and Oujda",
    description: "Discover the unknown cities of Morocco.",
    folder: "nador",
    image: "travel/nador/main-horizontal.jpeg",
  },
  {
    name: "Uzbekistan",
    description: "Discover the remains of the Silk Road.",
    folder: "uzbekistan",
    image: "travel/uzbekistan/main-horizontal.jpeg",
  },
  {
    name: "Central Europe",
    description:
      "A journey through the cities of Berlin, Dresden, Prague, Krakow and Warsaw.",
    folder: "interrail",
    image: "travel/interrail/main-horizontal.jpeg",
  },
  {
    name: "Temples of Siem Reap",
    description: "A photo series of the temples of Angkor.",
    folder: "siemreap",
    image: "travel/siemreap/main-horizontal.jpeg",
  },
  {
    name: "Vietnam",
    description: "A trip through the country of the ascending dragon.",
    folder: "vietnam",
    image: "travel/vietnam/main-horizontal.jpeg",
  },
  {
    name: "Bangkok",
    description: "A photo series of the capital of Thailand.",
    folder: "bangkok",
    image: "travel/bangkok/main-horizontal.jpeg",
  },
];
</script>

<template>
  <gallery-index category="travels" :series-list="seriesList" />
</template>
