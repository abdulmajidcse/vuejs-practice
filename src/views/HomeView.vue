<script setup>
import { useCounterStore } from '@/stores/counter'
import { onMounted, onUpdated } from 'vue'

const store = useCounterStore()

onMounted(() => {
  console.log(store.count)
})

onUpdated(() => {
  console.log('Counter 2X: ', store.doubleCount)
})
</script>

<template>
  <main>
    <h2>Home Page</h2>
    <button @click="store.increment">++</button><span>{{ store.count }}</span
    ><button @click="store.decrement">--</button>
  </main>
</template>
