<script setup>
import LoadingSkeleton from './components/LoadingSkeleton.vue'
import FrontendFooter from './components/frontend/FrontendFooter.vue'
import FrontendHeader from './components/frontend/FrontendHeader.vue'
import { useLoadingStore } from './stores/loading'
import { Notivue, Notification, materialTheme } from 'notivue'

const loading = useLoadingStore()
</script>

<template>
  <Notivue v-slot="item">
    <Notification :item="item" :theme="materialTheme" />
  </Notivue>

  <LoadingSkeleton v-show="loading.isLoading" />
  <FrontendHeader />
  <main class="min-h-[80dvh] container mx-auto px-3 sm:py-0">
    <RouterView />
  </main>
  <FrontendFooter />
</template>
