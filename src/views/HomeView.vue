<script setup lang="ts">
import { SELF_PORTRAITS_SERIES } from "../assets/data/series/self-portraits";

const firstImage =
  SELF_PORTRAITS_SERIES.images[SELF_PORTRAITS_SERIES.coverImageIndex ?? 0];
</script>

<template>
  <div class="home-page">
    <router-link to="/about"><h1>Víctor Santiago Blanco</h1></router-link>
    <router-link to="/about"><img :src="firstImage.publicUrl" /></router-link>
  </div>
</template>

<style scoped>
.home-page {
  max-width: 75vw;
  img {
    width: 50%;
  }
  h1 {
    color: inherit;
    font-family: "Lexend Peta", sans-serif;
    font-weight: 200;
    font-size: 3.5rem;
    a {
      color: inherit;
    }
  }
}
</style>
