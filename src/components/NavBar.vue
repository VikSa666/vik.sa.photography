<template>
  <nav class="navbar">
    <ul class="navbar-menu">
      <li><router-link to="/home">Home</router-link></li>
      <li><router-link to="/about">About</router-link></li>
      <li class="dropdown">
        <span>Series</span>
        <ul class="dropdown-menu">
          <li><router-link to="/series/moynaq">Aral Sea</router-link></li>
          <li><router-link to="/series/melilla">The Fence</router-link></li>
          <li><router-link to="/series/brutalism">Brutalism</router-link></li>
        </ul>
      </li>
      <li class="dropdown">
        <span>Location</span>
        <ul class="dropdown-menu">
          <li>
            <router-link to="/location/location1">Location 1</router-link>
          </li>
          <li>
            <router-link to="/location/location2">Location 2</router-link>
          </li>
          <li>
            <router-link to="/location/location3">Location 3</router-link>
          </li>
        </ul>
      </li>
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
}

.dropdown:hover .dropdown-menu {
  display: block;
}

.dropdown-menu {
  display: none;
  position: absolute;
  background-color: #333;
  list-style-type: none;
  padding: 0;
  margin: 0;
  top: 100%;
  left: 0;
}

.dropdown-menu li {
  margin: 0;
}

.dropdown-menu li a {
  padding: 10px 20px;
}

.dropdown-menu li a:hover {
  background-color: #575757;
}
</style>
