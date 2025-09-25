<script lang="ts" setup>
import { ref } from "vue";
import { Image } from "../../types";
import ExpandIcon from "../../icons/ExpandIcon.vue";
import InfoItem from "./InfoItem.vue";

interface Props {
  imageData: Image;
}
const props = defineProps<Props>();

interface Emits {
  (e: "openLightbox", args: Image): void;
}
const emit = defineEmits<Emits>();

function openFullSize() {
  emit("openLightbox", props.imageData);
}
</script>

<template>
  <div class="gallery-item">
    <img :src="imageData.publicUrl" :alt="props.imageData.info?.title" />
    <div class="overlay">
      <div class="overlay-top-menu">
        <button class="expand-button" @click.stop="openFullSize">
          <expand-icon />
        </button>
      </div>
      <div v-if="props.imageData.info" class="image-info">
        <info-item :content="props.imageData.info.description" />
        <info-item label="Camera" :content="props.imageData.info.camera" />
        <info-item label="Roll" :content="props.imageData.info.filmRoll" />
        <info-item
          v-if="props.imageData.info.developer === props.imageData.info.scanner"
          label="Developer and scanner"
          :content="props.imageData.info.developer"
        />
        <template v-else>
          <info-item
            label="Developer"
            :content="props.imageData.info.developer"
          />
          <info-item label="Scanner" :content="props.imageData.info.scanner" />
        </template>
        <info-item
          :content="`${props.imageData.info.location}, ${props.imageData.info.date}`"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.gallery-item {
  position: relative;
  break-inside: avoid; /* Prevent images from being split across columns */
}

.gallery-item img {
  width: 100%;
  display: block;
  margin-bottom: 16px;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  /* 100% but without 5% of each padding */
  width: 100%;
  /* Needed bc of .gallery-item img having margin-bottom */
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  opacity: 0;
  transition: opacity 0.5s ease;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .overlay-top-menu {
    display: flex;
    flex-direction: row-reverse;
  }

  .image-info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
    height: 50%;
    padding-left: 5%;
    padding-bottom: 5%;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.8)
    );
  }
}

.gallery-item:hover .overlay {
  opacity: 1;
}

.expand-button {
  background-color: transparent;
  border: none;
  cursor: pointer;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 16px;
  transition: background-color 0.3s ease;
}

.expand-button:hover {
  background-color: rgba(0, 0, 0, 0.2);
}

button:focus,
button:focus-visible {
  background-color: rgba(0, 0, 0, 0.4);
  outline: none;
}
</style>
