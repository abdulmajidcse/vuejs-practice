<script setup>
import { useCounterStore } from '@/stores/counter'
import { onMounted, onUpdated } from 'vue'

const store = useCounterStore()

onMounted(() => {
  console.log(store.count)
})

onUpdated(() => {
  console.log(store.count)
})
</script>

<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
