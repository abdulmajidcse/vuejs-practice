<script setup>
import { FwbInput, FwbTextarea, FwbButton } from 'flowbite-vue'
import { ref } from 'vue'

const name = ref('')
const email = ref('')
const mobile = ref('')
const subject = ref('')
const message = ref('')

function handleSubmit() {
  console.log(name.value)
  console.log(email.value)
  console.log(mobile.value)
  console.log(subject.value)
  console.log(message.value)

  alert('Form Submitted!')
}
</script>

<template>
  <h2 class="my-4">Hello, contact page!</h2>

  <div class="p-4 border border-gray-600 rounded bg-slate-600 mb-8">
    <h3 class="mb-4 text-2xl text-white">Send your message!</h3>

    <form @submit.prevent="handleSubmit">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
        <fwb-input v-model="name" placeholder="Full Name" label="Full Name" />

        <fwb-input type="email" v-model="email" placeholder="Email Address" label="Email Address" />

        <fwb-input v-model="mobile" placeholder="Mobile Number" label="Mobile Number" />

        <fwb-input v-model="subject" placeholder="Subject" label="Subject" />

        <div class="col-span-2">
          <fwb-textarea
            v-model="message"
            :rows="4"
            label="Message"
            placeholder="Write your message..."
          />
        </div>
      </div>

      <fwb-button type="submit" gradient="blue" class="font-bold">Submit</fwb-button>
    </form>
  </div>
</template>
