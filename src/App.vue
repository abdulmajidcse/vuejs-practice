<script setup lang="ts">
import FrontendFooter from './components/frontend/FrontendFooter.vue'
import FrontendHeader from './components/frontend/FrontendHeader.vue'
</script>

<template>
  <FrontendHeader />
  <main class="min-h-[80dvh] container mx-auto">
    <RouterView />
  </main>
  <FrontendFooter />
</template>
