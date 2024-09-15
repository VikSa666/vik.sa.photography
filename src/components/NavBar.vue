<template>
  <nav class="navbar">
    <ul class="navbar-menu">
      <li><router-link to="/home">Home</router-link></li>
      <li><router-link to="/about">About</router-link></li>
      <li><router-link to="/series-index">Series</router-link></li>
      <li><router-link to="/travel-index">Travel</router-link></li>
    </ul>
  </nav>
</template>

<script setup lang="ts"></script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #333;
  color: white;
  display: flex;
  justify-content: center;
  z-index: 1000;
}

.navbar-menu {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 20px;
}

.navbar-menu li {
  position: relative;
}

.navbar-menu li a {
  display: block;
  padding: 14px 20px;
  color: white;
  text-decoration: none;
}

.navbar-menu li a:hover {
  background-color: #575757;
  cursor: pointer;
}
</style>
