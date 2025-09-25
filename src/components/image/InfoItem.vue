<script lang="ts" setup>
interface Props {
  label?: string;
  content: string;
}

const props = defineProps<Props>();
</script>

<template>
  <p>
    <span v-if="label" class="label">{{ props.label }}</span
    ><span v-if="label">: </span>{{ props.content }}
  </p>
</template>

<style scoped>
p {
  font-family: "Roboto Mono", monospace;
  font-size: 0.85rem;
  margin: 0;

  .label {
    box-shadow: inset 0 -3px 0 white;
    padding-bottom: 3px; /* so underline doesn’t overlap text */
  }
}
</style>
