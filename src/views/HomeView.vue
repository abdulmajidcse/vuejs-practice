<script setup>
import axios from 'axios'
import { onMounted, ref } from 'vue'
import { FwbCard } from 'flowbite-vue'
import { useRouter } from 'vue-router'

const productData = ref({})

const router = useRouter()

onMounted(async () => {
  try {
    // get all products
    const response = await axios.get('https://dummyjson.com/products')
    productData.value = response.data
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

  <div class="grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mb-8">
    <template v-for="product in productData.products" :key="`product-${product.id}`">
      <fwb-card
        :img-alt="product.title"
        :img-src="product.thumbnail"
        variant="image"
        class="hover:cursor-pointer"
        @click="router.push({ name: 'products.show', params: { id: product.id } })"
      >
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
    </template>
  </div>
</template>
