<script setup>
import { FwbSpinner } from 'flowbite-vue'
</script>

<template>
  <div class="h-[100dvh] w-full fixed top-0 left-0 z-[9999]">
    <div class="h-[100dvh] flex justify-center items-center">
      <div
        class="flex justify-center items-center gap-1 p-2 rounded-md shadow-md bg-white text-red-700 font-bold"
      >
        <fwb-spinner size="6" color="red" />
        <span>Please, wait...</span>
      </div>
    </div>
  </div>
</template>
