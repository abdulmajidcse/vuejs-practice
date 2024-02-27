<script setup>
import LoadingSkeleton from './components/LoadingSkeleton.vue'
import FrontendFooter from './components/frontend/FrontendFooter.vue'
import FrontendHeader from './components/frontend/FrontendHeader.vue'
import { useLoadingStore } from './stores/loading'

const loading = useLoadingStore()
</script>

<template>
  <LoadingSkeleton v-show="loading.isLoading" />
  <FrontendHeader />
  <main class="min-h-[80dvh] container mx-auto px-3 sm:py-0">
    <RouterView />
  </main>
  <FrontendFooter />
</template>
