<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    color?: string;
  }>(),
  {
    color: "white",
  }
);
</script>
<template>
  <!-- Design from ChatGPT -->
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 48"
    fill="none"
    :stroke="props.color"
    stroke-width="3"
    stroke-linecap="round"
    stroke-linejoin="round"
    width="48"
    height="96"
  >
    <polyline points="18,4 6,24 18,44"></polyline>
  </svg>
</template>
