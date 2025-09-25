<script lang="ts" setup>
interface Props {
  imageUrl?: string;
}

const props = defineProps<Props>();
</script>

<template>
  <div class="lightbox" @click.self="$emit('close')">
    <img
      :src="
        props.imageUrl ??
        '../../assets/illustration-gallery-icon_53876-27002.jpg'
      "
      alt="Full size foto"
      @click.self="$emit('close')"
    />
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
  justify-items: center;
  align-items: center;
  justify-content: center;
  z-index: 3;
  overflow: auto;
}

.lightbox img {
  max-width: 95%;
  max-height: 95%;
  object-fit: contain; /* To preserve natural ratio (source: chatgpt) */
}
</style>
