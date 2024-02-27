<script setup>
import axios from 'axios'
import { computed, onMounted, ref } from 'vue'
import { FwbCard, FwbAlert } from 'flowbite-vue'
import { useRoute } from 'vue-router'
import { dummyJsonApi } from '@/helpers/urls'

const route = useRoute()

const product = ref({})

const isError = ref(false)

const errorMessage = ref('')

const hideErrorAlert = computed(() => ({ hidden: !isError.value }))
const hiddenProductDetails = computed(() => ({ hidden: isError.value }))

onMounted(async () => {
  try {
    // get all products
    const response = await axios.get(`${dummyJsonApi}/products/${route.params.id}`)
    product.value = response.data
  } catch (error) {
    isError.value = true
    // check error
    if (axios.isAxiosError(error)) {
      errorMessage.value = error.message
    } else {
      errorMessage.value = 'Something is wrong! Please, try again later!'
    }
  }
})
</script>

<template>
  <h2 class="mb-4">Product Details</h2>

  <div :class="hideErrorAlert">
    <fwb-alert icon type="danger" class="mb-4">
      {{ errorMessage }}
    </fwb-alert>
  </div>

  <div class="mb-8 flex flex-col items-center" :class="hiddenProductDetails">
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
