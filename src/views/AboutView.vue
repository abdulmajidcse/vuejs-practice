<script setup>
import { ref, watch } from 'vue'
import { FwbButton } from 'flowbite-vue'

const count = ref(0)

const message = ref('I love VueJS!')

function greeting(event, greet) {
  alert(greet)
  alert(message.value)
  // `event` is the native DOM event
  if (event) {
    alert(event.target.tagName)
  }
}

watch(count, (newCount, oldCount) => {
  console.log(newCount)
  console.log(oldCount)
})
</script>

<template>
  <div class="about">
    <h1 class="my-4">Hello, about page</h1>

    <div class="grid grid-cols-2 gap-3">
      <fwb-button gradient="blue" @click="count++">Click me - {{ count }}</fwb-button>

      <fwb-button gradient="purple" @click="greeting($event, 'Welcome')">Open Message</fwb-button>
    </div>
  </div>
</template>
