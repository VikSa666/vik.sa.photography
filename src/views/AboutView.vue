<script setup lang="ts">
import { SELF_PORTRAITS_SERIES } from "../assets/data/series/self-portraits";
import GalleryItem from "../components/image/GalleryItem.vue";
</script>

<template>
  <div class="about-page">
    <h1>About</h1>
    <p>Hello! Welcome to my personal portfolio.</p>
    <gallery-item :image-data="SELF_PORTRAITS_SERIES.images[1]" />
    <p>
      I am an amateur film photographer. I got into photography when by first
      time an analog camera, a Nikon F70, came to me as a gift. Therefore, I
      started directly in the analog world, without any knowledge whatsoever.
    </p>
    <gallery-item :image-data="SELF_PORTRAITS_SERIES.images[2]" />
    <p>
      I started taking courses and learning how my cameras work and combined my
      passion for travelling with my new passion for analog photography.
    </p>
    <gallery-item :image-data="SELF_PORTRAITS_SERIES.images[3]" />
    <p>
      This site here is for collecting and organizing all my work in different
      series or other means of organization to not depend on social media only
      but expose my work to others.
    </p>
    <gallery-item :image-data="SELF_PORTRAITS_SERIES.images[4]" />
  </div>
</template>

<style scoped>
.about-page {
  margin-top: 5%;
  max-width: 50vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    color: black;
    font-family: "Lexend Peta", sans-serif;
    font-weight: 200;
    font-size: 3.5rem;
  }

  p {
    text-align: left;
  }

  .gallery-item {
    width: 50%;
  }
}
</style>
