<script setup lang="ts">
import { SELF_PORTRAITS_SERIES } from "../assets/data/series/self-portraits";
import GalleryItem from "../components/image/GalleryItem.vue";
import FullSize from "../components/image/FullSize.vue";
import { ref } from "vue";

const selectedImageIndex = ref<number | undefined>(undefined);
const lightboxVisible = ref(false);

function openLightbox(imageIndex: number) {
  selectedImageIndex.value = imageIndex;
  lightboxVisible.value = true;
  document.body.classList.add("no-scroll");
}

function closeLightbox() {
  selectedImageIndex.value = undefined;
  lightboxVisible.value = false;
  document.body.classList.remove("no-scroll");
}
</script>

<template>
  <div class="about-page">
    <h1>About</h1>
    <p>Hello! Welcome to my personal portfolio.</p>
    <gallery-item
      :image-data="SELF_PORTRAITS_SERIES.images[1]"
      @open-lightbox="openLightbox(1)"
    />
    <p>
      I am an amateur film photographer. I got into photography when by first
      time an analog camera, a Nikon F70, came to me as a gift. Therefore, I
      started directly in the analog world, without any knowledge whatsoever.
    </p>
    <gallery-item
      :image-data="SELF_PORTRAITS_SERIES.images[2]"
      @open-lightbox="openLightbox(2)"
    />
    <p>
      I started taking courses and learning how my cameras work and combined my
      passion for travelling with my new passion for analog photography.
    </p>
    <gallery-item
      :image-data="SELF_PORTRAITS_SERIES.images[3]"
      @open-lightbox="openLightbox(3)"
    />
    <p>
      This site here is for collecting and organizing all my work in different
      series or other means of organization to not depend on social media only
      but expose my work to others.
    </p>
    <gallery-item
      :image-data="SELF_PORTRAITS_SERIES.images[4]"
      @open-lightbox="openLightbox(4)"
    />
  </div>
  <full-size
    v-if="lightboxVisible"
    :image-to-start-index="selectedImageIndex"
    :images="SELF_PORTRAITS_SERIES.images"
    @close="closeLightbox"
  />
</template>

<style scoped>
.about-page {
  margin-top: 5%;
  max-width: 50vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
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
