<script setup>
import axios from 'axios'
import { onMounted, ref, computed } from 'vue'
import { FwbCard, FwbAlert } from 'flowbite-vue'
import { useRouter } from 'vue-router'
import { dummyJsonApi } from '@/helpers/urls'
import { useLoadingStore } from '@/stores/loading'

const productData = ref({})
const isError = ref(false)

const errorMessage = ref('')

const hideErrorAlert = computed(() => ({ hidden: !isError.value }))
const hiddenProductDetails = computed(() => ({
  hidden: isError.value || Object.keys(productData.value).length === 0
}))

const router = useRouter()

onMounted(async () => {
  const loading = useLoadingStore()
  loading.startLoading()

  try {
    // get all products
    const response = await axios.get(`${dummyJsonApi}/products`)
    productData.value = response.data
  } catch (error) {
    isError.value = true
    // check error
    if (axios.isAxiosError(error)) {
      errorMessage.value = 'Something is wrong! Please, try again later!'
    } else {
      errorMessage.value = 'Unexpected App Error!'
    }
  } finally {
    loading.stopLoading()
  }
})
</script>

<template>
  <h2 class="mb-4">Latest products!</h2>

  <div :class="hideErrorAlert">
    <fwb-alert icon type="danger" class="mb-4">
      {{ errorMessage }}
    </fwb-alert>
  </div>

  <div
    class="grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mb-8"
    :class="hiddenProductDetails"
  >
    <template v-for="product in productData.products" :key="`product-${product.id}`">
      <fwb-card
        :img-alt="product.title"
        :img-src="product.thumbnail"
        variant="image"
        class="hover:cursor-pointer card-img-wrapper"
        @click="router.push({ name: 'products.show', params: { id: product.id } })"
      >
        <div class="p-5">
          <p class="text-sm font-bold text-green-400">TK {{ product.price }}</p>
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {{ product.title }}
          </h5>
        </div>
      </fwb-card>
    </template>
  </div>
</template>

<style>
.card-img-wrapper img {
  object-fit: contain;
  width: auto;
  height: 300px;
  margin: 0 auto;
}
</style>
