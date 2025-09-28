<script lang="ts" setup>
import { ref, computed, onMounted, watch } from "vue";
import { Image } from "../../types";
import LeftArrowIcon from "../../icons/LeftArrowIcon.vue";
import RightArrowIcon from "../../icons/RightArrowIcon.vue";

interface Props {
  imageToStartIndex?: number;
  images: Image[];
}
const props = defineProps<Props>();

interface Emits {
  (e: "close"): void;
}
const emit = defineEmits<Emits>();

const currentIndex = ref(props.imageToStartIndex ?? 0);
const showingImage = computed(() => props.images[currentIndex.value]);

const nextImage = () => {
  currentIndex.value = (currentIndex.value + 1) % props.images.length;
};
const prevImage = () => {
  currentIndex.value =
    (currentIndex.value - 1 + props.images.length) % props.images.length;
};

const lightbox = ref();

onMounted(() => {
  if (lightbox.value) {
    lightbox.value.focus();
  }
});

function onKeydown(key: KeyboardEvent) {
  console.log(key.key);
  if (key.key === "ArrowRight" || key.key === "Enter") {
    nextImage();
  } else if (key.key === "ArrowLeft") {
    prevImage();
  } else if (key.key === "Escape") {
    emit("close");
  }
}
</script>

<template>
  <div
    ref="lightbox"
    class="lightbox"
    @mousedown.self="emit('close')"
    tabindex="0"
    @keydown="onKeydown"
  >
    <button @click.stop="prevImage"><left-arrow-icon /></button>
    <img
      :src="showingImage.publicUrl"
      alt="Full size"
      @click.self="$emit('close')"
    />
    <button @click.stop="nextImage" ref="nextButton">
      <right-arrow-icon />
    </button>
  </div>
</template>

<style scoped>
.lightbox {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  flex-direction: row;
  justify-items: center;
  align-items: center;
  justify-content: space-between;
  z-index: 999;
  overflow: auto;
}

.lightbox img {
  max-width: 90%;
  max-height: 90%;
  object-fit: contain; /* To preserve natural ratio (source: chatgpt) */
}

.lightbox button {
  background-color: transparent;
  transition: background-color 0.5s ease;
  border: none;
  padding: 16px;
  margin: 5px;
  border-radius: 4px;
  cursor: pointer;
}

.lightbox button:hover {
  background-color: rgba(0, 0, 0, 0.5);
  transition: background-color 0.5s ease;
}

.lightbox button:focus,
button:focus-visible {
  outline: none;
}
</style>
