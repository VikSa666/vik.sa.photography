<script setup lang="ts">
import NavBar from "./components/NavBar.vue";
</script>

<template>
  <div>
    <nav-bar />
    <div class="main-view"><router-view /></div>
  </div>
</template>

<style scoped>
.main-view {
  margin-top: 50px;
}
</style>
