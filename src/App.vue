<script setup>
import FrontendFooter from './components/frontend/FrontendFooter.vue'
import FrontendHeader from './components/frontend/FrontendHeader.vue'
</script>

<template>
  <FrontendHeader />
  <main class="min-h-[80dvh] container mx-auto px-3 sm:py-0">
    <RouterView />
  </main>
  <FrontendFooter />
</template>
