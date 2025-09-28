<script setup lang="ts">
import NavBar from "./components/NavBar.vue";
</script>

<template>
  <div>
    <nav-bar />
    <router-view />
  </div>
</template>

<style scoped>
.main-view {
  margin-top: 50px;
}
</style>
