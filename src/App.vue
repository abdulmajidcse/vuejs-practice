<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <div class="main">
    <RouterView />
  </div>
</template>

<style scoped>
header {
  margin: 10px;
  padding: 10px;
}

nav a {
  padding: 10px;
}

div.main {
  margin: 0 10px;
}
</style>
