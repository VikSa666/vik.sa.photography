<template>
  <nav class="navbar">
    <ul class="navbar-menu">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/series-index">Series</router-link></li>
      <li><router-link to="/travels-index">Travels</router-link></li>
      <li><router-link to="/about">About</router-link></li>
    </ul>
    <div class="navbar-right"></div>
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
  justify-content: space-between;
  z-index: 2;
}

.navbar-menu {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  gap: 20px;
}

.navbar-right {
  display: flex;
  flex-direction: row;
  align-items: flex-end;
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
  transition: background-color 0.5s ease;
}

.navbar-menu li a:hover {
  background-color: #575757;
  cursor: pointer;
  transition: background-color 0.5s ease;
}
</style>
