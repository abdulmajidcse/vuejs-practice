<script setup>
import axios from 'axios'
import { onMounted, ref } from 'vue'
import { FwbCard } from 'flowbite-vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const product = ref({})

onMounted(async () => {
  try {
    // get all products
    const response = await axios.get(`https://dummyjson.com/products/${route.params.id}`)
    product.value = response.data
  } catch (error) {
    // check error
    if (axios.isAxiosError(error)) {
      console.log(error.message)
    } else {
      console.log('unexpected error')
    }
    console.log(error)
  }
})
</script>

<template>
  <h2 class="mb-4">Latest products!</h2>

  <div class="mb-8 flex flex-col items-center">
    <fwb-card :img-alt="product.title" :img-src="product.thumbnail" variant="image">
      <div class="p-5">
        <p class="text-sm font-bold text-green-400">TK {{ product.price }}</p>
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {{ product.title }}
        </h5>
        <p class="font-normal text-gray-700 dark:text-gray-400">
          {{ product.description }}
        </p>
      </div>
    </fwb-card>
  </div>
</template>
